import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import VillaCard from '../../components/VillaCard';
import { motion } from 'framer-motion';

export default function VillasPage() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #ffffff, #f3f6f3)',
      fontFamily: "'Open Sans', sans-serif"
    }}>
      <Head>
        <title>Our Villas – Villa AEOLINA</title>
        <meta
          name="description"
          content="Explore the Villa AEOLINA collection in Corfu: ELEA, OLIVA, and NATALIA – three private villas surrounded by olive trees in Episkopiana."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=Open+Sans&display=swap" rel="stylesheet" />
      </Head>

      <Header />

      <main style={{
        flex: 1,
        paddingTop: '100px',
        paddingBottom: '60px'
      }}>
        {/* Cinematic Intro */}
        <motion.section
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            textAlign: 'center',
            padding: '60px 20px 40px',
            backgroundColor: '#f9f9f9',
            borderBottom: '1px solid #e0e0e0'
          }}
        >
          <h1 style={{
            fontSize: '2.8rem',
            marginBottom: '20px',
            fontFamily: "'Playfair Display', serif",
            color: '#2F4F4F'
          }}>
            The AEOLINA Collection
          </h1>
          <p style={{
            maxWidth: '720px',
            margin: '0 auto',
            fontSize: '1.1rem',
            color: '#555'
          }}>
            Welcome to Villa AEOLINA – a collection of three elegant villas nestled in a peaceful olive grove in Episkopiana, Corfu. Each villa offers privacy, comfort, and a natural connection to the Mediterranean landscape.
          </p>
        </motion.section>

        {/* Animated Villa Grid */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '30px',
            padding: '60px 20px 20px'
          }}
        >
          <VillaCard
            name="Villa ELEA"
            image="/images/elea/cover.jpg"
            description="Our spacious 4-bedroom villa with a private pool, ideal for families or larger groups (up to 8 guests)."
            link="/villas/elea"
          />
          <VillaCard
            name="Villa OLIVA"
            image="/images/oliva/cover.jpg"
            description="A tranquil 2-bedroom retreat for up to 4 guests, featuring elegant interiors and garden views."
            link="/villas/oliva"
          />
          <VillaCard
            name="Villa NATALIA"
            image="/images/natalia/cover.jpg"
            description="A sunlit and cozy 2-bedroom villa perfect for couples or small families seeking peaceful relaxation."
            link="/villas/natalia"
          />
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}
