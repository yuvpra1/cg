import Image from "next/image";
import type { Metadata } from "next";
import ArticleFooter from "@/components/ArticleFooter";
import AuthorByline from "@/components/AuthorByline";
import MCQSection from "@/components/MCQSection";

export const metadata: Metadata = {
  title: "छत्तीसगढ़ का बौद्धकालीन इतिहास: सिरपुर, मैनपाट, भोंगापाल और महाजनपद काल",
  description: "छत्तीसगढ़ के बौद्धकालीन इतिहास, सिरपुर, मैनपाट, भोंगापाल, तुरतुरिया, मल्हार और महाजनपद काल की पूरी जानकारी आसान भाषा में पढ़ें। CGPSC और CG Vyapam के लिए महत्वपूर्ण MCQs सहित।",
  openGraph: {
    title: "छत्तीसगढ़ का बौद्धकालीन इतिहास: सिरपुर, मैनपाट, भोंगापाल और महाजनपद काल",
    description: "छत्तीसगढ़ के बौद्धकालीन इतिहास, सिरपुर, मैनपाट, भोंगापाल, तुरतुरिया, मल्हार और महाजनपद काल की पूरी जानकारी आसान भाषा में पढ़ें। CGPSC और CG Vyapam के लिए महत्वपूर्ण MCQs सहित।",
    type: "article",
    publishedTime: "2026-08-18T00:00:00.000Z",
    authors: ["Yuvraj Pratap Rajwade"],
  },
};

