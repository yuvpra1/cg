import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import AuthorByline from '@/components/AuthorByline';
import ArticleFooter from '@/components/ArticleFooter';

export const metadata: Metadata = {
  title: 'General Dhiraj Seth Nepal Visit 2026: नेपाली सेना का मानद जनरल रैंक, महत्वपूर्ण तथ्य',
  description: 'General Dhiraj Seth Nepal Visit 2026 की पूरी जानकारी। जानिए नेपाल यात्रा, Honorary General Rank, भारत-नेपाल सैन्य संबंध और परीक्षा के लिए महत्वपूर्ण facts।',
  keywords: 'General Dhiraj Seth Nepal Visit 2026, Indian Army Chief Nepal Visit, Honorary General Rank Nepal, India Nepal Military Relations, General Dhiraj Seth, CGSSB Current Affairs'
};

export default function GeneralDhirajSethNepalVisit() {
  const currentDate = new Date().toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="container" style={{ paddingTop: '40px', paddingBottom: '60px' }}>
      <article className="card" style={{ margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.2rem', marginBottom: '20px', color: 'var(--color-primary)' }}>
          General Dhiraj Seth Nepal Visit 2026: जनरल धीरज सेठ को मिला नेपाली सेना का मानद जनरल रैंक
        </h1>
        
        <AuthorByline date="17 August 2026" />

        <div style={{ position: 'relative', margin: '30px 0', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border-color)', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
          <Image 
            src={`${process.env.NEXT_PUBLIC_R2_URL}/images/general-dhiraj-seth-nepal-visit-2026.webp`} 
            alt="General Dhiraj Seth Nepal Visit 2026: नेपाली सेना का मानद जनरल रैंक"
            width={800} 
            height={450} 
            layout="responsive"
            priority
          />
          <div style={{ position: 'absolute', bottom: '10px', right: '10px', background: 'rgba(0,0,0,0.65)', color: 'white', padding: '5px 10px', borderRadius: '4px', fontSize: '0.8rem', zIndex: 10 }}>
            This image is AI generated
          </div>
        </div>

        <div className="article-content" style={{ lineHeight: '1.8', fontSize: '1.05rem', color: 'var(--text-main)' }}>
          <p>
            <strong>General Dhiraj Seth Nepal Visit 2026:</strong> भारतीय सेना प्रमुख जनरल धीरज सेठ 17 अगस्त 2026 को तीन दिवसीय आधिकारिक दौरे पर नेपाल पहुंचे। यह यात्रा भारत और नेपाल के बीच लंबे समय से चले आ रहे सैन्य संबंधों और defence cooperation को मजबूत करने की दिशा में महत्वपूर्ण मानी जा रही है। उपलब्ध रिपोर्ट के अनुसार उनका नेपाल दौरा 17 से 19 अगस्त 2026 तक निर्धारित है।
          </p>
          <p>
            इस यात्रा का एक प्रमुख हिस्सा भारतीय सेना प्रमुख को Nepali Army के <strong>Honorary General</strong> की मानद उपाधि प्रदान किया जाना है। भारत और नेपाल के बीच दोनों देशों के Army Chiefs को एक-दूसरे की सेना में honorary General का rank देने की पुरानी परंपरा रही है।
          </p>

          <h2 className="article-section-title" style={{ marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem', color: 'var(--color-primary)' }}>
            जनरल धीरज सेठ कौन हैं?
          </h2>
          <p>
            जनरल धीरज सेठ ने 30 जून 2026 को जनरल उपेंद्र द्विवेदी के बाद भारत के <strong>31वें Chief of the Army Staff (COAS)</strong> के रूप में कार्यभार संभाला। इससे पहले वे Vice Chief of the Army Staff के पद पर कार्यरत थे।
          </p>
          <p>
            जनरल सेठ <strong>Armoured Corps</strong> से आते हैं और दिसंबर 1986 में भारतीय सेना में commissioned हुए थे। वे लगभग चार दशक के सैन्य करियर में अलग-अलग operational और command appointments पर काम कर चुके हैं।
          </p>
          <p>
            नेपाल यात्रा से पहले, उन्होंने Indian Army Chief के तौर पर अपनी पहली विदेश यात्रा भी की थी। सेना प्रमुख का पद संभालने के बाद जनरल सेठ की ये कूटनीतिक यात्राएं भारत की "Neighbourhood First Policy" के महत्व को दर्शाती हैं।
          </p>

          <h2 className="article-section-title" style={{ marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem', color: 'var(--color-primary)' }}>
            भारत-नेपाल के बीच Honorary General Rank की परंपरा
          </h2>
          <p>भारत और नेपाल के बीच Army Chiefs को एक-दूसरे की सेना का Honorary General बनाने की परंपरा नई नहीं है।</p>
          <p>
            नेपाल के राष्ट्रपति राम चंद्र पौडेल (Ram Chandra Paudel) द्वारा जनरल धीरज सेठ को <strong>Honorary General of the Nepali Army</strong> के पद से सम्मानित किया जाना इस दौरे का मुख्य आकर्षण है। यह सम्मान समारोह राष्ट्रपति के आधिकारिक निवास शितल निवास (Shital Niwas) में आयोजित किया जाता है।
          </p>
          <p>इसके बाद दोनों देशों के Army Chiefs को बारी-बारी से यह सम्मान दिए जाने की परंपरा जारी रही है। उदाहरण के लिए:</p>
          <ul style={{ margin: '15px 0 25px 20px' }}>
            <li><strong>2022:</strong> भारतीय सेना प्रमुख General Manoj Pande को Nepali Army का Honorary General बनाया गया था।</li>
            <li><strong>2024:</strong> नेपाल के Army Chief General Ashok Raj Sigdel को भारत की President Droupadi Murmu ने Indian Army का Honorary General rank प्रदान किया था।</li>
            <li><strong>2024:</strong> भारतीय Army Chief General Upendra Dwivedi को Nepal Army का Honorary General rank दिया गया था।</li>
          </ul>
          <p>इसलिए जनरल धीरज सेठ की नेपाल यात्रा को केवल एक सामान्य military visit के रूप में नहीं देखा जाना चाहिए। यह दोनों सेनाओं के बीच longstanding military relationship का हिस्सा है。</p>

          <h2 className="article-section-title" style={{ marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem', color: 'var(--color-primary)' }}>
            भारत और नेपाल के सैन्य संबंध क्यों महत्वपूर्ण हैं?
          </h2>
          <p>भारत और नेपाल के संबंध केवल राजनीतिक या आर्थिक स्तर तक सीमित नहीं हैं। दोनों देशों की सेनाओं के बीच भी लंबे समय से close cooperation रहा है।</p>
          <p>
            भारत और नेपाल के बीच रक्षा सहयोग (Defence Cooperation) अत्यंत प्रगाढ़ है। भारतीय सेना में बड़ी संख्या में Gorkha soldiers कार्यरत हैं। दोनों सेनाओं के बीच नियमित रूप से <strong>'Surya Kiran'</strong> नाम का संयुक्त सैन्य अभ्यास (Joint Military Exercise) होता है, जो counter-terrorism और disaster relief operations पर केंद्रित होता है।
          </p>
          <p>इसके अलावा दोनों सेनाओं के बीच high-level visits, military training और संयुक्त सैन्य गतिविधियों के माध्यम से professional cooperation भी जारी रहता है। भारत और नेपाल की सेनाएं <strong>Surya Kiran</strong> जैसे संयुक्त सैन्य अभ्यास के माध्यम से भी एक-दूसरे के साथ training करती हैं।</p>

          <h2 className="article-section-title" style={{ marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem', color: 'var(--color-primary)' }}>
            Kathmandu में General Dhiraj Seth का दौरा
          </h2>
          <p>जनरल धीरज सेठ का Nepal दौरा 17 से 19 अगस्त 2026 तक निर्धारित है। यात्रा का उद्देश्य दोनों देशों के बीच defence और military-to-military cooperation को आगे बढ़ाना बताया गया है।</p>
          <p>आपके दिए गए विवरण के अनुसार यात्रा के दौरान:</p>
          <ul style={{ margin: '15px 0 25px 20px' }}>
            <li>Nepali Army Headquarters का दौरा</li>
            <li>वरिष्ठ सैन्य अधिकारियों के साथ बातचीत</li>
            <li>सैन्य cooperation से जुड़े विषयों पर चर्चा</li>
            <li>Kathmandu में ceremonial कार्यक्रम</li>
            <li>Shivapuri में Army Command and Staff Course के student officers के साथ interaction</li>
            <li>Pokhara में Ex-Servicemen Rally में शामिल होना</li>
          </ul>
          <div style={{ background: 'var(--card-bg-hover)', padding: '15px', borderRadius: '8px', borderLeft: '4px solid var(--color-primary)', margin: '15px 0' }}>
            <strong>नोट:</strong> इन कार्यक्रमों की अंतिम स्थिति या समय में बदलाव हो सकता है, इसलिए students को latest official update देखना चाहिए।
          </div>

          <h2 className="article-section-title" style={{ marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem', color: 'var(--color-primary)' }}>
            परीक्षा के लिए महत्वपूर्ण तथ्य
          </h2>
          <p>प्रतियोगी परीक्षाओं की तैयारी करने वाले students के लिए इस घटना से कई सीधे questions बन सकते हैं:</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }}>
            <div style={{ background: 'var(--card-bg-hover)', padding: '15px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
              <strong>प्रश्न: भारत के वर्तमान Army Chief कौन हैं?</strong><br/>
              <span style={{ color: 'var(--color-primary)' }}>उत्तर: General Dhiraj Seth</span>
            </div>
            <div style={{ background: 'var(--card-bg-hover)', padding: '15px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
              <strong>प्रश्न: General Dhiraj Seth भारत के कौन-से Army Chief हैं?</strong><br/>
              <span style={{ color: 'var(--color-primary)' }}>उत्तर: 31वें Chief of the Army Staff</span>
            </div>
            <div style={{ background: 'var(--card-bg-hover)', padding: '15px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
              <strong>प्रश्न: उन्होंने Army Chief का पद कब संभाला?</strong><br/>
              <span style={{ color: 'var(--color-primary)' }}>उत्तर: 30 जून 2026</span>
            </div>
            <div style={{ background: 'var(--card-bg-hover)', padding: '15px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
              <strong>प्रश्न: General Dhiraj Seth किस military corps से संबंधित हैं?</strong><br/>
              <span style={{ color: 'var(--color-primary)' }}>उत्तर: Armoured Corps</span>
            </div>
            <div style={{ background: 'var(--card-bg-hover)', padding: '15px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
              <strong>प्रश्न: भारत-नेपाल के Army Chiefs को Honorary General rank देने की परंपरा कब से है?</strong><br/>
              <span style={{ color: 'var(--color-primary)' }}>उत्तर: 1950 से</span>
            </div>
            <div style={{ background: 'var(--card-bg-hover)', padding: '15px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
              <strong>प्रश्न: नेपाल में भारतीय Army Chief को Honorary General rank कहां प्रदान किया जाता है?</strong><br/>
              <span style={{ color: 'var(--color-primary)' }}>उत्तर: Kathmandu स्थित Sheetal Niwas में (यह Nepal के President का official residence है)।</span>
            </div>
          </div>

          <h2 className="article-section-title" style={{ marginTop: '50px', marginBottom: '20px', fontSize: '1.8rem', color: 'var(--color-primary)' }}>
            एक नजर में (Quick Review)
          </h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
              <thead>
                <tr style={{ background: 'var(--color-primary)', color: 'white' }}>
                  <th style={{ padding: '12px', border: '1px solid #cbd5e1', textAlign: 'left' }}>विषय</th>
                  <th style={{ padding: '12px', border: '1px solid #cbd5e1', textAlign: 'left' }}>जानकारी</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ background: 'var(--card-bg-hover)' }}>
                  <td style={{ padding: '12px', border: '1px solid #cbd5e1' }}>भारतीय सेना प्रमुख</td>
                  <td style={{ padding: '12px', border: '1px solid #cbd5e1', fontWeight: 'bold' }}>General Dhiraj Seth</td>
                </tr>
                <tr>
                  <td style={{ padding: '12px', border: '1px solid #cbd5e1' }}>Army Chief का क्रम</td>
                  <td style={{ padding: '12px', border: '1px solid #cbd5e1', fontWeight: 'bold' }}>31वें</td>
                </tr>
                <tr style={{ background: 'var(--card-bg-hover)' }}>
                  <td style={{ padding: '12px', border: '1px solid #cbd5e1' }}>कार्यभार संभाला</td>
                  <td style={{ padding: '12px', border: '1px solid #cbd5e1', fontWeight: 'bold' }}>30 जून 2026</td>
                </tr>
                <tr>
                  <td style={{ padding: '12px', border: '1px solid #cbd5e1' }}>Military Corps</td>
                  <td style={{ padding: '12px', border: '1px solid #cbd5e1', fontWeight: 'bold' }}>Armoured Corps</td>
                </tr>
                <tr style={{ background: 'var(--card-bg-hover)' }}>
                  <td style={{ padding: '12px', border: '1px solid #cbd5e1' }}>Nepal Visit</td>
                  <td style={{ padding: '12px', border: '1px solid #cbd5e1', fontWeight: 'bold' }}>17–19 अगस्त 2026</td>
                </tr>
                <tr>
                  <td style={{ padding: '12px', border: '1px solid #cbd5e1' }}>मुख्य उद्देश्य</td>
                  <td style={{ padding: '12px', border: '1px solid #cbd5e1', fontWeight: 'bold' }}>India-Nepal Defence Cooperation</td>
                </tr>
                <tr style={{ background: 'var(--card-bg-hover)' }}>
                  <td style={{ padding: '12px', border: '1px solid #cbd5e1' }}>Honorary Rank</td>
                  <td style={{ padding: '12px', border: '1px solid #cbd5e1', fontWeight: 'bold' }}>General of the Nepali Army</td>
                </tr>
                <tr>
                  <td style={{ padding: '12px', border: '1px solid #cbd5e1' }}>परंपरा की शुरुआत</td>
                  <td style={{ padding: '12px', border: '1px solid #cbd5e1', fontWeight: 'bold' }}>1950</td>
                </tr>
                <tr style={{ background: 'var(--card-bg-hover)' }}>
                  <td style={{ padding: '12px', border: '1px solid #cbd5e1' }}>पहले भारतीय Army Chief जिन्हें यह सम्मान मिला</td>
                  <td style={{ padding: '12px', border: '1px solid #cbd5e1', fontWeight: 'bold' }}>General K. M. Cariappa</td>
                </tr>
                <tr>
                  <td style={{ padding: '12px', border: '1px solid #cbd5e1' }}>समारोह स्थल</td>
                  <td style={{ padding: '12px', border: '1px solid #cbd5e1', fontWeight: 'bold' }}>Sheetal Niwas (Kathmandu)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="article-section-title" style={{ marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem', color: 'var(--color-primary)' }}>
            निष्कर्ष
          </h2>
          <p>General Dhiraj Seth की Nepal यात्रा भारत और नेपाल के बीच लंबे समय से चले आ रहे defence और military relations की एक महत्वपूर्ण कड़ी है। दोनों देशों के Army Chiefs को एक-दूसरे की सेना का honorary General rank देने की परंपरा करीब सात दशक से चली आ रही है और यह दोनों सेनाओं के बीच विशेष संबंध को दर्शाती है।</p>
          <p>17 से 19 अगस्त 2026 की यह यात्रा इसलिए भी महत्वपूर्ण है क्योंकि General Dhiraj Seth ने 30 जून 2026 में भारत के 31वें Chief of Army Staff के रूप में कार्यभार संभाला है।</p>
        </div>

        <ArticleFooter 
          date="17 August 2026"
          sourceText="Press Information Bureau - Ministry of Defence"
          sourceLink="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2279326&lang=2&reg=48"
        />

        {/* Disclaimer Section */}
        <div style={{ marginTop: '40px', padding: '20px', backgroundColor: 'var(--card-bg-hover)', border: '1px solid var(--border-color)', borderRadius: '8px', fontSize: '0.9rem', color: '#ef4444' }}>
          <h4 style={{ margin: '0 0 10px 0' }}>महत्वपूर्ण सूचना / Disclaimer</h4>
          <p style={{ margin: 0 }}>
            अस्वीकरण: इस लेख में दी गई जानकारी विद्यार्थियों की प्रतियोगी परीक्षा की तैयारी और सामान्य जानकारी के उद्देश्य से प्रकाशित की गई है। Defence और international relations से जुड़ी घटनाओं में कार्यक्रम, पद, तारीख या अन्य विवरण समय के साथ अपडेट हो सकते हैं। इसलिए परीक्षा में उपयोग करने से पहले महत्वपूर्ण जानकारी को संबंधित सरकारी विभाग, Ministry of Defence, Ministry of External Affairs अथवा अन्य official source से एक बार verify जरूर करें। <br/><br/>
            यदि इस लेख में कोई factual error या बाद में हुआ बदलाव दिखाई देता है, तो कृपया हमें <a href="mailto:contact@cgssb.com.in" style={{ color: '#ef4444', textDecoration: 'underline' }}>contact@cgssb.com.in</a> पर जानकारी दें। Official source उपलब्ध होने पर correction को जांच के बाद update किया जाएगा।
          </p>
        </div>

      </article>
    </div>
  );
}
