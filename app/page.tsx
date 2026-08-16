import { getAllJobs } from '@/lib/db';

async function getLatestJobs() {
  try {
    const jobs = await getAllJobs();
    return jobs.slice(0, 3);
  } catch (e) {
    return [];
  }
}

import HomeSeoContent from "@/components/HomeSeoContent";

export default async function Home() {
  const latestPostsList = [
    { title: "डॉ. तीजन बाई जीवन परिचय: पंडवानी, पुरस्कार, उपलब्धियां", url: "/cg-gk/teejan-bai-biography-pandavani" },
    { title: "छत्तीसगढ़ करेंट अफेयर्स - मई व जून 2026", url: "/current-affairs/cg-current-affairs-may-june-2026" },
    { title: "छत्तीसगढ़ करेंट अफेयर्स - जुलाई 2026", url: "/current-affairs/cg-current-affairs-july-2026" },
    { title: "CGSSB Food & Drug Administration Recruitment 2026: Lab Assistant & Sampling Assistant", url: "/jobs/cgssb-food-drug-administration-recruitment-2026" },
    { title: "CG SET 2026: Exam Date, Eligibility, Application Form, Syllabus", url: "/jobs/cg-set-2026" },
    { title: "CGSSB TEACHER RECRUITMENT 2026", url: "/jobs/cgssb-teacher-recruitment-2026" },
    { title: "CGSSB NSSK26 Recruitment 2026", url: "/jobs/cgssb-nssk26-recruitment-2026" }
  ];

  return (
    <div className="container" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
      
      {/* Hero Section - Search First */}
      <section style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>
          Chhattisgarh Staff Selection Board Notification
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '30px', maxWidth: '800px', margin: '0 auto 30px' }}>
          Find every job notification, syllabus, cutoff, and study material for Chhattisgarh exams in one place.
        </p>
        
        {/* Semantic Search Form */}
        <form className="search-form">
          <input 
            type="text" 
            className="search-input"
            placeholder="Search for Patwari Syllabus, CG Police, Age Calculator..." 
            aria-label="Search across the portal"
          />
          <button 
            type="submit"
            className="search-btn"
          >
            Search
          </button>
        </form>
      </section>

      {/* News Flash Marquee */}
      <div className="marquee-container" style={{ margin: '0 auto 50px', borderRadius: '4px', maxWidth: '800px' }}>
        <div className="marquee-content" style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
          <span>🔥 <a href="/cg-gk/teejan-bai-biography-pandavani" style={{ color: 'inherit', textDecoration: 'none' }}>NEW - डॉ. तीजन बाई जीवन परिचय: पंडवानी, पुरस्कार, उपलब्धियां</a></span>
          <span>🔥 <a href="/current-affairs/cg-current-affairs-july-2026" style={{ color: 'inherit', textDecoration: 'none' }}>LATEST - छत्तीसगढ़ करेंट अफेयर्स - जुलाई 2026</a></span>
          <span>🔥 <a href="/current-affairs/cg-current-affairs-may-june-2026" style={{ color: 'inherit', textDecoration: 'none' }}>UPDATE - छत्तीसगढ़ करेंट अफेयर्स - मई व जून 2026</a></span>
          <span>🔥 <a href="/jobs/cgssb-food-drug-administration-recruitment-2026" style={{ color: 'inherit', textDecoration: 'none' }}>JOB - CGSSB Food & Drug Administration Recruitment 2026</a></span>
          <span>🔥 <a href="/jobs/cg-set-2026" style={{ color: 'inherit', textDecoration: 'none' }}>EXAM - CG SET 2026: Date, Eligibility, Application Form, Syllabus</a></span>
          <span>🔥 <a href="/jobs/cgssb-teacher-recruitment-2026" style={{ color: 'inherit', textDecoration: 'none' }}>RECRUITMENT - CGSSB TEACHER RECRUITMENT 2026</a></span>
          <span>🔥 <a href="/jobs/cgssb-nssk26-recruitment-2026" style={{ color: 'inherit', textDecoration: 'none' }}>RECRUITMENT - CGSSB NSSK26 Recruitment 2026</a></span>
        </div>
      </div>

      {/* Latest Posts Section */}
      <section style={{ marginBottom: '60px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid var(--border-color)', paddingBottom: '10px', marginBottom: '24px' }}>
          <h2 style={{ fontSize: '1.8rem', margin: 0 }}>Latest Posts</h2>
        </div>
        
        <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {latestPostsList.map((post, idx) => (
              <li key={idx} style={{ 
                borderBottom: idx !== latestPostsList.length - 1 ? '1px solid var(--border-color)' : 'none',
                padding: '16px 24px',
                display: 'flex',
                gap: '20px',
                alignItems: 'center',
                transition: 'background-color 0.2s',
              }}>

                <a href={post.url} style={{ 
                  color: 'var(--text-main)', 
                  textDecoration: 'none',
                  fontSize: '1rem',
                  lineHeight: '1.5',
                  fontWeight: '500',
                  display: 'block',
                  flex: 1
                }}>
                  {post.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>





      {/* SEO Content */}
      <HomeSeoContent />

    </div>
  );
}
