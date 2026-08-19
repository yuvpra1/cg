import type { MetadataRoute } from "next";
import { getAllJobsForSitemap } from "@/lib/db";

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
  ];

  // 1. Static CG GK Articles
  const cgGkPages = [
    "buddhist-period-chhattisgarh",
    "chhattisgarh-prehistoric-period",
    "teejan-bai-biography-pandavani"
  ];
  for (const slug of cgGkPages) {
    routes.push({ url: `${baseUrl}/cg-gk/${slug}`, lastModified: new Date() });
  }

  // 2. Static Current Affairs Articles
  const currentAffairsPages = [
    "cg-current-affairs-july-2026",
    "cg-current-affairs-may-june-2026",
    "chhattisgarh-current-affairs-june-july-2026",
    "general-dhiraj-seth-nepal-visit-2026"
  ];
  for (const slug of currentAffairsPages) {
    routes.push({ url: `${baseUrl}/current-affairs/${slug}`, lastModified: new Date() });
  }

  // 3. Dynamic Jobs from D1
  try {
    const jobs = await getAllJobsForSitemap();
    for (const job of jobs) {
      if (!job?.slug) continue;
      
      const parsedDate = new Date(job.last_date || Date.now());
      const lastMod = isNaN(parsedDate.getTime()) ? new Date() : parsedDate;
      
      routes.push({
        url: `${baseUrl}/jobs/${job.slug}`,
        lastModified: lastMod
      });
    }
  } catch (error) {
    console.error("Failed to fetch jobs for sitemap:", error);
  }

  return routes;
}
