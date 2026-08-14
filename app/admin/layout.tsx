import Link from 'next/link';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#f8fafc' }}>
      <header style={{ backgroundColor: 'var(--color-primary)', color: 'white', padding: '15px 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ fontSize: '1.5rem', margin: 0 }}>
          <Link href="/admin" style={{ color: 'white', textDecoration: 'none' }}>Admin Dashboard</Link>
        </h1>
        <nav style={{ display: 'flex', gap: '20px' }}>
          <Link href="/" target="_blank" style={{ color: '#e2e8f0', textDecoration: 'none' }}>View Site</Link>
        </nav>
      </header>
      
      <main style={{ flex: 1, padding: '30px', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        {children}
      </main>
    </div>
  );
}
