import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function EleaPage() {
  return (
    <>
      <Head>
        <title>Villa ELEA – Deluxe Villa | AEOLINA Collection</title>
        <meta name="description" content="Villa ELEA is a luxurious 200m² 4-bedroom, 4-bathroom villa with private pool, garden views, full kitchen, and premium amenities in Episkopiana, Corfu." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Header />

      <main style={{ fontFamily: 'Arial, sans-serif', paddingTop: '80px', paddingBottom: '40px' }}>
        <section style={{ textAlign: 'center', padding: '20px' }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '10px' }}>Villa ELEA</h1>
          <p style={{ fontSize: '1rem', maxWidth: '750px', margin: '0 auto' }}>
            A 200 m² deluxe villa designed for comfort and style, Villa ELEA features a private pool, stunning garden and mountain views, four luxurious bedrooms, four bathrooms, and a fully equipped kitchen — perfect for families or groups up to 8 guests.
          </p>
        </section>

        <section style={{ padding: '20px', textAlign: 'center' }}>
          <img src="/images/elea/cover.jpg" alt="Villa ELEA" style={{ maxWidth: '100%', borderRadius: '10px' }} />
        </section>

        <section style={{ padding: '20px 30px' }}>
          <h2>At a Glance</h2>
          <ul style={{ lineHeight: '1.8', paddingLeft: '20px' }}>
            <li>🏡 200 m² detached private villa</li>
            <li>🛏️ 4 bedrooms – each with a large double bed</li>
            <li>🛁 4 private bathrooms with walk-in showers</li>
            <li>🌳 Garden, mountain & pool views</li>
            <li>🏊 Private swimming pool & terrace</li>
            <li>🍳 Full kitchen: oven, dishwasher, coffee machine, toaster, fridge</li>
            <li>📺 Flat-screen TV with streaming (e.g. Netflix)</li>
            <li>🧺 Washing machine, ironing facilities, cleaning supplies</li>
            <li>🪟 Soundproof walls, air conditioning, mosquito nets</li>
            <li>🅿️ Free private parking</li>
            <li>🚭 Non-smoking throughout</li>
          </ul>
        </section>

        <section style={{ padding: '20px 30px' }}>
          <h2>In Your Private Kitchen</h2>
          <ul style={{ lineHeight: '1.8', paddingLeft: '20px' }}>
            <li>Stovetop, Oven, Toaster</li>
            <li>Dishwasher, Microwave, Refrigerator</li>
            <li>Coffee machine, Electric kettle</li>
            <li>Kitchenware, Cleaning products, Dining table</li>
            <li>Washing machine & drying rack</li>
            <li>Children's high chair (available)</li>
          </ul>
        </section>

        <section style={{ padding: '20px 30px' }}>
          <h2>In Your Private Bathrooms</h2>
          <ul style={{ lineHeight: '1.8', paddingLeft: '20px' }}>
            <li>Walk-in showers & modern fixtures</li>
            <li>Free toiletries, Towels, Slippers</li>
            <li>Hairdryer & toilet paper</li>
          </ul>
        </section>

        <section style={{ padding: '20px 30px' }}>
          <h2>Comfort & Features</h2>
          <ul style={{ lineHeight: '1.8', paddingLeft: '20px' }}>
            <li>Air conditioning in every room</li>
            <li>Soundproofing & private entrance</li>
            <li>Flat-screen TV with cable and streaming</li>
            <li>Ironing facilities, laptop safe</li>
            <li>Outdoor furniture & dining area on patio and balcony</li>
            <li>Secure environment with carbon monoxide detector</li>
          </ul>
        </section>
      </main>

      <Footer />
    </>
  );
}
