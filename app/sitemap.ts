import type { MetadataRoute } from "next";
import { getAllJobsForSitemap } from "@/lib/db";

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

const baseUrl = "https://cgssb.com.in";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes: MetadataRoute.Sitemap = [];

  // 1. Static pages
  const staticPages = [
    "",
    "/about-us",
    "/contact-us",
    "/privacy-policy",
    "/terms",
    "/disclaimer",
    "/editorial-policy",
    "/correction-policy",
    "/author/yuvraj-pratap-rajwade",

    // Main sections
    "/jobs",
    "/current-affairs",
    "/cg-gk",
    "/tools",

    // CG GK articles
    "/cg-gk/buddhist-period-chhattisgarh",
    "/cg-gk/chhattisgarh-prehistoric-period",
    "/cg-gk/teejan-bai-biography-pandavani",

    // Current Affairs articles
    "/current-affairs/general-dhiraj-seth-nepal-visit-2026",
    "/current-affairs/chhattisgarh-current-affairs-june-july-2026",
    "/current-affairs/cg-current-affairs-july-2026",
    "/current-affairs/cg-current-affairs-may-june-2026",

    // Tools
    "/tools/age-calculator",
    "/tools/percentage-calculator",
    "/tools/photo-resizer",
    "/tools/image-to-pdf",
    "/tools/typing-test",
  ];

  for (const route of staticPages) {
    routes.push({
      url: `${baseUrl}${route}`,
    });
  }

  // 2. Jobs from D1
  try {
    const jobs = await getAllJobsForSitemap();

    if (Array.isArray(jobs)) {
      for (const job of jobs) {
        if (!job?.slug) continue;
        
        routes.push({
          url: `${baseUrl}/jobs/${job.slug}`,
        });
      }
    }
  } catch (error) {
    // Do not allow D1 failure to break the entire sitemap.
    console.error("Sitemap: failed to load jobs from D1", error);
  }

  return routes;
}
