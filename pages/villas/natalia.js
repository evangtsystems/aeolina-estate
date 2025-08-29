import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function NATALIAPage() {
  return (
    <>
      <Head>
        <title>Villa NATALIA – Deluxe Four-Bedroom Villa | AEOLINA Collection</title>
        <meta
          name="description"
          content="Villa NATALIA is a 200 m² deluxe villa with 4 bedrooms, 4 bathrooms, private pool, full kitchen, balcony/terrace, and garden & mountain views. Flat-screen TV with streaming, free Wi-Fi, A/C, soundproofing. No smoking."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Header />

      <main style={{ fontFamily: 'Arial, sans-serif', paddingTop: '80px', paddingBottom: '40px' ,backgroundColor : '#f5f8f5'}}>
        {/* Hero + Intro */}
        <section
  style={{
    textAlign: 'center',
    padding: '40px 20px 20px',
    background: 'linear-gradient(to bottom, #f5f8f5, #ffffff)',
  }}
>
  <h1
    style={{
      fontSize: 'clamp(28px, 4vw, 42px)',
      marginBottom: '16px',
      fontWeight: '700',
      fontFamily: "'Playfair Display', serif",
      color: '#2e3b2e',
    }}
  >
    Villa NATALIA
  </h1>

  <p
    style={{
      fontSize: 'clamp(16px, 2vw, 18px)',
      maxWidth: '750px',
      margin: '0 auto',
      lineHeight: 1.7,
      fontFamily: 'Helvetica, sans-serif',
      color: '#3c503c',
    }}
  >
    A deluxe <strong>200 m²</strong> four-bedroom villa with <strong>private pool</strong>, expansive terrace and
    tranquil <strong>garden &amp; mountain views</strong>. Featuring a fully equipped kitchen, four modern bathrooms
    with walk-in showers, and thoughtful comforts for families and groups seeking privacy and ease in Corfu.
  </p>
</section>


        {/* Cover Image */}
        <section style={{ padding: '20px', textAlign: 'center' }}>
          <img
            src="/images/natalia/coveri.jpg"
            alt="Villa NATALIA"
            style={{ maxWidth: '100%', borderRadius: '10px' }}
          />
        </section>

        {/* At a Glance (text left, image right) */}
        <section
          style={{
            backgroundColor: '#f5f8f5',
            padding: '60px 30px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '50px',
          }}
        >
          {/* Text Block */}
          <div
            style={{
              flex: '1 1 480px',
              maxWidth: '600px',
              color: '#2e3b2e',
            }}
          >
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '2rem',
                marginBottom: '25px',
                color: '#3c503c',
              }}
            >
              At a Glance
            </h2>

            <ul
              style={{
                listStyle: 'none',
                paddingLeft: 0,
                fontSize: '1.05rem',
                lineHeight: '1.9',
                fontFamily: 'Helvetica, sans-serif',
              }}
            >
              {[
                '🏡 200 m² detached deluxe villa',
                '🛏️ 4 bedrooms — each with a large double bed (sleeps up to 8)',
                '🛁 4 bathrooms with walk-in showers & free toiletries',
                '🌳 Garden, pool & mountain views',
                '🏊 Private swimming pool, terrace, balcony & patio',
                '📺 Flat-screen TV with cable & streaming',
                '🧺 Washing machine; drying rack; children’s high chair',
                '🪟 Soundproofing, private entrance, laptop safe, wardrobe',
                '❄️ Single-room air conditioning & heating',
                '🚭 Smoke-free environment',
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: idx * 0.3, duration: 0.5 }}
                  style={{
                    padding: '6px 0',
                    borderBottom: idx < 9 ? '1px solid rgba(0,0,0,0.05)' : 'none',
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
            style={{
              flex: '1 1 400px',
              maxWidth: '500px',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                width: '100%',
                aspectRatio: '4 / 3',
                overflow: 'hidden',
                borderRadius: '14px',
                boxShadow: '0 6px 24px rgba(0, 0, 0, 0.15)',
              }}
            >
              <img
                src="/images/natalia/glance.jpg"
                alt="Villa ELEA – At a Glance"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>
          </motion.div>
        </section>

        {/* Kitchen (image left, text right) */}
        <section
          style={{
            backgroundColor: '#f5f8f5',
            padding: '60px 30px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '50px',
          }}
        >
          {/* Image on the left */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            style={{
              flex: '1 1 400px',
              maxWidth: '500px',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                width: '100%',
                aspectRatio: '4 / 3',
                overflow: 'hidden',
                borderRadius: '14px',
                boxShadow: '0 6px 24px rgba(0, 0, 0, 0.15)',
              }}
            >
              <img
                src="/images/natalia/kitchen.jpg"
                alt="Villa ELEA Kitchen"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>
          </motion.div>

          {/* Text on the right */}
          <div
            style={{
              flex: '1 1 480px',
              maxWidth: '600px',
              color: '#2e3b2e',
            }}
          >
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '2rem',
                marginBottom: '25px',
                color: '#3c503c',
              }}
            >
              In Your Private Kitchen
            </h2>

            <ul
              style={{
                listStyle: 'none',
                paddingLeft: 0,
                fontSize: '1.05rem',
                lineHeight: '1.9',
                fontFamily: 'Helvetica, sans-serif',
              }}
            >
              {[
                'Refrigerator, Dishwasher, Oven, Stovetop',
                'Microwave, Toaster, Electric kettle, Coffee machine',
                'Kitchenware & cleaning products',
                'Dining area & dining table',
                'Washing machine',
                "Children’s high chair",
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: idx * 0.3, duration: 0.5 }}
                  style={{
                    padding: '6px 0',
                    borderBottom: idx < 5 ? '1px solid rgba(0,0,0,0.05)' : 'none',
                  }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </section>

        {/* Bathrooms (text left, image right) */}
        <section
          style={{
            backgroundColor: '#f5f8f5',
            padding: '60px 30px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '50px',
          }}
        >
          {/* Text on the left */}
          <div
            style={{
              flex: '1 1 480px',
              maxWidth: '600px',
              color: '#2e3b2e',
            }}
          >
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '2rem',
                marginBottom: '25px',
                color: '#3c503c',
              }}
            >
              In Your Private Bathrooms
            </h2>

            <ul
              style={{
                listStyle: 'none',
                paddingLeft: 0,
                fontSize: '1.05rem',
                lineHeight: '1.9',
                fontFamily: 'Helvetica, sans-serif',
              }}
            >
              {[
                '4 bathrooms with walk-in showers & modern fixtures',
                'Free toiletries, Towels, Slippers',
                'Hairdryer & toilet paper',
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: idx * 0.3, duration: 0.5 }}
                  style={{
                    padding: '6px 0',
                    borderBottom: idx < 2 ? '1px solid rgba(0,0,0,0.05)' : 'none',
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
            style={{
              flex: '1 1 400px',
              maxWidth: '500px',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                width: '100%',
                aspectRatio: '4 / 3',
                overflow: 'hidden',
                borderRadius: '14px',
                boxShadow: '0 6px 24px rgba(0, 0, 0, 0.15)',
              }}
            >
              <img
                src="/images/natalia/bathroom.jpg"
                alt="Villa ELEA Bathroom"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>
          </motion.div>
        </section>

        {/* Comfort & Features (image left, text right) */}
        <section
          style={{
            backgroundColor: '#f5f8f5',
            padding: '60px 30px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '50px',
          }}
        >
          {/* Image on the left */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            style={{
              flex: '1 1 400px',
              maxWidth: '500px',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                width: '100%',
                aspectRatio: '4 / 3',
                overflow: 'hidden',
                borderRadius: '14px',
                boxShadow: '0 6px 24px rgba(0, 0, 0, 0.15)',
              }}
            >
              <img
                src="/images/natalia/comfort.jpg"
                alt="Villa NATALIA Comfort & Features"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>
          </motion.div>

          {/* Text on the right */}
          <div
            style={{
              flex: '1 1 480px',
              maxWidth: '600px',
              color: '#2e3b2e',
            }}
          >
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '2rem',
                marginBottom: '25px',
                color: '#3c503c',
              }}
            >
              Comfort & Features
            </h2>

            <ul
              style={{
                listStyle: 'none',
                paddingLeft: 0,
                fontSize: '1.05rem',
                lineHeight: '1.9',
                fontFamily: 'Helvetica, sans-serif',
              }}
            >
              {[
                'Flat-screen TV with cable & streaming',
                'Free Wi-Fi',
                'Soundproofing, private entrance, laptop safe',
                'Sofa & sofa bed; seating & dining areas; desk',
                'Terrace, patio, outdoor furniture & dining area',
                'Mosquito nets; wardrobe/closet',
                'Carbon monoxide detector; detached; upper floors by stairs',
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: idx * 0.3, duration: 0.5 }}
                  style={{
                    padding: '6px 0',
                    borderBottom: idx < 6 ? '1px solid rgba(0,0,0,0.05)' : 'none',
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
