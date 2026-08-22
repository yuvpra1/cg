import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import AuthorByline from '@/components/AuthorByline';
import ArticleFooter from '@/components/ArticleFooter';

export const metadata: Metadata = {
  title: 'शिक्षक हिंदी सिलेबस 2026: पूरा पाठ्यक्रम, परीक्षा पैटर्न और रणनीति',
  description: 'शिक्षक हिंदी (Hindi) सिलेबस 2026 की पूरी जानकारी: हिंदी साहित्य का इतिहास, गद्य, पद्य, व्याकरण, भाषा शिक्षण, बाल विकास और GK के सभी महत्वपूर्ण topics और रणनीति।',
  keywords: 'CG Teacher Hindi Syllabus 2026, Shikshak Bharti Hindi Syllabus, CG Vyapam Teacher Syllabus, Hindi Teacher Exam Pattern, CGSSB Syllabus'
};

export default function CGTeacherHindiSyllabus2026() {
  return (
    <div className="container" style={{ paddingTop: '40px', paddingBottom: '60px' }}>
      <article className="card" style={{ margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.2rem', marginBottom: '20px', color: 'var(--color-primary)' }}>
          शिक्षक हिंदी सिलेबस 2026: पूरा पाठ्यक्रम, परीक्षा पैटर्न, विषयवार Topics और तैयारी की रणनीति
        </h1>
        
        <AuthorByline date="22 August 2026" />

        <div style={{ position: 'relative', margin: '30px 0', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border-color)', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
          <Image 
            src="/images/cg-teacher-hindi-syllabus-2026.webp" 
            alt="शिक्षक हिंदी सिलेबस 2026 - Teacher Recruitment Hindi Syllabus"
            width={800} 
            height={450} 
            layout="responsive"
            priority
          />
        </div>

        <div className="article-content" style={{ lineHeight: '1.8', fontSize: '1.05rem', color: 'var(--text-main)' }}>
          <p>
            <strong>शिक्षक हिंदी सिलेबस 2026:</strong> हिंदी विषय से शिक्षक भर्ती परीक्षा की तैयारी कर रहे अभ्यर्थियों के लिए केवल हिंदी साहित्य और व्याकरण पढ़ना पर्याप्त नहीं है। दिए गए पाठ्यक्रम में <strong>हिंदी साहित्य का इतिहास, गद्य, पद्य, व्यावहारिक व्याकरण, हिंदी भाषा शिक्षण, छत्तीसगढ़ी भाषा एवं साहित्य</strong> के साथ <strong>बाल विकास एवं शिक्षा शास्त्र, हिंदी-अंग्रेजी भाषा ज्ञान, सामान्य मानसिक योग्यता, कंप्यूटर और सामान्य ज्ञान</strong> को भी शामिल किया गया है।
          </p>
          <p>
            पाठ्यक्रम के अनुसार पूरा प्रश्नपत्र <strong>100 अंकों</strong> का है। इसलिए तैयारी शुरू करने से पहले यह समझना जरूरी है कि किस विषय से कितने अंक हैं और किन topics को ज्यादा समय देना चाहिए।
          </p>

          <h2 className="article-section-title" style={{ marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem', color: 'var(--color-primary)' }}>
            शिक्षक हिंदी परीक्षा का पैटर्न
          </h2>
          
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
                  <td style={{ padding: '12px', border: '1px solid #cbd5e1' }}>हिंदी साहित्य का इतिहास</td>
                  <td style={{ padding: '12px', border: '1px solid #cbd5e1', textAlign: 'right' }}>10</td>
                </tr>
                <tr>
                  <td style={{ padding: '12px', border: '1px solid #cbd5e1' }}>भाग-अ</td>
                  <td style={{ padding: '12px', border: '1px solid #cbd5e1' }}>गद्य खंड</td>
                  <td style={{ padding: '12px', border: '1px solid #cbd5e1', textAlign: 'right' }}>5</td>
                </tr>
                <tr style={{ background: 'var(--card-bg-hover)' }}>
                  <td style={{ padding: '12px', border: '1px solid #cbd5e1' }}>भाग-अ</td>
                  <td style={{ padding: '12px', border: '1px solid #cbd5e1' }}>पद्य खंड</td>
                  <td style={{ padding: '12px', border: '1px solid #cbd5e1', textAlign: 'right' }}>5</td>
                </tr>
                <tr>
                  <td style={{ padding: '12px', border: '1px solid #cbd5e1' }}>भाग-अ</td>
                  <td style={{ padding: '12px', border: '1px solid #cbd5e1' }}>हिंदी भाषा का व्यावहारिक व्याकरण</td>
                  <td style={{ padding: '12px', border: '1px solid #cbd5e1', textAlign: 'right' }}>15</td>
                </tr>
                <tr style={{ background: 'var(--card-bg-hover)' }}>
                  <td style={{ padding: '12px', border: '1px solid #cbd5e1' }}>भाग-अ</td>
                  <td style={{ padding: '12px', border: '1px solid #cbd5e1' }}>हिंदी भाषा शिक्षण</td>
                  <td style={{ padding: '12px', border: '1px solid #cbd5e1', textAlign: 'right' }}>10</td>
                </tr>
                <tr>
                  <td style={{ padding: '12px', border: '1px solid #cbd5e1' }}>भाग-अ</td>
                  <td style={{ padding: '12px', border: '1px solid #cbd5e1' }}>छत्तीसगढ़ी भाषा व साहित्य</td>
                  <td style={{ padding: '12px', border: '1px solid #cbd5e1', textAlign: 'right' }}>5</td>
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
            इस pattern में <strong>हिंदी विषय से कुल 50 अंक</strong>, बाल विकास एवं शिक्षा शास्त्र से 15 अंक और भाषा ज्ञान एवं सामान्य अध्ययन से 35 अंक निर्धारित हैं। इसलिए अच्छी तैयारी के लिए हिंदी के साथ बाकी sections को भी daily study plan में शामिल करना जरूरी है।
          </p>

          <hr style={{ margin: '40px 0', borderColor: 'var(--border-color)', borderStyle: 'dashed' }} />

          <h2 className="article-section-title" style={{ marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem', color: 'var(--color-primary)' }}>
            भाग-अ: हिंदी विषय का पूरा सिलेबस
          </h2>

          <h3 style={{ marginTop: '30px', fontSize: '1.4rem' }}>1. हिंदी साहित्य का इतिहास — 10 अंक</h3>
          <p>प्रमुख काल विभाजन, हिंदी साहित्य के प्रमुख काल एवं प्रवृत्तियां: आदिकाल, भक्तिकाल, रीतिकाल और आधुनिक काल। (हर काल के लिए एक छोटा chart बनाएं: काल → प्रमुख प्रवृत्ति → प्रमुख कवि/लेखक → प्रमुख रचनाएं)</p>

          <h3 style={{ marginTop: '30px', fontSize: '1.4rem' }}>2. गद्य खंड — 5 अंक</h3>
          <p>कहानी, नाटक, एकांकी, निबंध, रेखाचित्र, संस्मरण, जीवनी, आत्मकथा, यात्रा वृत्तांत, लघुकथा, व्यंग्य। (अलग-अलग गद्य विधाओं की परिभाषा, विशेषताएं और उदाहरण समझें)</p>

          <h3 style={{ marginTop: '30px', fontSize: '1.4rem' }}>3. पद्य खंड — 5 अंक</h3>
          <ul style={{ margin: '15px 0 15px 30px' }}>
            <li><strong>आदिकालीन कवि एवं उनकी रचनाएं</strong></li>
            <li><strong>भक्तिकाल:</strong> सगुण काव्य, निर्गुण काव्य, सूफी काव्य।</li>
            <li><strong>रीतिकाल:</strong> प्रमुख प्रवृत्तियां और प्रमुख कवि।</li>
            <li><strong>आधुनिक काल:</strong> भारतेन्दु युग, द्विवेदी युग, छायावाद, प्रगतिवाद।</li>
          </ul>

          <h3 style={{ marginTop: '30px', fontSize: '1.4rem' }}>4. हिंदी भाषा का व्यावहारिक व्याकरण — 15 अंक</h3>
          <p>यह हिंदी विषय का <strong>सबसे बड़ा individual section</strong> है।</p>
          <ul style={{ margin: '15px 0 15px 30px' }}>
            <li><strong>रस:</strong> रस की परिभाषा, अंग और प्रकार। (स्थायी भाव और उदाहरण सहित)</li>
            <li><strong>छंद:</strong> परिभाषा, अंग, दोहा, सोरठा, चौपाई, सवैया।</li>
            <li><strong>अलंकार:</strong> अनुप्रास, यमक, श्लेष, उपमा, रूपक, उत्प्रेक्षा, मानवीकरण, अतिशयोक्ति।</li>
            <li><strong>शब्द शक्तियां:</strong> परिभाषा और उदाहरण।</li>
            <li><strong>वाक्य परिचय:</strong> वाक्य के अंग और वाक्य भेद।</li>
            <li><strong>विराम चिह्न:</strong> प्रमुख प्रकार के विराम चिह्न का उपयोग।</li>
            <li><strong>मुहावरे एवं लोकोक्तियां:</strong> अर्थ और वाक्य में प्रयोग।</li>
            <li><strong>अपठित गद्यांश:</strong> passage-based questions, मुख्य विचार, शब्दार्थ।</li>
          </ul>

          <h3 style={{ marginTop: '30px', fontSize: '1.4rem' }}>5. हिंदी भाषा शिक्षण — 10 अंक</h3>
          <p>भाषा शिक्षण की प्रचलित विधियां/प्रणालियां। भाषायी दक्षताएं: सुनना, बोलना, पढ़ना और लिखना।</p>

          <h3 style={{ marginTop: '30px', fontSize: '1.4rem' }}>6. छत्तीसगढ़ी भाषा व साहित्य — 5 अंक</h3>
          <p>छत्तीसगढ़ी भाषा की basic characteristics तथा उसके साहित्य से जुड़े प्रमुख facts।</p>

          <hr style={{ margin: '40px 0', borderColor: 'var(--border-color)', borderStyle: 'dashed' }} />

          <h2 className="article-section-title" style={{ marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem', color: 'var(--color-primary)' }}>
            भाग-ब: बाल विकास एवं शिक्षा शास्त्र — 15 अंक
          </h2>
          <ul style={{ margin: '15px 0 15px 30px' }}>
            <li><strong>इकाई 1: बच्चे का विकास:</strong> विकास की अवधारणा, सीखने से संबंध, सिद्धांत, वंशानुक्रम/वातावरण, बुद्धिमत्ता, व्यक्तिगत विभिन्नताएं।</li>
            <li><strong>इकाई 2: समावेशी शिक्षा:</strong> वंचित, कमजोर और सीखने में कठिनाई वाले बच्चों का शिक्षण।</li>
            <li><strong>इकाई 3: सीखना एवं शिक्षाशास्त्र:</strong> सीखने-सिखाने के तरीके, सामाजिक क्रियाकलाप, बच्चे को समस्या समाधानकर्ता समझना, अभिप्रेरणा।</li>
          </ul>

          <h2 className="article-section-title" style={{ marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem', color: 'var(--color-primary)' }}>
            भाग-स: भाषा ज्ञान एवं सामान्य अध्ययन — 35 अंक
          </h2>
          <p><strong>भाषा ज्ञान एवं सामान्य अध्ययन 35 अंकों</strong> का सबसे बड़ा section है।</p>

          <h3 style={{ marginTop: '30px', fontSize: '1.4rem' }}>सामान्य हिंदी — 5 अंक</h3>
          <p>स्वर, व्यंजन, वर्तनी, लिंग, वचन, काल, संज्ञा, सर्वनाम, विशेषण, क्रिया, कारक, समास, संधि, उपसर्ग एवं प्रत्यय, पर्यायवाची, विलोम।</p>

          <h3 style={{ marginTop: '30px', fontSize: '1.4rem' }}>General English — 5 Marks</h3>
          <p>Number, Gender, Articles, Noun, Pronoun, Adjectives, Verb, Adverb, Preposition, Conjunction, Synonyms, Antonyms, One Word Substitution, Active/Passive Voice, Sentences, Punctuation.</p>

          <h3 style={{ marginTop: '30px', fontSize: '1.4rem' }}>सामान्य मानसिक योग्यता — 10 अंक</h3>
          <p>तर्क करना, संबंध देखना, Analogy, अंकिक योग्यता, अक्षर एवं अंक आधारित questions, गणितीय संक्रियाएं, विभिन्न patterns।</p>

          <h3 style={{ marginTop: '30px', fontSize: '1.4rem' }}>कंप्यूटर शिक्षा — 5 अंक</h3>
          <p>Computer Basics, Hardware/Software, Input/Output Devices, Printers, Operating System, MS Office, Internet, Cyber Security, Virus, Search Engine.</p>

          <h3 style={{ marginTop: '30px', fontSize: '1.4rem' }}>सामान्य ज्ञान — 10 अंक</h3>
          <ul style={{ margin: '15px 0 15px 30px' }}>
            <li><strong>भारतीय संविधान:</strong> मौलिक कर्तव्य, राजनीतिक व्यवस्था, चुनाव, लोकसभा, राज्यसभा।</li>
            <li><strong>इतिहास एवं भूगोल:</strong> सभ्यता एवं संस्कृति, स्वतंत्रता आंदोलन (1857-1947), भारत एवं विश्व का भूगोल।</li>
            <li><strong>अर्थव्यवस्था एवं विज्ञान:</strong> पंचवर्षीय योजनाएं, गरीबी, बेरोजगारी, भौतिकी, रसायन विज्ञान, जीव विज्ञान।</li>
            <li><strong>छत्तीसगढ़ सामान्य ज्ञान:</strong> इतिहास, भूगोल, राजनीतिक व्यवस्था, अर्थव्यवस्था, पुरस्कार, परंपराएं।</li>
            <li><strong>राष्ट्रीय शिक्षा नीति 2020:</strong> भाग-1 (स्कूल शिक्षा)।</li>
          </ul>

          <h2 className="article-section-title" style={{ marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem', color: 'var(--color-primary)' }}>
            शिक्षक हिंदी परीक्षा की तैयारी कैसे करें?
          </h2>

          <h3 style={{ marginTop: '30px', fontSize: '1.4rem' }}>Step 1: पहले हिंदी के Core Topics मजबूत करें</h3>
          <p>हिंदी साहित्य का इतिहास → गद्य → पद्य → व्याकरण → हिंदी भाषा शिक्षण → छत्तीसगढ़ी भाषा एवं साहित्य। (व्यावहारिक व्याकरण 15 अंकों का है, इसे daily practice में रखें)</p>

          <h3 style={{ marginTop: '30px', fontSize: '1.4rem' }}>Step 2: साहित्य के लिए Timeline बनाएं</h3>
          <p>आदिकाल → भक्तिकाल → रीतिकाल → आधुनिक काल (प्रत्येक काल की प्रमुख प्रवृत्तियां और प्रमुख साहित्यकारों को जोड़ते हुए notes बनाएं)</p>

          <h3 style={{ marginTop: '30px', fontSize: '1.4rem' }}>Step 3: 35 अंकों वाले Section को Ignore न करें</h3>
          <p>रोज का study schedule: Hindi Literature + Grammar (2 घंटे), Child Development (45 मिनट), General Hindi/English (30-45 मिनट), GK + Current Affairs (30 मिनट), Computer/Reasoning (30 मिनट)।</p>

          <div style={{ background: 'var(--card-bg-hover)', padding: '20px', borderRadius: '8px', borderLeft: '4px solid var(--color-primary)', margin: '25px 0' }}>
            <h3 style={{ marginTop: '0', fontSize: '1.2rem' }}>परीक्षा से पहले Revision Strategy</h3>
            <ul style={{ margin: '0 0 15px 20px', padding: 0 }}>
              <li><strong>Revision 1 (Complete Syllabus):</strong> हर topic को कम से कम एक बार cover करें।</li>
              <li><strong>Revision 2 (Short Notes):</strong> केवल important काल एवं साहित्यिक प्रवृत्तियां, रस, छंद, अलंकार, व्याकरण rules, भाषा शिक्षण, GK revise करें।</li>
              <li><strong>Revision 3 (MCQ + Mock Test):</strong> हर section के MCQs लगाएं और फिर full-length mock test दें। जो questions गलत हों, उनकी Mistake Notebook बनाएं।</li>
            </ul>
          </div>

          <h2 className="article-section-title" style={{ marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem', color: 'var(--color-primary)' }}>
            निष्कर्ष
          </h2>
          <p><strong>शिक्षक हिंदी सिलेबस 2026</strong> में हिंदी साहित्य और भाषा से जुड़े topics के साथ शिक्षक बनने के लिए आवश्यक <strong>बाल विकास एवं शिक्षा शास्त्र</strong> तथा सामान्य प्रतियोगी परीक्षा वाले sections को भी शामिल किया गया है।</p>
          <p>हिंदी विषय में <strong>व्यावहारिक व्याकरण 15 अंक</strong>, हिंदी साहित्य का इतिहास 10 अंक और हिंदी भाषा शिक्षण 10 अंक के साथ गद्य, पद्य और छत्तीसगढ़ी भाषा-साहित्य के लिए भी अंक निर्धारित हैं। वहीं <strong>भाषा ज्ञान एवं सामान्य अध्ययन के 35 अंक</strong> पूरे paper में सबसे बड़ा section है।</p>
          
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
