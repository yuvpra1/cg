export const runtime = 'edge';
import { NextRequest, NextResponse } from 'next/server';
import { getRequestContext } from '@cloudflare/next-on-pages';

function getR2() {
  try {
    return (getRequestContext().env as any).R2;
  } catch (e) {
    return null;
  }
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json({ success: false, error: 'No file provided' }, { status: 400 });
    }

    const r2 = getR2();
    if (!r2) {
      // Local development fallback (cannot upload to R2)
      return NextResponse.json({ success: false, error: 'R2 binding not found (Local Dev Mode)' }, { status: 500 });
    }

    const buffer = await file.arrayBuffer();
    const fileName = `${Date.now()}-${file.name}`;

    // Upload to Cloudflare R2
    await r2.put(fileName, buffer, {
      httpMetadata: {
        contentType: file.type || 'image/webp',
      },
    });

    // Construct the public URL. Use environment variable or fallback to the provided URL.
    const publicUrlBase = process.env.NEXT_PUBLIC_R2_URL || 'https://pub-xxxxxxxx.r2.dev'; // Replace with actual R2.dev URL or Custom Domain
    const url = `${publicUrlBase.replace(/\/$/, '')}/${fileName}`;

    return NextResponse.json({ success: true, url });
  } catch (error: any) {
    console.error("Upload Error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
