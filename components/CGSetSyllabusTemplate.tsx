import React from 'react';
import { CGSetSubject } from '@/lib/cgSetSubjects';
import AuthorByline from '@/components/AuthorByline';
import ArticleFooter from '@/components/ArticleFooter';

interface Props {
  subject: CGSetSubject;
}

export default function CGSetSyllabusTemplate({ subject }: Props) {
  return (
    <div className="container premium-article-container" style={{ paddingTop: '40px' }}>
      
      <div style={{ marginBottom: '25px', fontSize: '0.95rem', color: 'var(--text-muted)' }}>
        <a href="/" className="hover-primary">Home</a> &raquo; <a href="/jobs" className="hover-primary">Jobs</a> &raquo; <a href="/jobs/cg-set-2026" className="hover-primary">CG SET 2026</a> &raquo; <span style={{ color: 'var(--color-primary)', fontWeight: '600' }}>{subject.nameEn} Syllabus</span>
      </div>

      <article className="premium-card" style={{ padding: '0', overflow: 'hidden' }}>
        
        {/* Clean Header Section */}
        <header style={{ padding: '40px', borderBottom: '1px solid var(--border-color)', backgroundColor: '#ffffff', borderTopLeftRadius: '16px', borderTopRightRadius: '16px' }}>
          <span style={{ 
            backgroundColor: '#eff6ff', color: 'var(--color-primary)', border: '1px solid #bfdbfe',
            padding: '6px 16px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 'bold', display: 'inline-block', marginBottom: '15px'
          }}>
            CG SET Paper-II Syllabus
          </span>
          <h1 style={{ color: 'var(--text-main)', fontSize: '2.4rem', fontWeight: '800', lineHeight: '1.3', marginBottom: '15px' }}>
            CG SET {subject.nameEn} Syllabus 2026: {subject.nameHi} Exam Pattern & Preparation Tips
          </h1>
        </header>

        <section className="seo-content-section" style={{ padding: '40px' }}>
          
          <AuthorByline date="16 August 2026" />

          <p className="content-paragraph">
            छत्तीसगढ़ राज्य पात्रता परीक्षा (CG SET) 2026 के लिए <strong>{subject.nameEn} ({subject.nameHi})</strong> विषय का विस्तृत Syllabus और Exam Pattern जारी कर दिया गया है। जो Candidates Assistant Professor (असिस्टेंट प्रोफेसर) पद के लिए <strong>{subject.nameEn}</strong> विषय से आवेदन कर रहे हैं, उनके लिए Paper-II की सटीक जानकारी होना बेहद जरूरी है।
          </p>

          <p className="content-paragraph">
            इस पेज पर हमने <strong>CG SET {subject.nameEn} Syllabus</strong> से संबंधित परीक्षा का पैटर्न, कुल अंक, महत्वपूर्ण टॉपिक्स और आधिकारिक पीडीएफ (PDF) डाउनलोड करने का लिंक उपलब्ध कराया है ताकि आप अपनी तैयारी को सही दिशा दे सकें।
          </p>

          <h2 className="article-section-title">CG SET {subject.nameEn} Exam Pattern 2026</h2>
          <p className="content-paragraph">
            CG SET परीक्षा में दो पेपर होते हैं: Paper-I (General) और Paper-II (Subject Specific)। चूँकि आपका विषय <strong>{subject.nameEn}</strong> है, इसलिए Paper-II में सिर्फ {subject.nameHi} से जुड़े प्रश्न ही पूछे जाएंगे।
          </p>

          <div className="premium-table-wrapper">
            <table className="premium-table">
              <thead>
                <tr>
                  <th>Paper</th>
                  <th>विषय (Subject)</th>
                  <th>प्रश्नों की संख्या</th>
                  <th>कुल अंक</th>
                  <th>समय</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Paper-I</strong></td>
                  <td>General (Teaching & Research Aptitude)</td>
                  <td>50</td>
                  <td>100</td>
                  <td>1 घंटा</td>
                </tr>
                <tr>
                  <td><strong style={{ color: 'var(--color-primary)' }}>Paper-II</strong></td>
                  <td style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>{subject.nameEn} ({subject.nameHi})</td>
                  <td>100</td>
                  <td>200</td>
                  <td>2 घंटे</td>
                </tr>
                <tr>
                  <td><strong>Total</strong></td>
                  <td>-</td>
                  <td><strong>150 Questions</strong></td>
                  <td><strong>300 Marks</strong></td>
                  <td><strong>3 Hours</strong></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="premium-alert">
            <strong style={{ fontSize: '1.1rem', display: 'block', marginBottom: '5px' }}>⚠️ No Negative Marking</strong>
            Paper-I और Paper-II ({subject.nameEn}) दोनों में कोई नेगेटिव मार्किंग (Negative Marking) नहीं होगी। प्रत्येक सही उत्तर के लिए 2 अंक दिए जाएंगे।
          </div>

          <h2 className="article-section-title">How to Prepare for CG SET {subject.nameEn}?</h2>
          <p className="content-paragraph">
            {subject.nameHi} विषय में अच्छा स्कोर करने के लिए आपको नीचे दी गई रणनीति (Strategy) अपनानी चाहिए:
          </p>
          <ul className="premium-list">
            <li><strong>Official Syllabus:</strong> सबसे पहले <em>{subject.nameEn}</em> के आधिकारिक सिलेबस (Official Syllabus) का प्रिंटआउट निकालें और हर यूनिट को समझें।</li>
            <li><strong>Previous Year Papers:</strong> पिछले सालों में पूछे गए {subject.nameHi} के प्रश्नों का विश्लेषण करें। इससे आपको महत्वपूर्ण टॉपिक्स (High Weightage Topics) का पता चलेगा।</li>
            <li><strong>Mock Tests:</strong> समय प्रबंधन (Time Management) के लिए नियमित रूप से 100 प्रश्नों के मॉक टेस्ट हल करें।</li>
            <li><strong>Revision:</strong> {subject.nameEn} के कठिन टॉपिक्स के लिए शॉर्ट नोट्स (Short Notes) बनाएं ताकि परीक्षा से पहले रिवीजन आसान हो।</li>
          </ul>

          <h2 className="article-section-title">Download CG SET {subject.nameEn} Syllabus PDF</h2>
          <p className="content-paragraph">
            अपनी तैयारी शुरू करने से पहले उच्च शिक्षा विभाग (व्यापम) द्वारा जारी किया गया आधिकारिक <strong>{subject.nameEn}</strong> विषय का सिलेबस ज़रूर डाउनलोड करें:
          </p>

          <div style={{ margin: '30px 0' }}>
            <a href={subject.pdfLink} target="_blank" rel="noopener noreferrer" 
               style={{ background: 'var(--color-primary)', color: 'white', padding: '15px 30px', borderRadius: '8px', fontWeight: 'bold', display: 'inline-block', transition: 'background 0.2s', boxShadow: '0 4px 6px rgba(37,99,235,0.2)' }}>
              📄 Download {subject.nameEn} ({subject.nameHi}) Official Syllabus PDF
            </a>
          </div>

          <h2 className="article-section-title">Frequently Asked Questions (FAQs)</h2>
          
          <div className="faq-section" style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '40px' }}>
            <div style={{ background: '#ffffff', padding: '15px 20px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
              <h3 style={{ fontSize: '1.1rem', margin: 0, color: 'var(--text-main)' }}>Q: CG SET {subject.nameEn} परीक्षा में कितने प्रश्न पूछे जाएंगे?</h3>
              <p style={{ margin: '10px 0 0 0', color: 'var(--text-muted)' }}>A: Paper-II ({subject.nameEn}) में कुल 100 Objective Type प्रश्न पूछे जाएंगे, जो कुल 200 अंकों के होंगे।</p>
            </div>
            <div style={{ background: '#ffffff', padding: '15px 20px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
              <h3 style={{ fontSize: '1.1rem', margin: 0, color: 'var(--text-main)' }}>Q: क्या {subject.nameEn} पेपर में नेगेटिव मार्किंग है?</h3>
              <p style={{ margin: '10px 0 0 0', color: 'var(--text-muted)' }}>A: नहीं, CG SET परीक्षा में कोई नेगेटिव मार्किंग नहीं है।</p>
            </div>
            <div style={{ background: '#ffffff', padding: '15px 20px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
              <h3 style={{ fontSize: '1.1rem', margin: 0, color: 'var(--text-main)' }}>Q: CG SET {subject.nameEn} के लिए न्यूनतम अर्हता (Qualifying Marks) क्या है?</h3>
              <p style={{ margin: '10px 0 0 0', color: 'var(--text-muted)' }}>A: सामान्य (General) वर्ग के लिए दोनों पेपर मिलाकर 40% और आरक्षित (Reserved) वर्ग के लिए 35% अंक आवश्यक हैं। साथ ही टॉप 6% में आना अनिवार्य है।</p>
            </div>
          </div>

          <ArticleFooter 
            date="16 August 2026" 
            sourceText="Official CG Vyapam Notification & Exam Instructions"
            sourceLink="https://vyapamcg.cgstate.gov.in/"
          />

        </section>
      </article>
    </div>
  );
}
