import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import AuthorByline from '@/components/AuthorByline';
import ArticleFooter from '@/components/ArticleFooter';

export const metadata: Metadata = {
  title: 'छत्तीसगढ़ करेंट अफेयर्स - मई व जून 2026 | CG Current Affairs',
  description: 'CGPSC, CGSSB (Vyapam), और अन्य राज्य स्तरीय परीक्षाओं के लिए मई और जून 2026 के सबसे महत्वपूर्ण छत्तीसगढ़ करंट अफेयर्स का विस्तृत संकलन।',
};

export default function CurrentAffairsMayJune2026() {
  return (
    <article className="container" style={{ paddingTop: '40px', paddingBottom: '60px', maxWidth: '900px', margin: '0 auto' }}>
      
      <header style={{ marginBottom: '30px' }}>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
          <span style={{ 
            background: 'var(--color-primary)', 
            color: 'white', 
            padding: '4px 12px', 
            borderRadius: '20px', 
            fontSize: '0.85rem',
            fontWeight: 'bold'
          }}>
            Current Affairs
          </span>
          <span style={{ 
            background: '#e2e8f0', 
            color: '#475569', 
            padding: '4px 12px', 
            borderRadius: '20px', 
            fontSize: '0.85rem',
            fontWeight: 'bold'
          }}>
            May & June 2026
          </span>
        </div>
        <h1 style={{ fontSize: '2.5rem', lineHeight: '1.2', marginBottom: '20px', color: 'var(--text-main)' }}>
          छत्तीसगढ़ करेंट अफेयर्स (मई - जून 2026): CGPSC और CGSSB परीक्षाओं के लिए महत्वपूर्ण प्रश्न
        </h1>
        <AuthorByline />
      </header>

      <div className="content" style={{ lineHeight: '1.8', fontSize: '1.1rem', color: 'var(--text-main)' }}>
        
        <p>
          आगामी <Link href="/jobs/cgssb-nssk26-recruitment-2026" style={{ color: 'var(--color-primary)' }}>CGSSB (Vyapam)</Link> और CGPSC परीक्षाओं की तैयारी कर रहे उम्मीदवारों के लिए मई और जून 2026 के छत्तीसगढ़ करंट अफेयर्स (CG Current Affairs) अत्यंत महत्वपूर्ण हैं। इस लेख में हमने राज्य की महत्वपूर्ण पुरातात्विक खोजों, सरकारी योजनाओं, पुरस्कारों और खेल जगत से जुड़ी प्रमुख घटनाओं का सार प्रस्तुत किया है।
        </p>

        <hr style={{ margin: '40px 0', borderColor: '#e2e8f0' }} />

        <h2 style={{ color: 'var(--color-primary)', fontSize: '1.8rem', marginTop: '30px', borderBottom: '2px solid var(--color-primary)', paddingBottom: '10px' }}>
          1. पुरातात्विक एवं ऐतिहासिक खोजें
        </h2>

        <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '10px', marginBottom: '20px', borderLeft: '4px solid #3b82f6' }}>
          <h3 style={{ color: '#1e293b', fontSize: '1.3rem', marginTop: '0' }}>महासमुंद जिले में हीरे की खोज</h3>
          <p>महासमुंद जिले के <strong>सरायपाली</strong> क्षेत्र के अंतर्गत <strong>बलौदा बेलमुंडी डायमंड ब्लॉक</strong> से 1.22 कैरेट वजन के 5 रफ हीरे प्राप्त हुए हैं। इनमें से 2 सफेद हीरे <strong>जेम क्वालिटी (रत्न श्रेणी)</strong> के हैं। इसे एनएमडीसी और सीएमडीसी के संयुक्त उपक्रम ने खोजा है और वर्तमान में इन्हें मध्य प्रदेश के पन्ना स्थित एनएमडीसी वाल्ट में सुरक्षित रखा गया है।</p>
        </div>

        <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '10px', marginBottom: '20px', borderLeft: '4px solid #3b82f6' }}>
          <h3 style={{ color: '#1e293b', fontSize: '1.3rem', marginTop: '0' }}>महाशिवगुप्त बालार्जुन का 1500 साल पुराना ताम्रपत्र</h3>
          <p>बिलासपुर जिले के <strong>मल्हार</strong> से पांडुवंशीय शासक महाशिवगुप्त बालार्जुन का प्राचीन ताम्रपत्र प्राप्त हुआ है। इसके <strong>राजमुद्रा में त्रिशूल, कमंडल, नंदी और पूर्ण विकसित पद्म (कमल)</strong> का अंकन है। प्रधानमंत्री नरेंद्र मोदी जी ने 'मन की बात' के 134वें एपिसोड में इसका विशेष उल्लेख किया।</p>
        </div>
        
        <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '10px', marginBottom: '20px', borderLeft: '4px solid #3b82f6' }}>
          <h3 style={{ color: '#1e293b', fontSize: '1.3rem', marginTop: '0' }}>दुर्लभ पांडुलिपि 'खूब तमाशा'</h3>
          <p>कोरबा जिले के <strong>शिवपुर</strong> से कलचुरी शासक राज सिंह के दरबारी कवि <strong>गोपाल मिश्र</strong> द्वारा रचित 1689 ई. की पांडुलिपि 'खूब तमाशा' प्राप्त हुई है। इसी ग्रंथ में पहली बार <strong>'छत्तीसगढ़'</strong> नाम का उल्लेख मिलता है।</p>
        </div>

        <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '10px', marginBottom: '20px', borderLeft: '4px solid #3b82f6' }}>
          <h3 style={{ color: '#1e293b', fontSize: '1.3rem', marginTop: '0' }}>अवलोकतेश्वर कांस्य प्रतिमा की वापसी</h3>
          <p>रायपुर के संग्रहालय से चोरी हुई बौद्ध धर्म (महायान संप्रदाय) की <strong>अवलोकतेश्वर</strong> की प्राचीन दुर्लभ कांस्य प्रतिमा (शिल्पकार: द्रोणादित्य) अमेरिका से भारत वापस लाई जा रही है।</p>
        </div>

        <h2 style={{ color: 'var(--color-primary)', fontSize: '1.8rem', marginTop: '40px', borderBottom: '2px solid var(--color-primary)', paddingBottom: '10px' }}>
          2. राज्य की प्रमुख योजनाएं एवं नीतियां
        </h2>

        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '30px' }}>
          <li style={{ marginBottom: '15px' }}><strong>सीएम हेल्पलाइन 1076:</strong> 9 जून 2026 को शुरू की गई। इसका टैगलाइन है <em>"समस्या तूर, समाधान हमर"</em>।</li>
          <li style={{ marginBottom: '15px' }}><strong>छत्तीसगढ़ सीबीजी नीति 2026:</strong> 23 जून 2026 को कैबिनेट द्वारा <strong>कंप्रेस्ड बायोगैस (CBG)</strong> उत्पादन के लिए मंजूरी। प्रदेश के 8 प्रमुख शहरों में प्लांट लगाए जाएंगे।</li>
          <li style={{ marginBottom: '15px' }}><strong>यूसीसी (समान नागरिक संहिता) समिति:</strong> छत्तीसगढ़ में यूसीसी लागू करने के अध्ययन के लिए रिटायर्ड जज <strong>रंजना प्रकाश देसाई</strong> की अध्यक्षता में 5 सदस्यीय समिति का गठन किया गया है।</li>
          <li style={{ marginBottom: '15px' }}><strong>बस्तर मुन्ने अभियान:</strong> 1 मई 2026 से शुरू। इसका शाब्दिक अर्थ 'अग्रणी बस्तर' है। इसका उद्देश्य बस्तर संभाग के 7 जिलों में योजनाओं से वंचित परिवारों को 100% लाभ दिलाना है (नियद नेलनार योजना का विस्तार)।</li>
          <li style={{ marginBottom: '15px' }}><strong>मुख्यमंत्री आदर्श शहर समृद्धि योजना:</strong> नगर पालिका और नगर पंचायतों के सुनियोजित शहरी विकास के लिए शुरू की गई।</li>
        </ul>

        <h2 style={{ color: 'var(--color-primary)', fontSize: '1.8rem', marginTop: '40px', borderBottom: '2px solid var(--color-primary)', paddingBottom: '10px' }}>
          3. खनिज एवं औद्योगिक विकास
        </h2>

        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '30px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
          <thead>
            <tr style={{ background: 'var(--color-primary)', color: 'white', textAlign: 'left' }}>
              <th style={{ padding: '12px', border: '1px solid #e2e8f0' }}>प्रोजेक्ट / खदान</th>
              <th style={{ padding: '12px', border: '1px solid #e2e8f0' }}>स्थान</th>
              <th style={{ padding: '12px', border: '1px solid #e2e8f0' }}>विवरण</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '12px', border: '1px solid #e2e8f0', fontWeight: 'bold' }}>निकल, क्रॉपर, पैलेडियम खदान</td>
              <td style={{ padding: '12px', border: '1px solid #e2e8f0' }}>भालूकोना (महासमुंद)</td>
              <td style={{ padding: '12px', border: '1px solid #e2e8f0' }}>देश की पहली ऐसी खदान जहाँ ये तीनों खनिज एक साथ मिलेंगे। इलेक्ट्रॉनिक बैटरी निर्माण में उपयोगी।</td>
            </tr>
            <tr style={{ background: '#f8fafc' }}>
              <td style={{ padding: '12px', border: '1px solid #e2e8f0', fontWeight: 'bold' }}>लौह अयस्क खदान (खारा माइंस)</td>
              <td style={{ padding: '12px', border: '1px solid #e2e8f0' }}>बोड़ला (कबीरधाम)</td>
              <td style={{ padding: '12px', border: '1px solid #e2e8f0' }}>कबीरधाम जिले में पहली बार लौह अयस्क की नीलामी (श्याम मिनरल्स को)।</td>
            </tr>
            <tr>
              <td style={{ padding: '12px', border: '1px solid #e2e8f0', fontWeight: 'bold' }}>बाघमारा गोल्ड प्रोजेक्ट</td>
              <td style={{ padding: '12px', border: '1px solid #e2e8f0' }}>बाघमारा (बलौदा बाजार)</td>
              <td style={{ padding: '12px', border: '1px solid #e2e8f0' }}>देश की चौथी संभावित स्वर्ण खदान, वेदांता समूह द्वारा उत्खनन किया जाएगा।</td>
            </tr>
          </tbody>
        </table>

        <h2 style={{ color: 'var(--color-primary)', fontSize: '1.8rem', marginTop: '40px', borderBottom: '2px solid var(--color-primary)', paddingBottom: '10px' }}>
          4. पुरस्कार एवं सम्मान
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '30px' }}>
          <div style={{ background: 'white', border: '1px solid #e2e8f0', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
            <h3 style={{ color: '#0f172a', margin: '0 0 10px 0' }}>पद्मश्री 2026</h3>
            <ul style={{ margin: '0', paddingLeft: '20px', fontSize: '0.95rem' }}>
              <li><strong>डॉ. गडबोले दंपत्ति (दंतेवाड़ा):</strong> 'डॉक्टर भैया-भाभी' के नाम से प्रसिद्ध, चिकित्सा सेवा (ट्रस्ट फॉर हेल्थ) के लिए।</li>
              <li><strong>डॉ. बुद्री ताती (दंतेवाड़ा):</strong> 'बड़ी दीदी', समाज सेवा (मां शंखिनी महिला उत्थान संस्था) के लिए।</li>
            </ul>
          </div>
          
          <div style={{ background: 'white', border: '1px solid #e2e8f0', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
            <h3 style={{ color: '#0f172a', margin: '0 0 10px 0' }}>संगीत नाटक अकादमी</h3>
            <ul style={{ margin: '0', paddingLeft: '20px', fontSize: '0.95rem' }}>
              <li><strong>अनुप रंजन पांडे:</strong> लोक कला (बस्तर बैंड संस्थापक)।</li>
              <li><strong>आनंद पांडे:</strong> रंगमंच/अभिनय।</li>
              <li><strong>पं. रामलाल बरेट:</strong> कथक (अकादमी रत्न)।</li>
              <li><strong>घनश्याम साहू:</strong> नाट्य लेखन।</li>
            </ul>
          </div>
        </div>

        <h2 style={{ color: 'var(--color-primary)', fontSize: '1.8rem', marginTop: '40px', borderBottom: '2px solid var(--color-primary)', paddingBottom: '10px' }}>
          5. खेल जगत एवं पर्वतारोहण
        </h2>

        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '30px' }}>
          <li style={{ marginBottom: '10px' }}><strong>ज्ञानेश्वरी यादव:</strong> एशियन वेटलिफ्टिंग चैंपियनशिप 2026 (गुजरात) में 55 किग्रा वर्ग में <strong>रजत (Silver)</strong> और <strong>कांस्य (Bronze)</strong> पदक जीता। वह भारत के लिए एकमात्र रजत पदक विजेता रहीं।</li>
          <li style={{ marginBottom: '10px' }}><strong>अमिता श्रीवास:</strong> जांजगीर-चांपा की निवासी, 22 मई 2026 को माउंट एवरेस्ट फतह करने वाली नवीनतम महिला पर्वतारोही बनीं। (ज्ञात हो कि राज्य की पहली महिला पर्वतारोही नैना सिंह धाकड़ हैं)।</li>
          <li style={{ marginBottom: '10px' }}><strong>छत्तीसगढ़ क्रिकेट प्रीमियर लीग (CCPL):</strong> बिलासपुर बुल्स ने रायगढ़ लायंस को हराकर सीसीपीएल-3 का खिताब जीता।</li>
          <li style={{ marginBottom: '10px' }}><strong>76वीं जूनियर नेशनल बास्केटबॉल:</strong> छत्तीसगढ़ बालिका टीम ने पुडुचेरी में स्वर्ण पदक जीता।</li>
        </ul>

        <h2 style={{ color: 'var(--color-primary)', fontSize: '1.8rem', marginTop: '40px', borderBottom: '2px solid var(--color-primary)', paddingBottom: '10px' }}>
          6. दुर्लभ वन्यजीव एवं पर्यावरण
        </h2>

        <p>उदंती-सीतानदी और अन्य जंगलों में कई दुर्लभ वन्यजीव देखे गए हैं:</p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '30px' }}>
          <li><strong>हॉर्नबिल सफारी:</strong> उदंती-सीतानदी अभयारण्य में शुरू।</li>
          <li><strong>तीन सुनहरी धारियों वाला कछुआ:</strong> उदंती-सीतानदी में देखा गया दुर्लभ हिमालयी कछुआ।</li>
          <li><strong>वाटर जेंटलमैन (उदबिलाव):</strong> इंद्रावती के बाद अब उदंती-सीतानदी में दर्ज।</li>
          <li><strong>हनी बैजर (छिंद भालू):</strong> उदंती-सीतानदी में देखा गया अत्यंत साहसी जीव।</li>
          <li><strong>विशाल भारतीय गिलहरी:</strong> बारनवापारा अभयारण्य के देवपुर जंगल में भारत की सबसे बड़ी गिलहरी (राजकीय पशु महाराष्ट्र) देखी गई।</li>
          <li><strong>भोरमदेव जंगल सफारी:</strong> 3 मई 2026 को कवर्धा में उद्घाटन।</li>
        </ul>

        <h2 style={{ color: 'var(--color-primary)', fontSize: '1.8rem', marginTop: '40px', borderBottom: '2px solid var(--color-primary)', paddingBottom: '10px' }}>
          7. अन्य महत्वपूर्ण अपडेट्स
        </h2>

        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '30px' }}>
          <li style={{ marginBottom: '10px' }}><strong>कर्मचारी चयन मंडल का गठन:</strong> CG Vyapam का विलय अब <strong>'छत्तीसगढ़ कर्मचारी चयन मंडल (CGSSB)'</strong> में कर दिया गया है, जिसकी पहली अस्थाई अध्यक्ष रेणू जी पिल्ले बनी हैं। <Link href="/jobs/cgssb-teacher-recruitment-2026" style={{ color: 'var(--color-primary)' }}>CGSSB की नई भर्तियों की जानकारी यहाँ देखें।</Link></li>
          <li style={{ marginBottom: '10px' }}><strong>रामगढ़ महोत्सव:</strong> सरगुजा में आषाढ़ मास के प्रथम दिवस को आयोजित। (इसी रामगिरी पहाड़ी पर कालिदास ने मेघदूत की रचना की थी)।</li>
          <li style={{ marginBottom: '10px' }}><strong>26वीं मध्य क्षेत्रीय परिषद बैठक:</strong> 19 मई 2026 को जगदलपुर (बस्तर) में आयोजित। केंद्रीय गृह मंत्री अमित शाह ने अध्यक्षता की।</li>
          <li style={{ marginBottom: '10px' }}><strong>एसआरएस रिपोर्ट 2024 (SRS):</strong> मातृ मृत्यु दर (MMR) छत्तीसगढ़ में 146 से घटकर <strong>124</strong> हो गई है। (राष्ट्रीय औसत 87 है)।</li>
        </ul>

      </div>

      <ArticleFooter />

    </article>
  );
}
