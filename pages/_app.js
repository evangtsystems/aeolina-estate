// pages/_app.js
import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import "@/styles/globals.css";
import "../i18n/i18n";
import i18n from "../i18n/i18n";

const LOCALE_RE = /^\/(en|el)(?=\/|$)/;

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const normalizedRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined" || normalizedRef.current) return;

    const { pathname, search, hash } = window.location;       // <- use real URL
    const m = pathname.match(LOCALE_RE);
    if (!m) { 
      normalizedRef.current = true;
      return; 
    }

    const lng = m[1];
    try { i18n.changeLanguage(lng); } catch {}
    try { document.documentElement.setAttribute("lang", lng); } catch {}

    // Internal route (what Next actually has): strip /en|/el
    const internal = (pathname.replace(LOCALE_RE, "") || "/") + search + hash;
    // Pretty URL to *show* in the bar (keep the original)
    const pretty = pathname + search + hash;

    normalizedRef.current = true;

    // Load the real page (/location) but KEEP /el/location in the address bar
    router.replace(internal, pretty, { shallow: true });
  }, [router]);

  return <Component {...pageProps} />;
}


