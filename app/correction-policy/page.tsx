import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Correction Policy | CGSSB.com.in',
  description: 'Correction Policy for CGSSB.com.in.',
};

export default function CorrectionPolicy() {
  return (
    <div className="container" style={{ paddingTop: '60px', paddingBottom: '60px', maxWidth: '800px' }}>
      <article className="card" style={{ padding: '40px', lineHeight: '1.8' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '10px', color: 'var(--color-primary)' }}>Correction Policy</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}><strong>Last Updated: 16 August 2026</strong></p>

        <div className="content-wrapper" style={{ color: 'var(--text-main)', fontSize: '1.05rem' }}>
          <p>CGSSB.com.in पर हमारा प्रयास रहता है कि प्रकाशित information accurate, useful और updated हो। फिर भी government recruitment और examination information में समय-समय पर amendments और updates आने के कारण किसी article में outdated या incorrect information रह सकती है।</p>
          <p>अगर आपको किसी article में गलती दिखाई देती है, तो आप हमें correction request भेज सकते हैं।</p>

          <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', color: 'var(--color-primary)' }}>किस तरह की गलती Report कर सकते हैं?</h2>
          <p>आप निम्न प्रकार की information report कर सकते हैं:</p>
          <ul className="premium-list">
            <li>गलत recruitment date</li>
            <li>गलत application last date</li>
            <li>गलत vacancy संख्या</li>
            <li>गलत eligibility</li>
            <li>गलत age limit</li>
            <li>गलत application fee</li>
            <li>गलत exam date</li>
            <li>गलत syllabus information</li>
            <li>गलत exam pattern</li>
            <li>outdated information</li>
            <li>broken official link</li>
            <li>गलत या incomplete government notification reference</li>
            <li>कोई अन्य factual error</li>
          </ul>

          <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', color: 'var(--color-primary)' }}>Correction कैसे भेजें?</h2>
          <p>Correction request भेजते समय कृपया:</p>
          <ol style={{ marginLeft: '20px', marginBottom: '20px' }}>
            <li>Article का URL</li>
            <li>जिस information में गलती है</li>
            <li>सही information क्या है</li>
            <li>यदि उपलब्ध हो तो official notification/source का link</li>
          </ol>
          <p>भेजें।</p>
          <p><strong>Email:</strong> <a href="mailto:contact@cgssb.com.in" style={{ color: 'var(--color-primary)' }}>contact@cgssb.com.in</a></p>
          <p>या हमारी Contact Us page के माध्यम से message भेज सकते हैं।</p>

          <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', color: 'var(--color-primary)' }}>हम Correction Request को कैसे Review करते हैं?</h2>
          <p>Correction मिलने के बाद हम उपलब्ध official source से information verify करने का प्रयास करेंगे।</p>
          <p>अगर correction सही पाया जाता है, तो article में आवश्यक बदलाव किया जाएगा।</p>
          <p>हम बिना verification के केवल user द्वारा भेजी गई information को automatically publish नहीं करते।</p>

          <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', color: 'var(--color-primary)' }}>Official Source को प्राथमिकता</h2>
          <p>अगर हमारे article और official government notification में अंतर मिलता है, तो official government notification को प्राथमिकता दी जाएगी।</p>
          <p>Government department द्वारा जारी नया amendment पुराने information को बदल सकता है। ऐसी स्थिति में article को latest official information के अनुसार update किया जाएगा।</p>

          <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', color: 'var(--color-primary)' }}>Correction के बाद क्या होगा?</h2>
          <p>महत्वपूर्ण factual correction होने पर article की information update की जाएगी और जहाँ आवश्यक होगा वहाँ Last Updated date भी बदली जाएगी।</p>
          <p>हर छोटी grammatical या formatting change के लिए अलग correction note प्रकाशित करना आवश्यक नहीं है।</p>

          <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', color: 'var(--color-primary)' }}>पुराने Articles</h2>
          <p>कुछ articles historical information के लिए भी website पर उपलब्ध रह सकते हैं।</p>
          <p>ऐसे articles में यदि information किसी पुराने recruitment cycle से संबंधित है, तो readers को article की publication/update date और संबंधित official notification जरूर देखना चाहिए।</p>

          <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', color: 'var(--color-primary)' }}>हमारा उद्देश्य</h2>
          <p>हमारा उद्देश्य गलत information फैलाना नहीं, बल्कि students और job seekers को reliable और understandable information उपलब्ध कराना है।</p>
          <p>अगर आपको कोई error दिखाई देता है, तो उसे report करने में हमारी मदद करें।</p>
          <p><strong>Correction Email:</strong> <a href="mailto:contact@cgssb.com.in" style={{ color: 'var(--color-primary)' }}>contact@cgssb.com.in</a></p>
        </div>
      </article>
    </div>
  );
}
