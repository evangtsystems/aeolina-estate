// components/LanguageSwitcher.jsx
import React from "react";
import { useRouter } from "next/router";
import i18n from "../i18n/i18n";

const rePrefix = /^\/(en|el)(?=\/|$)/;

export default function LanguageSwitcher() {
  const router = useRouter();

  async function go(lng) {
    try { i18n.changeLanguage(lng); } catch {}
    try {
      document.documentElement.setAttribute("lang", lng);
      localStorage.setItem("lang", lng);
    } catch {}

    const asPath = router.asPath || "/";
    const internal = (asPath.replace(rePrefix, "") || "/").replace(/\/{2,}/g, "/");
    const pretty   = `/${lng}${internal}`.replace(/\/{2,}/g, "/");

    // capture scroll
    const x = window.scrollX, y = window.scrollY;

    // navigate without scrolling
    await router.replace(internal, pretty, { shallow: true, scroll: false });

    // restore scroll next frame
    requestAnimationFrame(() => window.scrollTo(x, y));
  }

  const cur = i18n?.language || "en";

  const container = {
    display: "inline-flex",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.2)", // cloud background
    borderRadius: "20px",
    padding: "4px",
    gap: "4px"
  };

  const base = {
    padding: "6px 12px",
    border: "none",
    borderRadius: "16px",
    background: "transparent",
    color: "#fff",
    cursor: "pointer",
    fontSize: "0.95rem",
    transition: "all 0.3s ease"
  };

  const active = {
    ...base,
    background: "#fff",
    color: "#333",
    fontWeight: 700
  };

  return (
    <div aria-label="Language switcher" style={container}>
      <button onClick={() => go("en")} style={cur === "en" ? active : base}>
        EN
      </button>
      <button onClick={() => go("el")} style={cur === "el" ? active : base}>
        EL
      </button>
    </div>
  );
}
