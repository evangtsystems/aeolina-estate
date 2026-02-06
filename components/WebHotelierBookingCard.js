// components/WebHotelierBookingCard.js
import { useMemo } from "react";
import { useRouter } from "next/router";

function mapLocaleToWHLang(locale) {
  if (!locale) return "en-GB";
  const l = String(locale).toLowerCase();
  if (l.startsWith("el")) return "el-GR";
  if (l.startsWith("de")) return "de-DE";
  return "en-GB";
}

export default function WebHotelierBookingCard({ style }) {
  const router = useRouter();

  const BOOK_URL = process.env.NEXT_PUBLIC_WEBHOTELIER_BOOK_URL || "";
  const WIDGET_SRC_RAW = process.env.NEXT_PUBLIC_WEBHOTELIER_WIDGET_SRC || "";

  const whLang = useMemo(() => mapLocaleToWHLang(router.locale), [router.locale]);

  const bookUrl = useMemo(() => {
    if (!BOOK_URL) return "";
    const hasQuery = BOOK_URL.includes("?");
    return `${BOOK_URL}${hasQuery ? "&" : "?"}lang=${encodeURIComponent(whLang)}`;
  }, [BOOK_URL, whLang]);

  const widgetSrc = useMemo(() => {
    if (!WIDGET_SRC_RAW) return "";
    if (WIDGET_SRC_RAW.toLowerCase().includes("lang=")) return WIDGET_SRC_RAW;
    const hasQuery = WIDGET_SRC_RAW.includes("?");
    return `${WIDGET_SRC_RAW}${hasQuery ? "&" : "?"}lang=${encodeURIComponent(whLang)}`;
  }, [WIDGET_SRC_RAW, whLang]);

  // mobile detection (safe for build)
  const isMobile =
    typeof window !== "undefined" &&
    (window.innerWidth <= 768 || (navigator && navigator.maxTouchPoints > 0));

  if (!BOOK_URL) {
    // hide in production
    if (process.env.NODE_ENV === "production") return null;

    return (
      <div
        style={{
          padding: 14,
          borderRadius: 14,
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.14)",
          color: "rgba(255,255,255,0.9)",
          ...style,
        }}
      >
        Missing <code>NEXT_PUBLIC_WEBHOTELIER_BOOK_URL</code>.
      </div>
    );
  }

  // ✅ MOBILE: simple stripe button (does not cover hero)
  if (isMobile) {
    return (
      <a
        href={bookUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "block",
          width: "min(92vw, 520px)",
          margin: "0 auto",
          padding: "12px 14px",
          borderRadius: 999,
          textAlign: "center",
          fontWeight: 950,
          textDecoration: "none",
          background: "#d1b76e",
          color: "#071b25",
          boxShadow: "0 14px 30px rgba(0,0,0,0.30)",
          border: "1px solid rgba(255,255,255,0.18)",
          ...style,
        }}
      >
        BOOK NOW →
      </a>
    );
  }

  // ✅ DESKTOP: embedded widget (bar + expand)
  if (!widgetSrc) {
    // fallback CTA on desktop if no widget src
    return (
      <a
        href={bookUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "block",
          width: "min(96vw, 980px)",
          margin: "0 auto",
          padding: "12px 14px",
          borderRadius: 14,
          textAlign: "center",
          fontWeight: 950,
          textDecoration: "none",
          background: "#d1b76e",
          color: "#071b25",
          boxShadow: "0 14px 30px rgba(0,0,0,0.30)",
          ...style,
        }}
      >
        SEARCH AVAILABILITY →
      </a>
    );
  }

  const collapsedH = 118;
  const expandedH = 285;

  return (
    <div
      style={{
        width: "min(96vw, 1100px)",
        margin: "0 auto",
        borderRadius: 10,
        padding: 10,
        background: "rgba(0,0,0,0.28)",
        border: "1px solid rgba(255,255,255,0.14)",
        backdropFilter: "blur(8px)",
        boxShadow: "0 16px 44px rgba(0,0,0,0.35)",
        overflow: "hidden",
        ...style,
      }}
    >
      <div
        tabIndex={0}
        style={{
          borderRadius: 8,
          overflow: "hidden",
          height: collapsedH,
          transition: "height 180ms ease",
          outline: "none",
        }}
        onFocus={(e) => (e.currentTarget.style.height = `${expandedH}px`)}
        onBlur={(e) => (e.currentTarget.style.height = `${collapsedH}px`)}
        onMouseEnter={(e) => (e.currentTarget.style.height = `${expandedH}px`)}
        onMouseLeave={(e) => (e.currentTarget.style.height = `${collapsedH}px`)}
      >
        <iframe
          src={widgetSrc}
          title="Availability Search"
          style={{
            width: "100%",
            height: expandedH,
            border: 0,
            display: "block",
            background: "transparent",
          }}
          loading="lazy"
        />
      </div>
    </div>
  );
}
