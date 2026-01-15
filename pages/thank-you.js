import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ThankYou() {
  return (
    <>
      <Head>
        <title>Thank You – Villa AEOLINA</title>
        <meta name="robots" content="noindex" />
      </Head>

      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Header />
        <main style={{ flex: 1, padding: "140px 20px 60px", textAlign: "center" }}>
          <h1 style={{ fontSize: "2.2rem", marginBottom: 12, color: "#2F4F4F" }}>
            Message sent ✅
          </h1>
          <p style={{ fontSize: "1.1rem", color: "#555" }}>
            Thank you! We’ll get back to you shortly.
          </p>
        </main>
        <Footer />
      </div>
    </>
  );
}
