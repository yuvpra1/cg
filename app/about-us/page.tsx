import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - CGSSB',
  description: 'About CGSSB - Your trusted source for Chhattisgarh recruitment, exams, and government jobs information.',
};

export default function AboutUsPage() {
  return (
    <div className="container" style={{ paddingTop: '60px', paddingBottom: '60px', minHeight: '60vh', maxWidth: '800px' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '30px', color: 'var(--color-primary)' }}>
        About Us
      </h1>
      
      <div className="card" style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-main)' }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '20px', color: 'var(--text-main)' }}>CGSSB के बारे में</h2>
        
        <p style={{ marginBottom: '15px' }}>
          <strong>CGSSB</strong> Chhattisgarh के students, job aspirants और अन्य लोगों के लिए बनाई गई एक independent informational website है। हमारा उद्देश्य Chhattisgarh से जुड़ी <strong>government jobs, recruitment, exams, admit cards, results, answer keys, syllabus, previous year papers, education updates और अन्य महत्वपूर्ण जानकारी</strong> को आसान भाषा में एक जगह उपलब्ध कराना है।
        </p>
        
        <p style={{ marginBottom: '15px' }}>
          सरकारी भर्ती की जानकारी अक्सर अलग-अलग notifications, official websites और अलग-अलग pages पर उपलब्ध होती है। एक candidate के लिए हर update को ढूंढना और समझना हमेशा आसान नहीं होता। इसी समस्या को ध्यान में रखते हुए हमने CGSSB को एक ऐसी जगह के रूप में बनाया है जहाँ किसी recruitment या examination से जुड़ी जरूरी जानकारी को सरल और व्यवस्थित तरीके से समझा जा सके।
        </p>
        
        <p style={{ marginBottom: '30px' }}>
          हमारा उद्देश्य केवल किसी notification को दोबारा publish करना नहीं है। हम official information को समझकर उसे <strong>simple, readable और useful format</strong> में प्रस्तुत करने की कोशिश करते हैं, ताकि candidates को eligibility, important dates, application process, exam pattern, admit card, answer key और result जैसी जानकारी आसानी से समझ आ सके।
        </p>

        <h2 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>हमारी जानकारी कहाँ से आती है?</h2>
        <p style={{ marginBottom: '15px' }}>
          Recruitment और examination से संबंधित जानकारी तैयार करते समय हम <strong>official government sources और संबंधित examination authorities द्वारा जारी notifications</strong> को प्राथमिक source मानते हैं।
        </p>
        <p style={{ marginBottom: '15px' }}>
          जहाँ संभव होता है, हम article में संबंधित <strong>official notification, official website या official application/result page</strong> का link भी देते हैं।
        </p>
        <p style={{ marginBottom: '15px' }}>हमारी सामान्य प्रक्रिया है:</p>
        <p style={{ padding: '15px', backgroundColor: 'var(--card-bg-hover)', borderLeft: '4px solid var(--color-primary)', fontWeight: '600', marginBottom: '15px' }}>
          Official Source → Information Verify → आसान भाषा में लिखना → Publish → जरूरत पड़ने पर Update
        </p>
        <p style={{ marginBottom: '30px' }}>
          अगर किसी recruitment की date, eligibility, application process या अन्य महत्वपूर्ण जानकारी official source में बदलती है, तो हम उपलब्ध जानकारी को review करके article को update करने की कोशिश करते हैं।
        </p>

        <h2 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>क्या CGSSB कोई सरकारी वेबसाइट है?</h2>
        <p style={{ marginBottom: '15px' }}>
          <strong>नहीं। CGSSB एक independent informational website है।</strong>
        </p>
        <p style={{ marginBottom: '15px' }}>
          यह किसी Government Department, Chhattisgarh Staff Selection Board (CGSSB), Chhattisgarh Professional Examination Board (CG Vyapam), CGPSC या किसी अन्य सरकारी संस्था की official website नहीं है।
        </p>
        <p style={{ marginBottom: '15px' }}>
          हमारा किसी government department या examination authority के साथ कोई official affiliation होने का दावा नहीं है। सरकारी भर्ती से संबंधित किसी भी महत्वपूर्ण जानकारी के लिए candidates को हमारी website पर दी गई जानकारी के साथ <strong>संबंधित official government notification और official website से भी details verify करनी चाहिए।</strong>
        </p>
        
        <div style={{ backgroundColor: '#fffbe8', padding: '20px', borderLeft: '4px solid #f59e0b', marginBottom: '30px', fontSize: '0.95rem' }}>
          <strong>Important Disclaimer:</strong> CGSSB is an independent informational website and is not affiliated with, endorsed by, or operated by the Government of Chhattisgarh, Chhattisgarh Staff Selection Board (CGSSB), Chhattisgarh Professional Examination Board (CG Vyapam), CGPSC, or any other government department or examination authority. Official information may change from time to time. Users should always verify important details from the relevant official government website or notification before taking any action.
        </div>

        <h2 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>हमारा उद्देश्य</h2>
        <p style={{ marginBottom: '15px' }}>
          हमारा उद्देश्य Chhattisgarh के candidates के लिए एक ऐसी useful information resource तैयार करना है जहाँ उन्हें अलग-अलग recruitment और examination से संबंधित जानकारी आसानी से मिल सके।
        </p>
        <p style={{ marginBottom: '15px' }}>
          हम चाहते हैं कि CGSSB पर आने वाला candidate सिर्फ यह न जाने कि <strong>"कौन-सी vacancy आई है"</strong>, बल्कि यह भी समझ सके कि:
        </p>
        <p style={{ padding: '15px', backgroundColor: '#e0e7ff', color: 'var(--color-primary)', borderRadius: '8px', fontWeight: '600', marginBottom: '30px', textAlign: 'center' }}>
          कौन apply कर सकता है → कैसे apply करना है → exam कब है → तैयारी कैसे करनी है → admit card कहाँ मिलेगा → result कैसे check करना है।
        </p>
      </div>
    </div>
  );
}
