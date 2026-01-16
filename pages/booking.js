// pages/booking.js
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Booking() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    villa: "ELEA", // ELEA | OLIVA | NATALIA
    checkIn: "",
    checkOut: "",
    guests: "2",
    message: "",
    company: "", // honeypot
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    // basic client validation
    if (!form.checkIn || !form.checkOut) {
      setLoading(false);
      setErrorMsg("Please select check-in and check-out dates.");
      return;
    }
    if (new Date(form.checkOut) <= new Date(form.checkIn)) {
      setLoading(false);
      setErrorMsg("Check-out must be after check-in.");
      return;
    }

    // Build a booking-specific message string (so your existing API works unchanged)
    const bookingText = [
      "BOOKING REQUEST",
      `Villa: ${form.villa}`,
      `Check-in: ${form.checkIn}`,
      `Check-out: ${form.checkOut}`,
      `Guests: ${form.guests}`,
      form.phone ? `Phone: ${form.phone}` : null,
      "",
      "Message:",
      form.message || "(no additional message)",
    ]
      .filter(Boolean)
      .join("\n");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company, // honeypot
          message: bookingText,  // send as message so you don't need API changes
          subject: "New Booking Request – Villa AEOLINA", // if your API supports it; if not, it will be ignored
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data.ok) {
        setErrorMsg(data.error || "Failed to send booking request. Please try again.");
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
        <title>Booking – Villa AEOLINA</title>
        <meta
          name="description"
          content="Send a booking request for Villa AEOLINA. We’ll get back to you shortly with availability and details."
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
              Booking Request
            </motion.h1>

            <p style={{ marginBottom: "40px", fontSize: "1.1rem", color: "#555" }}>
              Tell us your preferred dates and villa. We’ll reply shortly with availability and pricing.
            </p>

            <form
              onSubmit={onSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                padding: "20px",
                backgroundColor: "#ffffffcc",
                borderRadius: "12px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              }}
            >
              {/* Honeypot */}
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
                placeholder="Full Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                style={{
                  padding: "14px",
                  fontSize: "1rem",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                  outline: "none",
                }}
              />

              <input
                type="email"
                placeholder="Email Address"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                style={{
                  padding: "14px",
                  fontSize: "1rem",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                  outline: "none",
                }}
              />

              <input
                type="tel"
                placeholder="Phone (optional)"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                style={{
                  padding: "14px",
                  fontSize: "1rem",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                  outline: "none",
                }}
              />

              <select
                value={form.villa}
                onChange={(e) => setForm({ ...form, villa: e.target.value })}
                style={{
                  padding: "14px",
                  fontSize: "1rem",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                  outline: "none",
                  backgroundColor: "white",
                }}
              >
                <option value="ELEA">Villa ELEA (up to 4)</option>
                <option value="OLIVA">Villa OLIVA (up to 4)</option>
                <option value="NATALIA">Villa NATALIA (up to 8)</option>
              </select>

              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <div style={{ flex: "1 1 220px", textAlign: "left" }}>
                  <div style={{ fontSize: "0.9rem", color: "#444", marginBottom: "6px" }}>
                    Check-in
                  </div>
                  <input
                    type="date"
                    required
                    value={form.checkIn}
                    onChange={(e) => setForm({ ...form, checkIn: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "14px",
                      fontSize: "1rem",
                      borderRadius: "8px",
                      border: "1px solid #ccc",
                      outline: "none",
                    }}
                  />
                </div>

                <div style={{ flex: "1 1 220px", textAlign: "left" }}>
                  <div style={{ fontSize: "0.9rem", color: "#444", marginBottom: "6px" }}>
                    Check-out
                  </div>
                  <input
                    type="date"
                    required
                    value={form.checkOut}
                    onChange={(e) => setForm({ ...form, checkOut: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "14px",
                      fontSize: "1rem",
                      borderRadius: "8px",
                      border: "1px solid #ccc",
                      outline: "none",
                    }}
                  />
                </div>
              </div>

              <input
                type="number"
                min="1"
                max="12"
                required
                placeholder="Number of guests"
                value={form.guests}
                onChange={(e) => setForm({ ...form, guests: e.target.value })}
                style={{
                  padding: "14px",
                  fontSize: "1rem",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                  outline: "none",
                }}
              />

              <textarea
                placeholder="Message (optional) – e.g. arrival time, special requests"
                rows="5"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                style={{
                  padding: "14px",
                  fontSize: "1rem",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                  outline: "none",
                  resize: "vertical",
                }}
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
              >
                {loading ? "Sending..." : "Send Booking Request"}
              </button>
            </form>
          </main>
        </div>

        <Footer />
      </div>
    </>
  );
}
