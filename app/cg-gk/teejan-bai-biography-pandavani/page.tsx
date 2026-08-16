import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import AuthorByline from '@/components/AuthorByline';
import ArticleFooter from '@/components/ArticleFooter';

export const metadata: Metadata = {
  title: 'डॉ. तीजन बाई जीवन परिचय: पंडवानी, पुरस्कार, उपलब्धियां और निधन',
  description: 'डॉ. तीजन बाई का जीवन परिचय पढ़ें। जानिए पंडवानी क्या है, कापालिक शैली, गुरु, Padma Shri, Padma Bhushan, Fukuoka Prize, Padma Vibhushan और उनके निधन से जुड़ी महत्वपूर्ण जानकारी।',
};

export default function TeejanBaiBiography() {
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
            Chhattisgarh Culture
          </span>
          <span style={{ 
            background: '#e2e8f0', 
            color: '#475569', 
            padding: '4px 12px', 
            borderRadius: '20px', 
            fontSize: '0.85rem',
            fontWeight: 'bold'
          }}>
            Biography
          </span>
        </div>
        <h1 style={{ fontSize: '2.5rem', lineHeight: '1.2', marginBottom: '20px', color: 'var(--text-main)' }}>
          डॉ. तीजन बाई: पंडवानी की विश्व प्रसिद्ध कलाकार, जीवन परिचय, पुरस्कार और उपलब्धियां
        </h1>
        <AuthorByline date="16 August 2026" />
      </header>

      <div className="content" style={{ lineHeight: '1.8', fontSize: '1.1rem', color: 'var(--text-main)' }}>
        
        <p>
          छत्तीसगढ़ की लोक संस्कृति की बात हो और डॉ. तीजन बाई का नाम न आए, ऐसा संभव नहीं है। उन्होंने पंडवानी जैसी लोक कला को सिर्फ छत्तीसगढ़ तक सीमित नहीं रखा, बल्कि देश और विदेश के मंचों तक पहुंचाया।
        </p>
        <p>
          महाभारत की कथाओं को अपनी दमदार आवाज, अभिनय और तंबूरे के साथ प्रस्तुत करने की उनकी शैली ने पंडवानी को एक अलग पहचान दी। खास बात यह रही कि जिस समय पंडवानी को मुख्य रूप से पुरुष कलाकारों की कला माना जाता था, उस समय तीजन बाई ने कापालिक शैली में मंच पर खड़े होकर प्रस्तुति दी और इस परंपरा को नई पहचान दिलाई।
        </p>
        <p>
          5 जुलाई 2026 को उनके निधन के बाद छत्तीसगढ़ ने अपनी लोक संस्कृति की एक बड़ी कलाकार को खो दिया। Fukuoka Prize की आधिकारिक वेबसाइट ने भी उनके निधन की पुष्टि करते हुए उन्हें Pandavani की प्रमुख contemporary exponent बताया है।
        </p>

        <h2 style={{ color: 'var(--color-primary)', fontSize: '1.8rem', marginTop: '40px', borderBottom: '2px solid var(--color-primary)', paddingBottom: '10px' }}>
          तीजन बाई कौन थीं?
        </h2>
        <p>
          डॉ. तीजन बाई छत्तीसगढ़ की प्रसिद्ध पंडवानी गायिका और कलाकार थीं। पंडवानी महाभारत की कथाओं को लोक गायन और अभिनय के माध्यम से प्रस्तुत करने वाली पारंपरिक कला है।
        </p>
        <p>
          Fukuoka Prize की आधिकारिक जानकारी के अनुसार तीजन बाई Pandavani की leading performing artist थीं और उन्होंने महाभारत की कथा को अपनी विशिष्ट प्रस्तुति के माध्यम से देश-विदेश में पहचान दिलाई।
        </p>
        <p>
          उनकी खासियत केवल गायन नहीं थी। प्रस्तुति के दौरान वे अलग-अलग पात्रों के भाव, संवाद और घटनाओं को अपनी आवाज तथा शारीरिक अभिनय के माध्यम से जीवंत कर देती थीं।
        </p>

        <h2 style={{ color: 'var(--color-primary)', fontSize: '1.8rem', marginTop: '40px', borderBottom: '2px solid var(--color-primary)', paddingBottom: '10px' }}>
          तीजन बाई का जन्म और प्रारंभिक जीवन
        </h2>
        <p>
          उपलब्ध स्रोतों के अनुसार तीजन बाई का जन्म दुर्ग जिले के भिलाई के पास गनियारी गांव (या कुछ स्रोतों के अनुसार पाटन के अटारी गांव में जन्म और गनियारी में पालन-पोषण) में हुआ था। उनके पिता का नाम चुनुकलाल और माता का नाम सुखवती था।
        </p>
        <div style={{ background: '#fffbeb', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #f59e0b', margin: '20px 0' }}>
          <strong>महत्वपूर्ण तथ्य-जांच (Fact-Check) नोट:</strong> तीजन बाई की जन्मतिथि को लेकर उपलब्ध स्रोतों में अंतर मिलता है। Fukuoka Prize की official biography में <strong>8 अगस्त 1956</strong> दर्ज है, जबकि कुछ भारतीय शैक्षणिक/जीवनी स्रोत <strong>24 अप्रैल 1956</strong> बताते हैं।
        </div>

        <h2 style={{ color: 'var(--color-primary)', fontSize: '1.8rem', marginTop: '40px', borderBottom: '2px solid var(--color-primary)', paddingBottom: '10px' }}>
          पंडवानी क्या है?
        </h2>
        <p>
          पंडवानी छत्तीसगढ़ की प्रसिद्ध लोक प्रदर्शन कला है, जिसमें महाभारत की कथाओं को गायन, संगीत और अभिनय के माध्यम से प्रस्तुत किया जाता है। 'पंडवानी' शब्द को सामान्य तौर पर पांडवों की वाणी/कथा से जोड़ा जाता है।
        </p>

        <h3 style={{ color: '#1e293b', fontSize: '1.4rem', marginTop: '20px' }}>पंडवानी की दो प्रमुख शैलियां</h3>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '20px' }}>
          <li><strong>वेदमती शैली:</strong> इस शैली में कलाकार सामान्यतः बैठकर पंडवानी की प्रस्तुति करता है। गायन और चेहरे के भावों के माध्यम से कथा को आगे बढ़ाया जाता है।</li>
          <li><strong>कापालिक शैली:</strong> कापालिक शैली में कलाकार खड़े होकर और अधिक गतिशील अभिनय के साथ कथा प्रस्तुत करता है।</li>
        </ul>
        <p>
          तीजन बाई की सबसे बड़ी पहचान इसी <strong>कापालिक शैली</strong> से बनी। उन्होंने 13 वर्ष की उम्र में सार्वजनिक प्रस्तुति दी और कापालिक शैली में प्रदर्शन करने वाली महिला कलाकार के रूप में एक महत्वपूर्ण बदलाव पैदा किया।
        </p>

        <h2 style={{ color: 'var(--color-primary)', fontSize: '1.8rem', marginTop: '40px', borderBottom: '2px solid var(--color-primary)', paddingBottom: '10px' }}>
          तीजन बाई के गुरु कौन थे?
        </h2>
        <p>
          तीजन बाई ने पंडवानी का प्रारंभिक ज्ञान अपने <strong>नाना बृजलाल</strong> से प्राप्त किया था। बाद में उन्होंने <strong>उमेद सिंह देशमुख</strong> से प्रशिक्षण लिया।
        </p>
        <div style={{ background: '#f8fafc', padding: '15px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
          <strong>परीक्षा के लिए याद रखें:</strong>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '10px' }}>
            <li><strong>प्रारंभिक गुरु:</strong> नाना बृजलाल</li>
            <li><strong>बाद में प्रशिक्षण:</strong> उमेद सिंह देशमुख</li>
          </ul>
        </div>

        <h2 style={{ color: 'var(--color-primary)', fontSize: '1.8rem', marginTop: '40px', borderBottom: '2px solid var(--color-primary)', paddingBottom: '10px' }}>
          तीजन बाई के प्रमुख पुरस्कार
        </h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '30px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
          <thead>
            <tr style={{ background: 'var(--color-primary)', color: 'white', textAlign: 'left' }}>
              <th style={{ padding: '12px', border: '1px solid #e2e8f0' }}>वर्ष</th>
              <th style={{ padding: '12px', border: '1px solid #e2e8f0' }}>सम्मान / पुरस्कार</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '12px', border: '1px solid #e2e8f0' }}>1988</td>
              <td style={{ padding: '12px', border: '1px solid #e2e8f0', fontWeight: 'bold' }}>Padma Shri</td>
            </tr>
            <tr style={{ background: '#f8fafc' }}>
              <td style={{ padding: '12px', border: '1px solid #e2e8f0' }}>1995</td>
              <td style={{ padding: '12px', border: '1px solid #e2e8f0', fontWeight: 'bold' }}>Sangeet Natak Akademi Award</td>
            </tr>
            <tr>
              <td style={{ padding: '12px', border: '1px solid #e2e8f0' }}>2003</td>
              <td style={{ padding: '12px', border: '1px solid #e2e8f0', fontWeight: 'bold' }}>Padma Bhushan</td>
            </tr>
            <tr style={{ background: '#f8fafc' }}>
              <td style={{ padding: '12px', border: '1px solid #e2e8f0' }}>2018</td>
              <td style={{ padding: '12px', border: '1px solid #e2e8f0', fontWeight: 'bold' }}>Fukuoka Prize – Arts and Culture Prize</td>
            </tr>
            <tr>
              <td style={{ padding: '12px', border: '1px solid #e2e8f0' }}>2019</td>
              <td style={{ padding: '12px', border: '1px solid #e2e8f0', fontWeight: 'bold' }}>Padma Vibhushan</td>
            </tr>
          </tbody>
        </table>

        <h2 style={{ color: 'var(--color-primary)', fontSize: '1.8rem', marginTop: '40px', borderBottom: '2px solid var(--color-primary)', paddingBottom: '10px' }}>
          निष्कर्ष और निधन
        </h2>
        <p>
          <strong>5 जुलाई 2026</strong> को डॉ. तीजन बाई का निधन हो गया। उनके निधन के साथ छत्तीसगढ़ की लोक कला के एक बड़े युग का अंत माना गया।
        </p>
        <p>
          डॉ. तीजन बाई का जीवन इस बात का उदाहरण है कि लोक कला केवल गांव या किसी एक क्षेत्र तक सीमित नहीं होती। उन्होंने महाभारत की कथाओं को छत्तीसगढ़ी लोक परंपरा, संगीत और अभिनय के साथ जिस तरह प्रस्तुत किया, उसने पंडवानी को अंतरराष्ट्रीय पहचान दिलाई। सामाजिक चुनौतियों के बावजूद उन्होंने अपनी कला नहीं छोड़ी और आने वाली पीढ़ियों के लिए एक मजबूत रास्ता बनाया।
        </p>

      </div>

      <ArticleFooter 
        date="16 August 2026" 
        sourceText="Verified Official Biographies (Fukuoka Prize), Padma Awards Dashboard, PIB"
      />

    </article>
  );
}
