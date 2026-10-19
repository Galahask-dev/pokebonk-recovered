import { t as e, u as t } from "./i18n-DD1JTQ5D-mvc5u5vc.js";
var n = [
    {
      id: `forest`,
      name: t(`Bosque Verde`),
      desc: t(
        `Un bosque frondoso lleno de vida. Y de Pokémon que no quieren compartirlo.`,
      ),
      size: 360,
      types: [`grass`, `bug`, `normal`, `flying`],
      late: [`fairy`, `poison`],
      residents: [
        60, 54, 79, 118, 25, 100, 81, 74, 50, 27, 96, 63, 77, 58, 37, 56, 92,
      ],
      sky: [3838207, 11066623],
      fog: 10409215,
      fogNear: 45,
      fogFar: 170,
      light: 1,
      sun: 16773590,
      hemiGround: 6982218,
      ground: [7327562, 9099350, 11067504, 5945406],
      path: 14205066,
      cliff: [10127994, 8220258, 11904918],
      water: 0,
      waterColor: 3846399,
      props: [`tree`, `tree`, `pine`, `bush`, `rock`, `mushroom`],
      propDensity: 1,
      relief: { levels: 5, massifs: 2 },
      weather: [`clear`, `clear`, `rain`],
      bosses: [123, 127, 34],
      legendaries: [151],
      zones: [
        {
          name: t(`Tarde dorada`),
          sky: [4161496, 16766882],
          fog: 15912860,
          fogNear: 42,
          fogFar: 160,
          light: 0.97,
          sun: 16764810,
          hemiGround: 8026682,
          sunDir: [0.66, 0.72, 0.16],
          sunH: 0.3,
          tint: [1.07, 0.99, 0.85],
          clouds: [1.05, 0.93, 0.8],
          cover: 0.04,
          glow: 16757864,
          glowK: 0.5,
          stars: 0,
          motes: `leaves`,
        },
        {
          name: t(`Crepúsculo`),
          sky: [2895736, 16751226],
          fog: 11566236,
          fogNear: 36,
          fogFar: 140,
          light: 0.84,
          sun: 16752752,
          hemiGround: 3816026,
          sunDir: [0.74, 0.68, -0.12],
          sunH: 0.1,
          tint: [0.95, 0.9, 1.04],
          clouds: [1, 0.78, 0.88],
          cover: 0.06,
          glow: 16742984,
          glowK: 0.65,
          stars: 0.55,
          motes: `fireflies`,
        },
      ],
      guardians: [
        [123, 26, 55],
        [127, 62, 53],
        [34, 76, 59],
      ],
      totems: [
        [20, 47, 24, 17],
        [71, 18, 49, 115],
        [22, 36, 110, 114],
      ],
      summoners: [
        [12, 15],
        [30, 33],
        [103, 45],
      ],
      sanctuary: {
        name: t(`Santuario del Bosque`),
        arena: `forest`,
        heart: t(`Corazón del bosque`),
        pack: `sanctum`,
        legendaries: [151],
        shrine: `shrine`,
        portal: `sanct_portal`,
        color: 9109354,
        sky: [1923666, 9426616],
        fog: 6266506,
        fogNear: 34,
        fogFar: 120,
        light: 0.92,
        sun: 15400920,
        hemiGround: 2775610,
        music: { root: 57, scale: [0, 2, 3, 7, 9], bpm: 104, mood: `mystic` },
      },
      music: { root: 60, scale: [0, 2, 4, 7, 9], bpm: 112, mood: `bright` },
      tex: {
        top: [7128656, 8837218, 5811782],
        detail: `grass`,
        side: [10126448, 12626834, 6179904],
        lip: 6076490,
        path: [14204040, 9072720],
        leaf: 4102724,
        bark: 8016438,
        rock: 10131086,
        accent: 16743080,
        deco: [0, 1, 2, 3, 0, 1, 4, 5, 6, 10, 11, 12, 7],
      },
      unlock: t(`Disponible`),
    },
    {
      id: `desert`,
      name: t(`Desierto Rocoso`),
      desc: t(`Arena ardiente, cañones de roca y tormentas que ciegan.`),
      size: 340,
      types: [`ground`, `rock`, `fighting`],
      late: [`steel`, `fire`],
      residents: [
        23, 21, 84, 128, 115, 77, 52, 19, 41, 37, 58, 102, 54, 29, 32,
      ],
      sky: [6990056, 16771264],
      fog: 15916208,
      fogNear: 40,
      fogFar: 160,
      light: 1.1,
      sun: 16769712,
      hemiGround: 11569744,
      ground: [15782024, 15253616, 16178332, 14200928],
      path: 13146714,
      cliff: [13666896, 11563068, 14721128],
      water: null,
      waterColor: 4243664,
      props: [`cactus`, `rock`, `rock`, `deadtree`, `pillar`],
      propDensity: 0.7,
      weather: [`clear`, `sand`, `sun`],
      bosses: [28, 105, 149],
      legendaries: [146],
      zones: [
        {
          name: t(`Calima`),
          sky: [7906512, 16765596],
          fog: 15778958,
          fogNear: 32,
          fogFar: 132,
          light: 1.1,
          sun: 16765066,
          hemiGround: 11565632,
          sunDir: [0.6, 0.74, 0.22],
          sunH: 0.36,
          tint: [1.05, 0.99, 0.9],
          clouds: [1.05, 0.95, 0.85],
          cover: -0.08,
          glow: 16760944,
          glowK: 0.35,
          stars: 0,
          motes: `heat`,
        },
        {
          name: t(`Ocaso`),
          sky: [3812458, 16747090],
          fog: 14192762,
          fogNear: 36,
          fogFar: 140,
          light: 0.88,
          sun: 16170146,
          hemiGround: 6964312,
          sunDir: [0.74, 0.68, -0.1],
          sunH: 0.09,
          tint: [0.95, 0.92, 1.03],
          clouds: [1, 0.72, 0.72],
          cover: 0.02,
          glow: 16738864,
          glowK: 0.7,
          stars: 0.6,
          motes: `embers`,
        },
      ],
      guardians: [
        [28, 106, 85],
        [105, 68, 112],
        [31, 142, 149],
      ],
      totems: [
        [57, 95, 75],
        [107, 111, 141],
        [128, 78, 139],
      ],
      summoners: [
        [51, 75],
        [34, 75],
        [51, 34, 76],
      ],
      sanctuary: {
        name: t(`Santuario del Desierto`),
        arena: `desert`,
        heart: t(`Corazón del desierto`),
        pack: `ruins`,
        legendaries: [146],
        shrine: `ruin_altar`,
        portal: `ruin_portal`,
        color: 16747066,
        sky: [9062954, 16763018],
        fog: 14721136,
        fogNear: 34,
        fogFar: 125,
        light: 1.05,
        sun: 16765088,
        hemiGround: 9067056,
        music: {
          root: 50,
          scale: [0, 1, 4, 5, 7, 8, 10],
          bpm: 116,
          mood: `tense`,
        },
      },
      music: {
        root: 57,
        scale: [0, 1, 4, 5, 7, 8, 10],
        bpm: 104,
        mood: `tense`,
      },
      tex: {
        top: [15517828, 16177824, 14200940],
        detail: `sand`,
        side: [13137994, 15243874, 9062958],
        lip: 15254138,
        path: [14200960, 9068608],
        leaf: 14716986,
        bark: 10121288,
        rock: 12617306,
        accent: 16751178,
        deco: [7, 13, 9, 7, 13, 3],
      },
      unlock: t(`Completa el Bosque Verde`),
    },
    {
      id: `graveyard`,
      name: t(`Torre Lavanda`),
      desc: t(`Niebla, lápidas y susurros. Aquí los fantasmas no descansan.`),
      types: [`ghost`, `poison`, `dark`],
      late: [`psychic`],
      sky: [3811930, 10123976],
      fog: 8022682,
      fogNear: 25,
      fogFar: 120,
      light: 0.75,
      sun: 13152511,
      hemiGround: 3813456,
      ground: [6982250, 5929570, 8034936, 4876888],
      path: 9076848,
      cliff: [6972536, 5591146, 8419984],
      water: 0,
      waterColor: 6963392,
      props: [`grave`, `grave`, `deadtree`, `pillar`, `mushroom`],
      propDensity: 0.9,
      weather: [`fog`, `clear`, `rain`],
      bosses: [94, 110, 97],
      legendaries: [150],
      music: { root: 55, scale: [0, 2, 3, 7, 8], bpm: 92, mood: `mystic` },
      tex: {
        top: [6192736, 7245418, 5139542],
        detail: `moss`,
        side: [6972536, 9077914, 4209232],
        lip: 5929562,
        path: [9077908, 4077640],
        leaf: 4872776,
        bark: 4865594,
        rock: 8025224,
        accent: 11565823,
        deco: [0, 1, 9, 13, 6, 8, 2],
      },
      unlock: t(`Vence al guardián del Desierto Rocoso`),
    },
    {
      id: `volcano`,
      name: t(`Isla Volcán`),
      desc: t(
        `Ríos de lava y cenizas. Solo los más fuertes sobreviven al calor.`,
      ),
      types: [`fire`, `dragon`, `rock`],
      late: [`steel`, `dark`],
      sky: [9058858, 16756848],
      fog: 14191194,
      fogNear: 35,
      fogFar: 140,
      light: 0.95,
      sun: 16756864,
      hemiGround: 5909024,
      ground: [6969936, 5917250, 8022618, 4864564],
      path: 9068616,
      cliff: [3812908, 2761248, 5259322],
      water: -1,
      waterColor: 16734736,
      props: [`lavarock`, `rock`, `deadtree`, `crystal`],
      propDensity: 0.8,
      weather: [`ash`, `sun`, `clear`],
      bosses: [126, 78, 6],
      legendaries: [146],
      music: {
        root: 52,
        scale: [0, 1, 3, 5, 7, 8, 11],
        bpm: 128,
        mood: `tense`,
      },
      tex: {
        top: [5917254, 7232596, 3812908],
        detail: `ash`,
        side: [4076080, 5916736, 2234906],
        lip: null,
        path: [6967368, 2760220],
        leaf: 5925434,
        bark: 3811876,
        rock: 4865080,
        accent: 16742954,
        deco: [14, 7, 13, 8, 14, 9],
      },
      unlock: t(`Vence al guardián de Torre Lavanda`),
    },
    {
      id: `glacier`,
      name: t(`Glaciar Celeste`),
      desc: t(`Hielo eterno bajo auroras. El frío congela hasta los ataques.`),
      types: [`ice`, `water`, `psychic`],
      late: [`steel`, `fairy`, `dragon`],
      sky: [6986495, 15267583],
      fog: 14348543,
      fogNear: 40,
      fogFar: 150,
      light: 1.05,
      sun: 15267071,
      hemiGround: 9087176,
      ground: [16055295, 14873343, 16777215, 13427956],
      path: 11061472,
      cliff: [9089240, 6983872, 11061484],
      water: 0,
      waterColor: 5951743,
      props: [`snowpine`, `snowpine`, `crystal`, `rock`],
      propDensity: 0.85,
      weather: [`hail`, `clear`, `fog`],
      bosses: [131, 87, 91],
      legendaries: [144],
      music: { root: 62, scale: [0, 2, 4, 6, 9, 11], bpm: 96, mood: `calm` },
      tex: {
        top: [15267071, 16777215, 12113132],
        detail: `snow`,
        side: [8036560, 11061488, 4876960],
        lip: 16055295,
        path: [11060444, 6981800],
        leaf: 3045994,
        bark: 5917248,
        rock: 9087176,
        accent: 9103615,
        deco: [15, 8, 7, 15, 3],
      },
      unlock: t(`Vence al guardián de Isla Volcán`),
    },
    {
      id: `coast`,
      name: t(`Costa Tormenta`),
      desc: t(`Playas, arrecifes y tormentas eléctricas sobre el mar.`),
      types: [`water`, `electric`, `flying`],
      late: [`dragon`, `steel`],
      sky: [4881096, 13164784],
      fog: 11587816,
      fogNear: 40,
      fogFar: 160,
      light: 0.95,
      sun: 16773344,
      hemiGround: 6982304,
      ground: [15917736, 10147434, 15258776, 8045656],
      path: 14731408,
      cliff: [10132106, 8026736, 12105896],
      water: 0,
      waterColor: 2789608,
      props: [`palm`, `palm`, `coral`, `rock`, `bush`],
      propDensity: 0.8,
      weather: [`rain`, `clear`, `rain`],
      bosses: [130, 73, 99],
      legendaries: [145],
      music: {
        root: 59,
        scale: [0, 2, 4, 5, 7, 9, 11],
        bpm: 118,
        mood: `bright`,
      },
      tex: {
        top: [8703068, 10279022, 7124558],
        detail: `grass`,
        side: [13153424, 15258792, 9075290],
        lip: 8045656,
        path: [15786160, 11575408],
        leaf: 3844170,
        bark: 11042890,
        rock: 11052186,
        accent: 16765498,
        deco: [0, 1, 2, 4, 5, 7, 10, 12],
      },
      unlock: t(`Vence al guardián del Glaciar Celeste`),
    },
  ],
  r = (e) => n.find((t) => t.id === e) ?? n[0],
  i = {
    clear: { name: t(`Despejado`), boost: [], nerf: [] },
    rain: { name: t(`Lluvia`), boost: [`water`, `electric`], nerf: [`fire`] },
    sun: {
      name: t(`Sol abrasador`),
      boost: [`fire`, `grass`],
      nerf: [`water`],
    },
    sand: {
      name: t(`Tormenta de arena`),
      boost: [`rock`, `ground`, `steel`],
      nerf: [],
    },
    hail: { name: t(`Granizo`), boost: [`ice`], nerf: [] },
    fog: { name: t(`Niebla`), boost: [`ghost`, `dark`], nerf: [] },
    ash: {
      name: t(`Lluvia de ceniza`),
      boost: [`fire`, `dragon`],
      nerf: [`ice`],
    },
  },
  a = (e, t, n) => {
    let r = (n) => [(e >> n) & 255, (t >> n) & 255];
    return [16, 8, 0].reduce((e, t) => {
      let [i, a] = r(t);
      return e | (Math.round(i + (a - i) * n) << t);
    }, 0);
  };
