import Image from "next/image";
import type { Metadata } from "next";
import ArticleFooter from "@/components/ArticleFooter";
import AuthorByline from "@/components/AuthorByline";
import MCQSection from "@/components/MCQSection";

export const metadata: Metadata = {
  title: "राष्ट्रीय शिक्षा नीति 2020 (NEP 2020): पूरी जानकारी, 5+3+3+4 संरचना",
  description: "राष्ट्रीय शिक्षा नीति 2020 (NEP 2020) की पूरी जानकारी, 5+3+3+4 संरचना, महत्वपूर्ण तथ्य और CGTET, CTET, शिक्षक भर्ती के लिए परीक्षा उपयोगी बिंदु।",
  openGraph: {
    title: "राष्ट्रीय शिक्षा नीति 2020 (NEP 2020): पूरी जानकारी, 5+3+3+4 संरचना, महत्वपूर्ण तथ्य",
    description: "राष्ट्रीय शिक्षा नीति 2020 (NEP 2020) की पूरी जानकारी, 5+3+3+4 संरचना, महत्वपूर्ण तथ्य और CGTET, CTET, शिक्षक भर्ती के लिए परीक्षा उपयोगी बिंदु।",
    type: "article",
    publishedTime: "2026-08-19T00:00:00.000Z",
    authors: ["Yuvraj Pratap Rajwade"],
  },
};

