import {
  $ as l,
  A as u,
  At as d,
  B as f,
  Bt as p,
  C as m,
  Ct as h,
  D as g,
  Dt as _,
  E as v,
  Et as y,
  F as b,
  Ft as x,
  G as S,
  Gt as C,
  H as w,
  Ht as T,
  It as E,
  J as ee,
  Jt as te,
  K as ne,
  Kt as re,
  L as ie,
  Lt as ae,
  M as oe,
  Mt as se,
  N as ce,
  Nt as le,
  O as ue,
  Ot as de,
  P as fe,
  Pt as pe,
  Q as me,
  R as he,
  Rt as ge,
  S as _e,
  St as ve,
  T as ye,
  Tt as be,
  U as xe,
  Ut as Se,
  V as Ce,
  Vt as we,
  W as Te,
  Wt as Ee,
  X as De,
  Y as Oe,
  Yt as ke,
  Z as Ae,
  _ as je,
  _t as Me,
  at as Ne,
  b as Pe,
  bt as Fe,
  ct as Ie,
  d as Le,
  dt as Re,
  et as ze,
  f as Be,
  ft as Ve,
  g as He,
  gt as Ue,
  h as We,
  ht as Ge,
  it as Ke,
  j as qe,
  jt as Je,
  k as Ye,
  kt as Xe,
  l as Ze,
  lt as Qe,
  m as $e,
  mt as et,
  n as tt,
  nt,
  ot as rt,
  p as it,
  pt as at,
  qt as ot,
  rt as st,
  st as ct,
  tt as lt,
  u as ut,
  ut as dt,
  v as ft,
  vt as pt,
  w as mt,
  wt as ht,
  x as gt,
  xt as _t,
  y as vt,
  yt,
  z as bt,
  zt as xt,
} from "./content-rules.mjs";
var pg = [1, 4, 7];
var mg = () => ({ idx: 0, ids: [], prog: [], claimed: [], rerolls: 0 });
var hg = {
  master: 0.8,
  music: 0.5,
  sfx: 0.7,
  cries: 0.6,
  quality: `high`,
  aimMode: `auto`,
  sensitivity: 1,
  invertY: !1,
  damageNumbers: !0,
  floatText: !0,
  shakeOn: !0,
  screenShake: 1,
  fov: 70,
  showFps: !1,
  reduceFlashes: !1,
  pixel: 0,
  muteHidden: !0,
  hudScale: 1,
  hudOpacity: 1,
  showMinimap: !0,
  showLadder: !0,
  showToasts: !0,
  showStreak: !0,
  fxOpacity: 1,
  fixedStick: !1,
  padRumble: !0,
};
function gg(e) {
  return {
    v: 1,
    name: e,
    created: Date.now(),
    stardust: 0,
    totalStardust: 0,
    unlocked: [],
    league: [],
    starter: 0,
    forms: [],
    research: {},
    captured: {},
    seen: [],
    shinies: [],
    skins: [],
    lab: {},
    biomes: { forest: 0 },
    quests: {},
    counters: {},
    runs: [],
    best: {},
    times: {},
    kills: {},
    medals: {},
    endless: {},
    settings: { ...hg },
    lastSpecies: 4,
    lastBiome: `forest`,
    banished: [],
    itemsOwned: [],
    itemsOff: [],
    daily: mg(),
    weekly: mg(),
    dailyStreak: { last: 0, n: 0 },
    bag: {},
    avatar: ``,
    frame: ``,
    title: ``,
    cosmetics: [],
  };
}
function _g(e) {
  let t = { ...gg(e.name ?? `Entrenador`), ...e };
  if (
    ((t.settings = { ...hg, ...(e.settings ?? {}) }),
    Array.isArray(t.league) || (t.league = []),
    typeof e.starter != `number`)
  ) {
    t.starter = t.league.find((e) => pg.includes(e)) ?? 1;
    for (let e of pg)
      (t.unlocked.includes(e) || t.unlocked.push(e),
        t.league.includes(e) || t.league.push(e));
  }
  (Array.isArray(t.shinies) || (t.shinies = []),
    Array.isArray(t.skins) || (t.skins = []),
    (!t.times || typeof t.times != `object`) && (t.times = {}),
    (!t.medals || typeof t.medals != `object`) && (t.medals = {}),
    (!t.kills || typeof t.kills != `object`) && (t.kills = {}),
    (!t.endless || typeof t.endless != `object`) && (t.endless = {}));
  for (let e of [`daily`, `weekly`]) {
    let n = t[e];
    (!n ||
      typeof n != `object` ||
      !Array.isArray(n.ids) ||
      !Array.isArray(n.prog) ||
      !Array.isArray(n.claimed)) &&
      (t[e] = mg());
  }
  return (
    (!t.dailyStreak || typeof t.dailyStreak != `object`) &&
      (t.dailyStreak = { last: 0, n: 0 }),
    (!t.bag || typeof t.bag != `object`) && (t.bag = {}),
    Array.isArray(t.cosmetics) || (t.cosmetics = []),
    Array.isArray(t.itemsOwned) || (t.itemsOwned = []),
    Array.isArray(t.itemsOff) || (t.itemsOff = []),
    typeof t.avatar != `string` && (t.avatar = ``),
    typeof t.frame != `string` && (t.frame = ``),
    typeof t.title != `string` && (t.title = ``),
    Se(t.lastBiome) || (t.lastBiome = `forest`),
    t.league.length &&
      (!t.league.includes(t.lastSpecies) || !qe.has(t.lastSpecies)) &&
      (t.lastSpecies = t.league.find((e) => qe.has(e)) ?? t.league[0]),
    t
  );
}
var vg = (e) =>
  e.legendary || e.mythical ? 3 : Math.round(30 + Math.min(70, e.bst / 8));
