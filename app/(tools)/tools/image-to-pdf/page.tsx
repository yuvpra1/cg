import ImageToPdf from '@/components/ImageToPdf';

export const metadata = {
  title: 'Image to PDF Converter for Govt Jobs | CGSSB',
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
        <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '15px' }}>सरकारी फॉर्म के लिए Image to PDF Converter क्यों आवश्यक है?</h2>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '20px' }}>
          CGPSC (छत्तीसगढ़ लोक सेवा आयोग), CG Vyapam और अन्य सरकारी नौकरी के पोर्टल पर आवेदन करते समय अक्सर 10वीं/12वीं की मार्कशीट, जाति प्रमाण पत्र (Caste Certificate), और निवास प्रमाण पत्र (Domicile) को <strong>PDF Format</strong> में अपलोड करने के लिए कहा जाता है। मोबाइल से खींची गई फोटो हमेशा JPG या PNG फॉर्मेट में होती है। इस समस्या को हल करने के लिए हमारा <strong>Free Image to PDF Converter Tool</strong> आपकी मदद करता है।
        </p>

        <h3 style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginTop: '30px', marginBottom: '15px' }}>क्या यह टूल आपके Documents के लिए सुरक्षित (Safe) है?</h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '20px' }}>
          <strong>जी हाँ, 100% सुरक्षित!</strong> इंटरनेट पर मौजूद कई अन्य टूल्स आपके पर्सनल डॉक्यूमेंट्स (Mark-sheets, Aadhar Card) को अपने सर्वर पर अपलोड करते हैं, जो प्राइवेसी के लिए खतरा हो सकता है। हमारा टूल <strong>Client-Side Processing</strong> का उपयोग करता है, जिसका अर्थ है कि आपकी इमेज को PDF में बदलने का पूरा काम आपके अपने मोबाइल या कंप्यूटर के ब्राउज़र में ही होता है। कोई भी डेटा हमारे सर्वर पर सेव नहीं होता।
        </p>

        <h3 style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginTop: '30px', marginBottom: '15px' }}>इमेज को PDF में कैसे बदलें? (How to Convert)</h3>
        <ul style={{ paddingLeft: '20px', color: 'var(--text-muted)', marginBottom: '30px', lineHeight: '1.8' }}>
          <li><strong>Step 1:</strong> अपने मोबाइल से डॉक्यूमेंट की स्पष्ट फोटो (Clear Photo) खींचें।</li>
          <li><strong>Step 2:</strong> <code>Upload Image/Document</code> बटन पर क्लिक करें और उस फोटो को सेलेक्ट करें।</li>
          <li><strong>Step 3:</strong> <code>Convert to PDF</code> बटन पर क्लिक करें।</li>
          <li><strong>Step 4:</strong> आपका PDF तुरंत तैयार हो जाएगा, जिसे आप डाउनलोड कर सकते हैं।</li>
        </ul>

        <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '8px', borderLeft: '4px solid var(--color-primary)', marginTop: '30px' }}>
          <strong>Exam Tip:</strong> यदि पोर्टल पर PDF की साइज़ लिमिट (जैसे Max 500KB) दी गई है, तो फोटो खींचने के बाद उसे थोड़ा क्रॉप कर लें ताकि फालतू का हिस्सा हट जाए। इससे PDF का साइज़ अपने आप कम हो जाता है।
        </div>
      </section>

    </div>
  );
}