function o(e, n) {
  let r = {
    name: t(`Mañana`),
    sky: e.sky,
    fog: e.fog,
    fogNear: e.fogNear,
    fogFar: e.fogFar,
    light: e.light,
    sun: e.sun,
    hemiGround: e.hemiGround,
    sunDir: [0.45, 0.8, 0.35],
    sunH: 0.77,
    tint: [1, 1, 1],
    clouds: [1, 1, 1],
    cover: 0,
    glow: 16760960,
    glowK: 0,
    stars: 0,
    motes: null,
  };
  if (n <= 1) return r;
  let i = n >= 3,
    o = i ? 0.5 : 0.35;
  return {
    ...(i
      ? {
          ...r,
          name: t(`Crepúsculo`),
          sky: [a(e.sky[0], 2894960, 0.55), a(e.sky[1], 16748656, o)],
          fog: a(e.fog, 10516632, 0.45),
          light: e.light * 0.86,
          sun: a(e.sun, 16748640, 0.6),
          hemiGround: a(e.hemiGround, 3816026, 0.5),
          sunDir: [0.74, 0.68, -0.12],
          sunH: 0.1,
          tint: [0.96, 0.91, 1.03],
          clouds: [1, 0.8, 0.88],
          glow: 16742984,
          glowK: 0.55,
          stars: 0.45,
          motes: `fireflies`,
        }
      : {
          ...r,
          name: t(`Tarde dorada`),
          sky: [a(e.sky[0], 4881104, 0.3), a(e.sky[1], 16765088, o)],
          fog: a(e.fog, 15779984, o),
          sun: a(e.sun, 16763008, 0.5),
          sunDir: [0.66, 0.72, 0.16],
          sunH: 0.3,
          tint: [1.04, 1, 0.92],
          clouds: [1.04, 0.95, 0.86],
          glow: 16757864,
          glowK: 0.3,
          motes: `pollen`,
        }),
    ...e.zones?.[n - 2],
  };
}
var s = {
    season: 1,
    name: t(`Temporada 1`),
    maxDex: 151,
    biomes: [`forest`, `desert`],
  },
  c = (e) => e > 0 && e <= s.maxDex,
  l = (e) => s.biomes.includes(e),
  u = (e) => e.filter(c),
  d = n.map((e) => e.id),
  f = [t(`Normal`), t(`Difícil`), t(`Pesadilla`)],
  ee = (e) => (n.find((t) => t.id === e)?.sanctuary ? 4 : 3),
  te = (e) => /^[A-Za-z0-9_\-ÁÉÍÓÚÜáéíóúüÑñ ]{3,16}$/.test(e.trim()),
  ne = new Set([
    `12345678`,
    `123456789`,
    `1234567890`,
    `87654321`,
    `11111111`,
    `00000000`,
    `password`,
    `password1`,
    `contraseña`,
    `contrasena`,
    `qwertyui`,
    `qwerty123`,
    `asdfghjk`,
    `abcd1234`,
    `1234abcd`,
    `pokemon1`,
    `pokemon123`,
    `pikachu1`,
    `pikachu123`,
    `pokebonk`,
    `pokebonk1`,
    `iloveyou`,
    `teamo123`,
  ]);
function re(e) {
  let n = e.trim();
  return n.length < 3
    ? t(`El nombre necesita al menos 3 caracteres.`)
    : n.length > 16
      ? t(`El nombre puede tener como mucho 16 caracteres.`)
      : te(n)
        ? /^invitado\b/i.test(n)
          ? t(`Ese nombre está reservado.`)
          : null
        : t(`Solo letras, números, espacios, guiones y guiones bajos.`);
}
function ie(e, n) {
  return n.length < 8
    ? t(`La contraseña debe tener al menos {n} caracteres.`, { n: 8 })
    : n.length > 200
      ? t(`La contraseña es demasiado larga.`)
      : e.trim() && n.toLowerCase().includes(e.trim().toLowerCase())
        ? t(`La contraseña no puede contener tu nombre.`)
        : ne.has(n.toLowerCase()) || /^(.)\1+$/.test(n)
          ? t(`Esa contraseña es demasiado fácil de adivinar.`)
          : null;
}
function ae(e) {
  if (!e) return 0;
  let t = +(e.length >= 8);
  return (
    e.length >= 12 && t++,
    /[a-zñ]/i.test(e) && /\d/.test(e) && t++,
    ((/[a-z]/.test(e) && /[A-Z]/.test(e)) || /[^A-Za-z0-9ñÑ]/.test(e)) && t++,
    t
  );
}
var p = (e, t) => (n) => Math.round((e * t ** +n) / 5) * 5,
  oe = [
    {
      id: `slot-move`,
      name: t(`4.º movimiento`),
      desc: t(`Desbloquea el cuarto hueco de movimiento.`),
      icon: `tm`,
      max: 1,
      cost: () => 1500,
    },
    {
      id: `slot-vit`,
      name: t(`Huecos de vitamina`),
      desc: t(`+1 hueco de vitamina por nivel.`),
      icon: `protein`,
      max: 2,
      cost: (e) => [1200, 3e3][e] ?? 3e3,
    },
    {
      id: `reroll`,
      name: t(`Refrescar`),
      desc: t(`+1 uso de Refrescar ofertas por partida.`),
      icon: `escape-rope`,
      max: 6,
      cost: p(120, 1.4),
    },
    {
      id: `skip`,
      name: t(`Saltar`),
      desc: t(`+1 uso de Saltar mejora por partida (te da Pokédólares).`),
      icon: `x-speed`,
      max: 6,
      cost: p(80, 1.4),
    },
    {
      id: `banish`,
      name: t(`Desterrar`),
      desc: t(
        `+1 uso de Desterrar: elimina una opción del resto de la partida.`,
      ),
      icon: `cleanse-tag`,
      max: 6,
      cost: p(150, 1.4),
    },
    {
      id: `choice4`,
      name: t(`Cuarta opción`),
      desc: t(`Las subidas de nivel ofrecen 4 opciones.`),
      icon: `lucky-egg`,
      max: 1,
      cost: () => 3e3,
    },
    {
      id: `dmg`,
      name: t(`Entrenamiento`),
      desc: t(`+4% de daño por nivel.`),
      icon: `protein`,
      max: 8,
      cost: p(100, 1.4),
      stat: `damage`,
      per: 0.04,
    },
    {
      id: `hp`,
      name: t(`Resistencia`),
      desc: t(`+8 PS máximos por nivel.`),
      icon: `hp-up`,
      max: 8,
      cost: p(100, 1.4),
      stat: `maxHp`,
      per: 8,
    },
    {
      id: `spd`,
      name: t(`Agilidad`),
      desc: t(`+2.5% velocidad por nivel.`),
      icon: `carbos`,
      max: 6,
      cost: p(120, 1.45),
      stat: `moveSpeed`,
      per: 0.025,
    },
    {
      id: `xp`,
      name: t(`Estudio`),
      desc: t(`+5% experiencia por nivel.`),
      icon: `lucky-egg`,
      max: 6,
      cost: p(120, 1.45),
      stat: `xpGain`,
      per: 0.05,
    },
    {
      id: `gold`,
      name: t(`Comercio`),
      desc: t(`+8% Pokédólares por nivel.`),
      icon: `amulet-coin`,
      max: 6,
      cost: p(100, 1.45),
      stat: `gold`,
      per: 0.08,
    },
    {
      id: `luck`,
      name: t(`Fortuna`),
      desc: t(`+5 suerte por nivel.`),
      icon: `star-piece`,
      max: 6,
      cost: p(140, 1.45),
      stat: `luck`,
      per: 5,
    },
    {
      id: `magnet`,
      name: t(`Magnetismo`),
      desc: t(`+0.6 rango de recogida por nivel.`),
      icon: `magnet`,
      max: 5,
      cost: p(80, 1.45),
      stat: `pickupRange`,
      per: 0.6,
    },
    {
      id: `regen`,
      name: t(`Restos`),
      desc: t(`+0.2 regeneración por nivel.`),
      icon: `leftovers`,
      max: 5,
      cost: p(120, 1.45),
      stat: `regen`,
      per: 0.2,
    },
    {
      id: `armor`,
      name: t(`Coraza`),
      desc: t(`+2 armadura por nivel.`),
      icon: `iron`,
      max: 6,
      cost: p(120, 1.45),
      stat: `armor`,
      per: 2,
    },
    {
      id: `revive`,
      name: t(`Revivir`),
      desc: t(`Empiezas con un Revivir Máximo.`),
      icon: `max-revive`,
      max: 1,
      cost: () => 5e3,
    },
    {
      id: `research`,
      name: t(`Investigación`),
      desc: t(`+25% progreso de investigación por nivel.`),
      icon: `poke-ball`,
      max: 4,
      cost: p(250, 1.6),
    },
    {
      id: `party`,
      name: t(`Equipo de apoyo`),
      desc: t(`+1 hueco para Alfas capturados (de 2 a 3).`),
      icon: `great-ball`,
      max: 1,
      cost: () => 3500,
    },
    {
      id: `archive`,
      name: t(`Archivo`),
      desc: t(
        `+3 huecos del Archivo: los objetos archivados no salen en las Poké Balls ni en la tienda.`,
      ),
      icon: `everstone`,
      max: 3,
      cost: (e) => [800, 1600, 3200][e] ?? 3200,
    },
  ],
  se = (e) => 2 + (e.party ?? 0),
  m = (e, t, n, r, i) => ({ key: e, counter: t, goal: n, price: r, req: i }),
  h = [
    m(`repel`, `runs`, 3, 150, t(`Juega 3 partidas.`)),
    m(`white-flute`, `runs`, 6, 150, t(`Juega 6 partidas.`)),
    m(
      `binding-band`,
      `reactions`,
      100,
      200,
      t(`Provoca 100 reacciones elementales.`),
    ),
    m(
      `metronome`,
      `maxTime`,
      600,
      200,
      t(`Sobrevive 10 minutos en una partida.`),
    ),
    m(`smooth-rock`, `kills`, 2e3, 250, t(`Consigue 2.000 bajas.`)),
    m(`adrenaline-orb`, `alphas`, 5, 250, t(`Derrota a 5 Pokémon Alfa.`)),
    m(
      `macho-brace`,
      `maxLevel`,
      25,
      350,
      t(`Alcanza el nivel 25 en una partida.`),
    ),
    m(
      `focus-band`,
      `maxTime`,
      900,
      350,
      t(`Sobrevive 15 minutos en una partida.`),
    ),
    m(`kings-rock`, `bosses`, 3, 400, t(`Derrota a 3 guardianes.`)),
    m(`eviolite`, `evolutions`, 5, 400, t(`Evoluciona 5 veces.`)),
    m(`black-sludge`, `poisoned`, 400, 400, t(`Envenena a 400 Pokémon.`)),
    m(`lum-berry`, `chests`, 30, 450, t(`Abre 30 Poké Balls de objetos.`)),
    m(`stick`, `crits`, 1500, 500, t(`Asesta 1.500 golpes críticos.`)),
    m(`shed-shell`, `dodges`, 200, 500, t(`Esquiva 200 golpes.`)),
    m(`razor-fang`, `alphas`, 15, 550, t(`Derrota a 15 Pokémon Alfa.`)),
    m(`cell-battery`, `kills`, 1e4, 600, t(`Consigue 10.000 bajas.`)),
    m(`focus-sash`, `wins`, 1, 900, t(`Completa un mapa.`)),
    m(`comet-shard`, `chests`, 100, 900, t(`Abre 100 Poké Balls de objetos.`)),
    m(`fire-stone`, `burned`, 600, 1e3, t(`Quema a 600 Pokémon.`)),
    m(`thunder-stone`, `paralyzed`, 600, 1e3, t(`Paraliza a 600 Pokémon.`)),
    m(`ice-stone`, `frozen`, 300, 1e3, t(`Congela a 300 Pokémon.`)),
    m(`leaf-stone`, `alphaCaught`, 5, 1e3, t(`Captura 5 Alfas de apoyo.`)),
    m(`protector`, `bosses`, 10, 1100, t(`Derrota a 10 guardianes.`)),
    m(
      `electirizer`,
      `speciesPlayed`,
      6,
      1100,
      t(`Juega con 6 especies distintas.`),
    ),
    m(
      `revive`,
      `maxTime`,
      1500,
      1200,
      t(`Sobrevive 25 minutos en una partida.`),
    ),
    m(`griseous-orb`, `legendaries`, 1, 1200, t(`Derrota a un legendario.`)),
    m(`reaper-cloth`, `kills`, 25e3, 1400, t(`Consigue 25.000 bajas.`)),
    m(
      `moon-stone`,
      `maxLevel`,
      40,
      2200,
      t(`Alcanza el nivel 40 en una partida.`),
    ),
    m(`silver-wing`, `alphaCaught`, 15, 2500, t(`Captura 15 Alfas de apoyo.`)),
    m(`sun-stone`, `bosses`, 25, 2500, t(`Derrota a 25 guardianes.`)),
    m(`adamant-orb`, `wins`, 3, 2800, t(`Completa 3 mapas.`)),
    m(`lustrous-orb`, `legendaries`, 3, 2800, t(`Derrota a 3 legendarios.`)),
    m(`soul-dew`, `evolutions`, 30, 3e3, t(`Evoluciona 30 veces.`)),
    m(
      `dawn-stone`,
      `mapsWon`,
      2,
      3200,
      t(`Completa el Bosque Verde y el Desierto Rocoso.`),
    ),
    m(`rainbow-wing`, `legendaries`, 6, 3500, t(`Derrota a 6 legendarios.`)),
  ],
  g = new Map(h.map((e) => [e.key, e])),
  ce = (e) => 3 * (e.archive ?? 0),
  le = (e, t) =>
    (!g.has(t) || e.itemsOwned.includes(t)) && !e.itemsOff.includes(t),
  ue = [
    {
      id: `k100`,
      name: t(`Primeros pasos`),
      desc: t(`Consigue 100 bajas.`),
      counter: `kills`,
      goal: 100,
      reward: 50,
    },
    {
      id: `k1000`,
      name: t(`Veterano`),
      desc: t(`Consigue 1.000 bajas.`),
      counter: `kills`,
      goal: 1e3,
      reward: 150,
    },
    {
      id: `k10000`,
      name: t(`Leyenda viva`),
      desc: t(`Consigue 10.000 bajas.`),
      counter: `kills`,
      goal: 1e4,
      reward: 600,
    },
    {
      id: `evo1`,
      name: t(`¡Está evolucionando!`),
      desc: t(`Evoluciona durante una partida.`),
      counter: `evolutions`,
      goal: 1,
      reward: 60,
    },
    {
      id: `evo10`,
      name: t(`Maestro evolutivo`),
      desc: t(`Evoluciona 10 veces.`),
      counter: `evolutions`,
      goal: 10,
      reward: 200,
    },
    {
      id: `cap1`,
      name: t(`¡Atrapado!`),
      desc: t(`Captura tu primer Pokémon salvaje.`),
      counter: `captures`,
      goal: 1,
      reward: 100,
    },
    {
      id: `cap10`,
      name: t(`Coleccionista`),
      desc: t(`Captura 10 Pokémon.`),
      counter: `captures`,
      goal: 10,
      reward: 300,
    },
    {
      id: `cap50`,
      name: t(`Investigador Pokémon`),
      desc: t(`Captura 50 Pokémon.`),
      counter: `captures`,
      goal: 50,
      reward: 1e3,
    },
    {
      id: `boss1`,
      name: t(`Cazador de guardianes`),
      desc: t(`Derrota a un guardián.`),
      counter: `bosses`,
      goal: 1,
      reward: 80,
    },
    {
      id: `leg1`,
      name: t(`Encuentro legendario`),
      desc: t(`Derrota a un legendario.`),
      counter: `legendaries`,
      goal: 1,
      reward: 250,
    },
    {
      id: `win1`,
      name: t(`Campeón regional`),
      desc: t(`Completa un mapa.`),
      counter: `wins`,
      goal: 1,
      reward: 200,
    },
    {
      id: `win2`,
      name: t(`Explorador`),
      desc: t(`Completa el Bosque Verde y el Desierto Rocoso.`),
      counter: `mapsWon`,
      goal: 2,
      reward: 500,
      regions: 2,
    },
    {
      id: `win6`,
      name: t(`Campeón de todas las regiones`),
      desc: t(`Completa los 6 mapas.`),
      counter: `mapsWon`,
      goal: 6,
      reward: 1500,
      regions: 6,
    },
    {
      id: `react50`,
      name: t(`Químico elemental`),
      desc: t(`Provoca 50 reacciones elementales.`),
      counter: `reactions`,
      goal: 50,
      reward: 100,
    },
    {
      id: `react1000`,
      name: t(`Alquimista`),
      desc: t(`Provoca 1.000 reacciones elementales.`),
      counter: `reactions`,
      goal: 1e3,
      reward: 400,
    },
    {
      id: `chest20`,
      name: t(`Buscatesoros`),
      desc: t(`Abre 20 Poké Balls de objetos.`),
      counter: `chests`,
      goal: 20,
      reward: 80,
    },
    {
      id: `lvl30`,
      name: t(`Nivel 30`),
      desc: t(`Alcanza el nivel 30 en una partida.`),
      counter: `maxLevel`,
      goal: 30,
      reward: 120,
    },
    {
      id: `time20`,
      name: t(`Superviviente`),
      desc: t(`Sobrevive 20 minutos en total en una partida.`),
      counter: `maxTime`,
      goal: 1200,
      reward: 150,
    },
    {
      id: `runs10`,
      name: t(`Constancia`),
      desc: t(`Juega 10 partidas.`),
      counter: `runs`,
      goal: 10,
      reward: 100,
    },
    {
      id: `alpha10`,
      name: t(`Domador de Alfas`),
      desc: t(`Derrota 10 Pokémon Alfa.`),
      counter: `alphas`,
      goal: 10,
      reward: 150,
    },
    {
      id: `species20`,
      name: t(`Variedad`),
      desc: t(`Juega con 20 especies distintas.`),
      counter: `speciesPlayed`,
      goal: 20,
      reward: 300,
    },
    {
      id: `ally1`,
      name: t(`Nuevo compañero`),
      desc: t(`Captura tu primer Alfa de apoyo.`),
      counter: `alphaCaught`,
      goal: 1,
      reward: 120,
    },
    {
      id: `ally25`,
      name: t(`Domador de Alfas`),
      desc: t(`Captura 25 Alfas de apoyo.`),
      counter: `alphaCaught`,
      goal: 25,
      reward: 500,
    },
    {
      id: `tasks20`,
      name: t(`Siempre dispuesto`),
      desc: t(`Completa 20 encargos diarios o semanales.`),
      counter: `tasks`,
      goal: 20,
      reward: 300,
    },
    {
      id: `end10`,
      name: t(`Aguante`),
      desc: t(`Sobrevive 10 minutos en Supervivencia.`),
      counter: `endlessTime`,
      goal: 600,
      reward: 120,
    },
    {
      id: `end30`,
      name: t(`Contra la marea`),
      desc: t(`Sobrevive 30 minutos en Supervivencia.`),
      counter: `endlessTime`,
      goal: 1800,
      reward: 400,
    },
    {
      id: `endmt`,
      name: t(`Noche sin fin`),
      desc: t(`Derrota a Mewtwo en Supervivencia (minuto 45).`),
      counter: `endlessMewtwo`,
      goal: 1,
      reward: 800,
    },
  ],
  _ = {
    daily: [
      [
        {
          id: `d-kills`,
          name: t(`Limpieza del bosque`),
          desc: t(`Derrota a 500 Pokémon salvajes.`),
          metric: `kills`,
          goal: 500,
        },
        {
          id: `d-runs`,
          name: t(`Doble turno`),
          desc: t(`Juega 2 partidas.`),
          metric: `runs`,
          goal: 2,
        },
        {
          id: `d-chests`,
          name: t(`Buscador de tesoros`),
          desc: t(`Abre 6 Poké Balls de objetos.`),
          metric: `chests`,
          goal: 6,
        },
        {
          id: `d-rocks`,
          name: t(`Golpe Roca`),
          desc: t(`Rompe 8 rocas de oro.`),
          metric: `rocks`,
          goal: 8,
        },
        {
          id: `d-time`,
          name: t(`Resistencia`),
          desc: t(`Sobrevive 8 minutos en una partida.`),
          metric: `time`,
          goal: 480,
        },
        {
          id: `d-gold`,
          name: t(`Bolsillos llenos`),
          desc: t(`Consigue 1.200 ₽ en partidas.`),
          metric: `gold`,
          goal: 1200,
        },
      ],
      [
        {
          id: `d-alphas`,
          name: t(`Caza mayor`),
          desc: t(`Derrota o captura 2 Pokémon Alfa.`),
          metric: `alphas`,
          goal: 2,
        },
        {
          id: `d-react`,
          name: t(`Química elemental`),
          desc: t(`Provoca 60 reacciones elementales.`),
          metric: `reactions`,
          goal: 60,
        },
        {
          id: `d-burn`,
          name: t(`Fuego cruzado`),
          desc: t(`Quema a 150 Pokémon.`),
          metric: `burned`,
          goal: 150,
        },
        {
          id: `d-para`,
          name: t(`Alta tensión`),
          desc: t(`Paraliza a 120 Pokémon.`),
          metric: `paralyzed`,
          goal: 120,
        },
        {
          id: `d-soak`,
          name: t(`Chaparrón`),
          desc: t(`Moja a 200 Pokémon.`),
          metric: `soaked`,
          goal: 200,
        },
        {
          id: `d-crits`,
          name: t(`Puntería`),
          desc: t(`Asesta 400 golpes críticos.`),
          metric: `crits`,
          goal: 400,
        },
        {
          id: `d-boss`,
          name: t(`Guardián caído`),
          desc: t(`Derrota a un guardián.`),
          metric: `bosses`,
          goal: 1,
        },
        {
          id: `d-zone2`,
          name: t(`Más adentro`),
          desc: t(`Llega a la zona 2.`),
          metric: `stage`,
          goal: 2,
        },
      ],
      [
        {
          id: `d-runkills`,
          name: t(`Imparable`),
          desc: t(`Consigue 1.500 bajas en una sola partida.`),
          metric: `runKills`,
          goal: 1500,
        },
        {
          id: `d-ally`,
          name: t(`Nuevo aliado`),
          desc: t(`Captura un Alfa de apoyo.`),
          metric: `alphaCaught`,
          goal: 1,
        },
        {
          id: `d-zone3`,
          name: t(`Tierra adentro`),
          desc: t(`Llega a la zona 3.`),
          metric: `stage`,
          goal: 3,
        },
        {
          id: `d-bosses`,
          name: t(`Doble guardia`),
          desc: t(`Derrota a 2 guardianes.`),
          metric: `bosses`,
          goal: 2,
        },
        {
          id: `d-level`,
          name: t(`Entrenamiento duro`),
          desc: t(`Alcanza el nivel 22 en una partida.`),
          metric: `level`,
          goal: 22,
        },
        {
          id: `d-evo`,
          name: t(`¡Qué está pasando!`),
          desc: t(`Evoluciona 2 veces.`),
          metric: `evolutions`,
          goal: 2,
        },
      ],
    ],
    weekly: [
      [
        {
          id: `w-kills`,
          name: t(`Temporada de caza`),
          desc: t(`Derrota a 8.000 Pokémon salvajes.`),
          metric: `kills`,
          goal: 8e3,
        },
        {
          id: `w-runs`,
          name: t(`Constancia`),
          desc: t(`Juega 12 partidas.`),
          metric: `runs`,
          goal: 12,
        },
        {
          id: `w-play`,
          name: t(`Vida de entrenador`),
          desc: t(`Juega 90 minutos.`),
          metric: `playtime`,
          goal: 5400,
        },
        {
          id: `w-chests`,
          name: t(`Coleccionista de Poké Balls`),
          desc: t(`Abre 50 Poké Balls de objetos.`),
          metric: `chests`,
          goal: 50,
        },
      ],
      [
        {
          id: `w-alphas`,
          name: t(`Rey de los Alfas`),
          desc: t(`Derrota o captura 12 Pokémon Alfa.`),
          metric: `alphas`,
          goal: 12,
        },
        {
          id: `w-allies`,
          name: t(`Equipo de ensueño`),
          desc: t(`Captura 5 Alfas de apoyo.`),
          metric: `alphaCaught`,
          goal: 5,
        },
        {
          id: `w-react`,
          name: t(`Alquimia salvaje`),
          desc: t(`Provoca 600 reacciones elementales.`),
          metric: `reactions`,
          goal: 600,
        },
        {
          id: `w-bosses`,
          name: t(`Sin guardia`),
          desc: t(`Derrota a 8 guardianes.`),
          metric: `bosses`,
          goal: 8,
        },
      ],
      [
        {
          id: `w-win`,
          name: t(`Campeón regional`),
          desc: t(`Completa una región (Bosque Verde o Desierto Rocoso).`),
          metric: `wins`,
          goal: 1,
        },
        {
          id: `w-legend`,
          name: t(`Leyenda viva`),
          desc: t(`Derrota al legendario del santuario.`),
          metric: `legendaries`,
          goal: 1,
        },
        {
          id: `w-shiny`,
          name: t(`Brillo raro`),
          desc: t(`Captura un Pokémon variocolor.`),
          metric: `shinies`,
          goal: 1,
        },
        {
          id: `w-level`,
          name: t(`Maestría`),
          desc: t(`Alcanza el nivel 30 en una partida.`),
          metric: `level`,
          goal: 30,
        },
        {
          id: `w-runkills`,
          name: t(`Marea salvaje`),
          desc: t(`Consigue 3.000 bajas en una sola partida.`),
          metric: `runKills`,
          goal: 3e3,
        },
      ],
    ],
  },
  de = { daily: [60, 100, 160], weekly: [300, 450, 700] },
  v = 864e5,
  fe = (e) => Math.floor((e - S) / v) + 1,
  pe = (e) => S + e * v,
  me = (e, t) => (e === `daily` ? fe(t) : O(t)),
  he = (e, t) => (e === `daily` ? pe(t) : Pe(t));
