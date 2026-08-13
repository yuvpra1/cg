import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ 
      backgroundColor: 'var(--bg-card)', 
      borderTop: '1px solid var(--border-color)',
      padding: '40px 0 20px',
      marginTop: '60px'
    }}>
      <div className="container" style={{ 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
      }}>
        <h3 style={{ marginBottom: '10px' }}>Chhattisgarh Career & Education Portal</h3>
        <p style={{ maxWidth: '600px', fontSize: '0.9rem' }}>
          One-stop destination for CGSSB, CGPSC, Vyapam notifications, syllabus, results, and study materials.
        </p>

        {/* Legal & Info Links */}
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap',
          justifyContent: 'center', 
          gap: '15px', 
          marginTop: '25px',
          paddingBottom: '25px',
          borderBottom: '1px solid var(--border-color)',
          width: '100%',
          maxWidth: '500px'
        }}>
          <Link href="/about-us" style={{ fontSize: '0.85rem', color: 'var(--text-main)' }}>About Us</Link>
          <Link href="/privacy-policy" style={{ fontSize: '0.85rem', color: 'var(--text-main)' }}>Privacy Policy</Link>
          <Link href="/terms" style={{ fontSize: '0.85rem', color: 'var(--text-main)' }}>Terms & Conditions</Link>
          <Link href="/disclaimer" style={{ fontSize: '0.85rem', color: 'var(--text-main)' }}>Disclaimer</Link>
        </div>

        <div style={{ marginTop: '20px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          © {new Date().getFullYear()} CGSSB Portal. Built for the students of Chhattisgarh. <br />
          Email us at: <a href="mailto:contact@cgssb.com.in" style={{ color: 'var(--color-primary)' }}>contact@cgssb.com.in</a>
        </div>
      </div>
    </footer>
  );
}
