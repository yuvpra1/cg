import React from 'react';

export default function AuthorByline({ date }: { date: string }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '15px', marginBottom: '25px', padding: '15px', background: '#f8fafc', borderRadius: '10px', border: '1px solid var(--border-color)' }}>
      <div style={{ width: '45px', height: '45px', borderRadius: '50%', backgroundColor: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1.2rem', fontWeight: 'bold' }}>
        Y
      </div>
      <div>
        <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-main)', fontWeight: '600' }}>
          Written & Reviewed by <a href="/author/yuvraj-pratap-rajwade" style={{ color: 'var(--color-primary)', textDecoration: 'none' }} className="hover-underline">Yuvraj Pratap Rajwade</a>
        </p>
        <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          Independent Web Developer and Publisher • Last Updated: {date}
        </p>
      </div>
    </div>
  );
}
