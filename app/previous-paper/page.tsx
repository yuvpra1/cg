import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Previous Years Question Papers - CGSSB',
  description: 'Download previous year question papers for CGSSB, Vyapam, and CGPSC exams.',
};

export default function PreviousPapersPage() {
  return (
    <div className="container" style={{ paddingTop: '60px', paddingBottom: '60px', minHeight: '60vh' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', color: 'var(--color-primary)' }}>
        Previous Years Question Papers
      </h1>
      <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '40px' }}>
        Download official previous year question papers for various Chhattisgarh government exams.
      </p>

      <div className="card" style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', borderBottom: '2px solid var(--border-color)', paddingBottom: '10px' }}>
          Question Papers of Recruitment Exams 2024
        </h2>
        
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <li style={{ padding: '15px 0', borderBottom: '1px solid var(--border-color)' }}>
            <a href="https://vyapamcg.cgstate.gov.in/uploads/pdfs/0cd6b532-4cc9-42a0-8639-648565033932.pdf" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', fontWeight: '500', textDecoration: 'none' }}>
              📄 प्रयोगशाला सहायक भर्ती परीक्षा 2023 (KASL23)
            </a>
          </li>
          <li style={{ padding: '15px 0', borderBottom: '1px solid var(--border-color)' }}>
            <a href="https://vyapamcg.cgstate.gov.in/uploads/pdfs/b5efbb7a-e9ed-4cb0-a85a-47f6e01fe083.pdf" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', fontWeight: '500', textDecoration: 'none' }}>
              📄 आदिम जाति तथा अनुसूचित जाति विकास, नवा रायपुर, (छ.ग.) के अंतर्गत छात्रावास अधीक्षक श्रेणी “द” भर्ती परीक्षा (THS24)
            </a>
          </li>
          <li style={{ padding: '15px 0' }}>
            <div style={{ fontWeight: '500', color: 'var(--text-main)', marginBottom: '8px' }}>
              राज्य न्यायालयिक विज्ञान प्रयोगशाला, रायपुर (छ.ग.) के अंतर्गत प्रयोगशाला सहायक एवं प्रयोगशाला तकनीशियन भर्ती परीक्षा (FDLT24) :
            </div>
            <div style={{ display: 'flex', gap: '15px', paddingLeft: '15px', flexWrap: 'wrap' }}>
              <a href="https://vyapamcg.cgstate.gov.in/uploads/pdfs/0f6e7980-0788-4905-81e8-8294096e3d5c.pdf" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>
                📄 प्रयोगशाला सहायक
              </a>
              <a href="https://vyapamcg.cgstate.gov.in/uploads/pdfs/14c87b8b-4aa1-4897-a687-a24d97e2f004_47_202084-OK-ZMZS-SH-M_A.pdf" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>
                📄 Paper 2
              </a>
              <a href="https://vyapamcg.cgstate.gov.in/uploads/pdfs/86d44290-4388-4c29-b021-d706e4c2b078.pdf" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>
                📄 प्रयोगशाला तकनीशियन
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
