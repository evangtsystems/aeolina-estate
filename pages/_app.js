// pages/_app.js
import { useEffect } from "react";
import { useRouter } from "next/router";
import "../i18n/i18n";          // initialize i18n
import "@/styles/globals.css";
import i18n from "../i18n/i18n";

const LOCALE_RE = /^\/(en|el)(?=\/|$)/;

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const { asPath, pathname } = router;
    const match = pathname.match(LOCALE_RE);
    if (!match) return; // already a non-locale path

    const lng = match[1];

    // Update language
    try { i18n.changeLanguage(lng); } catch {}
    document.documentElement.setAttribute("lang", lng);

    // Strip the locale prefix so Next can match a page (e.g. /el/location → /location)
    const stripped = asPath.replace(LOCALE_RE, "") || "/";

    // Replace in history without reload
    router.replace(stripped, undefined, { shallow: true });
  }, [router]);

  return <Component {...pageProps} />;
}


