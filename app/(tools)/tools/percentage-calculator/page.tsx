import PercentageCalculator from '@/components/PercentageCalculator';

export const metadata = {
  title: 'Marks Percentage Calculator for Govt Exams | CGSSB',
  description: 'Quickly calculate your 10th, 12th, or Graduation marks percentage for CGSSB, CGPSC, and other online application forms.',
};

export default function PercentageCalculatorPage() {
  return (
    <div className="container" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
      
      {/* Tool Header */}
      <section style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>
          Marks Percentage Calculator
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
          Most online application forms for CGSSB (Vyapam) and CGPSC require you to enter your exact academic percentage. Use this tool to calculate your marks percentage instantly.
        </p>
      </section>

      {/* Calculator Interface */}
      <section>
        <PercentageCalculator />
      </section>

      {/* SEO Content / Instructions */}
      <section style={{ marginTop: '60px', maxWidth: '800px', margin: '60px auto 0' }} className="content-paragraph">
        <h2 className="article-section-title">Marks Percentage Calculator for Government Exams</h2>
        <p>
          Government job application forms (जैसे CGSSB, CGPSC, Vyapam, Railway, SSC) भरते समय candidates को अपनी educational qualifications की details देनी होती हैं। इन details में 10th, 12th, Graduation, और Post-Graduation के <strong>Obtained Marks (प्राप्तांक)</strong> और <strong>Total Marks (पूर्णांक)</strong> के साथ-साथ <strong>Percentage (%)</strong> भी भरना अनिवार्य होता है।
        </p>
        <p>
          कई बार marksheet पर सिर्फ grades या CGPA दिया होता है, या फिर total marks बहुत अजीब संख्या (जैसे 500, 600, 800) में होते हैं, जिससे percentage को सटीक (accurate) तरीके से calculate करना मुश्किल हो जाता है। 
        </p>
        <p>
          इसी समस्या को दूर करने के लिए <strong>CGSSB.com.in का Marks Percentage Calculator</strong> तैयार किया गया है। इसकी मदद से आप कुछ ही seconds में अपना exact percentage निकाल सकते हैं, जो government application forms के लिए 100% सटीक होता है।
        </p>

        <h2 className="article-section-title">Percentage Calculator कैसे काम करता है?</h2>
        <p>यह tool आपके द्वारा डाले गए numbers के आधार पर percentage calculate करता है। इसका formula बहुत ही साधारण है:</p>
        <blockquote style={{ borderLeft: '4px solid var(--color-primary)', paddingLeft: '15px', color: 'var(--text-main)', fontStyle: 'italic', background: 'var(--card-bg-hover)', padding: '15px' }}>
          <strong>Percentage Formula:</strong> (Obtained Marks / Total Marks) × 100
        </blockquote>
        <p>उदाहरण के लिए, यदि आपके 12th board exams में 500 में से 380 marks आए हैं, तो:</p>
        <p><strong>(380 / 500) × 100 = 76%</strong></p>

        <h2 className="article-section-title">इस Tool का उपयोग कैसे करें?</h2>
        <p>Percentage calculate करने की प्रक्रिया बहुत ही आसान है:</p>
        <ul>
          <li><strong>Step 1:</strong> "Total Marks" (पूर्णांक) के box में वह maximum marks डालें जो exam में possible थे (e.g., 500, 600, 1000).</li>
          <li><strong>Step 2:</strong> "Obtained Marks" (प्राप्तांक) के box में वह marks डालें जो आपने हासिल किए हैं।</li>
          <li><strong>Step 3:</strong> "Calculate" बटन पर click करें।</li>
          <li><strong>Step 4:</strong> आपका exact percentage स्क्रीन पर दिखाई देगा। इसे आप सीधे अपने government form में copy-paste कर सकते हैं।</li>
        </ul>

        <h2 className="article-section-title">Government Forms में Percentage डालते समय ध्यान रखने योग्य बातें</h2>
        <h3>1. Decimal (दशमलव) के बाद 2 अंक</h3>
        <p>अधिकांश government job portals (जैसे CG Vyapam या SSC) percentage को दशमलव के दो स्थानों (up to 2 decimal places) तक मांगते हैं। उदाहरण: यदि आपका percentage 76.543% है, तो आपको form में <strong>76.54%</strong> भरना चाहिए। हमारा tool automatically आपको 2 decimal places तक result देता है।</p>
        
        <h3>2. Round Off करने से बचें</h3>
        <p>कई candidates अपने 59.8% को 60% लिखकर form भर देते हैं। <strong>ऐसा बिलकुल न करें!</strong> Document verification के समय यह आपके rejection का कारण बन सकता है। जो exact percentage है, वही form में भरें।</p>
        
        <h3>3. CGPA को Percentage में कैसे बदलें?</h3>
        <p>यदि आपकी marksheet (जैसे CBSE board या Engineering degrees) में CGPA दिया गया है, तो उसे percentage में बदलने का एक अलग formula होता है। CBSE board के लिए आम तौर पर CGPA को <strong>9.5</strong> से multiply किया जाता है (e.g., 8.0 CGPA × 9.5 = 76%)। हालांकि, अलग-अलग Universities का formula अलग हो सकता है। इसलिए हमेशा अपनी University की official guidelines के अनुसार ही CGPA को percentage में convert करें।</p>

        <h2 className="article-section-title">CGSSB, CG Vyapam, और CGPSC के लिए क्यों उपयोगी है?</h2>
        <p>छत्तीसगढ़ में निकलने वाली विभिन्न भर्तियों जैसे Patwari, RI, ADEO, Hostal Warden, Teacher Recruitment आदि में online form भरते समय 10th, 12th और Graduation का percentage भरना अनिवार्य होता है। गलत percentage भरने से बाद में affidavit बनवाना पड़ता है या candidacy रद्द हो सकती है। हमारा tool आपको error-free calculation प्रदान करता है ताकि आप बिना किसी परेशानी के अपना form भर सकें।</p>

        <h2 className="article-section-title">Frequently Asked Questions (FAQs)</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <strong>क्या यह tool 10th और 12th दोनों के लिए काम करता है?</strong>
            <p>हाँ, आप किसी भी कक्षा या degree (10th, 12th, BA, BSc, BTech) का percentage इस tool से निकाल सकते हैं। बस आपको सही obtained marks और total marks पता होने चाहिए।</p>
          </div>
          <div>
            <strong>मेरा percentage 59.99% आ रहा है, क्या मैं इसे 60% लिख सकता हूँ?</strong>
            <p>नहीं। Government job forms में exact percentage लिखना आवश्यक है। यदि भर्ती में minimum 60% माँगा गया है, तो 59.99% होने पर आप ineligible माने जा सकते हैं।</p>
          </div>
          <div>
            <strong>CGPA को Percentage में बदलने के लिए क्या करें?</strong>
            <p>अपनी University या Board के पीछे लिखे conversion formula को देखें। यदि वह 9.5 से multiply करने को कहता है, तो खुद calculate करें। यह tool सिर्फ Marks-based calculation के लिए है।</p>
          </div>
        </div>
      </section>

    </div>
  );
}
