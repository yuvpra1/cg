import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Editorial Policy | CGSSB.com.in',
  description: 'Editorial Policy for CGSSB.com.in.',
};

export default function EditorialPolicy() {
  return (
    <div className="container" style={{ paddingTop: '60px', paddingBottom: '60px', maxWidth: '800px' }}>
      <article className="card" style={{ padding: '40px', lineHeight: '1.8' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '10px', color: 'var(--color-primary)' }}>Editorial Policy</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}><strong>Last Updated: 16 August 2026</strong></p>

        <div className="content-wrapper" style={{ color: 'var(--text-main)', fontSize: '1.05rem' }}>
          <p>CGSSB.com.in एक independent informational website है, जिसका उद्देश्य छत्तीसगढ़ के students, job seekers और competitive-exam aspirants को government jobs, recruitment, examinations, admit cards, results, syllabus और education से संबंधित जानकारी आसान भाषा में उपलब्ध कराना है।</p>
          <p>हमारा उद्देश्य official government information को replace करना नहीं, बल्कि उसे समझने और उपयोग करने में आसान बनाना है।</p>

          <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', color: 'var(--color-primary)' }}>हमारी Information कहाँ से आती है?</h2>
          <p>हम recruitment और examination से संबंधित information के लिए मुख्य रूप से संबंधित official government websites, official notifications, recruitment advertisements, examination instructions और अन्य सरकारी documents को source के रूप में देखते हैं।</p>
          <p>जहाँ संभव हो, article में relevant official source या notification का link भी दिया जाता है ताकि readers मूल information को स्वयं verify कर सकें।</p>

          <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', color: 'var(--color-primary)' }}>हम Article कैसे तैयार करते हैं?</h2>
          <p>हमारा सामान्य editorial process है:</p>
          <p style={{ background: '#f8fafc', padding: '15px', borderRadius: '8px', border: '1px solid var(--border-color)', fontWeight: 'bold' }}>Official Source → Information Review → सरल भाषा में Explanation → Source Link → Publish → Update</p>
          <p>किसी notification को केवल copy करके publish करने के बजाय हमारा प्रयास रहता है कि उसकी महत्वपूर्ण जानकारी को students के लिए आसान भाषा में समझाया जाए。</p>
          <p>उदाहरण के लिए किसी recruitment article में हम eligibility, vacancy, important dates, syllabus, exam pattern, application process और selection process को अलग-अलग sections में समझा सकते हैं।</p>

          <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', color: 'var(--color-primary)' }}>Accuracy और Verification</h2>
          <p>हम information को publish करने से पहले उपलब्ध official source से verify करने का प्रयास करते हैं।</p>
          <p>हालांकि government recruitment में information समय के साथ बदल सकती है। Vacancy, exam date, eligibility, syllabus, application dates या अन्य conditions में बाद में amendment या correction जारी हो सकता है।</p>
          <p>इसलिए readers को किसी भी महत्वपूर्ण decision से पहले latest official notification जरूर check करना चाहिए।</p>

          <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', color: 'var(--color-primary)' }}>Updates</h2>
          <p>अगर किसी recruitment या examination से संबंधित नया official update जारी होता है, तो हम relevant article को update करने का प्रयास करते हैं।</p>
          <p>Article में जहाँ appropriate हो, Last Updated date दिखाई जाती है।</p>
          <p>अगर किसी पुराने article में नया amendment महत्वपूर्ण बदलाव करता है, तो हम पुराने information को update करके latest information prominently दिखाने का प्रयास करते हैं।</p>

          <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', color: 'var(--color-primary)' }}>Originality</h2>
          <p>हमारा उद्देश्य केवल दूसरे websites से content copy करना नहीं है।</p>
          <p>हम official information को आधार बनाकर उसे अपनी भाषा और structure में explain करने का प्रयास करते हैं।</p>
          <p>Official government documents, notifications, rules और public information अपने respective issuing authorities के sources हैं। हम उन documents पर ownership claim नहीं करते।</p>

          <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', color: 'var(--color-primary)' }}>AI और Content Creation</h2>
          <p>CGSSB.com.in पर published content को readers के लिए useful, clear और natural बनाने पर focus किया जाता है।</p>
          <p>जहाँ information official documents से ली जाती है, वहाँ हमारा उद्देश्य source की information को गलत तरीके से बदलना या misleading interpretation देना नहीं है।</p>

          <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', color: 'var(--color-primary)' }}>Corrections</h2>
          <p>अगर किसी article में factual error, outdated information या incorrect information मिलती है, तो readers हमें इसकी जानकारी दे सकते हैं।</p>
          <p>हम correction request को relevant official source से verify करने के बाद आवश्यक होने पर article को update करेंगे।</p>
          <p>Correction के लिए हमारी <a href="/correction-policy" style={{ color: 'var(--color-primary)' }}>Correction Policy</a> देखें।</p>

          <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', color: 'var(--color-primary)' }}>Government Affiliation</h2>
          <p>CGSSB.com.in एक independent informational website है।</p>
          <p>हम Chhattisgarh Government, CGSSB, CG Vyapam, CGPSC या किसी अन्य government department/examination authority के official representative नहीं हैं।</p>
          <p>जहाँ official information उपलब्ध होती है, readers को संबंधित government website या original notification से information verify करने की सलाह दी जाती है।</p>

          <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', color: 'var(--color-primary)' }}>Editorial Responsibility</h2>
          <p>हम useful और accurate information देने का प्रयास करते हैं, लेकिन किसी भी article को official government notification का replacement नहीं माना जाना चाहिए।</p>
          <p>Official notification हमेशा final source रहेगा।</p>
        </div>
      </article>
    </div>
  );
}
