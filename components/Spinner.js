export default function Spinner() {
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    }}>
      <div style={{
        width: '48px',
        height: '48px',
        border: '6px solid #ddd',
        borderTop: '6px solid #0077b6',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
      }} />
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
