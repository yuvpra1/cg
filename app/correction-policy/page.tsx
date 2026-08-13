import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Correction Policy - CGSSB',
  description: 'Our correction policy for maintaining accurate information.',
};

export default function CorrectionPolicyPage() {
  return (
    <div className="container" style={{ paddingTop: '60px', paddingBottom: '60px', minHeight: '60vh', maxWidth: '800px' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '30px', color: 'var(--color-primary)' }}>
        Correction Policy
      </h1>
      
      <div className="card" style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)' }}>
        <p style={{ marginBottom: '15px' }}>
          हम अपनी website पर published information को accurate और updated रखने की कोशिश करते हैं। फिर भी किसी article में गलती रह सकती है या बाद में official information बदल सकती है।
        </p>

        <p style={{ marginBottom: '15px' }}>
          Government recruitment में छोटी-सी information भी महत्वपूर्ण हो सकती है। इसलिए अगर किसी article में factual error दिखाई देता है, तो हम उसे ignore नहीं करते।
        </p>
        
        <p style={{ marginBottom: '20px' }}>
          अगर आपको कोई factual error मिलता है, तो हमें इस फॉर्मेट में ईमेल करें:
        </p>
        
        <div style={{ padding: '15px', backgroundColor: '#f8fafc', borderLeft: '4px solid var(--color-primary)', fontWeight: '600', marginBottom: '25px' }}>
          Article Name + गलत जानकारी + सही/official source
        </div>

        <p style={{ marginBottom: '20px' }}>
          हम उपलब्ध official source से information verify करेंगे और correction आवश्यक होने पर article को update करेंगे। जहाँ महत्वपूर्ण update किया जाता है, वहाँ article की <strong>Last Updated</strong> date भी बदली जा सकती है।
        </p>
        
        <p style={{ marginBottom: '0' }}>
          Correction सबमिट करने के लिए आप हमें <strong>contact@cgssb.com.in</strong> पर ईमेल कर सकते हैं।
        </p>
      </div>
    </div>
  );
}
