import { Metadata } from 'next';
import JobTabs from '@/components/JobTabs';

export const runtime = 'edge';

import { headers } from 'next/headers';

async function getJob(slug: string) {
  try {
    const headersList = await headers();
    const host = headersList.get('host') || 'localhost:3000';
    const protocol = host.includes('localhost') ? 'http' : 'https';
    const baseUrl = `${protocol}://${host}`;
    
    const res = await fetch(`${baseUrl}/api/jobs/${slug}`, { cache: 'no-store' });
    if (!res.ok) return null;
    const data = await res.json();
    return data.job;
  } catch (error) {
    console.error("Error fetching job details:", error);
    return null;
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const job = await getJob(slug);
  if (!job) {
    return { title: 'Job Not Found - CGSSB' };
  }
  return {
    title: job.meta_title || `${job.title} | Eligibility, Salary, Pattern`,
    description: job.meta_description || `Latest update on ${job.title} by ${job.department}. Check eligibility, age limit, syllabus and apply.`,
  };
}

export default async function JobPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const job = await getJob(slug);

  if (!job) {
    return (
      <div className="container" style={{ padding: '100px 20px', textAlign: 'center' }}>
        <h1>Job Not Found</h1>
        <p>The job you are looking for does not exist or has been removed.</p>
        <a href="/jobs" style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>Browse all jobs</a>
      </div>
    );
  }

  return (
    <div className="container" style={{ paddingTop: '40px', paddingBottom: '60px' }}>
      
      {/* Breadcrumb */}
      <div style={{ marginBottom: '20px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
        <a href="/">Home</a> &raquo; <a href="/jobs">Jobs</a> &raquo; <span style={{ color: 'var(--text-main)' }}>{job.title}</span>
      </div>

      <article className="card" style={{ padding: '40px', maxWidth: '900px', margin: '0 auto' }}>
        
        {/* Header */}
        <header style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '20px', marginBottom: '30px' }}>
          <span style={{ 
            backgroundColor: '#e0e7ff', color: 'var(--color-primary)', 
            padding: '4px 12px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 'bold'
          }}>
            {job.department}
          </span>
          <h1 style={{ fontSize: '2.2rem', marginTop: '15px', marginBottom: '15px' }}>{job.title}</h1>
          
          <div style={{ display: 'flex', gap: '20px', color: 'var(--text-muted)', fontSize: '0.95rem', flexWrap: 'wrap' }}>
            <div><strong>Total Posts:</strong> {job.total_posts}</div>
            <div><strong>Last Date:</strong> {new Date(job.last_date).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric'})}</div>
          </div>
        </header>

        {/* Tabbed Navigation */}
        <JobTabs slug={slug} />

        {/* Dynamic Content Rendering */}
        <div 
          className="job-content" 
          dangerouslySetInnerHTML={{ __html: job.content }} 
          style={{ lineHeight: '1.8', fontSize: '1.05rem', color: 'var(--text-main)' }}
        />

      </article>

      {/* Basic Content Styling for the injected HTML */}
      <style dangerouslySetInnerHTML={{__html: `
        .job-content h1, .job-content h2, .job-content h3 {
          color: var(--color-primary);
          margin-top: 30px;
          margin-bottom: 15px;
        }
        .job-content p {
          margin-bottom: 15px;
        }
        .job-content ul, .job-content ol {
          margin-bottom: 20px;
          padding-left: 20px;
        }
        .job-content li {
          margin-bottom: 8px;
        }
        .job-content table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 25px;
        }
        .job-content th, .job-content td {
          border: 1px solid var(--border-color);
          padding: 12px;
          text-align: left;
        }
        .job-content th {
          background-color: var(--color-secondary);
        }
      `}} />
    </div>
  );
}
