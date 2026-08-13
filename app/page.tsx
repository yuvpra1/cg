async function getLatestJobs() {
  const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000';
  try {
    const res = await fetch(`${baseUrl}/api/jobs`, { cache: 'no-store' });
    if (!res.ok) return [];
    const data = await res.json();
    return data.jobs?.slice(0, 3) || []; // only top 3
  } catch (e) {
    return [];
  }
}

export default async function Home() {
  const latestJobs = await getLatestJobs();

  const categories = [
    { title: "CGSSB (Vyapam)", path: "/exams/cgssb", desc: "Latest updates, syllabus, and results" },
    { title: "CGPSC", path: "/exams/cgpsc", desc: "State Services, Forest, AE exams" },
    { title: "Departments", path: "/departments", desc: "Police, Forest, Health, Education" },
    { title: "Chhattisgarh GK", path: "/gk", desc: "History, Geography, Culture, Tribes" },
    { title: "Previous Papers", path: "/previous-paper", desc: "Download PDF of previous exams" },
    { title: "Student Tools", path: "/tools", desc: "Age Calculator, typing test, etc." },
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
        <div className="marquee-content">
          🚀 NEW: CG Police Constable Physical Test Dates Announced! &nbsp; | &nbsp; 🎯 Vyapam Patwari Notification Expected Next Month &nbsp; | &nbsp; 📚 Download Previous Year Papers for CGPSC State Services
        </div>
      </div>

      {/* Latest Jobs Section */}
      <section style={{ marginBottom: '60px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid var(--border-color)', paddingBottom: '10px', marginBottom: '24px' }}>
          <h2 style={{ fontSize: '1.8rem', margin: 0 }}>Latest Govt Jobs</h2>
          <a href="/jobs" style={{ color: 'var(--color-primary)', fontWeight: '600' }}>View All →</a>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          
          {latestJobs.length > 0 ? latestJobs.map((job: any) => (
            <div key={job.id} className="card" style={{ borderLeft: '4px solid var(--color-primary)', display: 'flex', flexDirection: 'column' }}>
              <div>
                <span style={{ fontSize: '0.8rem', backgroundColor: '#e0e7ff', color: 'var(--color-primary)', padding: '4px 8px', borderRadius: '4px', fontWeight: '600' }}>{job.department}</span>
              </div>
              <h3 style={{ marginTop: '10px', fontSize: '1.2rem', lineHeight: '1.4' }}>{job.title}</h3>
              <p style={{ fontSize: '0.9rem', marginBottom: '15px' }}>Total Posts: {job.total_posts} | Last Date: {new Date(job.last_date).toLocaleDateString('en-IN', { day: '2-digit', month: 'short' })}</p>
              <a href={`/jobs/${job.slug}`} style={{ marginTop: 'auto', color: 'var(--color-primary)', fontWeight: '600', fontSize: '0.95rem' }}>Read Details & Apply</a>
            </div>
          )) : (
            <p>No new jobs available right now.</p>
          )}

        </div>
      </section>

      {/* Grid Categories Section */}
      <section>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '24px', borderBottom: '2px solid var(--border-color)', paddingBottom: '10px' }}>
          Explore by Category
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '24px' 
        }}>
          {categories.map((cat, idx) => (
            <a href={cat.path} key={idx} className="card" style={{ display: 'block' }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary)' }}>{cat.title}</h3>
              <p style={{ margin: 0 }}>{cat.desc}</p>
            </a>
          ))}
        </div>
      </section>

    </div>
  );
}
