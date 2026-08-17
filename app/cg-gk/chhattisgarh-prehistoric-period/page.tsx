import Image from "next/image";
import type { Metadata } from "next";
import ArticleFooter from "@/components/ArticleFooter";
import AuthorByline from "@/components/AuthorByline";

export const metadata: Metadata = {
  title: "छत्तीसगढ़ का प्राचीन इतिहास: प्रागैतिहासिक काल से महाभारत काल तक",
  description: "प्रागैतिहासिक काल, पाषाण काल, महापाषाण काल, वैदिक काल, रामायण काल और महाभारत काल के प्रमुख स्थल तथा ऐतिहासिक तथ्य। CGPSC और CGSSB परीक्षाओं के लिए महत्वपूर्ण।",
  openGraph: {
    title: "छत्तीसगढ़ का प्राचीन इतिहास: प्रागैतिहासिक काल से महाभारत काल तक",
    description: "प्रागैतिहासिक काल, पाषाण काल, महापाषाण काल, वैदिक काल, रामायण काल और महाभारत काल के प्रमुख स्थल तथा ऐतिहासिक तथ्य।",
    type: "article",
    publishedTime: "2026-08-17T00:00:00.000Z",
    authors: ["Yuvraj Pratap Rajwade"],
  },
};

export default function CGAncientHistoryPage() {
  const currentDate = "August 17, 2026";

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <article>
        <h1 style={{ fontSize: '2.5rem', lineHeight: '1.2', marginBottom: '20px', color: 'var(--text-main)' }}>
          छत्तीसगढ़ का प्राचीन इतिहास: प्रागैतिहासिक काल से महाभारत काल तक | प्रमुख स्थल, पाषाण काल, वैदिक काल और ऐतिहासिक तथ्य
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
            छत्तीसगढ़ का इतिहास केवल राजवंशों और प्राचीन राज्यों तक सीमित नहीं है। इस क्षेत्र में मानव जीवन के बहुत पुराने प्रमाण भी मिले हैं। रायगढ़, बालोद, कांकेर, राजनांदगांव, कोरबा, सरगुजा, धमतरी और बस्तर जैसे क्षेत्रों में मिले शैलचित्र, पत्थर के औजार, शैलाश्रय तथा अन्य पुरातात्विक अवशेष बताते हैं कि वर्तमान छत्तीसगढ़ क्षेत्र में मानव गतिविधियां बहुत पुराने समय से रही हैं।
          </p>
          <p>
            प्रतियोगी परीक्षाओं जैसे <strong>CGPSC, CG Vyapam, CGSSB, शिक्षक भर्ती और अन्य छत्तीसगढ़ सामान्य ज्ञान परीक्षाओं</strong> में छत्तीसगढ़ के प्राचीन इतिहास से जुड़े प्रश्न पूछे जाते हैं। इसलिए केवल घटनाओं को याद करने के बजाय प्रमुख स्थल, उनके जिले और उनसे संबंधित विशेषताओं को समझना जरूरी है।
          </p>
          <p>
            इस लेख में छत्तीसगढ़ के इतिहास को <strong>प्रागैतिहासिक काल, पाषाण काल, महापाषाण काल, आद्य-ऐतिहासिक/वैदिक काल, रामायण काल और महाभारत काल</strong> के संदर्भ में आसान भाषा में समझाया गया है।
          </p>

          <h2 className="article-section-title" style={{ marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem', color: 'var(--color-secondary)' }}>
            छत्तीसगढ़ के इतिहास का सामान्य विभाजन
          </h2>
          <p>छत्तीसगढ़ के इतिहास को अध्ययन की सुविधा के लिए मुख्य रूप से तीन बड़े भागों में समझा जा सकता है—</p>
          <ul style={{ margin: '10px 0 20px 30px' }}>
            <li><strong>प्रागैतिहासिक काल</strong></li>
            <li><strong>आद्य-ऐतिहासिक काल</strong></li>
            <li><strong>ऐतिहासिक काल</strong></li>
          </ul>
          <p>
            प्रागैतिहासिक काल के अध्ययन में लिखित स्रोतों की तुलना में पुरातात्विक अवशेष अधिक महत्वपूर्ण होते हैं। इसी कारण छत्तीसगढ़ के शैलचित्र, गुफाएं, पत्थर के औजार और अन्य पुरातात्विक स्थल विशेष महत्व रखते हैं।
          </p>

          <h2 className="article-section-title" style={{ marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem', color: 'var(--color-secondary)' }}>
            1. छत्तीसगढ़ का प्रागैतिहासिक काल
          </h2>
          <p>
            प्रागैतिहासिक काल को सामान्य रूप से पाषाण काल की विभिन्न अवस्थाओं के माध्यम से समझा जाता है। छत्तीसगढ़ में इसके प्रमुख चरण इस प्रकार बताए जाते हैं—
          </p>
          <ul style={{ margin: '10px 0 20px 30px' }}>
            <li>पूर्व पाषाण काल</li>
            <li>मध्य पाषाण काल</li>
            <li>उत्तर पाषाण काल</li>
            <li>नव पाषाण काल</li>
          </ul>
          <p>
            इन कालों से जुड़े सबसे महत्वपूर्ण प्रमाण <strong>रायगढ़ और आसपास के क्षेत्रों</strong> से मिले हैं।
          </p>

          <h3 style={{ marginTop: '30px', color: 'var(--color-primary)' }}>पूर्व पाषाण काल</h3>
          <p>
            पूर्व पाषाण काल को मानव इतिहास की शुरुआती अवस्थाओं में रखा जाता है। इस समय पत्थर के औजार मानव जीवन का महत्वपूर्ण हिस्सा थे।
          </p>
          
          <div style={{ background: 'var(--card-bg-hover)', padding: '15px', borderRadius: '8px', borderLeft: '4px solid var(--color-primary)', margin: '15px 0' }}>
            <strong style={{ color: 'var(--text-main)' }}>पूर्व पाषाण काल के प्रमुख स्थल</strong>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px', color: 'var(--text-main)' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--border-color)', textAlign: 'left' }}>
                  <th style={{ padding: '8px' }}>क्रम</th>
                  <th style={{ padding: '8px' }}>स्थल</th>
                  <th style={{ padding: '8px' }}>जिला</th>
                </tr>
              </thead>
              <tbody>
                <tr><td style={{ padding: '8px', borderBottom: '1px solid var(--border-color)' }}>1</td><td style={{ padding: '8px', borderBottom: '1px solid var(--border-color)' }}>सिंघनपुर</td><td style={{ padding: '8px', borderBottom: '1px solid var(--border-color)' }}>रायगढ़</td></tr>
                <tr><td style={{ padding: '8px', borderBottom: '1px solid var(--border-color)' }}>2</td><td style={{ padding: '8px', borderBottom: '1px solid var(--border-color)' }}>छापामारा</td><td style={{ padding: '8px', borderBottom: '1px solid var(--border-color)' }}>रायगढ़</td></tr>
                <tr><td style={{ padding: '8px', borderBottom: '1px solid var(--border-color)' }}>3</td><td style={{ padding: '8px', borderBottom: '1px solid var(--border-color)' }}>भंवरखोल</td><td style={{ padding: '8px', borderBottom: '1px solid var(--border-color)' }}>रायगढ़</td></tr>
                <tr><td style={{ padding: '8px', borderBottom: '1px solid var(--border-color)' }}>4</td><td style={{ padding: '8px', borderBottom: '1px solid var(--border-color)' }}>गिधा</td><td style={{ padding: '8px', borderBottom: '1px solid var(--border-color)' }}>रायगढ़</td></tr>
                <tr><td style={{ padding: '8px', borderBottom: '1px solid var(--border-color)' }}>5</td><td style={{ padding: '8px', borderBottom: '1px solid var(--border-color)' }}>सोनबरसा/अमरगुफा</td><td style={{ padding: '8px', borderBottom: '1px solid var(--border-color)' }}>रायगढ़</td></tr>
              </tbody>
            </table>
          </div>

          <h4 style={{ marginTop: '20px', color: 'var(--text-main)' }}>सिंघनपुर की गुफा</h4>
          <p>
            सिंघनपुर को छत्तीसगढ़ के प्रागैतिहासिक इतिहास का एक महत्वपूर्ण स्थल माना जाता है। इसे कई अध्ययन सामग्री में <strong>“छत्तीसगढ़ का भीमबेटका”</strong> भी कहा गया है। यह रायगढ़ क्षेत्र में स्थित है और यहां के शैलचित्रों तथा पाषाणकालीन अवशेषों का विशेष महत्व है।
          </p>
          <ul style={{ margin: '10px 0 20px 30px' }}>
            <li><strong>जिला:</strong> रायगढ़</li>
            <li><strong>खोज:</strong> एंडरसन द्वारा 1910 ई. में</li>
            <li><strong>विस्तृत अध्ययन:</strong> 1923-27 ई.</li>
            <li>शैलचित्रों में मानव तथा विभिन्न जीव-जंतुओं के चित्र मिलते हैं।</li>
            <li>यहां सीढ़ी तथा डंडे जैसी आकृतियों वाली मानव आकृतियों का उल्लेख मिलता है।</li>
            <li>शिकार से संबंधित चित्र भी महत्वपूर्ण हैं तथा यहां पाषाण उपकरणों के प्रमाण मिले हैं।</li>
          </ul>

          <h2 className="article-section-title" style={{ marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem', color: 'var(--color-secondary)' }}>
            2. मध्य पाषाण काल
          </h2>
          <p>
            मध्य पाषाण काल में मानव के औजारों तथा शैलचित्रों में पहले की तुलना में अलग विशेषताएं दिखाई देती हैं। इस काल से जुड़े स्थलों की सूची में <strong>कबरा पहाड़</strong> विशेष रूप से महत्वपूर्ण है।
          </p>
          
          <div style={{ background: 'var(--card-bg-hover)', padding: '15px', borderRadius: '8px', borderLeft: '4px solid var(--color-primary)', margin: '15px 0' }}>
            <strong style={{ color: 'var(--text-main)' }}>मध्य पाषाण काल के प्रमुख स्थल</strong>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px', color: 'var(--text-main)' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--border-color)', textAlign: 'left' }}>
                  <th style={{ padding: '8px' }}>क्रम</th>
                  <th style={{ padding: '8px' }}>स्थल</th>
                  <th style={{ padding: '8px' }}>जिला</th>
                </tr>
              </thead>
              <tbody>
                <tr><td style={{ padding: '8px', borderBottom: '1px solid var(--border-color)' }}>1</td><td style={{ padding: '8px', borderBottom: '1px solid var(--border-color)' }}>कबरा पहाड़</td><td style={{ padding: '8px', borderBottom: '1px solid var(--border-color)' }}>रायगढ़</td></tr>
                <tr><td style={{ padding: '8px', borderBottom: '1px solid var(--border-color)' }}>2-8</td><td style={{ padding: '8px', borderBottom: '1px solid var(--border-color)' }}>कालीपुर, खड़गघाट, गढ़चंदेला, घाटलोहांगा, भातेवाड़ा, राजपुर, गढ़ घोघरा</td><td style={{ padding: '8px', borderBottom: '1px solid var(--border-color)' }}>बस्तर</td></tr>
                <tr><td style={{ padding: '8px', borderBottom: '1px solid var(--border-color)' }}>9</td><td style={{ padding: '8px', borderBottom: '1px solid var(--border-color)' }}>जयमरगा</td><td style={{ padding: '8px', borderBottom: '1px solid var(--border-color)' }}>जशपुर</td></tr>
                <tr><td style={{ padding: '8px', borderBottom: '1px solid var(--border-color)' }}>10</td><td style={{ padding: '8px', borderBottom: '1px solid var(--border-color)' }}>केराझर</td><td style={{ padding: '8px', borderBottom: '1px solid var(--border-color)' }}>रायगढ़</td></tr>
              </tbody>
            </table>
          </div>

          <h4 style={{ marginTop: '20px', color: 'var(--text-main)' }}>कबरा पहाड़</h4>
          <p>
            कबरा पहाड़ रायगढ़ का एक महत्वपूर्ण प्रागैतिहासिक स्थल है। यहां लाल रंग के शैलचित्रों के प्रमाण मिलते हैं। शैलचित्रों में विभिन्न पशु आकृतियों तथा मानव समूहों का चित्रण मिलता है। यहां से पाषाणकालीन औजारों के प्रमाण भी जुड़े हैं।
          </p>

          <h2 className="article-section-title" style={{ marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem', color: 'var(--color-secondary)' }}>
            3. उत्तर पाषाण काल
          </h2>
          <p>
            उत्तर पाषाण काल से संबंधित प्रमाणों में छोटे पाषाण उपकरणों और शैलचित्रों का महत्व है। इससे संबंधित प्रमुख स्थल के रूप में <strong>धनपुर</strong> का उल्लेख मिलता है।
          </p>
          <ul style={{ margin: '10px 0 20px 30px' }}>
            <li><strong>धनपुर (गौरेला-पेंड्रा-मरवाही):</strong> यहां मानव आकृतियों से संबंधित शैलचित्रों का उल्लेख मिलता है।</li>
          </ul>

          <h2 className="article-section-title" style={{ marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem', color: 'var(--color-secondary)' }}>
            4. नव पाषाण काल
          </h2>
          <p>
            नव पाषाण काल तक मानव जीवन में महत्वपूर्ण बदलाव दिखाई देने लगे थे। इस चरण में मानव के जीवन में स्थायित्व, कृषि, पशुपालन और अन्य गतिविधियों का विकास हुआ। छत्तीसगढ़ के संदर्भ में <strong>चितवाडोंगरी</strong> एक महत्वपूर्ण स्थल है।
          </p>
          <ul style={{ margin: '10px 0 20px 30px' }}>
            <li><strong>चितवाडोंगरी (बालोद):</strong> यहां की गुफाओं में अनेक शैलचित्रों का प्रमाण मिला है।</li>
          </ul>

          <h2 className="article-section-title" style={{ marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem', color: 'var(--color-secondary)' }}>
            5. छत्तीसगढ़ के अन्य प्रमुख प्रागैतिहासिक स्थल
          </h2>
          <p>
            छत्तीसगढ़ के अलग-अलग क्षेत्रों में कई अन्य शैलाश्रय और शैलचित्र स्थल भी मिलते हैं। इनमें प्रमुख नाम हैं: खैरपुर, सूतीपाट/भंवरखोल, करमागढ़, चारामा, बसनाझार, ओंगना, सिरौली-डोंगरी, छोटे पंडरमुड़ा, गाड़ागौरी, उड़कुड़ा और खैरखेड़ा। इनमें कई स्थलों से पशु, मानव, शिकार, कृषि तथा अन्य गतिविधियों से संबंधित शैलचित्रों का उल्लेख मिलता है।
          </p>

          <h2 className="article-section-title" style={{ marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem', color: 'var(--color-secondary)' }}>
            6. महापाषाण काल (Megalithic Age)
          </h2>
          <p>
            महापाषाण या Megalithic संस्कृति में बड़े पत्थरों से बनाए गए स्मारक और अन्य संरचनाएं महत्वपूर्ण मानी जाती हैं। छत्तीसगढ़ में महापाषाणकालीन अवशेष कई क्षेत्रों से जुड़े हैं।
          </p>

          <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px', marginTop: '15px' }}>
            <thead>
              <tr style={{ background: 'var(--color-primary)', color: 'white', textAlign: 'left' }}>
                <th style={{ padding: '12px', border: '1px solid var(--border-color)' }}>महापाषाण कालीन स्थल</th>
                <th style={{ padding: '12px', border: '1px solid var(--border-color)' }}>जिला</th>
              </tr>
            </thead>
            <tbody>
              <tr><td style={{ padding: '12px', border: '1px solid var(--border-color)' }}>करकाभाटा, करहीभदर, चिरचारी, सोरर, अर्जुनी, मुजगहन, कुरिया, बकेला</td><td style={{ padding: '12px', border: '1px solid var(--border-color)', fontWeight: 'bold' }}>बालोद</td></tr>
              <tr style={{ background: 'var(--card-bg-hover)' }}><td style={{ padding: '12px', border: '1px solid var(--border-color)' }}>टेंगा</td><td style={{ padding: '12px', border: '1px solid var(--border-color)', fontWeight: 'bold' }}>रायगढ़</td></tr>
              <tr><td style={{ padding: '12px', border: '1px solid var(--border-color)' }}>गमावाड़ा</td><td style={{ padding: '12px', border: '1px solid var(--border-color)', fontWeight: 'bold' }}>दंतेवाड़ा</td></tr>
              <tr style={{ background: 'var(--card-bg-hover)' }}><td style={{ padding: '12px', border: '1px solid var(--border-color)' }}>मल्हार</td><td style={{ padding: '12px', border: '1px solid var(--border-color)', fontWeight: 'bold' }}>बिलासपुर</td></tr>
            </tbody>
          </table>

          <h2 className="article-section-title" style={{ marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem', color: 'var(--color-secondary)' }}>
            7. आद्य-ऐतिहासिक और वैदिक काल
          </h2>
          <p>
            प्रागैतिहासिक काल के बाद छत्तीसगढ़ के इतिहास को समझने में आद्य-ऐतिहासिक काल महत्वपूर्ण कड़ी बनता है (लगभग 2300 से 1750 ई.पू.)। इसके बाद वैदिक काल की चर्चा आती है।
          </p>
          <p>
            भारतीय इतिहास में वैदिक काल को सामान्य रूप से लगभग <strong>1500 ई.पू. से 600 ई.पू.</strong> तक की अवधि से जोड़ा जाता है।
          </p>
          <ul style={{ margin: '10px 0 20px 30px' }}>
            <li><strong>पूर्व वैदिक काल (1500 ई.पू. से 1000 ई.पू.):</strong> इस काल में आर्यों के विस्तार और उत्तर भारतीय क्षेत्रों में उनके प्रभाव की चर्चा मिलती है।</li>
            <li><strong>उत्तर वैदिक काल (1000 ई.पू. से 600 ई.पू.):</strong> इस काल में आर्यों का विस्तार मध्य भारत तथा दक्षिण की ओर भी हुआ।</li>
          </ul>

          <div style={{ background: 'var(--card-bg-hover)', padding: '15px', borderRadius: '8px', borderLeft: '4px solid var(--color-primary)', margin: '15px 0' }}>
            <strong style={{ color: 'var(--text-main)' }}>परीक्षा के लिए महत्वपूर्ण तथ्य (वैदिक काल)</strong>
            <ul style={{ margin: '10px 0 0 20px', color: 'var(--text-main)' }}>
              <li><strong>नर्मदा नदी</strong> का उल्लेख <strong>रेवा</strong> नाम से मिलता है।</li>
              <li><strong>शतपथ ब्राह्मण</strong> में पूर्वी तथा पश्चिमी समुद्र का उल्लेख मिलता है।</li>
              <li>पाणिनि के अष्टाध्यायी में <strong>कोसल/दक्षिण कोसल</strong> का उल्लेख मिलने की बात कही गई है।</li>
            </ul>
          </div>

          <h2 className="article-section-title" style={{ marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem', color: 'var(--color-secondary)' }}>
            8. रामायण काल और छत्तीसगढ़
          </h2>
          <p>
            छत्तीसगढ़ के प्राचीन इतिहास में रामायण से जुड़े स्थानों और परंपराओं का भी महत्वपूर्ण स्थान है। छत्तीसगढ़ के विभिन्न क्षेत्रों में रामायणकालीन ऋषियों, आश्रमों और स्थानों से संबंधित परंपराएं मिलती हैं।
          </p>

          <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px', marginTop: '15px' }}>
            <thead>
              <tr style={{ background: 'var(--color-primary)', color: 'white', textAlign: 'left' }}>
                <th style={{ padding: '12px', border: '1px solid var(--border-color)' }}>ऋषि/आश्रम</th>
                <th style={{ padding: '12px', border: '1px solid var(--border-color)' }}>स्थान / क्षेत्र</th>
              </tr>
            </thead>
            <tbody>
              <tr><td style={{ padding: '12px', border: '1px solid var(--border-color)' }}>अगस्त्य मुनि</td><td style={{ padding: '12px', border: '1px solid var(--border-color)' }}>सीतामढ़ी हरचौका (MCB) / हरिभाठा (धमतरी)</td></tr>
              <tr style={{ background: 'var(--card-bg-hover)' }}><td style={{ padding: '12px', border: '1px solid var(--border-color)' }}>वाल्मीकि ऋषि</td><td style={{ padding: '12px', border: '1px solid var(--border-color)' }}>तुरतुरिया (बलौदाबाजार-भाटापारा)</td></tr>
              <tr><td style={{ padding: '12px', border: '1px solid var(--border-color)' }}>शबरी आश्रम / मतंग ऋषि</td><td style={{ padding: '12px', border: '1px solid var(--border-color)' }}>शिवरीनारायण (जांजगीर-चांपा)</td></tr>
              <tr style={{ background: 'var(--card-bg-hover)' }}><td style={{ padding: '12px', border: '1px solid var(--border-color)' }}>लोमश ऋषि</td><td style={{ padding: '12px', border: '1px solid var(--border-color)' }}>राजिम (गरियाबंद)</td></tr>
              <tr><td style={{ padding: '12px', border: '1px solid var(--border-color)' }}>सप्त ऋषि, श्रृंगी ऋषि, गौतम ऋषि</td><td style={{ padding: '12px', border: '1px solid var(--border-color)' }}>सिहावा (धमतरी)</td></tr>
              <tr style={{ background: 'var(--card-bg-hover)' }}><td style={{ padding: '12px', border: '1px solid var(--border-color)' }}>वशिष्ठ ऋषि</td><td style={{ padding: '12px', border: '1px solid var(--border-color)' }}>रामगढ़ की पहाड़ी (सरगुजा)</td></tr>
              <tr><td style={{ padding: '12px', border: '1px solid var(--border-color)' }}>सुतीक्ष्ण ऋषि</td><td style={{ padding: '12px', border: '1px solid var(--border-color)' }}>सीता लेखनी की पहाड़ी (सूरजपुर)</td></tr>
            </tbody>
          </table>

          <h2 className="article-section-title" style={{ marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem', color: 'var(--color-secondary)' }}>
            9. महाभारत काल और छत्तीसगढ़
          </h2>
          <p>
            छत्तीसगढ़ का संबंध महाभारत काल से भी जोड़ा जाता है। महाभारत के अलग-अलग पर्वों (जैसे भीष्म पर्व, सभा पर्व, वन पर्व) में छत्तीसगढ़ के लिए <strong>प्राक्कोसल, कोसल, कांतार, और दंडकारण्य</strong> नामों का उल्लेख मिलता है। महानदी के लिए <strong>चित्रोत्पला</strong> नाम का उल्लेख भीष्म पर्व में किया गया है।
          </p>

          <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px', marginTop: '15px' }}>
            <thead>
              <tr style={{ background: 'var(--color-primary)', color: 'white', textAlign: 'left' }}>
                <th style={{ padding: '12px', border: '1px solid var(--border-color)' }}>वर्तमान स्थल</th>
                <th style={{ padding: '12px', border: '1px solid var(--border-color)' }}>प्राचीन नाम/संबंध</th>
                <th style={{ padding: '12px', border: '1px solid var(--border-color)' }}>जिला</th>
              </tr>
            </thead>
            <tbody>
              <tr><td style={{ padding: '12px', border: '1px solid var(--border-color)' }}>रतनपुर</td><td style={{ padding: '12px', border: '1px solid var(--border-color)' }}>मणिपुर/रत्नावलीपुरी (प्राचीन राजधानी)</td><td style={{ padding: '12px', border: '1px solid var(--border-color)' }}>बिलासपुर</td></tr>
              <tr style={{ background: 'var(--card-bg-hover)' }}><td style={{ padding: '12px', border: '1px solid var(--border-color)' }}>आरंग</td><td style={{ padding: '12px', border: '1px solid var(--border-color)' }}>भाण्डेर</td><td style={{ padding: '12px', border: '1px solid var(--border-color)' }}>रायपुर</td></tr>
              <tr><td style={{ padding: '12px', border: '1px solid var(--border-color)' }}>खल्लारी</td><td style={{ padding: '12px', border: '1px solid var(--border-color)' }}>खल्लवाटिका (भीम से संबंधित)</td><td style={{ padding: '12px', border: '1px solid var(--border-color)' }}>महासमुंद</td></tr>
              <tr style={{ background: 'var(--card-bg-hover)' }}><td style={{ padding: '12px', border: '1px solid var(--border-color)' }}>सिरपुर</td><td style={{ padding: '12px', border: '1px solid var(--border-color)' }}>चित्रांगदपुर (बभ्रुवाहन से संबंधित)</td><td style={{ padding: '12px', border: '1px solid var(--border-color)' }}>महासमुंद</td></tr>
              <tr><td style={{ padding: '12px', border: '1px solid var(--border-color)' }}>गुंजी/दमदहरा</td><td style={{ padding: '12px', border: '1px solid var(--border-color)' }}>ऋषभ तीर्थ</td><td style={{ padding: '12px', border: '1px solid var(--border-color)' }}>सक्ती</td></tr>
            </tbody>
          </table>

          {/* MCQ Section */}
          <h2 className="article-section-title" style={{ marginTop: '50px', marginBottom: '20px', fontSize: '1.8rem', color: 'var(--color-secondary)', paddingBottom: '10px', borderBottom: '2px solid var(--border-color)' }}>
            विद्यार्थियों के लिए महत्वपूर्ण MCQ
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '20px' }}>
            {[
              {
                q: "1. सिंघनपुर किस जिले में स्थित है?",
                opts: ["A. बालोद", "B. रायगढ़", "C. कांकेर", "D. महासमुंद"],
                ans: "B. रायगढ़"
              },
              {
                q: "2. “छत्तीसगढ़ का भीमबेटका” किसे कहा जाता है?",
                opts: ["A. कबरा पहाड़", "B. सिंघनपुर", "C. चितवाडोंगरी", "D. मल्हार"],
                ans: "B. सिंघनपुर"
              },
              {
                q: "3. कबरा पहाड़ किस जिले में है?",
                opts: ["A. रायगढ़", "B. बालोद", "C. बस्तर", "D. जशपुर"],
                ans: "A. रायगढ़"
              },
              {
                q: "4. चितवाडोंगरी किस क्षेत्र से संबंधित है?",
                opts: ["A. बालोद", "B. रायगढ़", "C. बिलासपुर", "D. दंतेवाड़ा"],
                ans: "A. बालोद"
              },
              {
                q: "5. महापाषाणकालीन करकाभाटा किस जिले में है?",
                opts: ["A. रायगढ़", "B. बालोद", "C. महासमुंद", "D. कोरबा"],
                ans: "B. बालोद"
              },
              {
                q: "6. वैदिक काल की सामान्य अवधि क्या मानी जाती है?",
                opts: ["A. 2500–1500 ई.पू.", "B. 1500–600 ई.पू.", "C. 1000–500 ई.पू.", "D. 600–200 ई.पू."],
                ans: "B. 1500–600 ई.पू."
              },
              {
                q: "7. नर्मदा नदी का वैदिक साहित्य में किस नाम से उल्लेख मिलता है?",
                opts: ["A. गोदावरी", "B. रेवा", "C. चित्रोत्पला", "D. महानदी"],
                ans: "B. रेवा"
              },
              {
                q: "8. तुरतुरिया का संबंध किस ऋषि से जोड़ा जाता है?",
                opts: ["A. अगस्त्य", "B. वाल्मीकि", "C. विश्वामित्र", "D. वशिष्ठ"],
                ans: "B. वाल्मीकि"
              },
              {
                q: "9. सिहावा क्षेत्र का संबंध किन ऋषियों की परंपराओं से मिलता है?",
                opts: ["A. केवल अगस्त्य", "B. केवल विश्वामित्र", "C. अनेक ऋषियों की परंपराओं से", "D. केवल वाल्मीकि"],
                ans: "C. अनेक ऋषियों की परंपराओं से"
              },
              {
                q: "10. सिरपुर का प्राचीन नाम क्या बताया गया है?",
                opts: ["A. भाण्डेर", "B. चित्रांगदपुर", "C. खल्लवाटिका", "D. मणिपुर"],
                ans: "B. चित्रांगदपुर"
              },
              {
                q: "11. खल्लारी का प्राचीन नाम क्या बताया गया है?",
                opts: ["A. चित्रांगदपुर", "B. भाण्डेर", "C. खल्लवाटिका", "D. कोसल"],
                ans: "C. खल्लवाटिका"
              },
              {
                q: "12. महाभारतकालीन परंपरा में रतनपुर का संबंध किस प्राचीन नाम से जोड़ा गया है?",
                opts: ["A. मणिपुर/रत्नावलीपुरी", "B. चित्रांगदपुर", "C. खल्लवाटिका", "D. दंडकारण्य"],
                ans: "A. मणिपुर/रत्नावलीपुरी"
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
            छत्तीसगढ़ का प्राचीन इतिहास कई परतों में फैला हुआ है। सिंघनपुर और कबरा पहाड़ के शैलचित्रों से लेकर महापाषाणकालीन अवशेषों तक, फिर वैदिक साहित्य में मिलने वाले भौगोलिक संकेतों और रामायण तथा महाभारत से जुड़ी स्थानीय परंपराओं तक, यह क्षेत्र इतिहास और पुरातत्व की दृष्टि से काफी महत्वपूर्ण है।
          </p>
          <p>
            विद्यार्थियों को इस पूरे विषय को केवल तारीखों के रूप में याद करने के बजाय <strong>“काल → प्रमुख स्थल → जिला → विशेषता”</strong> के क्रम में पढ़ना चाहिए। इससे CGPSC, CG Vyapam, CGSSB और अन्य प्रतियोगी परीक्षाओं में आने वाले तथ्यात्मक प्रश्नों को याद रखना आसान होगा।
          </p>
        </div>

        <ArticleFooter 
          date={currentDate}
          sourceText="Archaeological Survey of India, Mahabharata, Ramayana & State Cultural Department Records"
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
