import { getAllJobsForSitemap } from "@/lib/db";

const baseUrl = "https://cgssb.com.in";

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const urls: string[] = [
    `${baseUrl}/`,
    `${baseUrl}/jobs`,
    `${baseUrl}/current-affairs`,
    `${baseUrl}/cg-gk`,
    `${baseUrl}/tools`,
    `${baseUrl}/about-us`,
    `${baseUrl}/author/yuvraj-pratap-rajwade`,
    
    // Syllabus
    `${baseUrl}/syllabus`,
    `${baseUrl}/syllabus/cg-teacher-agriculture-syllabus-2026`,
    `${baseUrl}/syllabus/cg-teacher-social-science-syllabus-2026`,
    `${baseUrl}/syllabus/cg-teacher-sanskrit-syllabus-2026`,
    `${baseUrl}/syllabus/cg-teacher-hindi-syllabus-2026`,

    // CG GK
    `${baseUrl}/cg-gk/buddhist-period-chhattisgarh`,
    `${baseUrl}/cg-gk/chhattisgarh-prehistoric-period`,
    `${baseUrl}/cg-gk/teejan-bai-biography-pandavani`,

    // Current Affairs
    `${baseUrl}/current-affairs/cg-current-affairs-july-2026`,
    `${baseUrl}/current-affairs/cg-current-affairs-may-june-2026`,
    `${baseUrl}/current-affairs/chhattisgarh-current-affairs-june-july-2026`,
    `${baseUrl}/current-affairs/general-dhiraj-seth-nepal-visit-2026`,
    `${baseUrl}/current-affairs/nep-2020-education-policy-in-hindi`,

    // Tools
    `${baseUrl}/tools/age-calculator`,
    `${baseUrl}/tools/image-to-pdf`,
    `${baseUrl}/tools/percentage-calculator`,
    `${baseUrl}/tools/photo-resizer`,
    `${baseUrl}/tools/typing-test`,

    // Policies & Static
    `${baseUrl}/contact-us`,
    `${baseUrl}/correction-policy`,
    `${baseUrl}/disclaimer`,
    `${baseUrl}/editorial-policy`,
    `${baseUrl}/privacy-policy`,
    `${baseUrl}/terms`,
  ];

  try {
    const jobs = await getAllJobsForSitemap();
    
    const excludedSlugs = [
      "cg-sample-assistant-2025",
      "vyapam-patwari-2026",
      "cg-police-constable-2026"
    ];

    if (Array.isArray(jobs)) {
      for (const job of jobs) {
        if (job?.slug && !excludedSlugs.includes(job.slug)) {
          urls.push(`${baseUrl}/jobs/${job.slug}`);
        }
      }
    }
  } catch (error) {
    console.error("Failed to load jobs for sitemap:", error);
  }

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  for (const url of urls) {
    xml += `
  <url>
    <loc>${escapeXml(url)}</loc>
  </url>`;
  }

  xml += `\n</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control":
        "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
