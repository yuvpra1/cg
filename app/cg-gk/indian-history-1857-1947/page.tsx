import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import AuthorByline from '@/components/AuthorByline';
import ArticleFooter from '@/components/ArticleFooter';
import MCQSection from '@/components/MCQSection';

export const metadata: Metadata = {
  title: 'भारतीय स्वतंत्रता का इतिहास (1857–1947): प्रमुख घटनाएं और MCQs',
  description: '1857 के विद्रोह से लेकर 1947 की स्वतंत्रता तक भारतीय राष्ट्रीय आंदोलन का पूरा इतिहास। प्रमुख आंदोलन, नेता, महत्वपूर्ण तिथियां और प्रतियोगी परीक्षाओं के लिए MCQs।',
  keywords: 'Indian Independence History in Hindi, 1857 to 1947 Indian History, Modern Indian History Notes, CG Vyapam History, CGPSC History Notes, Indian National Movement'
};

const mcqData = [
  {
    question: '1. 1857 के विद्रोह को "प्रथम स्वतंत्रता संग्राम" कहने वाले प्रमुख इतिहासकार कौन थे?',
    options: ['आर. सी. मजूमदार', 'वी. डी. सावरकर', 'दादाभाई नौरोजी', 'गोपाल कृष्ण गोखले'],
    correctAnswer: 1,
    explanation: 'वी. डी. सावरकर ने 1857 के विद्रोह को "प्रथम स्वतंत्रता संग्राम" के रूप में प्रस्तुत किया था।'
  },
  {
    question: '2. 1857 के विद्रोह का तत्कालीन प्रमुख कारण क्या था?',
    options: ['बंगाल विभाजन', 'रॉलेट एक्ट', 'एनफील्ड राइफल के कारतूस', 'साइमन कमीशन'],
    correctAnswer: 2,
    explanation: 'एनफील्ड राइफल के कारतूसों में गाय और सूअर की चर्बी के इस्तेमाल की बात सामने आने से भारतीय सैनिकों में धार्मिक आक्रोश बढ़ गया।'
  },
  {
    question: '3. मंगल पांडे ने अंग्रेज अधिकारियों के विरुद्ध विद्रोह किस स्थान पर किया था?',
    options: ['मेरठ', 'दिल्ली', 'बैरकपुर', 'कानपुर'],
    correctAnswer: 2
  },
  {
    question: '4. 1857 का व्यापक विद्रोह किस स्थान से शुरू हुआ?',
    options: ['लखनऊ', 'मेरठ', 'झांसी', 'कानपुर'],
    correctAnswer: 1,
    explanation: '10 मई 1857 को मेरठ से विद्रोह ने व्यापक रूप लिया।'
  },
  {
    question: '5. 1858 के भारत शासन अधिनियम का प्रमुख परिणाम क्या था?',
    options: ['भारतीय राष्ट्रीय कांग्रेस की स्थापना', 'ईस्ट इंडिया कंपनी का शासन समाप्त होना', 'बंगाल का विभाजन', 'भारत को पूर्ण स्वतंत्रता मिलना'],
    correctAnswer: 1
  },
  {
    question: '6. 1858 के बाद भारत का पहला वायसराय कौन बना?',
    options: ['लॉर्ड कर्जन', 'लॉर्ड डलहौजी', 'लॉर्ड कैनिंग', 'लॉर्ड रिपन'],
    correctAnswer: 2
  },
  {
    question: '7. भारतीय राष्ट्रीय कांग्रेस की स्थापना किस वर्ष हुई?',
    options: ['1875', '1885', '1895', '1905'],
    correctAnswer: 1
  },
  {
    question: '8. भारतीय राष्ट्रीय कांग्रेस के प्रथम अध्यक्ष कौन थे?',
    options: ['दादाभाई नौरोजी', 'गोपाल कृष्ण गोखले', 'व्योमेश चंद्र बनर्जी', 'सुरेंद्रनाथ बनर्जी'],
    correctAnswer: 2
  },
  {
    question: '9. भारतीय राष्ट्रीय कांग्रेस की स्थापना में A. O. Hume की क्या भूमिका थी?',
    options: ['वे प्रथम भारतीय अध्यक्ष थे', 'वे कांग्रेस के प्रमुख संस्थापकों में से एक थे', 'उन्होंने असहयोग आंदोलन शुरू किया', 'उन्होंने स्वराज पार्टी बनाई'],
    correctAnswer: 1
  },
  {
    question: '10. कांग्रेस के उदारवादी चरण की कार्यप्रणाली किस सिद्धांत पर आधारित थी?',
    options: ['करो या मरो', 'स्वदेशी और बहिष्कार', 'Petition, Prayer and Protest', 'पूर्ण स्वराज्य'],
    correctAnswer: 2
  },
  {
    question: '11. बंगाल विभाजन किस वर्ष किया गया था?',
    options: ['1903', '1905', '1907', '1911'],
    correctAnswer: 1
  },
  {
    question: '12. बंगाल विभाजन के विरोध में कौन-सा आंदोलन तेजी से आगे बढ़ा?',
    options: ['भारत छोड़ो आंदोलन', 'स्वदेशी आंदोलन', 'व्यक्तिगत सत्याग्रह', 'खिलाफत आंदोलन'],
    correctAnswer: 1
  },
  {
    question: '13. मुस्लिम लीग की स्थापना किस वर्ष हुई?',
    options: ['1885', '1905', '1906', '1907'],
    correctAnswer: 2
  },
  {
    question: '14. महात्मा गांधी दक्षिण अफ्रीका से भारत कब लौटे?',
    options: ['1905', '1911', '1915', '1919'],
    correctAnswer: 2
  },
  {
    question: '15. भारत में गांधीजी का पहला प्रमुख सत्याग्रह कौन-सा था?',
    options: ['खेड़ा सत्याग्रह', 'चंपारण सत्याग्रह', 'अहमदाबाद आंदोलन', 'बारडोली सत्याग्रह'],
    correctAnswer: 1
  },
  {
    question: '16. चंपारण सत्याग्रह किस वर्ष हुआ था?',
    options: ['1915', '1917', '1918', '1920'],
    correctAnswer: 1
  },
  {
    question: '17. जलियांवाला बाग हत्याकांड कब हुआ?',
    options: ['6 अप्रैल 1919', '13 अप्रैल 1919', '15 अगस्त 1919', '26 जनवरी 1920'],
    correctAnswer: 1
  },
  {
    question: '18. जलियांवाला बाग में गोली चलाने का आदेश किसने दिया था?',
    options: ['लॉर्ड कर्जन', "माइकल ओ'ड्वायर", 'जनरल रेजिनाल्ड डायर', 'लॉर्ड इरविन'],
    correctAnswer: 2,
    explanation: 'Dyer → गोली चलाने का आदेश। O\'Dwyer → पंजाब का तत्कालीन Lieutenant Governor'
  },
  {
    question: '19. असहयोग आंदोलन को गांधीजी ने किस घटना के बाद वापस लिया?',
    options: ['जलियांवाला बाग', 'चौरी-चौरा', 'काकोरी कांड', 'दांडी मार्च'],
    correctAnswer: 1
  },
  {
    question: '20. स्वराज पार्टी की स्थापना किस वर्ष हुई?',
    options: ['1920', '1922', '1923', '1925'],
    correctAnswer: 2,
    explanation: 'स्वराज पार्टी की स्थापना चित्तरंजन दास और मोतीलाल नेहरू जैसे नेताओं ने की थी।'
  },
  {
    question: '21. काकोरी कांड किस वर्ष हुआ था?',
    options: ['1922', '1923', '1925', '1928'],
    correctAnswer: 2
  },
  {
    question: '22. साइमन कमीशन भारत कब आया?',
    options: ['1925', '1927', '1928', '1930'],
    correctAnswer: 2
  },
  {
    question: '23. 1929 के लाहौर अधिवेशन में कांग्रेस ने किस लक्ष्य को अपनाया?',
    options: ['Dominion Status', 'पृथक निर्वाचन', 'पूर्ण स्वराज्य', 'प्रांतीय स्वायत्तता'],
    correctAnswer: 2
  },
  {
    question: '24. दांडी मार्च कब शुरू हुआ?',
    options: ['12 मार्च 1929', '12 मार्च 1930', '6 अप्रैल 1930', '5 मार्च 1931'],
    correctAnswer: 1
  },
  {
    question: '25. गांधीजी ने नमक कानून कब तोड़ा?',
    options: ['12 मार्च 1930', '26 मार्च 1930', '6 अप्रैल 1930', '5 मार्च 1931'],
    correctAnswer: 2,
    explanation: 'दांडी मार्च 12 मार्च 1930 को शुरू हुआ और 6 अप्रैल को दांडी पहुंचकर गांधीजी ने नमक कानून तोड़ा।'
  },
  {
    question: '26. गांधी-इरविन समझौता कब हुआ?',
    options: ['5 मार्च 1931', '6 अप्रैल 1930', '24 सितंबर 1932', '8 अगस्त 1942'],
    correctAnswer: 0
  },
  {
    question: '27. पूना समझौता किनके बीच हुआ था?',
    options: ['गांधीजी और जिन्ना', 'गांधीजी और डॉ. बी. आर. अंबेडकर', 'नेहरू और पटेल', 'सुभाष चंद्र बोस और गांधीजी'],
    correctAnswer: 1
  },
  {
    question: '28. भारत सरकार अधिनियम 1935 की प्रमुख विशेषताओं में से एक क्या थी?',
    options: ['पूर्ण स्वतंत्रता', 'प्रांतीय स्वायत्तता', 'भारत का विभाजन', 'कांग्रेस की स्थापना'],
    correctAnswer: 1
  },
  {
    question: '29. भारत छोड़ो आंदोलन कब शुरू हुआ?',
    options: ['26 जनवरी 1930', '8 अगस्त 1942', '9 अगस्त 1942', '15 अगस्त 1942'],
    correctAnswer: 1
  },
  {
    question: '30. भारत छोड़ो आंदोलन का प्रसिद्ध नारा क्या था?',
    options: ['जय हिंद', 'दिल्ली चलो', 'करो या मरो', 'वंदे मातरम्'],
    correctAnswer: 2
  },
  {
    question: '31. सुभाष चंद्र बोस ने आजाद हिंद की अस्थायी सरकार कब स्थापित की?',
    options: ['1940', '1941', '1942', '1943'],
    correctAnswer: 3
  },
  {
    question: '32. आजाद हिंद फौज में महिलाओं की रेजिमेंट का नाम क्या था?',
    options: ['भारत माता रेजिमेंट', 'रानी झांसी रेजिमेंट', 'दुर्गा रेजिमेंट', 'वीरांगना रेजिमेंट'],
    correctAnswer: 1
  },
  {
    question: '33. कैबिनेट मिशन भारत किस वर्ष आया?',
    options: ['1942', '1945', '1946', '1947'],
    correctAnswer: 2
  },
  {
    question: '34. भारत की स्वतंत्रता की घोषणा के बाद स्वतंत्र भारत का जन्म कब हुआ?',
    options: ['26 जनवरी 1950', '15 अगस्त 1947', '14 अगस्त 1947', '3 जून 1947'],
    correctAnswer: 1
  },
  {
    question: '35. छत्तीसगढ़ के प्रथम शहीद के रूप में किसे जाना जाता है?',
    options: ['पंडित सुंदरलाल शर्मा', 'वीर नारायण सिंह', 'ठाकुर प्यारेलाल सिंह', 'रविशंकर शुक्ल'],
    correctAnswer: 1
  },
  {
    question: '36. वीर नारायण सिंह को कब फांसी दी गई थी?',
    options: ['10 मई 1857', '8 अप्रैल 1857', '10 दिसंबर 1857', '15 अगस्त 1857'],
    correctAnswer: 2
  },
  {
    question: '37. कंडेल नहर सत्याग्रह का नेतृत्व किसने किया था?',
    options: ['रविशंकर शुक्ल', 'पंडित सुंदरलाल शर्मा', 'वीर नारायण सिंह', 'ठाकुर प्यारेलाल सिंह'],
    correctAnswer: 1
  },
  {
    question: '38. गांधीजी का छत्तीसगढ़ में पहला आगमन किस आंदोलन के समय हुआ था?',
    options: ['भारत छोड़ो आंदोलन', 'असहयोग आंदोलन', 'कंडेल नहर सत्याग्रह', 'सविनय अवज्ञा आंदोलन'],
    correctAnswer: 2
  },
  {
    question: '39. निम्नलिखित घटनाओं का सही कालक्रम कौन-सा है?\n1. भारतीय राष्ट्रीय कांग्रेस की स्थापना\n2. बंगाल विभाजन\n3. चंपारण सत्याग्रह\n4. दांडी मार्च',
    options: ['1 → 2 → 3 → 4', '2 → 1 → 3 → 4', '1 → 3 → 2 → 4', '3 → 1 → 2 → 4'],
    correctAnswer: 0,
    explanation: 'क्रम: 1885 → 1905 → 1917 → 1930'
  },
  {
    question: '40. निम्न में से कौन-सा युग्म सही है?',
    options: ['चंपारण — 1919', 'खेड़ा — 1918', 'दांडी मार्च — 1925', 'भारत छोड़ो आंदोलन — 1935'],
    correctAnswer: 1
  }
];

