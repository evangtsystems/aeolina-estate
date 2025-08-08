import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';

export default function EleaPage() {
  return (
    <>
      <Head>
        <title>Villa ELEA – Two-Bedroom Villa | AEOLINA Collection</title>
        <meta
          name="description"
          content="Villa ELEA is a tranquil 150 m² villa with two bedrooms, two bathrooms, private pool, and full kitchen — perfect for couples or families seeking nature and comfort in Corfu."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Header />

      <main style={{ fontFamily: 'Arial, sans-serif', paddingTop: '80px', paddingBottom: '40px' }}>
        <section style={{ textAlign: 'center', padding: '20px' }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '10px' }}>Villa ELEA</h1>
          <p style={{ fontSize: '1rem', maxWidth: '750px', margin: '0 auto' }}>
            Villa OLIVA is a 150 m² two-bedroom villa designed for comfort and peace. With a private pool, open terrace, and full kitchen, it’s the perfect choice for couples or families seeking a private escape in the Corfu countryside.
          </p>
        </section>

        <section style={{ padding: '20px', textAlign: 'center' }}>
          <img src="/images/elea/cover.jpg" alt="Villa OLIVA" style={{ maxWidth: '100%', borderRadius: '10px' }} />
        </section>

        <section style={{
  backgroundColor: '#f5f8f5',
  padding: '60px 30px',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '50px'
}}>
  {/* Text Block */}
  <div style={{
    flex: '1 1 480px',
    maxWidth: '600px',
    color: '#2e3b2e'
  }}>
    <h2 style={{
      fontFamily: "'Playfair Display', serif",
      fontSize: '2rem',
      marginBottom: '25px',
      color: '#3c503c'
    }}>
      At a Glance
    </h2>

    <ul style={{
      listStyle: 'none',
      paddingLeft: 0,
      fontSize: '1.05rem',
      lineHeight: '1.9',
      fontFamily: 'Helvetica, sans-serif'
    }}>
      {[
        '🏡 150 m² detached private villa',
        '🛏️ 2 elegant bedrooms with double beds',
        '🛁 2 bathrooms with walk-in showers',
        '🌳 Garden, pool & mountain views',
        '🏊 Private swimming pool & furnished terrace',
        '🍳 Fully equipped kitchen (oven, dishwasher, coffee machine)',
        '📺 Flat-screen TV with streaming',
        '🧺 Washing machine, drying rack, high chair',
        '🪟 Soundproofed, private entrance, mosquito nets',
        '🅿️ Free private parking',
        '🚭 Smoke-free environment'
      ].map((item, idx) => (
        <motion.li
          key={idx}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: idx * 0.3, duration: 0.5 }}
          style={{
            padding: '6px 0',
            borderBottom: idx < 10 ? '1px solid rgba(0,0,0,0.05)' : 'none'
          }}
        >
          {item}
        </motion.li>
      ))}
    </ul>
  </div>

  {/* Image Block */}
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.8 }}
    style={{
      flex: '1 1 400px',
      maxWidth: '500px',
      textAlign: 'center'
    }}
  >
    <div style={{
      width: '100%',
      aspectRatio: '4 / 3',
      overflow: 'hidden',
      borderRadius: '14px',
      boxShadow: '0 6px 24px rgba(0, 0, 0, 0.15)'
    }}>
      <img
        src="/images/oliva/681204038.jpg"
        alt="Villa OLIVA Interior"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      />
    </div>
  </motion.div>
</section>



        <section style={{
  backgroundColor: '#f5f8f5',
  padding: '60px 30px',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '50px'
}}>
  {/* Image on the left */}
 <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8 }}
  style={{
    flex: '1 1 400px',
    maxWidth: '500px',
    textAlign: 'center'
  }}
>
  <div style={{
    width: '100%',
    aspectRatio: '4 / 3',
    overflow: 'hidden',
    borderRadius: '14px',
    boxShadow: '0 6px 24px rgba(0, 0, 0, 0.15)'
  }}>
    <img
      src="/images/oliva/kitchen.jpg"
      alt="Villa OLIVA Kitchen"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }}
    />
  </div>
