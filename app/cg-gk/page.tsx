import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Chhattisgarh GK (सामान्य ज्ञान) | CGSSB',
  description: 'Chhattisgarh General Knowledge (CG GK) - History, Culture, Geography, and Personalities for CGPSC and CG Vyapam Exams.',
};

export default function CGGKCategory() {
  const articles = [
    {
      title: "छत्तीसगढ़ का प्राचीन इतिहास: प्रागैतिहासिक काल से महाभारत काल तक",
      description: "प्रागैतिहासिक काल, पाषाण काल, महापाषाण काल, वैदिक काल, रामायण काल और महाभारत काल के प्रमुख स्थल तथा ऐतिहासिक तथ्य। सिंघनपुर, कबरा पहाड़, चितवाडोंगरी।",
      url: "/cg-gk/chhattisgarh-prehistoric-period"
    },
    {
      title: "डॉ. तीजन बाई जीवन परिचय: पंडवानी, पुरस्कार, उपलब्धियां",
      description: "डॉ. तीजन बाई का जीवन परिचय पढ़ें। जानिए पंडवानी क्या है, कापालिक शैली, गुरु, Padma Shri, Padma Bhushan, Fukuoka Prize, Padma Vibhushan और उनके निधन से जुड़ी महत्वपूर्ण जानकारी।",
      url: "/cg-gk/teejan-bai-biography-pandavani",
      date: "16 August 2026"
    }
  ];

  return (
    <div className="container" style={{ paddingTop: '40px', paddingBottom: '60px' }}>
      <header style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 style={{ fontSize: '2.5rem', color: 'var(--color-primary)', marginBottom: '15px' }}>
          Chhattisgarh GK (सामान्य ज्ञान)
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
          CGPSC और CGSSB (Vyapam) परीक्षाओं के लिए छत्तीसगढ़ का सामान्य ज्ञान, इतिहास, संस्कृति और महान विभूतियों की जानकारी।
        </p>
      </header>

      <div className="responsive-grid">
        {articles.map((article, idx) => (
          <Link href={article.url} key={idx} style={{ textDecoration: 'none' }}>
            <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: 'bold', marginBottom: '10px' }}>
                {article.date}
              </div>
              <h2 style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '10px', lineHeight: '1.4' }}>
                {article.title}
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', flexGrow: 1 }}>
                {article.description}
              </p>
              <div style={{ marginTop: '15px', color: 'var(--color-primary)', fontWeight: '600', fontSize: '0.9rem' }}>
                Read Article &rarr;
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
