import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaUmbrellaBeach, FaUtensils, FaCarSide, FaMapMarkerAlt } from 'react-icons/fa';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Location() {
  const { t } = useTranslation('location');
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkViewport = () => setIsDesktop(window.innerWidth >= 1024);
    checkViewport();
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  return (
    <>
      <Head>
        <title>{t('seo.title')}</title>
        <meta name="description" content={t('seo.description')} />
      </Head>

      <Header />

      <main style={{ fontFamily: 'Arial, sans-serif', paddingTop: '80px', overflowX: 'hidden' }}>
        {/* Hero Section */}
        <section
          style={{
            position: 'relative',
            width: '100vw',
            height: '100vh',
            overflow: 'hidden',
            textAlign: 'center',
          }}
        >
          {/* Blurred background image */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: `url("/images/common/aeolina location image.png")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'blur(20px) brightness(0.4)',
              zIndex: 0,
            }}
          />

          {/* Foreground centered image */}
          <div
            style={{
              position: 'relative',
              zIndex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              pointerEvents: 'none',
            }}
          >
            <Image
              src="/images/common/aeolina location image.webp"
              alt={t('hero.alt')}
              width={1024}
              height={1024}
              style={{
                width: isDesktop ? '55vw' : '90vw',
                height: 'auto',
                objectFit: 'contain',
                borderRadius: '12px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
              }}
              priority
            />
          </div>

          {/* Overlay text */}
          <div
            style={{
              position: 'absolute',
              bottom: '5%',
              left: '50%',
              transform: 'translateX(-50%)',
              color: 'white',
              textShadow: '0 2px 6px rgba(0,0,0,0.7)',
              padding: '1rem',
              zIndex: 2,
              maxWidth: '90%',
            }}
          >
            <h1 style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', fontWeight: 'bold' }}>
              {t('hero.title')}
            </h1>
            <p style={{ fontSize: 'clamp(1rem, 3vw, 1.3rem)' }}>{t('hero.text')}</p>
          </div>

          {/* Ambient sound */}
          <audio
            src="/sounds/cicada.mp4"
            autoPlay
            loop
            playsInline
            controls={false}
            style={{ display: 'none' }}
          />
        </section>

        {/* Intro Description */}
        <section style={{ padding: '40px 20px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '10px' }}>{t('intro.title')}</h2>
          <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1rem' }}>
            {t('intro.text')}
          </p>
        </section>

        {/* Highlights Section */}
        <section style={{ padding: '40px 20px', backgroundColor: '#f9f9f9' }}>
          <h2 style={{ textAlign: 'center', fontSize: '1.5rem', marginBottom: '30px' }}>
            {t('nearby.title')}
          </h2>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '30px',
              maxWidth: '1000px',
              margin: '0 auto',
            }}
          >
            {[
              {
                icon: <FaUmbrellaBeach size={40} />,
                title: t('nearby.items.beaches.title'),
                text: t('nearby.items.beaches.text'),
              },
              {
                icon: <FaUtensils size={40} />,
                title: t('nearby.items.dining.title'),
                text: t('nearby.items.dining.text'),
              },
              {
                icon: <FaCarSide size={40} />,
                title: t('nearby.items.access.title'),
                text: t('nearby.items.access.text'),
              },
              {
                icon: <FaMapMarkerAlt size={40} />,
                title: t('nearby.items.nature.title'),
                text: t('nearby.items.nature.text'),
              },
            ].map((item, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'white',
                  padding: '20px',
                  borderRadius: '10px',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                  flex: '1 1 220px',
                  maxWidth: '250px',
                  textAlign: 'center',
                }}
              >
                <div style={{ marginBottom: '10px', color: '#6c63ff' }}>{item.icon}</div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '10px' }}>{item.title}</h3>
                <p style={{ fontSize: '0.95rem' }}>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Google Map Embed */}
        <section style={{ padding: '40px 0', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>{t('map.title')}</h2>
          <div
            style={{
              maxWidth: '1000px',
              margin: '0 auto',
              borderRadius: '10px',
              overflow: 'hidden',
              border: '4px solid #ccc',
            }}
          >
            <iframe
              src="https://maps.google.com/maps?q=39.486639,19.912000&z=15&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
