import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';

export default function NataliaPage() {
  return (
    <>
      <Head>
        <title>Villa NATALIA – Four-Bedroom Villa | AEOLINA Collection</title>
        <meta
          name="description"
          content="Villa NATALIA is a spacious 150m² villa with four bedrooms, two bathrooms, private pool, and full kitchen — perfect for larger families or groups seeking nature and comfort in Corfu."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Header />

      <main style={{ fontFamily: 'Arial, sans-serif', paddingTop: '80px', paddingBottom: '40px' }}>
        {/* Cover Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', padding: '20px' }}
        >
          <h1 style={{ fontSize: '2rem', marginBottom: '10px' }}>Villa NATALIA</h1>
          <p style={{ fontSize: '1rem', maxWidth: '750px', margin: '0 auto' }}>
            A spacious 150 m² villa perfect for larger groups or families. Villa NATALIA features four bedrooms, a private pool,
            full kitchen, and serene views of Corfu’s natural beauty.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '30px' }}
        >
          <img
            src="/images/natalia/coveri.jpg"
            alt="Villa NATALIA"
            style={{ maxWidth: '100%', borderRadius: '10px' }}
          />
        </motion.section>

        {/* Detail Sections */}
        {[
          {
            title: 'At a Glance',
            img: '/images/NATALIA/glance.jpg',
            points: [
              '🏡 150 m² detached private villa',
              '🛏️ 4 bedrooms – ideal for larger groups',
              '🛁 2 private bathrooms with walk-in showers',
              '🌳 Garden, pool & mountain views',
              '🏊 Private swimming pool & terrace',
              '🍳 Full kitchen: oven, dishwasher, coffee machine, toaster, fridge',
              '📺 Flat-screen TV with streaming (e.g. Netflix)',
              '🧺 Washing machine, drying rack, high chair',
              '🪟 Soundproofing, private entrance, mosquito nets',
              '🅿️ Free private parking',
              '🚭 Non-smoking throughout',
            ],
          },
          {
            title: 'In Your Private Kitchen',
            img: '/images/NATALIA/kitchen.jpg',
            points: [
              'Stovetop, Oven, Toaster',
              'Dishwasher, Microwave, Refrigerator',
              'Coffee machine, Electric kettle',
              'Kitchenware, Cleaning products, Dining table',
              'Washing machine & drying rack',
              "Children's high chair (available)",
            ],
          },
          {
            title: 'In Your Private Bathrooms',
            img: '/images/NATALIA/bathroom.jpg',
            points: [
              'Walk-in showers & modern fixtures',
              'Free toiletries, Towels, Slippers',
              'Hairdryer & toilet paper',
            ],
          },
          {
            title: 'Comfort & Features',
            img: '/images/NATALIA/comfort.jpg',
            points: [
              'Air conditioning in all rooms',
              'Flat-screen TV with cable and streaming',
              'Soundproofing, private entrance',
              'Sofa, sofa bed, laptop safe',
              'Ironing facilities, heating',
              'Terrace, patio, outdoor furniture & dining area',
              'Secure environment with carbon monoxide detector',
            ],
          },
        ].map((section, i) => (
          <motion.section
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.2 }}
            viewport={{ once: true }}
            style={{
              display: 'flex',
              flexDirection: i % 2 === 0 ? 'row' : 'row-reverse',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap',
              padding: '40px 20px',
              gap: '20px',
            }}
          >
            <div style={{ flex: '1 1 400px', maxWidth: '500px' }}>
              <img
                src={section.img}
                alt={section.title}
                style={{ width: '100%', borderRadius: '10px' }}
              />
            </div>
            <div style={{ flex: '1 1 400px', maxWidth: '500px' }}>
              <h2>{section.title}</h2>
              <ul style={{ lineHeight: '1.8', paddingLeft: '20px' }}>
                {section.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.section>
        ))}
      </main>

      <Footer />
    </>
  );
}
