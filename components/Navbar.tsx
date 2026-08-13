'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Jobs', path: '/jobs' },
    { name: 'Exams', path: '/exams' },
    { name: 'Syllabus', path: '/syllabus' },
    { name: 'Tools', path: '/tools' },
  ];

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
          fontSize: '1.5rem', 
          fontWeight: '700', 
          color: 'var(--color-primary)',
          letterSpacing: '-0.5px'
        }}>
          CGSSB
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-only" style={{ gap: '24px' }}>
          {navLinks.map((link) => (
            <Link key={link.name} href={link.path} style={{ fontWeight: '500', color: 'var(--text-main)' }}>
              {link.name}
            </Link>
          ))}
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
