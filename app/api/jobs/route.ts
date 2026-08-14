export const runtime = 'edge';

import { NextRequest, NextResponse } from 'next/server';
import { getRequestContext } from '@cloudflare/next-on-pages';

// Fallback for local `npm run dev` since D1 is only available in Cloudflare/Wrangler
export let localJobs = [
  { 
    id: 3, 
    slug: 'cg-sample-assistant-2025', 
    title: 'CG Sample Assistant Recruitment 2025', 
    department: 'Food & Drug Admin', 
    total_posts: 30, 
    last_date: '2025-08-30',
    content: `<h2>भर्ती का संक्षिप्त विवरण</h2><p>छत्तीसगढ़ में सरकारी नौकरी की तैयारी कर रहे विज्ञान वर्ग (Science Stream) के विद्यार्थियों के लिए अच्छी खबर है। कार्यालय नियंत्रक, खाद्य एवं औषधि प्रशासन, छत्तीसगढ़ ने नमूना सहायक (Sample Assistant) के 30 रिक्त पदों पर सीधी भर्ती की प्रक्रिया शुरू करने की स्वीकृति प्राप्त की है।</p>
    <ul>
      <li><strong>विभाग:</strong> खाद्य एवं औषधि प्रशासन</li>
      <li><strong>वेतन स्तर:</strong> लेवल-4 (₹5200–20200, GP: ₹1900)</li>
      <li><strong>योग्यता:</strong> 12वीं (विज्ञान संकाय, रसायन विज्ञान सहित)</li>
      <li><strong>आयु सीमा:</strong> 18 से 30 वर्ष (छूट नियमानुसार)</li>
    </ul>
    <h2>परीक्षा पैटर्न</h2>
    <p>100 वस्तुनिष्ठ प्रश्न, 100 अंक, 2 घंटे की अवधि। नेगेटिव मार्किंग 1/4 अंक।</p>`
  },
  { id: 1, slug: 'cg-police-constable-2026', title: 'CG Police Constable Recruitment 2026', department: 'CG Police', total_posts: 5967, last_date: '2026-08-15', content: 'Details coming soon.' },
  { id: 2, slug: 'vyapam-patwari-2026', title: 'Chhattisgarh Patwari Exam 2026', department: 'Vyapam', total_posts: 301, last_date: '2026-08-22', content: 'Details coming soon.' }
];

export async function GET(request: NextRequest) {
  try {
    const ctx = getRequestContext();
    
    // Check if we are running in Cloudflare with D1 binding
    const env = ctx.env as any;
    if (env && env.DB) {
      const db = env.DB;
      const { results } = await db.prepare(
        'SELECT id, slug, title, department, total_posts, last_date FROM jobs ORDER BY id DESC LIMIT 20'
      ).all();
      return NextResponse.json({ success: true, jobs: results });
    } else {
      // Fallback for local 'npm run dev'
      return NextResponse.json({ success: true, jobs: localJobs });
    }
  } catch (error: any) {
    console.error("Database Error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { password, title, slug, department, total_posts, last_date, content } = body;

    if (password !== 'admin123') {
      return NextResponse.json({ success: false, error: 'Unauthorized Access! Wrong Password.' }, { status: 401 });
    }

    const ctx = getRequestContext();

    // Check if we are running in Cloudflare with D1 binding
    const env = ctx.env as any;
    if (env && env.DB) {
      const db = env.DB;
      await db.prepare(
        `INSERT INTO jobs (title, slug, department, total_posts, last_date, content) 
         VALUES (?, ?, ?, ?, ?, ?)`
      ).bind(title, slug, department, total_posts, last_date, content).run();
    } else {
      // Fallback for local 'npm run dev'
      localJobs.unshift({
        id: Date.now(),
        slug, title, department, total_posts: Number(total_posts), last_date, content
      });
    }

    return NextResponse.json({ success: true, message: 'Job successfully published!' });
  } catch (error: any) {
    console.error("Database Error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
