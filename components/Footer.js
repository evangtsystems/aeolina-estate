import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      backgroundColor: '#526f7a',
      color: 'white',
      padding: '30px 20px',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '20px',
      }}>
        {/* Left Column */}
        <div style={{ flex: '1 1 300px' }}>
          <p style={{ marginBottom: '8px' }}>IONIANEMS &copy; {currentYear}</p>
          <p style={{ marginBottom: '8px' }}>
            Contact us: <a href="mailto:info@ionianems.com" style={{ color: 'white' }}>info@ionianems.com</a>
          </p>
          <p style={{ marginBottom: '8px' }}>
            Follow us:
            <a href="https://facebook.com/ionianems" target="_blank" rel="noopener noreferrer" style={{ color: 'white', marginLeft: '10px' }}>
              <FaFacebook size={20} />
            </a>
            <a href="https://twitter.com/ionianems" target="_blank" rel="noopener noreferrer" style={{ color: 'white', marginLeft: '10px' }}>
              <FaTwitter size={20} />
            </a>
            <a href="https://instagram.com/ionianems" target="_blank" rel="noopener noreferrer" style={{ color: 'white', marginLeft: '10px' }}>
              <FaInstagram size={20} />
            </a>
            <a href="https://youtube.com/c/ionianems" target="_blank" rel="noopener noreferrer" style={{ color: 'white', marginLeft: '10px' }}>
              <FaYoutube size={20} />
            </a>
            <a href="https://linkedin.com/company/ionianems" target="_blank" rel="noopener noreferrer" style={{ color: 'white', marginLeft: '10px' }}>
              <FaLinkedin size={20} />
            </a>
          </p>
        </div>

        {/* Right Column (GT Systems Logo) */}
<div style={{ flex: '1 1 300px', textAlign: 'center' }}>
  <p style={{ marginBottom: '6px' }}>
    DESIGNED<br />& HOSTED:
  </p>
  <img
    src="https://gtsystems.gr/gtswh.gif"
    alt="GT Systems Logo"
    style={{ maxWidth: '200px', width: '100%' }}
  />
</div>
      </div>
    </footer>
  );
}
