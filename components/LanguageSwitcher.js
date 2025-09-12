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

  return (
    <div aria-label="Language switcher" style={{ display:"flex", alignItems:"center" }}>
      <button onClick={() => go("en")}>EN</button>
      <button onClick={() => go("el")}>EL</button>
    </div>
  );
}
