// pages/index.js
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import VillaCard from '../components/VillaCard';
import HeroSlider from '../components/HeroSlider';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home() {
  return (
    <>
      <Head>
        <title>Villa AEOLINA – Tranquil Villas in Corfu</title>
        <meta name="description" content="Stay in the heart of nature at Villa AEOLINA, featuring three beautiful villas surrounded by olive trees in Episkopiana, Corfu." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Header />

      <main style={{ fontFamily: 'Arial, sans-serif', paddingTop: '80px', overflowX: 'hidden', backgroundColor: '#e6f2e6' }}>

  <HeroSlider />
        {/* Hero Section */}
        <section style={{
          backgroundImage: 'url("/images/common/olivegrove-hero.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '90vh',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '20px'
        }}>
          <h1 style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', fontWeight: 'bold' }}>Villa AEOLINA</h1>
          <p style={{ fontSize: 'clamp(1rem, 4vw, 1.2rem)', maxWidth: '90%' }}>
           Experience the perfect balance of refined luxury and warm family comfort in the heart of Corfu’s enchanting olive groves. At Villa AEOLINA, tranquility meets elegance across three beautifully appointed villas designed for unforgettable shared moments. Surrounded by centuries-old trees and bathed in Mediterranean light, each villa offers spacious living, private pools, and premium amenities to suit both large gatherings and intimate family retreats. Whether you're enjoying alfresco dinners under the stars, morning swims with the children, or simply unwinding in serene surroundings, Villa AEOLINA provides an exclusive escape where every generation feels at home — embraced by nature and pampered by comfort.


          </p>
          <a href="/villas" style={{
            marginTop: '20px',
            backgroundColor: '#fff',
            color: '#333',
            padding: '10px 20px',
            borderRadius: '5px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '1rem'
          }}>
            Explore Villas
          </a>
        </section>

        {/* AEOLINA Collection Description */}
<section style={{ padding: '40px 20px', backgroundColor: '#fff', textAlign: 'center' }}>
  <h2 style={{ fontSize: '1.6rem', marginBottom: '20px' }}>The AEOLINA Collection</h2>
  <p style={{ maxWidth: '900px', margin: '0 auto', fontSize: '1rem', lineHeight: '1.6' }}>
    The AEOLINA Collection presents three exclusive villas nestled in the quiet village of Episkopiana, thoughtfully designed to celebrate the beauty of Corfu’s olive-covered hills. Blending refined aesthetics with modern comforts, each villa offers a private oasis for families, couples, and groups seeking a serene Mediterranean escape.
    <br /><br />
    <strong>Villa ELEA</strong> is our premier 200m² residence, ideal for up to 8 guests. It features four spacious bedrooms, a private pool, and lush garden views — perfect for larger families or gatherings.
    <br />
    <strong>Villa OLIVA</strong> offers 150m² of cozy sophistication with two elegant bedrooms and an inviting outdoor area, tailored for a small family or friends looking to relax in nature.
    <br />
    <strong>Villa NATALIA</strong> mirrors OLIVA in design and comfort, with warm natural light and tranquil surroundings that make it especially welcoming for couples or families with children.
    <br /><br />
    Whether you're lounging by the pool, enjoying quality time with loved ones, or exploring the island’s treasures, the AEOLINA Collection ensures a luxurious yet authentic Corfu experience.
  </p>
</section>



        {/* Villas Preview */}
        <section style={{ padding: '40px 20px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.5rem' }}>Our Villas</h2>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '20px',
            marginTop: '20px'
          }}>
            <VillaCard
              name="Villa ELEA"
              image="/images/elea/cover.jpg"
              description="Our deluxe villa for up to 8 guests, perfect for families or small groups."
              link="/villas/elea"
            />
            <VillaCard
              name="Villa OLIVA"
              image="/images/oliva/cover.jpg"
              description="A cozy and stylish retreat for up to 4 guests."
              link="/villas/oliva"
            />
            <VillaCard
              name="Villa NATALIA"
              image="/images/natalia/cover.jpg"
              description="Charming, sunlit, and peaceful — ideal for couples or small families."
              link="/villas/natalia"
            />
          </div>
        </section>

        {/* Nearby Attractions */}
        <section style={{ padding: '40px 20px', backgroundColor: '#f9f9f9', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.5rem' }}>Nearby Attractions</h2>
          <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1rem' }}>
            Just a short drive from the pristine beaches of Chalikounas and Issos, and close to the vibrant villages of Moraitika and Benitses. Explore the best of Corfu from your peaceful base in Episkopiana.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
