import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Exam Syllabus | CGSSB Portal',
  description: 'Latest Syllabus for CGPSC, Vyapam, Teacher Recruitment and other Chhattisgarh state exams.',
};

export default function SyllabusCategory() {
  const articles = [
    {
      title: "शिक्षक हिंदी सिलेबस 2026: पूरा पाठ्यक्रम, परीक्षा पैटर्न, विषयवार Topics और तैयारी की रणनीति",
      description: "शिक्षक हिंदी सिलेबस 2026 की पूरी जानकारी: हिंदी साहित्य का इतिहास, गद्य, पद्य, व्याकरण, भाषा शिक्षण, बाल विकास और GK के सभी महत्वपूर्ण topics और रणनीति।",
      url: "/syllabus/cg-teacher-hindi-syllabus-2026",
      date: "22 August 2026"
    },
    {
      title: "शिक्षक संस्कृत सिलेबस 2026: पूरा पाठ्यक्रम, परीक्षा पैटर्न, विषयवार Topics और तैयारी की रणनीति",
      description: "शिक्षक संस्कृत सिलेबस 2026 की पूरी जानकारी: व्याकरण, वाक्य रचना, काव्यांश, गद्यांश, बाल विकास और GK के सभी महत्वपूर्ण topics और रणनीति।",
      url: "/syllabus/cg-teacher-sanskrit-syllabus-2026",
      date: "22 August 2026"
    },
    {
      title: "शिक्षक सामाजिक विज्ञान सिलेबस 2026: पूरा पाठ्यक्रम, परीक्षा पैटर्न, विषयवार Topics और तैयारी की रणनीति",
      description: "शिक्षक सामाजिक विज्ञान सिलेबस 2026 की पूरी जानकारी: भूगोल, इतिहास, नागरिक शास्त्र, अर्थशास्त्र, बाल विकास और GK के सभी महत्वपूर्ण topics और रणनीति।",
      url: "/syllabus/cg-teacher-social-science-syllabus-2026",
      date: "22 August 2026"
    },
    {
      title: "शिक्षक भर्ती कृषि सिलेबस 2026: पूरा पाठ्यक्रम, परीक्षा पैटर्न, विषयवार Topics और तैयारी की रणनीति",
      description: "शिक्षक भर्ती कृषि सिलेबस 2026 की पूरी जानकारी: Agriculture, बाल विकास, हिंदी, English, Computer और GK के सभी महत्वपूर्ण topics और तैयारी की रणनीति।",
      url: "/syllabus/cg-teacher-agriculture-syllabus-2026",
      date: "20 August 2026"
    }
  ];

  return (
    <div className="container" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
      
      <header style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>Exam Syllabus</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>
          Detailed Syllabus and Exam Pattern for Chhattisgarh Competitive Exams.
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