function y(e) {
  let t = (e ^ 2654435769) >>> 0;
  return (
    (t = Math.imul(t ^ (t >>> 16), 2246822507) >>> 0),
    (t = Math.imul(t ^ (t >>> 13), 3266489909) >>> 0),
    (t ^ (t >>> 16)) >>> 0
  );
}
function ge(e, t, n, r = 0) {
  let i = _[e][n],
    a = y(t * 977 + n * 131 + (e === `weekly` ? 5e4 : 0)) % i.length;
  return r
    ? i[(a + 1 + (y(t * 31 + n * 7 + r * 1009) % (i.length - 1))) % i.length]
    : i[a];
}
var _e = (e) =>
    _.daily
      .flat()
      .concat(_.weekly.flat())
      .find((t) => t.id === e),
  ve = [
    {
      id: `rare-candy`,
      name: t(`Caramelo Raro`),
      desc: t(`Empiezas la partida con dos niveles más.`),
    },
    {
      id: `lucky-egg`,
      name: t(`Huevo Suerte`),
      desc: t(`+25 % de experiencia en toda la partida.`),
    },
    {
      id: `amulet-coin`,
      name: t(`Moneda Amuleto`),
      desc: t(`+50 % de Pokédólares en toda la partida.`),
    },
    {
      id: `honey`,
      name: t(`Miel`),
      desc: t(`Atrae a un Pokémon Alfa más en cada zona.`),
    },
    {
      id: `shiny-stone`,
      name: t(`Piedra Alba`),
      desc: t(`Un Pokémon variocolor aparece seguro en la zona 1.`),
    },
    {
      id: `master-ball`,
      name: t(`Master Ball`),
      desc: t(`Tu primera captura de la partida (Alfa o Liga) es segura.`),
    },
  ],
  b = [`rare-candy`, `lucky-egg`, `amulet-coin`, `honey`, `shiny-stone`],
  ye = (e) => b[y(e * 61 + 7) % b.length],
  be = (e) => [
    `master-ball`,
    b[y(e * 17 + 3) % b.length],
    b[y(e * 23 + 5) % b.length],
  ],
  xe = ue.filter((e) => (e.regions ?? 1) <= s.biomes.length);
((e) =>
  0.04 * Math.min(e, 5e3) +
  0.012 * Math.max(0, Math.min(e, 4e4) - 5e3) +
  0.001 * Math.max(0, Math.min(e, 2e5) - 4e4))(2e5);
var Se = (e) =>
    e.mode === `endless`
      ? Math.round(
          e.kills * 2 +
            e.time * 4 +
            e.damage / 200 +
            e.bosses * 800 +
            (e.legendaries ?? 0) * 2e3,
        )
      : Math.round(
          Math.round(
            e.kills * 2 +
              e.time * 3 +
              e.damage / 200 +
              (e.stage - 1) * 1500 +
              e.bosses * 800 +
              (e.victory ? 6e3 : 0),
          ) *
            (1 + e.tier * 0.5),
        ),
  Ce = { first: 120, repeat: 50 },
  we = { zone: 0.08, eclipse: 0.2, luckDiv: 1e3 },
  Te = { floor: 0.15 },
  Ee = 0.03,
  x = [
    {
      n: 2,
      name: t(`Destello`),
      desc: t(`+3 de suerte en todas tus partidas.`),
      stat: `luck`,
      add: 3,
    },
    {
      n: 4,
      name: t(`Ojo brillante`),
      desc: t(`+4 % de experiencia en todas tus partidas.`),
      stat: `xpGain`,
      add: 0.04,
    },
    {
      n: 6,
      name: t(`Amuleto Iris`),
      desc: t(
        `Los variocolores aparecen un 50 % más a menudo y tardan 150 s en huir (antes 120 s).`,
      ),
      charm: !0,
    },
    {
      n: 10,
      name: t(`Aura variocolor`),
      desc: t(`+3 % de daño en todas tus partidas.`),
      stat: `damage`,
      add: 0.03,
    },
    {
      n: 15,
      name: t(`Vínculo iris`),
      desc: t(`Tu compañero variocolor se une con Vínculo 2 (+20 % de daño).`),
      bond: 2,
    },
  ],
  De = (e) => x.filter((t) => e >= t.n),
  Oe = 1.5,
  ke = { base: 120, charm: 150 },
  Ae = [
    { id: `bronze`, name: t(`Bronce`), icon: `bronze` },
    { id: `silver`, name: t(`Plata`), icon: `silver` },
    { id: `gold`, name: t(`Oro`), icon: `gold` },
    { id: `champion`, name: t(`Campeón`), icon: `champion` },
  ];
function je(e, t) {
  let n = ee(e) === 4 ? 180 : 0,
    r = 1 + t * 0.08;
  return [1 / 0, (1620 + n) * r, (1200 + n) * r, (870 + n) * r].map((e) =>
    isFinite(e) ? Math.round(e) : e,
  );
}
var S = Date.UTC(2026, 9, 12),
  Me = { seasons: [], auto: !0, days: 7, gap: 0 },
  C = 1e4,
  w = Me,
  T = [],
  E = !1;
