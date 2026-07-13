import ImageToPdf from '@/components/ImageToPdf';

export const metadata = {
  title: 'Image to PDF Converter for Govt Jobs | CG Knowledge',
  description: 'Convert your JPG/PNG marksheets and documents to PDF format directly in your browser. 100% free and secure tool for CGSSB and CGPSC forms.',
};

export default function ImageToPdfPage() {
  return (
    <div className="container" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
      
      {/* Tool Header */}
      <section style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>
          Image to PDF Converter
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto' }}>
          Many government job portals require you to upload your 10th/12th marksheets and caste certificates in PDF format. Just click a photo of your document and use this tool to securely convert it into a PDF instantly.
        </p>
      </section>

      {/* Tool Interface */}
      <section>
        <ImageToPdf />
      </section>

      {/* SEO Content / Instructions */}
      <section style={{ marginTop: '60px', maxWidth: '800px', margin: '60px auto 0' }}>
        <h2>Is this tool safe for my documents?</h2>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '20px' }}>
          <strong>Yes, absolutely 100% secure!</strong> Unlike other websites that upload your personal marksheets to their servers, our tool processes everything directly inside your browser. Your images never leave your phone or computer.
        </p>

        <h2>How to convert any Image to PDF?</h2>
        <ul style={{ paddingLeft: '20px', color: 'var(--text-muted)', lineHeight: '1.8' }}>
          <li>Click a clear photo of your document (marksheet, certificate, ID, etc.).</li>
          <li>Click "Upload Image/Document" and select your photo.</li>
          <li>Click the "Convert to PDF" button.</li>
          <li>Your PDF will be generated instantly and ready for download.</li>
        </ul>
      </section>

    </div>
  );
}
