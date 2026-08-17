export const runtime = 'edge';
import { Metadata } from 'next';
import { getJobBySlug } from '@/lib/db';
import { getCGSetSubjectBySlug } from '@/lib/cgSetSubjects';
import CGSetSyllabusTemplate from '@/components/CGSetSyllabusTemplate';
import AuthorByline from '@/components/AuthorByline';
import ArticleFooter from '@/components/ArticleFooter';

async function getJob(slug: string) {
  try {
    return await getJobBySlug(slug);
  } catch (error) {
    console.error("Error fetching job details:", error);
    return null;
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  
  // Programmatic SEO for CG SET Subjects
  const cgSetSubject = getCGSetSubjectBySlug(slug);
  if (cgSetSubject) {
    return {
      title: `CG SET ${cgSetSubject.nameEn} Syllabus 2026: ${cgSetSubject.nameHi} Exam Pattern & Details`,
      description: `Download official CG SET ${cgSetSubject.nameEn} (${cgSetSubject.nameHi}) Syllabus PDF. Check Paper-I & Paper-II exam pattern, negative marking, and preparation tips for Assistant Professor.`,
    };
  }

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
  
  // Programmatic SEO for CG SET Subjects
  const cgSetSubject = getCGSetSubjectBySlug(slug);
  if (cgSetSubject) {
    return <CGSetSyllabusTemplate subject={cgSetSubject} />;
  }

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

      <article className="card" style={{ padding: '40px', margin: '0 auto' }}>
        
        {/* Header */}
        <header style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '20px', marginBottom: '30px' }}>
          <span style={{ 
            background: 'var(--card-bg)', color: 'var(--color-primary)', 
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

        {/* Dynamic Content Rendering */}
        <div style={{ paddingTop: '20px' }}>
          <AuthorByline date="16 August 2026" />
        </div>
        <div 
          className="job-content" 
          dangerouslySetInnerHTML={{ __html: job.content }} 
          style={{ lineHeight: '1.8', fontSize: '1.05rem', color: 'var(--text-main)', marginTop: '20px' }}
        />
        <ArticleFooter 
          date="16 August 2026" 
          sourceText={`Official Notification by ${job.department}`}
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
