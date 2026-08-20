

import { getAllJobs } from '@/lib/db';

async function getJobs() {
  try {
    return await getAllJobs();
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return [];
  }
}

export default async function JobsList() {
  const dbJobs = await getJobs();
  
  // Explicitly inject our premium static posts so they always appear in the category
  const premiumJobs = [
    {
      id: 'fda-2026',
      slug: 'cgssb-food-drug-administration-recruitment-2026',
      title: 'CGSSB Food & Drug Administration Recruitment 2026: Lab Assistant & Sampling Assistant',
      department: 'खाद्य एवं औषधि प्रशासन',
      total_posts: 36,
      last_date: '2026-07-31T00:00:00Z'
    },
    {
      id: 'rules-2026',
      slug: 'cgssb-recruitment-rules-2026',
      title: 'CGSSB Recruitment Rules 2026: शैक्षणिक योग्यता Group 1-7',
      department: 'सामान्य प्रशासन विभाग',
      total_posts: 'N/A',
      last_date: '2026-12-31T00:00:00Z'
    }
  ];

  // Filter out from dbJobs in case they exist there to prevent duplicates, and hide old jobs
  const filteredDbJobs = dbJobs.filter((job: any) => 
    job.slug !== 'cgssb-food-drug-administration-recruitment-2026' && 
    job.slug !== 'cgssb-recruitment-rules-2026' &&
    job.slug !== 'cg-sample-assistant-2025' &&
    job.slug !== 'vyapam-patwari-2026' &&
    job.slug !== 'cg-police-constable-2026'
  );

  const jobs = [...premiumJobs, ...filteredDbJobs];

  return (
    <div className="container" style={{ paddingTop: '40px', paddingBottom: '60px' }}>
      <h1 style={{ fontSize: '2.2rem', marginBottom: '10px' }}>Latest Government Jobs</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '40px' }}>Explore the latest recruitment notifications, syllabus, and admit cards in Chhattisgarh.</p>
      
      <div className="responsive-grid">
        {jobs.length === 0 ? (
          <p>No jobs found.</p>
        ) : (
          jobs.map((job: any) => (
            <div key={job.id} className="card" style={{ borderLeft: '4px solid var(--color-primary)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ marginBottom: '10px' }}>
                <span style={{ fontSize: '0.8rem', background: 'var(--card-bg)', color: 'var(--color-primary)', padding: '4px 8px', borderRadius: '4px', fontWeight: '600' }}>
                  {job.department}
                </span>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '10px', lineHeight: '1.4' }}>
                <a href={`/jobs/${job.slug}`} style={{ color: 'var(--text-main)' }}>
                  {job.title}
                </a>
              </h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '20px' }}>
                <span>Posts: <strong>{job.total_posts}</strong></span>
                <span>Last Date: <strong>{new Date(job.last_date).toLocaleDateString('en-IN', { day: '2-digit', month: 'short' })}</strong></span>
              </div>
              
              <a 
                href={`/jobs/${job.slug}`} 
                style={{ 
                  marginTop: 'auto',
                  display: 'inline-block',
                  textAlign: 'center',
                  padding: '10px', 
                  backgroundColor: 'var(--color-secondary)',
                  color: 'var(--color-primary)',
                  fontWeight: '600',
                  borderRadius: '4px',
                  border: '1px solid var(--border-color)'
                }}
              >
                Read Details & Apply &rarr;
              </a>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
