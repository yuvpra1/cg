import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - CGSSB',
  description: 'Contact CGSSB for queries, feedback, or corrections.',
};

export default function ContactUsPage() {
  return (
    <div className="container" style={{ paddingTop: '60px', paddingBottom: '60px', minHeight: '60vh', maxWidth: '800px' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '30px', color: 'var(--color-primary)' }}>
        Contact Us
      </h1>
      
      <div className="card" style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)' }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '20px', color: 'var(--text-main)' }}>हमसे संपर्क करें</h2>
        
        <p style={{ marginBottom: '25px' }}>
          अगर आपको हमारी website से संबंधित कोई question, suggestion या correction बताना है, तो आप हमसे contact कर सकते हैं। हम विशेष रूप से इन मामलों में feedback स्वीकार करते हैं:
        </p>

        <h3 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>📝 Information Correction</h3>
        <p style={{ marginBottom: '20px' }}>
          अगर किसी article में गलत date, गलत eligibility, गलत vacancy, outdated information, या गलत official link दिखाई देता है, तो हमें बताएं।
        </p>

        <h3 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>📢 General Feedback</h3>
        <p style={{ marginBottom: '20px' }}>
          Website के design, usability, content या किसी feature के बारे में आपका सुझाव हमारे लिए useful है।
        </p>

        <h3 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>🔗 Official Link Issue</h3>
        <p style={{ marginBottom: '20px' }}>
          अगर किसी article में दिया गया official link काम नहीं कर रहा है या official website पर नया link उपलब्ध है, तो हमें इसकी जानकारी दें।
        </p>

        <h3 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>© Copyright / Content Concern</h3>
        <p style={{ marginBottom: '30px' }}>
          अगर आपको लगता है कि हमारी website पर किसी content, image या अन्य material से संबंधित copyright concern है, तो कृपया हमें details के साथ contact करें।
        </p>
        
        <div style={{ padding: '25px', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid var(--border-color)', textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Contact Email</h3>
          <p style={{ marginBottom: '0', fontSize: '1.2rem' }}>
            <a href="mailto:contact@cgssb.com.in" style={{ color: 'var(--color-primary)', fontWeight: '600' }}>contact@cgssb.com.in</a>
          </p>
        </div>
      </div>
    </div>
  );
}
