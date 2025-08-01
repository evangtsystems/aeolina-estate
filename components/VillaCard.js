import Image from 'next/image';

export default function VillaCard({ name, image, description, link }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '10px',
      width: '90%',
      maxWidth: '320px',
      overflow: 'hidden',
      backgroundColor: '#fff'
    }}>
      <a href={link} style={{ textDecoration: 'none', color: 'inherit' }}>
        <div style={{ height: '200px', position: 'relative' }}>
          <Image src={image} alt={name} layout="fill" objectFit="cover" />
        </div>
        <div style={{ padding: '15px' }}>
          <h3 style={{ fontSize: '1.2rem' }}>{name}</h3>
          <p style={{ fontSize: '0.95rem' }}>{description}</p>
        </div>
      </a>
    </div>
  );
}
