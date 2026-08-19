import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
      textAlign: 'center',
      padding: '40px 20px',
    }}>
      <h1 style={{
        fontSize: '6rem',
        fontWeight: 'bold',
        color: 'var(--color-primary)',
        margin: '0',
        lineHeight: '1'
      }}>404</h1>
      <h2 style={{
        fontSize: '2rem',
        color: 'var(--text-main)',
        margin: '20px 0 10px'
      }}>Oops! Page Not Found</h2>
      <p style={{
        fontSize: '1.1rem',
        color: 'var(--text-muted)',
        maxWidth: '500px',
        margin: '0 auto 30px'
      }}>
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      
      <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link href="/" style={{
          padding: '12px 24px',
          backgroundColor: 'var(--color-primary)',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '8px',
          fontWeight: '600',
          transition: 'all 0.2s'
        }}>
          Go to Homepage
        </Link>
        <Link href="/search" style={{
          padding: '12px 24px',
          backgroundColor: 'var(--card-bg-hover)',
          color: 'var(--text-main)',
          textDecoration: 'none',
          borderRadius: '8px',
          fontWeight: '600',
          border: '1px solid var(--border-color)',
          transition: 'all 0.2s'
        }}>
          Search Website
        </Link>
      </div>
    </div>
  );
}
