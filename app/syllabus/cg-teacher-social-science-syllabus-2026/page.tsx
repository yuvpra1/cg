import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import AuthorByline from '@/components/AuthorByline';
import ArticleFooter from '@/components/ArticleFooter';

export const metadata: Metadata = {
  title: 'शिक्षक सामाजिक विज्ञान सिलेबस 2026: पूरा पाठ्यक्रम और तैयारी की रणनीति',
  description: 'शिक्षक सामाजिक विज्ञान (Social Science) सिलेबस 2026 की पूरी जानकारी: भूगोल, इतिहास, नागरिक शास्त्र, अर्थशास्त्र, बाल विकास और GK के सभी महत्वपूर्ण topics और रणनीति।',
  keywords: 'CG Teacher Social Science Syllabus 2026, Shikshak Bharti Samajik Vigyan Syllabus, CG Vyapam Teacher Syllabus, Social Science Teacher Exam Pattern, CGSSB Syllabus'
};

export default function CGTeacherSocialScienceSyllabus2026() {
  return (
    <div className="container" style={{ paddingTop: '40px', paddingBottom: '60px' }}>
      <article className="card" style={{ margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.2rem', marginBottom: '20px', color: 'var(--color-primary)' }}>
          शिक्षक सामाजिक विज्ञान सिलेबस 2026: पूरा पाठ्यक्रम, परीक्षा पैटर्न, विषयवार Topics और तैयारी की रणनीति
        </h1>
        
        <AuthorByline date="22 August 2026" />

        <div style={{ position: 'relative', margin: '30px 0', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border-color)', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
          <Image 
            src="/images/cg-teacher-social-science-syllabus-2026.webp" 
            alt="शिक्षक सामाजिक विज्ञान सिलेबस 2026 - Teacher Recruitment Social Science Syllabus"
            width={800} 
            height={450} 
            layout="responsive"
            priority
          />
        </div>

        <div className="article-content" style={{ lineHeight: '1.8', fontSize: '1.05rem', color: 'var(--text-main)' }}>
          <p>
            <strong>शिक्षक सामाजिक विज्ञान सिलेबस 2026:</strong> सामाजिक विज्ञान विषय से शिक्षक भर्ती परीक्षा की तैयारी कर रहे अभ्यर्थियों के लिए syllabus को सही तरीके से समझना बहुत जरूरी है। इस परीक्षा में केवल <strong>इतिहास, भूगोल, नागरिक शास्त्र और अर्थशास्त्र</strong> से ही प्रश्न नहीं पूछे जाएंगे, बल्कि <strong>बाल विकास एवं शिक्षा शास्त्र, भाषा ज्ञान, सामान्य मानसिक योग्यता, कंप्यूटर और सामान्य ज्ञान</strong> भी प्रश्नपत्र का हिस्सा हैं।
          </p>
          <p>
            उपलब्ध पाठ्यक्रम में परीक्षा का कुल भार <strong>100 अंक</strong> रखा गया है। सामाजिक विज्ञान के चार प्रमुख विषयों के साथ शिक्षा शास्त्र और भाषा एवं सामान्य अध्ययन को भी पर्याप्त weightage दिया गया है। इसलिए तैयारी की शुरुआत केवल Social Science के chapters से करने के बजाय पूरे syllabus को समझकर एक balanced study plan बनाना ज्यादा फायदेमंद रहेगा।
          </p>

          <h2 className="article-section-title" style={{ marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem', color: 'var(--color-primary)' }}>
            शिक्षक सामाजिक विज्ञान परीक्षा का पैटर्न
          </h2>
          <p>पाठ्यक्रम के अनुसार प्रश्नपत्र को तीन मुख्य भागों में बांटा गया है।</p>
          
          <div style={{ overflowX: 'auto', margin: '20px 0' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: 'var(--color-primary)', color: 'white' }}>
                  <th style={{ padding: '12px', border: '1px solid #cbd5e1', textAlign: 'left' }}>भाग</th>
                  <th style={{ padding: '12px', border: '1px solid #cbd5e1', textAlign: 'left' }}>विषय</th>
                  <th style={{ padding: '12px', border: '1px solid #cbd5e1', textAlign: 'right' }}>अंक</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ background: 'var(--card-bg-hover)' }}>
                  <td style={{ padding: '12px', border: '1px solid #cbd5e1' }}>भाग-अ</td>
                  <td style={{ padding: '12px', border: '1px solid #cbd5e1' }}>भूगोल</td>
                  <td style={{ padding: '12px', border: '1px solid #cbd5e1', textAlign: 'right' }}>15</td>
                </tr>
                <tr>
                  <td style={{ padding: '12px', border: '1px solid #cbd5e1' }}>भाग-अ</td>
                  <td style={{ padding: '12px', border: '1px solid #cbd5e1' }}>इतिहास</td>
                  <td style={{ padding: '12px', border: '1px solid #cbd5e1', textAlign: 'right' }}>15</td>
                </tr>
                <tr style={{ background: 'var(--card-bg-hover)' }}>
                  <td style={{ padding: '12px', border: '1px solid #cbd5e1' }}>भाग-अ</td>
                  <td style={{ padding: '12px', border: '1px solid #cbd5e1' }}>नागरिक शास्त्र</td>
                  <td style={{ padding: '12px', border: '1px solid #cbd5e1', textAlign: 'right' }}>10</td>
                </tr>
                <tr>
                  <td style={{ padding: '12px', border: '1px solid #cbd5e1' }}>भाग-अ</td>
                  <td style={{ padding: '12px', border: '1px solid #cbd5e1' }}>अर्थशास्त्र</td>
                  <td style={{ padding: '12px', border: '1px solid #cbd5e1', textAlign: 'right' }}>10</td>
                </tr>
                <tr style={{ background: 'var(--card-bg-hover)' }}>
                  <td style={{ padding: '12px', border: '1px solid #cbd5e1' }}>भाग-ब</td>
                  <td style={{ padding: '12px', border: '1px solid #cbd5e1' }}>बाल विकास एवं शिक्षा शास्त्र</td>
                  <td style={{ padding: '12px', border: '1px solid #cbd5e1', textAlign: 'right' }}>15</td>
                </tr>
                <tr>
                  <td style={{ padding: '12px', border: '1px solid #cbd5e1' }}>भाग-स</td>
                  <td style={{ padding: '12px', border: '1px solid #cbd5e1' }}>भाषा ज्ञान एवं सामान्य अध्ययन</td>
                  <td style={{ padding: '12px', border: '1px solid #cbd5e1', textAlign: 'right' }}>35</td>
                </tr>
                <tr style={{ background: 'var(--color-primary)', color: 'white', fontWeight: 'bold' }}>
                  <td style={{ padding: '12px', border: '1px solid #cbd5e1' }}>कुल</td>
                  <td style={{ padding: '12px', border: '1px solid #cbd5e1' }}>—</td>
                  <td style={{ padding: '12px', border: '1px solid #cbd5e1', textAlign: 'right' }}>100</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            इस pattern की सबसे महत्वपूर्ण बात यह है कि <strong>भाषा ज्ञान एवं सामान्य अध्ययन अकेले 35 अंकों का है</strong>, जबकि भूगोल और इतिहास के लिए 15-15 अंक निर्धारित हैं। इसलिए Social Science की तैयारी के साथ General Studies और Language section को भी पर्याप्त समय देना जरूरी है।
          </p>

          <hr style={{ margin: '40px 0', borderColor: 'var(--border-color)', borderStyle: 'dashed' }} />

          <h2 className="article-section-title" style={{ marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem', color: 'var(--color-primary)' }}>
            भाग-अ: सामाजिक विज्ञान का मुख्य सिलेबस
          </h2>

          <h3 style={{ marginTop: '30px', fontSize: '1.4rem' }}>1. भूगोल — 15 अंक</h3>
          <p>भूगोल इस परीक्षा का सबसे महत्वपूर्ण subject है और इसके लिए <strong>15 अंक</strong> निर्धारित हैं। पाठ्यक्रम में Physical Geography के साथ भारत के भूगोल और पर्यावरण से जुड़े topics भी शामिल हैं।</p>
          <ul style={{ margin: '15px 0 15px 30px' }}>
            <li><strong>पृथ्वी और उसके प्रमुख घटक:</strong> पृथ्वी एवं स्थानों की स्थिति, मानचित्र से संबंधित जानकारी, पृथ्वी की आंतरिक संरचना, पृथ्वी के प्रमुख घटक।</li>
            <li><strong>महासागर और वायुमंडल:</strong> महासागर, स्थल मंडल, जलमंडल, जैवमंडल, वायुमंडल। (इन topics को पढ़ते समय इनके आपसी संबंध को समझना ज्यादा उपयोगी रहेगा)</li>
            <li><strong>पृथ्वी की सतह पर परिवर्तन:</strong> भूकंप, ज्वालामुखी, नदियां, भूमिगत जल, हिमनद, वायु, समुद्री लहरें।</li>
            <li><strong>भारत का भूगोल:</strong> भारत की भू-आकृति, पर्वत, पठार, मैदान, प्राकृतिक संसाधन, प्राकृतिक एवं मानव संसाधन, प्राकृतिक वनस्पति, वन्यजीवन, मानवीय पर्यावरण, मृदा, जल।</li>
          </ul>
          <p><em>Preparation Tip:</em> भारत के भूगोल को पढ़ते समय maps का इस्तेमाल करें। पर्वत, पठार, मैदान, नदियां और प्राकृतिक संसाधनों को map पर देखकर पढ़ने से revision आसान हो जाता है।</p>

          <h3 style={{ marginTop: '30px', fontSize: '1.4rem' }}>2. इतिहास — 15 अंक</h3>
          <p>इतिहास के लिए भी <strong>15 अंक</strong> निर्धारित हैं। इसमें भारतीय सभ्यता से लेकर आधुनिक भारत, विश्व इतिहास और छत्तीसगढ़ के इतिहास तक के topics शामिल हैं।</p>
          <ul style={{ margin: '15px 0 15px 30px' }}>
            <li><strong>भारतीय सभ्यता और संस्कृति:</strong> भारतीय इतिहास में समय गणना एवं स्रोत, वैदिक संस्कृति, अन्य दर्शन जैसे जैन और बौद्ध दर्शन, सिंधु घाटी सभ्यता, कला एवं शिल्प, मौर्य काल, यूरोप और भारत में आधुनिक संस्कृति का उदय।</li>
            <li><strong>मुगल साम्राज्य और ब्रिटिश शासन:</strong> मुगल-राजपूत संबंध, मुगल काल की प्रशासनिक व्यवस्था, मुगल काल की सामाजिक, आर्थिक एवं सांस्कृतिक स्थितियां, भारतीय रियासतों के प्रति ब्रिटिश शासन की नीति, 1857 की क्रांति, 1857 के प्रभाव।</li>
            <li><strong>विश्व इतिहास:</strong> प्रथम विश्व युद्ध, द्वितीय विश्व युद्ध, शीत युद्ध।</li>
            <li><strong>छत्तीसगढ़ का इतिहास:</strong> छत्तीसगढ़ का नामकरण, शिक्षा, साहित्य, कला, उद्योग, प्रेस का विकास, स्वतंत्रता संग्राम, प्रमुख आदिवासी विद्रोह, छत्तीसगढ़ के प्रमुख राजवंश।</li>
          </ul>
          <p><em>Exam Tip:</em> 1857 की क्रांति की तैयारी करते समय केवल घटना की तारीख याद न करें। इसके <strong>कारण, प्रमुख केंद्र, प्रमुख व्यक्तित्व और परिणाम</strong> भी साथ में पढ़ें। छत्तीसगढ़ के इतिहास के लिए अभ्यर्थियों को <strong>छत्तीसगढ़-specific notes</strong> बनाकर पढ़ना चाहिए।</p>

          <h3 style={{ marginTop: '30px', fontSize: '1.4rem' }}>3. नागरिक शास्त्र — 10 अंक</h3>
          <p>Civics या नागरिक शास्त्र के लिए <strong>10 अंक</strong> निर्धारित हैं। इसमें भारतीय संविधान और शासन व्यवस्था से जुड़े महत्वपूर्ण topics शामिल हैं।</p>
          <ul style={{ margin: '15px 0 15px 30px' }}>
            <li><strong>भारतीय संविधान:</strong> संविधान का निर्माण, संविधान की विशेषताएं, मौलिक अधिकार, मौलिक कर्तव्य, राष्ट्रपति और राज्यपाल की संवैधानिक स्थिति, उनकी शक्तियां, भारतीय राष्ट्रीय आंदोलन।</li>
            <li><strong>भारतीय शासन व्यवस्था:</strong> लोकतंत्र, चुनावी प्रक्रिया, संसद, लोकसभा, राज्यसभा, प्रधानमंत्री और मंत्रिमंडल, विधायिका, कार्यपालिका, न्यायपालिका।</li>
            <li><strong>स्थानीय शासन:</strong> नगर निगम, नगरपालिका, पंचायती राज व्यवस्था, संयुक्त राष्ट्र संघ।</li>
            <li><strong>सामाजिक विषय:</strong> वैश्वीकरण, अंतरराष्ट्रीय संगठन, भारतीय समाज की विशेषताएं, परिवार एवं समुदाय, महिलाओं की स्थिति, महिलाओं का महत्व एवं योगदान।</li>
          </ul>

          <h3 style={{ marginTop: '30px', fontSize: '1.4rem' }}>4. अर्थशास्त्र — 10 अंक</h3>
          <p>Economics के लिए <strong>10 अंक</strong> निर्धारित हैं। इसमें basic economics से लेकर भारतीय अर्थव्यवस्था और वैश्वीकरण तक के topics शामिल हैं।</p>
          <ul style={{ margin: '15px 0 15px 30px' }}>
            <li><strong>आर्थिक गतिविधियां:</strong> आर्थिक एवं गैर-आर्थिक गतिविधियां, कार्य का महत्व, उद्योग, भारतीय अर्थव्यवस्था का स्वरूप, सरकारी बजट एवं कर निर्धारण, आंकड़ों का संग्रहण, संगठन एवं प्रस्तुतीकरण।</li>
            <li><strong>वैश्वीकरण:</strong> वैश्वीकरण, मुद्रा एवं साख।</li>
          </ul>

          <hr style={{ margin: '40px 0', borderColor: 'var(--border-color)', borderStyle: 'dashed' }} />

          <h2 className="article-section-title" style={{ marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem', color: 'var(--color-primary)' }}>
            भाग-ब: बाल विकास एवं शिक्षा शास्त्र — 15 अंक
          </h2>
          <p>Social Science teacher बनने की तैयारी करने वाले अभ्यर्थियों के लिए <strong>बाल विकास एवं शिक्षा शास्त्र</strong> एक अलग और महत्वपूर्ण section है। इसके लिए <strong>15 अंक</strong> निर्धारित हैं। इस section को syllabus में तीन प्रमुख इकाइयों में बांटा गया है:</p>
          <ul style={{ margin: '15px 0 15px 30px' }}>
            <li><strong>इकाई 1: बच्चे का विकास:</strong> विकास की अवधारणा, सीखने से संबंध, विकास के सिद्धांत, वंशानुक्रम एवं वातावरण का प्रभाव, बुद्धिमत्ता, बहुआयामी बुद्धि, भाषा एवं विचार, सीखने वालों में व्यक्तिगत विभिन्नताएं (जाति, लिंग, समुदाय, धर्म), सीखने के मूल्यांकन और मूल्यांकन के बीच अंतर, शाला आधारित मूल्यांकन, सतत एवं समग्र मूल्यांकन।</li>
            <li><strong>इकाई 2: समावेशी शिक्षा:</strong> वंचित एवं कमजोर पृष्ठभूमि से आने वाले बच्चों का शिक्षण, सीखने में कठिनाई वाले बच्चों की शिक्षा, विकलांगता आदि से संबंधित बच्चों का शिक्षण, सृजनात्मक एवं विशेष योग्यता वाले बच्चों का शिक्षण।</li>
            <li><strong>इकाई 3: सीखना एवं शिक्षाशास्त्र:</strong> सीखने-सीखाने के आधारभूत तरीके, व्यूह रचना, सामाजिक क्रियाकलाप के रूप में सीखना, बच्चे को समस्या समाधानकर्ता एवं वैज्ञानिक अन्वेषक के रूप में समझना, संज्ञान एवं संवेग, अभिप्रेरणा, सीखने में सहायक कारक।</li>
          </ul>

          <h2 className="article-section-title" style={{ marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem', color: 'var(--color-primary)' }}>
            भाग-स: भाषा ज्ञान एवं सामान्य अध्ययन — 35 अंक
          </h2>
          <p>यह पूरे प्रश्नपत्र का <strong>सबसे बड़ा section</strong> है और इसके लिए <strong>35 अंक</strong> निर्धारित हैं। इसलिए इसे तैयारी के अंत में छोड़ना एक बड़ी गलती हो सकती है।</p>

          <h3 style={{ marginTop: '30px', fontSize: '1.4rem' }}>सामान्य हिंदी — 5 अंक</h3>
          <p>स्वर, व्यंजन, वर्तनी, लिंग, वचन, काल, संज्ञा, सर्वनाम, विशेषण, क्रिया, क्रिया विशेषण, कारक, समास, समास रचना एवं प्रकार, संधि (स्वर, व्यंजन एवं विसर्ग संधि), व्याकरणिक अशुद्धियां, शब्द रचना, उपसर्ग एवं प्रत्यय, तत्सम-तद्भव, देशज, विदेशी शब्द, पर्यायवाची, विलोम शब्द, अनेकार्थी शब्द, अनेक शब्दों या वाक्यांशों के लिए एक शब्द।</p>

          <h3 style={{ marginTop: '30px', fontSize: '1.4rem' }}>General English — 5 Marks</h3>
          <p>Number, Gender, Articles, Noun, Pronoun, Adjectives, Verb, Adverb, Preposition, Conjunction, Synonyms, Antonyms, Homonyms, One Word Substitution, Spellings, Prefixes, Suffixes, Proverbs and Idioms, Active/Passive Voice, Sentences, Punctuation. (रोज 15–20 मिनट practice करें)</p>

          <h3 style={{ marginTop: '30px', fontSize: '1.4rem' }}>सामान्य मानसिक योग्यता — 10 अंक</h3>
          <p>तर्क करना, संबंध देखना, Analogy, अंकिक योग्यता, अभाज्यीय संबंध आदि। प्रश्नों में अक्सर विषमांक पहचानना, आकृति श्रेणी, अक्षर श्रेणी, अंक श्रेणी, गणितीय संक्रियाएं, चित्रों का मिलान, धन संबंधी प्रश्न और pattern-based questions जैसे प्रकार देखने को मिल सकते हैं।</p>

          <h3 style={{ marginTop: '30px', fontSize: '1.4rem' }}>कंप्यूटर शिक्षा — 5 अंक</h3>
          <p>Computer का परिचय, उपयोग (शिक्षा, बैंकिंग, स्वास्थ्य), Hardware, Software, CPU, ALU, Memory, Input/Output Devices. Printers (Inkjet, Laserjet, Dot Matrix, Thermal). Operating Systems (DOS, Windows, macOS, Linux, Ubuntu). MS Office (Word, Excel, PowerPoint). Internet, Email, Cyber Security, Antivirus, Multimedia, Storage Devices, Search Engine.</p>

          <h3 style={{ marginTop: '30px', fontSize: '1.4rem' }}>सामान्य ज्ञान — 10 अंक</h3>
          <ul style={{ margin: '15px 0 15px 30px' }}>
            <li><strong>भारतीय संविधान:</strong> प्रमुख संवैधानिक प्रावधान, मौलिक कर्तव्य, भारतीय राजनीतिक व्यवस्था, संवैधानिक अधिकार, सूचना का अधिकार, लोकतंत्र, चुनाव, लोकसभा, राज्यसभा।</li>
            <li><strong>इतिहास एवं भूगोल:</strong> भारतीय सभ्यता एवं संस्कृति, 1857 से 1947 तक की प्रमुख घटनाएं, सामान्य भूगोल, भारत एवं विश्व का भूगोल।</li>
            <li><strong>अर्थव्यवस्था एवं विज्ञान:</strong> सामाजिक एवं आर्थिक विकास, पंचवर्षीय योजनाएं, गरीबी, बेरोजगारी, भौतिकी, रसायन विज्ञान, जीव विज्ञान।</li>
            <li><strong>छत्तीसगढ़ सामान्य ज्ञान:</strong> इतिहास, भूगोल, राजनीतिक व्यवस्था, अर्थव्यवस्था, शासकीय योजनाएं, पुरस्कार एवं सम्मान, परंपराएं, लोकगीत-संगीत, महत्वपूर्ण व्यक्तित्व।</li>
            <li><strong>राष्ट्रीय शिक्षा नीति 2020:</strong> भाग-1: स्कूल शिक्षा।</li>
          </ul>

          <h2 className="article-section-title" style={{ marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem', color: 'var(--color-primary)' }}>
            Social Science Teacher Exam की तैयारी कैसे करें?
          </h2>

          <h3 style={{ marginTop: '30px', fontSize: '1.4rem' }}>Step 1: पहले High-Weightage Subjects पूरा करें</h3>
          <p>सबसे पहले <strong>भूगोल (15 अंक)</strong>, <strong>इतिहास (15 अंक)</strong> और <strong>बाल विकास (15 अंक)</strong> को मजबूत करें। इसके बाद <strong>नागरिक शास्त्र (10 अंक)</strong> और <strong>अर्थशास्त्र (10 अंक)</strong> पर focus करें।</p>

          <h3 style={{ marginTop: '30px', fontSize: '1.4rem' }}>Step 2: 35 Marks वाले Section को रोज पढ़ें</h3>
          <p>रोज: 20 मिनट Hindi, 20 मिनट English, 30 मिनट GK, और 20–30 मिनट Computer/Reasoning का schedule बनाएं।</p>

          <h3 style={{ marginTop: '30px', fontSize: '1.4rem' }}>History और Geography कैसे पढ़ें?</h3>
          <p><strong>History के लिए:</strong> Timeline Method अपनाएं (सिंधु घाटी → वैदिक काल → मौर्य → मध्यकाल → मुगल → ब्रिटिश → 1857 → स्वतंत्रता)। <strong>Geography के लिए:</strong> Map + Concept Method अपनाएं (पर्वत, पठार, मैदान, नदियां आदि को map पर देखकर पढ़ें)।</p>

          <div style={{ background: 'var(--card-bg-hover)', padding: '20px', borderRadius: '8px', borderLeft: '4px solid var(--color-primary)', margin: '25px 0' }}>
            <h3 style={{ marginTop: '0', fontSize: '1.2rem' }}>परीक्षा से पहले Revision Plan</h3>
            <ul style={{ margin: '0 0 15px 20px', padding: 0 }}>
              <li><strong>Revision 1:</strong> पूरे syllabus के सभी topics को एक बार cover करें।</li>
              <li><strong>Revision 2:</strong> केवल short notes और important facts पढ़ें।</li>
              <li><strong>Revision 3:</strong> MCQs और Mock Tests लगाएं।</li>
              <li><strong>Final Revision:</strong> गलत प्रश्न, महत्वपूर्ण dates, constitutional facts, geography facts, CG GK, Computer full forms, और Grammar rules को revise करें।</li>
            </ul>
          </div>

          <h2 className="article-section-title" style={{ marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem', color: 'var(--color-primary)' }}>
            निष्कर्ष
          </h2>
          <p><strong>शिक्षक सामाजिक विज्ञान सिलेबस 2026</strong> को अगर ध्यान से देखा जाए तो यह केवल चार Social Science subjects की परीक्षा नहीं है। इसमें <strong>Geography, History, Civics और Economics</strong> के साथ <strong>Child Development & Education, Hindi, English, Mental Ability, Computer और General Knowledge</strong> को भी शामिल किया गया है।</p>
          <p>सबसे ज्यादा ध्यान <strong>35 अंकों वाले Language & General Studies section</strong> पर देना चाहिए, जबकि Social Science में <strong>Geography और History के 15-15 अंक</strong> होने के कारण इन दोनों subjects को मजबूत करना जरूरी है। साथ ही <strong>Chhattisgarh History और Chhattisgarh GK</strong> को विशेष priority दें।</p>
          
          <div style={{ marginTop: '40px', padding: '20px', borderRadius: '8px', background: 'var(--card-bg-hover)' }}>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--color-primary)', marginBottom: '15px', marginTop: 0 }}>
              अन्य विषयों के सिलेबस (Related Syllabus)
            </h3>
            <ul style={{ margin: '0 0 0 20px', padding: 0, lineHeight: '1.8' }}>
              <li><a href="/syllabus/cg-teacher-hindi-syllabus-2026" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>शिक्षक हिंदी सिलेबस 2026</a></li>
              <li><a href="/syllabus/cg-teacher-sanskrit-syllabus-2026" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>शिक्षक संस्कृत सिलेबस 2026</a></li>
              <li><a href="/syllabus/cg-teacher-social-science-syllabus-2026" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>शिक्षक सामाजिक विज्ञान सिलेबस 2026</a></li>
              <li><a href="/syllabus/cg-teacher-agriculture-syllabus-2026" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>शिक्षक कृषि सिलेबस 2026</a></li>
            </ul>
          </div>
          
          <div style={{ background: '#fffbeb', padding: '15px', borderRadius: '8px', border: '1px solid #fde68a', color: '#92400e', marginTop: '40px', fontSize: '0.9rem' }}>
            <strong>अस्वीकरण (Disclaimer):</strong> यह आर्टिकल उम्मीदवारों की सुविधा और जानकारी के लिए तैयार किया गया है। हमने इस सिलेबस और रणनीति को सटीकता के साथ प्रस्तुत करने का पूरा प्रयास किया है। हालांकि, यदि इसमें कोई त्रुटि, टाइपिंग मिस्टेक या कोई महत्वपूर्ण बिंदु छूट गया हो, तो इसके लिए यह वेबसाइट ज़िम्मेदार नहीं होगी। उम्मीदवारों को सलाह दी जाती है कि वे अंतिम सिलेबस और परीक्षा पैटर्न के लिए हमेशा संबंधित भर्ती बोर्ड (CGSSB/CG Vyapam) द्वारा जारी किए गए <strong>आधिकारिक विज्ञापन और सिलेबस (Official Notification)</strong> का ही संदर्भ लें।
          </div>

        </div>

        <ArticleFooter 
          date="22 August 2026"
          sourceText="CG Vyapam/CGSSB Official Syllabus"
          sourceLink="https://vyapam.cgstate.gov.in/"
        />
      </article>
    </div>
  );
}
