const randomUUID=()=>crypto.randomUUID();
const randomInt=(min,max)=>min+Math.floor(crypto.getRandomValues(new Uint32Array(1))[0]/4294967296*(max-min));
import * as rules from "./recovered/profile-rules.mjs";
import { Nt as seasonInfo, jt as score } from "./recovered/content-rules.mjs";

const storageKey="pokebonk-pages-store-v1";
const empty = () => ({
  account: {
    id: "00000000-0000-4000-8000-000000000001",
    name: "本地游客",
    guest: true,
    token: "local-development",
  },
  profile: rules.createProfile("本地游客"),
  runs: {},
  finished: {},
});
let store;
try {store=JSON.parse(localStorage.getItem(storageKey));} catch {}
if(!store?.account||!store?.profile)store=empty();
const persist=()=>{
  const finished=Object.keys(store.finished);
  for(const id of finished.slice(0,-30)){delete store.finished[id];delete store.runs[id];}
  try { localStorage.setItem(storageKey,JSON.stringify(store)); } catch {
    throw Object.assign(Error('浏览器存储不可用或已满，请允许站点存储后重试。'),{status:400});
  }
};
const fail = (message, status = 400) => {
  throw Object.assign(Error(message), { status });
};
const profileResult = () => {
  rules.refreshTasks(store.profile, Date.now());
  persist();
  return { profile: store.profile };
};
const numeric = (x) => typeof x === "number" && Number.isFinite(x) && x >= 0;
export const account = () => store.account;
export function api(path, method, body = {}, token = "") {
  const url = new URL(path, "http://localhost");
  const route = url.pathname;
  if (route === "/status" && method === "GET")
    return {
      maintenance: { on: false },
      registration: { inviteOnly: false },
      season: seasonInfo(Date.now()),
      recovery: true,
    };
  if (route === "/news" && method === "GET") return [];
  if (route === "/auth/guest" && method === "POST") {
    persist();
    return store.account;
  }
  if (route === "/auth/me" && method === "GET") {
    if (token !== store.account.token) fail("本地会话无效", 401);
    return store.account;
  }
  if (route === "/auth/logout" && method === "POST") return {};
  if (route.startsWith("/auth/"))
    fail("本地还原版仅支持游客。注册和登录需要原始后端。", 501);
  if (token !== store.account.token) fail("仅接受本地开发会话", 401);
  if (route === "/profile" && method === "GET") return profileResult();
  if (route === "/profile/prefs" && method === "PUT") {
    for (const key of [
      "settings",
      "lastSpecies",
      "lastBiome",
      "avatar",
      "frame",
      "title",
      "skins",
    ])
      if (Object.hasOwn(body, key)) store.profile[key] = body[key];
    store.profile = rules.normalizeProfile(store.profile);
    return profileResult();
  }
  if (route === "/profile/starter" && method === "POST") {
    if (![1, 4, 7].includes(body.id) || store.profile.starter)
      fail("请选择初始伙伴，或已有初始伙伴");
    Object.assign(store.profile, {
      starter: body.id,
      lastSpecies: body.id,
      league: [body.id],
      unlocked: [body.id],
      seen: [1, 4, 7],
    });
    return profileResult();
  }
  if (route === "/runs" && method === "POST") {
    if (![1, 4, 7].includes(store.profile.starter)) fail("请先选择初始伙伴");
    const prior = Object.values(store.runs).find((run) => run.key === body.key);
    if (prior) return prior;
    const ticket = {
      id: randomUUID(),
      seed: randomInt(1, 2147483647),
      ranked: false,
      boosts: [],
      key: body.key,
    };
    store.runs[ticket.id] = ticket;
    persist();
    return ticket;
  }
  const match = route.match(/^\/runs\/([^/]+)\/(checkpoint|finish)$/);
  if (match && method === "POST") {
    if (!store.runs[match[1]]) fail("本地对局不存在", 404);
    if (match[2] === "checkpoint") return { ok: true, recovery: true };
    if (store.finished[match[1]]) return store.finished[match[1]];
    const result = body.result;
    if (
      !result ||
      !numeric(result.time) ||
      !numeric(result.kills) ||
      !numeric(result.damage) ||
      !numeric(result.tier) ||
      !numeric(result.stage) ||
      !numeric(result.bosses)
    )
      fail("无效对局结果");
    const p = store.profile;
    // Development substitute: original server validation/reward policy was not public.
    const progress = result.progress ?? {};
    for (const field of ["counters", "research"])
      for (const [key, value] of Object.entries(progress[field] ?? {}))
        if (/^[\w-]+$/.test(key) && numeric(value))
          p[field][key] = (p[field][key] ?? 0) + value;
    for (const field of ["seen", "league", "shinies", "forms"])
      p[field] = [
        ...new Set([
          ...p[field],
          ...(progress[field] ?? []).filter(
            (id) => Number.isInteger(id) && id >= 1 && id <= 1025,
          ),
        ]),
      ];
    p.unlocked = [...new Set([...p.unlocked, ...p.league])];
    p.counters.runs = (p.counters.runs ?? 0) + 1;
    p.counters.kills = (p.counters.kills ?? 0) + result.kills;
    p.counters.maxTime = Math.max(p.counters.maxTime ?? 0, result.time);
    const dust = Math.floor(result.time / 10);
    p.stardust += dust;
    p.totalStardust += dust;
    if (result.victory)
      p.biomes[result.biome] = Math.max(
        p.biomes[result.biome] ?? 0,
        result.tier + 1,
      );
    const record = {
      ...result,
      id: match[1],
      date: Date.now(),
      seed: store.runs[match[1]].seed,
      ranked: false,
      score: score(result),
    };
    delete record.progress;
    p.runs = [record, ...p.runs].slice(0, 50);
    const response = {
      profile: structuredClone(p),
      record,
      dust,
      recovery: true,
    };
    store.finished[match[1]] = response;
    persist();
    return response;
  }
  if (route === "/lab/buy" && method === "POST") {
    if (!rules.buyLab(store.profile, body.id)) fail("强化未满足条件");
    return profileResult();
  }
  if (route === "/items/buy" && method === "POST") {
    if (!rules.buyItem(store.profile, body.key)) fail("道具未满足条件");
    return profileResult();
  }
  if (route === "/items/archive" && method === "POST") {
    if (!rules.archiveItem(store.profile, body.key, body.off, () => true))
      fail("无法存档此道具");
    return profileResult();
  }
  if (route === "/quests/claim" && method === "POST") {
    if (!rules.claimQuest(store.profile, body.id)) fail("成就未完成或已领取");
    return profileResult();
  }
  if (route === "/tasks/claim" && method === "POST") {
    if (!rules.claimTask(store.profile, body.period, body.slot, Date.now()))
      fail("委托未完成或已领取");
    return profileResult();
  }
  if (route === "/tasks/reroll" && method === "POST") {
    if (!rules.rerollTask(store.profile, body.period, body.slot, Date.now()))
      fail("无法刷新委托");
    return profileResult();
  }
  if (route === "/leaderboard" && method === "GET")
    return { entries: [], me: null, players: 0, info: seasonInfo(Date.now()) };
  if (route === "/leaderboard/pokemon" && method === "GET")
    return { entries: [], boards: [], info: seasonInfo(Date.now()) };
  if (route.startsWith("/records") && method === "GET")
    return { entries: [], records: [], info: seasonInfo(Date.now()) };
  if (route === "/seasons/awards" && method === "GET")
    return { awards: [], total: 0 };
  if (route === "/friends" && method === "GET")
    return { friends: [], incoming: [], outgoing: [] };
  if (route === "/mail" && method === "GET") return { messages: [], unread: 0 };
  if (
    route.startsWith("/clans") ||
    route.startsWith("/players") ||
    route === "/feedback"
  )
    fail("此功能依赖原始线上服务；本地还原版未实现。", 501);
  fail(`本地 API 未实现：${method} ${route}`, 501);
}
