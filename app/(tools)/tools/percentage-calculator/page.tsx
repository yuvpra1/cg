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
      <section style={{ marginTop: '60px', maxWidth: '800px', margin: '60px auto 0' }}>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '15px' }}>सरकारी फॉर्म भरते समय Percentage Calculator क्यों जरूरी है?</h2>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '20px' }}>
          CG Vyapam, CGPSC, SSC, और Railway जैसे सभी सरकारी नौकरी के ऑनलाइन फॉर्म में एजुकेशनल क्वालिफिकेशन डिटेल्स (Educational Details) भरते समय 10वीं, 12वीं और ग्रेजुएशन के अंकों का सटीक प्रतिशत (Marks Percentage) दर्ज करना अनिवार्य होता है। अगर आप अपने <strong>Obtained Marks</strong> और <strong>Total Marks</strong> से प्रतिशत निकालने में गलती करते हैं, तो डॉक्युमेंट वेरिफिकेशन (Document Verification) के समय परेशानी हो सकती है। हमारा यह टूल आपको बिना किसी त्रुटि के दशमलव के दो अंकों (2 decimal places) तक सटीक प्रतिशत निकाल कर देता है।
        </p>

        <h3 style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginTop: '30px', marginBottom: '15px' }}>प्रतिशत (Percentage) की गणना कैसे करें?</h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '20px' }}>
          साधारण रूप से प्रतिशत निकालने का फॉर्मूला (Formula) है: <br/>
          <strong>(प्राप्त अंक ÷ कुल अंक) × 100</strong> <br/>
          लेकिन आपको मैन्युअली कैलकुलेट करने की ज़रूरत नहीं है। इस टूल का उपयोग करके आप एक सेकंड में रिजल्ट प्राप्त कर सकते हैं:
        </p>
        <ul style={{ paddingLeft: '20px', color: 'var(--text-muted)', marginBottom: '30px', lineHeight: '1.8' }}>
          <li><strong>Obtained Marks (प्राप्त अंक):</strong> वह अंक जो आपको परीक्षा में प्राप्त हुए हैं (जैसे 450)।</li>
          <li><strong>Total Marks (कुल अंक):</strong> परीक्षा के अधिकतम अंक (जैसे 500 या 600)।</li>
          <li>दोनों बॉक्स में सही अंक दर्ज करें और <code>Calculate Percentage</code> पर क्लिक करें।</li>
        </ul>

        <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '8px', borderLeft: '4px solid var(--color-primary)', marginTop: '30px' }}>
          <strong>CG Vyapam Tip:</strong> ऑनलाइन एप्लीकेशन फॉर्म में सामान्यतः दशमलव के बाद 2 अंकों (जैसे 75.33%) तक की जानकारी दर्ज करनी होती है। यह टूल आपको उसी फॉर्मेट में सही उत्तर प्रदान करता है।
        </div>
      </section>

    </div>
  );
}