var yg = [`rare-candy`, `lucky-egg`, `amulet-coin`];
function bg(e, t, n, r = `add`) {
  let i = e.counters;
  i[t] = r === `add` ? (i[t] ?? 0) + n : Math.max(i[t] ?? 0, n);
}
var xg = [144, 145, 146];
function Sg(e, t) {
  return t === `league`
    ? Ye(e.league.filter((e) => e !== 151))
    : t === `birds`
      ? xg.filter((t) => e.league.includes(t)).length
      : t.startsWith(`tier_`)
        ? (e.biomes[t.slice(5)] ?? 0)
        : (e.counters[t] ?? 0);
}
function Cg(e, t) {
  let n = qe.get(t);
  return n
    ? ue(n).map((t) => ({ ...t, value: Math.min(t.goal, Sg(e, t.counter)) }))
    : [];
}
function wg(e, t) {
  let n = qe.get(t);
  return n ? ue(n).every((t) => Sg(e, t.counter) >= t.goal) : !1;
}
function Tg(e, t) {
  let n = he.find((e) => e.id === t);
  if (!n) return !1;
  let r = e.lab[t] ?? 0;
  if (r >= n.max) return !1;
  let i = n.cost(r);
  return e.stardust < i ? !1 : ((e.stardust -= i), (e.lab[t] = r + 1), !0);
}
function Eg(e, t) {
  let n = yt.get(t);
  return !n ||
    e.itemsOwned.includes(t) ||
    (e.counters[n.counter] ?? 0) < n.goal ||
    e.stardust < n.price
    ? !1
    : ((e.stardust -= n.price), e.itemsOwned.push(t), !0);
}
function Dg(e, t, n, r) {
  if (!r(t)) return !1;
  let i = e.itemsOff.includes(t);
  return n
    ? i ||
      e.itemsOff.length >= nt(e.lab) ||
      (yt.has(t) && !e.itemsOwned.includes(t))
      ? !1
      : (e.itemsOff.push(t), !0)
    : i
      ? ((e.itemsOff = e.itemsOff.filter((e) => e !== t)), !0)
      : !1;
}
function Og(e, t) {
  let n = Ce.find((e) => e.id === t);
  return !n ||
    e.quests[n.id] ||
    Math.min(n.goal, e.counters[n.counter] ?? 0) < n.goal
    ? !1
    : ((e.quests[n.id] = 1),
      (e.stardust += n.reward),
      (e.totalStardust += n.reward),
      !0);
}
var kg = [`daily`, `weekly`];
function Ag(e, t) {
  for (let n of kg) {
    let r = Xe(n, t);
    (e[n].idx !== r || e[n].ids.length !== 3) &&
      (e[n] = {
        idx: r,
        ids: [0, 1, 2].map((e) => p(n, r, e).id),
        prog: [0, 0, 0],
        claimed: [0, 0, 0, 0],
        rerolls: 0,
      });
  }
}
function jg(e, t, n = 1) {
  e.bag[t] = Math.min(9, (e.bag[t] ?? 0) + n);
}
function Mg(e, t, n) {
  let r = e[t];
  if (n < 3) return { dust: Ae[t][n], items: [] };
  if (t === `weekly`) return { dust: 500, items: we(r.idx) };
  let i = e.dailyStreak,
    a = i.last === r.idx - 1 ? i.n + 1 : i.last === r.idx ? i.n : 1;
  return { dust: 50 * Math.min(5, a), items: [rt(r.idx)] };
}
function Ng(e, t, n) {
  let r = e[t];
  if (!Number.isInteger(n) || n < 0 || n > 3 || r.claimed[n]) return !1;
  if (n === 3)
    return r.claimed[0] === 1 && r.claimed[1] === 1 && r.claimed[2] === 1;
  let i = xt(r.ids[n]);
  return !!i && r.prog[n] >= i.goal;
}
function Pg(e, t, n, r) {
  if (!kg.includes(t) || (Ag(e, r), !Ng(e, t, n))) return !1;
  let i = e[t],
    a = Mg(e, t, n);
  ((i.claimed[n] = 1),
    n === 3 &&
      t === `daily` &&
      (e.dailyStreak = {
        last: i.idx,
        n: e.dailyStreak.last === i.idx - 1 ? e.dailyStreak.n + 1 : 1,
      }),
    n < 3 && bg(e, `tasks`, 1));
  for (let t of a.items) jg(e, t);
  return ((e.stardust += a.dust), (e.totalStardust += a.dust), !0);
}
function Fg(e, t, n, r) {
  if (!kg.includes(t) || !Number.isInteger(n) || n < 0 || n > 2) return !1;
  Ag(e, r);
  let i = e[t],
    a = xt(i.ids[n]);
  if (i.rerolls >= 1 || i.claimed[n] || (a && i.prog[n] >= a.goal)) return !1;
  let o = i.ids[n];
  for (let e = i.rerolls + 1; e < i.rerolls + 8 && i.ids.includes(o); e++)
    o = p(t, i.idx, n, e).id;
  return (
    !i.ids.includes(o) && ((i.ids[n] = o), (i.prog[n] = 0), i.rerolls++, !0)
  );
}
export {
  gg as createProfile,
  _g as normalizeProfile,
  Tg as buyLab,
  Eg as buyItem,
  Dg as archiveItem,
  Og as claimQuest,
  Ag as refreshTasks,
  Pg as claimTask,
  Fg as rerollTask,
};
