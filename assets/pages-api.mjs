const randomUUID=()=>crypto.randomUUID();
const randomInt=(min,max)=>min+Math.floor(crypto.getRandomValues(new Uint32Array(1))[0]/4294967296*(max-min));
import * as rules from "./recovered/profile-rules.mjs";
import { Nt as seasonInfo, jt as score } from "./recovered/content-rules.mjs";

const storageKey="pokebonk-pages-store-v1";
const empty = () => ({
  account: {
    id: "00000000-0000-4000-8000-000000000001",
    name: "Invitado local",
    guest: true,
    token: "local-development",
  },
  profile: rules.createProfile("Invitado local"),
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
    throw Object.assign(Error('El almacenamiento del navegador no está disponible o está lleno. Permite el almacenamiento del sitio e inténtalo de nuevo.'),{status:400});
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
    if (token !== store.account.token) fail("Sesión local no válida", 401);
    return store.account;
  }
  if (route === "/auth/logout" && method === "POST") return {};
  if (route.startsWith("/auth/"))
    fail("La versión local solo admite invitados. El registro y el inicio de sesión requieren el backend original.", 501);
  if (token !== store.account.token) fail("Solo se aceptan sesiones de desarrollo local", 401);
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
      fail("Elige un compañero inicial (o ya tienes uno)");
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
    if (![1, 4, 7].includes(store.profile.starter)) fail("Primero elige un compañero inicial");
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
    if (!store.runs[match[1]]) fail("La partida local no existe", 404);
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
      fail("Resultado de partida no válido");
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
    if (!rules.buyLab(store.profile, body.id)) fail("No se cumplen los requisitos de la mejora");
    return profileResult();
  }
  if (route === "/items/buy" && method === "POST") {
    if (!rules.buyItem(store.profile, body.key)) fail("No se cumplen los requisitos del objeto");
    return profileResult();
  }
  if (route === "/items/archive" && method === "POST") {
    if (!rules.archiveItem(store.profile, body.key, body.off, () => true))
      fail("No se puede archivar este objeto");
    return profileResult();
  }
  if (route === "/quests/claim" && method === "POST") {
    if (!rules.claimQuest(store.profile, body.id)) fail("Logro sin completar o ya reclamado");
    return profileResult();
  }
  if (route === "/tasks/claim" && method === "POST") {
    if (!rules.claimTask(store.profile, body.period, body.slot, Date.now()))
      fail("Encargo sin completar o ya reclamado");
    return profileResult();
  }
  if (route === "/tasks/reroll" && method === "POST") {
    if (!rules.rerollTask(store.profile, body.period, body.slot, Date.now()))
      fail("No se pueden renovar los encargos");
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
    fail("Esta función depende del servicio en línea original; no está implementada en la versión local.", 501);
  fail(`API local no implementada: ${method} ${route}`, 501);
}
