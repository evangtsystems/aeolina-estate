// pages/contact.js
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "", company: "" });
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data.ok) {
        setErrorMsg(data.error || "Failed to send message. Please try again.");
        setLoading(false);
        return;
      }

      window.location.href = "/thank-you/";
    } catch {
      setErrorMsg("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Head>
        <title>Contact – Villa AEOLINA</title>
        <meta
          name="description"
          content="Contact Villa AEOLINA to book your tranquil Corfu stay or ask any questions."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=Open+Sans&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(to bottom, #fdfdfd, #eef2ee)",
          fontFamily: "'Open Sans', sans-serif",
        }}
      >
        <div>
          <Header />

          <main
            style={{
              padding: "120px 20px 60px",
              maxWidth: "700px",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                fontSize: "2.5rem",
                marginBottom: "10px",
                color: "#2F4F4F",
                fontFamily: "'Playfair Display', serif",
              }}
            >
              Contact Us
            </motion.h1>

            <p style={{ marginBottom: "50px", fontSize: "1.1rem", color: "#555" }}>
              Have a question or want to book directly? Send us a message and we’ll get back to you
              shortly.
            </p>

            <form
              onSubmit={onSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                padding: "20px",
                backgroundColor: "#ffffffcc",
                borderRadius: "12px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                marginTop: "-20px",
              }}
            >
              {/* Honeypot (bots fill it) */}
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                style={{ display: "none" }}
                tabIndex="-1"
                autoComplete="off"
              />

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                style={{
                  padding: "14px",
                  fontSize: "1rem",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                  outline: "none",
                  transition: "border 0.3s ease",
                }}
                onFocus={(e) => (e.target.style.border = "1px solid #556B2F")}
                onBlur={(e) => (e.target.style.border = "1px solid #ccc")}
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                style={{
                  padding: "14px",
                  fontSize: "1rem",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                  outline: "none",
                  transition: "border 0.3s ease",
                }}
                onFocus={(e) => (e.target.style.border = "1px solid #556B2F")}
                onBlur={(e) => (e.target.style.border = "1px solid #ccc")}
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                style={{
                  padding: "14px",
                  fontSize: "1rem",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                  outline: "none",
                  resize: "vertical",
                  transition: "border 0.3s ease",
                }}
                onFocus={(e) => (e.target.style.border = "1px solid #556B2F")}
                onBlur={(e) => (e.target.style.border = "1px solid #ccc")}
              />

              {errorMsg && (
                <div style={{ color: "#b00020", fontSize: "0.95rem", textAlign: "left" }}>
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                style={{
                  padding: "14px",
                  backgroundColor: loading ? "#7a8a5a" : "#556B2F",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  cursor: loading ? "not-allowed" : "pointer",
                  transition: "background 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseOver={(e) => {
                  if (loading) return;
                  e.target.style.backgroundColor = "#6B8E23";
                  e.target.style.boxShadow = "0 0 10px rgba(107, 142, 35, 0.4)";
                }}
                onMouseOut={(e) => {
                  if (loading) return;
                  e.target.style.backgroundColor = "#556B2F";
                  e.target.style.boxShadow = "none";
                }}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </main>
        </div>

        <Footer />
      </div>
    </>
  );
}
