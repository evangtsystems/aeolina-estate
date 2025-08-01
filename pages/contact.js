// pages/contact.js
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact – Villa AEOLINA</title>
        <meta name="description" content="Contact Villa AEOLINA to book your tranquil Corfu stay or ask any questions." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=Open+Sans&display=swap" rel="stylesheet" />
      </Head>

      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: 'linear-gradient(to bottom, #fdfdfd, #eef2ee)',
        fontFamily: "'Open Sans', sans-serif",
      }}>
        <div>
          <Header />

          <main style={{
  padding: '120px 20px 60px', // TOP | SIDES | BOTTOM
  maxWidth: '700px',
  margin: '0 auto',
  textAlign: 'center'
}}>

            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                fontSize: '2.5rem',
                marginBottom: '10px',
                color: '#2F4F4F',
                fontFamily: "'Playfair Display', serif"
              }}
            >
              Contact Us
            </motion.h1>

            <p style={{
              marginBottom: '50px',
              fontSize: '1.1rem',
              color: '#555'
            }}>
              Have a question or want to book directly? Send us a message and we’ll get back to you shortly.
            </p>

            <form
              action="https://formsubmit.co/evangelos.lampos@gtsystems.gr"
              method="POST"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                padding: '20px',
                backgroundColor: '#ffffffcc',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                marginTop: '-20px' // 👈 spacing under heading
              }}
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" />

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                style={{
                  padding: '14px',
                  fontSize: '1rem',
                  borderRadius: '8px',
                  border: '1px solid #ccc',
                  outline: 'none',
                  transition: 'border 0.3s ease',
                }}
                onFocus={(e) => e.target.style.border = '1px solid #556B2F'}
                onBlur={(e) => e.target.style.border = '1px solid #ccc'}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                style={{
                  padding: '14px',
                  fontSize: '1rem',
                  borderRadius: '8px',
                  border: '1px solid #ccc',
                  outline: 'none',
                  transition: 'border 0.3s ease',
                }}
                onFocus={(e) => e.target.style.border = '1px solid #556B2F'}
                onBlur={(e) => e.target.style.border = '1px solid #ccc'}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                required
                style={{
                  padding: '14px',
                  fontSize: '1rem',
                  borderRadius: '8px',
                  border: '1px solid #ccc',
                  outline: 'none',
                  resize: 'vertical',
                  transition: 'border 0.3s ease',
                }}
                onFocus={(e) => e.target.style.border = '1px solid #556B2F'}
                onBlur={(e) => e.target.style.border = '1px solid #ccc'}
              ></textarea>

              <button
                type="submit"
                style={{
                  padding: '14px',
                  backgroundColor: '#556B2F',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'background 0.3s ease, box-shadow 0.3s ease',
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = '#6B8E23';
                  e.target.style.boxShadow = '0 0 10px rgba(107, 142, 35, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = '#556B2F';
                  e.target.style.boxShadow = 'none';
                }}
              >
                Send Message
              </button>
            </form>
          </main>
        </div>

        <Footer />
      </div>
    </>
  );
}
