import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Editorial Policy - CGSSB',
  description: 'How we prepare and publish content on CGSSB.',
};

export default function EditorialPolicyPage() {
  return (
    <div className="container" style={{ paddingTop: '60px', paddingBottom: '60px', minHeight: '60vh', maxWidth: '800px' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '30px', color: 'var(--color-primary)' }}>
        Editorial Policy
      </h1>
      
      <div className="card" style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)' }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '20px', color: 'var(--text-main)' }}>हमारा Content कैसे तैयार होता है?</h2>
        
        <p style={{ marginBottom: '15px' }}>
          हमारा focus quantity से ज्यादा <strong>useful और accurate information</strong> देने पर है।
        </p>
        
        <p style={{ marginBottom: '20px' }}>
          किसी recruitment या exam पर article तैयार करते समय हम उपलब्ध official information को देखते हैं और फिर उसे candidate के point of view से व्यवस्थित करते हैं। उदाहरण के लिए किसी recruitment article में हम जरूरत के अनुसार ये जानकारी समझा सकते हैं:
        </p>
        
        <ul style={{ paddingLeft: '20px', marginBottom: '25px', listStyleType: 'disc', columns: '2', gap: '20px' }}>
          <li>Vacancy Details</li>
          <li>Important Dates</li>
          <li>Eligibility</li>
          <li>Age Limit</li>
          <li>Age Relaxation</li>
          <li>Educational Qualification</li>
          <li>Application Process</li>
          <li>Application Fee</li>
          <li>Selection Process</li>
          <li>Exam Pattern</li>
          <li>Syllabus</li>
          <li>Admit Card</li>
          <li>Answer Key</li>
          <li>Result</li>
          <li>Document Verification</li>
          <li>Important Instructions</li>
        </ul>

        <p style={{ marginBottom: '0' }}>
          हम कोशिश करते हैं कि article केवल notification का copy-paste न हो, बल्कि candidate को <strong>information समझने और सही next step लेने में मदद करे।</strong>
        </p>
      </div>
    </div>
  );
}
