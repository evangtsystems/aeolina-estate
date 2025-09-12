import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import all namespaces you have
import en_elea from "./resources/en/elea.json";
import el_elea from "./resources/el/elea.json";

import en_oliva from "./resources/en/oliva.json";
import el_oliva from "./resources/el/oliva.json";

import en_natalia from "./resources/en/natalia.json";
import el_natalia from "./resources/el/natalia.json";

import en_home from "./resources/en/home.json";
import el_home from "./resources/el/home.json";

import en_villas from "./resources/en/villas.json"
import el_villas from "./resources/el/villas.json"

import en_location from "./resources/en/location.json";
import el_location from "./resources/el/location.json"

import en_header from "./resources/en/header.json"
import el_header from "./resources/el/header.json"

// Add more as you create them
const resources = {
  en: {
    elea: en_elea || {},
    oliva: en_oliva || {},
    natalia: en_natalia || {},
    home: en_home || {},
    villas: en_villas || {},
    location:en_location || {},
    header: en_header || {}
  },
  el: {
    elea: el_elea || {},
    oliva: el_oliva || {},
    natalia: el_natalia || {},
    home: el_home || {},
    villas: el_villas || {},
    location: el_location || {},
    header: el_header || {}

  }
};

// Detect initial language (URL prefix > localStorage > env > default)
function detectInitialLang() {
  if (typeof window !== "undefined") {
    const m = window.location.pathname.match(/^\/(en|el)(\/|$)/);
    if (m) return m[1];
    const stored = localStorage.getItem("lang");
    if (stored) return stored;
  }
  // 🔑 On server: force EN to avoid mismatches
  return "en";
}


if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
  resources,
  lng: detectInitialLang(),
  fallbackLng: "en",
  supportedLngs: ["en", "el"],
  defaultNS: "elea",
  ns: ["elea", "oliva"],
  interpolation: { escapeValue: false },

  // 👇 important for SSR to avoid hydration mismatches
  react: { useSuspense: false },
  initImmediate: false,
  returnEmptyString: false,
  returnNull: false
});

}

// Optional helper for LanguageSwitcher
export function setLang(lng) {
  try { document.documentElement.setAttribute("lang", lng); } catch {}
  localStorage?.setItem?.("lang", lng);
  return i18n.changeLanguage(lng);
}

export default i18n;
