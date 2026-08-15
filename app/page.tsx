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
        <form style={{ display: 'flex', justifyContent: 'center', maxWidth: '600px', margin: '0 auto' }}>
          <input 
            type="text" 
            placeholder="Search for Patwari Syllabus, CG Police, Age Calculator..." 
            aria-label="Search across the portal"
            style={{
              flex: 1,
              padding: '16px 24px',
              fontSize: '1rem',
              border: '2px solid var(--color-primary)',
              borderRadius: 'var(--border-radius) 0 0 var(--border-radius)',
              outline: 'none'
            }}
          />
          <button 
            type="submit"
            style={{
              padding: '0 30px',
              backgroundColor: 'var(--color-primary)',
              color: 'var(--text-light)',
              border: 'none',
              borderRadius: '0 var(--border-radius) var(--border-radius) 0',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            Search
          </button>
        </form>
      </section>

      {/* News Flash Marquee */}
      <div className="marquee-container" style={{ margin: '0 auto 50px', borderRadius: '4px', maxWidth: '800px' }}>
        <div className="marquee-content" style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
          <span>🔥 <a href="https://vyapamprofile.cgstate.gov.in/Online" target="_blank" rel="noopener noreferrer" style={{ color: '#ffeb3b', textDecoration: 'none' }}>Admit Card - जल संसाधन विभाग, अनुरेखक (सिविल) (WRDT26) के प्रवेश पत्र के सम्बंध में विज्ञप्ति</a></span>
          <span>🔥 <a href="https://vyapamcg.cgstate.gov.in/Post?PostID=RESULT" target="_blank" rel="noopener noreferrer" style={{ color: '#ffeb3b', textDecoration: 'none' }}>RESULT - प्री.बी.एड. (Pre. B.Ed.26) प्रवेश परीक्षा - 2026</a></span>
          <span>🔥 <a href="https://vyapamcg.cgstate.gov.in/Post?PostID=PSLA26ONLINE" target="_blank" rel="noopener noreferrer" style={{ color: '#ffeb3b', textDecoration: 'none' }}>ONLINE APPLICATION - नमूना सहायक /लैब असिस्टेंट (औषधि) / लैब असिस्टेंट (खाद्य) पदों की भर्ती परीक्षा (FWLN26)</a></span>
          <span>🔥 <a href="https://vyapamcg.cgstate.gov.in/Post?PostID=WRDT26ONLINE" target="_blank" rel="noopener noreferrer" style={{ color: '#ffeb3b', textDecoration: 'none' }}>ONLINE APPLICATION- सहायक शिक्षक पदों हेतु लिखित भर्ती परीक्षा (LSAT26)</a></span>
          <span>🔥 <a href="https://vyapamcg.cgstate.gov.in/Post?PostID=MLGI25APPLICATION" target="_blank" rel="noopener noreferrer" style={{ color: '#ffeb3b', textDecoration: 'none' }}>ONLINE APPLICATION - छत्तीसगढ़ राज्य पात्रता परीक्षा (CG-SET26)</a></span>
          <span>🔥 <a href="https://vyapamcg.cgstate.gov.in/Post?PostID=RESULT" target="_blank" rel="noopener noreferrer" style={{ color: '#ffeb3b', textDecoration: 'none' }}>RESULT -B.Sc. Nursing (BSCN26) Entrance Examination-2026</a></span>
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

                <a href={post.url} target="_blank" rel="noopener noreferrer" style={{ 
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

      {/* Important Rules & Circulars */}
      <section style={{ marginBottom: '60px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ color: 'var(--color-primary)' }}>📌</span> महत्वपूर्ण नियम व अधिसूचनाएँ (Important Rules)
          </h2>
        </div>
        
        <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ padding: '16px 24px', borderBottom: '1px solid var(--border-color)', display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '1.2rem', marginTop: '2px' }}>📜</span>
              <a href="https://gad.cg.gov.in/statecirculars/Criculars/Scan-file-2000-2002/year2026/202600209_001.pdf" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: '500', lineHeight: '1.5' }} className="hover-primary">
                अधिसूचना 19.06.2026 - सीधी भर्ती के माध्यम से भरे जाने वाले तृतीय एवं चतुर्थ श्रेणी के पदों की न्यूनतम शैक्षणिक योग्यता का निर्धारण ।
              </a>
            </li>
            <li style={{ padding: '16px 24px', borderBottom: '1px solid var(--border-color)', display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '1.2rem', marginTop: '2px' }}>📜</span>
              <a href="https://gad.cg.gov.in/statecirculars/Criculars/Scan-file-2000-2002/year2026/202600291_001.pdf" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: '500', lineHeight: '1.5' }} className="hover-primary">
                अधिसूचना 27.07.2026 - सीधी भर्ती के माध्यम से भरे जाने वाले तृतीय एवं चतुर्थ श्रेणी के पदों की न्यूनतम शैक्षणिक योग्यता निर्धारण हेतु जारी अधिसूचना दिनांक 19.06.2026 में संशोधन विषयक ।
              </a>
            </li>
            <li style={{ padding: '16px 24px', display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '1.2rem', marginTop: '2px' }}>📜</span>
              <a href="https://vyapamcg.cgstate.gov.in/uploads/pdfs/146e4756-b636-4568-8aee-3d3dd6107c28.pdf" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: '500', lineHeight: '1.5' }} className="hover-primary">
                अधिसूचना 25.02.2026 - समाज कल्याण विभाग, छत्तीसगढ़ शासन दिव्यांगजन अधिकार अधिनियम, 2016 के अंतर्गत बेंचमार्क दिव्यांगजनों हेतु पदों का चिन्हांकन
              </a>
            </li>
          </ul>
        </div>
      </section>



      {/* SEO Content */}
      <HomeSeoContent />

    </div>
  );
}
