import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  // use "resources" namespace for nav items
  const { t } = useTranslation("header");
  const router = useRouter();

  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const items = [
    { key: "home", href: "/" },
    { key: "villas", href: "/villas" },
    { key: "gallery", href: "/gallery" },
    { key: "location", href: "/location" },
    { key: "booking", href: "/booking" },
    { key: "contact", href: "/contact" }
  ];

  const linkStyle = {
    textDecoration: "none",
    color: "#fff",
    padding: "8px 12px",
    borderRadius: "6px",
    transition: "all 0.3s ease"
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        height: "90px",
        background: "linear-gradient(90deg, #749e2fff, #a6b383ff)",
        padding: "0 20px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
        zIndex: 1000,
        fontFamily: "sans-serif",
        display: "flex",
        alignItems: "center"
      }}
    >
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%"
        }}
        aria-label={t("aria.mainNav")}
      >
        {/* Logo */}
        <div
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            marginLeft: "-17px"
          }}
        >
          <Link href="/" aria-label={t("aria.goHome")}>
            <img
              src="/images/common/AEOLINA COLLECTION.jpeg"
              alt={t("logoAlt")}
              style={{
                height: "84px",
                width: "auto",
                objectFit: "contain",
                borderRadius: "6px",
                backgroundColor: "white",
                boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
                display: "block",
                cursor: "pointer"
              }}
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        {!isMobile && (
          <div
            style={{
              display: "flex",
              gap: "20px",
              fontSize: "1rem",
              alignItems: "center"
            }}
          >
            {items.map(({ key, href }) => {
              const active = router.pathname === href;
              return (
                <Link key={key} href={href} style={linkStyle}>
                  <span
                    onMouseOver={(e) => {
                      e.currentTarget.parentElement.style.backgroundColor =
                        "#ffffff33";
                      e.currentTarget.parentElement.style.transform =
                        "scale(1.05)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.parentElement.style.backgroundColor =
                        "transparent";
                      e.currentTarget.parentElement.style.transform = "scale(1)";
                    }}
                    style={{
                      fontWeight: active ? 700 : 500,
                      textDecoration: active ? "underline" : "none",
                      textUnderlineOffset: active ? "4px" : undefined
                    }}
                  >
                    {t(`items.${key}`)}
                  </span>
                </Link>
              );
            })}

            {/* Language Switcher in desktop header */}
            <LanguageSwitcher />
          </div>
        )}

        {/* Hamburger Icon */}
        {isMobile && (
          <button
            aria-label={t("aria.toggleMenu")}
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              fontSize: "28px",
              color: "#fff",
              cursor: "pointer",
              padding: "10px",
              userSelect: "none",
              background: "transparent",
              border: "none"
            }}
          >
            ☰
          </button>
        )}
      </nav>

      {/* Mobile Menu */}
      {isMobile && menuOpen && (
        <div
          style={{
            position: "absolute",
            top: "90px",
            left: 0,
            width: "100%",
            backgroundColor: "#0077b6",
            padding: "10px 0",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "12px"
          }}
        >
          {items.map(({ key, href }) => (
            <Link
              key={key}
              href={href}
              onClick={() => setMenuOpen(false)}
              style={{
                textDecoration: "none",
                color: "#fff",
                padding: "10px 20px",
                fontSize: "1rem",
                width: "100%",
                textAlign: "center"
              }}
            >
              {t(`items.${key}`)}
            </Link>
          ))}

          {/* Language Switcher also inside mobile menu */}
          <LanguageSwitcher />
        </div>
      )}
    </header>
  );
}
