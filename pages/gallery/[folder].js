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
  const [containerWidth, setContainerWidth] = useState(1920); // full HD desktop default
  const [containerHeight, setContainerHeight] = useState(1080);

  useEffect(() => {
    // Preload first few images to reduce delay
    images.slice(0, 8).forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);

  useEffect(() => {
    const updateSize = () => {
      setContainerWidth(window.innerWidth);
      setContainerHeight(window.innerHeight);
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const columnCount = Math.max(1, Math.floor(containerWidth / 280));
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

      <div
        ref={containerRef}
        style={{
          width: '100%',
          height: '100vh',
        }}
      >
        <Grid
          columnCount={columnCount}
          columnWidth={columnWidth}
          height={containerHeight}
          rowCount={rowCount}
          rowHeight={rowHeight}
          width={containerWidth}
          overscanRowCount={4}
          style={{ overflowX: 'hidden', marginRight: '-4px' }}
        >
          {Cell}
        </Grid>
      </div>
    </main>
  );
}
