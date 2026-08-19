'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const pathname = usePathname();
  const router = useRouter();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Jobs', path: '/jobs' },
    { name: 'Current Affairs', path: '/current-affairs' },
    { name: 'CG GK', path: '/cg-gk' },
    { name: 'Tools', path: '/tools' },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsOpen(false);
    }
  };

  return (
    <header style={{ 
      backgroundColor: 'var(--bg-body)', 
      borderBottom: '1px solid var(--border-color)',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <div className="container" style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        height: '70px' 
      }}>
        {/* Logo */}
        <Link href="/" style={{ 
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          fontSize: '1.5rem', 
          fontWeight: '700', 
          color: 'var(--color-primary)',
          letterSpacing: '-0.5px'
        }}>
          <Image src="/logo.jpg" alt="CGSSB Logo" width={36} height={36} style={{ borderRadius: '6px' }} />
          CGSSB
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-only" style={{ gap: '24px', alignItems: 'center' }}>
          {navLinks.map((link) => (
            <Link key={link.name} href={link.path} style={{ fontWeight: '500', color: 'var(--text-main)' }}>
              {link.name}
            </Link>
          ))}
          
          <form onSubmit={handleSearch} style={{ display: 'flex', marginLeft: '10px' }}>
            <input 
              type="text" 
              placeholder="Search..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ 
                padding: '6px 12px', 
                borderRadius: '4px 0 0 4px', 
                border: '1px solid var(--border-color)',
                outline: 'none',
                width: '180px'
              }} 
            />
            <button type="submit" style={{ 
              padding: '6px 12px', 
              backgroundColor: 'var(--color-primary)', 
              color: 'white', 
              border: 'none', 
              borderRadius: '0 4px 4px 0',
              cursor: 'pointer'
            }}>
              🔍
            </button>
          </form>
        </nav>

        {/* Mobile Hamburger Button */}
        <button 
          className="mobile-only"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          style={{
            background: 'none',
            border: 'none',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '5px',
            width: '30px',
            height: '30px',
            cursor: 'pointer'
          }}
        >
          {/* Hamburger Bars */}
          <span style={{ display: 'block', width: '25px', height: '3px', backgroundColor: 'var(--text-main)', transition: 'all 0.3s', transform: isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></span>
          <span style={{ display: 'block', width: '25px', height: '3px', backgroundColor: 'var(--text-main)', opacity: isOpen ? 0 : 1 }}></span>
          <span style={{ display: 'block', width: '25px', height: '3px', backgroundColor: 'var(--text-main)', transition: 'all 0.3s', transform: isOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none' }}></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="mobile-menu-overlay">
          <form onSubmit={handleSearch} style={{ display: 'flex', marginBottom: '20px' }}>
            <input 
              type="text" 
              placeholder="Search..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ 
                flex: 1,
                padding: '10px 15px', 
                borderRadius: '6px 0 0 6px', 
                border: '1px solid var(--border-color)',
                outline: 'none',
                fontSize: '1rem'
              }} 
            />
            <button type="submit" style={{ 
              padding: '10px 15px', 
              backgroundColor: 'var(--color-primary)', 
              color: 'white', 
              border: 'none', 
              borderRadius: '0 6px 6px 0',
              cursor: 'pointer'
            }}>
              Search
            </button>
          </form>
          {navLinks.map((link) => (
            <Link key={link.name} href={link.path} className="mobile-menu-link">
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