function D(e) {
  if (!(e >= 1) || e > C) return null;
  for (; T.length < e && !E; ) {
    let e = T.length + 1,
      t = w.seasons.find((t) => t.n === e),
      n = T[e - 2],
      r = null;
    if (t)
      r = {
        n: e,
        start: t.start,
        end: t.end,
        name: t.name ?? ``,
        dust: t.dust ?? 1,
        message: t.message ?? ``,
        planned: !0,
      };
    else if (e === 1)
      r = {
        n: 1,
        start: S,
        end: S + w.days * v,
        name: ``,
        dust: 1,
        message: ``,
        planned: !1,
      };
    else if (w.auto && n) {
      let t = n.end + w.gap * 36e5;
      r = {
        n: e,
        start: t,
        end: t + w.days * v,
        name: ``,
        dust: 1,
        message: ``,
        planned: !1,
      };
    }
    if (!r) {
      E = !0;
      break;
    }
    T.push(r);
  }
  return T[e - 1] ?? null;
}
function O(e) {
  for (
    ;
    !E &&
    T.length < C &&
    (!T.length || T[T.length - 1].start <= e) &&
    D(T.length + 1);

  );
  let t = 0,
    n = T.length;
  for (; t < n; ) {
    let r = (t + n) >> 1;
    T[r].start <= e ? (t = r + 1) : (n = r);
  }
  return t;
}
function Ne(e) {
  let t = D(O(e));
  return !!t && e >= t.start && e < t.end;
}
var Pe = (e) => (e < 1 ? D(1).start : (D(e)?.end ?? 1 / 0));
function Fe(e) {
  let t = O(e),
    n = D(t),
    r = D(t + 1);
  return {
    n: t,
    name: n?.name ?? ``,
    start: n?.start ?? 0,
    end: n?.end ?? 0,
    live: Ne(e),
    dust: n?.dust ?? 1,
    message: n?.message ?? ``,
    next:
      r && r.start > e
        ? { n: r.n, name: r.name, start: r.start, end: r.end, dust: r.dust }
        : null,
  };
}
var Ie = (e, n = ``) =>
    e < 1
      ? t(`Pretemporada`)
      : n
        ? t(`Temporada {n} · {name}`, { n: e, name: n })
        : t(`Temporada {n}`, { n: e }),
  k = [
    { id: `top100`, name: t(`Top 100`), from: 51, max: 100 },
    { id: `top50`, name: t(`Top 50`), from: 26, max: 50 },
    { id: `top25`, name: t(`Top 25`), from: 11, max: 25 },
    { id: `top10`, name: t(`Top 10`), from: 4, max: 10 },
    { id: `elite`, name: t(`Élite`), from: 2, max: 3 },
    { id: `master`, name: t(`Maestro`), from: 1, max: 1 },
  ],
  A = {
    global: [100, 180, 300, 500, 900, 1500],
    region: [0, 100, 180, 300, 600, 1e3],
  },
  j = `kills:global`,
  Le = `endless:global`,
  M = (e) => e === `kills:global` || e === `endless:global`,
  N = (e) => (M(e) ? 100 : I(e) ? 3 : 50);
function Re(e, t) {
  if (I(t))
    return e === 1
      ? { medal: 6, dust: 0 }
      : e >= 2 && e <= 3
        ? { medal: 5, dust: 0 }
        : null;
  if (e < 1 || e > N(t)) return null;
  let n = k.findIndex((t) => e >= t.from && e <= t.max) + 1;
  return { medal: n, dust: (M(t) ? A.global : A.region)[n - 1] };
}
var ze = (e) => {
    let t = k[e - 1];
    return t.from === t.max ? `#${t.max}` : `#${t.from}-${t.max}`;
  },
  Be = (e, t, n) =>
    e === `endless`
      ? t
        ? `endless:${t}`
        : Le
      : e === `kills` && !t
        ? j
        : `${e}:${t}:${n ?? 0}`;
function P(e) {
  let [t, n, r] = e.split(`:`);
  return {
    mode: t,
    biome: n === `global` ? null : n,
    tier: r == null ? null : Number(r),
  };
}
var Ve = (e, t = !1) => `${t ? `emon` : `mon`}:${e}`,
  F = (e) => (/^e?mon:\d{1,4}$/.test(e) ? Number(e.split(`:`)[1]) : null),
  I = (e) => F(e) != null;
function He(e) {
  if (e === `clan`) return t(`Clanes`);
  if (e === `clan:endless`) return t(`Clanes · Supervivencia`);
  if (F(e) != null)
    return e.startsWith(`emon:`)
      ? t(`Supervivencia · Pokémon n.º {n}`, { n: F(e) })
      : t(`Pokémon · n.º {n}`, { n: F(e) });
  let r = P(e);
  if (r.mode === `endless`)
    return t(`Supervivencia · {name}`, {
      name: r.biome
        ? (n.find((e) => e.id === r.biome)?.name ?? r.biome)
        : t(`Global`),
    });
  if (!r.biome) return t(`Bajas · Global`);
  let i = n.find((e) => e.id === r.biome)?.name ?? r.biome;
  return `${r.mode === `time` ? t(`Contrarreloj`) : t(`Bajas`)} · ${i}${r.tier ? ` · ` + f[r.tier] : ``}`;
}
var Ue = (e) => ({ time: Math.floor(e / 1e7), kills: Math.round(e % 1e7) }),
  We = {
    heartbeat: 15,
    maxGap: 45,
    clockSlack: 5,
    lateBank: 60,
    bunched: 2,
    stallBank: 900,
    minZone: [60, 30, 20, 15],
    levelAt: (e) => 12 + e / 6,
    levelSlack: 2,
    minDamagePerKill: 30,
    impossibleDamagePerKill: 20,
    autoBan: {
      flags: [`speed`, `kill-impossible`, `burst`, `damage-impossible`],
      runs: 2,
      days: 7,
      ban: 30,
    },
    killSlack: 2,
    killFloor: 20,
    gengarMax: 15,
    burstPerSec: 3600,
    burstPool: 2e3,
    damagePerKill: 6e3,
    runTtl: 144e5,
    finishGrace: 1728e5,
  },
  Ge = [0, 75, 150],
  Ke = {
    hp: [1, 1.4, 1.9],
    dmg: [1, 1.42, 1.96],
    speed: [1, 1.08, 1.16],
    amount: [1, 1.3, 1.6],
    kills: [1, 1.25, 1.5],
    level: [1, 1.5, 1.8],
    cap: [1, 1.15, 1.3],
    elite: [0, 0.04, 0.08],
    events: [1, 1.2, 1.4],
    early: [0, 15, 30],
    tele: [1, 0.92, 0.85],
    fury: [0.5, 0.55, 0.6],
    escorts: [0, 1, 2],
    wound: [4, 5, 6],
    strike: [1, 1.2, 1.4],
    late: [1, 1.12, 1.25],
    alphaCap1: [0.15, 0.25, 0.25],
  },
  qe = [1, 2, 3.1, 3.4],
  L = (e) => 0.7 + 0.014 * e + 0.5 * (e / 60) ** 1.75,
  R = { milestone: 300, phases: [0, 720, 1440], night: 2700 },
  z = { radius: 12, grace: 20, ramp: 40, floor: 0.3, exit: 15, from: 300 },
  Je = (e) =>
    1 - (1 - z.floor) * Math.max(0, Math.min(1, (e - z.grace) / z.ramp)),
  Ye = (e) => (e >= R.phases[2] ? 3 : e >= R.phases[1] ? 2 : 1),
  B = (e) => (e < 600 ? e : 600 + 0.55 * (e - 600)),
  Xe = (e) => L(B(e)) * (1 + Math.min(0.6, e / 3600)),
  V = (e, t) => t ** +Math.max(0, e - 20),
  Ze = (e) => {
    let t = Math.max(0, e - 1.5);
    return (
      (1 + 0.3 * e + 0.12 * t * t + 0.0025 * e * e * e) *
      V(e, 1.06) *
      1.15 ** Math.max(0, e - R.night / 60)
    );
  },
  Qe = (e) =>
    (1 + 0.13 * e) *
    (1 + 0.02 * e) *
    V(e, 1.03) *
    1.1 ** Math.max(0, e - R.night / 60),
  $e = (e) => 1.008 ** Math.max(0, e - 60),
  et = (e) =>
    Math.min(1.45, 1 + 0.01 * e) *
    Math.min(1.3, 1 + 0.02 * Math.max(0, e - R.night / 60)),
  tt = (e) => 1 / (1 + e / 30),
  nt = (e) => Math.max(0.3, 1 - 0.025 * Math.max(0, e - 30));
