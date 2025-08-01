import { useState, useEffect } from 'react';

const sliderImages = [
  '/images/slider/1.jpg',
  '/images/slider/2.jpg',
  '/images/slider/3.jpg',
  '/images/slider/4.jpg',
  '/images/slider/5.jpg',
  '/images/slider/6.jpg',
  '/images/slider/7.jpg',
  '/images/slider/8.jpg',
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 480);
    };
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + sliderImages.length) % sliderImages.length);
  };

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
  };

  return (
    <div
      className="hero-slider"
      style={{
        height: isMobile ? '60vh' : '92vh',
        width: '100%',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <img
        src={sliderImages[index]}
        alt={`Slide ${index + 1}`}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',

          objectPosition: 'center',
          transition: 'opacity 0.5s ease-in-out',
          backgroundColor: '#000',
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 2,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          color: 'white',
          padding: '5vw',
          pointerEvents: 'none',
        }}
      >
        <h1
          style={{
            fontSize: 'clamp(1.8rem, 6vw, 3.5rem)',
            fontWeight: 'bold',
            marginBottom: '10px',
            textShadow: '1px 1px 6px rgba(0,0,0,0.6)',
          }}
        >
          Aeolina Collection
        </h1>
        <p
          style={{
            fontSize: 'clamp(1rem, 4vw, 1.3rem)',
            maxWidth: '90%',
            textShadow: '1px 1px 4px rgba(0,0,0,0.5)',
          }}
        >
          Discover tranquility and elegance in Corfu's olive groves — three private villas, one unforgettable stay.
        </p>
      </div>

      {/* Navigation */}
      <button
        onClick={prevSlide}
        style={{
          position: 'absolute',
          top: '50%',
          left: '10px',
          transform: 'translateY(-50%)',
          background: 'rgba(0,0,0,0.5)',
          border: 'none',
          color: 'white',
          fontSize: '2.2rem',
          padding: '10px',
          cursor: 'pointer',
          borderRadius: '50%',
          zIndex: 3,
        }}
        aria-label="Previous Slide"
      >
        &#8249;
      </button>

      <button
        onClick={nextSlide}
        style={{
          position: 'absolute',
          top: '50%',
          right: '10px',
          transform: 'translateY(-50%)',
          background: 'rgba(0,0,0,0.5)',
          border: 'none',
          color: 'white',
          fontSize: '2.2rem',
          padding: '10px',
          cursor: 'pointer',
          borderRadius: '50%',
          zIndex: 3,
        }}
        aria-label="Next Slide"
      >
        &#8250;
      </button>
    </div>
  );
}
