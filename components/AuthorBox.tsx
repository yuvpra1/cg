import React from 'react';
import Link from 'next/link';

interface AuthorBoxProps {
  lastUpdated?: string;
  source?: string;
}

export default function AuthorBox({ 
  lastUpdated = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
  source = 'Official Notification / Official Government Website' 
}: AuthorBoxProps) {
  return (
    <div style={{ 
      marginTop: '40px', 
      padding: '20px', 
      backgroundColor: '#f8fafc', 
      border: '1px solid var(--border-color)', 
      borderRadius: '8px',
      display: 'flex',
      flexDirection: 'column',
      gap: '15px'
    }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
        <div><strong>Last Updated:</strong> {lastUpdated}</div>
        <div><strong>Source:</strong> {source}</div>
      </div>
      
      <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '15px', display: 'flex', gap: '15px', alignItems: 'center' }}>
        <div style={{ 
          width: '50px', 
          height: '50px', 
          backgroundColor: 'var(--color-primary)', 
          color: 'white', 
          borderRadius: '50%', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          fontSize: '1.2rem',
          fontWeight: 'bold',
          flexShrink: 0
        }}>
          YP
        </div>
        <div>
          <h4 style={{ margin: '0 0 4px 0', fontSize: '1.05rem', color: 'var(--text-main)' }}>Written & Reviewed by Yuvraj Pratap Rajwade</h4>
          <p style={{ margin: '0 0 6px 0', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Independent Web Developer & Publisher</p>
          <Link href="/author" style={{ fontSize: '0.85rem', color: 'var(--color-primary)', textDecoration: 'none', fontWeight: '500' }}>
            [Read Author Profile]
          </Link>
        </div>
      </div>
    </div>
  );
}
