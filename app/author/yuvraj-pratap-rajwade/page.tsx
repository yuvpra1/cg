import React from 'react';

export const metadata = {
  title: "Yuvraj Pratap Rajwade - Author & Publisher | CGSSB Portal",
  description: "About Yuvraj Pratap Rajwade, the independent web developer and publisher behind this platform. Learn about our mission, verification process, and transparency.",
};

export default function AuthorProfile() {
  return (
    <>
      <div className="container" style={{ paddingTop: '60px', paddingBottom: '60px', maxWidth: '800px' }}>
        
        {/* Author Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div style={{ width: '120px', height: '120px', borderRadius: '50%', backgroundColor: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '3rem', fontWeight: 'bold', margin: '0 auto 20px', boxShadow: '0 4px 10px rgba(37,99,235,0.2)' }}>
            Y
          </div>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '10px', color: 'var(--text-main)' }}>Yuvraj Pratap Rajwade</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', fontWeight: '500' }}>Independent Web Developer & Publisher</p>
        </div>

        <div className="card" style={{ padding: '40px', lineHeight: '1.7', fontSize: '1.05rem', color: 'var(--text-main)' }}>
          
          <h2 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--color-primary)' }}>👋 मैं कौन हूँ?</h2>
          <p style={{ marginBottom: '30px' }}>
            नमस्ते! मेरा नाम <strong>युवराज प्रताप राजवाड़े</strong> है। मैं एक Independent Web Developer और Content Publisher हूँ। 
            मुझे वेब डेवलपमेंट और डिजिटल कंटेंट बनाने का शौक है, जिसके माध्यम से मैं छात्रों और युवाओं तक सही और सटीक जानकारी पहुँचाने का प्रयास करता हूँ।
          </p>

          <h2 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--color-primary)' }}>🎯 यह वेबसाइट क्यों बनाई?</h2>
          <p style={{ marginBottom: '30px' }}>
            अक्सर देखा गया है कि छत्तीसगढ़ के ग्रामीण और दूर-दराज के इलाकों में रहने वाले छात्रों तक सरकारी नौकरियों, परीक्षा सिलेबस और चयन प्रक्रिया की सटीक जानकारी समय पर नहीं पहुँच पाती। 
            विभिन्न वेबसाइट्स पर फैली आधी-अधूरी जानकारी के कारण छात्र भ्रमित होते हैं। इसी समस्या को सुलझाने के लिए मैंने यह platform तैयार किया है, 
            जहाँ हर जानकारी <strong>सरल हिंदी भाषा</strong> में और पूरी स्पष्टता के साथ उपलब्ध हो।
          </p>

          <h2 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--color-primary)' }}>📚 हम क्या Publish करते हैं?</h2>
          <p style={{ marginBottom: '30px' }}>
            इस वेबसाइट पर मैं मुख्य रूप से:
            <ul className="premium-list" style={{ marginTop: '15px' }}>
              <li>छत्तीसगढ़ की नवीनतम सरकारी भर्तियों (Government Jobs) की जानकारी</li>
              <li>विस्तृत परीक्षा सिलेबस (Detailed Syllabus) और एग्जाम पैटर्न</li>
              <li>शैक्षणिक योग्यताओं और भर्ती नियमों का विश्लेषण (Recruitment Rules Analysis)</li>
              <li>सरकारी विभागों के महत्वपूर्ण Circulars और Notifications का आसान सारांश</li>
            </ul>
          </p>

          <h2 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--color-primary)' }}>🔍 Information Verification Process</h2>
          <p style={{ marginBottom: '15px' }}>
            हमारा लक्ष्य आपको 100% सटीक जानकारी देना है। इसके लिए मैं एक सख्त प्रकिया का पालन करता हूँ:
            <ul className="premium-list" style={{ marginTop: '15px' }}>
              <li>हमेशा <strong>आधिकारिक सरकारी वेबसाइट्स</strong> (जैसे CG Vyapam, GAD CG, आदि) से ही मूल PDF नोटिफिकेशन डाउनलोड किया जाता है।</li>
              <li>मूल दस्तावेजों को पढ़कर उनका विश्लेषण किया जाता है।</li>
              <li>हर आर्टिकल के अंत में <strong>Official Source का सीधा लिंक</strong> दिया जाता है, ताकि आप स्वयं भी जानकारी verify कर सकें।</li>
            </ul>
          </p>

          <div className="premium-alert" style={{ background: '#fef2f2', borderColor: '#fca5a5', marginTop: '30px', marginBottom: '30px' }}>
            <strong style={{ display: 'block', marginBottom: '8px', color: '#b91c1c' }}>⚠️ Disclaimer (अस्वीकरण)</strong>
            मैं <strong>किसी भी रूप में छत्तीसगढ़ शासन, CGSSB (छत्तीसगढ़ कर्मचारी चयन मंडल) या किसी सरकारी विभाग का कर्मचारी या अधिकारी नहीं हूँ।</strong> 
            यह एक पूरी तरह से स्वतंत्र (Independent) और निजी वेबसाइट है, जिसका उद्देश्य केवल छात्रों की सहायता करना और एजुकेशनल जानकारी प्रदान करना है।
          </div>

          <h2 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--color-primary)' }}>✏️ Correction Policy (सुधार नीति)</h2>
          <p>
            मानवीय भूल संभव है। यदि आपको किसी आर्टिकल में कोई टाइपिंग मिस्टेक, पुरानी (Outdated) जानकारी या तथ्यात्मक त्रुटि (Factual Error) मिलती है, 
            तो आप हमें तुरंत संपर्क कर सकते हैं। हम मूल सरकारी दस्तावेजों से उस जानकारी को दोबारा क्रॉस-चेक करेंगे और <strong>24 से 48 घंटों के भीतर आवश्यक सुधार (Correction)</strong> कर देंगे।
          </p>

        </div>
      </div>
    </>
  );
}
