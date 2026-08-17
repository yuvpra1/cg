import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Current Affairs | CGSSB Portal',
  description: 'Latest Chhattisgarh Current Affairs for CGPSC, Vyapam, and other state exams.',
};

export default function CurrentAffairsCategory() {
  const articles = [
    {
      title: "छत्तीसगढ़ करेंट अफेयर्स 2026: जून-जुलाई के महत्वपूर्ण प्रश्न और MCQ",
      description: "CGPSC, CGSSB (Vyapam), और छत्तीसगढ़ की अन्य सभी प्रतियोगी परीक्षाओं के लिए जून और जुलाई 2026 के महत्वपूर्ण करेंट अफेयर्स का संकलन, साथ ही MCQ और Quick Revision।",
      url: "/current-affairs/chhattisgarh-current-affairs-june-july-2026",
      date: "17 August 2026"
    },
    {
      title: "छत्तीसगढ़ करेंट अफेयर्स - जुलाई 2026 (CG Current Affairs)",
      description: "CGPSC, CGSSB (Vyapam), और छत्तीसगढ़ की अन्य सभी प्रतियोगी परीक्षाओं के लिए जुलाई 2026 के सबसे महत्वपूर्ण करंट अफेयर्स का संकलन।",
      url: "/current-affairs/cg-current-affairs-july-2026",
      date: "16 August 2026"
    },
    {
      title: "छत्तीसगढ़ करेंट अफेयर्स - मई व जून 2026 (CG Current Affairs)",
      description: "CGPSC और CGSSB (Vyapam) के लिए मई-जून 2026 के महत्वपूर्ण करेंट अफेयर्स का सार, पुरातात्विक खोजें, योजनाएँ और खेल।",
      url: "/current-affairs/cg-current-affairs-may-june-2026",
      date: "16 August 2026"
    }
  ];

  return (
    <div className="container" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
      
      <header style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>Current Affairs</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>
          Daily and Monthly Current Affairs updates for Chhattisgarh Competitive Exams.
        </p>
      </header>

      <div style={{ display: 'grid', gap: '20px', maxWidth: '800px', margin: '0 auto' }}>
        {articles.map((article, idx) => (
          <Link href={article.url} key={idx} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="card" style={{ 
              padding: '25px', 
              transition: 'transform 0.2s',
              cursor: 'pointer'
            }}>
              <h2 style={{ fontSize: '1.4rem', color: 'var(--color-primary)', marginBottom: '10px' }}>
                {article.title}
              </h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '15px', lineHeight: '1.5' }}>
                {article.description}
              </p>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 'bold' }}>
                Published on {article.date}
              </span>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}
