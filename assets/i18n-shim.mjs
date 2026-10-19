// Pure rule extraction uses the original Spanish keys; no DOM is needed on Node.
export const t = [
  { id: "es" },
  { id: "en" },
  { id: "pt" },
  { id: "fr" },
  { id: "ja" },
  { id: "zh" },
];
export const u = (value, args) =>
  args
    ? value.replace(/\{(\w+)\}/g, (_, key) => String(args[key] ?? key))
    : value;