function rt(e) {
  let t = e.time,
    n = e.kills;
  return {
    evolutions: 4,
    chests: 20 + t / 5,
    berries: 30 + t / 4,
    rocks: 30 + t / 3,
    dodges: 50 + t * 3,
    burned: 200 + n * 6,
    frozen: 200 + n * 6,
    slept: 200 + n * 6,
    electro: 200 + n * 6,
    healed: 2e3 + t * 400,
    paralyzed: 200 + n * 6,
    soaked: 200 + n * 6,
    poisoned: 200 + n * 6,
    confused: 200 + n * 6,
    crits: 300 + n * 8,
    gold: 400 + t * 8,
    rainKills: n,
    alphaCaught: 14 + t / 150,
    ultimates: 3 + t / 20,
  };
}
var it = [
    {
      id: 77,
      role: t(`Corcel`),
      passive: `blazing-hooves`,
      kit: [`flame-charge`, `bounce`, `inferno`, `sacred-fire`],
      rank: `uncommon`,
      challenge: {
        desc: t(`Sobrevive 15 minutos en una partida.`),
        counter: `maxTime`,
        goal: 900,
      },
    },
    {
      id: 79,
      role: t(`Despistado`),
      passive: `oblivious`,
      kit: [`yawn`, `scald`, `psychic-noise`, `expanding-force`],
      rank: `uncommon`,
      challenge: {
        desc: t(`Duerme a 8.000 Pokémon.`),
        counter: `slept`,
        goal: 8e3,
      },
    },
    {
      id: 81,
      role: t(`Imán`),
      passive: `magnet-pull`,
      kit: [`thunder-wave`, `gyro-ball`, `magnet-bomb`, `flash-cannon`],
      rank: `uncommon`,
      challenge: {
        desc: t(`Paraliza a 1.500 Pokémon en una sola partida.`),
        counter: `best_paralyzed`,
        goal: 1500,
      },
    },
    {
      id: 83,
      role: t(`Puerro`),
      passive: `leek-master`,
      kit: [`cut`, `false-swipe`, `brave-bird`, `meteor-assault`],
      rank: `uncommon`,
      challenge: {
        desc: t(`Asesta 50.000 golpes críticos en una sola partida.`),
        counter: `best_crits`,
        goal: 5e4,
      },
    },
    {
      id: 84,
      role: t(`Corredor`),
      passive: `twin-heads`,
      kit: [`pluck`, `double-hit`, `uproar`, `acrobatics`],
      rank: `uncommon`,
      challenge: {
        desc: t(`Completa 15 partidas (ganes o pierdas).`),
        counter: `runs`,
        goal: 15,
      },
    },
    {
      id: 86,
      role: t(`Foca`),
      passive: `ice-body`,
      kit: [`icy-wind`, `dive`, `aurora-beam`, `sheer-cold`],
      rank: `uncommon`,
      challenge: {
        desc: t(`Congela a 4.000 Pokémon.`),
        counter: `frozen`,
        goal: 4e3,
      },
    },
    {
      id: 88,
      role: t(`Lodo`),
      passive: `sludge-body`,
      kit: [`poison-gas`, `sludge`, `shadow-sneak`, `belch`],
      rank: `uncommon`,
      challenge: {
        desc: t(`Envenena a 20.000 Pokémon.`),
        counter: `poisoned`,
        goal: 2e4,
      },
    },
    {
      id: 90,
      role: t(`Concha`),
      passive: `skill-link`,
      kit: [`clamp`, `icicle-spear`, `ice-spinner`, `icicle-crash`],
      rank: `uncommon`,
      challenge: {
        desc: t(`Esquiva 25 ataques en una sola partida.`),
        counter: `best_dodges`,
        goal: 25,
      },
    },
  ],
  at = [
    {
      id: 95,
      role: t(`Coloso`),
      passive: `rock-head`,
      kit: [`rock-tomb`, `stealth-rock`, `iron-tail`, `head-smash`],
      rank: `uncommon`,
      challenge: {
        desc: t(`Gana el Bosque Verde.`),
        counter: `win_forest`,
        goal: 1,
      },
    },
    {
      id: 96,
      role: t(`Hipnotista`),
      passive: `pendulum`,
      kit: [`psywave`, `nightmare`, `dream-eater`, `focus-blast`],
      rank: `uncommon`,
      challenge: {
        desc: t(`Duerme a 1.500 Pokémon en una sola partida.`),
        counter: `best_slept`,
        goal: 1500,
      },
    },
    {
      id: 98,
      role: t(`Pinzas`),
      passive: `hyper-cutter`,
      kit: [`vice-grip`, `liquidation`, `crabhammer`, `guillotine`],
      rank: `uncommon`,
      challenge: {
        desc: t(`Consigue 15.000 bajas en una sola partida.`),
        counter: `best_kills`,
        goal: 15e3,
      },
    },
    {
      id: 100,
      role: t(`Bomba`),
      passive: `aftermath`,
      kit: [`spark`, `electroweb`, `rising-voltage`, `discharge`],
      rank: `uncommon`,
      challenge: {
        desc: t(`Abre 120 Poké Balls de objetos.`),
        counter: `chests`,
        goal: 120,
      },
    },
    {
      id: 102,
      role: t(`Huevos`),
      passive: `harvest`,
      kit: [`barrage`, `leech-seed`, `seed-bomb`, `wood-hammer`],
      rank: `uncommon`,
      challenge: {
        desc: t(`Come 250 bayas o curaciones.`),
        counter: `berries`,
        goal: 250,
      },
    },
    {
      id: 106,
      role: t(`Pateador`),
      passive: `limber-kicks`,
      kit: [`rolling-kick`, `blaze-kick`, `jump-kick`, `high-jump-kick`],
      rank: `rare`,
      challenge: [
        { desc: t(`Ten 20 miembros en tu Liga.`), counter: `league`, goal: 20 },
        { desc: t(`Derrota a 30 Pokémon Alfa.`), counter: `alphas`, goal: 30 },
      ],
    },
    {
      id: 107,
      role: t(`Boxeador`),
      passive: `iron-fist`,
      kit: [`comet-punch`, `ice-punch`, `drain-punch`, `focus-punch`],
      rank: `rare`,
      challenge: [
        { desc: t(`Ten 20 miembros en tu Liga.`), counter: `league`, goal: 20 },
        { desc: t(`Derrota a 25 guardianes.`), counter: `bosses`, goal: 25 },
      ],
    },
    {
      id: 108,
      role: t(`Lengüetón`),
      passive: `long-tongue`,
      kit: [`wring-out`, `snore`, `strength`, `heavy-slam`],
      rank: `rare`,
      challenge: [
        { desc: t(`Ten 15 miembros en tu Liga.`), counter: `league`, goal: 15 },
        {
          desc: t(`Recupera 8.000 PS en una sola partida.`),
          counter: `best_healed`,
          goal: 8e3,
        },
      ],
    },
  ],
  ot = [
    {
      id: 109,
      role: t(`Humo`),
      passive: `toxic-cloud`,
      kit: [`smog`, `clear-smog`, `self-destruct`, `explosion`],
      rank: `uncommon`,
      challenge: {
        desc: t(`Provoca 5.000 reacciones elementales.`),
        counter: `reactions`,
        goal: 5e3,
      },
    },
    {
      id: 111,
      role: t(`Rinoceronte`),
      passive: `rhino-charge`,
      kit: [`smack-down`, `rock-blast`, `high-horsepower`, `rock-wrecker`],
      rank: `rare`,
      challenge: [
        { desc: t(`Ten 20 miembros en tu Liga.`), counter: `league`, goal: 20 },
        {
          desc: t(`Rompe 100 rocas con Golpe Roca.`),
          counter: `rocks`,
          goal: 100,
        },
      ],
    },
    {
      id: 113,
      role: t(`Enfermera`),
      passive: `natural-cure`,
      kit: [`sweet-kiss`, `echoed-voice`, `egg-bomb`, `boomburst`],
      rank: `rare`,
      challenge: [
        { desc: t(`Ten 25 miembros en tu Liga.`), counter: `league`, goal: 25 },
        {
          desc: t(`Recupera 60.000 PS en total.`),
          counter: `healed`,
          goal: 6e4,
        },
      ],
    },
    {
      id: 114,
      role: t(`Lianas`),
      passive: `regenerator`,
      kit: [`bind`, `giga-drain`, `grass-knot`, `solar-blade`],
      rank: `rare`,
      challenge: [
        { desc: t(`Ten 20 miembros en tu Liga.`), counter: `league`, goal: 20 },
        {
          desc: t(`Alcanza el nivel 35 en una partida.`),
          counter: `maxLevel`,
          goal: 35,
        },
      ],
    },
    {
      id: 115,
      role: t(`Madre`),
      passive: `parental-bond`,
      kit: [`dizzy-punch`, `mega-kick`, `reversal`, `mega-punch`],
      rank: `rare`,
      challenge: [
        { desc: t(`Ten 25 miembros en tu Liga.`), counter: `league`, goal: 25 },
        {
          desc: t(`Completa 35 partidas (ganes o pierdas).`),
          counter: `runs`,
          goal: 35,
        },
      ],
    },
    {
      id: 116,
      role: t(`Tinta`),
      passive: `ink-sniper`,
      kit: [`snipe-shot`, `octazooka`, `scale-shot`, `hydro-cannon`],
      rank: `uncommon`,
      challenge: {
        desc: t(`Moja a 12.000 Pokémon.`),
        counter: `soaked`,
        goal: 12e3,
      },
    },
    {
      id: 118,
      role: t(`Pez espada`),
      passive: `water-veil`,
      kit: [`aqua-cutter`, `smart-strike`, `horn-leech`, `fishious-rend`],
      rank: `uncommon`,
      challenge: {
        desc: t(`Esquiva 350 ataques.`),
        counter: `dodges`,
        goal: 350,
      },
    },
    {
      id: 120,
      role: t(`Estrella`),
      passive: `star-core`,
      kit: [`water-shuriken`, `confuse-ray`, `mirror-shot`, `photon-geyser`],
      rank: `uncommon`,
      challenge: {
        desc: t(`Lanza 150 Ultimates.`),
        counter: `ultimates`,
        goal: 150,
      },
    },
  ],
  st = [
    {
      id: 122,
      role: t(`Mimo`),
      passive: `barrier-wall`,
      kit: [`barrier`, `light-screen`, `trick-room`, `misty-explosion`],
      rank: `uncommon`,
      challenge: {
        desc: t(`Juega con 6 Pokémon distintos.`),
        counter: `speciesPlayed`,
        goal: 6,
      },
    },
    {
      id: 124,
      role: t(`Hechicera`),
      passive: `frost-kiss`,
      kit: [`lovely-kiss`, `frost-breath`, `heart-stamp`, `perish-song`],
      rank: `rare`,
      challenge: [
        { desc: t(`Ten 25 miembros en tu Liga.`), counter: `league`, goal: 25 },
        {
          desc: t(`Congela a 1.500 Pokémon en una sola partida.`),
          counter: `best_frozen`,
          goal: 1500,
        },
      ],
    },
    {
      id: 125,
      role: t(`Eléctrico`),
      passive: `motor-drive`,
      kit: [`thunder-punch`, `wild-charge`, `thunder-cage`, `bolt-strike`],
      rank: `rare`,
      challenge: [
        { desc: t(`Ten 25 miembros en tu Liga.`), counter: `league`, goal: 25 },
        {
          desc: t(`Paraliza a 3.000 Pokémon en una sola partida.`),
          counter: `best_paralyzed`,
          goal: 3e3,
        },
      ],
    },
    {
      id: 126,
      role: t(`Fuego`),
      passive: `flame-body`,
      kit: [`fire-punch`, `mystical-fire`, `lava-plume`, `eruption`],
      rank: `rare`,
      challenge: [
        { desc: t(`Ten 25 miembros en tu Liga.`), counter: `league`, goal: 25 },
        {
          desc: t(`Quema a 6.000 Pokémon en una sola partida.`),
          counter: `best_burned`,
          goal: 6e3,
        },
      ],
    },
    {
      id: 127,
      role: t(`Tenazas`),
      passive: `mold-breaker`,
      kit: [`storm-throw`, `lunge`, `vital-throw`, `superpower`],
      rank: `rare`,
      challenge: [
        { desc: t(`Ten 20 miembros en tu Liga.`), counter: `league`, goal: 20 },
        {
          desc: t(`Derrota a 4 Pokémon Alfa en una sola partida.`),
          counter: `best_alphas`,
          goal: 4,
        },
      ],
    },
    {
      id: 128,
      role: t(`Estampida`),
      passive: `stampede`,
      kit: [`payback`, `rock-climb`, `raging-bull`, `headlong-rush`],
      rank: `rare`,
      challenge: [
        { desc: t(`Ten 20 miembros en tu Liga.`), counter: `league`, goal: 20 },
        {
          desc: t(`Consigue 300.000 bajas en total.`),
          counter: `kills`,
          goal: 3e5,
        },
      ],
    },
    {
      id: 132,
      role: t(`Imitador`),
      passive: `imposter`,
      kit: [`transform`, `mimic`, `copycat`, `sketch`],
      rank: `rare`,
      challenge: [
        { desc: t(`Ten 25 miembros en tu Liga.`), counter: `league`, goal: 25 },
        {
          desc: t(`Captura 25 Alfas de apoyo.`),
          counter: `alphaCaught`,
          goal: 25,
        },
      ],
    },
    {
      id: 137,
      role: t(`Virtual`),
      passive: `download`,
      kit: [`lock-on`, `parabolic-charge`, `fusion-bolt`, `techno-blast`],
      rank: `rare`,
      challenge: [
        { desc: t(`Ten 30 miembros en tu Liga.`), counter: `league`, goal: 30 },
        {
          desc: t(`Provoca 1.200 reacciones elementales en una sola partida.`),
          counter: `best_reactions`,
          goal: 1200,
        },
      ],
    },
  ],
  ct = [
    {
      id: 138,
      role: t(`Fósil espiral`),
      passive: `spiral-shell`,
      kit: [`constrict`, `spike-cannon`, `water-spout`, `meteor-beam`],
      evoLevels: [40],
      rank: `rare`,
      challenge: [
        { desc: t(`Ten 25 miembros en tu Liga.`), counter: `league`, goal: 25 },
        {
          desc: t(`Consigue 50.000 bajas en el Desierto Rocoso.`),
          counter: `kills_desert`,
          goal: 5e4,
        },
      ],
    },
    {
      id: 140,
      role: t(`Fósil cortante`),
      passive: `battle-armor`,
      kit: [`aqua-jet`, `sacred-sword`, `stone-axe`, `razor-shell`],
      evoLevels: [40],
      rank: `rare`,
      challenge: [
        { desc: t(`Ten 25 miembros en tu Liga.`), counter: `league`, goal: 25 },
        {
          desc: t(`Derrota a 8 guardianes del Desierto Rocoso.`),
          counter: `boss_desert`,
          goal: 8,
        },
      ],
    },
    {
      id: 142,
      role: t(`Fósil volador`),
      passive: `ancient-wings`,
      kit: [`thunder-fang`, `dual-wingbeat`, `iron-head`, `dragon-ascent`],
      rank: `rare`,
      challenge: [
        { desc: t(`Ten 35 miembros en tu Liga.`), counter: `league`, goal: 35 },
        {
          desc: t(`Gana el Desierto Rocoso.`),
          counter: `tier_desert`,
          goal: 1,
        },
      ],
    },
    {
      id: 144,
      role: t(`Ave helada`),
      passive: `ice-pressure`,
      kit: [`freeze-dry`, `mist`, `bleakwind-storm`, `glaciate`],
      rank: `legendary`,
      challenge: [
        { desc: t(`Ten 45 miembros en tu Liga.`), counter: `league`, goal: 45 },
        {
          desc: t(`Gana el Bosque Verde en Difícil.`),
          counter: `tier_forest`,
          goal: 2,
        },
        {
          desc: t(`Congela a 2.500 Pokémon en una sola partida.`),
          counter: `best_frozen`,
          goal: 2500,
        },
      ],
    },
    {
      id: 145,
      role: t(`Ave eléctrica`),
      passive: `volt-pressure`,
      kit: [`bolt-beak`, `wildbolt-storm`, `thunderclap`, `electro-shot`],
      rank: `legendary`,
      challenge: [
        { desc: t(`Ten 50 miembros en tu Liga.`), counter: `league`, goal: 50 },
        {
          desc: t(`Gana el Desierto Rocoso.`),
          counter: `tier_desert`,
          goal: 1,
        },
        {
          desc: t(`Derrota a 3.000 Pokémon con lluvia en una sola partida.`),
          counter: `best_rainKills`,
          goal: 3e3,
        },
      ],
    },
    {
      id: 146,
      role: t(`Ave ígnea`),
      passive: `flame-pressure`,
      kit: [`incinerate`, `fly`, `searing-shot`, `overheat`],
      rank: `legendary`,
      challenge: [
        { desc: t(`Ten 55 miembros en tu Liga.`), counter: `league`, goal: 55 },
        {
          desc: t(`Derrota a Moltres en el Desierto Rocoso en Difícil.`),
          counter: `tier_desert`,
          goal: 2,
        },
        {
          desc: t(`Quema a 8.000 Pokémon en una sola partida.`),
          counter: `best_burned`,
          goal: 8e3,
        },
      ],
    },
    {
      id: 150,
      role: t(`Genético`),
      passive: `genome`,
      kit: [`psycho-cut`, `psystrike`, `prismatic-laser`, `psycho-boost`],
      rank: `legendary`,
      challenge: [
        { desc: t(`Ten 60 miembros en tu Liga.`), counter: `league`, goal: 60 },
        {
          desc: t(`Captura a Articuno, Zapdos y Moltres.`),
          counter: `birds`,
          goal: 3,
        },
        {
          desc: t(`Gana el Desierto Rocoso en Difícil.`),
          counter: `tier_desert`,
          goal: 2,
        },
      ],
    },
  ],
  lt = [0, 2, 4, 7],
  ut = {
    common: t(`Común`),
    uncommon: t(`Poco común`),
    rare: t(`Raro`),
    legendary: t(`Legendario`),
  },
  H = [
    {
      id: 1,
      start: !0,
      role: t(`Sanador`),
      passive: `photosynthesis`,
      kit: [`vine-whip`, `razor-leaf`, `sleep-powder`, `solar-beam`],
      rank: `common`,
      challenge: {
        desc: t(`Completa 2 partidas (ganes o pierdas).`),
        counter: `runs`,
        goal: 2,
      },
    },
    {
      id: 4,
      start: !0,
      role: t(`Asalto ígneo`),
      passive: `blaze`,
      kit: [`ember`, `fire-spin`, `flamethrower`, `fire-blast`],
      rank: `common`,
      challenge: {
        desc: t(`Completa 2 partidas (ganes o pierdas).`),
        counter: `runs`,
        goal: 2,
      },
    },
    {
      id: 7,
      start: !0,
      role: t(`Defensor`),
      passive: `torrent-shell`,
      kit: [`water-gun`, `bubble`, `rapid-spin`, `hydro-pump`],
      rank: `common`,
      challenge: {
        desc: t(`Completa 2 partidas (ganes o pierdas).`),
        counter: `runs`,
        goal: 2,
      },
    },
    {
      id: 10,
      role: t(`Metamorfosis`),
      passive: `metamorph`,
      kit: [`string-shot`, `bug-bite`, `gust`, `bug-buzz`],
      evoLevels: [8, 36],
      rank: `common`,
      challenge: {
        desc: t(`Evoluciona 3 veces durante tus partidas.`),
        counter: `evolutions`,
        goal: 3,
      },
    },
    {
      id: 13,
      role: t(`Aguijón`),
      passive: `venom-sting`,
      kit: [`poison-sting`, `twineedle`, `toxic-spikes`, `poison-jab`],
      evoLevels: [8, 36],
      rank: `common`,
      challenge: {
        desc: t(`Consigue 5.000 bajas en total.`),
        counter: `kills`,
        goal: 5e3,
      },
    },
    {
      id: 16,
      role: t(`Explorador`),
      passive: `tailwind`,
      kit: [`quick-attack`, `feather-dance`, `wing-attack`, `hurricane`],
      rank: `common`,
      challenge: {
        desc: t(`Completa 4 partidas (ganes o pierdas).`),
        counter: `runs`,
        goal: 4,
      },
    },
    {
      id: 19,
      role: t(`Roedor`),
      passive: `hustle`,
      kit: [`hyper-fang`, `pursuit`, `double-edge`, `super-fang`],
      rank: `common`,
      challenge: {
        desc: t(`Consigue 20.000 bajas en total.`),
        counter: `kills`,
        goal: 2e4,
      },
    },
    {
      id: 21,
      role: t(`Picotazo`),
      passive: `sniper`,
      kit: [`peck`, `fury-attack`, `drill-run`, `drill-peck`],
      rank: `common`,
      challenge: {
        desc: t(`Asesta 30.000 golpes críticos.`),
        counter: `crits`,
        goal: 3e4,
      },
    },
    {
      id: 23,
      role: t(`Serpiente`),
      passive: `serpent-glare`,
      kit: [`wrap`, `acid`, `sludge-bomb`, `gunk-shot`],
      rank: `uncommon`,
      challenge: {
        desc: t(`Paraliza a 2.500 Pokémon.`),
        counter: `paralyzed`,
        goal: 2500,
      },
    },
    {
      id: 25,
      role: t(`Velocista`),
      passive: `static`,
      kit: [`thunder-shock`, `electro-ball`, `thunderbolt`, `thunder`],
      rank: `uncommon`,
      challenge: {
        desc: t(`Derrota a 10.000 Pokémon mientras llueve.`),
        counter: `rainKills`,
        goal: 1e4,
      },
    },
    {
      id: 27,
      role: t(`Excavador`),
      passive: `sand-rush`,
      kit: [`fury-swipes`, `rollout`, `crush-claw`, `bulldoze`],
      rank: `uncommon`,
      challenge: {
        desc: t(`Esquiva 120 ataques.`),
        counter: `dodges`,
        goal: 120,
      },
    },
    {
      id: 29,
      role: t(`Reina`),
      passive: `poison-point`,
      kit: [`toxic`, `double-kick`, `body-press`, `sludge-wave`],
      rank: `common`,
      challenge: {
        desc: t(`Recupera 6.000 PS en total.`),
        counter: `healed`,
        goal: 6e3,
      },
    },
    {
      id: 32,
      role: t(`Rey`),
      passive: `rivalry`,
      kit: [`horn-attack`, `thrash`, `horn-drill`, `earth-power`],
      rank: `common`,
      challenge: {
        desc: t(`Derrota a 6 Pokémon Alfa.`),
        counter: `alphas`,
        goal: 6,
      },
    },
    {
      id: 35,
      role: t(`Lunar`),
      passive: `lunar-blessing`,
      kit: [`draining-kiss`, `stored-power`, `gravity`, `moonblast`],
      rank: `uncommon`,
      challenge: {
        desc: t(`Lanza 80 Ultimates.`),
        counter: `ultimates`,
        goal: 80,
      },
    },
    {
      id: 37,
      role: t(`Hechicera ígnea`),
      passive: `flash-fire`,
      kit: [`will-o-wisp`, `flame-burst`, `extrasensory`, `heat-wave`],
      rank: `common`,
      challenge: {
        desc: t(`Quema a 6.000 Pokémon.`),
        counter: `burned`,
        goal: 6e3,
      },
    },
    {
      id: 39,
      role: t(`Cantante`),
      passive: `cute-charm`,
      kit: [`pound`, `sing`, `round`, `hyper-voice`],
      rank: `common`,
      challenge: {
        desc: t(`Duerme a 1.500 Pokémon.`),
        counter: `slept`,
        goal: 1500,
      },
    },
    {
      id: 41,
      role: t(`Vampiro`),
      passive: `vampire`,
      kit: [`leech-life`, `wing-attack`, `poison-fang`, `air-cutter`],
      rank: `uncommon`,
      challenge: {
        desc: t(`Recupera 4.000 PS en una sola partida.`),
        counter: `best_healed`,
        goal: 4e3,
      },
    },
    {
      id: 43,
      role: t(`Flor nocturna`),
      passive: `chlorophyll`,
      kit: [`mega-drain`, `poison-powder`, `petal-blizzard`, `petal-dance`],
      rank: `common`,
      challenge: {
        desc: t(`Envenena a 4.000 Pokémon.`),
        counter: `poisoned`,
        goal: 4e3,
      },
    },
    {
      id: 46,
      role: t(`Hongo`),
      passive: `effect-spore`,
      kit: [`slash`, `stun-spore`, `spore`, `energy-ball`],
      rank: `uncommon`,
      challenge: {
        desc: t(`Paraliza a 6.000 Pokémon.`),
        counter: `paralyzed`,
        goal: 6e3,
      },
    },
    {
      id: 48,
      role: t(`Radar`),
      passive: `compound-eyes`,
      kit: [`supersonic`, `u-turn`, `silver-wind`, `signal-beam`],
      rank: `uncommon`,
      challenge: {
        desc: t(`Confunde a 1.500 Pokémon.`),
        counter: `confused`,
        goal: 1500,
      },
    },
    {
      id: 50,
      role: t(`Topo`),
      passive: `arena-trap`,
      kit: [`scratch`, `mud-shot`, `tri-attack`, `fissure`],
      rank: `common`,
      challenge: {
        desc: t(`Rompe 15 rocas con Golpe Roca.`),
        counter: `rocks`,
        goal: 15,
      },
    },
    {
      id: 52,
      role: t(`Gato callejero`),
      passive: `pickup`,
      kit: [`pay-day`, `fake-out`, `assurance`, `play-rough`],
      rank: `common`,
      challenge: {
        desc: t(`Consigue 8.000 ₽ en total.`),
        counter: `gold`,
        goal: 8e3,
      },
    },
    {
      id: 54,
      role: t(`Jaqueca`),
      passive: `headache`,
      kit: [`soak`, `zen-headbutt`, `aqua-tail`, `psyshock`],
      rank: `common`,
      challenge: {
        desc: t(`Moja a 3.000 Pokémon.`),
        counter: `soaked`,
        goal: 3e3,
      },
    },
    {
      id: 56,
      role: t(`Furia`),
      passive: `anger-point`,
      kit: [`seismic-toss`, `rage-fist`, `stomping-tantrum`, `final-gambit`],
      rank: `uncommon`,
      challenge: {
        desc: t(`Derrota a 10 guardianes.`),
        counter: `bosses`,
        goal: 10,
      },
    },
    {
      id: 58,
      role: t(`Guardián`),
      passive: `loyal-guard`,
      kit: [`fire-fang`, `flame-wheel`, `extreme-speed`, `flare-blitz`],
      rank: `uncommon`,
      challenge: {
        desc: t(`Completa 20 partidas (ganes o pierdas).`),
        counter: `runs`,
        goal: 20,
      },
    },
    {
      id: 60,
      role: t(`Nadador`),
      passive: `swift-swim`,
      kit: [`bubble-beam`, `hypnosis`, `circle-throw`, `submission`],
      rank: `uncommon`,
      challenge: {
        desc: t(`Duerme a 4.000 Pokémon.`),
        counter: `slept`,
        goal: 4e3,
      },
    },
    {
      id: 63,
      role: t(`Místico`),
      passive: `magic-guard`,
      kit: [`confusion`, `psybeam`, `psychic`, `future-sight`],
      rank: `uncommon`,
      challenge: {
        desc: t(`Alcanza el nivel 30 en una partida.`),
        counter: `maxLevel`,
        goal: 30,
      },
    },
    {
      id: 66,
      role: t(`Luchador`),
      passive: `guts`,
      kit: [`karate-chop`, `low-kick`, `cross-chop`, `dynamic-punch`],
      rank: `uncommon`,
      challenge: {
        desc: t(`Derrota a 20 Pokémon Alfa.`),
        counter: `alphas`,
        goal: 20,
      },
    },
    {
      id: 69,
      role: t(`Carnívora`),
      passive: `carnivore`,
      kit: [`slam`, `gastro-acid`, `knock-off`, `power-whip`],
      rank: `common`,
      challenge: {
        desc: t(`Alcanza el nivel 20 en una partida.`),
        counter: `maxLevel`,
        goal: 20,
      },
    },
    {
      id: 72,
      role: t(`Medusa`),
      passive: `tentacles`,
      kit: [`brine`, `acid-spray`, `venoshock`, `whirlpool`],
      rank: `uncommon`,
      challenge: {
        desc: t(`Envenena a 2.500 Pokémon en una sola partida.`),
        counter: `best_poisoned`,
        goal: 2500,
      },
    },
    {
      id: 74,
      role: t(`Muralla`),
      passive: `sturdy`,
      kit: [`rock-throw`, `rollout`, `magnitude`, `rock-slide`],
      rank: `uncommon`,
      challenge: {
        desc: t(`Rompe 50 rocas con Golpe Roca.`),
        counter: `rocks`,
        goal: 50,
      },
    },
    {
      id: 92,
      role: t(`Espectro`),
      passive: `phantom`,
      kit: [`lick`, `night-shade`, `shadow-ball`, `hex`],
      rank: `uncommon`,
      challenge: {
        desc: t(`Provoca 600 reacciones elementales en una sola partida.`),
        counter: `best_reactions`,
        goal: 600,
      },
    },
    {
      id: 104,
      role: t(`Guerrero óseo`),
      passive: `bone-keeper`,
      kit: [`bone-club`, `bonemerang`, `bone-rush`, `shadow-bone`],
      rank: `uncommon`,
      challenge: {
        desc: t(`Derrota a 4 guardianes del Desierto Rocoso.`),
        counter: `boss_desert`,
        goal: 4,
      },
    },
    {
      id: 123,
      role: t(`Cuchillas`),
      passive: `technician`,
      kit: [`fury-cutter`, `aerial-ace`, `air-slash`, `x-scissor`],
      rank: `uncommon`,
      challenge: {
        desc: t(`Consigue 150.000 bajas en total.`),
        counter: `kills`,
        goal: 15e4,
      },
    },
    {
      id: 129,
      role: t(`Promesa`),
      passive: `persevere`,
      kit: [`tackle`, `flail`, `waterfall`, `hyper-beam`],
      evoLevel: 40,
      rank: `uncommon`,
      challenge: {
        desc: t(`Completa 25 partidas (ganes o pierdas).`),
        counter: `runs`,
        goal: 25,
      },
    },
    {
      id: 131,
      role: t(`Navegante`),
      passive: `water-absorb`,
      kit: [`water-pulse`, `ice-beam`, `surf`, `blizzard`],
      rank: `rare`,
      challenge: [
        { desc: t(`Ten 30 miembros en tu Liga.`), counter: `league`, goal: 30 },
        {
          desc: t(`Evoluciona 20 veces durante tus partidas.`),
          counter: `evolutions`,
          goal: 20,
        },
      ],
    },
    {
      id: 133,
      role: t(`Adaptable`),
      passive: `adaptability`,
      kit: [`swift`, `quick-attack`, `bite`, `last-resort`],
      branch: [134, 135, 136],
      evoLevel: 36,
      rank: `rare`,
      challenge: [
        { desc: t(`Ten 15 miembros en tu Liga.`), counter: `league`, goal: 15 },
        {
          desc: t(`Juega con 10 Pokémon distintos.`),
          counter: `speciesPlayed`,
          goal: 10,
        },
      ],
    },
    {
      id: 143,
      role: t(`Tragón`),
      passive: `gluttony`,
      kit: [`tackle`, `body-slam`, `stomp`, `giga-impact`],
      rank: `rare`,
      challenge: [
        { desc: t(`Ten 30 miembros en tu Liga.`), counter: `league`, goal: 30 },
        {
          desc: t(`Come 500 bayas o curaciones.`),
          counter: `berries`,
          goal: 500,
        },
      ],
    },
    {
      id: 147,
      role: t(`Dragón`),
      passive: `multiscale`,
      kit: [`twister`, `dragon-rage`, `dragon-pulse`, `draco-meteor`],
      rank: `rare`,
      challenge: [
        { desc: t(`Ten 40 miembros en tu Liga.`), counter: `league`, goal: 40 },
        {
          desc: t(`Derrota a 3 Pokémon legendarios.`),
          counter: `legendaries`,
          goal: 3,
        },
      ],
    },
    {
      id: 151,
      role: t(`Legendario`),
      passive: `mew`,
      kit: [`psychic`, `aura-sphere`, `ancient-power`, `moonblast`],
      rank: `legendary`,
      challenge: {
        desc: t(`Captura a los otros miembros de la Liga.`),
        counter: `league`,
        goal: 78,
      },
    },
  ];
