// pages/gallery.js
import React, { useState } from 'react';
import Header from '../components/Header';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const images = [
  'Villa_3_14.webp',
  'Villa_3_15.webp',
  'Villa_3_16.webp',
  'Villa_3_17.webp',
  'Villa_2_1.webp',
  'Villa_2_2.webp',
  'Villa_2_3.webp',
  'Villa_2_4.webp',
  'Villa_2_5.webp',
  'Villa_2_6.webp',
  'Villa_2_7.webp',
  'Villa_2_8.webp',
  'Villa_3_1.webp',
  'Villa_3_2.webp',
  'Villa_3_3.webp',
  'Villa_3_4.webp',
  'Villa_3_5.webp',
  'Villa_3_6.webp',
  'Villa_3_7.webp',
  'Villa_3_8.webp',
  'Villa_3_9.webp',
  'Villa_3_10.webp',
  'Villa_3_11.webp',
  'Villa_3_12.webp',
  'Villa_3_13.webp',
];

export default function GalleryPage() {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = images.map((filename) => ({
    src: `/images/common/${filename}`,
  }));

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  return (
    <>
      <Header />
      <div style={{ padding: '40px 20px', textAlign: 'center' }}>
        <h1 style={{ marginBottom: '30px' }}>Gallery</h1>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '20px',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          {images.map((filename, index) => (
            <img
              key={index}
              src={`/images/common/${filename}`}
              alt={`Gallery ${index + 1}`}
              loading="lazy"
              onClick={() => handleImageClick(index)}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '10px',
                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
                objectFit: 'cover',
                transition: 'transform 0.3s ease, opacity 0.5s ease',
                cursor: 'pointer',
                opacity: 0.85,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            />
          ))}
        </div>

        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={slides}
          index={currentIndex}
        />
      </div>
    </>
  );
}
