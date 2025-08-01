// pages/gallery.js
import React from 'react';
import Header from '../components/Header';

export default function GalleryPage() {
  const images = [
    'Villa_3_14.jpg',
    'Villa_3_15.jpg',
    'Villa_3_16.jpg',
    'Villa_3_17.jpg',
    'Villa_2_1.jpg',
    'Villa_2_2.jpg',
    'Villa_2_3.jpg',
    'Villa_2_4.jpg',
    'Villa_2_5.jpg',
    'Villa_2_6.jpg',
    'Villa_2_7.jpg',
    'Villa_2_8.jpg',
    'Villa_3_1.jpg',
    'Villa_3_2.jpg',
    'Villa_3_3.jpg',
    'Villa_3_4.jpg',
    'Villa_3_5.jpg',
    'Villa_3_6.jpg',
    'Villa_3_7.jpg',
    'Villa_3_8.jpg',
    'Villa_3_9.jpg',
    'Villa_3_10.jpg',
    'Villa_3_11.jpg',
    'Villa_3_12.jpg',
    'Villa_3_13.jpg',
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

