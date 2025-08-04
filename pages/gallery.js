// pages/gallery.js
import React from 'react';
import Header from '../components/Header';

export default function GalleryPage() {
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
    'Villa_3_13.webp'
  ];

  return (
    <>
      <Header />
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h1>Gallery</h1>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '20px',
            marginTop: '30px',
          }}
        >
          {images.map((filename, index) => (
            <img
              key={index}
              src={`/images/common/${filename}`}
              alt={`Gallery ${index + 1}`}
              style={{
                width: '300px',
                height: 'auto',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                objectFit: 'cover',
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}

