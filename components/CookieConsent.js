import { useEffect, useState } from 'react';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showPrefs, setShowPrefs] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) setVisible(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      width: '100%',
      backgroundColor: '#333',
      color: '#fff',
      padding: '1rem',
      textAlign: 'center',
      zIndex: 3000,
    }}>
      {showPrefs ? (
        <>
          <p>Manage your preferences:</p>
          <p>
            We use only essential cookies unless you opt in to analytics/marketing cookies.
          </p>
          <button
            onClick={acceptCookies}
            style={buttonStyle}
          >
            Accept All
          </button>
          <button
            onClick={declineCookies}
            style={buttonStyle}
          >
            Decline All
          </button>
        </>
      ) : (
        <>
          This website uses cookies to enhance your experience.
          <button onClick={acceptCookies} style={buttonStyle}>Accept</button>
          <button onClick={() => setShowPrefs(true)} style={buttonStyle}>Manage</button>
        </>
      )}
    </div>
  );
}

const buttonStyle = {
  marginLeft: '1rem',
  padding: '0.5rem 1rem',
  background: '#ffd700',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontWeight: 'bold',
};