(H.push(...it, ...at, ...ot, ...st, ...ct), H.sort((e, t) => e.id - t.id));
{
  let e = H.find((e) => e.id === 151);
  e.challenge = {
    desc: t(`Captura a los otros {n} miembros de la Liga.`, {
      n: H.length - 1,
    }),
    counter: `league`,
    goal: H.length - 1,
  };
}
var U = new Map(H.map((e) => [e.id, e])),
  dt = (e) =>
    e.challenge
      ? Array.isArray(e.challenge)
        ? e.challenge
        : [e.challenge]
      : [],
  ft = (e) => e.rank ?? `common`,
  pt = (e) => e.filter((e) => U.has(e)).length;
function mt(e, t) {
  return U.get(e) ?? U.get(t(e));
}
var W = `mvc5u5vc`,
  ht = `0.5.5`,
  gt = `./`,
  _t = (e) => `${gt}assets/${e}?v=${W}`,
  vt = [t(`Común`), t(`Poco común`), t(`Raro`), t(`Épico`), t(`Legendario`)],
  yt = [`#c8d0dc`, `#5ad87a`, `#4aa8ff`, `#c070ff`, `#ffc83a`],
  bt = [1, 1.2, 1.45, 1.75, 2.1],
  xt = (e, n, r = 0) => ({
    key: n,
    rarity: r,
    desc: t(`+30% daño de movimientos tipo {type} y +3% daño total.`, {
      type: St[e],
    }),
    mods: [{ stat: `damage`, mul: 1.03 }],
    tags: [`type:` + e],
  }),
  St = {
    normal: t(`Normal`),
    fighting: t(`Lucha`),
    flying: t(`Volador`),
    poison: t(`Veneno`),
    ground: t(`Tierra`),
    rock: t(`Roca`),
    bug: t(`Bicho`),
    ghost: t(`Fantasma`),
    steel: t(`Acero`),
    fire: t(`Fuego`),
    water: t(`Agua`),
    grass: t(`Planta`),
    electric: t(`Eléctrico`),
    psychic: t(`Psíquico`),
    ice: t(`Hielo`),
    dragon: t(`Dragón`),
    dark: t(`Siniestro`),
    fairy: t(`Hada`),
  },
  G = {
    charcoal: `fire`,
    "mystic-water": `water`,
    "miracle-seed": `grass`,
    magnet: `electric`,
    "never-melt-ice": `ice`,
    "black-belt": `fighting`,
    "poison-barb": `poison`,
    "soft-sand": `ground`,
    "sharp-beak": `flying`,
    "twisted-spoon": `psychic`,
    "silver-powder": `bug`,
    "hard-stone": `rock`,
    "spell-tag": `ghost`,
    "dragon-fang": `dragon`,
    "black-glasses": `dark`,
    "metal-coat": `steel`,
    "silk-scarf": `normal`,
    "fairy-feather": `fairy`,
  },
  K = [
    ...Object.entries(G).map(([e, t]) => xt(t, e, 0)),
    {
      key: `oran-berry`,
      rarity: 0,
      desc: t(`+15 PS máximos.`),
      mods: [{ stat: `maxHp`, add: 15 }],
    },
    {
      key: `quick-powder`,
      rarity: 0,
      desc: t(`+7% velocidad de movimiento.`),
      mods: [{ stat: `moveSpeed`, mul: 1.07 }],
    },
    {
      key: `bright-powder`,
      rarity: 0,
      desc: t(`+4% evasión.`),
      mods: [{ stat: `evasion`, add: 0.04 }],
    },
    {
      key: `amulet-coin`,
      rarity: 0,
      desc: t(`+20% Pokédólares.`),
      mods: [{ stat: `gold`, mul: 1.2 }],
    },
    {
      key: `scope-lens`,
      rarity: 0,
      desc: t(`+6% probabilidad de crítico.`),
      mods: [{ stat: `critChance`, add: 0.06 }],
    },
    {
      key: `wide-lens`,
      rarity: 0,
      desc: t(`+10% área de los movimientos.`),
      mods: [{ stat: `area`, mul: 1.1 }],
    },
    {
      key: `zoom-lens`,
      rarity: 0,
      desc: t(`+15% velocidad de proyectil y +3% crítico.`),
      mods: [
        { stat: `projSpeed`, mul: 1.15 },
        { stat: `critChance`, add: 0.03 },
      ],
    },
    {
      key: `soothe-bell`,
      rarity: 0,
      desc: t(`+15% curación recibida y +0.3 regeneración.`),
      mods: [
        { stat: `healing`, mul: 1.15 },
        { stat: `regen`, add: 0.3 },
      ],
    },
    {
      key: `lax-incense`,
      rarity: 0,
      desc: t(`+5 armadura.`),
      mods: [{ stat: `armor`, add: 5 }],
    },
    {
      key: `honey`,
      rarity: 0,
      desc: t(`+1.5 rango de recogida.`),
      mods: [{ stat: `pickupRange`, add: 1.5 }],
    },
    {
      key: `cleanse-tag`,
      rarity: 0,
      desc: t(`+15% daño a élites, Alfa y jefes.`),
      mods: [{ stat: `eliteDamage`, mul: 1.15 }],
    },
    {
      key: `potion`,
      rarity: 0,
      desc: t(`+0.6 regeneración de PS por segundo.`),
      mods: [{ stat: `regen`, add: 0.6 }],
    },
    {
      key: `lucky-punch`,
      rarity: 0,
      desc: t(`+10 suerte y +3% crítico.`),
      mods: [
        { stat: `luck`, add: 10 },
        { stat: `critChance`, add: 0.03 },
      ],
    },
    {
      key: `big-nugget`,
      rarity: 0,
      desc: t(
        `Las Poké Balls cuestan un 8% menos (hasta -40%) y +5% Pokédólares.`,
      ),
      mods: [{ stat: `gold`, mul: 1.05 }],
      max: 5,
    },
    {
      key: `grip-claw`,
      rarity: 0,
      desc: t(`Tus golpes tienen un 4% de enraizar al enemigo.`),
      mods: [],
      max: 5,
    },
    {
      key: `berry-juice`,
      rarity: 0,
      desc: t(`Cada baja tiene un 5% de curarte un 2% de tus PS máximos.`),
      mods: [],
      max: 8,
    },
    {
      key: `muscle-band`,
      rarity: 1,
      desc: t(`+15% daño físico.`),
      mods: [{ stat: `physical`, mul: 1.15 }],
    },
    {
      key: `wise-glasses`,
      rarity: 1,
      desc: t(`+15% daño especial.`),
      mods: [{ stat: `special`, mul: 1.15 }],
    },
    {
      key: `quick-claw`,
      rarity: 1,
      desc: t(`+10% velocidad de ataque.`),
      mods: [{ stat: `attackSpeed`, mul: 1.1 }],
    },
    {
      key: `razor-claw`,
      rarity: 1,
      desc: t(`+30% daño crítico.`),
      mods: [{ stat: `critDamage`, add: 0.3 }],
    },
    {
      key: `shell-bell`,
      rarity: 1,
      desc: t(`Recuperas un 0.8% del daño que infliges.`),
      mods: [],
    },
    {
      key: `leftovers`,
      rarity: 1,
      desc: t(`+1.2 regeneración de PS por segundo.`),
      mods: [{ stat: `regen`, add: 1.2 }],
    },
    {
      key: `rocky-helmet`,
      rarity: 1,
      desc: t(`Los enemigos que te tocan reciben 25 de daño (espinas).`),
      mods: [{ stat: `thorns`, add: 25 }],
    },
    {
      key: `light-clay`,
      rarity: 1,
      desc: t(`+20% duración de movimientos y estados.`),
      mods: [{ stat: `duration`, mul: 1.2 }],
    },
    {
      key: `air-balloon`,
      rarity: 1,
      desc: t(`+1 salto extra y +15% altura de salto.`),
      mods: [
        { stat: `extraJumps`, add: 1 },
        { stat: `jumpHeight`, mul: 1.15 },
      ],
    },
    {
      key: `white-herb`,
      rarity: 1,
      desc: t(`+25% probabilidad de estados alterados.`),
      mods: [{ stat: `statusChance`, mul: 1.25 }],
    },
    {
      key: `power-herb`,
      rarity: 1,
      desc: t(`+30% daño de quemaduras, venenos y similares.`),
      mods: [{ stat: `statusDamage`, mul: 1.3 }],
    },
    {
      key: `sitrus-berry`,
      rarity: 1,
      desc: t(`Al bajar del 30% de PS recuperas un 35% (cada 45 s).`),
      mods: [{ stat: `maxHp`, add: 10 }],
    },
    {
      key: `lucky-egg`,
      rarity: 1,
      desc: t(`+15% experiencia.`),
      mods: [{ stat: `xpGain`, mul: 1.15 }],
    },
    {
      key: `big-root`,
      rarity: 1,
      desc: t(`+3% robo de vida y +15% curación.`),
      mods: [
        { stat: `lifesteal`, add: 0.03 },
        { stat: `healing`, mul: 1.15 },
      ],
    },
    {
      key: `smoke-ball`,
      rarity: 1,
      desc: t(`Al recibir daño: 25% de volverte invisible 1.5 s. +3% evasión.`),
      mods: [{ stat: `evasion`, add: 0.03 }],
    },
    {
      key: `metronome`,
      rarity: 1,
      desc: t(`Ganas daño mientras no recibas golpes (hasta +40%).`),
      mods: [],
    },
    {
      key: `flame-orb`,
      rarity: 1,
      desc: t(`Tus golpes tienen un 5% de quemar y +10% daño de estados.`),
      mods: [{ stat: `statusDamage`, mul: 1.1 }],
      max: 5,
    },
    {
      key: `toxic-orb`,
      rarity: 1,
      desc: t(
        `Tus golpes tienen un 6% de envenenar y +10% probabilidad de estados.`,
      ),
      mods: [{ stat: `statusChance`, mul: 1.1 }],
      max: 5,
    },
    {
      key: `snowball`,
      rarity: 1,
      desc: t(
        `Tus golpes tienen un 6% de enfriar (tres enfriamientos congelan) y +3 armadura.`,
      ),
      mods: [{ stat: `armor`, add: 3 }],
      max: 5,
    },
    {
      key: `binding-band`,
      rarity: 1,
      desc: t(
        `+20% daño a enemigos aturdidos, enraizados, paralizados, congelados o dormidos.`,
      ),
      mods: [],
      max: 5,
    },
    {
      key: `smooth-rock`,
      rarity: 1,
      desc: t(
        `+1 rebote a los proyectiles simples (Proyectil y Ráfaga) y +10% velocidad de proyectil.`,
      ),
      mods: [
        { stat: `bounces`, add: 1 },
        { stat: `projSpeed`, mul: 1.1 },
      ],
      max: 3,
    },
    {
      key: `white-flute`,
      rarity: 1,
      desc: t(`+12% enemigos, pero +10% experiencia y +5 suerte.`),
      mods: [
        { stat: `enemyAmount`, mul: 1.12 },
        { stat: `xpGain`, mul: 1.1 },
        { stat: `luck`, add: 5 },
      ],
      max: 5,
    },
    {
      key: `adrenaline-orb`,
      rarity: 1,
      desc: t(
        `Al recibir un golpe: +20% velocidad y +12% velocidad de ataque durante 3 s.`,
      ),
      mods: [],
      max: 3,
    },
    {
      key: `repel`,
      rarity: 1,
      desc: t(`-8% enemigos y +6% velocidad. Para cuando la horda aprieta.`),
      mods: [
        { stat: `enemyAmount`, mul: 0.92 },
        { stat: `moveSpeed`, mul: 1.06 },
      ],
      max: 3,
    },
    {
      key: `life-orb`,
      rarity: 2,
      desc: t(`+30% daño total, pero -10% PS máximos.`),
      mods: [
        { stat: `damage`, mul: 1.3 },
        { stat: `maxHp`, mul: 0.9 },
      ],
      max: 5,
    },
    {
      key: `choice-band`,
      rarity: 2,
      desc: t(`+35% daño físico, -8% velocidad de ataque.`),
      mods: [
        { stat: `physical`, mul: 1.35 },
        { stat: `attackSpeed`, mul: 0.92 },
      ],
      max: 5,
    },
    {
      key: `choice-specs`,
      rarity: 2,
      desc: t(`+35% daño especial, -8% velocidad de ataque.`),
      mods: [
        { stat: `special`, mul: 1.35 },
        { stat: `attackSpeed`, mul: 0.92 },
      ],
      max: 5,
    },
    {
      key: `choice-scarf`,
      rarity: 2,
      desc: t(`+20% velocidad y +10% velocidad de ataque.`),
      mods: [
        { stat: `moveSpeed`, mul: 1.2 },
        { stat: `attackSpeed`, mul: 1.1 },
      ],
      max: 5,
    },
    {
      key: `expert-belt`,
      rarity: 2,
      desc: t(`+30% daño con ataques muy eficaces.`),
      mods: [{ stat: `superEffective`, mul: 1.3 }],
    },
    {
      key: `focus-band`,
      rarity: 2,
      desc: t(
        `15% de sobrevivir a un golpe letal con 1 PS (una vez cada 20 s).`,
      ),
      mods: [],
      max: 4,
    },
    {
      key: `kings-rock`,
      rarity: 2,
      desc: t(`+6% probabilidad de hacer retroceder (aturdir).`),
      mods: [{ stat: `flinch`, add: 0.06 }],
    },
    {
      key: `assault-vest`,
      rarity: 2,
      desc: t(`+12 armadura y +12% PS máximos.`),
      mods: [
        { stat: `armor`, add: 12 },
        { stat: `maxHp`, mul: 1.12 },
      ],
    },
    {
      key: `eviolite`,
      rarity: 2,
      desc: t(`Si aún puedes evolucionar: +50% armadura y +25% PS.`),
      mods: [],
      max: 1,
    },
    {
      key: `exp-share`,
      rarity: 2,
      desc: t(`+25% experiencia y +2 rango de recogida.`),
      mods: [
        { stat: `xpGain`, mul: 1.25 },
        { stat: `pickupRange`, add: 2 },
      ],
    },
    {
      key: `macho-brace`,
      rarity: 2,
      desc: t(`+50% experiencia, -10% velocidad.`),
      mods: [
        { stat: `xpGain`, mul: 1.5 },
        { stat: `moveSpeed`, mul: 0.9 },
      ],
      max: 3,
    },
    {
      key: `black-sludge`,
      rarity: 2,
      desc: t(`+2 regeneración. Tus venenos duran un 25% más y dañan +20%.`),
      mods: [
        { stat: `regen`, add: 2 },
        { stat: `statusDamage`, mul: 1.2 },
      ],
    },
    {
      key: `star-piece`,
      rarity: 2,
      desc: t(`+20 suerte: mejores rarezas y más botín.`),
      mods: [{ stat: `luck`, add: 20 }],
    },
    {
      key: `stick`,
      rarity: 2,
      desc: t(`3% de probabilidad de que un golpe haga ×8 de daño: ¡Bonk!`),
      mods: [],
      max: 4,
    },
    {
      key: `razor-fang`,
      rarity: 2,
      desc: t(
        `Rematas al instante a los enemigos (no jefes) por debajo del 8% de PS (+4% por unidad extra).`,
      ),
      mods: [],
      max: 4,
    },
    {
      key: `shed-shell`,
      rarity: 2,
      desc: t(
        `Eres invulnerable mientras te deslizas y el deslizamiento se recarga un 40% más rápido.`,
      ),
      mods: [],
      max: 1,
    },
    {
      key: `cell-battery`,
      rarity: 2,
      desc: t(
        `+1.5% velocidad de ataque por cada 10 bajas de racha (hasta +25%).`,
      ),
      mods: [],
      max: 2,
    },
    {
      key: `lum-berry`,
      rarity: 2,
      desc: t(
        `Cada 30 s, si te falta vida, te cura un 12% de PS. +10% curación recibida.`,
      ),
      mods: [{ stat: `healing`, mul: 1.1 }],
      max: 3,
    },
    {
      key: `focus-sash`,
      rarity: 3,
      desc: t(`Sobrevives a un golpe letal una vez por fase.`),
      mods: [],
      max: 1,
    },
    {
      key: `pp-max`,
      rarity: 3,
      desc: t(`+1 proyectil a todos los movimientos.`),
      mods: [{ stat: `projectiles`, add: 1 }],
    },
    {
      key: `max-elixir`,
      rarity: 3,
      desc: t(`+20% velocidad de ataque.`),
      mods: [{ stat: `attackSpeed`, mul: 1.2 }],
    },
    {
      key: `shiny-stone`,
      rarity: 3,
      desc: t(`+15% daño total y +15% área.`),
      mods: [
        { stat: `damage`, mul: 1.15 },
        { stat: `area`, mul: 1.15 },
      ],
    },
    {
      key: `dusk-stone`,
      rarity: 3,
      desc: t(`+40% daño crítico y +8% crítico.`),
      mods: [
        { stat: `critDamage`, add: 0.4 },
        { stat: `critChance`, add: 0.08 },
      ],
    },
    {
      key: `comet-shard`,
      rarity: 3,
      desc: t(`+40% Pokédólares y +30 suerte.`),
      mods: [
        { stat: `gold`, mul: 1.4 },
        { stat: `luck`, add: 30 },
      ],
    },
    {
      key: `thunder-stone`,
      rarity: 3,
      desc: t(`Tus golpes críticos lanzan un rayo a un enemigo cercano.`),
      mods: [{ stat: `critChance`, add: 0.04 }],
      max: 5,
    },
    {
      key: `fire-stone`,
      rarity: 3,
      desc: t(`Los enemigos quemados explotan al morir.`),
      mods: [],
      max: 3,
    },
    {
      key: `protector`,
      rarity: 3,
      desc: t(
        `+20 armadura, +15% PS máximos y +40 espinas, pero -5% velocidad.`,
      ),
      mods: [
        { stat: `armor`, add: 20 },
        { stat: `maxHp`, mul: 1.15 },
        { stat: `thorns`, add: 40 },
        { stat: `moveSpeed`, mul: 0.95 },
      ],
      max: 3,
    },
    {
      key: `griseous-orb`,
      rarity: 3,
      desc: t(
        `Cada enemigo derrotado tiene un 12% de dejar una sombra que estalla al momento y maldice a los de alrededor.`,
      ),
      mods: [],
      max: 2,
    },
    {
      key: `reaper-cloth`,
      rarity: 3,
      desc: t(`Cada 100 bajas en la partida: +1% daño (hasta +30%).`),
      mods: [],
      max: 2,
    },
    {
      key: `electirizer`,
      rarity: 3,
      desc: t(
        `Cada 2.5 s cae un rayo sobre 3 enemigos cercanos y los puede paralizar (+1 rayo por unidad).`,
      ),
      mods: [],
      max: 3,
    },
    {
      key: `ice-stone`,
      rarity: 3,
      desc: t(
        `Los enemigos congelados o enfriados estallan en esquirlas de hielo al morir y enfrían a los de alrededor.`,
      ),
      mods: [{ stat: `statusChance`, mul: 1.1 }],
      max: 3,
    },
    {
      key: `leaf-stone`,
      rarity: 3,
      desc: t(
        `Cada baja tiene un 10% de soltar un remolino de hojas que corta a los cercanos y te cura un 1% de PS.`,
      ),
      mods: [],
      max: 3,
    },
    {
      key: `revive`,
      rarity: 3,
      desc: t(`Revives una vez con el 35% de PS.`),
      mods: [],
      max: 2,
    },
    {
      key: `max-revive`,
      rarity: 4,
      desc: t(`Revives una vez con el 60% de PS.`),
      mods: [],
      max: 3,
    },
    {
      key: `rare-candy`,
      rarity: 4,
      desc: t(`Subes 2 niveles al instante y +5% daño.`),
      mods: [{ stat: `damage`, mul: 1.05 }],
    },
    {
      key: `master-ball`,
      rarity: 4,
      desc: t(
        `+25% daño a todo. Garantiza la captura en los Encuentros Salvajes.`,
      ),
      mods: [{ stat: `damage`, mul: 1.25 }],
      max: 1,
    },
    {
      key: `moon-stone`,
      rarity: 4,
      desc: t(`+2 proyectiles y +25% área.`),
      mods: [
        { stat: `projectiles`, add: 2 },
        { stat: `area`, mul: 1.25 },
      ],
      max: 2,
    },
    {
      key: `lustrous-orb`,
      rarity: 4,
      desc: t(
        `+20% área y +1 proyectil. Cada 8 s abres una grieta que atrae a los enemigos cercanos y estalla.`,
      ),
      mods: [
        { stat: `area`, mul: 1.2 },
        { stat: `projectiles`, add: 1 },
      ],
      max: 1,
    },
    {
      key: `adamant-orb`,
      rarity: 4,
      desc: t(
        `+15% daño. Al recibir un golpe detienes el tiempo: los enemigos cercanos se quedan quietos 3 s (cada 20 s).`,
      ),
      mods: [{ stat: `damage`, mul: 1.15 }],
      max: 1,
    },
    {
      key: `dawn-stone`,
      rarity: 4,
      desc: t(`+30% a todo el daño y +20% velocidad de ataque.`),
      mods: [
        { stat: `damage`, mul: 1.3 },
        { stat: `attackSpeed`, mul: 1.2 },
      ],
      max: 2,
    },
    {
      key: `sun-stone`,
      rarity: 4,
      desc: t(
        `+10% daño. Cada 6 s cae un rayo solar sobre el enemigo más fuerte cercano: gran explosión de Fuego que quema.`,
      ),
      mods: [{ stat: `damage`, mul: 1.1 }],
      max: 2,
    },
    {
      key: `soul-dew`,
      rarity: 4,
      desc: t(
        `+20% daño especial y +15% área. Tu Ultimate se carga un 40% más rápido.`,
      ),
      mods: [
        { stat: `special`, mul: 1.2 },
        { stat: `area`, mul: 1.15 },
      ],
      max: 1,
    },
    {
      key: `silver-wing`,
      rarity: 4,
      desc: t(
        `+1 salto extra y +12% velocidad. Cada 5 s una ráfaga de viento golpea y aparta a los enemigos que te rodean.`,
      ),
      mods: [
        { stat: `extraJumps`, add: 1 },
        { stat: `moveSpeed`, mul: 1.12 },
      ],
      max: 1,
    },
    {
      key: `rainbow-wing`,
      rarity: 4,
      desc: t(
        `Una vez por zona, al caer debilitado renaces en llamas con el 50% de PS y abrasas todo a tu alrededor.`,
      ),
      mods: [{ stat: `healing`, mul: 1.15 }],
      max: 1,
    },
  ],
  Ct = new Map(K.map((e) => [e.key, e])),
  q = [
    {
      key: `protein`,
      name: t(`Proteína`),
      icon: `protein`,
      stat: `physical`,
      per: 0.1,
      kind: `mul`,
      desc: t(`Daño físico`),
    },
    {
      key: `calcium`,
      name: t(`Calcio`),
      icon: `calcium`,
      stat: `special`,
      per: 0.1,
      kind: `mul`,
      desc: t(`Daño especial`),
    },
    {
      key: `iron`,
      name: t(`Hierro`),
      icon: `iron`,
      stat: `armor`,
      per: 5,
      kind: `add`,
      desc: t(`Armadura`),
    },
    {
      key: `zinc`,
      name: t(`Zinc`),
      icon: `zinc`,
      stat: `shieldMax`,
      per: 12,
      kind: `add`,
      desc: t(`Escudo regenerable`),
    },
    {
      key: `carbos`,
      name: t(`Carburante`),
      icon: `carbos`,
      stat: `moveSpeed`,
      per: 0.07,
      kind: `mul`,
      desc: t(`Velocidad de movimiento`),
    },
    {
      key: `hp-up`,
      name: t(`Más PS`),
      icon: `hp-up`,
      stat: `maxHp`,
      per: 18,
      kind: `add`,
      desc: t(`PS máximos`),
    },
    {
      key: `pp-up`,
      name: t(`Más PP`),
      icon: `pp-up`,
      stat: `projectiles`,
      per: 0.5,
      kind: `add`,
      desc: t(`Proyectiles (+1 cada 2 niveles)`),
    },
    {
      key: `ether`,
      name: t(`Éter`),
      icon: `ether`,
      stat: `attackSpeed`,
      per: 0.08,
      kind: `mul`,
      desc: t(`Velocidad de ataque`),
    },
    {
      key: `dire-hit`,
      name: t(`Directo X`),
      icon: `dire-hit`,
      stat: `critChance`,
      per: 0.05,
      kind: `add`,
      desc: t(`Probabilidad de crítico`),
    },
    {
      key: `x-speed`,
      name: t(`Velocidad X`),
      icon: `x-speed`,
      stat: `projSpeed`,
      per: 0.12,
      kind: `mul`,
      desc: t(`Velocidad de proyectil`),
    },
    {
      key: `x-defense`,
      name: t(`Defensa X`),
      icon: `x-defense`,
      stat: `evasion`,
      per: 0.035,
      kind: `add`,
      desc: t(`Evasión`),
    },
    {
      key: `x-attack`,
      name: t(`Ataque X`),
      icon: `x-attack`,
      stat: `statusChance`,
      per: 0.15,
      kind: `mul`,
      desc: t(`Probabilidad de estados`),
    },
    {
      key: `stardust`,
      name: t(`Polvo Estelar`),
      icon: `stardust`,
      stat: `area`,
      per: 0.1,
      kind: `mul`,
      desc: t(`Área de efecto`),
    },
    {
      key: `elixir`,
      name: t(`Elixir`),
      icon: `elixir`,
      stat: `duration`,
      per: 0.1,
      kind: `mul`,
      desc: t(`Duración`),
    },
    {
      key: `super-potion`,
      name: t(`Superpoción`),
      icon: `super-potion`,
      stat: `regen`,
      per: 0.7,
      kind: `add`,
      desc: t(`Regeneración de PS`),
    },
    {
      key: `nugget`,
      name: t(`Pepita`),
      icon: `nugget`,
      stat: `gold`,
      per: 0.15,
      kind: `mul`,
      desc: t(`Pokédólares`),
    },
    {
      key: `exp-candy`,
      name: t(`Caramelo Exp.`),
      icon: `rare-candy`,
      stat: `xpGain`,
      per: 0.1,
      kind: `mul`,
      desc: t(`Experiencia`),
    },
    {
      key: `star-piece-v`,
      name: t(`Trozo Estrella`),
      icon: `star-piece`,
      stat: `luck`,
      per: 10,
      kind: `add`,
      desc: t(`Suerte`),
    },
    {
      key: `max-potion`,
      name: t(`Máx. Poción`),
      icon: `max-potion`,
      stat: `lifesteal`,
      per: 0.02,
      kind: `add`,
      desc: t(`Robo de vida`),
    },
    {
      key: `escape-rope`,
      name: t(`Cuerda Huida`),
      icon: `escape-rope`,
      stat: `pickupRange`,
      per: 1.2,
      kind: `add`,
      desc: t(`Rango de recogida`),
    },
    {
      key: `cursed`,
      name: t(`Incienso Maldito`),
      icon: `cleanse-tag`,
      stat: `difficulty`,
      per: 0.12,
      kind: `mul`,
      desc: t(`Más enemigos y más fuertes, pero +6% XP y +6% ₽ por nivel`),
    },
  ],
  wt = new Map(q.map((e) => [e.key, e]));
