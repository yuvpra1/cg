import React from 'react';

export default function ArticleFooter({ date, sourceText, sourceLink }: { date: string, sourceText: string, sourceLink?: string }) {
  return (
    <div style={{ marginTop: '40px', padding: '25px', background: '#f8fafc', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
      <h3 style={{ fontSize: '1.2rem', marginBottom: '15px', color: 'var(--text-main)' }}>📋 Article Information</h3>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.95rem', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <li><strong>Written & Reviewed by:</strong> <a href="/author/yuvraj-pratap-rajwade" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>Yuvraj Pratap Rajwade</a></li>
        <li><strong>Last Updated:</strong> {date}</li>
        <li>
          <strong>Source:</strong> {sourceLink ? <a href={sourceLink} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>{sourceText}</a> : sourceText}
        </li>
        <li><strong>Correction:</strong> जानकारी में कोई गलती मिले? <a href="mailto:contact@cgssb.com.in" style={{ color: '#d97706', textDecoration: 'none', fontWeight: '600' }}>[Report a Correction]</a></li>
      </ul>
    </div>
  );
}
