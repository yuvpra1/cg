import PhotoResizer from '@/components/PhotoResizer';

export const metadata = {
  title: 'Photo & Signature Resizer for Govt Exams (50KB) | CGSSB',
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
        <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '15px' }}>सरकारी फॉर्म के लिए Photo & Signature Resizer क्यों ज़रूरी है?</h2>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '20px' }}>
          CGPSC, CG Vyapam (CGSSB), और SSC जैसे सभी सरकारी नौकरी के एप्लीकेशन फॉर्म में पासपोर्ट साइज़ फोटो और सिग्नेचर को एक निर्धारित साइज़ (जैसे 40KB - 60KB या 20KB - 50KB) में अपलोड करना होता है। मोबाइल कैमरे से ली गई फोटो अक्सर 2MB से 5MB तक की होती है, जिसे फॉर्म स्वीकार नहीं करता। हमारा यह <strong>Online Photo Resizer & Compressor Tool</strong> बिना फोटो की क्वालिटी खराब किए, आपकी इमेज को सटीक KB साइज़ में बदल देता है।
        </p>

        <h3 style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginTop: '30px', marginBottom: '15px' }}>इमेज को Compress और Resize कैसे करें? (How to use)</h3>
        <ul style={{ paddingLeft: '20px', color: 'var(--text-muted)', marginBottom: '30px', lineHeight: '1.8' }}>
          <li><strong>Step 1:</strong> अपनी पासपोर्ट साइज़ फोटो या सिग्नेचर (हस्ताक्षर) की स्कैन की गई कॉपी को <code>Choose File</code> पर क्लिक करके अपलोड करें।</li>
          <li><strong>Step 2:</strong> नीचे दिए गए <strong>Compression Level</strong> स्लाइडर का उपयोग करें। स्लाइडर को बाईं (Left) ओर ले जाने से फाइल की साइज़ (KB) कम हो जाएगी।</li>
          <li><strong>Step 3:</strong> <code>Resize & Compress</code> बटन पर क्लिक करें। यह टूल आपको तुरंत दिखा देगा कि नई इमेज कितने KB की बनी है।</li>
          <li><strong>Step 4:</strong> अगर नई साइज़ फॉर्म की लिमिट (जैसे 50KB) के अंदर है, तो <code>Download Resized Image</code> पर क्लिक करके उसे अपने डिवाइस में सेव कर लें।</li>
        </ul>

        <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '8px', borderLeft: '4px solid var(--color-primary)', marginTop: '30px' }}>
          <strong>Privacy Note:</strong> प्राइवेसी को ध्यान में रखते हुए यह टूल 100% Client-Side है। आपकी पर्सनल फोटो या सिग्नेचर हमारे सर्वर पर अपलोड नहीं होती, बल्कि सीधे आपके ही ब्राउज़र में Compress और Resize हो जाती है।
        </div>
      </section>

    </div>
  );
}
