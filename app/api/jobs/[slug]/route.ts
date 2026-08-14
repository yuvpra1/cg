import { NextRequest, NextResponse } from 'next/server';
import { getJobBySlug } from '@/lib/db';



export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const job = await getJobBySlug(slug);
    
    if (job) {
      return NextResponse.json({ success: true, job });
    }
    return NextResponse.json({ success: false, error: 'Job not found' }, { status: 404 });
  } catch (error: any) {
    console.error("Database Error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
