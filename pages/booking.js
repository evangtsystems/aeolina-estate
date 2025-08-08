import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function BookingPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    villa: 'ELEA',
    arrival: '',
    departure: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const token = await grecaptcha.execute('6LcKpJ4rAAAAAIJIaCmwV6zA0lBFIzCcb597hJ6M', { action: 'submit' });

      const res = await fetch('/api/sendInquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, token }),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus('✅ Inquiry sent! We’ll contact you shortly.');
        setForm({
          name: '',
          email: '',
          villa: 'ELEA',
          arrival: '',
          departure: '',
          message: '',
        });
      } else {
        setStatus(data.error || '❌ Something went wrong.');
      }
    } catch (err) {
      setStatus('❌ Error sending form.');
    }
  };

  return (
    <>
      <Header />

      <div
        style={{
          minHeight: '100vh',
          background: 'linear-gradient(to bottom, #f4f4f9, #e0e0e0)',
          padding: '2rem',
          fontFamily: 'Georgia, serif',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            backgroundColor: '#fff',
            padding: '2rem',
            borderRadius: '16px',
            maxWidth: '600px',
            width: '100%',
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
          }}
        >
          <h1 style={{ textAlign: 'center', fontSize: '28px', marginBottom: '1rem' }}>
            Book Your Stay at <span style={{ color: '#1e88e5' }}>Aeolina Villas</span>
          </h1>
          <p style={{ textAlign: 'center', color: '#555', marginBottom: '2rem' }}>
            Fill in your details and we’ll get back to you with availability.
          </p>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <input
              style={inputStyle}
              name="name"
              placeholder="Full Name"
              required
              value={form.name}
              onChange={handleChange}
            />

            <input
              style={inputStyle}
              name="email"
              type="email"
              placeholder="Email Address"
              required
              value={form.email}
              onChange={handleChange}
            />

           <select style={inputStyle} name="villa" value={form.villa} onChange={handleChange}>
  <option value="ELEA">Villa ELEA — 2 Bedrooms (Deluxe)</option>
  <option value="OLIVA">Villa OLIVA — 2 Bedrooms</option>
  <option value="NATALIA">Villa NATALIA — 4 Bedrooms</option>
</select>


            <input
              style={inputStyle}
              type="date"
              name="arrival"
              required
              value={form.arrival}
              onChange={handleChange}
            />

            <input
              style={inputStyle}
              type="date"
              name="departure"
              required
              value={form.departure}
              onChange={handleChange}
            />

            <textarea
              style={{ ...inputStyle, resize: 'vertical', minHeight: '100px' }}
              name="message"
              placeholder="Additional notes or questions"
              value={form.message}
              onChange={handleChange}
            />

            <button
              type="submit"
              style={{
                background: 'linear-gradient(to right, #1e88e5, #42a5f5)',
                color: '#fff',
                padding: '14px',
                border: 'none',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'background 0.3s',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = 'linear-gradient(to right, #1565c0, #1e88e5)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'linear-gradient(to right, #1e88e5, #42a5f5)';
              }}
            >
              Send Inquiry
            </button>
          </form>

          <p style={{ marginTop: '1rem', textAlign: 'center', color: '#333' }}>{status}</p>

          {/* Invisible reCAPTCHA v3 */}
          <script src="https://www.google.com/recaptcha/api.js?render=6LcKpJ4rAAAAAIJIaCmwV6zA0lBFIzCcb597hJ6M"></script>
        </div>
      </div>

      <Footer />
    </>
  );
}

const inputStyle = {
  padding: '12px',
  fontSize: '16px',
  border: '1px solid #ccc',
  borderRadius: '8px',
  width: '100%',
  boxSizing: 'border-box',
  backgroundColor: '#fefefe',
};
