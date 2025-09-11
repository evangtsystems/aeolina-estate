import React from "react";
import { useRouter } from "next/router";
import i18n from "../i18n/i18n";

const rePrefix = /^\/(en|el)(\/|$)/;

export default function LanguageSwitcher() {
  const router = useRouter();

  const btn = {
    padding: "6px 10px",
    border: "1px solid #ddd",
    borderRadius: 8,
    background: "#fff",
    cursor: "pointer",
    fontSize: 14,
    marginLeft: 8
  };
  const active = { ...btn, borderColor: "#000", fontWeight: 600 };

  async function go(lng) {
    // always update i18n language if possible
    if (i18n?.changeLanguage) {
      i18n.changeLanguage(lng);
    }
    try {
      document.documentElement.setAttribute("lang", lng);
    } catch {}

    // On localhost, DON'T change the URL
    const isLocal =
      typeof window !== "undefined" && window.location.hostname === "localhost";
    if (isLocal) return;

    // In production, move to /{lng}/... but preserve the current path
    const path =
      typeof window !== "undefined" ? window.location.pathname : "/";
    const stripped = path.replace(rePrefix, "/");
    await router.push(`/${lng}${stripped}`);
  }

  // ✅ Defensive fallback
  const cur = (i18n && i18n.language) ? i18n.language : "en";

  return (
    <div aria-label="Language switcher" style={{ display: "flex", alignItems: "center" }}>
      <button onClick={() => go("en")} style={cur === "en" ? active : btn}>EN</button>
      <button onClick={() => go("el")} style={cur === "el" ? active : btn}>EL</button>
    </div>
  );
}