</motion.div>

  {/* Text on the right */}
  <div style={{
    flex: '1 1 480px',
    maxWidth: '600px',
    color: '#2e3b2e'
  }}>
    <h2 style={{
      fontFamily: "'Playfair Display', serif",
      fontSize: '2rem',
      marginBottom: '25px',
      color: '#3c503c'
    }}>
      In Your Private Kitchen
    </h2>

    <ul style={{
      listStyle: 'none',
      paddingLeft: 0,
      fontSize: '1.05rem',
      lineHeight: '1.9',
      fontFamily: 'Helvetica, sans-serif'
    }}>
      {[
        'Stovetop, Oven, Toaster',
        'Dishwasher, Microwave, Refrigerator',
        'Coffee machine, Electric kettle',
        'Kitchenware, Cleaning products, Dining table',
        'Washing machine & drying rack',
        "Children's high chair (available)"
      ].map((item, idx) => (
        <motion.li
          key={idx}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: idx * 0.3, duration: 0.5 }}
          style={{
            padding: '6px 0',
            borderBottom: idx < 5 ? '1px solid rgba(0,0,0,0.05)' : 'none'
          }}
        >
          {item}
        </motion.li>
      ))}
    </ul>
  </div>
</section>


        <section style={{
  backgroundColor: '#f5f8f5',
  padding: '60px 30px',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '50px'
}}>
  {/* Text on the left */}
  <div style={{
    flex: '1 1 480px',
    maxWidth: '600px',
    color: '#2e3b2e'
  }}>
    <h2 style={{
      fontFamily: "'Playfair Display', serif",
      fontSize: '2rem',
      marginBottom: '25px',
      color: '#3c503c'
    }}>
      In Your Private Bathrooms
    </h2>

    <ul style={{
      listStyle: 'none',
      paddingLeft: 0,
      fontSize: '1.05rem',
      lineHeight: '1.9',
      fontFamily: 'Helvetica, sans-serif'
    }}>
      {[
        'Walk-in showers & modern fixtures',
        'Free toiletries, Towels, Slippers',
        'Hairdryer & toilet paper'
      ].map((item, idx) => (
        <motion.li
          key={idx}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: idx * 0.3, duration: 0.5 }}
          style={{
            padding: '6px 0',
            borderBottom: idx < 2 ? '1px solid rgba(0,0,0,0.05)' : 'none'
          }}
        >
          {item}
        </motion.li>
      ))}
    </ul>
  </div>

  {/* Image on the right */}
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.8 }}
    style={{
      flex: '1 1 400px',
      maxWidth: '500px',
      textAlign: 'center'
    }}
  >
    <div style={{
      width: '100%',
      aspectRatio: '4 / 3',
      overflow: 'hidden',
      borderRadius: '14px',
      boxShadow: '0 6px 24px rgba(0, 0, 0, 0.15)'
    }}>
      <img
        src="/images/oliva/bathroom.jpg"
        alt="Villa OLIVA Bathroom"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      />
    </div>
  </motion.div>
</section>


        <section style={{
  backgroundColor: '#f5f8f5',
  padding: '60px 30px',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '50px'
}}>
  {/* Image on the left */}
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.8 }}
    style={{
      flex: '1 1 400px',
      maxWidth: '500px',
      textAlign: 'center'
    }}
  >
    <div style={{
      width: '100%',
      aspectRatio: '4 / 3',
      overflow: 'hidden',
      borderRadius: '14px',
      boxShadow: '0 6px 24px rgba(0, 0, 0, 0.15)'
    }}>
      <img
        src="/images/oliva/features.jpg"
        alt="Villa OLIVA Comfort & Features"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      />
    </div>
  </motion.div>

  {/* Text on the right */}
  <div style={{
    flex: '1 1 480px',
    maxWidth: '600px',
    color: '#2e3b2e'
  }}>
    <h2 style={{
      fontFamily: "'Playfair Display', serif",
      fontSize: '2rem',
      marginBottom: '25px',
      color: '#3c503c'
    }}>
      Comfort & Features
    </h2>

    <ul style={{
      listStyle: 'none',
      paddingLeft: 0,
      fontSize: '1.05rem',
      lineHeight: '1.9',
      fontFamily: 'Helvetica, sans-serif'
    }}>
      {[
        'Air conditioning in all rooms',
        'Flat-screen TV with cable and streaming',
        'Soundproofing, private entrance',
        'Sofa, sofa bed, laptop safe',
        'Ironing facilities, heating',
        'Terrace, patio, outdoor furniture & dining area',
        'Secure environment with carbon monoxide detector'
      ].map((item, idx) => (
        <motion.li
          key={idx}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: idx * 0.3, duration: 0.5 }}
          style={{
            padding: '6px 0',
            borderBottom: idx < 6 ? '1px solid rgba(0,0,0,0.05)' : 'none'
          }}
        >
          {item}
        </motion.li>
      ))}
    </ul>
  </div>
</section>

      </main>

      <Footer />
    </>
  );
}