export default function BuddhistPeriodPage() {
  const currentDate = "August 18, 2026";

  const mcqs = [
    {
      q: "1. सिरपुर किस जिले में स्थित है?",
      opts: ["A. रायपुर", "B. महासमुंद", "C. बिलासपुर", "D. सरगुजा"],
      ans: "B. महासमुंद"
    },
    {
      q: "2. सिरपुर किस प्रकार की विरासत के लिए विशेष रूप से प्रसिद्ध है?",
      opts: ["A. केवल मुगल स्थापत्य", "B. केवल आधुनिक स्थापत्य", "C. बौद्ध, जैन और हिंदू विरासत", "D. केवल औपनिवेशिक स्थापत्य"],
      ans: "C. बौद्ध, जैन और हिंदू विरासत"
    },
    {
      q: "3. सिरपुर का उल्लेख किस चीनी यात्री के यात्रा विवरण से जुड़ा है?",
      opts: ["A. फाह्यान", "B. ह्वेनसांग", "C. इत्सिंग", "D. अलबरूनी"],
      ans: "B. ह्वेनसांग"
    },
    {
      q: "4. आनंदप्रभु कुटीर विहार कहां स्थित है?",
      opts: ["A. मैनपाट", "B. सिरपुर", "C. मल्हार", "D. भोंगापाल"],
      ans: "B. सिरपुर"
    },
    {
      q: "5. भोंगापाल किस जिले में स्थित है?",
      opts: ["A. महासमुंद", "B. कोंडागांव", "C. बिलासपुर", "D. रायपुर"],
      ans: "B. कोंडागांव"
    },
    {
      q: "6. मैनपाट किस जिले में स्थित है?",
      opts: ["A. सरगुजा", "B. महासमुंद", "C. कोंडागांव", "D. बलौदाबाजार"],
      ans: "A. सरगुजा"
    },
    {
      q: "7. मैनपाट को किस नाम से भी जाना जाता है?",
      opts: ["A. छत्तीसगढ़ का काशी", "B. छत्तीसगढ़ का शिमला", "C. छत्तीसगढ़ का जयपुर", "D. छत्तीसगढ़ का नालंदा"],
      ans: "B. छत्तीसगढ़ का शिमला"
    },
    {
      q: "8. मैनपाट की विशेष सांस्कृतिक पहचान किससे जुड़ी है?",
      opts: ["A. मराठा संस्कृति", "B. तिब्बती संस्कृति", "C. मुगल संस्कृति", "D. राजपूत संस्कृति"],
      ans: "B. तिब्बती संस्कृति"
    },
    {
      q: "9. महाजनपदों की संख्या कितनी मानी जाती है?",
      opts: ["A. 12", "B. 14", "C. 16", "D. 18"],
      ans: "C. 16"
    },
    {
      q: "10. निम्न में से कौन एक महाजनपद था?",
      opts: ["A. चेदि", "B. छत्तीसगढ़", "C. दंडकारण्य", "D. बस्तर"],
      ans: "A. चेदि"
    },
    {
      q: "11. चेदि महाजनपद की राजधानी क्या मानी जाती है?",
      opts: ["A. पाटलिपुत्र", "B. उज्जैन", "C. शुक्तिमती", "D. वाराणसी"],
      ans: "C. शुक्तिमती"
    },
    {
      q: "12. निम्न में से कौन-सा स्थल महासमुंद जिले से संबंधित है?",
      opts: ["A. सिरपुर", "B. मैनपाट", "C. मल्हार", "D. भोंगापाल"],
      ans: "A. सिरपुर"
    },
    {
      q: "13. निम्न में से कौन-सा युग्म सही है?",
      opts: ["A. मैनपाट — महासमुंद", "B. सिरपुर — महासमुंद", "C. भोंगापाल — सरगुजा", "D. मल्हार — कोंडागांव"],
      ans: "B. सिरपुर — महासमुंद"
    },
    {
      q: "14. निम्न में से कौन-सा युग्म सही है?",
      opts: ["A. मैनपाट — सरगुजा", "B. सिरपुर — बिलासपुर", "C. मल्हार — कोंडागांव", "D. भोंगापाल — महासमुंद"],
      ans: "A. मैनपाट — सरगुजा"
    },
    {
      q: "15. सिरपुर में किन धार्मिक परंपराओं के अवशेष मिले हैं?",
      opts: ["A. केवल बौद्ध", "B. केवल जैन", "C. केवल हिंदू", "D. बौद्ध, जैन और हिंदू"],
      ans: "D. बौद्ध, जैन और हिंदू"
    }
  ];

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <article>
        <h1 style={{ fontSize: '2.5rem', lineHeight: '1.2', marginBottom: '20px', color: 'var(--text-main)' }}>
          छत्तीसगढ़ का बौद्धकालीन इतिहास, प्रमुख बौद्ध स्थल और महाजनपद काल
        </h1>
        
        <AuthorByline date={currentDate} />

        <div style={{ position: 'relative', width: '100%', height: 'auto', marginBottom: '40px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 10px rgba(0,0,0,0.3)' }}>
          <Image 
            src="/images/buddhist-period-chhattisgarh.webp" 
            alt="छत्तीसगढ़ का बौद्धकालीन इतिहास: सिरपुर, मैनपाट" 
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
            छत्तीसगढ़ का इतिहास प्राचीन धार्मिक, सांस्कृतिक और पुरातात्विक परंपराओं से समृद्ध रहा है। राज्य के अलग-अलग हिस्सों में मिले पुरातात्विक अवशेष बताते हैं कि यहां बौद्ध, जैन और हिंदू धार्मिक परंपराओं का लंबे समय तक प्रभाव रहा।
          </p>
          <p>
            विशेष रूप से <strong>सिरपुर, भोंगापाल, तुरतुरिया, मल्हार और मैनपाट</strong> जैसे स्थान छत्तीसगढ़ के प्राचीन धार्मिक और सांस्कृतिक इतिहास को समझने में महत्वपूर्ण हैं। वहीं प्राचीन भारत के महाजनपद काल में छत्तीसगढ़ के इतिहास को समझने के लिए दक्षिण कोसल और चेदि महाजनपद से संबंधित संदर्भ महत्वपूर्ण माने जाते हैं।
          </p>
          <p>
            यह विषय <strong>CGPSC, CG Vyapam, व्यापम, शिक्षक भर्ती तथा छत्तीसगढ़ सामान्य ज्ञान</strong> की परीक्षाओं के लिए उपयोगी है।
          </p>

          <h2 className="article-section-title" style={{ marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem', color: 'var(--color-primary)' }}>
            छत्तीसगढ़ में बौद्ध धर्म का प्रभाव
          </h2>
          <p>
            छत्तीसगढ़ का प्राचीन क्षेत्र अलग-अलग समय में दक्षिण कोसल जैसे नामों से जाना जाता रहा है। बौद्ध धर्म के प्रसार के दौरान इस क्षेत्र का धार्मिक और सांस्कृतिक महत्व बढ़ा। बौद्धकालीन छत्तीसगढ़ के इतिहास को समझने के लिए तीन तरह के प्रमाण विशेष रूप से महत्वपूर्ण हैं—
          </p>
          <ul style={{ margin: '10px 0 20px 30px' }}>
            <li>पुरातात्विक प्रमाण</li>
            <li>साहित्यिक स्रोत</li>
            <li>यात्रियों के विवरण</li>
          </ul>
          <p>इनमें सिरपुर के पुरातात्विक अवशेष विशेष महत्व रखते हैं।</p>
          <p>
            छत्तीसगढ़ शासन के आधिकारिक विवरण के अनुसार महासमुंद जिले का सिरपुर (श्रीपुर) एक महत्वपूर्ण ऐतिहासिक एवं पुरातात्विक स्थल है। यहां बौद्ध, जैन और हिंदू धार्मिक परंपराओं से जुड़े अवशेष मिले हैं। शासन के अनुसार यहां अनेक मंदिरों और विहारों के अवशेष प्राप्त हुए हैं तथा सिरपुर का उल्लेख चीनी यात्री ह्वेनसांग के यात्रा विवरण में भी मिलता है।
          </p>

          <h2 className="article-section-title" style={{ marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem', color: 'var(--color-primary)' }}>
            सिरपुर: छत्तीसगढ़ का प्रमुख बौद्ध केंद्र
          </h2>
          <p>सिरपुर वर्तमान में <strong>महासमुंद जिले</strong> में स्थित है। प्राचीन काल में यह क्षेत्र धार्मिक और सांस्कृतिक गतिविधियों का महत्वपूर्ण केंद्र रहा।</p>
          <p>छत्तीसगढ़ शासन के अनुसार सिरपुर में—</p>
          <ul style={{ margin: '10px 0 20px 30px' }}>
            <li>बौद्ध विहार</li>
            <li>हिंदू मंदिर</li>
            <li>जैन धार्मिक अवशेष</li>
            <li>प्राचीन स्थापत्य</li>
            <li>विभिन्न धार्मिक परंपराओं से संबंधित मूर्तियां</li>
          </ul>
          <p>
            प्राप्त हुई हैं। इस कारण सिरपुर को छत्तीसगढ़ की बहुधार्मिक एवं सांस्कृतिक विरासत का महत्वपूर्ण उदाहरण माना जाता है। सरकारी विवरण में यहां 22 शिव मंदिर, 5 विष्णु मंदिर, 3 जैन विहार और एक विशाल बौद्ध विहार के अवशेषों का उल्लेख किया गया है।
          </p>

          <h3 style={{ marginTop: '30px', color: 'var(--color-primary)' }}>सिरपुर और ह्वेनसांग</h3>
          <p>
            7वीं शताब्दी में भारत की यात्रा करने वाले चीनी यात्री ह्वेनसांग ने भी सिरपुर का उल्लेख किया था। सरकारी विवरण के अनुसार सिरपुर में बौद्ध विहार और स्तूपों का उल्लेख उसके यात्रा विवरण से भी जुड़ा है। इससे यह समझने में मदद मिलती है कि सिरपुर केवल स्थानीय धार्मिक केंद्र नहीं था, बल्कि उस समय दूर-दूर तक इसकी पहचान थी।
          </p>

          <h3 style={{ marginTop: '30px', color: 'var(--color-primary)' }}>आनंदप्रभु कुटीर विहार</h3>
          <p>
            सिरपुर की बौद्ध विरासत में <strong>आनंदप्रभु कुटीर विहार</strong> का विशेष स्थान है। छत्तीसगढ़ शासन के आधिकारिक विवरण में इसे बौद्ध भिक्षुओं का प्रमुख केंद्र बताया गया है। यहां चीन से आए भिक्षुओं के रहने का भी उल्लेख मिलता है। 
            <br />
            <strong>परीक्षा के लिए:</strong> यदि पूछा जाए कि सिरपुर का प्रमुख बौद्ध विहार कौन-सा है, तो 'आनंदप्रभु कुटीर विहार' महत्वपूर्ण उत्तर होगा।
          </p>

          <h3 style={{ marginTop: '30px', color: 'var(--color-primary)' }}>सिरपुर की सबसे बड़ी विशेषता: धार्मिक सह-अस्तित्व</h3>
          <p>
            सिरपुर की खासियत केवल बौद्ध अवशेष होना नहीं है। यहां बौद्ध, जैन, शैव और वैष्णव परंपराओं के प्रमाण एक ही ऐतिहासिक क्षेत्र में मिलते हैं। छत्तीसगढ़ शासन भी सिरपुर को बौद्ध, जैन और हिंदू स्थापत्य कला के संगम के रूप में प्रस्तुत करता है।
          </p>

          <h2 className="article-section-title" style={{ marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem', color: 'var(--color-primary)' }}>
            भोंगापाल: विशाल बुद्ध प्रतिमा के लिए प्रसिद्ध
          </h2>
          <p>
            भोंगापाल छत्तीसगढ़ के <strong>कोंडागांव जिले</strong> में स्थित है। यह क्षेत्र बौद्ध विरासत से जुड़ा हुआ है और यहां बुद्ध से संबंधित पुरातात्विक महत्व के प्रमाण मिलते हैं। वर्तमान समय में भी भोंगापाल की बौद्ध पहचान को महत्व दिया जा रहा है। छत्तीसगढ़ शासन ने यहां बुद्ध शांति पार्क का शुभारंभ किया है।
          </p>
          <div style={{ background: 'var(--card-bg-hover)', padding: '15px', borderRadius: '8px', borderLeft: '4px solid var(--color-primary)', margin: '15px 0', fontWeight: 'bold' }}>
            परीक्षा के लिए: भोंगापाल → कोंडागांव → बौद्ध विरासत
          </div>

          <h2 className="article-section-title" style={{ marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem', color: 'var(--color-primary)' }}>
            तुरतुरिया और मल्हार
          </h2>
          <h3 style={{ marginTop: '10px', color: 'var(--text-main)' }}>तुरतुरिया</h3>
          <p>
            तुरतुरिया वर्तमान <strong>बलौदाबाजार-भाटापारा</strong> क्षेत्र में स्थित महत्वपूर्ण ऐतिहासिक स्थल है। सरकारी प्रकाशनों में तुरतुरिया को प्राचीन धार्मिक और सांस्कृतिक महत्व वाला स्थल बताया गया है। यह राम वन गमन पर्यटन परिपथ के प्रमुख स्थलों में भी शामिल है। बौद्धकालीन अध्ययन में तुरतुरिया का उल्लेख बौद्ध परंपरा और प्राचीन धार्मिक गतिविधियों से जुड़े स्थल के रूप में किया जाता है।
          </p>
          
          <h3 style={{ marginTop: '20px', color: 'var(--text-main)' }}>मल्हार</h3>
          <p>
            मल्हार वर्तमान <strong>बिलासपुर जिले</strong> से संबंधित महत्वपूर्ण प्राचीन स्थल है। यह क्षेत्र पुरातात्विक दृष्टि से महत्वपूर्ण है और छत्तीसगढ़ के प्राचीन इतिहास के अध्ययन में इसका उल्लेख मिलता है। मल्हार को केवल धार्मिक स्थल के रूप में नहीं बल्कि एक महत्वपूर्ण पुरातात्विक क्षेत्र के रूप में समझना चाहिए, क्योंकि यहां प्राचीन सभ्यता और धार्मिक गतिविधियों से संबंधित अवशेष प्राप्त हुए हैं।
          </p>

          <h2 className="article-section-title" style={{ marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem', color: 'var(--color-primary)' }}>
            मैनपाट: सरगुजा की बौद्ध और तिब्बती विरासत
          </h2>
          <p>मैनपाट <strong>सरगुजा जिले</strong> में स्थित है।</p>
          <p>
            सरगुजा संभाग की आधिकारिक वेबसाइट के अनुसार मैनपाट की पहाड़ियां सरगुजा जिले की प्रमुख पहाड़ी श्रृंखलाओं में शामिल हैं। 1962–63 के दौरान तिब्बती शरणार्थियों को यहां बसाया गया था और आज भी क्षेत्र में तिब्बती संस्कृति की स्पष्ट झलक देखने को मिलती है। 
          </p>
          <p>
            छत्तीसगढ़ शासन के जनसंपर्क विभाग के अनुसार मैनपाट को “छत्तीसगढ़ का शिमला” और “मिनी तिब्बत” भी कहा जाता है। यहां कई बौद्ध मठ और तिब्बती शरणार्थी शिविर हैं, जो क्षेत्र की बौद्ध एवं तिब्बती सांस्कृतिक पहचान को दर्शाते हैं।
          </p>
          <div style={{ background: 'var(--card-bg-hover)', padding: '15px', borderRadius: '8px', borderLeft: '4px solid var(--color-primary)', margin: '15px 0', fontWeight: 'bold' }}>
            परीक्षा के लिए: मैनपाट → सरगुजा → तिब्बती संस्कृति → बौद्ध मठ
          </div>

          <h2 className="article-section-title" style={{ marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem', color: 'var(--color-primary)' }}>
            बौद्धकालीन छत्तीसगढ़ के प्रमुख स्थल (Summary)
          </h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px', marginTop: '15px' }}>
            <thead>
              <tr style={{ background: 'var(--color-primary)', color: 'white', textAlign: 'left' }}>
                <th style={{ padding: '12px', border: '1px solid var(--border-color)' }}>स्थल</th>
                <th style={{ padding: '12px', border: '1px solid var(--border-color)' }}>जिला/क्षेत्र</th>
                <th style={{ padding: '12px', border: '1px solid var(--border-color)' }}>प्रमुख पहचान</th>
              </tr>
            </thead>
            <tbody>
              <tr><td style={{ padding: '12px', border: '1px solid var(--border-color)', fontWeight: 'bold' }}>सिरपुर</td><td style={{ padding: '12px', border: '1px solid var(--border-color)' }}>महासमुंद</td><td style={{ padding: '12px', border: '1px solid var(--border-color)' }}>बौद्ध विहार एवं प्राचीन धार्मिक अवशेष</td></tr>
              <tr style={{ background: 'var(--card-bg-hover)' }}><td style={{ padding: '12px', border: '1px solid var(--border-color)', fontWeight: 'bold' }}>भोंगापाल</td><td style={{ padding: '12px', border: '1px solid var(--border-color)' }}>कोंडागांव</td><td style={{ padding: '12px', border: '1px solid var(--border-color)' }}>बौद्ध विरासत, बुद्ध शांति पार्क</td></tr>
              <tr><td style={{ padding: '12px', border: '1px solid var(--border-color)', fontWeight: 'bold' }}>तुरतुरिया</td><td style={{ padding: '12px', border: '1px solid var(--border-color)' }}>बलौदाबाजार-भाटापारा</td><td style={{ padding: '12px', border: '1px solid var(--border-color)' }}>प्राचीन धार्मिक-सांस्कृतिक स्थल</td></tr>
              <tr style={{ background: 'var(--card-bg-hover)' }}><td style={{ padding: '12px', border: '1px solid var(--border-color)', fontWeight: 'bold' }}>मल्हार</td><td style={{ padding: '12px', border: '1px solid var(--border-color)' }}>बिलासपुर</td><td style={{ padding: '12px', border: '1px solid var(--border-color)' }}>महत्वपूर्ण पुरातात्विक स्थल</td></tr>
              <tr><td style={{ padding: '12px', border: '1px solid var(--border-color)', fontWeight: 'bold' }}>मैनपाट</td><td style={{ padding: '12px', border: '1px solid var(--border-color)' }}>सरगुजा</td><td style={{ padding: '12px', border: '1px solid var(--border-color)' }}>बौद्ध मठ एवं तिब्बती संस्कृति</td></tr>
            </tbody>
          </table>

          <h2 className="article-section-title" style={{ marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem', color: 'var(--color-primary)' }}>
            महाजनपद काल क्या था?
          </h2>
          <p>
            अब बात करते हैं छत्तीसगढ़ के प्राचीन इतिहास के दूसरे महत्वपूर्ण हिस्से की—महाजनपद काल। प्राचीन भारत में छोटे-छोटे जनपदों के विकसित होकर बड़े राजनीतिक राज्यों में बदलने की प्रक्रिया के दौरान कई शक्तिशाली राज्य अस्तित्व में आए। इन्हीं प्रमुख राज्यों को महाजनपद कहा गया।
          </p>
          <p>
            भारतीय इतिहास में <strong>16 महाजनपदों</strong> का उल्लेख मिलता है। छत्तीसगढ़ के विद्यार्थियों के लिए महाजनपद काल इसलिए महत्वपूर्ण है क्योंकि छत्तीसगढ़ के प्राचीन इतिहास को समझते समय दक्षिण कोसल और <strong>चेदि</strong> जैसे क्षेत्रों का संदर्भ सामने आता है। SCERT छत्तीसगढ़ की शैक्षिक सामग्री में भी महाजनपद काल को प्राचीन भारतीय इतिहास के अलग अध्ययन-अध्याय के रूप में शामिल किया गया है।
          </p>
          <p>
            <strong>चेदि महाजनपद और छत्तीसगढ़:</strong> चेदि प्राचीन भारत के प्रमुख महाजनपदों में से एक था। चेदि की राजधानी शुक्तिमती मानी जाती है। छत्तीसगढ़-विशेष इतिहास के अध्ययन में चेदि महाजनपद का संदर्भ इसलिए महत्वपूर्ण है क्योंकि प्राचीन छत्तीसगढ़ के राजनीतिक एवं भौगोलिक इतिहास को समझने में इसका उल्लेख किया जाता है।
          </p>
          <div style={{ background: 'var(--card-bg-hover)', padding: '15px', borderRadius: '8px', borderLeft: '4px solid var(--color-primary)', margin: '15px 0', fontWeight: 'bold' }}>
            याद रखने का आसान तरीका: महाजनपद → चेदि → शुक्तिमती
          </div>

          <h2 className="article-section-title" style={{ marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem', color: 'var(--color-primary)' }}>
            बौद्धकाल और महाजनपद काल में अंतर
          </h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px', marginTop: '15px' }}>
            <thead>
              <tr style={{ background: 'var(--color-primary)', color: 'white', textAlign: 'left' }}>
                <th style={{ padding: '12px', border: '1px solid var(--border-color)' }}>आधार</th>
                <th style={{ padding: '12px', border: '1px solid var(--border-color)' }}>बौद्धकाल</th>
                <th style={{ padding: '12px', border: '1px solid var(--border-color)' }}>महाजनपद काल</th>
              </tr>
            </thead>
            <tbody>
              <tr><td style={{ padding: '12px', border: '1px solid var(--border-color)', fontWeight: 'bold' }}>मुख्य विषय</td><td style={{ padding: '12px', border: '1px solid var(--border-color)' }}>बौद्ध धर्म और उसका प्रसार</td><td style={{ padding: '12px', border: '1px solid var(--border-color)' }}>बड़े राजनीतिक राज्यों का विकास</td></tr>
              <tr style={{ background: 'var(--card-bg-hover)' }}><td style={{ padding: '12px', border: '1px solid var(--border-color)', fontWeight: 'bold' }}>प्रमुख संदर्भ</td><td style={{ padding: '12px', border: '1px solid var(--border-color)' }}>गौतम बुद्ध, बौद्ध विहार</td><td style={{ padding: '12px', border: '1px solid var(--border-color)' }}>16 महाजनपद</td></tr>
              <tr><td style={{ padding: '12px', border: '1px solid var(--border-color)', fontWeight: 'bold' }}>महत्वपूर्ण नाम</td><td style={{ padding: '12px', border: '1px solid var(--border-color)' }}>ह्वेनसांग, सिरपुर</td><td style={{ padding: '12px', border: '1px solid var(--border-color)' }}>चेदि, शुक्तिमती</td></tr>
              <tr style={{ background: 'var(--card-bg-hover)' }}><td style={{ padding: '12px', border: '1px solid var(--border-color)', fontWeight: 'bold' }}>परीक्षा में फोकस</td><td style={{ padding: '12px', border: '1px solid var(--border-color)' }}>स्थल + धर्म + पुरातत्व</td><td style={{ padding: '12px', border: '1px solid var(--border-color)' }}>महाजनपद + राजधानी</td></tr>
            </tbody>
          </table>

          <div style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '20px', borderRadius: '8px', border: '2px dashed var(--color-primary)', margin: '30px 0' }}>
            <h3 style={{ color: 'var(--color-primary)', marginTop: 0 }}>Quick Revision Trick (30 Seconds)</h3>
            <ul style={{ margin: '10px 0 0 20px', fontWeight: '500' }}>
              <li><strong>सिरपुर</strong> → महासमुंद → बौद्ध विहार</li>
              <li><strong>भोंगापाल</strong> → कोंडागांव → बुद्ध</li>
              <li><strong>तुरतुरिया</strong> → बलौदाबाजार → प्राचीन धार्मिक स्थल</li>
              <li><strong>मल्हार</strong> → बिलासपुर → पुरातत्व</li>
              <li><strong>मैनपाट</strong> → सरगुजा → तिब्बती संस्कृति + बौद्ध मठ</li>
              <li><strong>महाजनपद</strong> → 16 → चेदि → शुक्तिमती</li>
            </ul>
          </div>

          <MCQSection mcqs={mcqs} title="बौद्धकालीन छत्तीसगढ़ एवं महाजनपद काल - MCQs" />

          <h2 className="article-section-title" style={{ marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem', color: 'var(--color-primary)' }}>
            निष्कर्ष
          </h2>
          <p>
            छत्तीसगढ़ का प्राचीन इतिहास धार्मिक विविधता, पुरातात्विक विरासत और प्राचीन राजनीतिक परंपराओं का महत्वपूर्ण उदाहरण है। सिरपुर इस इतिहास का सबसे प्रमुख केंद्रों में से एक है, जहां बौद्ध, जैन और हिंदू परंपराओं से जुड़े अवशेष एक साथ मिलते हैं। ह्वेनसांग के यात्रा विवरण में भी सिरपुर का उल्लेख मिलता है।
          </p>
          <p>
            दूसरी ओर मैनपाट आज भी छत्तीसगढ़ की बौद्ध और तिब्बती सांस्कृतिक विरासत का महत्वपूर्ण केंद्र है। सरगुजा संभाग की आधिकारिक जानकारी के अनुसार यहां तिब्बती समुदाय की बसाहट और सांस्कृतिक गतिविधियों की स्पष्ट उपस्थिति है। प्रतियोगी परीक्षा की तैयारी के लिए इस पूरे अध्याय को केवल रटने के बजाय <strong>स्थान + जिला + ऐतिहासिक महत्व</strong> के रूप में याद करना सबसे उपयोगी रहेगा।
          </p>
        </div>

        <ArticleFooter 
          date={currentDate}
          sourceText="छत्तीसगढ़ जनसंपर्क विभाग, सरगुजा संभाग आधिकारिक जानकारी, SCERT छत्तीसगढ़ सामाजिक विज्ञान"
        />

        {/* Disclaimer Section */}
        <div style={{ marginTop: '40px', padding: '20px', backgroundColor: 'var(--card-bg-hover)', border: '1px solid var(--border-color)', borderRadius: '8px', fontSize: '0.9rem', color: '#ef4444' }}>
          <h4 style={{ margin: '0 0 10px 0', color: '#ef4444' }}>महत्वपूर्ण सूचना / Disclaimer</h4>
          <p style={{ margin: 0, color: 'var(--text-main)' }}>
            अस्वीकरण: इस लेख में दी गई जानकारी विद्यार्थियों की प्रतियोगी परीक्षा की तैयारी और सामान्य शैक्षणिक जानकारी के उद्देश्य से प्रकाशित की गई है। अलग-अलग पुस्तकों, स्थानीय परंपराओं या अन्य स्रोतों में किसी स्थान के नाम, वर्तनी अथवा ऐतिहासिक व्याख्या में अंतर हो सकता है। इसलिए परीक्षा के लिए अंतिम रूप से संबंधित आधिकारिक पाठ्यक्रम, परीक्षा बोर्ड की अधिसूचना और मान्य संदर्भ सामग्री से तथ्यों का मिलान जरूर करें। <br/><br/>
            यदि इस लेख में आपको कोई तथ्यात्मक त्रुटि दिखाई देती है, तो कृपया <strong>CGSSB.com.in</strong> के Contact माध्यम से हमें बताएं, ताकि आवश्यक सुधार किया जा सके।
          </p>
        </div>
      </article>
    </div>
  );
}
