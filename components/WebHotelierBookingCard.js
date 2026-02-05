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

export default function WebHotelierBookingCard({
  variant = "bar", // "bar" | "card"
  style,
}) {
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

  if (!BOOK_URL) {
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
        Missing <code>NEXT_PUBLIC_WEBHOTELIER_BOOK_URL</code> in <code>.env.local</code>.
      </div>
    );
  }

  // If you have no widget src, show a small CTA bar
  if (!widgetSrc) {
    return (
      <div
        style={{
          width: "min(92vw, 980px)",
          margin: "0 auto",
          borderRadius: 14,
          padding: 10,
          background: "rgba(0,0,0,0.32)",
          border: "1px solid rgba(255,255,255,0.18)",
          backdropFilter: "blur(8px)",
          boxShadow: "0 16px 44px rgba(0,0,0,0.35)",
          ...style,
        }}
      >
        <a
          href={bookUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            padding: "12px 14px",
            borderRadius: 10,
            fontWeight: 950,
            textDecoration: "none",
            background: "#d1b76e",
            color: "#071b25",
          }}
        >
          SEARCH AVAILABILITY →
        </a>
      </div>
    );
  }

  // ✅ BAR LOOK (like your screenshot)
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
      <iframe
        src={widgetSrc}
        title="Availability Search"
        style={{
          width: "100%",
          height: 112, // tweak to match exactly
          border: 0,
          display: "block",
        }}
        loading="lazy"
      />
    </div>
  );
}
