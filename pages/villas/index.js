// pages/villas/index.js
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import VillaCard from '../../components/VillaCard';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function VillasPage() {
  const { t } = useTranslation('villas');

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        background: 'linear-gradient(to bottom, #ffffff, #f3f6f3)',
        fontFamily: "'Open Sans', sans-serif",
      }}
    >
      <Head>
        <title>{t('seo.title')}</title>
        <meta name="description" content={t('seo.description')} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=Open+Sans&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header />

      <main
        style={{
          flex: 1,
          paddingTop: '100px',
          paddingBottom: '60px',
        }}
      >
        {/* Cinematic Intro */}
        <motion.section
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            textAlign: 'center',
            padding: '60px 20px 40px',
            backgroundColor: '#f9f9f9',
            borderBottom: '1px solid #e0e0e0',
          }}
        >
          <h1
            style={{
              fontSize: '2.8rem',
              marginBottom: '20px',
              fontFamily: "'Playfair Display', serif",
              color: '#2F4F4F',
            }}
          >
            {t('intro.title')}
          </h1>
          <p
            style={{
              maxWidth: '720px',
              margin: '0 auto',
              fontSize: '1.1rem',
              color: '#555',
            }}
          >
            {t('intro.text')}
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
            padding: '60px 20px 20px',
          }}
        >
          <VillaCard
            name={t('natalia.name')}
            image="/images/natalia/coveri.jpg"
            description={t('natalia.desc')}
            link="/villas/natalia"
          />
          <VillaCard
            name={t('oliva.name')}
            image="/images/oliva/cover.jpg"
            description={t('oliva.desc')}
            link="/villas/oliva"
          />
          <VillaCard
            name={t('elea.name')}
            image="/images/elea/cover.jpg"
            description={t('elea.desc')}
            link="/villas/elea"
          />
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}
