import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import AuthorByline from '@/components/AuthorByline';
import ArticleFooter from '@/components/ArticleFooter';

export const metadata: Metadata = {
  title: 'छत्तीसगढ़ का प्रागैतिहासिक काल: पाषाण काल, प्रमुख स्थल और शैलचित्र',
  description: 'छत्तीसगढ़ का इतिहास और प्रागैतिहासिक काल पढ़ें। जानिए पूर्व पाषाण काल, मध्य पाषाण काल, उत्तर पाषाण काल और नव पाषाण काल के प्रमुख स्थल, शैलचित्र, और महत्वपूर्ण MCQ।',
  keywords: 'Chhattisgarh Prehistoric Period, CG History, CG GK, Paleolithic, Mesolithic, Neolithic sites in Chhattisgarh, CGPSC GK, CGSSB History'
};

export default function ChhattisgarhPrehistoricPeriod() {
  const currentDate = new Date().toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="container" style={{ paddingTop: '40px', paddingBottom: '60px' }}>
      <article className="card" style={{ margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
          <span style={{ background: 'var(--color-primary)', color: 'white', padding: '4px 12px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 'bold' }}>
            CG GK
          </span>
          <span style={{ background: 'var(--card-bg-hover)', color: 'var(--text-main)', padding: '4px 12px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 'bold' }}>
            History
          </span>
        </div>
        
        <h1 style={{ fontSize: '2.5rem', lineHeight: '1.2', marginBottom: '20px', color: 'var(--text-main)' }}>
          छत्तीसगढ़ का प्रागैतिहासिक काल: पाषाण काल, प्रमुख स्थल और शैलचित्र
        </h1>
        
        <AuthorByline date={currentDate} />

        <div style={{ position: 'relative', width: '100%', height: 'auto', marginBottom: '40px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 10px rgba(0,0,0,0.3)' }}>
          <Image 
            src="/images/chhattisgarh-ancient-history.webp" 
            alt="छत्तीसगढ़ का प्राचीन इतिहास" 
            width={900} 
            height={500} 
            style={{ width: '100%', height: 'auto' }}
            priority
          />
          <div style={{ position: 'absolute', bottom: '10px', right: '10px', background: 'rgba(0,0,0,0.65)', color: 'white', padding: '5px 10px', borderRadius: '4px', fontSize: '0.8rem', zIndex: 10 }}>
            This image is AI generated
          </div>
        </div>

        <div className="article-content" style={{ lineHeight: '1.8', fontSize: '1.1rem', color: 'var(--text-main)' }}>
          <p>
            छत्तीसगढ़ का इतिहास केवल प्राचीन राजवंशों और मध्यकालीन राज्यों तक सीमित नहीं है। राज्य के अलग-अलग हिस्सों में मिले पत्थर के औजार, शैलचित्र, गुफाएं और पुरातात्विक अवशेष बताते हैं कि छत्तीसगढ़ में मानव गतिविधियों का इतिहास बहुत पुराना है।
          </p>
          <p>
            प्रतियोगी परीक्षाओं में CGPSC, CGSSB, CG Vyapam, शिक्षक भर्ती और अन्य राज्य स्तरीय परीक्षाओं में छत्तीसगढ़ के प्रागैतिहासिक काल से जुड़े प्रश्न पूछे जाते हैं। खासकर किसी स्थल का संबंध किस जिले से है, वहां किस काल के प्रमाण मिले हैं और किस प्रकार के शैलचित्र या औजार मिले हैं—ये facts विद्यार्थियों के लिए काफी महत्वपूर्ण हैं।
          </p>
          <p>
            इस लेख में छत्तीसगढ़ के प्रागैतिहासिक काल को आसान भाषा में समझेंगे और अंत में महत्वपूर्ण MCQ भी देखेंगे।
          </p>

          <h2 className="article-section-title" style={{ marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem', color: 'var(--color-secondary)' }}>
            छत्तीसगढ़ के इतिहास को कितने भागों में समझा जाता है?
          </h2>
          <p>छत्तीसगढ़ के इतिहास को सामान्य रूप से तीन बड़े भागों में समझा जा सकता है:</p>
          <ul style={{ margin: '10px 0 20px 30px' }}>
            <li>प्रागैतिहासिक काल</li>
            <li>आद्य ऐतिहासिक काल</li>
            <li>ऐतिहासिक काल</li>
          </ul>
          <p>
            <strong>प्रागैतिहासिक काल</strong> वह समय है जिसके बारे में जानकारी मुख्य रूप से पुरातात्विक प्रमाणों से मिलती है। इस दौर में लिखित अभिलेख उपलब्ध नहीं थे या बहुत सीमित थे। इसलिए पत्थर के औजार, गुफाएं, शैलचित्र और अन्य अवशेष इतिहास को समझने में महत्वपूर्ण भूमिका निभाते हैं।
          </p>

          <h2 className="article-section-title" style={{ marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem', color: 'var(--color-secondary)' }}>
            छत्तीसगढ़ में पाषाण काल
          </h2>
          <p>
            पाषाण काल को मानव सभ्यता के विकास की शुरुआती अवस्थाओं में माना जाता है। इस दौरान मनुष्य ने पत्थरों से अलग-अलग प्रकार के औजार बनाए और उनका उपयोग शिकार, भोजन प्राप्त करने तथा दैनिक जीवन के दूसरे कार्यों में किया।
          </p>
          <p>
            छत्तीसगढ़ के अलग-अलग क्षेत्रों में पाषाण काल से संबंधित कई स्थल मिले हैं। पाषाण काल को मुख्य रूप से इन चरणों में समझा जाता है:
          </p>
          <ul style={{ margin: '10px 0 20px 30px' }}>
            <li>पूर्व पाषाण काल</li>
            <li>मध्य पाषाण काल</li>
            <li>उत्तर पाषाण काल</li>
            <li>नव पाषाण काल</li>
          </ul>

          <h3 style={{ marginTop: '30px', color: 'var(--color-primary)' }}>1. पूर्व पाषाण काल (Paleolithic Age)</h3>
          <p>
            पूर्व पाषाण काल को पुरापाषाण काल भी कहा जाता है। यह मानव इतिहास का अत्यंत प्राचीन चरण था। इस काल के मनुष्य मुख्य रूप से प्राकृतिक संसाधनों पर निर्भर थे। शिकार और भोजन संग्रह उनके जीवन का महत्वपूर्ण हिस्सा था।
          </p>
          <p>
            छत्तीसगढ़ में पुरापाषाण काल के कई महत्वपूर्ण प्रमाण <strong>रायगढ़</strong> क्षेत्र से प्राप्त हुए हैं।
          </p>
          
          <div style={{ background: 'var(--card-bg-hover)', padding: '15px', borderRadius: '8px', borderLeft: '4px solid var(--color-primary)', margin: '15px 0' }}>
            <strong style={{ color: 'var(--text-main)' }}>पुरापाषाण काल के प्रमुख स्थल (रायगढ़ क्षेत्र)</strong>
            <ul style={{ margin: '5px 0 0 20px', color: 'var(--text-main)' }}>
              <li>सिंहनपुर</li>
              <li>छापामारा</li>
              <li>भंवरटोला</li>
              <li>मिथिया</li>
              <li>सोनबरसा / अमरपुरा</li>
            </ul>
          </div>

          <h4 style={{ marginTop: '20px', color: 'var(--text-main)' }}>सिंहनपुर की गुफा</h4>
          <p>सिंहनपुर की गुफा छत्तीसगढ़ के प्रागैतिहासिक इतिहास में महत्वपूर्ण स्थान रखती है।</p>
          <div style={{ background: 'var(--card-bg-hover)', padding: '15px', borderRadius: '8px', border: '1px solid var(--border-color)', margin: '15px 0' }}>
            <strong style={{ color: 'var(--text-main)' }}>परीक्षा के लिए महत्वपूर्ण तथ्य:</strong>
            <ul style={{ margin: '5px 0 0 20px', color: 'var(--text-main)' }}>
              <li><strong>उपनाम:</strong> छत्तीसगढ़ का भीमबेटका</li>
              <li><strong>जिला:</strong> रायगढ़</li>
              <li><strong>स्थिति:</strong> चंवरडाल पहाड़ी के गिरिपाद क्षेत्र में</li>
              <li><strong>प्रमुख प्रमाण:</strong> शैलचित्र और पाषाणकालीन औजार</li>
            </ul>
          </div>
          <p>
            सिंहनपुर की गुफा में मिले शैलचित्रों में मानव और पशु आकृतियों के प्रमाण मिलते हैं। लाल रंग में बनाए गए पशुओं तथा मानव आकृतियों का उल्लेख मिलता है। यहां से हस्तचालित कुठार और अन्य पाषाणकालीन औजारों के प्रमाण भी जुड़े हुए हैं।
          </p>

          <h3 style={{ marginTop: '30px', color: 'var(--color-primary)' }}>2. मध्य पाषाण काल (Mesolithic Age)</h3>
          <p>
            पुरापाषाण काल के बाद मानव जीवन में कई महत्वपूर्ण बदलाव दिखाई देते हैं। इस काल में छोटे आकार के पत्थर के औजारों का उपयोग महत्वपूर्ण माना जाता है। छत्तीसगढ़ में मध्य पाषाण काल के प्रमाण विशेष रूप से रायगढ़ और बस्तर क्षेत्र से जुड़े स्थलों में मिलते हैं।
          </p>

          <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px', marginTop: '15px' }}>
            <thead>
              <tr style={{ background: 'var(--color-primary)', color: 'white', textAlign: 'left' }}>
                <th style={{ padding: '12px', border: '1px solid var(--border-color)' }}>मध्य पाषाण कालीन स्थल</th>
                <th style={{ padding: '12px', border: '1px solid var(--border-color)' }}>जिला</th>
              </tr>
            </thead>
            <tbody>
              <tr><td style={{ padding: '12px', border: '1px solid var(--border-color)' }}>कबरा पहाड़</td><td style={{ padding: '12px', border: '1px solid var(--border-color)', fontWeight: 'bold' }}>रायगढ़</td></tr>
              <tr style={{ background: 'var(--card-bg-hover)' }}><td style={{ padding: '12px', border: '1px solid var(--border-color)' }}>कालीनपुर, खजामघाट, गढ़चंदेला</td><td style={{ padding: '12px', border: '1px solid var(--border-color)', fontWeight: 'bold' }}>बस्तर</td></tr>
              <tr><td style={{ padding: '12px', border: '1px solid var(--border-color)' }}>धातलीहोंग, मातोबाड़ा, राजपुर, गढ़ धोघरा</td><td style={{ padding: '12px', border: '1px solid var(--border-color)', fontWeight: 'bold' }}>बस्तर</td></tr>
              <tr style={{ background: 'var(--card-bg-hover)' }}><td style={{ padding: '12px', border: '1px solid var(--border-color)' }}>जयमरगा</td><td style={{ padding: '12px', border: '1px solid var(--border-color)', fontWeight: 'bold' }}>जशपुर</td></tr>
              <tr><td style={{ padding: '12px', border: '1px solid var(--border-color)' }}>केराबड़ा</td><td style={{ padding: '12px', border: '1px solid var(--border-color)', fontWeight: 'bold' }}>रायगढ़</td></tr>
            </tbody>
          </table>

          <h4 style={{ marginTop: '20px', color: 'var(--text-main)' }}>कबरा पहाड़</h4>
          <p>
            <strong>जिला:</strong> रायगढ़ | <strong>स्थिति:</strong> गजमार पहाड़ी क्षेत्र | <strong>शोधकर्ता:</strong> अमरनाथ दत्त<br/>
            कबरा पहाड़ की गुफा में शैलचित्रों के प्रमाण मिलते हैं। इनमें लाल रंग के चित्रों के साथ मानव, पशु (घोड़ा, हाथी, सांभर) और अन्य आकृतियों का उल्लेख मिलता है। यहां से पाषाण युग के छोटे और सूक्ष्म औजारों के प्रमाण भी मिले हैं।
          </p>

          <h3 style={{ marginTop: '30px', color: 'var(--color-primary)' }}>3. उत्तर पाषाण काल (Post Stone Age)</h3>
          <p>
            उत्तर पाषाण काल से जुड़े कुछ महत्वपूर्ण प्रमाण भी छत्तीसगढ़ में मिले हैं:
          </p>
          <ul style={{ margin: '10px 0 20px 30px' }}>
            <li><strong>धनपुर:</strong> गौरेला-पेंड्रा-मरवाही (मानव आकृतियों के चित्रण)</li>
            <li><strong>महानदी घाटी:</strong> रायगढ़ (टोटमवादी चिन्हों के प्रमाण)</li>
          </ul>

          <h3 style={{ marginTop: '30px', color: 'var(--color-primary)' }}>4. नव पाषाण काल (Neolithic Age)</h3>
          <p>
            इस समय मानव जीवन में कई बड़े परिवर्तन हुए। मनुष्य ने केवल शिकार और भोजन संग्रह पर निर्भर रहने के बजाय खेती, पशुपालन और स्थायी जीवन की दिशा में कदम बढ़ाया।
          </p>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px', marginTop: '15px' }}>
            <thead>
              <tr style={{ background: 'var(--color-primary)', color: 'white', textAlign: 'left' }}>
                <th style={{ padding: '12px', border: '1px solid var(--border-color)' }}>नव पाषाण कालीन स्थल</th>
                <th style={{ padding: '12px', border: '1px solid var(--border-color)' }}>जिला</th>
              </tr>
            </thead>
            <tbody>
              <tr><td style={{ padding: '12px', border: '1px solid var(--border-color)' }}>चितवाडोंगरी, अर्जुनी</td><td style={{ padding: '12px', border: '1px solid var(--border-color)', fontWeight: 'bold' }}>बालोद</td></tr>
              <tr style={{ background: 'var(--card-bg-hover)' }}><td style={{ padding: '12px', border: '1px solid var(--border-color)' }}>बोंगानिला</td><td style={{ padding: '12px', border: '1px solid var(--border-color)', fontWeight: 'bold' }}>राजनांदगांव</td></tr>
              <tr><td style={{ padding: '12px', border: '1px solid var(--border-color)' }}>टेरम, करसामगढ़, बसनाझार</td><td style={{ padding: '12px', border: '1px solid var(--border-color)', fontWeight: 'bold' }}>रायगढ़</td></tr>
              <tr style={{ background: 'var(--card-bg-hover)' }}><td style={{ padding: '12px', border: '1px solid var(--border-color)' }}>ओंगना, भैसगढ़ी, लिखमाड़ा</td><td style={{ padding: '12px', border: '1px solid var(--border-color)', fontWeight: 'bold' }}>रायगढ़</td></tr>
              <tr><td style={{ padding: '12px', border: '1px solid var(--border-color)' }}>बेनीपाट, बेतरला</td><td style={{ padding: '12px', border: '1px solid var(--border-color)', fontWeight: 'bold' }}>रायगढ़</td></tr>
            </tbody>
          </table>

          <h4 style={{ marginTop: '20px', color: 'var(--text-main)' }}>चितवाडोंगरी</h4>
          <p>
            <strong>स्थान:</strong> सहगांव क्षेत्र, डौंडीलोहारा | <strong>जिला:</strong> बालोद<br/>
            चितवाडोंगरी से शैलचित्र प्राप्त होने की जानकारी दी गई है। यहां की गुफाओं से अनेक शैलचित्रों के प्रमाण मिले हैं। इन चित्रों से प्राचीन मानव के कृषि कार्य, नाव के उपयोग और व्यापारिक गतिविधियों की ओर संकेत मिलता है।
          </p>

          <h2 className="article-section-title" style={{ marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem', color: 'var(--color-secondary)' }}>
            परीक्षा के लिए महत्वपूर्ण One-Liners
          </h2>
          <div style={{ background: 'var(--card-bg-hover)', padding: '15px', borderRadius: '8px', borderLeft: '4px solid var(--color-secondary)', margin: '20px 0' }}>
            <ul style={{ margin: '5px 0 0 20px', display: 'flex', flexDirection: 'column', gap: '8px', color: 'var(--text-main)' }}>
              <li><strong>सिंहनपुर की गुफा</strong> — रायगढ़ (छत्तीसगढ़ का भीमबेटका)</li>
              <li><strong>कबरा पहाड़</strong> — रायगढ़</li>
              <li><strong>चितवाडोंगरी, अर्जुनी</strong> — बालोद</li>
              <li><strong>बोंगानिला</strong> — राजनांदगांव</li>
              <li><strong>जयमरगा</strong> — जशपुर</li>
              <li><strong>चारामा</strong> — कांकेर</li>
              <li><strong>करसामगढ़, बसनाझार, ओंगना, भैसगढ़ी, लिखमाड़ा</strong> — रायगढ़</li>
              <li><strong>धनपुर</strong> — गौरेला-पेंड्रा-मरवाही</li>
            </ul>
          </div>

          {/* MCQ Section */}
          <h2 className="article-section-title" style={{ marginTop: '50px', marginBottom: '20px', fontSize: '1.8rem', color: 'var(--color-secondary)', paddingBottom: '10px', borderBottom: '2px solid var(--border-color)' }}>
            MCQ: छत्तीसगढ़ का प्रागैतिहासिक काल
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '20px' }}>
            {[
              {
                q: "1. सिंहनपुर की गुफा किस जिले में स्थित है?",
                opts: ["A. बालोद", "B. रायगढ़", "C. कांकेर", "D. सरगुजा"],
                ans: "B. रायगढ़"
              },
              {
                q: "2. सिंहनपुर को किस नाम से भी जाना जाता है?",
                opts: ["A. छत्तीसगढ़ का अजंता", "B. छत्तीसगढ़ का एलोरा", "C. छत्तीसगढ़ का भीमबेटका", "D. छत्तीसगढ़ का सांची"],
                ans: "C. छत्तीसगढ़ का भीमबेटका"
              },
              {
                q: "3. कबरा पहाड़ किस जिले से संबंधित है?",
                opts: ["A. रायगढ़", "B. बालोद", "C. जशपुर", "D. कांकेर"],
                ans: "A. रायगढ़"
              },
              {
                q: "4. चितवाडोंगरी किस जिले में स्थित है?",
                opts: ["A. राजनांदगांव", "B. बालोद", "C. रायगढ़", "D. बस्तर"],
                ans: "B. बालोद"
              },
              {
                q: "5. अर्जुनी किस जिले से संबंधित नव पाषाण कालीन स्थल है?",
                opts: ["A. बालोद", "B. रायगढ़", "C. कांकेर", "D. जशपुर"],
                ans: "A. बालोद"
              },
              {
                q: "6. बोंगानिला किस जिले में स्थित है?",
                opts: ["A. रायगढ़", "B. बालोद", "C. राजनांदगांव", "D. जशपुर"],
                ans: "C. राजनांदगांव"
              },
              {
                q: "7. जयमरगा किस जिले से संबंधित है?",
                opts: ["A. जशपुर", "B. रायगढ़", "C. कांकेर", "D. बालोद"],
                ans: "A. जशपुर"
              },
              {
                q: "8. चारामा किस जिले का महत्वपूर्ण प्रागैतिहासिक स्थल है?",
                opts: ["A. कांकेर", "B. रायगढ़", "C. बस्तर", "D. बालोद"],
                ans: "A. कांकेर"
              },
              {
                q: "9. करसामगढ़ किस जिले से संबंधित है?",
                opts: ["A. बालोद", "B. रायगढ़", "C. कांकेर", "D. कोरबा"],
                ans: "B. रायगढ़"
              },
              {
                q: "10. धनपुर किस जिले/क्षेत्र से संबंधित है?",
                opts: ["A. गौरेला-पेंड्रा-मरवाही", "B. रायगढ़", "C. बालोद", "D. जशपुर"],
                ans: "A. गौरेला-पेंड्रा-मरवाही"
              },
              {
                q: "11. प्रागैतिहासिक काल में जानकारी प्राप्त करने का प्रमुख आधार क्या है?",
                opts: ["A. आधुनिक समाचार पत्र", "B. पुरातात्विक प्रमाण", "C. सरकारी बजट", "D. आधुनिक जनगणना"],
                ans: "B. पुरातात्विक प्रमाण"
              },
              {
                q: "12. नव पाषाण काल की प्रमुख विशेषता क्या थी?",
                opts: ["A. केवल शिकार", "B. कृषि और पशुपालन का विकास", "C. केवल समुद्री व्यापार", "D. केवल धातु के औजार"],
                ans: "B. कृषि और पशुपालन का विकास"
              },
              {
                q: "13. निम्न में से कौन-सा स्थल रायगढ़ से संबंधित है?",
                opts: ["A. सिंहनपुर", "B. चितवाडोंगरी", "C. अर्जुनी", "D. बोंगानिला"],
                ans: "A. सिंहनपुर"
              },
              {
                q: "14. चितवाडोंगरी के शैलचित्र किस क्षेत्र के प्राचीन जीवन को समझने में उपयोगी हैं?",
                opts: ["A. केवल आधुनिक जीवन", "B. प्राचीन मानव जीवन", "C. आधुनिक औद्योगिक जीवन", "D. मध्यकालीन राजदरबार"],
                ans: "B. प्राचीन मानव जीवन"
              },
              {
                q: "15. पाषाण काल को सामान्यतः किन चरणों में समझा जाता है?",
                opts: ["A. पूर्व पाषाण, मध्य पाषाण, उत्तर पाषाण और नव पाषाण", "B. वैदिक, मौर्य और गुप्त", "C. प्राचीन, मध्य और आधुनिक", "D. लौह, ताम्र और कांस्य"],
                ans: "A. पूर्व पाषाण, मध्य पाषाण, उत्तर पाषाण और नव पाषाण"
              }
            ].map((mcq, idx) => (
              <div key={idx} style={{ padding: '15px', background: 'var(--card-bg-hover)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                <p style={{ fontWeight: 'bold', marginBottom: '10px', color: 'var(--text-main)' }}>{mcq.q}</p>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '15px', color: 'var(--text-main)' }}>
                  {mcq.opts.map((opt, i) => <li key={i} style={{ marginBottom: '5px' }}>{opt}</li>)}
                </ul>
                <details style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', padding: '10px', borderRadius: '6px', cursor: 'pointer' }}>
                  <summary style={{ color: 'var(--color-primary)', fontWeight: '600', outline: 'none' }}>उत्तर देखें</summary>
                  <div style={{ marginTop: '10px', color: 'var(--color-secondary)', fontWeight: 'bold' }}>
                    सही उत्तर: {mcq.ans}
                  </div>
                </details>
              </div>
            ))}
          </div>

          <h2 className="article-section-title" style={{ marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem', color: 'var(--color-secondary)' }}>
            निष्कर्ष
          </h2>
          <p>
            छत्तीसगढ़ का प्रागैतिहासिक इतिहास राज्य की प्राचीन मानव सभ्यता को समझने के लिए बहुत महत्वपूर्ण है। सिंहनपुर, कबरा पहाड़, चितवाडोंगरी, चारामा, करसामगढ़ और अन्य शैलचित्र स्थलों से जुड़े प्रमाण बताते हैं कि छत्तीसगढ़ में हजारों वर्ष पहले मानव जीवन और उसकी गतिविधियों के महत्वपूर्ण प्रमाण मौजूद रहे हैं।
          </p>
          <p>
            CGPSC, CGSSB और CG Vyapam जैसी परीक्षाओं में इस topic से प्रश्न अक्सर स्थल-जिला, शैलचित्र, पाषाण काल और प्रमुख पुरातात्विक प्रमाण के आधार पर बनाए जा सकते हैं।
          </p>
        </div>

        <ArticleFooter 
          date={currentDate}
          sourceText="Archaeological Survey of India & State Cultural Department Records"
        />

        {/* Disclaimer Section */}
        <div style={{ marginTop: '40px', padding: '20px', backgroundColor: 'var(--card-bg-hover)', border: '1px solid #ef4444', borderRadius: '8px', fontSize: '0.9rem', color: '#ef4444' }}>
          <h4 style={{ margin: '0 0 10px 0', color: '#ef4444' }}>महत्वपूर्ण सूचना / Disclaimer</h4>
          <p style={{ margin: 0, color: 'var(--text-main)' }}>
            अस्वीकरण: इस लेख में दी गई जानकारी विद्यार्थियों की प्रतियोगी परीक्षा की तैयारी और सामान्य शैक्षणिक जानकारी के उद्देश्य से प्रकाशित की गई है। प्रागैतिहासिक स्थलों, पुरातात्विक प्रमाणों, उनके काल-निर्धारण तथा स्थानों से संबंधित जानकारी में शोध या आधिकारिक अभिलेखों के आधार पर समय-समय पर संशोधन संभव है। इसलिए परीक्षा की तैयारी के दौरान महत्वपूर्ण तथ्यों को संबंधित सरकारी विभाग, पुरातत्व विभाग, आधिकारिक अधिसूचना या विश्वसनीय आधिकारिक स्रोत से एक बार अवश्य सत्यापित करें। <br/><br/>
            इस लेख में अनजाने में कोई तथ्यात्मक त्रुटि रह गई हो या किसी जानकारी में बदलाव हुआ हो, तो कृपया हमें <a href="mailto:contact@cgssb.com.in" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>contact@cgssb.com.in</a> पर सूचित करें। उपलब्ध आधिकारिक प्रमाण की जांच के बाद आवश्यक होने पर लेख को अपडेट किया जाएगा।
          </p>
        </div>

      </article>
    </div>
  );
}
