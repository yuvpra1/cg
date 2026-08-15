import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About the Author - CGSSB',
  description: 'About the author and publisher behind CGSSB.',
};

export default function AuthorPage() {
  return (
    <div className="container" style={{ paddingTop: '60px', paddingBottom: '60px', minHeight: '60vh', maxWidth: '800px' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '30px', color: 'var(--color-primary)' }}>
        About the Author
      </h1>
      
      <div className="card" style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)' }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '20px', color: 'var(--text-main)', borderBottom: '2px solid var(--border-color)', paddingBottom: '10px' }}>
          Written & Maintained by Yuvraj Pratap Rajwade
        </h2>
        
        <p style={{ marginBottom: '15px' }}>
          <strong>Yuvraj Pratap Rajwade</strong> एक independent web developer और digital publisher हैं, जो students, job aspirants और general users के लिए useful online resources और web-based tools बनाने पर काम करते हैं।
        </p>
        
        <p style={{ marginBottom: '15px' }}>
          CGSSB को maintain करने के पीछे उनका उद्देश्य Chhattisgarh से संबंधित important recruitment और examination information को एक simple और organized format में उपलब्ध कराना है।
        </p>
        
        <p style={{ marginBottom: '15px' }}>
          Recruitment और examination articles तैयार करते समय वे official notifications और संबंधित official sources को प्राथमिक reference के रूप में देखते हैं। Articles को candidate के perspective से readable बनाने पर विशेष ध्यान दिया जाता है।
        </p>
        
        <p style={{ marginBottom: '25px' }}>
          यह website किसी government department या examination authority की official representation नहीं है। Author किसी government examination authority से जुड़े होने या किसी सरकारी पद पर होने का दावा नहीं करता।
        </p>
        
        <div style={{ padding: '20px', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
          <p style={{ margin: '0 0 10px 0' }}><strong>Role:</strong> Independent Web Developer & Publisher</p>
          <p style={{ margin: '0 0 10px 0' }}><strong>Website:</strong> CGSSB Portal</p>
          <p style={{ margin: '0' }}><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/yuvraj-pratap-rajwade-47b21019b" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', textDecoration: 'none', fontWeight: '500' }}>Yuvraj Pratap Rajwade</a></p>
        </div>
      </div>
    </div>
  );
}
