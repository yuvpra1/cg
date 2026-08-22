import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import AuthorByline from '@/components/AuthorByline';
import ArticleFooter from '@/components/ArticleFooter';

export const metadata: Metadata = {
  title: 'शिक्षक संस्कृत सिलेबस 2026: पूरा पाठ्यक्रम, परीक्षा पैटर्न और रणनीति',
  description: 'शिक्षक संस्कृत (Sanskrit) सिलेबस 2026 की पूरी जानकारी: व्याकरण, वाक्य रचना, काव्यांश, गद्यांश, बाल विकास और GK के सभी महत्वपूर्ण topics और रणनीति।',
  keywords: 'CG Teacher Sanskrit Syllabus 2026, Shikshak Bharti Sanskrit Syllabus, CG Vyapam Teacher Syllabus, Sanskrit Teacher Exam Pattern, CGSSB Syllabus'
};

export default function CGTeacherSanskritSyllabus2026() {
  return (
    <div className="container" style={{ paddingTop: '40px', paddingBottom: '60px' }}>
      <article className="card" style={{ margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.2rem', marginBottom: '20px', color: 'var(--color-primary)' }}>
          शिक्षक संस्कृत सिलेबस 2026: पूरा पाठ्यक्रम, परीक्षा पैटर्न, विषयवार Topics और तैयारी की रणनीति
        </h1>
        
        <AuthorByline date="22 August 2026" />

        <div style={{ position: 'relative', margin: '30px 0', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border-color)', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
          <Image 
            src="/images/cg-teacher-sanskrit-syllabus-2026.webp" 
            alt="शिक्षक संस्कृत सिलेबस 2026 - Teacher Recruitment Sanskrit Syllabus"
            width={800} 
            height={450} 
            layout="responsive"
            priority
          />
        </div>

        <div className="article-content" style={{ lineHeight: '1.8', fontSize: '1.05rem', color: 'var(--text-main)' }}>
          <p>
            <strong>शिक्षक संस्कृत सिलेबस 2026:</strong> संस्कृत विषय से शिक्षक भर्ती परीक्षा की तैयारी कर रहे अभ्यर्थियों के लिए केवल संस्कृत साहित्य पढ़ना पर्याप्त नहीं है। परीक्षा के पाठ्यक्रम में <strong>व्याकरण, वाक्य रचना, काव्यांश, गद्यांश, बाल विकास एवं शिक्षा शास्त्र, भाषा ज्ञान, सामान्य मानसिक योग्यता, कंप्यूटर और सामान्य ज्ञान</strong> जैसे अलग-अलग sections शामिल हैं।
          </p>
          <p>
            उपलब्ध पाठ्यक्रम के अनुसार परीक्षा <strong>कुल 100 अंकों</strong> की है। संस्कृत विषय से जुड़े चार प्रमुख sections के साथ बाल विकास एवं शिक्षा शास्त्र तथा भाषा ज्ञान एवं सामान्य अध्ययन को भी प्रश्नपत्र में शामिल किया गया है। इसलिए तैयारी करते समय संस्कृत के साथ-साथ दूसरे sections को भी नियमित समय देना जरूरी है।
          </p>

          <h2 className="article-section-title" style={{ marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem', color: 'var(--color-primary)' }}>
            शिक्षक संस्कृत परीक्षा का पैटर्न
          </h2>
          <p>पाठ्यक्रम के पहले पेज पर दिए गए अंक-विभाजन के अनुसार प्रश्नपत्र इस प्रकार है:</p>
          
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
                  <td style={{ padding: '12px', border: '1px solid #cbd5e1' }}>व्याकरण</td>
                  <td style={{ padding: '12px', border: '1px solid #cbd5e1', textAlign: 'right' }}>20</td>
                </tr>
                <tr>
                  <td style={{ padding: '12px', border: '1px solid #cbd5e1' }}>भाग-अ</td>
                  <td style={{ padding: '12px', border: '1px solid #cbd5e1' }}>वाक्य रचना</td>
                  <td style={{ padding: '12px', border: '1px solid #cbd5e1', textAlign: 'right' }}>10</td>
                </tr>
                <tr style={{ background: 'var(--card-bg-hover)' }}>
                  <td style={{ padding: '12px', border: '1px solid #cbd5e1' }}>भाग-अ</td>
                  <td style={{ padding: '12px', border: '1px solid #cbd5e1' }}>काव्यांश</td>
                  <td style={{ padding: '12px', border: '1px solid #cbd5e1', textAlign: 'right' }}>10</td>
                </tr>
                <tr>
                  <td style={{ padding: '12px', border: '1px solid #cbd5e1' }}>भाग-अ</td>
                  <td style={{ padding: '12px', border: '1px solid #cbd5e1' }}>गद्यांश</td>
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
            यहां सबसे महत्वपूर्ण बात यह है कि <strong>संस्कृत के मुख्य विषयों से कुल 50 अंक</strong> हैं, जबकि बाल विकास एवं शिक्षा शास्त्र के 15 अंक तथा भाषा ज्ञान एवं सामान्य अध्ययन के 35 अंक हैं। इसलिए सिर्फ Sanskrit Literature पढ़ना पर्याप्त नहीं होगा। पूरे 100 अंकों के paper को ध्यान में रखकर तैयारी करनी चाहिए।
          </p>

          <hr style={{ margin: '40px 0', borderColor: 'var(--border-color)', borderStyle: 'dashed' }} />

          <h2 className="article-section-title" style={{ marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem', color: 'var(--color-primary)' }}>
            भाग-अ: संस्कृत विषय का पूरा सिलेबस
          </h2>

          <h3 style={{ marginTop: '30px', fontSize: '1.4rem' }}>1. संस्कृत व्याकरण — 20 अंक</h3>
          <p>संस्कृत विषय में सबसे अधिक weightage <strong>व्याकरण</strong> को दिया गया है। इसके लिए <strong>20 अंक</strong> निर्धारित हैं।</p>
          <ul style={{ margin: '15px 0 15px 30px' }}>
            <li><strong>वर्ण एवं उच्चारण स्थान:</strong> संस्कृत वर्णों और उनके उच्चारण स्थान।</li>
            <li><strong>शब्दरूप:</strong> बालक, फल, पत्र, मति, कवि, वारि, नदी, कुमारी, गुरु, मधु, वधु। सर्वनाम (सर्व, किम्, तत्, एतत्, अस्मद्, युष्मद्)।</li>
            <li><strong>संख्या:</strong> शतम् तक संख्या ज्ञान।</li>
            <li><strong>धातुरूप और लकार:</strong> पठ्, पच्, भू, कृ, खेल्, लिख्, बुध्, स्था, गम्, दृश्, लभ्, रुच्। (विभिन्न लकारों का अभ्यास)</li>
            <li><strong>कारक:</strong> कर्ता, कर्म, करण, संप्रदान, अपादान, अधिकरण, संबंध। (विभक्तियों का प्रयोग)</li>
            <li><strong>प्रत्यय:</strong> कृत्, ल्यप्, मतुप्, शानच्, तुमुन्।</li>
            <li><strong>तद्धित प्रत्यय:</strong> त्व, तल्, ठक्, मतुप्, तरप्, तमप्।</li>
            <li><strong>संधि:</strong> स्वर संधि, व्यंजन संधि, विसर्ग संधि।</li>
            <li><strong>समास:</strong> तत्पुरुष, कर्मधारय, द्विगु, द्वन्द्व, बहुव्रीहि। (समास-विग्रह और प्रकार पहचानना)</li>
            <li><strong>अव्यय:</strong> अधः, अधुना, अपि, च, एव, अत्र, तत्र, अन्यत्र, सर्वत्र, एकत्र, कुत्र, यत्र, इदानीम्, तदानीम्, सम्प्रति, यदा, कदा, तदा, सहसा, एकदा, सर्वथा, सदा, सर्वदा, न, सह, शीघ्रम्।</li>
            <li><strong>उपसर्ग:</strong> 22 उपसर्गों का वाक्यों में प्रयोग।</li>
            <li><strong>समय बोधनम्:</strong> घटी आधारित समय बोधनम्।</li>
          </ul>

          <h3 style={{ marginTop: '30px', fontSize: '1.4rem' }}>2. वाक्य रचना — 10 अंक</h3>
          <p>व्याकरण में पढ़े गए नियमों का practical use इस section में देखा जाएगा। <strong>शुद्ध-अशुद्ध निर्णय</strong>, विभक्ति का सही प्रयोग, वचन, पुरुष और वाक्य संरचना महत्वपूर्ण हैं। साथ ही <strong>अपठित-अवबोधन</strong> (अपठित अनुच्छेदों का अवबोधन) भी इसी का हिस्सा है।</p>

          <h3 style={{ marginTop: '30px', fontSize: '1.4rem' }}>3. काव्यांश — 10 अंक</h3>
          <ul style={{ margin: '15px 0 15px 30px' }}>
            <li><strong>रघुवंशमहाकाव्यम्:</strong> प्रथम सर्ग के 1 से 25 श्लोक (भावार्थ, शब्दार्थ, संदर्भ)।</li>
            <li><strong>अभिज्ञानशाकुन्तलम्:</strong> चतुर्थ अंक।</li>
            <li><strong>भगवद्गीता:</strong> द्वितीय अध्याय।</li>
          </ul>

          <h3 style={{ marginTop: '30px', fontSize: '1.4rem' }}>4. गद्यांश — 10 अंक</h3>
          <ul style={{ margin: '15px 0 15px 30px' }}>
            <li><strong>शुकनासोपदेश:</strong> बाणभट्ट की रचना कादम्बरी का निर्धारित अंश।</li>
            <li><strong>पंचतंत्र:</strong> विष्णु शर्मा (नीति, व्यवहार और जीवन से जुड़े विचार)।</li>
          </ul>

          <h3 style={{ marginTop: '30px', fontSize: '1.4rem' }}>संस्कृत साहित्य और काव्यशास्त्र</h3>
          <p>कालिदास, भास, भवभूति, शूद्रक, भारवि, माघ, श्रीहर्ष, भर्तृहरि (इनका परिचय एवं रचनाएं)। संस्कृत सुभाषित और सुभाषितों का ज्ञान।</p>
          <ul style={{ margin: '15px 0 15px 30px' }}>
            <li><strong>छंद:</strong> अनुष्टुप्, उपजाति, वंशस्थ, वसन्ततिलका, मालिनी, मन्दाक्रान्ता, शार्दूलविक्रीडित।</li>
            <li><strong>अलंकार:</strong> अनुप्रास, उपमा, रूपक, उत्प्रेक्षा, यमक, श्लेष, अर्थान्तरन्यास।</li>
            <li><strong>वैदिक साहित्य:</strong> चारों वेदों का सामान्य परिचय, ईशावास्योपनिषद, तैत्तिरीयोपनिषद।</li>
          </ul>

          <hr style={{ margin: '40px 0', borderColor: 'var(--border-color)', borderStyle: 'dashed' }} />

          <h2 className="article-section-title" style={{ marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem', color: 'var(--color-primary)' }}>
            भाग-ब: बाल विकास एवं शिक्षा शास्त्र — 15 अंक
          </h2>
          <p>इस section को तीन इकाइयों में समझना आसान रहेगा:</p>
          <ul style={{ margin: '15px 0 15px 30px' }}>
            <li><strong>इकाई 1: बच्चे का विकास:</strong> विकास की अवधारणा, सीखने से संबंध, विकास के सिद्धांत, वंशानुक्रम और वातावरण का प्रभाव, बुद्धिमत्ता, बहुआयामी बुद्धि, भाषा एवं विचार, व्यक्तिगत विभिन्नताएं।</li>
            <li><strong>इकाई 2: समावेशी शिक्षा:</strong> वंचित एवं कमजोर पृष्ठभूमि, सीखने में कठिनाई वाले, और विकलांग बच्चों का शिक्षण। सृजनात्मक बच्चों का शिक्षण।</li>
            <li><strong>इकाई 3: सीखना एवं शिक्षाशास्त्र:</strong> सीखने-सिखाने के आधारभूत तरीके, व्यूह रचना, सामाजिक क्रियाकलाप के रूप में सीखना, बच्चे को समस्या समाधानकर्ता समझना, संज्ञान, संवेग, अभिप्रेरणा।</li>
          </ul>

          <h2 className="article-section-title" style={{ marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem', color: 'var(--color-primary)' }}>
            भाग-स: भाषा ज्ञान एवं सामान्य अध्ययन — 35 अंक
          </h2>
          <p><strong>भाषा ज्ञान एवं सामान्य अध्ययन के लिए 35 अंक</strong> निर्धारित हैं। यह पूरे paper का सबसे बड़ा section है।</p>

          <h3 style={{ marginTop: '30px', fontSize: '1.4rem' }}>सामान्य हिंदी — 5 अंक</h3>
          <p>स्वर, व्यंजन, वर्तनी, लिंग, वचन, काल, संज्ञा, सर्वनाम, विशेषण, क्रिया, कारक, समास, संधि, उपसर्ग एवं प्रत्यय, तत्सम-तद्भव, देशज, विदेशी शब्द, पर्यायवाची, विलोम, अनेकार्थी शब्द।</p>

          <h3 style={{ marginTop: '30px', fontSize: '1.4rem' }}>General English — 5 Marks</h3>
          <p>Number, Gender, Articles, Noun, Pronoun, Adjectives, Verb, Adverb, Preposition, Conjunction, Synonyms, Antonyms, Homonyms, One Word Substitution, Spellings, Prefixes, Suffixes, Proverbs and Idioms, Active/Passive Voice, Sentences, Punctuation.</p>

          <h3 style={{ marginTop: '30px', fontSize: '1.4rem' }}>सामान्य मानसिक योग्यता — 10 अंक</h3>
          <p>तर्क करना, संबंध देखना, Analogy, अंकिक योग्यता, अक्षर एवं अंक आधारित questions, गणितीय संक्रियाएं, चित्रों का मिलान, धन संबंधी प्रश्न, विभिन्न प्रकार के patterns।</p>

          <h3 style={{ marginTop: '30px', fontSize: '1.4rem' }}>कंप्यूटर शिक्षा — 5 अंक</h3>
          <p>Computer Basics, Hardware/Software, Input/Output Devices, Printers, Operating System, MS Office, Internet, Cyber Security, Virus, Multimedia, Search Engine.</p>

          <h3 style={{ marginTop: '30px', fontSize: '1.4rem' }}>सामान्य ज्ञान — 10 अंक</h3>
          <ul style={{ margin: '15px 0 15px 30px' }}>
            <li><strong>भारतीय संविधान:</strong> मौलिक कर्तव्य, राजनीतिक व्यवस्था, चुनाव, लोकसभा, राज्यसभा।</li>
            <li><strong>इतिहास एवं भूगोल:</strong> सभ्यता एवं संस्कृति, स्वतंत्रता आंदोलन (1857-1947), भारत एवं विश्व का भूगोल।</li>
            <li><strong>अर्थव्यवस्था एवं विज्ञान:</strong> आर्थिक विकास, पंचवर्षीय योजनाएं, गरीबी, बेरोजगारी, भौतिकी, रसायन विज्ञान, जीव विज्ञान।</li>
            <li><strong>छत्तीसगढ़ सामान्य ज्ञान:</strong> इतिहास, भूगोल, राजनीतिक व्यवस्था, अर्थव्यवस्था, शासकीय योजनाएं, पुरस्कार, परंपराएं।</li>
            <li><strong>राष्ट्रीय शिक्षा नीति 2020:</strong> भाग-1 (स्कूल शिक्षा)।</li>
          </ul>

          <h2 className="article-section-title" style={{ marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem', color: 'var(--color-primary)' }}>
            संस्कृत शिक्षक परीक्षा की तैयारी कैसे करें?
          </h2>

          <h3 style={{ marginTop: '30px', fontSize: '1.4rem' }}>पहला Focus: Sanskrit Grammar</h3>
          <p>शब्दरूप → धातुरूप → कारक → प्रत्यय → संधि → समास → अव्यय → उपसर्ग (Grammar में केवल rules याद करने के बजाय रोज questions solve करें)</p>

          <h3 style={{ marginTop: '30px', fontSize: '1.4rem' }}>दूसरा Focus: साहित्य</h3>
          <p>रघुवंश → अभिज्ञानशाकुन्तलम् → भगवद्गीता → शुकनासोपदेश → पंचतंत्र (हर text के लिए: लेखक → रचना → पाठ → पात्र/विषय → अर्थ → महत्वपूर्ण तथ्य के format में notes बनाएं)</p>

          <div style={{ background: 'var(--card-bg-hover)', padding: '20px', borderRadius: '8px', borderLeft: '4px solid var(--color-primary)', margin: '25px 0' }}>
            <h3 style={{ marginTop: '0', fontSize: '1.2rem' }}>परीक्षा से पहले Revision Strategy</h3>
            <ul style={{ margin: '0 0 15px 20px', padding: 0 }}>
              <li><strong>Revision 1 (Complete Syllabus):</strong> सभी topics को एक बार पूरा करें।</li>
              <li><strong>Revision 2 (Short Notes):</strong> केवल शब्दरूप, धातुरूप, संधि, समास, प्रत्यय, उपसर्ग, कवि एवं रचनाएं, छंद, अलंकार revise करें।</li>
              <li><strong>Revision 3 (MCQ + Mock Test):</strong> हर topic के बाद MCQs लगाएं और फिर full-length mock test दें। जो प्रश्न गलत हों, उनके लिए अलग Mistake Notebook बनाएं।</li>
            </ul>
          </div>

          <h2 className="article-section-title" style={{ marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem', color: 'var(--color-primary)' }}>
            निष्कर्ष
          </h2>
          <p><strong>शिक्षक संस्कृत सिलेबस 2026</strong> को केवल संस्कृत के साहित्यिक पाठों तक सीमित समझना सही नहीं होगा। परीक्षा में <strong>व्याकरण, वाक्य रचना, काव्यांश और गद्यांश</strong> के साथ <strong>बाल विकास एवं शिक्षा शास्त्र, हिंदी, English, Mental Ability, Computer और General Knowledge</strong> भी शामिल हैं।</p>
          <p>संस्कृत में <strong>व्याकरण 20 अंकों</strong> का सबसे बड़ा individual section है, इसलिए शब्दरूप, धातुरूप, कारक, प्रत्यय, संधि, समास, उपसर्ग और अव्यय जैसे topics को मजबूत करना जरूरी है। इसके साथ रघुवंश, अभिज्ञानशाकुन्तलम्, भगवद्गीता, शुकनासोपदेश और पंचतंत्र जैसे निर्धारित साहित्यिक पाठों को भी अच्छी तरह तैयार करें।</p>
          
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