export default function NEP2020Page() {
  const currentDate = "August 19, 2026";

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <article>
        <h1 style={{ fontSize: '2.5rem', lineHeight: '1.2', marginBottom: '20px', color: 'var(--text-main)' }}>
          राष्ट्रीय शिक्षा नीति 2020 (NEP 2020): पूरी जानकारी, 5+3+3+4 संरचना, महत्वपूर्ण तथ्य और परीक्षा उपयोगी बिंदु
        </h1>
        
        <AuthorByline date={currentDate} />

        <div style={{ position: 'relative', width: '100%', height: 'auto', marginBottom: '40px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 10px rgba(0,0,0,0.3)' }}>
          <Image 
            src="/images/nep-2020-education-policy-india.webp" 
            alt="राष्ट्रीय शिक्षा नीति 2020 (NEP 2020)" 
            width={900} 
            height={500} 
            style={{ width: '100%', height: 'auto' }}
            priority
          />
          <div style={{ position: 'absolute', bottom: '10px', right: '10px', background: 'rgba(0,0,0,0.65)', color: 'white', padding: '5px 10px', borderRadius: '4px', fontSize: '0.8rem', zIndex: 10 }}>
            NEP 2020
          </div>
        </div>

        <div className="article-content" style={{ lineHeight: '1.8', fontSize: '1.1rem', color: 'var(--text-main)' }}>
          <p>
            राष्ट्रीय शिक्षा नीति 2020 (NEP 2020) भारत की शिक्षा व्यवस्था में एक महत्वपूर्ण बदलाव लेकर आई। यह स्वतंत्र भारत की तीसरी राष्ट्रीय शिक्षा नीति है। इससे पहले 1968 और 1986 में राष्ट्रीय शिक्षा नीतियां लागू की गई थीं। 1986 की नीति में 1992 में संशोधन किया गया था।
          </p>
          <p>
            NEP 2020 का उद्देश्य भारत की शिक्षा व्यवस्था को अधिक गुणवत्तापूर्ण, समावेशी, लचीला और वैश्विक स्तर के अनुरूप बनाना है। नीति को केंद्रीय मंत्रिमंडल ने 29 जुलाई 2020 को मंजूरी दी थी। इसके मसौदे से जुड़ी समिति की अध्यक्षता डॉ. के. कस्तूरीरंगन ने की थी।
          </p>

          <h2 className="article-section-title" style={{ marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem', color: 'var(--color-primary)' }}>
            NEP 2020 का इतिहास
          </h2>
          <p>भारत में अब तक तीन राष्ट्रीय शिक्षा नीतियां आई हैं:</p>

          <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px', marginTop: '15px' }}>
            <thead>
              <tr style={{ background: 'var(--color-primary)', color: 'white', textAlign: 'left' }}>
                <th style={{ padding: '12px', border: '1px solid var(--border-color)' }}>राष्ट्रीय शिक्षा नीति</th>
                <th style={{ padding: '12px', border: '1px solid var(--border-color)' }}>वर्ष</th>
                <th style={{ padding: '12px', border: '1px solid var(--border-color)' }}>प्रमुख जानकारी</th>
              </tr>
            </thead>
            <tbody>
              <tr><td style={{ padding: '12px', border: '1px solid var(--border-color)' }}>पहली NEP</td><td style={{ padding: '12px', border: '1px solid var(--border-color)', fontWeight: 'bold' }}>1968</td><td style={{ padding: '12px', border: '1px solid var(--border-color)' }}>कोठारी आयोग की सिफारिशों पर आधारित</td></tr>
              <tr style={{ background: 'var(--card-bg-hover)' }}><td style={{ padding: '12px', border: '1px solid var(--border-color)' }}>दूसरी NEP</td><td style={{ padding: '12px', border: '1px solid var(--border-color)', fontWeight: 'bold' }}>1986</td><td style={{ padding: '12px', border: '1px solid var(--border-color)' }}>1992 में संशोधन/POA</td></tr>
              <tr><td style={{ padding: '12px', border: '1px solid var(--border-color)' }}>तीसरी NEP</td><td style={{ padding: '12px', border: '1px solid var(--border-color)', fontWeight: 'bold' }}>2020</td><td style={{ padding: '12px', border: '1px solid var(--border-color)' }}>34 वर्षों के अंतराल के बाद</td></tr>
            </tbody>
          </table>

          <div style={{ background: 'var(--card-bg-hover)', padding: '15px', borderRadius: '8px', borderLeft: '4px solid var(--color-primary)', margin: '15px 0' }}>
            <strong>याद रखें:</strong> इस प्रकार 1968 &rarr; 1986 &rarr; 2020 का क्रम परीक्षा की दृष्टि से बहुत महत्वपूर्ण है।
          </div>

          <p>
            NEP 2020 की मसौदा समिति का गठन 2017 में किया गया था और इसकी अध्यक्षता <strong>डॉ. के. कस्तूरीरंगन</strong> ने की। नीति का मसौदा 2019 में प्रस्तुत किया गया और 29 जुलाई 2020 को केंद्रीय मंत्रिमंडल ने इसे मंजूरी दी।
          </p>

          <h2 className="article-section-title" style={{ marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem', color: 'var(--color-primary)' }}>
            NEP 2020 की 5+3+3+4 संरचना क्या है?
          </h2>
          <p>
            NEP 2020 की सबसे महत्वपूर्ण विशेषताओं में से एक <strong>5+3+3+4</strong> नई स्कूली शिक्षा संरचना है। इसने पुरानी 10+2 व्यवस्था की जगह नई संरचना को प्रस्तावित किया है, जो 3 से 18 वर्ष की आयु को कवर करती है।
          </p>

          <h3 style={{ marginTop: '30px', color: 'var(--color-primary)' }}>1. Foundational Stage — 5 वर्ष</h3>
          <ul style={{ margin: '10px 0 20px 30px' }}>
            <li><strong>आयु:</strong> 3 से 8 वर्ष</li>
            <li>3 वर्ष प्री-स्कूल/आंगनबाड़ी/बाल वाटिका</li>
            <li>कक्षा 1 और 2</li>
            <li>खेल एवं गतिविधि आधारित शिक्षा</li>
            <li>मातृभाषा/स्थानीय भाषा पर जोर</li>
          </ul>
          <p>इस स्तर पर बच्चों को सीखने के लिए खेल और गतिविधियों का उपयोग करने पर विशेष जोर दिया गया है।</p>

          <h3 style={{ marginTop: '30px', color: 'var(--color-primary)' }}>2. Preparatory Stage — 3 वर्ष</h3>
          <ul style={{ margin: '10px 0 20px 30px' }}>
            <li><strong>आयु:</strong> 8 से 11 वर्ष</li>
            <li>कक्षा 3, 4 और 5</li>
            <li>खेल आधारित शिक्षा से औपचारिक शिक्षा की ओर संक्रमण</li>
            <li>पढ़ना, लिखना, गणित, विज्ञान, कला और भाषाओं पर ध्यान</li>
          </ul>

          <h3 style={{ marginTop: '30px', color: 'var(--color-primary)' }}>3. Middle Stage — 3 वर्ष</h3>
          <ul style={{ margin: '10px 0 20px 30px' }}>
            <li><strong>आयु:</strong> 11 से 14 वर्ष</li>
            <li>कक्षा 6, 7 और 8</li>
            <li>विषय आधारित शिक्षा</li>
            <li>कक्षा 6 से <strong>Coding</strong></li>
            <li>कक्षा 6 से <strong>Vocational Education</strong></li>
            <li>10 दिन का <strong>Bagless Period</strong>/इंटर्नशिप का प्रावधान</li>
          </ul>

          <h3 style={{ marginTop: '30px', color: 'var(--color-primary)' }}>4. Secondary Stage — 4 वर्ष</h3>
          <ul style={{ margin: '10px 0 20px 30px' }}>
            <li><strong>आयु:</strong> 14 से 18 वर्ष</li>
            <li>कक्षा 9 से 12</li>
            <li>विषय चयन में अधिक flexibility</li>
            <li>Arts, Science और Commerce के बीच कठोर विभाजन को कम करने पर जोर</li>
            <li>Multidisciplinary learning को बढ़ावा</li>
          </ul>

          <h2 className="article-section-title" style={{ marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem', color: 'var(--color-primary)' }}>
            प्रारंभिक बाल्यावस्था देखभाल और शिक्षा — ECCE
          </h2>
          <p>
            NEP 2020 में ECCE यानी <strong>Early Childhood Care and Education</strong> को विशेष महत्व दिया गया है। नोट्स के अनुसार, बच्चे के मस्तिष्क का लगभग 85% विकास 6 वर्ष की आयु से पहले हो जाता है, इसलिए 3 से 6 वर्ष की आयु में गुणवत्तापूर्ण देखभाल और शिक्षा महत्वपूर्ण मानी गई है।
          </p>
          <p>
            ECCE में बच्चों को भारी पाठ्यपुस्तकों और औपचारिक कक्षाओं के बजाय खेल-खेल में सीखने पर जोर दिया जाता है।
          </p>

          <h2 className="article-section-title" style={{ marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem', color: 'var(--color-primary)' }}>
            Foundational Literacy and Numeracy — FLN
          </h2>
          <p>
            FLN का पूरा नाम <strong>Foundational Literacy and Numeracy</strong> है। इसका उद्देश्य बच्चों को शुरुआती स्तर पर पढ़ने, लिखने और बुनियादी गणितीय क्षमताओं से मजबूत करना है।
          </p>
          <p>
            नोट्स के अनुसार, कक्षा 3 तक बच्चों में बुनियादी साक्षरता और संख्या ज्ञान विकसित करने का लक्ष्य रखा गया था तथा इसके लिए <strong>2025 का लक्ष्य</strong> दिया गया है।
          </p>

          <h2 className="article-section-title" style={{ marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem', color: 'var(--color-primary)' }}>
            छात्र-शिक्षक अनुपात — PTR
          </h2>
          <p>NEP 2020 के अध्ययन नोट्स में छात्र-शिक्षक अनुपात (Pupil-Teacher Ratio) से जुड़े ये महत्वपूर्ण बिंदु दिए गए हैं:</p>
          <ul style={{ margin: '10px 0 20px 30px' }}>
            <li>सामान्य विद्यालयों के लिए — <strong>30:1</strong></li>
            <li>सामाजिक/आर्थिक रूप से पिछड़े एवं कमजोर क्षेत्रों के लिए — <strong>25:1</strong></li>
          </ul>

          <h2 className="article-section-title" style={{ marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem', color: 'var(--color-primary)' }}>
            2030 तक 100% GER का लक्ष्य
          </h2>
          <p>
            NEP 2020 में वर्ष 2030 तक प्री-स्कूल से माध्यमिक स्तर तक <strong>100% Gross Enrolment Ratio (GER)</strong> प्राप्त करने का लक्ष्य दिया गया है। साथ ही सामाजिक और आर्थिक रूप से वंचित समूहों के बच्चों को शिक्षा की मुख्यधारा में लाने पर भी जोर दिया गया है।
          </p>

          <h2 className="article-section-title" style={{ marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem', color: 'var(--color-primary)' }}>
            NEP 2020 में Coding और Vocational Education
          </h2>
          <p>
            विद्यार्थियों को व्यावसायिक शिक्षा से परिचित कराने और आधुनिक कौशल विकसित करने के लिए कक्षा 6 से <strong>Coding</strong> तथा <strong>Vocational Education</strong> शुरू करने का प्रावधान महत्वपूर्ण है।
          </p>
          <p>
            इसके साथ कक्षा 6 से 10 दिन के <strong>Bagless Period</strong> और इंटर्नशिप जैसे प्रावधानों का भी उल्लेख किया गया है।
          </p>

          <h2 className="article-section-title" style={{ marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem', color: 'var(--color-primary)' }}>
            मूल्यांकन व्यवस्था और 360-Degree Progress Card
          </h2>
          <p>
            NEP 2020 में केवल रटने और पारंपरिक परीक्षा आधारित मूल्यांकन के बजाय समग्र और बहुआयामी मूल्यांकन पर जोर दिया गया है।
          </p>
          <p><strong>360-Degree Holistic Progress Card</strong> में तीन प्रमुख प्रकार के मूल्यांकन शामिल किए गए हैं:</p>
          <ul style={{ margin: '10px 0 20px 30px' }}>
            <li><strong>Self Assessment</strong> — विद्यार्थी स्वयं अपनी प्रगति का आकलन करता है।</li>
            <li><strong>Peer Assessment</strong> — सहपाठियों द्वारा मूल्यांकन।</li>
            <li><strong>Teacher Assessment</strong> — शिक्षक द्वारा शैक्षणिक और सह-शैक्षणिक गतिविधियों का मूल्यांकन।</li>
          </ul>

          <h2 className="article-section-title" style={{ marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem', color: 'var(--color-primary)' }}>
            PARAKH क्या है?
          </h2>
          <p>
            NEP 2020 के अंतर्गत <strong>PARAKH</strong> राष्ट्रीय स्तर पर विद्यार्थियों के मानक मूल्यांकन से संबंधित पहल है। अभ्यास प्रश्नपत्र में इसका पूरा नाम <strong>Performance Assessment, Review, and Analysis of Knowledge for Holistic Development</strong> दिया गया है।
          </p>
          <div style={{ background: 'var(--card-bg-hover)', padding: '15px', borderRadius: '8px', borderLeft: '4px solid var(--color-primary)', margin: '15px 0' }}>
            <strong>याद रखने योग्य बात:</strong> PARAKH का उद्देश्य मूल्यांकन के लिए राष्ट्रीय मानक विकसित करना और विद्यार्थियों के आकलन की प्रक्रिया को अधिक समग्र बनाना है।
          </div>

          <h2 className="article-section-title" style={{ marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem', color: 'var(--color-primary)' }}>
            NEP 2020 के चार प्रमुख भाग
          </h2>
          <p>अध्ययन सामग्री के अनुसार NEP 2020 को 4 प्रमुख भागों और कुल 27 अध्यायों में विभाजित किया गया है:</p>

          <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px', marginTop: '15px' }}>
            <thead>
              <tr style={{ background: 'var(--color-primary)', color: 'white', textAlign: 'left' }}>
                <th style={{ padding: '12px', border: '1px solid var(--border-color)' }}>भाग</th>
                <th style={{ padding: '12px', border: '1px solid var(--border-color)' }}>विषय</th>
                <th style={{ padding: '12px', border: '1px solid var(--border-color)' }}>अध्याय</th>
              </tr>
            </thead>
            <tbody>
              <tr><td style={{ padding: '12px', border: '1px solid var(--border-color)' }}>भाग 1</td><td style={{ padding: '12px', border: '1px solid var(--border-color)', fontWeight: 'bold' }}>स्कूली शिक्षा</td><td style={{ padding: '12px', border: '1px solid var(--border-color)' }}>8</td></tr>
              <tr style={{ background: 'var(--card-bg-hover)' }}><td style={{ padding: '12px', border: '1px solid var(--border-color)' }}>भाग 2</td><td style={{ padding: '12px', border: '1px solid var(--border-color)', fontWeight: 'bold' }}>उच्चतर शिक्षा</td><td style={{ padding: '12px', border: '1px solid var(--border-color)' }}>11</td></tr>
              <tr><td style={{ padding: '12px', border: '1px solid var(--border-color)' }}>भाग 3</td><td style={{ padding: '12px', border: '1px solid var(--border-color)', fontWeight: 'bold' }}>अन्य केंद्रीय विचारणीय मुद्दे</td><td style={{ padding: '12px', border: '1px solid var(--border-color)' }}>5</td></tr>
              <tr style={{ background: 'var(--card-bg-hover)' }}><td style={{ padding: '12px', border: '1px solid var(--border-color)' }}>भाग 4</td><td style={{ padding: '12px', border: '1px solid var(--border-color)', fontWeight: 'bold' }}>क्रियान्वयन की रणनीति</td><td style={{ padding: '12px', border: '1px solid var(--border-color)' }}>3</td></tr>
              <tr><td style={{ padding: '12px', border: '1px solid var(--border-color)', fontWeight: 'bold' }}>कुल</td><td style={{ padding: '12px', border: '1px solid var(--border-color)' }}>—</td><td style={{ padding: '12px', border: '1px solid var(--border-color)', fontWeight: 'bold' }}>27</td></tr>
            </tbody>
          </table>

          <div style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '20px', borderRadius: '8px', border: '2px dashed var(--color-primary)', margin: '40px 0' }}>
            <h3 style={{ color: 'var(--color-primary)', marginTop: 0, marginBottom: '15px' }}>NEP 2020 के महत्वपूर्ण परीक्षा बिंदु (Quick Revision)</h3>
            <p>अगर आप CGTET, CTET, शिक्षक भर्ती, B.Ed., D.El.Ed. या अन्य शिक्षा संबंधी प्रतियोगी परीक्षाओं की तैयारी कर रहे हैं, तो ये facts विशेष रूप से याद रखें:</p>
            <ul style={{ margin: '10px 0 0 20px', fontWeight: '500', display: 'grid', gap: '8px' }}>
              <li><strong>NEP का सही Full Form:</strong> National Education Policy</li>
              <li><strong>मसौदा समिति के अध्यक्ष:</strong> डॉ. के. कस्तूरीरंगन</li>
              <li><strong>केंद्रीय मंत्रिमंडल की मंजूरी:</strong> 29 जुलाई 2020</li>
              <li><strong>भारत की तीसरी राष्ट्रीय शिक्षा नीति:</strong> NEP 2020</li>
              <li><strong>नई स्कूली संरचना:</strong> 5+3+3+4</li>
              <li><strong>Foundational Stage:</strong> 3–8 वर्ष</li>
              <li><strong>Preparatory Stage:</strong> 8–11 वर्ष</li>
              <li><strong>Middle Stage:</strong> 11–14 वर्ष</li>
              <li><strong>Secondary Stage:</strong> 14–18 वर्ष</li>
              <li><strong>Coding एवं Vocational Education:</strong> कक्षा 6 से</li>
              <li><strong>सामान्य PTR:</strong> 30:1</li>
              <li><strong>वंचित क्षेत्रों के लिए PTR:</strong> 25:1</li>
              <li><strong>FLN:</strong> Foundational Literacy and Numeracy</li>
              <li><strong>FLN लक्ष्य:</strong> 2025</li>
              <li><strong>100% GER लक्ष्य:</strong> 2030</li>
              <li><strong>PARAKH:</strong> राष्ट्रीय मूल्यांकन से संबंधित पहल</li>
              <li><strong>NEP के कुल भाग:</strong> 4</li>
              <li><strong>NEP के कुल अध्याय:</strong> 27</li>
            </ul>
          </div>

          <h2 className="article-section-title" style={{ marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem', color: 'var(--color-primary)' }}>
            निष्कर्ष
          </h2>
          <p>
            राष्ट्रीय शिक्षा नीति 2020 का मुख्य फोकस केवल पाठ्यक्रम बदलना नहीं है, बल्कि शिक्षा को अधिक समावेशी, कौशल आधारित, लचीला और विद्यार्थी-केंद्रित बनाना है। इसकी 5+3+3+4 संरचना, ECCE, FLN, Coding, Vocational Education, 360-Degree Assessment और PARAKH जैसी विशेषताएं इसे प्रतियोगी परीक्षाओं के लिए भी महत्वपूर्ण विषय बनाती हैं।
          </p>
          <p>
            CG शिक्षक भर्ती 2026 और TET परीक्षाओं की तैयारी करने वाले अभ्यर्थियों के लिए NEP 2020 के facts, dates, age groups, acronyms और 5+3+3+4 structure को विशेष रूप से तैयार करना अत्यंत उपयोगी रहेगा।
          </p>

          <h2 className="article-section-title" style={{ marginTop: '50px', marginBottom: '20px', fontSize: '1.8rem', color: 'var(--color-primary)', paddingBottom: '10px', borderBottom: '2px solid var(--border-color)' }}>
            NEP 2020 MCQ Practice Set
          </h2>
          <MCQSection mcqs={[
            {
              q: "Q1. NEP 2020 को केंद्रीय मंत्रिमंडल ने कब मंजूरी दी थी?",
              opts: ["A) 15 अगस्त 2020", "B) 29 जुलाई 2020", "C) 26 जनवरी 2020", "D) 5 सितंबर 2020"],
              ans: "B) 29 जुलाई 2020"
            },
            {
              q: "Q2. NEP 2020 भारत की कौन-सी राष्ट्रीय शिक्षा नीति है?",
              opts: ["A) पहली", "B) दूसरी", "C) तीसरी", "D) चौथी"],
              ans: "C) तीसरी"
            },
            {
              q: "Q3. NEP 2020 की नई स्कूली शिक्षा संरचना क्या है?",
              opts: ["A) 10+2", "B) 5+4+3", "C) 5+3+3+4", "D) 4+4+4+4"],
              ans: "C) 5+3+3+4"
            },
            {
              q: "Q4. NEP 2020 की 5+3+3+4 संरचना किस आयु वर्ग को cover करती है?",
              opts: ["A) 5–18 वर्ष", "B) 6–18 वर्ष", "C) 3–18 वर्ष", "D) 3–15 वर्ष"],
              ans: "C) 3–18 वर्ष"
            },
            {
              q: "Q5. NEP 2020 के अनुसार Coding किस कक्षा से शुरू करने का प्रस्ताव है?",
              opts: ["A) कक्षा 3", "B) कक्षा 5", "C) कक्षा 6", "D) कक्षा 9"],
              ans: "C) कक्षा 6"
            },
            {
              q: "Q6. FLN का पूरा नाम क्या है?",
              opts: ["A) Fundamental Learning Network", "B) Foundational Literacy and Numeracy", "C) Formal Literacy and Numeracy", "D) Foundation Learning and Network"],
              ans: "B) Foundational Literacy and Numeracy"
            },
            {
              q: "Q7. NEP 2020 के अनुसार FLN का लक्ष्य किस वर्ष तक रखा गया था?",
              opts: ["A) 2023", "B) 2025", "C) 2030", "D) 2035"],
              ans: "B) 2025"
            },
            {
              q: "Q8. PARAKH के माध्यम से किन कक्षाओं के विद्यार्थियों का standard assessment किया जाना है?",
              opts: ["A) कक्षा 1, 2 और 3", "B) कक्षा 3, 5 और 8", "C) कक्षा 5, 8 और 10", "D) कक्षा 8, 10 और 12"],
              ans: "B) कक्षा 3, 5 और 8"
            },
            {
              q: "Q9. NEP 2020 में शिक्षकों के लिए प्रति वर्ष कितने घंटे के CPD का प्रावधान दिया गया है?",
              opts: ["A) 25 घंटे", "B) 30 घंटे", "C) 40 घंटे", "D) 50 घंटे"],
              ans: "D) 50 घंटे"
            },
            {
              q: "Q10. NEP 2020 के अनुसार शिक्षा पर GDP का कितना प्रतिशत खर्च करने का लक्ष्य रखा गया है?",
              opts: ["A) 4%", "B) 5%", "C) 6%", "D) 8%"],
              ans: "C) 6%"
            }
          ]} title="महत्वपूर्ण बहुविकल्पीय प्रश्न (MCQs)" />

        </div>

        <ArticleFooter 
          date={currentDate}
          sourceText="NEP 2020 Official Document, SCERT/NCERT Guidelines & CGTET/CTET Reference Material"
        />

        <div style={{ marginTop: '40px', padding: '20px', backgroundColor: 'var(--card-bg-hover)', border: '1px solid var(--border-color)', borderRadius: '8px', fontSize: '0.9rem', color: '#ef4444' }}>
          <h4 style={{ margin: '0 0 10px 0', color: '#ef4444' }}>महत्वपूर्ण सूचना / Disclaimer</h4>
          <p style={{ margin: 0, color: 'var(--text-main)' }}>
            अस्वीकरण: इस लेख में दी गई जानकारी विद्यार्थियों की प्रतियोगी परीक्षा की तैयारी और सामान्य शैक्षणिक जानकारी के उद्देश्य से प्रकाशित की गई है। परीक्षा के लिए अंतिम रूप से संबंधित आधिकारिक पाठ्यक्रम और मान्य संदर्भ सामग्री से तथ्यों का मिलान जरूर करें। <br/><br/>
            यदि इस लेख में आपको कोई तथ्यात्मक त्रुटि दिखाई देती है, तो कृपया <strong>CGSSB.com.in</strong> के Contact माध्यम से हमें बताएं, ताकि आवश्यक सुधार किया जा सके।
          </p>
        </div>
      </article>
    </div>
  );
}
