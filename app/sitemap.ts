import type { MetadataRoute } from "next";
import { getAllJobs } from '@/lib/db';
import { cgSetSubjects } from '@/lib/cgSetSubjects';

export const runtime = 'edge';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://cgssb.com.in";

  const routes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: new Date() },
    { url: `${baseUrl}/jobs`, lastModified: new Date() },
    { url: `${baseUrl}/current-affairs`, lastModified: new Date() },
    { url: `${baseUrl}/cg-gk`, lastModified: new Date() },
    { url: `${baseUrl}/tools`, lastModified: new Date() },
    { url: `${baseUrl}/about-us`, lastModified: new Date() },
    { url: `${baseUrl}/author/yuvraj-pratap-rajwade`, lastModified: new Date() },
    
    // Tools
    { url: `${baseUrl}/tools/age-calculator`, lastModified: new Date() },
    { url: `${baseUrl}/tools/percentage-calculator`, lastModified: new Date() },
    { url: `${baseUrl}/tools/photo-resizer`, lastModified: new Date() },
    { url: `${baseUrl}/tools/image-to-pdf`, lastModified: new Date() },
    { url: `${baseUrl}/tools/typing-test`, lastModified: new Date() },
    
    // CG GK & Current Affairs
    { url: `${baseUrl}/cg-gk/buddhist-period-chhattisgarh`, lastModified: new Date() },
    { url: `${baseUrl}/cg-gk/chhattisgarh-prehistoric-period`, lastModified: new Date() },
    { url: `${baseUrl}/cg-gk/teejan-bai-biography-pandavani`, lastModified: new Date() },
    { url: `${baseUrl}/current-affairs/general-dhiraj-seth-nepal-visit-2026`, lastModified: new Date() },
    { url: `${baseUrl}/current-affairs/chhattisgarh-current-affairs-june-july-2026`, lastModified: new Date() },
    { url: `${baseUrl}/current-affairs/cg-current-affairs-july-2026`, lastModified: new Date() },
    { url: `${baseUrl}/current-affairs/cg-current-affairs-may-june-2026`, lastModified: new Date() },
  ];

  try {
    const jobs = await getAllJobs();
    if (jobs && Array.isArray(jobs)) {
      jobs.forEach((job: any) => {
        if (job && job.slug) {
          const parsedDate = new Date(job.last_date || Date.now());
          routes.push({
            url: `${baseUrl}/jobs/${job.slug}`,
            lastModified: isNaN(parsedDate.getTime()) ? new Date() : parsedDate,
          });
        }
      });
    }
  } catch (e) {
    console.error("Sitemap dynamic jobs fetch error:", e);
  }
  
  if (cgSetSubjects && Array.isArray(cgSetSubjects)) {
    cgSetSubjects.forEach((subject) => {
      routes.push({
        url: `${baseUrl}/jobs/${subject.slug}`,
        lastModified: new Date(),
      });
    });
  }

  return routes;
}
