'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Breadcrumbs() {
  const pathname = usePathname();

  // Don't show breadcrumbs on home page
  if (pathname === '/') return null;

  // Split path into segments and remove empty strings
  const segments = pathname.split('/').filter(Boolean);

  // Helper to format segment names (e.g., 'current-affairs' -> 'Current Affairs')
  const formatName = (str: string) => {
    // Some known acronyms or special cases
    if (str.toLowerCase() === 'cg-gk') return 'CG GK';
    if (str.toLowerCase() === 'previous-paper') return 'Previous Papers';
    
    // Normal formatting
    return str
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div className="container" style={{ paddingTop: '30px', paddingBottom: '0' }}>
      <nav aria-label="breadcrumb">
        <ol style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          listStyle: 'none', 
          padding: '12px 16px', 
          margin: 0,
          fontSize: '0.9rem',
          backgroundColor: 'var(--card-bg-hover)',
          borderRadius: '8px',
          border: '1px solid var(--border-color)',
          color: 'var(--text-muted)'
        }}>
          <li style={{ display: 'flex', alignItems: 'center' }}>
            <Link href="/" style={{ color: 'var(--color-primary)', textDecoration: 'none', fontWeight: '500' }}>
              🏠 Home
            </Link>
          </li>
          
          {segments.map((segment, index) => {
            const href = `/${segments.slice(0, index + 1).join('/')}`;
            const isLast = index === segments.length - 1;
            let name = formatName(segment);

            // Optional: Truncate very long names for mobile
            if (isLast && name.length > 40) {
              name = name.substring(0, 40) + '...';
            }

            return (
              <li key={href} style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ margin: '0 10px', color: 'var(--border-color)' }}>❯</span>
                {isLast ? (
                  <span style={{ color: 'var(--text-main)', fontWeight: '600' }} aria-current="page">
                    {name}
                  </span>
                ) : (
                  <Link href={href} style={{ color: 'var(--color-primary)', textDecoration: 'none', fontWeight: '500' }}>
                    {name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
}
