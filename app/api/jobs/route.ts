import { NextRequest, NextResponse } from 'next/server';
import { getAllJobs, getJobBySlug, insertJob } from '@/lib/db';

export const runtime = 'edge';

export async function GET(
  request: NextRequest,
  { params }: { params?: { slug?: string } }
) {
  try {
    if (params && params.slug) {
      const job = await getJobBySlug(params.slug);
      if (job) {
        return NextResponse.json({ success: true, job });
      }
      return NextResponse.json({ success: false, error: 'Job not found' }, { status: 404 });
    }

    const jobs = await getAllJobs();
    return NextResponse.json({ success: true, jobs });
    
  } catch (error: any) {
    console.error("Database Error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { password, ...jobData } = body;

    if (password !== 'admin123') {
      return NextResponse.json({ success: false, error: 'Unauthorized Access! Wrong Password.' }, { status: 401 });
    }

    await insertJob(jobData);
    
    return NextResponse.json({ success: true, message: 'Job successfully published!' });
  } catch (error: any) {
    console.error("POST Error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
