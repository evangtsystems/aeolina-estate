import fs from 'fs';
import path from 'path';
import { FixedSizeGrid as Grid } from 'react-window';
import { useEffect, useRef, useState } from 'react';

export async function getStaticPaths() {
  const dir = path.join(process.cwd(), 'public/imageData');
  const files = fs.readdirSync(dir);
  const paths = files.map((file) => ({
    params: { folder: file.replace('.json', '') },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), 'public/imageData', `${params.folder}.json`);
  const images = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  return { props: { folder: params.folder, images } };
}

export default function GalleryPage({ folder, images }) {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(1000);
  const [containerHeight, setContainerHeight] = useState(800);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    const measure = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
        setContainerHeight(containerRef.current.offsetHeight);
      }
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') setLightboxIndex((prev) => (prev + 1) % images.length);
      if (e.key === 'ArrowLeft') setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, images.length]);

  const columnCount = Math.max(1, Math.floor(containerWidth / 250));
  const columnWidth = Math.floor(containerWidth / columnCount);
  const rowHeight = columnWidth;
  const rowCount = Math.ceil(images.length / columnCount);

  const Cell = ({ columnIndex, rowIndex, style }) => {
    const index = rowIndex * columnCount + columnIndex;
    if (index >= images.length) return null;

    const fullSrc = images[index];
    const thumbSrc = fullSrc.replace('/images/', '/thumbs/');

    return (
      <div style={{ ...style, padding: '0.5rem' }}>
        <img
          src={thumbSrc}
          loading="lazy"
          alt={`Photo ${index + 1}`}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '8px',
            display: 'block',
            cursor: 'pointer',
          }}
          onClick={() => setLightboxIndex(index)}
        />
      </div>
    );
  };

  const goPrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <main style={{ margin: 0, padding: 0, width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <a
        href="/"
        style={{
          position: 'fixed',
          top: '1rem',
          left: '1rem',
          zIndex: 1000,
          background: '#fff',
          padding: '0.4rem 0.8rem',
          borderRadius: '6px',
          fontSize: '1rem',
          color: '#2c3e50',
          textDecoration: 'none',
          boxShadow: '0 0 6px rgba(0,0,0,0.1)',
        }}
      >
        ⬅ Επιστροφή στη Λίστα
      </a>

      <div ref={containerRef} style={{ width: '100%', height: '100vh' }}>
        <Grid
          columnCount={columnCount}
          columnWidth={columnWidth}
          height={containerHeight}
          rowCount={rowCount}
          rowHeight={rowHeight}
          width={containerWidth}
          overscanRowCount={10}
          style={{ overflowX: 'hidden', marginRight: '-4px' }}
        >
          {Cell}
        </Grid>
      </div>

      {lightboxIndex !== null && (
        <div
          onClick={() => setLightboxIndex(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0,0,0,0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2000,
            cursor: 'zoom-out',
          }}
        >
          <img
            src={images[lightboxIndex]}
            alt=""
            style={{
              maxWidth: '90%',
              maxHeight: '90%',
              objectFit: 'contain',
              borderRadius: '12px',
              boxShadow: '0 0 20px rgba(0,0,0,0.5)',
            }}
          />

          {/* Close Button */}
          <div
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              color: '#fff',
              fontSize: '2rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              zIndex: 2001,
            }}
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(null);
            }}
          >
            ✕
          </div>

          {/* Prev Arrow */}
          <div
            onClick={goPrev}
            style={{
              position: 'absolute',
              left: '2rem',
              fontSize: '3rem',
              color: '#fff',
              cursor: 'pointer',
              userSelect: 'none',
              zIndex: 2001,
            }}
          >
            ‹
          </div>

          {/* Next Arrow */}
          <div
            onClick={goNext}
            style={{
              position: 'absolute',
              right: '2rem',
              fontSize: '3rem',
              color: '#fff',
              cursor: 'pointer',
              userSelect: 'none',
              zIndex: 2001,
            }}
          >
            ›
          </div>
        </div>
      )}
    </main>
  );
}


