import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function NataliaPage() {
  return (
    <>
      <Head>
        <title>Villa NATALIA – Two-Bedroom Villa | AEOLINA Collection</title>
        <meta name="description" content="Villa NATALIA is a tranquil 150m² villa with two bedrooms, two bathrooms, private pool, and full kitchen — perfect for couples or families seeking nature and comfort in Corfu." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Header />

      <main style={{ fontFamily: 'Arial, sans-serif', paddingTop: '80px', paddingBottom: '40px' }}>
        <section style={{ textAlign: 'center', padding: '20px' }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '10px' }}>Villa NATALIA</h1>
          <p style={{ fontSize: '1rem', maxWidth: '750px', margin: '0 auto' }}>
            A charming 150 m² villa designed with comfort in mind. Villa NATALIA features two bedrooms, a private pool, fully equipped kitchen, and serene views of Corfu’s natural beauty.
          </p>
        </section>

        <section style={{ padding: '20px', textAlign: 'center' }}>
          <img src="/images/natalia/coveri.jpg" alt="Villa NATALIA" style={{ maxWidth: '100%', borderRadius: '10px' }} />
        </section>

        <section style={{ padding: '20px 30px' }}>
          <h2>At a Glance</h2>
          <ul style={{ lineHeight: '1.8', paddingLeft: '20px' }}>
            <li>🏡 150 m² detached private villa</li>
            <li>🛏️ 2 bedrooms – each with a large double bed</li>
            <li>🛁 2 private bathrooms with walk-in showers</li>
            <li>🌳 Garden, pool & mountain views</li>
            <li>🏊 Private swimming pool & terrace</li>
            <li>🍳 Full kitchen: oven, dishwasher, coffee machine, toaster, fridge</li>
            <li>📺 Flat-screen TV with streaming (e.g. Netflix)</li>
            <li>🧺 Washing machine, drying rack, high chair</li>
            <li>🪟 Soundproofing, private entrance, mosquito nets</li>
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
            <li>Air conditioning in all rooms</li>
            <li>Flat-screen TV with cable and streaming</li>
            <li>Soundproofing, private entrance</li>
            <li>Sofa, sofa bed, laptop safe</li>
            <li>Ironing facilities, heating</li>
            <li>Terrace, patio, outdoor furniture & dining area</li>
            <li>Secure environment with carbon monoxide detector</li>
          </ul>
        </section>
      </main>

      <Footer />
    </>
  );
}
