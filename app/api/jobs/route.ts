import { NextRequest, NextResponse } from 'next/server';
import { getAllJobs, getJobBySlug, insertJob } from '@/lib/db';



export async function GET(request: NextRequest) {
  try {
    const jobs = await getAllJobs();
    return NextResponse.json({ success: true, jobs });
    
  } catch (error: any) {
    console.error("Database Error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const jobData = await request.json();

    await insertJob(jobData);
    
    return NextResponse.json({ success: true, message: 'Job successfully published!' });
  } catch (error: any) {
    console.error("POST Error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