export default function IndianHistory1857To1947() {
  return (
    <div className="container" style={{ paddingTop: '40px', paddingBottom: '60px' }}>
      <article className="card" style={{ margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.2rem', marginBottom: '20px', color: 'var(--color-primary)' }}>
          भारतीय स्वतंत्रता का इतिहास (1857–1947): प्रमुख घटनाएं, आंदोलन, नेता और महत्वपूर्ण तथ्य
        </h1>
        
        <AuthorByline date="22 August 2026" />

        <div style={{ position: 'relative', margin: '30px 0', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border-color)', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
          <Image 
            src="/images/indian-history-1857-1947.webp" 
            alt="भारतीय स्वतंत्रता का इतिहास (1857–1947) - History of Indian Independence"
            width={800} 
            height={450} 
            layout="responsive"
            priority
          />
        </div>

        <div className="article-content" style={{ lineHeight: '1.8', fontSize: '1.05rem', color: 'var(--text-main)' }}>
          <p>
            <strong>भारतीय स्वतंत्रता का इतिहास</strong> प्रतियोगी परीक्षाओं के लिए एक महत्वपूर्ण topic है। 1857 के विद्रोह से लेकर 1947 में भारत की स्वतंत्रता तक लगभग 90 वर्षों के दौरान देश में कई बड़े राजनीतिक, सामाजिक और राष्ट्रीय आंदोलन हुए।
          </p>
          <p>
            इस पूरे दौर को समझने के लिए केवल घटनाओं और तारीखों को याद करना पर्याप्त नहीं है। <strong>किस आंदोलन की शुरुआत क्यों हुई, उसके प्रमुख नेता कौन थे, उसका क्या प्रभाव पड़ा और उसके बाद कौन-सी घटना हुई</strong>, इन सभी चीजों को क्रम से समझना जरूरी है।
          </p>
          <p>
            इस लेख में <strong>1857 के विद्रोह, भारतीय राष्ट्रीय कांग्रेस की स्थापना, बंगाल विभाजन, गांधीजी के प्रारंभिक सत्याग्रह, असहयोग आंदोलन, सविनय अवज्ञा आंदोलन, भारत छोड़ो आंदोलन, आजाद हिंद फौज और स्वतंत्रता से पहले की प्रमुख घटनाओं</strong> को आसान भाषा में समझाया गया है।
          </p>

          <hr style={{ margin: '40px 0', borderColor: 'var(--border-color)', borderStyle: 'dashed' }} />

          <h2 className="article-section-title" style={{ marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem', color: 'var(--color-primary)' }}>
            1857 का महान विद्रोह
          </h2>
          <p>
            1857 का विद्रोह भारतीय इतिहास की सबसे महत्वपूर्ण घटनाओं में से एक था। इसे भारतीय स्वतंत्रता आंदोलन का एक बड़ा turning point माना जाता है। इसके स्वरूप को लेकर इतिहासकारों के अलग-अलग मत रहे हैं। वी. डी. सावरकर ने इसे <strong>“प्रथम स्वतंत्रता संग्राम”</strong> कहा, जबकि कुछ ब्रिटिश इतिहासकारों ने इसे मुख्यतः <strong>सिपाही विद्रोह</strong> के रूप में देखा।
          </p>

          <h3 style={{ marginTop: '30px', fontSize: '1.4rem' }}>1857 के विद्रोह के प्रमुख कारण</h3>
          <p>1857 का विद्रोह अचानक नहीं हुआ था। इसके पीछे कई राजनीतिक, आर्थिक, सामाजिक-धार्मिक और सैन्य कारण थे।</p>
          
          <ul style={{ margin: '15px 0 15px 30px' }}>
            <li><strong>राजनीतिक कारण:</strong> लॉर्ड डलहौजी की <strong>Doctrine of Lapse यानी हड़प नीति</strong> के कारण कई भारतीय रियासतों को अंग्रेजी शासन में मिला लिया गया (झांसी, सतारा, नागपुर)। 1856 में अवध का विलय भी असंतोष का बड़ा कारण बना।</li>
            <li><strong>आर्थिक कारण:</strong> भारी भू-राजस्व और ब्रिटेन से आने वाले सस्ते manufactured goods के कारण भारतीय हस्तशिल्प और कुटीर उद्योग कमजोर होते गए। दादाभाई नौरोजी के <strong>Drain of Wealth Theory</strong> का उल्लेख भी महत्वपूर्ण है।</li>
            <li><strong>सामाजिक और धार्मिक कारण:</strong> 1856 का हिंदू विधवा पुनर्विवाह अधिनियम और अन्य सामाजिक सुधारों से रूढ़िवादी वर्ग में आशंका पैदा हुई।</li>
            <li><strong>सैन्य कारण:</strong> वेतन और पदोन्नति में भेदभाव। 1856 के General Service Enlistment Act से समुद्र पार सैन्य सेवा से जुड़ी धार्मिक चिंताएं।</li>
            <li><strong>तत्कालीन कारण — एनफील्ड राइफल के कारतूस:</strong> यह अफवाह फैल गई कि cartridges पर गाय और सूअर की चर्बी लगी है।</li>
          </ul>

          <h3 style={{ marginTop: '30px', fontSize: '1.4rem' }}>मंगल पांडे और बैरकपुर की घटना</h3>
          <p>
            <strong>29 मार्च 1857</strong> को 34वीं बंगाल नेटिव इन्फैंट्री के सैनिक <strong>मंगल पांडे</strong> ने अंग्रेज अधिकारियों के खिलाफ विद्रोह किया। मंगल पांडे को Court-Martial के बाद <strong>8 अप्रैल 1857</strong> को फांसी दी गई। इसके बाद <strong>10 मई 1857 को मेरठ</strong> से विद्रोह का व्यापक रूप सामने आया।
          </p>

          <h3 style={{ marginTop: '30px', fontSize: '1.4rem' }}>1857 के प्रमुख केंद्र और नेता</h3>
          <div style={{ overflowX: 'auto', margin: '20px 0' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: 'var(--color-primary)', color: 'white' }}>
                  <th style={{ padding: '12px', border: '1px solid #cbd5e1', textAlign: 'left' }}>केंद्र</th>
                  <th style={{ padding: '12px', border: '1px solid #cbd5e1', textAlign: 'left' }}>प्रमुख भारतीय नेता</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ background: 'var(--card-bg-hover)' }}>
                  <td style={{ padding: '12px', border: '1px solid #cbd5e1' }}>दिल्ली</td>
                  <td style={{ padding: '12px', border: '1px solid #cbd5e1' }}>बहादुर शाह जफर, बख्त खान</td>
                </tr>
                <tr>
                  <td style={{ padding: '12px', border: '1px solid #cbd5e1' }}>कानपुर</td>
                  <td style={{ padding: '12px', border: '1px solid #cbd5e1' }}>नाना साहेब, तात्या टोपे</td>
                </tr>
                <tr style={{ background: 'var(--card-bg-hover)' }}>
                  <td style={{ padding: '12px', border: '1px solid #cbd5e1' }}>झांसी/ग्वालियर</td>
                  <td style={{ padding: '12px', border: '1px solid #cbd5e1' }}>रानी लक्ष्मीबाई, तात्या टोपे</td>
                </tr>
                <tr>
                  <td style={{ padding: '12px', border: '1px solid #cbd5e1' }}>लखनऊ</td>
                  <td style={{ padding: '12px', border: '1px solid #cbd5e1' }}>बेगम हजरत महल</td>
                </tr>
                <tr style={{ background: 'var(--card-bg-hover)' }}>
                  <td style={{ padding: '12px', border: '1px solid #cbd5e1' }}>जगदीशपुर</td>
                  <td style={{ padding: '12px', border: '1px solid #cbd5e1' }}>कुंवर सिंह</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 style={{ marginTop: '30px', fontSize: '1.4rem' }}>1858 का भारत शासन अधिनियम</h3>
          <p>
            1857 के बाद <strong>Government of India Act, 1858</strong> के तहत East India Company का शासन समाप्त कर भारत का शासन सीधे ब्रिटिश Crown के अधीन कर दिया गया। <strong>लॉर्ड कैनिंग</strong> भारत के पहले Viceroy बने।
          </p>

          <hr style={{ margin: '40px 0', borderColor: 'var(--border-color)', borderStyle: 'dashed' }} />

          <h2 className="article-section-title" style={{ marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem', color: 'var(--color-primary)' }}>
            सामाजिक और धार्मिक सुधार आंदोलन
          </h2>
          <ul style={{ margin: '15px 0 15px 30px' }}>
            <li><strong>ब्रह्म समाज (1828):</strong> राजा राममोहन राय द्वारा स्थापित।</li>
            <li><strong>आर्य समाज (1875):</strong> स्वामी दयानंद सरस्वती द्वारा स्थापित (नारा: "वेदों की ओर लौटो", पुस्तक: सत्यार्थ प्रकाश)।</li>
            <li><strong>रामकृष्ण मिशन (1897):</strong> स्वामी विवेकानंद द्वारा स्थापित।</li>
            <li><strong>सत्यशोधक समाज (1873):</strong> ज्योतिबा फुले द्वारा स्थापित।</li>
            <li><strong>अलीगढ़ आंदोलन:</strong> सर सैयद अहमद खान के नेतृत्व में।</li>
          </ul>

          <h2 className="article-section-title" style={{ marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem', color: 'var(--color-primary)' }}>
            भारतीय राष्ट्रीय कांग्रेस की स्थापना
          </h2>
          <p>
            <strong>28 दिसंबर 1885</strong> को A. O. Hume द्वारा स्थापना। पहला अधिवेशन बॉम्बे में हुआ और प्रथम अध्यक्ष <strong>व्योमेश चंद्र बनर्जी (W. C. Bonnerjee)</strong> थे।
          </p>
          <p>
            <strong>उदारवादी चरण (1885-1905):</strong> दादाभाई नौरोजी, गोपाल कृष्ण गोखले, फिरोजशाह मेहता, सुरेंद्रनाथ बनर्जी। इनकी कार्यप्रणाली <strong>Petition, Prayer and Protest</strong> थी।
          </p>

          <h2 className="article-section-title" style={{ marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem', color: 'var(--color-primary)' }}>
            बंगाल विभाजन और स्वदेशी आंदोलन
          </h2>
          <p>
            <strong>1905 में लॉर्ड कर्जन</strong> ने बंगाल का विभाजन किया (16 अक्टूबर 1905)। इसके विरोध में <strong>Swadeshi Movement और Boycott Movement</strong> को गति मिली।
          </p>
          <p><strong>मुस्लिम लीग (1906):</strong> 30 दिसंबर 1906 को ढाका में स्थापना हुई।</p>
          <p><strong>सूरत विभाजन (1907):</strong> कांग्रेस उदारवादियों और गरमपंथियों में विभाजित हो गई।</p>

          <hr style={{ margin: '40px 0', borderColor: 'var(--border-color)', borderStyle: 'dashed' }} />

          <h2 className="article-section-title" style={{ marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem', color: 'var(--color-primary)' }}>
            महात्मा गांधी का भारत आगमन
          </h2>
          <p>
            महात्मा गांधी <strong>9 जनवरी 1915</strong> को दक्षिण अफ्रीका से भारत लौटे। उनके राजनीतिक गुरु गोपाल कृष्ण गोखले थे। भारत में गांधीजी के शुरुआती तीन महत्वपूर्ण सत्याग्रह:
          </p>
          <ul style={{ margin: '15px 0 15px 30px' }}>
            <li><strong>चंपारण सत्याग्रह (1917):</strong> तिनकठिया व्यवस्था के विरोध में।</li>
            <li><strong>अहमदाबाद मिल मजदूर आंदोलन (1918):</strong> textile mill workers के विवाद से जुड़ा।</li>
            <li><strong>खेड़ा सत्याग्रह (1918):</strong> कर वसूली के विरोध में (सरदार पटेल का सहयोग)।</li>
          </ul>

          <h2 className="article-section-title" style={{ marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem', color: 'var(--color-primary)' }}>
            रॉलेट एक्ट और जलियांवाला बाग हत्याकांड
          </h2>
          <p>
            1919 में ब्रिटिश सरकार ने <strong>Rowlatt Act</strong> पारित किया जिसे "बिना वकील, बिना अपील, बिना दलील" वाला कानून कहा गया।
          </p>
          <p>
            <strong>13 अप्रैल 1919</strong> को जलियांवाला बाग हत्याकांड हुआ। गोली चलाने का आदेश <strong>ब्रिगेडियर जनरल रेजिनाल्ड डायर</strong> ने दिया था। उस समय पंजाब के Lieutenant Governor <strong>Michael O'Dwyer</strong> थे।
          </p>

          <h2 className="article-section-title" style={{ marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem', color: 'var(--color-primary)' }}>
            असहयोग आंदोलन (1920–1922)
          </h2>
          <p>
            स्वदेशी और बहिष्कार पर जोर दिया गया। <strong>5 फरवरी 1922</strong> को चौरी-चौरा हिंसक घटना के बाद गांधीजी ने 12 फरवरी 1922 को आंदोलन वापस ले लिया।
          </p>

          <h2 className="article-section-title" style={{ marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem', color: 'var(--color-primary)' }}>
            क्रांतिकारी आंदोलन
          </h2>
          <ul style={{ margin: '15px 0 15px 30px' }}>
            <li><strong>स्वराज पार्टी (1923):</strong> चित्तरंजन दास और मोतीलाल नेहरू।</li>
            <li><strong>HRA (1924) & काकोरी कांड (1925):</strong> 9 अगस्त 1925 को काकोरी ट्रेन डकैती। रामप्रसाद बिस्मिल, अशफाकउल्ला खान को फांसी।</li>
            <li><strong>HSRA (1928):</strong> भगत सिंह और चंद्रशेखर आजाद। 23 मार्च 1931 को भगत सिंह, राजगुरु और सुखदेव को फांसी दी गई।</li>
          </ul>

          <hr style={{ margin: '40px 0', borderColor: 'var(--border-color)', borderStyle: 'dashed' }} />

          <h2 className="article-section-title" style={{ marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem', color: 'var(--color-primary)' }}>
            साइमन कमीशन और पूर्ण स्वराज्य
          </h2>
          <p>
            <strong>Simon Commission (1928)</strong> का भारत में व्यापक विरोध हुआ (लाला लाजपत राय की मृत्यु)। दिसंबर 1929 में कांग्रेस के <strong>लाहौर अधिवेशन</strong> में <strong>पूर्ण स्वराज्य</strong> का लक्ष्य रखा गया।
          </p>

          <h2 className="article-section-title" style={{ marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem', color: 'var(--color-primary)' }}>
            सविनय अवज्ञा आंदोलन और दांडी मार्च
          </h2>
          <p>
            <strong>12 मार्च 1930</strong> को गांधीजी ने दांडी मार्च शुरू किया और <strong>6 अप्रैल 1930</strong> को नमक कानून तोड़ा। <strong>5 मार्च 1931</strong> को गांधी-इरविन समझौता हुआ।
          </p>

          <h2 className="article-section-title" style={{ marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem', color: 'var(--color-primary)' }}>
            भारत छोड़ो आंदोलन (1942)
          </h2>
          <p>
            <strong>8 अगस्त 1942</strong> को शुरू। प्रसिद्ध नारा: <strong>“करो या मरो”</strong>।
          </p>

          <h2 className="article-section-title" style={{ marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem', color: 'var(--color-primary)' }}>
            सुभाष चंद्र बोस और आजाद हिंद फौज
          </h2>
          <p>
            <strong>21 अक्टूबर 1943</strong> को सिंगापुर में आजाद हिंद की अस्थायी सरकार स्थापित।
            नारे: “तुम मुझे खून दो, मैं तुम्हें आजादी दूंगा”, “दिल्ली चलो”, “जय हिंद”।
            महिलाओं के लिए <strong>रानी झांसी रेजिमेंट</strong>।
          </p>

          <h2 className="article-section-title" style={{ marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem', color: 'var(--color-primary)' }}>
            1946 से 1947: स्वतंत्रता की अंतिम प्रक्रिया
          </h2>
          <ul style={{ margin: '15px 0 15px 30px' }}>
            <li><strong>नौसैनिक विद्रोह:</strong> फरवरी 1946</li>
            <li><strong>Cabinet Mission:</strong> मार्च 1946</li>
            <li><strong>Interim Government:</strong> 2 सितंबर 1946</li>
            <li><strong>Mountbatten Plan:</strong> 3 जून 1947</li>
            <li><strong>स्वतंत्रता:</strong> 15 अगस्त 1947</li>
          </ul>

          <h2 className="article-section-title" style={{ marginTop: '40px', marginBottom: '20px', fontSize: '1.8rem', color: 'var(--color-primary)' }}>
            छत्तीसगढ़ में स्वतंत्रता आंदोलन
          </h2>
          <p>
            <strong>वीर नारायण सिंह:</strong> छत्तीसगढ़ के प्रथम शहीद (फांसी: 10 दिसंबर 1857)।<br/>
            <strong>कंडेल नहर सत्याग्रह (1920):</strong> पंडित सुंदरलाल शर्मा ("छत्तीसगढ़ का गांधी") के नेतृत्व में। गांधीजी का पहला छत्तीसगढ़ आगमन 20 दिसंबर 1920 को इसी के लिए हुआ था।
          </p>

          <div style={{ background: 'var(--card-bg-hover)', padding: '20px', borderRadius: '8px', borderLeft: '4px solid var(--color-primary)', margin: '40px 0' }}>
            <h3 style={{ marginTop: '0', fontSize: '1.4rem' }}>📝 Quick Revision Facts</h3>
            <ul style={{ margin: '0 0 0 20px', padding: 0 }}>
              <li><strong>1857</strong> — महान विद्रोह</li>
              <li><strong>1885</strong> — भारतीय राष्ट्रीय कांग्रेस</li>
              <li><strong>1905</strong> — बंगाल विभाजन</li>
              <li><strong>1915</strong> — गांधीजी भारत लौटे</li>
              <li><strong>1917</strong> — चंपारण सत्याग्रह</li>
              <li><strong>1919</strong> — जलियांवाला बाग</li>
              <li><strong>1920</strong> — असहयोग आंदोलन</li>
              <li><strong>1930</strong> — दांडी मार्च</li>
              <li><strong>1942</strong> — भारत छोड़ो आंदोलन</li>
              <li><strong>1946</strong> — कैबिनेट मिशन</li>
              <li><strong>15 अगस्त 1947</strong> — भारत स्वतंत्र हुआ</li>
            </ul>
          </div>

        </div>
        
        {/* MCQ Section */}
        <div style={{ marginTop: '60px' }}>
          <h2 className="article-section-title" style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '30px' }}>
            भारतीय स्वतंत्रता का इतिहास 1857–1947: महत्वपूर्ण MCQs
          </h2>
          <MCQSection questions={mcqData} />
        </div>

        <ArticleFooter 
          date="22 August 2026"
          sourceText="Modern Indian History Resources"
        />
      </article>
    </div>
  );
}
