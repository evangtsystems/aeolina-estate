import i18next from "i18next";
import elDict from "./wording/el.json";

/** Escape regex specials */
function esc(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/** Preserve capitalization style of the original token */
function keepCase(src, repl) {
  if (src.toUpperCase() === src) return repl.toUpperCase();
  if (src[0] === src[0].toUpperCase()) return repl[0].toUpperCase() + repl.slice(1);
  return repl;
}

/** Word/phrase replacement (phrases first, then single words) */
export function tw(text) {
  const lang = i18next?.language || "en";
  const dict = lang === "el" ? elDict : null;
  if (!dict || !text) return text;

  let out = text;

  // 1) Phrases (contain space) — longest first
  const phrases = Object.keys(dict).filter(k => k.includes(" ")).sort((a, b) => b.length - a.length);
  for (const ph of phrases) {
    out = out.replace(new RegExp(esc(ph), "gi"), (m) => keepCase(m, dict[ph]));
  }

  // 2) Single words — word boundaries, longest first
  const singles = Object.keys(dict).filter(k => !k.includes(" ")).sort((a, b) => b.length - a.length);
  for (const w of singles) {
    out = out.replace(new RegExp(`\\b${esc(w)}\\b`, "gi"), (m) => keepCase(m, dict[w]));
  }

  return out;
}

/** Map over arrays of strings (e.g., bullet lists) */
export function twList(items) {
  if (!Array.isArray(items)) return [];
  return items.map((s) => tw(s));
}
