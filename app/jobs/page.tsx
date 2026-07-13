export const runtime = 'edge';

async function getJobs() {
  const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000';
  const res = await fetch(`${baseUrl}/api/jobs`, { cache: 'no-store' });
  if (!res.ok) return [];
  const data = await res.json();
  return data.jobs || [];
}

export default async function JobsList() {
  const jobs = await getJobs();

  return (
    <div className="container" style={{ paddingTop: '40px', paddingBottom: '60px' }}>
      <h1 style={{ fontSize: '2.2rem', marginBottom: '10px' }}>Latest Government Jobs</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '40px' }}>Explore the latest recruitment notifications, syllabus, and admit cards in Chhattisgarh.</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '25px' }}>
        {jobs.length === 0 ? (
          <p>No jobs found.</p>
        ) : (
          jobs.map((job: any) => (
            <div key={job.id} className="card" style={{ borderLeft: '4px solid var(--color-primary)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ marginBottom: '10px' }}>
                <span style={{ fontSize: '0.8rem', backgroundColor: '#e0e7ff', color: 'var(--color-primary)', padding: '4px 8px', borderRadius: '4px', fontWeight: '600' }}>
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
