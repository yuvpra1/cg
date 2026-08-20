import React from 'react';
import Image from 'next/image';

export const metadata = {
  title: "Yuvraj Pratap Rajwade - Author & Publisher | CGSSB Portal",
  description: "About Yuvraj Pratap Rajwade, the independent web developer and publisher behind this platform.",
};

export default function AuthorProfile() {
  return (
    <div className="container" style={{ paddingTop: '60px', paddingBottom: '60px', maxWidth: '800px' }}>
      
      {/* Author Header */}
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <div style={{ 
          width: '120px', 
          height: '120px', 
          borderRadius: '50%', 
          overflow: 'hidden',
          margin: '0 auto 20px', 
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)' 
        }}>
          <Image 
            src={`${process.env.NEXT_PUBLIC_R2_URL}/yuvraj.webp`} 
            alt="Yuvraj Pratap Rajwade" 
            width={120} 
            height={120} 
            style={{ objectFit: 'cover' }} 
          />
        </div>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '10px', color: 'var(--text-main)' }}>Yuvraj Pratap Rajwade</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', fontWeight: '500', marginBottom: '15px' }}>Independent Web Developer & Publisher</p>
        
        {/* Social Profiles */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
          <a href="https://www.linkedin.com/in/yuvraj-pratap-rajwade-47b21019b" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', fontWeight: '600' }}>LinkedIn</a>
          <span style={{ color: 'var(--text-muted)' }}>·</span>
          <a href="https://x.com/dm_yuvraj" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', fontWeight: '600' }}>X (Twitter)</a>
        </div>
      </div>

      <div className="card" style={{ padding: '40px', lineHeight: '1.8', fontSize: '1.05rem', color: 'var(--text-main)' }}>
        
        <h2 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--color-primary)' }}>About the Author</h2>
        <p>मैं <strong>Yuvraj Pratap Rajwade</strong> हूँ और CGSSB.com.in का founder/publisher हूँ।</p>
        <p style={{ marginBottom: '30px' }}>
          मैंने CGSSB.com.in को छत्तीसगढ़ के students और job seekers के लिए एक independent informational platform के रूप में शुरू किया है। इस website का उद्देश्य government jobs, recruitment notifications, examinations, admit cards, results, syllabus और education से संबंधित information को एक जगह और आसान भाषा में उपलब्ध कराना है।
        </p>

        <h2 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--color-primary)' }}>मैं क्या करता हूँ?</h2>
        <p>CGSSB.com.in पर मेरा मुख्य काम है:</p>
        <ul className="premium-list" style={{ marginBottom: '30px' }}>
          <li>Government recruitment information को समझना और organize करना</li>
          <li>Official notifications से महत्वपूर्ण details identify करना</li>
          <li>Students के लिए complicated information को आसान भाषा में explain करना</li>
          <li>Recruitment dates और examination updates को update करना</li>
          <li>Official sources के links उपलब्ध कराना</li>
          <li>Readers द्वारा reported errors की समीक्षा करना</li>
          <li>पुराने articles में relevant updates जोड़ना</li>
        </ul>

        <h2 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--color-primary)' }}>Information Verification</h2>
        <p>Government recruitment information publish करते समय मैं संबंधित official government notification, examination instructions और government websites को primary sources मानता हूँ।</p>
        <p>किसी article में eligibility, vacancy, application date, examination date या अन्य महत्वपूर्ण information दी जाती है तो मेरा प्रयास रहता है कि उसे original official source से verify किया जाए।</p>
        <div className="premium-alert" style={{ background: 'var(--card-bg-hover)', borderColor: 'var(--border-color)', marginTop: '20px', marginBottom: '30px' }}>
          मैं किसी government department या recruitment board का employee, spokesperson या official representative नहीं हूँ। CGSSB.com.in एक independent informational website है।
        </div>

        <h2 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--color-primary)' }}>About My Work</h2>
        <p>
          मेरा मुख्य काम web development और online informational resources बनाना है। CGSSB.com.in के माध्यम से मैं छत्तीसगढ़ के students और job seekers के लिए government recruitment और education से संबंधित जानकारी को आसान और व्यवस्थित रूप में प्रस्तुत करने का प्रयास करता हूँ।
        </p>
        <p style={{ marginBottom: '30px' }}>
          मैं किसी सरकारी विभाग, परीक्षा बोर्ड या भर्ती संस्था की ओर से जानकारी प्रकाशित नहीं करता। जहाँ official information उपलब्ध होती है, वहाँ readers को संबंधित official notification और website तक पहुंचने के लिए link देने का प्रयास किया जाता है।
        </p>

        <h2 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--color-primary)' }}>मेरा Editorial Approach</h2>
        <p>मेरा focus केवल ज्यादा articles publish करने पर नहीं है।</p>
        <p>मेरा प्रयास रहता है कि किसी भर्ती या परीक्षा से संबंधित जरूरी जानकारी—जैसे eligibility, important dates, syllabus, exam pattern और selection process—एक ही जगह सरल भाषा में मिल सके। जहाँ official information जरूरी हो, वहाँ संबंधित official source का link भी दिया जाता है।</p>
        <p>इसीलिए recruitment articles में जहाँ relevant हो, मैं:</p>
        <p style={{ background: 'var(--card-bg-hover)', padding: '15px', borderRadius: '8px', border: '1px solid var(--border-color)', fontWeight: 'bold', marginBottom: '30px' }}>
          Eligibility → Vacancy → Important Dates → Application → Fee → Syllabus → Exam Pattern → Admit Card → Selection Process → Official Source
        </p>
        <p style={{ marginBottom: '30px' }}>जैसी जानकारी एक जगह रखने का प्रयास करता हूँ।</p>

        <h2 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--color-primary)' }}>Corrections और Updates</h2>
        <p>अगर किसी article में factual error या outdated information मिलती है, तो readers मुझे contact कर सकते हैं।</p>
        <p>मैं correction request को available official source से verify करने के बाद आवश्यक बदलाव करता हूँ।</p>
        <p style={{ marginBottom: '30px' }}><strong>Correction Email:</strong> <a href="mailto:contact@cgssb.com.in" style={{ color: 'var(--color-primary)' }}>contact@cgssb.com.in</a></p>

        <h2 style={{ fontSize: '1.6rem', marginBottom: '15px', color: '#ef4444' }}>⚠️ Important Notice</h2>
        <div className="premium-alert" style={{ background: 'var(--card-bg-hover)', borderColor: 'var(--border-color)' }}>
          <p style={{ marginBottom: '10px' }}>मैं CGSSB, CG Vyapam, CGPSC या छत्तीसगढ़ सरकार का official representative नहीं हूँ।</p>
          <p style={{ margin: 0 }}>CGSSB.com.in एक independent website है। Government recruitment से संबंधित अंतिम और authoritative information के लिए संबंधित official notification और government website को ही प्राथमिकता दी जानी चाहिए।</p>
        </div>

      </div>
    </div>
  );
}
