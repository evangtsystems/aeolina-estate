import { useState, useEffect } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen width for responsive toggle
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const menuItems = ['Home', 'Villas', 'Gallery', 'Location', 'Booking', 'Contact'];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        height: '90px',
        background: 'linear-gradient(90deg, #0077b6, #00b4d8)',
        padding: '0 20px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
        zIndex: 1000,
        fontFamily: 'sans-serif',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <nav
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        {/* Logo */}
        <div
          style={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            marginLeft: '-17px',
          }}
        >
          <img
            src="/images/common/AEOLINA COLLECTION.jpeg"
            alt="Aeolina Logo"
            style={{
              height: '84px',
              width: 'auto',
              objectFit: 'contain',
              borderRadius: '6px',
              backgroundColor: 'white',
              boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
              display: 'block',
            }}
          />
        </div>

        {/* Desktop Nav */}
        {!isMobile && (
          <div
            style={{
              display: 'flex',
              gap: '20px',
              fontSize: '1rem',
              alignItems: 'center',
            }}
          >
            {menuItems.map((label) => (
              <a
                key={label}
                href={`/${label === 'Home' ? '' : label.toLowerCase()}`}
                style={{
                  textDecoration: 'none',
                  color: '#fff',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  transition: 'all 0.3s ease',
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = '#ffffff33';
                  e.target.style.transform = 'scale(1.05)';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.transform = 'scale(1)';
                }}
              >
                {label}
              </a>
            ))}
          </div>
        )}

        {/* Hamburger Icon */}
        {isMobile && (
          <div
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              fontSize: '28px',
              color: '#fff',
              cursor: 'pointer',
              padding: '10px',
              userSelect: 'none',
            }}
          >
            ☰
          </div>
        )}
      </nav>

      {/* Mobile Menu */}
      {isMobile && menuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '90px',
            left: 0,
            width: '100%',
            backgroundColor: '#0077b6',
            padding: '10px 0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          {menuItems.map((label) => (
            <a
              key={label}
              href={`/${label === 'Home' ? '' : label.toLowerCase()}`}
              style={{
                textDecoration: 'none',
                color: '#fff',
                padding: '10px 20px',
                fontSize: '1rem',
              }}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
