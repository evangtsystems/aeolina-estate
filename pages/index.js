// pages/index.js
// pages/index.js
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import VillaCard from '../components/VillaCard';
import HeroSlider from '../components/HeroSlider';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { FaUmbrellaBeach, FaUtensils, FaCarSide, FaMapMarkerAlt } from 'react-icons/fa';
import { AnimatePresence } from 'framer-motion';
import CookieConsent from '../components/CookieConsent';
import { useTranslation } from 'react-i18next';
import { tw, twList } from '../i18n/word-by-word';

export default function Home() {
  const { t } = useTranslation('home');

  // --- SAFE HELPERS ---
  // Get array (objects or strings)
  const tArr = (key) => {
    const v = t(key, { returnObjects: true, defaultValue: [] });
    return Array.isArray(v) ? v : [];
  };
  // Get array of strings (coerces objects like {text: "..."} -> "...", others -> "")
  const tStrArr = (key) => tArr(key).map((x) => (typeof x === 'string' ? x : (x && typeof x.text === 'string' ? x.text : '')));

  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: '-100px' });
  const textRef = useRef(null);
  const textInView = useInView(textRef, { once: true, margin: '-100px' });
  const [showIntro, setShowIntro] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [positions, setPositions] = useState([]);

  const rotatingAmenities = [
    { icon: '🌴', label: t('amenities.privatePool') },
    { icon: '🏡', label: t('amenities.familyFriendly') },
    { icon: '🌄', label: t('amenities.mountainViews') },
    { icon: '☀️', label: t('amenities.sunLoungers') },
    { icon: '🛏️', label: t('amenities.upTo8Guests') },
    { icon: '🍳', label: t('amenities.fullKitchen') },
    { icon: '🧼', label: t('amenities.washingMachine') },
    { icon: '📺', label: t('amenities.smartTv') },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const center = isMobile ? 180 : 240;
    const radius = isMobile ? 130 : 200;

    const newPositions = rotatingAmenities.map((_, index) => {
      const angle = (360 / rotatingAmenities.length) * index;
      const radians = (angle * Math.PI) / 180;
      const x = radius * Math.sin(radians) + center;
      const y = -radius * Math.cos(radians) + center;
      return { x, y };
    });

    setPositions(newPositions);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % rotatingAmenities.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [rotatingAmenities.length]);

  return (
    <>
      <Head>
  <title>{t('seo.title')}</title>
  <meta name="description" content={t('seo.description')} />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  {/* ✅ Canonical (important because trailingSlash: true) */}
  <link rel="canonical" href="https://aeolinavillas.com/" />

  {/* ✅ Open Graph (social sharing + Google sometimes uses it) */}
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Aeolina Villas" />
  <meta property="og:title" content={t('seo.title')} />
  <meta property="og:description" content={t('seo.description')} />
  <meta property="og:url" content="https://aeolinavillas.com/" />
  <meta property="og:image" content="https://aeolinavillas.com/og/home.jpg" />

  {/* ✅ Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={t('seo.title')} />
  <meta name="twitter:description" content={t('seo.description')} />
  <meta name="twitter:image" content="https://aeolinavillas.com/og/home.jpg" />
</Head>


      <AnimatePresence>
        {showIntro && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 4.5, ease: 'easeInOut' }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              backgroundColor: '#e6f2e6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 9999,
              pointerEvents: 'none',
            }}
          >
            <motion.img
              src="/images/common/AEOLINA COLLECTION.jpeg"
              alt={t('alts.introLogo')}
              initial={{ scale: 1.1 }}
              animate={{ scale: 0.25 }}
              transition={{ delay: 1.5, duration: 3, ease: 'easeInOut' }}
              style={{
                width: '80vw',
                maxWidth: '700px',
                height: 'auto',
                backgroundColor: 'white',
                borderRadius: '8px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
                transformOrigin: 'center center',
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Header />
      <main
        style={{
          fontFamily: 'Arial, sans-serif',
          paddingTop: '80px',
          overflowX: 'hidden',
          backgroundColor: '#e6f2e6',
        }}
      >
        <HeroSlider />

        {/* Interior Design & Sustainability */}
        <section
          style={{
            padding: '70px 20px',
            backgroundColor: '#f5fff5',
            borderTop: '3px solid #cfe6cf',
            borderBottom: '3px solid #cfe6cf',
            fontFamily: `'Georgia', serif`,
          }}
        >
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <h2
              style={{
                fontSize: '2.2rem',
                marginBottom: '28px',
                textAlign: 'center',
                color: '#263d2d',
                letterSpacing: '0.5px',
              }}
            >
              {t('design.title')}
            </h2>

            {/* Intro / statement */}
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '14px',
                padding: '24px',
                boxShadow: '0 8px 20px rgba(0,0,0,0.06)',
                lineHeight: 1.9,
                fontSize: '1.1rem',
                color: '#333',
                textAlign: 'justify',
                marginBottom: '24px',
              }}
            >
              <p style={{ margin: 0 }}>{t('design.intro')}</p>
            </div>

            {/* Feature grid */}
            <div id="design-sustainability-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px' }}>
              {/* Full-width background image with responsive overlayed text */}
              <div
                className="fullBleedHero"
                style={{
                  position: 'relative',
                  width: '100vw',
                  marginLeft: 'calc(-50vw + 50%)',
                  marginRight: 'calc(-50vw + 50%)',
                  marginBottom: '40px',
                  overflow: 'hidden',
                }}
              >
                <img
                  className="heroImg"
                  src="/images/common/Villa_3_7.webp"
                  alt={t('alts.interior')}
                  style={{
                    width: '100%',
                    display: 'block',
                  }}
                />

                <div
                  className="overlay"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35))',
                  }}
                />

                <div className="heroText">
                  <h3
                    style={{
                      fontSize: '1.8rem',
                      marginBottom: '18px',
                      color: '#bb8b22ff',
                    }}
                  >
                    {t('design.hero.title')}
                  </h3>

                  <ul
                    style={{
                      margin: 0,
                      padding: 0,
                      listStyle: 'none',
                      textAlign: 'center',
                      fontSize: '1.1rem',
                      lineHeight: 1.8,
                    }}
                  >
                    {tStrArr('design.hero.bullets').map((li, i) => (
                      <li key={i} style={{ marginBottom: '6px', color: 'inherit' }}>
                        {li}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Sustainability */}
              <div
                style={{
                  backgroundColor: '#e9f7ef',
                  borderRadius: '14px',
                  padding: '28px',
                  boxShadow: '0 6px 18px rgba(0,0,0,0.05)',
                }}
              >
                <div className="s-row">
                  {/* Left: Image */}
                  <div className="s-image" style={{ flexShrink: 0 }}>
                    <img
                      src="/images/common/sustainability.png"
                      alt={t('alts.sustainability')}
                      style={{
                        width: '200px',
                        height: 'auto',
                        borderRadius: '12px',
                        boxShadow: '0 4px 14px rgba(0,0,0,0.08)',
                      }}
                    />
                  </div>

                  {/* Right: Text */}
                  <div className="s-text" style={{ flex: 1 }}>
                    <h3
                      style={{
                        fontSize: '1.8rem',
                        fontWeight: '700',
                        marginBottom: '20px',
                        color: '#21402f',
                        letterSpacing: '0.5px',
                        textTransform: 'uppercase',
                        borderBottom: '2px solid #cfe6cf',
                        paddingBottom: '6px',
                      }}
                    >
                      {t('sustainability.title')}
                    </h3>

                    <ul
                      style={{
                        margin: 0,
                        padding: 0,
                        lineHeight: 1.9,
                        color: '#2b3e35',
                        listStyle: 'none',
                      }}
                    >
                      {tArr('sustainability.bullets').map((li, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'center', marginBottom: '6px' }}>
                          <span style={{ width: '30px', textAlign: 'center' }}>{li?.icon ?? ''}</span>
                          <span>{li?.text ?? ''}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick badges with image */}
            <div style={{ textAlign: 'center', marginTop: '22px' }}>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '10px',
                  justifyContent: 'center',
                }}
              >
                {twList(['solidWood', 'lowEnergy', 'naturalTextiles', 'localCraft', 'waterSmart']).map((b) => (
                  <span
                    key={b}
                    style={{
                      backgroundColor: '#ffffff',
                      border: '1px solid #cfe6cf',
                      color: '#21402f',
                      padding: '8px 12px',
                      borderRadius: '999px',
                      fontSize: '0.95rem',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                    }}
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>

            {/* Highlight banner */}
            <div
              style={{
                background: 'linear-gradient(90deg, #cfe6cf, #e9f7ef)',
                borderRadius: '16px',
                padding: '18px 22px',
                textAlign: 'center',
                boxShadow: '0 8px 20px rgba(0,0,0,0.07)',
                marginTop: '26px',
              }}
            >
              <p style={{ margin: 0, fontSize: '1.05rem', color: '#21402f' }}>
                {t('design.banner')}
              </p>
            </div>

            {/* Credit line */}
            <div style={{ marginTop: '14px', textAlign: 'right' }}>
              <em style={{ fontSize: '0.95rem', color: '#3b5a46' }}>{t('design.credit')}</em>
            </div>
          </div>

          {/* SINGLE styled-jsx block (no nesting) */}
          <style jsx>{`
            @media (min-width: 900px) {
              #design-sustainability-grid {
                grid-template-columns: 1fr 1fr;
                gap: 24px;
              }
            }
            @media (min-width: 768px) {
              .heroText {
                position: absolute;
                top: 40%;
                left: 50%;
                transform: translate(-50%, -50%);
                color: #ced8ceff;
                padding: 20px;
                width: 92%;
                max-width: 900px;
                text-align: center;
                text-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
              }
              .heroImg {
                height: 71vh;
                object-fit: cover;
              }
            }
            @media (max-width: 767px) {
              .overlay {
                display: none;
              }
              .heroText {
                position: static;
                transform: none;
                margin-top: 16px;
                padding: 16px;
                background: #f5f5f5;
                border-radius: 8px;
                color: #333;
                text-align: center;
              }
              .heroImg {
                height: auto;
                object-fit: contain;
              }
              :global(body) {
                overflow-x: hidden;
              }
            }
            .s-row {
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 24px;
            }
            @media (min-width: 900px) {
              .s-row {
                flex-direction: row;
                align-items: center;
              }
              .s-image img {
                width: 260px;
              }
              .s-text h3 {
                text-align: left;
              }
            }
          `}</style>
        </section>

        {/* Why Guests Love */}
        <section
          style={{
            padding: '100px 20px',
            backgroundImage: 'url(/images/common/olive-background.png)',
            backgroundColor: '#fff6e9',
            backgroundSize: 'contain',
            backgroundRepeat: 'repeat',
            backgroundAttachment: 'scroll',
            fontFamily: `'Georgia', serif`,
            borderTop: '3px solid #d6caa0',
            borderBottom: '3px solid #d6caa0',
          }}
        >
          <div style={{ maxWidth: '950px', margin: '0 auto', textAlign: 'center' }}>
            <h2
              style={{
                fontSize: '2.6rem',
                fontWeight: '700',
                marginBottom: '50px',
                letterSpacing: '0.5px',
                color: '#2a2a2a',
              }}
            >
              {t('love.title')}
            </h2>
            <div
              style={{
                fontSize: '1.25rem',
                lineHeight: '2.2',
                color: '#222',
                textAlign: 'justify',
                backgroundColor: 'rgba(235, 227, 208, 0.92)',
                padding: '30px',
                borderRadius: '14px',
                boxShadow: '0 10px 28px rgba(0,0,0,0.06)',
              }}
            >
              {tStrArr('love.paragraphs').map((p, i) => (
                <p
                  key={i}
                  style={{
                    textIndent: i < 4 ? '2em' : 0,
                    marginBottom: i < 4 ? '30px' : i === 4 ? 0 : '30px',
                    textAlign: i === 4 ? 'center' : 'justify',
                    fontWeight: i === 4 ? 600 : 400,
                  }}
                >
                  {i === 0 ? (
                    <>
                      <span
                        style={{
                          fontSize: '1.8rem',
                          float: 'left',
                          lineHeight: '1',
                          marginRight: '12px',
                          color: '#aa6600',
                        }}
                      >
                        {t('love.dropcap')}
                      </span>
                      {p}
                    </>
                  ) : (
                    p
                  )}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Villa Cards */}
        <section style={{ padding: '60px 20px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '30px' }}>{t('villas.title')}</h2>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '40px 30px',
              marginTop: '30px',
            }}
          >
            <VillaCard
              name={t('villas.elea.name')}
              image="/images/elea/cover.jpg"
              description={t('villas.elea.desc')}
              link="/villas/elea"
            />
            <VillaCard
              name={t('villas.oliva.name')}
              image="/images/oliva/cover.jpg"
              description={t('villas.oliva.desc')}
              link="/villas/oliva"
            />
            <VillaCard
              name={t('villas.natalia.name')}
              image="/images/natalia/coveri.jpg"
              description={t('villas.natalia.desc')}
              link="/villas/natalia"
            />
          </div>
        </section>

        {/* Collection Description */}
        <section
          style={{
            padding: '60px 20px',
            backgroundColor: '#eafbea',
            textAlign: 'center',
            fontFamily: `'Georgia', serif`,
          }}
        >
          <h2 style={{ fontSize: '2rem', marginBottom: '40px', color: '#2f2f2f' }}>
            {t('collection.title')}
          </h2>

          <div
            ref={textRef}
            style={{
              maxWidth: '950px',
              margin: '0 auto',
              textAlign: 'justify',
              fontSize: '1.25rem',
              lineHeight: '2.1',
              color: '#222',
              backgroundColor: 'rgba(221, 230, 215, 0.92)',
              padding: '30px',
              borderRadius: '14px',
              boxShadow: '0 10px 24px rgba(0,0,0,0.05)',
            }}
          >
            {tStrArr('collection.lines').map((line, index) => {
              const styled = (line || '')
                .replaceAll('Villa ELEA', '<strong>Villa ELEA</strong>')
                .replaceAll('Villa OLIVA', '<strong>Villa OLIVA</strong>')
                .replaceAll('Villa NATALIA', '<strong>Villa NATALIA</strong>');

              return (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={textInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.4, duration: 0.8 }}
                  style={{ marginBottom: line === '' ? '32px' : '20px' }}
                  dangerouslySetInnerHTML={{ __html: styled }}
                />
              );
            })}
          </div>
        </section>

        {/* Clock Layout */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '480px',
            aspectRatio: '1 / 1',
            margin: '80px auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {/* Centered Logo Only */}
          <div
            style={{
              position: 'absolute',
              top: '48.5%',
              left: '50%',
              transform: 'translate(-54%, -50%)',
              zIndex: 2,
              backgroundColor: 'white',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.18)',
              width: isMobile ? '100px' : '130px',
              height: isMobile ? '100px' : '130px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
            }}
          >
            <img
              src="/images/common/AEOLINA COLLECTION.jpeg"
              alt={t('alts.centerLogo')}
              style={{
                height: '80%',
                width: '80%',
                objectFit: 'contain',
                borderRadius: '6px',
                display: 'block',
              }}
            />
          </div>

          {/* Vector Hand */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '4px',
              height: isMobile ? '130px' : '180px',
              backgroundColor: '#aa0000',
              borderRadius: '4px',
              transformOrigin: 'bottom center',
              transform: `translate(-50%, -100%) rotate(${(360 / rotatingAmenities.length) * currentIndex}deg)`,
              transition: 'transform 0.8s ease-in-out',
              zIndex: 0,
            }}
          />

          {/* Icons in fixed positions */}
          {positions.length > 0 &&
            rotatingAmenities.map((item, i) => {
              const pos = positions[i];
              const isActive = i === currentIndex;

              return (
                <div
                  key={`${item.label}-${i}`}
                  style={{
                    position: 'absolute',
                    top: pos.y,
                    left: pos.x,
                    transform: 'translate(-50%, -50%)',
                    zIndex: isActive ? 3 : 1,
                    transition: 'all 0.4s ease',
                  }}
                >
                  <div
                    style={{
                      backgroundColor: 'white',
                      padding: isMobile
                        ? isActive
                          ? '10px 14px'
                          : '8px 10px'
                        : isActive
                        ? '14px 22px'
                        : '10px 16px',
                      borderRadius: '50px',
                      boxShadow: isActive
                        ? '0 4px 12px rgba(0,0,0,0.2)'
                        : '0 2px 8px rgba(0,0,0,0.1)',
                      fontSize: isMobile ? '0.85rem' : isActive ? '1.05rem' : '0.95rem',
                      fontWeight: 500,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      minWidth: isMobile ? 'auto' : '100px',
                      maxWidth: '100%',
                      whiteSpace: isMobile ? 'normal' : 'nowrap',
                      textAlign: 'center',
                      lineHeight: '1.2',
                      transform: isActive ? 'scale(1.1)' : 'scale(1)',
                      transition: 'all 0.4s ease',
                    }}
                  >
                    <span style={{ fontSize: isMobile ? '1.2rem' : '1.5rem' }}>{item.icon}</span>
                    <span>{item.label}</span>
                  </div>
                </div>
              );
            })}
        </div>

        {/* Nearby Attractions */}
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
                title: t('nearby.cards.beaches.title'),
                text: t('nearby.cards.beaches.text'),
              },
              {
                icon: <FaUtensils size={40} />,
                title: t('nearby.cards.dining.title'),
                text: t('nearby.cards.dining.text'),
              },
              {
                icon: <FaCarSide size={40} />,
                title: t('nearby.cards.access.title'),
                text: t('nearby.cards.access.text'),
              },
              {
                icon: <FaMapMarkerAlt size={40} />,
                title: t('nearby.cards.nature.title'),
                text: t('nearby.cards.nature.text'),
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
      </main>
      <CookieConsent />
      <Footer />
    </>
  );
}
