import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import AuthorByline from '@/components/AuthorByline';
import ArticleFooter from '@/components/ArticleFooter';

export const metadata: Metadata = {
  title: 'Chhattisgarh Current Affairs July 2026 | CGSSB Portal',
  description: 'Complete CG Current Affairs for July 2026. Important for CGPSC, CGSSB, Vyapam, and other Chhattisgarh state exams. Covers awards, sports, and state news.',
};

export default function CGCurrentAffairsJuly2026() {
  return (
    <div className="container" style={{ paddingTop: '40px', paddingBottom: '60px' }}>
      {/* Breadcrumb */}
      <div style={{ marginBottom: '20px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
        <a href="/">Home</a> &raquo; <a href="/current-affairs">Current Affairs</a> &raquo; <span style={{ color: 'var(--text-main)' }}>CG Current Affairs July 2026</span>
      </div>

      <article className="card" style={{ padding: '40px', margin: '0 auto' }}>
        {/* Header */}
        <header style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '20px', marginBottom: '30px' }}>
          <span style={{ 
            background: 'var(--card-bg)', color: 'var(--color-primary)', 
            padding: '4px 12px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 'bold'
          }}>
            CG Current Affairs
          </span>
          <h1 style={{ fontSize: '2.2rem', marginTop: '15px', marginBottom: '15px' }}>छत्तीसगढ़ करेंट अफेयर्स - जुलाई 2026 (CG Current Affairs)</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.6' }}>
            CGPSC, CGSSB (Vyapam), और छत्तीसगढ़ की अन्य सभी प्रतियोगी परीक्षाओं के लिए जुलाई 2026 के सबसे महत्वपूर्ण करंट अफेयर्स का संकलन।
          </p>
        </header>

        <div style={{ paddingTop: '10px', paddingBottom: '20px' }}>
          <AuthorByline date="16 August 2026" />
        </div>

        <div style={{ position: 'relative', width: '100%', height: 'auto', marginBottom: '40px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
          <Image 
            src={`${process.env.NEXT_PUBLIC_R2_URL}/images/cg-current-affairs-july-2026.webp`} 
            alt="छत्तीसगढ़ करेंट अफेयर्स जुलाई 2026 - महत्वपूर्ण घटनाएं" 
            width={900} 
            height={500} 
            style={{ width: '100%', height: 'auto' }}
            priority
          />
          <div style={{ position: 'absolute', bottom: '10px', right: '10px', background: 'rgba(0,0,0,0.65)', color: 'white', padding: '5px 10px', borderRadius: '4px', fontSize: '0.8rem', zIndex: 10 }}>
            This image is AI generated
          </div>
        </div>

        <div className="job-content" style={{ lineHeight: '1.8', fontSize: '1.05rem', color: 'var(--text-main)' }}>
          
          <h2 style={{ color: 'var(--color-primary)', marginTop: '30px', marginBottom: '15px' }}>1. खेल जगत (Sports)</h2>
          
          <h3 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>ज्ञानेश्वरी यादव (Gyaneshwari Yadav)</h3>
          <p>राजनांदगांव जिले की निवासी और छत्तीसगढ़ पुलिस में ASI के पद पर कार्यरत ज्ञानेश्वरी यादव ने <strong>राष्ट्रमंडल खेल (Commonwealth Games 2026)</strong> में <strong>रजत पदक (Silver Medal)</strong> जीतकर इतिहास रच दिया है।</p>
          <ul className="premium-list">
            <li><strong>आयोजन स्थल:</strong> ग्लास्गो, स्कॉटलैंड (23 जुलाई - 2 अगस्त 2026)</li>
            <li><strong>खेल:</strong> वेटलिफ्टिंग (Weightlifting)</li>
            <li><strong>कैटेगरी:</strong> 53 kg</li>
            <li><strong>कुल वजन:</strong> 199 किलोग्राम (88 kg स्नैच + 111 kg क्लीन एंड जर्क)</li>
          </ul>

          <h3 style={{ fontSize: '1.3rem', marginTop: '20px', marginBottom: '10px' }}>अनिमेश कुजुर (Animesh Kujur)</h3>
          <p>जशपुर जिले के निवासी और भारतीय धावक अनिमेश कुजुर ने <strong>World Athletic Continental Tour</strong> (जर्मनी) में <strong>रजत पदक</strong> हासिल किया है।</p>
          <ul className="premium-list">
            <li><strong>खेल:</strong> 100 मीटर दौड़ (100m Sprint)</li>
            <li><strong>समय:</strong> 10.14 सेकंड (यह विदेशी धरती पर किसी भारतीय द्वारा 100 मीटर में अब तक का सबसे तेज समय है।)</li>
          </ul>

          <h3 style={{ fontSize: '1.3rem', marginTop: '20px', marginBottom: '10px' }}>जयदीप साहू (Jaideep Sahu)</h3>
          <p>भिलाई के पैरा पावरलिफ्टर जयदीप साहू ने <strong>एशियन पैसिफिक एवं अफ्रीका पावरलिफ्टिंग चैंपियनशिप 2026</strong> में <strong>स्वर्ण पदक</strong> जीता। इन्होंने 66 kg सीनियर वर्ग में कुल 452.5 kg वजन उठाया।</p>

          <h3 style={{ fontSize: '1.3rem', marginTop: '20px', marginBottom: '10px' }}>टोमन कुमार (Toman Kumar)</h3>
          <p>बालोद के निवासी टोमन कुमार ने <strong>विश्व पैरा तीरंदाजी श्रृंखला 2026</strong> (चेक गणराज्य) में मिश्रित श्रेणी में <strong>कांस्य पदक</strong> जीता। (भारत 150 - फ्रांस 148)</p>

          <h3 style={{ fontSize: '1.3rem', marginTop: '20px', marginBottom: '10px' }}>AIFF अंडर-17 महिला यूथ लीग 2026</h3>
          <p>यह देश की पहली अंडर-17 महिला क्लब राष्ट्रीय लीग थी जिसका आयोजन <strong>नारायणपुर (छत्तीसगढ़)</strong> के रामकृष्ण मिशन फुटबॉल अकादमी में हुआ। विजेता HOPS FC (नई दिल्ली) रही।</p>

          <hr style={{ margin: '40px 0', borderColor: 'var(--border-color)' }} />

          <h2 style={{ color: 'var(--color-primary)', marginTop: '30px', marginBottom: '15px' }}>2. पुरस्कार एवं सम्मान (Awards & Honors)</h2>
          
          <h3 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>रामनामी डॉक्यूमेंट्री फिल्म</h3>
          <p><strong>72वें राष्ट्रीय फिल्म पुरस्कार 2026</strong> में रामनामी समुदाय पर बनी डॉक्यूमेंट्री फिल्म को <strong>सर्वश्रेष्ठ डॉक्यूमेंट्री (रजत कमल)</strong> का पुरस्कार मिला। इसके निर्देशक भरतबाला गणपति हैं। (रामनामी समुदाय मुख्य रूप से जांजगीर-चांपा क्षेत्र में निवास करता है)।</p>

          <h3 style={{ fontSize: '1.3rem', marginTop: '20px', marginBottom: '10px' }}>मेजर जनरल सुधीर कुमार शर्मा</h3>
          <p>दुर्ग जिले के पाटन (ग्राम रानी तराई) के निवासी मेजर जनरल सुधीर कुमार शर्मा को राष्ट्रपति द्रौपदी मुर्मू द्वारा भारतीय सेना में उत्कृष्ट कार्य के लिए <strong>अति विशिष्ट सेवा मेडल</strong> से सम्मानित किया गया।</p>

          <h3 style={{ fontSize: '1.3rem', marginTop: '20px', marginBottom: '10px' }}>छत्तीसगढ़ विधानसभा पुरस्कार 2026</h3>
          <ul className="premium-list">
            <li><strong>उत्कृष्ट विधायक (सत्ता पक्ष):</strong> धर्मलाल कौशिक</li>
            <li><strong>उत्कृष्ट विधायक (विपक्ष):</strong> रघुवेंद्र कुमार सिंह</li>
          </ul>

          <hr style={{ margin: '40px 0', borderColor: 'var(--border-color)' }} />

          <h2 style={{ color: 'var(--color-primary)', marginTop: '30px', marginBottom: '15px' }}>3. महत्वपूर्ण नियुक्तियां एवं प्रशासन (Administration)</h2>
          
          <p>हाल ही में छत्तीसगढ़ के प्रमुख निगम, बोर्ड एवं आयोग में अध्यक्षों की नियुक्ति की गई है:</p>
          <div className="premium-table-wrapper" style={{ overflowX: 'auto', marginBottom: '20px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--color-secondary)' }}>
                  <th style={{ padding: '12px', border: '1px solid var(--border-color)' }}>आयोग / बोर्ड</th>
                  <th style={{ padding: '12px', border: '1px solid var(--border-color)' }}>अध्यक्ष</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: '12px', border: '1px solid var(--border-color)' }}>छत्तीसगढ़ राज्य महिला आयोग</td>
                  <td style={{ padding: '12px', border: '1px solid var(--border-color)' }}>डॉ. श्रीमती ममता साहू</td>
                </tr>
                <tr>
                  <td style={{ padding: '12px', border: '1px solid var(--border-color)' }}>छत्तीसगढ़ राज्य अनुसूचित जाति आयोग</td>
                  <td style={{ padding: '12px', border: '1px solid var(--border-color)' }}>श्री रामलाल चौहान</td>
                </tr>
                <tr>
                  <td style={{ padding: '12px', border: '1px solid var(--border-color)' }}>छत्तीसगढ़ मत्स्य कल्याण बोर्ड</td>
                  <td style={{ padding: '12px', border: '1px solid var(--border-color)' }}>श्री आनंद निषाद</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 style={{ fontSize: '1.3rem', marginTop: '20px', marginBottom: '10px' }}>VBG राम जी (मनरेगा की नई दरें)</h3>
          <p>छत्तीसगढ़ में मनरेगा के स्थान पर अब <strong>VBG राम जी (Viksit Bharat Guarantee)</strong> लागू किया गया है। 1 जुलाई 2026 से मजदूरों की नई दर <strong>₹300 प्रतिदिन</strong> कर दी गई है (पहले यह ₹261 थी, ₹39 की वृद्धि की गई है)।</p>

          <h3 style={{ fontSize: '1.3rem', marginTop: '20px', marginBottom: '10px' }}>ईज ऑफ डूइंग बिजनेस (Ease of Doing Business) 2026</h3>
          <p>छत्तीसगढ़ <strong>जोखिम आधारित (Risk-based)</strong> और <strong>विश्वास आधारित (Trust-based)</strong> बिज़नेस अनुमति प्रणाली लागू करने वाला देश का <strong>पहला राज्य</strong> बन गया है।</p>

          <hr style={{ margin: '40px 0', borderColor: 'var(--border-color)' }} />

          <h2 style={{ color: 'var(--color-primary)', marginTop: '30px', marginBottom: '15px' }}>4. छत्तीसगढ़ का भूगोल एवं पर्यावरण (Geography & Environment)</h2>
          
          <h3 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>राजीम सीताबाड़ी (पुरातात्विक स्थल)</h3>
          <p>गरियाबंद जिले के राजीम स्थित <strong>सीताबाड़ी</strong> में 2800 साल पुरानी सभ्यता के प्रमाण मिले हैं। यहाँ पहली शताब्दी ईसा पूर्व से लेकर 14वीं शताब्दी ईस्वी तक मानव बसाहट और मौर्य-सातवाहन काल के उन्नत सभ्यता के साक्ष्य प्राप्त हुए हैं।</p>
          <div className="premium-alert" style={{ background: 'var(--card-bg-hover)', borderLeft: '4px solid var(--color-primary)', padding: '15px', marginTop: '10px' }}>
            <strong>Note:</strong> राजीम को हाल ही में नगर पंचायत से अपग्रेड करके <strong>नगर पालिका</strong> का दर्जा दे दिया गया है।
          </div>

          <h3 style={{ fontSize: '1.3rem', marginTop: '20px', marginBottom: '10px' }}>मत्स्य पालन में राष्ट्रीय उपलब्धि</h3>
          <ul className="premium-list">
            <li>मत्स्य उत्पादन (Fish Production) में छत्तीसगढ़ देश में <strong>छठवें (6th)</strong> स्थान पर है।</li>
            <li>मत्स्य बीज उत्पादन (Fish Seed Production) में छत्तीसगढ़ <strong>चौथे (4th)</strong> स्थान पर है।</li>
          </ul>

          <h3 style={{ fontSize: '1.3rem', marginTop: '20px', marginBottom: '10px' }}>गरियाबंद में मकड़ियों की दुर्लभ प्रजाति</h3>
          <p>गरियाबंद के जंगलों में मकड़ियों की तीन दुर्लभ प्रजातियाँ खोजी गई हैं:</p>
          <ol>
            <li>जिया सुबरमाटा (Zia Subarmata)</li>
            <li>हमाता लीवा पेंटागोना (Hamata Leva Pentagona)</li>
            <li>ग्रिट्स सिगुलेटस (Grits Siguletus) - इसका भारत में पहली बार रिकॉर्ड दर्ज हुआ है।</li>
          </ol>

          <h3 style={{ fontSize: '1.3rem', marginTop: '20px', marginBottom: '10px' }}>गंगाराम मगरमच्छ (NCERT में शामिल)</h3>
          <p>बेमेतरा के बाबा मोहतरा गांव का प्रसिद्ध "गंगाराम" मगरमच्छ (जिसकी मृत्यु 2019 में 130 वर्ष की आयु में हुई थी) को <strong>NCERT</strong> की 10वीं कक्षा के सिलेबस में 'My India A Bond Between Human and Animals' चैप्टर में शामिल किया गया है।</p>

          <h3 style={{ fontSize: '1.3rem', marginTop: '20px', marginBottom: '10px' }}>चर्चित जलप्रपात (Waterfalls in News)</h3>
          <ul className="premium-list">
            <li><strong>अर्पाकोंडानार जलप्रपात:</strong> नारायणपुर</li>
            <li><strong>जीव झरन जलप्रपात:</strong> नारायणपुर</li>
            <li><strong>शेष पगार और देवधारा जलप्रपात:</strong> गरियाबंद (उदंती सीता टाइगर रिजर्व)</li>
            <li><strong>किंग्स वाटरफॉल:</strong> मैनपाट (सरगुजा)</li>
          </ul>

          <hr style={{ margin: '40px 0', borderColor: 'var(--border-color)' }} />

          <h2 style={{ color: 'var(--color-primary)', marginTop: '30px', marginBottom: '15px' }}>5. विविध एवं अन्य जानकारी (Miscellaneous)</h2>
          
          <h3 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>डॉ. तीजन बाई का निधन</h3>
          <p>छत्तीसगढ़ में पंडवानी गायन की <strong>कापालिक शैली</strong> की प्रथम महिला कलाकार डॉ. तीजन बाई का 5 जुलाई 2026 को निधन हो गया। इनका जन्म भिलाई (दुर्ग) के गनियारी गाँव में हुआ था।</p>
          <p>उन्हें प्राप्त प्रमुख पद्म पुरस्कार:</p>
          <ul className="premium-list">
            <li>पद्म श्री (1988)</li>
            <li>पद्म भूषण (2003)</li>
            <li>पद्म विभूषण (2019)</li>
          </ul>
          <p>छत्तीसगढ़ सरकार ने राज्य स्थापना दिवस (1 नवंबर) पर पंडवानी के क्षेत्र में उत्कृष्ट कार्य करने वाले कलाकारों को <strong>तीजन बाई राज्य अलंकरण पुरस्कार</strong> देने की घोषणा की है।</p>

          <h3 style={{ fontSize: '1.3rem', marginTop: '20px', marginBottom: '10px' }}>छत्तीसगढ़ का पहला ओपन जेल (Open Jail)</h3>
          <p>छत्तीसगढ़ का पहला ओपन जेल <strong>पथर्रा गांव (बेमेतरा)</strong> में बनाया जा रहा है। इसकी क्षमता 200 कैदियों की होगी, जहाँ अच्छे आचरण वाले कैदी अपने परिवार के साथ रह सकेंगे और खेती या पशुपालन कर सकेंगे।</p>

          <h3 style={{ fontSize: '1.3rem', marginTop: '20px', marginBottom: '10px' }}>PGI-D रिपोर्ट 2025-26 (स्कूली शिक्षा)</h3>
          <p>केंद्रीय शिक्षा मंत्रालय द्वारा जारी परफॉर्मेंस ग्रेडिंग इंडेक्स में छत्तीसगढ़ में ओवरऑल <strong>रायगढ़</strong> जिला प्रथम स्थान पर रहा। वहीं डिजिटल लर्निंग में <strong>रायपुर</strong> प्रथम और बुनियादी ढांचा श्रेणी में <strong>दंतेवाड़ा</strong> सर्वश्रेष्ठ रहा।</p>

          <h3 style={{ fontSize: '1.3rem', marginTop: '20px', marginBottom: '10px' }}>गोंचा पर्व और तुपकी चालन</h3>
          <p>बस्तर में भगवान जगन्नाथ की रथ यात्रा को <strong>गोंचा पर्व</strong> के रूप में मनाया जाता है, जिसका मुख्य आकर्षण <strong>तुपकी चालन</strong> होता है। श्रद्धालु बांस से बनी तुपकी (पारंपरिक बंदूक) से पेंग नामक वन फल की गोली चलाकर भगवान को गॉड ऑफ ऑनर देते हैं।</p>

        </div>

        <div style={{ marginTop: '40px' }}>
          <ArticleFooter 
            date="16 August 2026" 
            sourceText="CG Current Affairs Compilation"
            sourceLink="/current-affairs"
          />
        </div>

      </article>
    </div>
  );
}
