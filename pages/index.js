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

export default function Home() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: '-100px' });
  const textRef = useRef(null);
  const textInView = useInView(textRef, { once: true, margin: '-100px' });
  const [showIntro, setShowIntro] = useState(true);
  const [isMobile, setIsMobile] = useState(false); // already declared correctly

  const [currentIndex, setCurrentIndex] = useState(0);
  const [positions, setPositions] = useState([]);

  

  const rotatingAmenities = [
    { icon: '🌴', label: 'Private Pool' },
    { icon: '🏡', label: 'Family Friendly' },
    { icon: '🌄', label: 'Mountain Views' },
    { icon: '☀️', label: 'Sun Loungers' },
    { icon: '🛏️', label: 'Up to 8 Guests' },
    { icon: '🍳', label: 'Full Kitchen' },
    { icon: '🧼', label: 'Washing Machine' },
    { icon: '📺', label: 'Smart TV' },
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
}, [isMobile]);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % rotatingAmenities.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <title>Villa AEOLINA – Tranquil Villas in Corfu</title>
        <meta
          name="description"
          content="Stay in the heart of nature at Villa AEOLINA, featuring three beautiful villas surrounded by olive trees in Episkopiana, Corfu."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
              alt="Aeolina Intro Logo"
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
      Why Guests Fall in Love with AEOLINA
    </h2>
    <div
      style={{
        fontSize: '1.25rem',
        lineHeight: '2.2',
        color: '#222',
        textAlign: 'justify',
        backgroundColor: 'rgba(235, 227, 208, 0.92)', // #dfcea7

        padding: '30px',
        borderRadius: '14px',
        boxShadow: '0 10px 28px rgba(0,0,0,0.06)',
      }}
    >
      <p style={{ textIndent: '2em', marginBottom: '30px' }}>
        <span style={{ fontSize: '1.8rem', float: 'left', lineHeight: '1', marginRight: '12px', color: '#aa6600' }}>
          A
        </span>
        EOLINA isn’t just a villa — it’s a deeply personal experience set among the tranquil olive groves of southern Corfu.
        Designed for those who seek both elegance and soul, each stay offers a renewed sense of peace.
      </p>

      <p style={{ textIndent: '2em', marginBottom: '30px' }}>
        Whether it’s the luxury of your private pool, the scent of sun-warmed stone, or the joy of shared dinners under the stars,
        AEOLINA invites you to reconnect — <strong>with yourself, your loved ones, and nature</strong>.
      </p>

      <p style={{ textIndent: '2em', marginBottom: '30px' }}>
        Spacious interiors welcome families and groups, while our quiet setting and thoughtful design make AEOLINA a dream for couples
        or remote workers. <strong>Every moment feels curated — yet completely your own.</strong>
      </p>

      <p style={{ textIndent: '2em', marginBottom: '40px' }}>
        And just beyond your terrace? Sandy beaches, coastal trails, and timeless Corfiot villages waiting to be explored.
      </p>

      <p style={{ textAlign: 'center', fontWeight: '600', fontSize: '1.2rem', color: '#222' }}>
        <em>AEOLINA: where elegant simplicity becomes unforgettable.</em>
      </p>
    </div>
  </div>
</section>






       
      

        {/* Villa Cards */}
        <section style={{ padding: '60px 20px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '30px' }}>Our Villas</h2>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '40px 30px',
              marginTop: '30px',
            }}
          >
            <VillaCard name="Villa ELEA" image="/images/elea/cover.jpg" description="Our deluxe villa for up to 8 guests, perfect for families or small groups." link="/villas/elea" />
            <VillaCard name="Villa OLIVA" image="/images/oliva/cover.jpg" description="A cozy and stylish retreat for up to 4 guests." link="/villas/oliva" />
            <VillaCard name="Villa NATALIA" image="/images/natalia/coveri.jpg" description="Charming, sunlit, and peaceful — ideal for couples or small families." link="/villas/natalia" />
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
    The AEOLINA Collection
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
      backgroundColor: 'rgba(221, 230, 215, 0.92)', // #c3d6b5

      padding: '30px',
      borderRadius: '14px',
      boxShadow: '0 10px 24px rgba(0,0,0,0.05)',
    }}
  >
    {[
      "The AEOLINA Collection presents three exclusive villas nestled in the quiet village of Episkopiana, thoughtfully designed to celebrate the beauty of Corfu’s olive-covered hills.",
      "Blending refined aesthetics with modern comforts, each villa offers a private oasis for families, couples, and groups seeking a serene Mediterranean escape.",
      "",
      "Villa NATALIA is our premier 200m² residence, ideal for up to 8 guests. It features four spacious bedrooms, a private pool, and lush garden views — perfect for larger families or gatherings.",
      "Villa OLIVA offers 150m² of cozy sophistication with two elegant bedrooms and an inviting outdoor area, tailored for a small family or friends looking to relax in nature.",
      "Villa ELEA mirrors OLIVA in design and comfort, with warm natural light and tranquil surroundings that make it especially welcoming for couples or families with children.",
      "",
      "Whether you're lounging by the pool, enjoying quality time with loved ones, or exploring the island’s treasures, the AEOLINA Collection ensures a luxurious yet authentic Corfu experience."
    ].map((line, index) => {
      const styledLine = line
        .replace("Villa ELEA", "<strong>Villa ELEA</strong>")
        .replace("Villa OLIVA", "<strong>Villa OLIVA</strong>")
        .replace("Villa NATALIA", "<strong>Villa NATALIA</strong>");

      return (
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={textInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: index * 0.4, duration: 0.8 }}
          style={{
            marginBottom: line === "" ? '32px' : '20px'
          }}
          dangerouslySetInnerHTML={{ __html: styledLine }}
        />
      );
    })}
  </div>
</section>


 {/* Clock Layout */}
{/* Clock Layout */}
<div
  style={{
    position: 'relative',
    width: '100%',
    maxWidth: '480px',
    aspectRatio: '1 / 1', // Ensures perfect square
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
    alt="Aeolina Logo"
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
          key={item.label}
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
            <span style={{ fontSize: isMobile ? '1.2rem' : '1.5rem' }}>
              {item.icon}
            </span>
            <span>{item.label}</span>
          </div>
        </div>
      );
    })}
</div>

        {/* Nearby Attractions */}
        <section style={{ padding: '40px 20px', backgroundColor: '#f9f9f9' }}>
          <h2 style={{ textAlign: 'center', fontSize: '1.5rem', marginBottom: '30px' }}>
            What’s Nearby?
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
                title: 'Beaches',
                text: 'Chalikounas and Issos beaches are only a short drive away – wide, sandy, and uncrowded.',
              },
              {
                icon: <FaUtensils size={40} />,
                title: 'Local Dining',
                text: 'Enjoy fresh seafood and local cuisine at family-run tavernas in nearby Moraitika and Benitses.',
              },
              {
                icon: <FaCarSide size={40} />,
                title: 'Easy Access',
                text: 'Located just 30 minutes from Corfu Town and the airport. Ideal for exploring the island.',
              },
              {
                icon: <FaMapMarkerAlt size={40} />,
                title: 'Nature & Trails',
                text: 'Surrounded by olive groves, hills, and quiet paths for walking or cycling right from your door.',
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
      <Footer />
    </>
  );
}
