// pages/gallery/[folder].js
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
  const [allLoaded, setAllLoaded] = useState(false);

  useEffect(() => {
    let loadedCount = 0;
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = img.onerror = () => {
        loadedCount++;
        if (loadedCount === images.length) setAllLoaded(true);
      };
    });
  }, [images]);

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

  const columnCount = Math.max(1, Math.floor(containerWidth / 250));
  const columnWidth = Math.floor(containerWidth / columnCount);
  const rowHeight = columnWidth; // square
  const rowCount = Math.ceil(images.length / columnCount);

  const Cell = ({ columnIndex, rowIndex, style }) => {
    const index = rowIndex * columnCount + columnIndex;
    if (index >= images.length) return null;
    const fullSrc = images[index];

    return (
      <div style={{ ...style, padding: '0.5rem' }}>
        <a href={fullSrc} target="_blank" rel="noopener noreferrer">
          <img
            src={fullSrc}
            alt={`Photo ${index + 1}`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '8px',
              display: 'block',
            }}
          />
        </a>
      </div>
    );
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
        {!allLoaded ? (
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div style={{
              width: '60px',
              height: '60px',
              border: '6px solid #ccc',
              borderTop: '6px solid #2c3e50',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
            }} />
            <style>{`
              @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
            `}</style>
          </div>
        ) : (
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
        )}
      </div>
    </main>
  );
}
