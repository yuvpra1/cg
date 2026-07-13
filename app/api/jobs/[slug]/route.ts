export const runtime = 'edge';

import { NextRequest, NextResponse } from 'next/server';
import { getRequestContext } from '@cloudflare/next-on-pages';
import { localJobs } from '../route';

export async function GET(request: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  try {
    const { slug } = await params;
    const ctx = getRequestContext();
    
    // Check if we are running in Cloudflare with D1 binding
    if (ctx.env && ctx.env.DB) {
      const db = ctx.env.DB;
      const job = await db.prepare(
        'SELECT id, slug, title, department, total_posts, last_date, content FROM jobs WHERE slug = ?'
      ).bind(slug).first();
      
      if (!job) {
        return NextResponse.json({ success: false, error: 'Job not found' }, { status: 404 });
      }
      return NextResponse.json({ success: true, job });
    } else {
      // Fallback for local 'npm run dev'
      const job = localJobs.find(j => j.slug === slug);
      if (!job) {
        return NextResponse.json({ success: false, error: 'Job not found' }, { status: 404 });
      }
      return NextResponse.json({ success: true, job });
    }
  } catch (error: any) {
    console.error("Database Error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
