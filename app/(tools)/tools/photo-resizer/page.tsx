import PhotoResizer from '@/components/PhotoResizer';

export const metadata = {
  title: 'Photo & Signature Resizer for Govt Exams (50KB) | CG Knowledge',
  description: 'Easily resize and compress your passport size photo and signature under 50KB or 100KB for CGSSB, CGPSC, and Vyapam online application forms.',
};

export default function PhotoResizerPage() {
  return (
    <div className="container" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
      
      {/* Tool Header */}
      <section style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>
          Photo & Signature Resizer
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto' }}>
          Stop struggling with Photoshop or heavy apps. Use this free browser tool to compress your photo and signature to meet the exact size requirements (e.g., 40KB - 60KB) of CGSSB (Vyapam) and CGPSC online forms. 100% secure, your image never leaves your device!
        </p>
      </section>

      {/* Tool Interface */}
      <section>
        <PhotoResizer />
      </section>

      {/* SEO Content / Instructions */}
      <section style={{ marginTop: '60px', maxWidth: '800px', margin: '60px auto 0' }}>
        <h2>How to compress image for CGSSB & CGPSC forms?</h2>
        <ul style={{ paddingLeft: '20px', color: 'var(--text-muted)', lineHeight: '1.8' }}>
          <li><strong>Step 1:</strong> Click "Choose File" and upload your scanned passport photo or signature.</li>
          <li><strong>Step 2:</strong> Adjust the Compression Level slider. Moving it to the left will reduce the KB size.</li>
          <li><strong>Step 3:</strong> Click "Resize & Compress". The tool will instantly show you the new file size in KB.</li>
          <li><strong>Step 4:</strong> If the size is within the required range (e.g., 40KB-60KB), click "Download Resized Image". Otherwise, adjust the slider again.</li>
        </ul>
      </section>

    </div>
  );
}
