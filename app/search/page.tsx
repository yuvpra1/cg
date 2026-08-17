import React from 'react';
import Link from 'next/link';
import { getAllJobs } from '@/lib/db';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Search Results - CGSSB',
  description: 'Search for jobs, syllabus, and current affairs on CGSSB Portal.',
};

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

// Define static pages to include in the search
const STATIC_PAGES = [
  { 
    title: "छत्तीसगढ़ का प्राचीन इतिहास: प्रागैतिहासिक काल से महाभारत काल तक", 
    url: "/cg-gk/chhattisgarh-prehistoric-period", 
    type: "CG GK" 
  },
  { title: "डॉ. तीजन बाई जीवन परिचय: पंडवानी, पुरस्कार, उपलब्धियां", url: "/cg-gk/teejan-bai-biography-pandavani", type: "CG GK" },
  { title: "General Dhiraj Seth Nepal Visit 2026: नेपाली सेना का मानद जनरल रैंक, महत्वपूर्ण तथ्य", url: "/current-affairs/general-dhiraj-seth-nepal-visit-2026", type: "Current Affairs" },
  { title: "छत्तीसगढ़ करेंट अफेयर्स 2026: जून-जुलाई के महत्वपूर्ण प्रश्न और MCQ", url: "/current-affairs/chhattisgarh-current-affairs-june-july-2026", type: "Current Affairs" },
  { title: "छत्तीसगढ़ करेंट अफेयर्स - जुलाई 2026", url: "/current-affairs/cg-current-affairs-july-2026", type: "Current Affairs" },
  { title: "छत्तीसगढ़ करेंट अफेयर्स - मई व जून 2026", url: "/current-affairs/cg-current-affairs-may-june-2026", type: "Current Affairs" },
  { title: "Age Calculator (आयु कैलकुलेटर)", url: "/tools/age-calculator", type: "Tool" },
  { title: "Percentage Calculator (प्रतिशत कैलकुलेटर)", url: "/tools/percentage-calculator", type: "Tool" },
  { title: "Photo Resizer & Signature Cropper", url: "/tools/photo-resizer", type: "Tool" },
  { title: "Image to PDF Converter", url: "/tools/image-to-pdf", type: "Tool" },
  { title: "Hindi Typing Test (Remington Gail/Kruti Dev)", url: "/tools/typing-test", type: "Tool" },
];

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const resolvedParams = await searchParams;
  const query = typeof resolvedParams?.q === 'string' ? resolvedParams.q.toLowerCase().trim() : '';

  let results: { title: string, url: string, type: string }[] = [];

  if (query) {
    // Fetch DB Jobs
    let dbJobs: any[] = [];
    try {
      dbJobs = await getAllJobs();
    } catch (e) {
      console.error("Error fetching jobs for search:", e);
    }
    
    // Ensure dbJobs is always an array to prevent .map crashes
    const safeDbJobs = Array.isArray(dbJobs) ? dbJobs : [];

    // Format DB Jobs
    const formattedJobs = safeDbJobs.map((job: any) => ({
      title: job?.title || '',
      url: `/jobs/${job?.slug || ''}`,
      type: 'Job Notification'
    }));

    // Combine all searchable content
    const allContent = [...STATIC_PAGES, ...formattedJobs];

    // Filter results
    results = allContent.filter(item => item.title.toLowerCase().includes(query));
  }

  return (
    <div className="container" style={{ paddingTop: '40px', paddingBottom: '60px', minHeight: '60vh' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '20px', color: 'var(--color-primary)' }}>
        Search Results
      </h1>

      <form action="/search" method="GET" style={{ display: 'flex', maxWidth: '600px', marginBottom: '40px' }}>
        <input 
          type="text" 
          name="q"
          defaultValue={query}
          className="search-input"
          placeholder="Search for jobs, syllabus..." 
          style={{ flex: 1, padding: '12px 20px', borderRadius: '8px 0 0 8px', border: '1px solid var(--border-color)', minWidth: 0 }}
        />
        <button type="submit" className="search-btn" style={{ borderRadius: '0 8px 8px 0', padding: '0 25px' }}>
          Search
        </button>
      </form>

      {query ? (
        <div>
          <p style={{ marginBottom: '20px', color: 'var(--text-muted)' }}>
            Showing results for: <strong>"{query}"</strong> ({results.length} found)
          </p>

          {results.length > 0 ? (
            <div className="responsive-grid">
              {results.map((result, idx) => (
                <Link href={result.url} key={idx} style={{ textDecoration: 'none' }}>
                  <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--color-primary)', marginBottom: '8px', textTransform: 'uppercase' }}>
                      {result.type}
                    </span>
                    <h2 style={{ fontSize: '1.2rem', color: 'var(--text-main)', marginBottom: '10px' }}>
                      {result.title}
                    </h2>
                    <p style={{ color: 'var(--color-primary)', marginTop: 'auto', fontWeight: '500', fontSize: '0.9rem' }}>
                      Read More &rarr;
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="card" style={{ padding: '40px', textAlign: 'center' }}>
              <h3>No results found for "{query}"</h3>
              <p style={{ color: 'var(--text-muted)' }}>Try checking for spelling errors or use different keywords.</p>
            </div>
          )}
        </div>
      ) : (
        <p style={{ color: 'var(--text-muted)' }}>Please enter a search term above.</p>
      )}
    </div>
  );
}
