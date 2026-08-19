import { getAllJobsForSitemap } from "@/lib/db";

export const runtime = 'edge';

export async function GET() {
  const baseUrl = "https://cgssb.com.in";
  
  // Start XML
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  const urls: string[] = [
    `${baseUrl}/`,
    `${baseUrl}/jobs`,
    `${baseUrl}/current-affairs`,
    `${baseUrl}/cg-gk`,
    `${baseUrl}/tools`,
    `${baseUrl}/about-us`,
    `${baseUrl}/author/yuvraj-pratap-rajwade`
  ];

  // 1. Static CG GK Articles
  const cgGkPages = [
    "buddhist-period-chhattisgarh",
    "chhattisgarh-prehistoric-period",
    "teejan-bai-biography-pandavani"
  ];
  for (const slug of cgGkPages) {
    urls.push(`${baseUrl}/cg-gk/${slug}`);
  }

  // 2. Static Current Affairs Articles
  const currentAffairsPages = [
    "cg-current-affairs-july-2026",
    "cg-current-affairs-may-june-2026",
    "chhattisgarh-current-affairs-june-july-2026",
    "general-dhiraj-seth-nepal-visit-2026"
  ];
  for (const slug of currentAffairsPages) {
    urls.push(`${baseUrl}/current-affairs/${slug}`);
  }

  // Append static URLs to XML
  for (const url of urls) {
    xml += `\n  <url>\n    <loc>${url}</loc>\n  </url>`;
  }

  // 3. Dynamic Jobs from D1
  try {
    const jobs = await getAllJobsForSitemap();
    if (jobs && Array.isArray(jobs)) {
      for (const job of jobs) {
        if (!job?.slug) continue;
        xml += `\n  <url>\n    <loc>${baseUrl}/jobs/${job.slug}</loc>\n  </url>`;
      }
    }
  } catch (error) {
    console.error("Global Sitemap Error:", error);
    // Ignore error and just finish the XML with static routes
  }

  // End XML
  xml += `\n</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400'
    },
  });
}
