import { NextRequest, NextResponse } from 'next/server';
import { getAllJobs } from '@/lib/db';
import { cgSetSubjects } from '@/lib/cgSetSubjects';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  const baseUrl = 'https://cgssb.com.in';
  
  try {
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

    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

    // Add static pages
    staticPages.forEach((route) => {
      xml += `  <url>\n`;
      xml += `    <loc>${baseUrl}${route}</loc>\n`;
      xml += `    <lastmod>${new Date().toISOString()}</lastmod>\n`;
      xml += `    <changefreq>daily</changefreq>\n`;
      xml += `    <priority>${route === '' ? '1.0' : '0.8'}</priority>\n`;
      xml += `  </url>\n`;
    });

    // Jobs from DB
    try {
      const jobs = await getAllJobs();
      if (jobs && Array.isArray(jobs)) {
        jobs.forEach((job: any) => {
          if (job && job.slug) {
            const parsedDate = new Date(job.last_date || Date.now());
            const lastMod = isNaN(parsedDate.getTime()) ? new Date() : parsedDate;
            xml += `  <url>\n`;
            xml += `    <loc>${baseUrl}/jobs/${job.slug}</loc>\n`;
            xml += `    <lastmod>${lastMod.toISOString()}</lastmod>\n`;
            xml += `    <changefreq>weekly</changefreq>\n`;
            xml += `    <priority>0.9</priority>\n`;
            xml += `  </url>\n`;
          }
        });
      }
    } catch (e) {
      console.error("Error generating sitemap for jobs:", e);
    }
    
    // CG SET Subjects
    if (cgSetSubjects && Array.isArray(cgSetSubjects)) {
      cgSetSubjects.forEach((subject) => {
        xml += `  <url>\n`;
        xml += `    <loc>${baseUrl}/jobs/${subject.slug}</loc>\n`;
        xml += `    <lastmod>${new Date().toISOString()}</lastmod>\n`;
        xml += `    <changefreq>monthly</changefreq>\n`;
        xml += `    <priority>0.7</priority>\n`;
        xml += `  </url>\n`;
      });
    }

    xml += `</urlset>`;

    return new NextResponse(xml, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (error) {
    console.error("Critical error in sitemap:", error);
    // Minimal fallback
    const minimalXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url>\n    <loc>${baseUrl}</loc>\n    <lastmod>${new Date().toISOString()}</lastmod>\n  </url>\n</urlset>`;
    return new NextResponse(minimalXml, {
      status: 200,
      headers: { 'Content-Type': 'application/xml' },
    });
  }
}
