import TypingTest from '@/components/TypingTest';

export const metadata = {
  title: 'Typing Speed Test (WPM & KPH) for Govt Exams | CGSSB',
  description: 'Practice your typing speed for CG Vyapam Assistant Grade 3 and Data Entry Operator (DEO) exams. Calculate WPM, Accuracy, and Key Depressions per Hour (KPH).',
};

export default function TypingTestPage() {
  return (
    <div className="container" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
      
      {/* Tool Header */}
      <section style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>
          Govt Exam Typing Speed Test
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto' }}>
          Master your typing skills for Assistant Grade-3, Steno, and Data Entry Operator exams. This tool accurately measures your Words Per Minute (WPM), Accuracy, and Key Depressions Per Hour (KPH).
        </p>
      </section>

      {/* Test Interface */}
      <section>
        <TypingTest />
      </section>

      {/* SEO Content / Instructions */}
      <section style={{ marginTop: '60px', maxWidth: '800px', margin: '60px auto 0' }}>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '15px' }}>सरकारी परीक्षाओं में Typing Speed (KPH & WPM) का महत्व</h2>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '20px' }}>
          CG Vyapam (सहायक ग्रेड-3), डाटा एंट्री ऑपरेटर (DEO), स्टेनोग्राफर, और SSC CHSL जैसी क्लर्क स्तरीय परीक्षाओं में लिखित परीक्षा पास करने के बाद <strong>Skill Test (Typing Test)</strong> देना अनिवार्य होता है। छत्तीसगढ़ की अधिकांश परीक्षाओं में उम्मीदवारों को <strong>5000 Key Depressions Per Hour (KPH)</strong> से लेकर 8000 KPH की गति (Speed) प्रदर्शित करनी होती है। यह टूल आपको परीक्षा जैसे माहौल में अपनी टाइपिंग स्पीड (Words Per Minute) और एक्यूरेसी (Accuracy) जांचने की सुविधा देता है।
        </p>

        <h3 style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginTop: '30px', marginBottom: '15px' }}>KPH और WPM में क्या अंतर है?</h3>
        <ul style={{ paddingLeft: '20px', color: 'var(--text-muted)', marginBottom: '30px', lineHeight: '1.8' }}>
          <li><strong>WPM (Words Per Minute):</strong> आप एक मिनट में कितने शब्द टाइप करते हैं। आमतौर पर 1 Word = 5 Characters माना जाता है।</li>
          <li><strong>KPH (Key Depressions Per Hour):</strong> 1 घंटे में आपने कीबोर्ड की 'Keys' कितनी बार दबाई हैं। 5000 KPH का मतलब है लगभग 16-17 WPM की स्पीड। 8000 KPH का मतलब है 25-27 WPM की स्पीड।</li>
        </ul>

        <h3 style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginTop: '30px', marginBottom: '15px' }}>Typing Speed और Accuracy कैसे सुधारें?</h3>
        <ul style={{ paddingLeft: '20px', color: 'var(--text-muted)', marginBottom: '30px', lineHeight: '1.8' }}>
          <li><strong>एक्यूरेसी पर ध्यान दें (Focus on Accuracy):</strong> शुरुआत में स्पीड से ज़्यादा अपनी एक्यूरेसी (Accuracy) को 95%+ रखने की कोशिश करें। गलतियाँ सुधारने में जो समय लगता है, वह आपकी ओवरऑल WPM कम कर देता है।</li>
          <li><strong>कीबोर्ड को न देखें (Touch Typing):</strong> उंगलियों को कीबोर्ड के 'Home Row' (A S D F - J K L ;) पर रखें और स्क्रीन पर देखते हुए टाइप करें।</li>
          <li><strong>रोजाना अभ्यास करें:</strong> इस ऑनलाइन टाइपिंग टूल का उपयोग करके प्रतिदिन 15-20 मिनट प्रैक्टिस करें।</li>
        </ul>

        <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '8px', borderLeft: '4px solid var(--color-primary)', marginTop: '30px' }}>
          <strong>Exam Tip:</strong> टाइपिंग टेस्ट के दौरान Backspace का इस्तेमाल कम से कम करें। कई सरकारी टाइपिंग टेस्ट सॉफ्टवेयर में Backspace काम नहीं करता है या उसके इस्तेमाल पर पेनल्टी (Penalty) लगाई जाती है।
        </div>
      </section>

    </div>
  );
}