function Tt(e, t, n) {
  let r = e.per * n;
  return e.kind === `add`
    ? { stat: e.stat, add: r }
    : { stat: e.stat, mul: 1 + r };
}
var Et = {
    novedad: { name: t(`Novedad`), color: `#2f7bf5` },
    actualizacion: { name: t(`Actualización`), color: `#1fa463` },
    evento: { name: t(`Evento`), color: `#f2a516` },
    parche: { name: t(`Parche`), color: `#8a5cf6` },
    aviso: { name: t(`Aviso`), color: `#e5484d` },
  },
  Dt = e.filter((e) => e.id !== `es`),
  Ot = (e, t) =>
    t !== `es` && e.tr?.[t]?.title
      ? e.tr[t]
      : { title: e.title, summary: e.summary, body: e.body },
  kt = { title: 90, summary: 220, body: 2e4, cover: 400, list: 30 },
  At = { bug: t(`Fallo`), idea: t(`Idea`), otro: t(`Otro`) },
  jt = {
    open: t(`Nuevo`),
    doing: t(`En curso`),
    done: t(`Resuelto`),
    closed: t(`Descartado`),
  },
  Mt = { message: 2e3, min: 10, context: 6e3, note: 500 },
  J = {
    rojo: `#e5484d`,
    azul: `#2f7bf5`,
    verde: `#1fa463`,
    amarillo: `#d99a00`,
    naranja: `#f27a16`,
    morado: `#8a5cf6`,
    rosa: `#e64ca0`,
    gris: `#6b7a90`,
  },
  Y = {
    info: t(`Información`),
    nuevo: t(`Nuevo`),
    aviso: t(`Aviso`),
    consejo: t(`Consejo`),
  },
  Nt = [
    [`# Título`, `Título de sección`],
    [`## Subtítulo`, `Subtítulo`],
    [`**negrita**`, `Negrita`],
    [`*cursiva*`, `Cursiva`],
    [`__subrayado__`, `Subrayado`],
    [`~~tachado~~`, `Tachado`],
    [`==resaltado==`, `Resaltado`],
    [`{rojo|texto}`, `Color: ` + Object.keys(J).join(`, `)],
    [`[texto](https://…)`, `Enlace`],
    [`![pie](https://…)`, `Imagen en su propia línea`],
    [`- elemento`, `Lista`],
    [`1. elemento`, `Lista numerada`],
    [`> cita`, `Cita`],
    [`---`, `Separador`],
    [`:::info … :::`, `Recuadro: ` + Object.keys(Y).join(`, `)],
    [`{pkm:25}`, `Icono de un Pokémon (n.º)`],
    [`{obj:poke-ball}`, `Icono de un objeto`],
  ],
  X = (e) =>
    e
      .replace(/&/g, `&amp;`)
      .replace(/</g, `&lt;`)
      .replace(/>/g, `&gt;`)
      .replace(/"/g, `&quot;`)
      .replace(/'/g, `&#39;`);
function Z(e) {
  let t = e.trim();
  return /^https?:\/\/[^\s]+$/i.test(t) ||
    (/^\/?[A-Za-z0-9_\-./?=&;#%]+$/.test(t) &&
      !/^\/\//.test(t) &&
      !t.includes(`:`))
    ? t
    : ``;
}
function Q(e, t) {
  let n = [],
    r = (e) => `\u0000${n.push(e) - 1}\u0000`,
    i = X(e);
  return (
    (i = i.replace(/!\[([^\]]*)\]\(([^)\s]+)\)/g, (e, t, n) => {
      let i = Z(n);
      return i
        ? r(`<img class="nw-img" src="${i}" alt="${t}" loading="lazy">`)
        : e;
    })),
    (i = i.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (e, t, n) => {
      let i = Z(n);
      return i
        ? r(`<a href="${i}" target="_blank" rel="noopener noreferrer">${t}</a>`)
        : e;
    })),
    (i = i.replace(/\{pkm:(\d{1,4})\}/g, (e, n) =>
      t.mon
        ? r(
            `<span class="nw-mon"><img src="${t.mon(Number(n))}" alt=""></span>`,
          )
        : e,
    )),
    (i = i.replace(/\{obj:([a-z0-9-]{1,40})\}/g, (e, n) =>
      t.item ? r(`<img class="nw-obj" src="${t.item(n)}" alt="">`) : e,
    )),
    (i = i
      .replace(/\*\*(.+?)\*\*/g, `<b>$1</b>`)
      .replace(/__(.+?)__/g, `<u>$1</u>`)
      .replace(/~~(.+?)~~/g, `<s>$1</s>`)
      .replace(/==(.+?)==/g, `<mark>$1</mark>`)
      .replace(/(^|[^*\w])\*(?!\s)(.+?)\*(?!\w)/g, `$1<i>$2</i>`)
      .replace(/\{([a-z]+)\|(.+?)\}/g, (e, t, n) =>
        J[t] ? `<span style="color:${J[t]}">${n}</span>` : e,
      )),
    i.replace(/\u0000(\d+)\u0000/g, (e, t) => n[Number(t)])
  );
}
function $(e, t = {}) {
  let n = e.replace(/\r/g, ``).split(`
`),
    r = [],
    i = [],
    a = null,
    o = [],
    s = null,
    c = () => {
      (i.length &&
        (r.push(`<p>${i.map((e) => Q(e, t)).join(`<br>`)}</p>`), (i = [])),
        (a &&=
          (r.push(
            `<${a.tag}>${a.items.map((e) => `<li>${Q(e, t)}</li>`).join(``)}</${a.tag}>`,
          ),
          null)),
        o.length &&
          (r.push(
            `<blockquote>${o.map((e) => Q(e, t)).join(`<br>`)}</blockquote>`,
          ),
          (o = [])));
    };
  for (let e of n) {
    let n = e.trimEnd(),
      l = /^:::\s*([a-z]+)\s*$/.exec(n);
    if (s) {
      /^:::\s*$/.test(n)
        ? (r.push(
            `<div class="nw-box nw-${s.kind}"><b class="nw-box-h">${Y[s.kind]}</b>${$(
              s.lines.join(`
`),
              t,
            )}</div>`,
          ),
          (s = null))
        : s.lines.push(e);
      continue;
    }
    if (l && Y[l[1]]) {
      (c(), (s = { kind: l[1], lines: [] }));
      continue;
    }
    if (!n.trim()) {
      c();
      continue;
    }
    let u;
    if ((u = /^(#{1,2})\s+(.+)$/.exec(n))) {
      (c(),
        r.push(
          u[1].length === 1
            ? `<h3>${Q(u[2], t)}</h3>`
            : `<h4>${Q(u[2], t)}</h4>`,
        ));
      continue;
    }
    if (/^(-{3,}|\*{3,})$/.test(n.trim())) {
      (c(), r.push(`<hr>`));
      continue;
    }
    if ((u = /^\s*!\[([^\]]*)\]\(([^)\s]+)\)\s*$/.exec(n))) {
      c();
      let e = Z(X(u[2]));
      if (e) {
        r.push(
          `<figure><img class="nw-img" src="${e}" alt="${X(u[1])}" loading="lazy">${u[1] ? `<figcaption>${Q(u[1], t)}</figcaption>` : ``}</figure>`,
        );
        continue;
      }
    }
    if ((u = /^>\s?(.*)$/.exec(n))) {
      if (i.length || a) {
        let e = o;
        ((o = []), c(), (o = e));
      }
      o.push(u[1]);
      continue;
    }
    let d = /^\s*[-*•]\s+(.+)$/.exec(n),
      f = /^\s*\d+[.)]\s+(.+)$/.exec(n);
    if (d || f) {
      let e = d ? `ul` : `ol`;
      ((i.length || o.length || (a && a.tag !== e)) && c(),
        (a ||= { tag: e, items: [] }),
        a.items.push((d ?? f)[1]));
    } else ((a || o.length) && c(), i.push(n));
  }
  return (
    s &&
      r.push(
        `<div class="nw-box nw-${s.kind}"><b class="nw-box-h">${Y[s.kind]}</b>${$(
          s.lines.join(`
`),
          t,
        )}</div>`,
      ),
    c(),
    r.join(``)
  );
}
var Pt = (e, t = 160) => {
  let n = e
    .replace(/:::\s*[a-z]*/g, ``)
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ``)
    .replace(/\[([^\]]+)\]\([^)]*\)/g, `$1`)
    .replace(/\{[a-z]+\|(.+?)\}/g, `$1`)
    .replace(/\{(pkm|obj):[^}]+\}/g, ``)
    .replace(/[#*_~=>`-]+/g, ` `)
    .replace(/\s+/g, ` `)
    .trim();
  return n.length > t ? n.slice(0, t - 1).trimEnd() + `…` : n;
};
export {
  f as $,
  ft as A,
  ze as At,
  Ae as B,
  ge as Bt,
  ht as C,
  re as Ct,
  H as D,
  ae as Dt,
  ut as E,
  ie as Et,
  R as F,
  N as Ft,
  Ce as G,
  u as Gt,
  k as H,
  s as Ht,
  j as I,
  De as It,
  x as J,
  r as Jt,
  ke as K,
  n as Kt,
  h as L,
  Je as Lt,
  mt as M,
  Re as Mt,
  d as N,
  Fe as Nt,
  dt as O,
  he as Ot,
  ve as P,
  Ie as Pt,
  Ke as Q,
  oe as R,
  L as Rt,
  W as S,
  F as St,
  lt as T,
  se as Tt,
  we as U,
  l as Ut,
  xe as V,
  be as Vt,
  Oe as W,
  c as Wt,
  z as X,
  Te as Y,
  o as Yt,
  de as Z,
  G as _,
  I as _t,
  J as a,
  rt as at,
  wt as b,
  je as bt,
  kt as c,
  B as ct,
  Ot as d,
  Ze as dt,
  qe as et,
  $ as f,
  tt as ft,
  vt as g,
  $e as gt,
  bt as h,
  et as ht,
  Y as i,
  He as it,
  U as j,
  Se as jt,
  pt as k,
  me as kt,
  Et as l,
  Ue as lt,
  yt as m,
  Xe as mt,
  Mt as n,
  ce as nt,
  Nt as o,
  ye as ot,
  K as p,
  Ye as pt,
  Ee as q,
  i as qt,
  jt as r,
  Be as rt,
  Dt as s,
  Qe as st,
  At as t,
  Ge as tt,
  Pt as u,
  nt as ut,
  q as v,
  le as vt,
  _t as w,
  P as wt,
  Tt as x,
  Ve as xt,
  Ct as y,
  g as yt,
  We as z,
  _e as zt,
};
