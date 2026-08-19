import AgeCalculator from '@/components/AgeCalculator';

export const metadata = {
  title: 'Age Calculator for Government Exams | CGSSB',
  description: 'Calculate your exact age (years, months, days) as of a specific date for CG Police, CGPSC, and Vyapam exam notifications.',
};

export default function AgeCalculatorPage() {
  return (
    <div className="container" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
      
      {/* Tool Header */}
      <section style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>
          Exam Age Calculator
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
          Most government jobs require you to calculate your exact age on a specific cutoff date (e.g., January 1). Use this tool to find your precise age in years, months, and days.
        </p>
      </section>

      {/* Calculator Interface */}
      <section>
        <AgeCalculator />
      </section>

      {/* SEO Content / Instructions */}
      <section style={{ marginTop: '60px', maxWidth: '800px', margin: '60px auto 0' }}>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '15px' }}>सरकारी परीक्षाओं के लिए Age Calculator क्यों जरूरी है?</h2>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '20px' }}>
          CGPSC, CG Vyapam, छ.ग. पुलिस भर्ती (CG Police Recruitment) और शिक्षक भर्ती जैसी सरकारी परीक्षाओं में आवेदन करने से पहले उम्मीदवारों को अपनी आयु (Age) की सटीक गणना करनी होती है। Notification में दी गई <strong>Cut-off Date</strong> (जैसे 1 जनवरी 2026) के अनुसार आपकी उम्र क्या है, यह जानने के लिए हमारा <strong>Age Calculator for Government Exams</strong> सबसे बेहतरीन टूल है।
        </p>

        <h3 style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginTop: '30px', marginBottom: '15px' }}>इस टूल का उपयोग कैसे करें? (How to use?)</h3>
        <ul style={{ paddingLeft: '20px', color: 'var(--text-muted)', marginBottom: '30px', lineHeight: '1.8' }}>
          <li><strong>अपनी जन्मतिथि चुनें (Select DOB):</strong> 10वीं की मार्कशीट में दर्ज जन्मतिथि को कैलेंडर से चुनें।</li>
          <li><strong>कट-ऑफ डेट दर्ज करें (Target Date):</strong> ऑफिशियल नोटिफिकेशन में दी गई तारीख दर्ज करें, जिस तारीख से उम्र की गणना मांगी गई है।</li>
          <li><strong>कैलकुलेट पर क्लिक करें:</strong> एक क्लिक में अपनी उम्र वर्ष, महीने और दिन (Years, Months, Days) में प्राप्त करें।</li>
        </ul>

        <h3 style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginTop: '30px', marginBottom: '15px' }}>CG Vyapam & CGPSC Age Eligibility Rules</h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '20px' }}>
          छत्तीसगढ़ में सामान्य वर्ग के लिए आयु सीमा अक्सर 21 से 30 या 35 वर्ष होती है। इसके अलावा, SC/ST, OBC, और महिला उम्मीदवारों को आयु सीमा में छूट (Age Relaxation) दी जाती है। एक भी दिन की गलती आपके फॉर्म को रिजेक्ट करा सकती है, इसलिए 100% सटीक गणना के लिए इस टूल का ही प्रयोग करें।
        </p>

        <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '8px', borderLeft: '4px solid var(--color-primary)', marginTop: '30px' }}>
          <strong>Pro Tip:</strong> फॉर्म भरते समय अपने Age Proof के तौर पर केवल 10th Class Board Certificate का ही उपयोग करें। आधार कार्ड या अन्य आईडी की जन्मतिथि मान्य नहीं होती है यदि वह मार्कशीट से अलग है।
        </div>
      </section>

    </div>
  );
}
