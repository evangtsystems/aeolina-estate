import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Hreflang from "../../components/Hreflang";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { tw, twList } from "../../i18n/word-by-word";

export default function OlivaPage() {
  const { t, i18n } = useTranslation("oliva");

  return (
    <>
     <Head>
  <title>{t("seo.title")}</title>
  <meta name="description" content={t("seo.description")} />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  {/* ✅ Canonical */}
  <link rel="canonical" href="https://aeolinavillas.com/villas/oliva/" />

  <meta httpEquiv="content-language" content={i18n.language} />
  <meta property="og:locale" content={i18n.language} />

  {/* ✅ Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Aeolina Villas" />
  <meta property="og:title" content={t("seo.title")} />
  <meta property="og:description" content={t("seo.description")} />
  <meta property="og:url" content="https://aeolinavillas.com/villas/oliva/" />
  <meta property="og:image" content="https://aeolinavillas.com/og/oliva.jpg" />

  {/* ✅ Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={t("seo.title")} />
  <meta name="twitter:description" content={t("seo.description")} />
  <meta name="twitter:image" content="https://aeolinavillas.com/og/oliva.webp" />
</Head>


      <Hreflang path="/villas/oliva/" />
      <Header />

      <main style={{ fontFamily: "Arial, sans-serif", paddingTop: "80px", paddingBottom: "40px" }}>
        {/* Hero */}
        <section style={{ textAlign: "center", padding: "20px" }}>
          <h1 style={{ fontSize: "2rem", marginBottom: "10px" }}>{t("hero.title")}</h1>
          <p style={{ fontSize: "1rem", maxWidth: "750px", margin: "0 auto" }}>
            {t("hero.intro")}
          </p>
        </section>

        <section style={{ padding: "20px", textAlign: "center" }}>
          <img
            src="/images/oliva/cover.jpg"
            alt={t("images.coverAlt")}
            style={{ maxWidth: "100%", borderRadius: "10px" }}
          />
        </section>

        {/* At a Glance */}
        <section
          style={{
            backgroundColor: "#f5f8f5",
            padding: "60px 30px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "50px"
          }}
        >
          {/* Text Block */}
          <div style={{ flex: "1 1 480px", maxWidth: "600px", color: "#2e3b2e" }}>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "2rem",
                marginBottom: "25px",
                color: "#3c503c"
              }}
            >
              {tw("At a Glance")}
            </h2>

            <ul
              style={{
                listStyle: "none",
                paddingLeft: 0,
                fontSize: "1.05rem",
                lineHeight: "1.9",
                fontFamily: "Helvetica, sans-serif"
              }}
            >
              {twList([
                "🏡 150 m² detached private villa",
                "🛏️ 2 elegant bedrooms with double beds",
                "🛁 2 bathrooms with walk-in showers",
                "🌳 Garden, pool & mountain views",
                "🏊 Private swimming pool & furnished terrace",
                "🍳 Fully equipped kitchen (oven, coffee machine)",
                "📺 Flat-screen TV with streaming",
                "🧺 Washing machine, drying rack, high chair",
                "🪟 Soundproofed, private entrance, mosquito nets",
                "🅿️ Free private parking",
                "🚭 Smoke-free environment"
              ]).map((item, idx, arr) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: idx * 0.15, duration: 0.45 }}
                  style={{
                    padding: "6px 0",
                    borderBottom: idx < arr.length - 1 ? "1px solid rgba(0,0,0,0.05)" : "none"
                  }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Image Block */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            style={{ flex: "1 1 400px", maxWidth: "500px", textAlign: "center" }}
          >
            <div
              style={{
                width: "100%",
                aspectRatio: "4 / 3",
                overflow: "hidden",
                borderRadius: "14px",
                boxShadow: "0 6px 24px rgba(0, 0, 0, 0.15)"
              }}
            >
              <img
                src="/images/oliva/681204038.jpg"
                alt={t("images.feature1Alt")}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </motion.div>
        </section>

        {/* Kitchen */}
        <section
          style={{
            backgroundColor: "#f5f8f5",
            padding: "60px 30px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "50px"
          }}
        >
          {/* Image on the left */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            style={{ flex: "1 1 400px", maxWidth: "500px", textAlign: "center" }}
          >
            <div
              style={{
                width: "100%",
                aspectRatio: "4 / 3",
                overflow: "hidden",
                borderRadius: "14px",
                boxShadow: "0 6px 24px rgba(0, 0, 0, 0.15)"
              }}
            >
              <img
                src="/images/oliva/kitchen.jpg"
                alt={t("images.kitchenAlt")}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </motion.div>

          {/* Text on the right */}
          <div style={{ flex: "1 1 480px", maxWidth: "600px", color: "#2e3b2e" }}>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "2rem",
                marginBottom: "25px",
                color: "#3c503c"
              }}
            >
              {tw("In Your Private Kitchen")}
            </h2>

            <ul
              style={{
                listStyle: "none",
                paddingLeft: 0,
                fontSize: "1.05rem",
                lineHeight: "1.9",
                fontFamily: "Helvetica, sans-serif"
              }}
            >
              {twList([
                "Stovetop, Oven, Toaster",
                " Microwave, Refrigerator",
                "Coffee machine, Electric kettle",
                "Kitchenware, Cleaning products, Dining table",
                "Washing machine & drying rack",
                "Children's high chair (available)"
              ]).map((item, idx, arr) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: idx * 0.15, duration: 0.45 }}
                  style={{
                    padding: "6px 0",
                    borderBottom: idx < arr.length - 1 ? "1px solid rgba(0,0,0,0.05)" : "none"
                  }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </section>

        {/* Bathrooms */}
        <section
          style={{
            backgroundColor: "#f5f8f5",
            padding: "60px 30px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "50px"
          }}
        >
          {/* Text on the left */}
          <div style={{ flex: "1 1 480px", maxWidth: "600px", color: "#2e3b2e" }}>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "2rem",
                marginBottom: "25px",
                color: "#3c503c"
              }}
            >
              {tw("In Your Private Bathrooms")}
            </h2>

            <ul
              style={{
                listStyle: "none",
                paddingLeft: 0,
                fontSize: "1.05rem",
                lineHeight: "1.9",
                fontFamily: "Helvetica, sans-serif"
              }}
            >
              {twList([
                "Walk-in showers & modern fixtures",
                "Free toiletries, Towels, Slippers",
                "Hairdryer & toilet paper"
              ]).map((item, idx, arr) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: idx * 0.15, duration: 0.45 }}
                  style={{
                    padding: "6px 0",
                    borderBottom: idx < arr.length - 1 ? "1px solid rgba(0,0,0,0.05)" : "none"
                  }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Image on the right */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            style={{ flex: "1 1 400px", maxWidth: "500px", textAlign: "center" }}
          >
            <div
              style={{
                width: "100%",
                aspectRatio: "4 / 3",
                overflow: "hidden",
                borderRadius: "14px",
                boxShadow: "0 6px 24px rgba(0, 0, 0, 0.15)"
              }}
            >
              <img
                src="/images/oliva/bathroom.jpg"
                alt={t("images.bathroomAlt")}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </motion.div>
        </section>

        {/* Comfort & Features */}
        <section
          style={{
            backgroundColor: "#f5f8f5",
            padding: "60px 30px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "50px"
          }}
        >
          {/* Image on the left */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            style={{ flex: "1 1 400px", maxWidth: "500px", textAlign: "center" }}
          >
            <div
              style={{
                width: "100%",
                aspectRatio: "4 / 3",
                overflow: "hidden",
                borderRadius: "14px",
                boxShadow: "0 6px 24px rgba(0, 0, 0, 0.15)"
              }}
            >
              <img
                src="/images/oliva/features.jpg"
                alt={t("images.featuresAlt")}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </motion.div>

          {/* Text on the right */}
          <div style={{ flex: "1 1 480px", maxWidth: "600px", color: "#2e3b2e" }}>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "2rem",
                marginBottom: "25px",
                color: "#3c503c"
              }}
            >
              {tw("Comfort & Features")}
            </h2>

            <ul
              style={{
                listStyle: "none",
                paddingLeft: 0,
                fontSize: "1.05rem",
                lineHeight: "1.9",
                fontFamily: "Helvetica, sans-serif"
              }}
            >
              {twList([
                "Air conditioning in all rooms",
                "Flat-screen TV with cable and streaming",
                "Soundproofing, private entrance",
                "Sofa, sofa bed, laptop safe",
                "Ironing facilities, heating",
                "Terrace, patio, outdoor furniture & dining area",
                "Secure environment with carbon monoxide detector"
              ]).map((item, idx, arr) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: idx * 0.15, duration: 0.45 }}
                  style={{
                    padding: "6px 0",
                    borderBottom: idx < arr.length - 1 ? "1px solid rgba(0,0,0,0.05)" : "none"
                  }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
