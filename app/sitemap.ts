import { MetadataRoute } from 'next';
import { getAllJobs } from '@/lib/db';
import { cgSetSubjects } from '@/lib/cgSetSubjects';

export const runtime = 'edge';
export const dynamic = 'force-dynamic'; // Ensures it fetches latest jobs from DB

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://cgssb.com.in';
  
  // Static pages
  const staticPages = [
    '',
    '/about-us',
    '/contact-us',
    '/privacy-policy',
    '/terms',
    '/disclaimer',
    '/editorial-policy',
    '/correction-policy',
    '/admin-login',
    '/author/yuvraj-pratap-rajwade',
    '/jobs',
    '/current-affairs',
    '/cg-gk',
    '/tools',
    '/search',
    '/cg-gk/buddhist-period-chhattisgarh',
    '/cg-gk/chhattisgarh-prehistoric-period',
    '/cg-gk/teejan-bai-biography-pandavani',
    '/current-affairs/general-dhiraj-seth-nepal-visit-2026',
    '/current-affairs/chhattisgarh-current-affairs-june-july-2026',
    '/current-affairs/cg-current-affairs-july-2026',
    '/current-affairs/cg-current-affairs-may-june-2026',
    '/tools/age-calculator',
    '/tools/percentage-calculator',
    '/tools/photo-resizer',
    '/tools/image-to-pdf',
    '/tools/typing-test'
  ];

  const sitemapEntries: MetadataRoute.Sitemap = staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Jobs from DB
  try {
    const jobs = await getAllJobs();
    if (jobs && Array.isArray(jobs)) {
      jobs.forEach((job: any) => {
        if (job && job.slug) {
          const parsedDate = new Date(job.last_date || Date.now());
          sitemapEntries.push({
            url: `${baseUrl}/jobs/${job.slug}`,
            lastModified: isNaN(parsedDate.getTime()) ? new Date() : parsedDate,
            changeFrequency: 'weekly',
            priority: 0.9,
          });
        }
      });
    }
  } catch (e) {
    console.error("Error generating sitemap for jobs:", e);
  }
  
  // CG SET Subjects
  if (cgSetSubjects && Array.isArray(cgSetSubjects)) {
    cgSetSubjects.forEach((subject) => {
      sitemapEntries.push({
        url: `${baseUrl}/jobs/${subject.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    });
  }

  return sitemapEntries;
}
