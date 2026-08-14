export const runtime = 'edge';
import { Metadata } from 'next';
import JobTabs from '@/components/JobTabs';



import { getJobBySlug } from '@/lib/db';

async function getJob(slug: string) {
  try {
    return await getJobBySlug(slug);
  } catch (error) {
    console.error("Error fetching job for tab:", error);
    return null;
  }
}

function getTabTitle(tab: string) {
  return tab.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string, tab: string }> }): Promise<Metadata> {
  const { slug, tab } = await params;
  const job = await getJob(slug);
  const tabTitle = getTabTitle(tab);

  if (!job) {
    return { title: 'Job Not Found - CGSSB' };
  }
  
  return {
    title: `${job.title} ${tabTitle} 2026 | CGSSB`,
    description: `Latest update on ${job.title} ${tabTitle}. Check all details regarding the ${tabTitle.toLowerCase()} for the ${job.department} recruitment.`,
  };
}

export default async function JobTabPage({ params }: { params: Promise<{ slug: string, tab: string }> }) {
  const { slug, tab } = await params;
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

  const tabTitle = getTabTitle(tab);

  // Fallback Boilerplate Content Logic
  let tabContent = '';
  if (tab === 'syllabus') {
    tabContent = `
      <h2>${job.title} Syllabus 2026</h2>
      <p>The official syllabus for the ${job.title} recruitment by ${job.department} will be updated here. Candidates are advised to refer to the official notification for the detailed exam pattern and subject-wise syllabus.</p>
      <p>Generally, the exam includes topics from General Knowledge, Reasoning, Quantitative Aptitude, and subject-specific questions.</p>
      <ul>
        <li><strong>Exam Pattern:</strong> Objective Type (MCQs)</li>
        <li><strong>Duration:</strong> As per official notification</li>
      </ul>
      <p><em>Bookmark this page for the latest updates on the syllabus PDF download link.</em></p>
    `;
  } else if (tab === 'admit-card') {
    tabContent = `
      <h2>${job.title} Admit Card 2026</h2>
      <p>The Admit Card for the ${job.title} written examination will be released approximately 7-10 days before the exam date.</p>
      <p>Candidates can download their admit card using their registration ID and date of birth.</p>
      <div style="background: #eef2ff; padding: 15px; border-left: 4px solid #4f46e5; margin: 20px 0;">
        <strong>Admit Card Status:</strong> To be released soon.
      </div>
    `;
  } else if (tab === 'answer-key') {
    tabContent = `
      <h2>${job.title} Answer Key 2026</h2>
      <p>The official model answer key for the ${job.title} exam will be published by the examination authority shortly after the successful completion of the written test.</p>
      <p>Candidates will be given a specific time frame to raise objections (Dawa-Aapatti) against the model answer key.</p>
      <p><em>The direct link to download the answer key PDF will be provided here once released.</em></p>
    `;
  } else if (tab === 'result') {
    tabContent = `
      <h2>${job.title} Result & Merit List 2026</h2>
      <p>The final result and merit list for the ${job.title} recruitment will be declared after the evaluation process is completed.</p>
      <p>Results are typically published on the official CGSSB or Vyapam portal.</p>
      <p><strong>Note:</strong> We will update the direct result link and cutoff marks on this page as soon as they are officially announced.</p>
    `;
  } else {
    tabContent = `
      <h2>${job.title} - ${tabTitle}</h2>
      <p>Information regarding the ${tabTitle.toLowerCase()} for the ${job.title} will be updated here as per the latest official notifications from ${job.department}.</p>
      <p>Please check back later for more details.</p>
    `;
  }

  return (
    <div className="container" style={{ paddingTop: '40px', paddingBottom: '60px' }}>
      
      {/* Breadcrumb */}
      <div style={{ marginBottom: '20px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
        <a href="/">Home</a> &raquo; <a href="/jobs">Jobs</a> &raquo; <a href={`/jobs/${slug}`}>{job.title}</a> &raquo; <span style={{ color: 'var(--text-main)' }}>{tabTitle}</span>
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

        {/* Dynamic Boilerplate Content Rendering */}
        <div 
          className="job-content" 
          dangerouslySetInnerHTML={{ __html: tabContent }} 
          style={{ lineHeight: '1.8', fontSize: '1.05rem', color: 'var(--text-main)' }}
        />

      </article>

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
      `}} />
    </div>
  );
}
