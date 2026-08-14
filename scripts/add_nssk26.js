const fs = require('fs');
const path = require('path');

const routePath = path.join(__dirname, '../app/api/jobs/route.ts');
let code = fs.readFileSync(routePath, 'utf8');

const nssk26Html = `
<p>छत्तीसगढ़ में नगर सेना, अग्निशमन एवं आपातकालीन सेवाएँ तथा SDRF के अंतर्गत अलग-अलग पदों पर भर्ती के लिए NSSK26 लिखित परीक्षा आयोजित की जाएगी। इस परीक्षा में Store Keeper, Vehicle Driver, Vehicle Driver-cum-Operator, Mechanic और Watchroom Operator जैसे पद शामिल हैं।</p>
<p>CGSSB द्वारा जारी परीक्षा निर्देश के अनुसार इस भर्ती की लिखित परीक्षा 22 नवंबर 2026 को आयोजित की जाएगी। परीक्षा के लिए आवेदन प्रक्रिया 11 अगस्त 2026 से शुरू हुई है और उम्मीदवार 7 सितंबर 2026 शाम 5 बजे तक online application कर सकते हैं।</p>
<p>अगर आप इस भर्ती में आवेदन करने की तैयारी कर रहे हैं, तो नीचे हमने परीक्षा की date, application process, fee, syllabus, exam pattern और exam day instructions को आसान भाषा में समझाया है。</p>

<h2>CGSSB NSSK26 क्या है?</h2>
<p>NSSK26 नगर सेना, अग्निशमन एवं आपातकालीन सेवाएँ तथा SDRF के अंतर्गत विभिन्न पदों की लिखित भर्ती परीक्षा का examination code है।</p>
<p>इस परीक्षा के अंतर्गत निम्न पदों का उल्लेख किया गया है:</p>
<ul>
<li>Store Keeper</li>
<li>Vehicle Driver</li>
<li>Vehicle Driver-cum-Operator</li>
<li>Mechanic</li>
<li>Watchroom Operator</li>
</ul>
<p>यह परीक्षा छत्तीसगढ़ कर्मचारी चयन मंडल (CGSSB) द्वारा आयोजित की जा रही है। परीक्षा निर्देश में CGSSB की website के साथ पुराने CG Vyapam portal का भी उल्लेख किया गया है。</p>

<h2>CGSSB NSSK26 Important Dates</h2>
<p>इस भर्ती से जुड़ी सबसे महत्वपूर्ण dates इस प्रकार हैं:</p>
<table>
<thead><tr><th>Event</th><th>Date</th></tr></thead>
<tbody>
<tr><td>Online Application शुरू</td><td>11 अगस्त 2026</td></tr>
<tr><td>Online Application की Last Date</td><td>7 सितंबर 2026, शाम 5:00 बजे तक</td></tr>
<tr><td>Written Exam</td><td>22 नवंबर 2026</td></tr>
<tr><td>परीक्षा का समय</td><td>सुबह 10:00 बजे से 12:15 बजे तक</td></tr>
<tr><td>Admit Card जारी होने की तिथि</td><td>16 नवंबर 2026</td></tr>
<tr><td>Exam Centre</td><td>रायपुर</td></tr>
</tbody>
</table>
<p>ये dates CGSSB द्वारा जारी परीक्षा निर्देश में दी गई हैं。</p>
<p><strong>एक जरूरी बात:</strong> अभ्यर्थियों को application की last date का इंतजार नहीं करना चाहिए। अगर form में कोई technical problem आती है, तो अंतिम दिन तक रुकने पर समस्या बढ़ सकती है。</p>

<h2>NSSK26 में कौन-कौन से पद हैं?</h2>
<p>इस written recruitment examination में पांच अलग-अलग पदों का उल्लेख किया गया है:</p>
<h3>1. Store Keeper</h3>
<p>Store Keeper से संबंधित काम में विभागीय सामग्री और stock से जुड़े कार्य शामिल हो सकते हैं। हालांकि exact job responsibilities के लिए संबंधित recruitment notification को देखना चाहिए。</p>
<h3>2. Vehicle Driver</h3>
<p>इस पद के लिए वाहन संचालन से संबंधित योग्यता और अन्य conditions recruitment notification में निर्धारित होती हैं。</p>
<h3>3. Vehicle Driver-cum-Operator</h3>
<p>इस पद में vehicle driving के साथ emergency services से संबंधित operational responsibilities हो सकती हैं। Exact requirements official recruitment notification से verify करनी चाहिए。</p>
<h3>4. Mechanic</h3>
<p>Mechanic पद technical work से संबंधित है और इसके लिए निर्धारित technical qualification/conditions संबंधित भर्ती notification में देखना जरूरी है。</p>
<h3>5. Watchroom Operator</h3>
<p>Watchroom Operator emergency services setup में watchroom/communication-related responsibilities से जुड़ा पद है。</p>
<p><strong>ध्यान दें:</strong> आपके दिए गए syllabus document में इन पांचों पदों के लिए लिखित परीक्षा का common syllabus दिया गया है。</p>

<h2>Educational Qualification</h2>
<p>दिए गए syllabus document में इन पदों के लिए 12वीं पास educational qualification का उल्लेख किया गया है। हालांकि कुछ पदों, खासकर Driver या technical posts के लिए अतिरिक्त qualification या licence जैसी specific conditions हो सकती हैं। इसलिए केवल 12वीं पास होने के आधार पर सभी posts के लिए eligibility assume नहीं करनी चाहिए। जिस पद के लिए apply करना है, उसकी official recruitment notification में दी गई complete eligibility conditions जरूर check करें。</p>

<h2>CGSSB NSSK26 Exam Pattern</h2>
<p>NSSK26 की written examination का question paper 100 questions का होगा। परीक्षा के लिए कुल 100 marks निर्धारित हैं और समय 2 घंटे का दिया गया है। Question paper objective type होगा。</p>
<table>
<thead><tr><th>विषय</th><th>प्रश्न</th><th>अंक</th></tr></thead>
<tbody>
<tr><td>सामान्य ज्ञान</td><td>35</td><td>35</td></tr>
<tr><td>बुद्धि क्षमता एवं विश्लेषण क्षमता</td><td>25</td><td>25</td></tr>
<tr><td>अंकगणित</td><td>15</td><td>15</td></tr>
<tr><td>अग्निशमन एवं अग्नि से संबंधित विषय</td><td>25</td><td>25</td></tr>
<tr><td><strong>कुल</strong></td><td><strong>100</strong></td><td><strong>100</strong></td></tr>
</tbody>
</table>
<p>परीक्षा में negative marking नहीं होगी। प्रत्येक प्रश्न के लिए एक अंक निर्धारित है। यह बात preparation के लिए काफी important है क्योंकि उम्मीदवारों को गलत answer के लिए marks कटने की चिंता नहीं रहेगी。</p>

<h2>NSSK26 Syllabus</h2>
<p>अगर आप इस examination की तैयारी कर रहे हैं तो syllabus को चार हिस्सों में समझना सबसे आसान रहेगा।</p>
<h3>Part 1 – General Knowledge</h3>
<p>इस section के लिए कुल 35 marks निर्धारित हैं। Syllabus में मुख्य रूप से: Chhattisgarh का इतिहास, भूगोल, राजनीतिक व्यवस्था, अर्थव्यवस्था, लोक परंपराएँ, लोक संस्कृति, महत्वपूर्ण व्यक्तित्व, जनजातियाँ, सामाजिक एवं सांस्कृतिक घटनाएँ, खेल और राष्ट्रीय समसामयिक घटनाएँ शामिल हैं。<br><strong>तैयारी कैसे करें?</strong> इस section में सिर्फ national current affairs पढ़ना पर्याप्त नहीं होगा। Chhattisgarh-specific GK पर ज्यादा focus करना practical रहेगा。</p>

<h3>Part 2 – बुद्धि क्षमता एवं विश्लेषण क्षमता</h3>
<p>इस section से 25 questions और 25 marks निर्धारित हैं। इसमें सामान्य reasoning और analytical ability से जुड़े topics हैं, जैसे: विचार प्रवाह, आकृति आधारित प्रश्न, वर्गीकरण, समानता, विषमता, दिशा-निर्देश, मानसिक अभिरुचि, अनुमान, निर्णय लेने की क्षमता, अंक एवं शब्दों से संबंधित reasoning, संबंध और रिश्ते समझना。<br>इस section में speed के साथ-साथ question को सही तरीके से समझना जरूरी है。</p>

<h3>Part 3 – अंकगणित</h3>
<p>अंकगणित section में 15 questions और 15 marks होंगे। इसमें syllabus के अनुसार: संख्या प्रणाली, साधारण एवं लघुत्तम समापवर्तक, भिन्न, सरलीकरण, दशमलव, औसत, आयु से संबंधित प्रश्न, अनुपात एवं समानुपात, लाभ एवं हानि, साझेदारी, समय और कार्य, समय और दूरी, नाव और धारा, साधारण एवं चक्रवृद्धि ब्याज जैसे topics शामिल हैं。<br>अगर Maths आपकी कमजोर है तो इस section को आखिरी समय के लिए न छोड़ें। 15 marks छोटा section जरूर है, लेकिन यहां basic calculation की practice से अच्छे marks हासिल किए जा सकते हैं。</p>

<h3>Part 4 – अग्निशमन एवं अग्नि से संबंधित विषय</h3>
<p>इस section से 25 questions और 25 marks निर्धारित हैं। Syllabus में fire और firefighting से जुड़े topics शामिल हैं。<br><strong>मुख्य topics:</strong> आग क्या है? आग लगने के कारण, प्रकार, व्यवहार, अग्नि सुरक्षा उपकरण (Fire Extinguisher, Hydrant, Hose, Nozzle, Foam), अग्निशमन यंत्रों का उपयोग, सामान्य सिद्धांत, नियंत्रण के उपाय, सुरक्षा एवं बचाव (Primary First Aid, Evacuation), आग बुझाने के उपकरणों का सही उपयोग, Practical exercises.<br>इसलिए इस भर्ती की preparation करने वाले candidates को केवल सामान्य GK और reasoning पर निर्भर नहीं रहना चाहिए। Fire & Fire Safety वाला section भी preparation का महत्वपूर्ण हिस्सा है。</p>

<h2>क्या NSSK26 Exam में Negative Marking है?</h2>
<p><strong>नहीं।</strong> जारी syllabus में स्पष्ट रूप से बताया गया है कि परीक्षा में ऋणात्मक मूल्यांकन (Negative Marking) नहीं होगा। इसका मतलब है कि गलत answer देने पर marks काटे नहीं जाएंगे। फिर भी questions को ध्यान से पढ़कर answer करना बेहतर रहेगा क्योंकि exam में limited time में 100 questions attempt करने होंगे。</p>

<h2>NSSK26 Admit Card</h2>
<p>परीक्षा निर्देश के अनुसार Admit Card जारी करने की तिथि 16 नवंबर 2026 दी गई है। उम्मीदवारों को Admit Card CGSSB की website से online download करना होगा। परीक्षा के लिए Admit Card को पूरी तरह download करके उसका print लेकर exam centre जाना होगा। Admit Card को संभालकर रखना जरूरी है क्योंकि selection process या service joining के समय भी इसे मांगा जा सकता है。</p>

<h2>Exam Centre और Instructions</h2>
<p>दिए गए परीक्षा निर्देश के अनुसार परीक्षा केंद्र रायपुर में रहेगा。</p>
<p><strong>परीक्षा केंद्र पर कितनी देर पहले पहुंचना होगा?</strong><br>CGSSB के निर्देश के अनुसार candidates को परीक्षा शुरू होने के समय से कम से कम 2 घंटे पहले परीक्षा केंद्र पर उपस्थित होना होगा। परीक्षा सुबह 10:00 बजे शुरू होनी है, इसलिए उम्मीदवारों को सुबह 8:00 बजे तक centre पर पहुंचने की तैयारी रखनी चाहिए। परीक्षा शुरू होने से लगभग 30 मिनट पहले मुख्य द्वार बंद कर दिया जाएगा। (मुख्य द्वार सुबह 9:30 बजे बंद होगा)</p>

<p><strong>Exam Centre पर क्या लेकर जाना है?</strong></p>
<ul>
<li>Printed Admit Card</li>
<li>Black या Blue Ball Point Pen</li>
<li>Original Photo ID (Voter ID, Driving Licence, PAN Card, Aadhaar Card आदि)</li>
</ul>

<p><strong>Exam Centre पर क्या नहीं ले जाना है?</strong><br>Mobile Phone, Electronic devices, Electronic Watch, Purse, Handbag, Calculator, Books, Notes, Papers, अन्य communication devices.</p>

<p><strong>कपड़े और Jewellery:</strong><br>निर्देशों में काले, गहरे नीले, गहरे हरे, जामुनी, मैरून, बैंगनी और गहरे चॉकलेट रंग के कपड़े पहनने से बचने के लिए कहा गया है। फूलदार या ज्यादा pattern वाले कपड़े नहीं पहनने की बात भी दी गई है। कान में किसी भी प्रकार के आभूषण (Jewellery) की अनुमति नहीं है。</p>

<h2>NSSK26 Online Application कैसे करें?</h2>
<p>Application process के लिए candidate को सबसे पहले CGSSB में profile registration करना होगा。</p>
<ul>
<li><strong>Mobile Number & Email:</strong> अपना active mobile number और email ID ही इस्तेमाल करें।</li>
<li><strong>Name & DOB:</strong> 10वीं की marksheet के अनुसार भरें।</li>
<li><strong>Domicile:</strong> Chhattisgarh के निवासी candidates को domicile से संबंधित information सही तरीके से select करनी होगी।</li>
<li><strong>Photo & Signature:</strong> दोनों के लिए 50 KB से 100 KB size range दी गई है।</li>
</ul>

<h2>NSSK26 Application Fee</h2>
<table>
<thead><tr><th>Category</th><th>Fee</th></tr></thead>
<tbody>
<tr><td>General</td><td>₹350</td></tr>
<tr><td>Other Backward Class</td><td>₹250</td></tr>
<tr><td>SC / ST / Divyang</td><td>₹200</td></tr>
</tbody>
</table>
<p><em>निर्देश में यह भी बताया गया है कि Chhattisgarh के local residents द्वारा जमा की गई examination fee, लागू सरकारी निर्देशों के अनुसार परीक्षा में उपस्थित होने के बाद संबंधित bank account में वापस की जा सकती है।</em></p>

<h3>Payment करने के बाद एक जरूरी काम जरूर करें</h3>
<p>Payment complete होने के बाद candidate को अपना application <strong>SUBMIT</strong> करना जरूरी है। Payment successful होने के बावजूद अगर candidate ने final SUBMIT button नहीं दबाया, तो application valid नहीं माना जा सकता। Bank instructions में इस बात को स्पष्ट रूप से बताया गया है。<br><strong>Process:</strong> Payment &rarr; Confirm Payment &rarr; Application Check &rarr; SUBMIT &rarr; Application Save/Print</p>

<h2>NSSK26 परीक्षा की तैयारी कैसे करें? (Strategy)</h2>
<p>अगर आप अभी से तैयारी कर रहे हैं तो daily study को इस तरह divide कर सकते हैं: <strong>General Knowledge &rarr; Reasoning &rarr; Fire & Fire Safety &rarr; Maths &rarr; Revision</strong>। हर कुछ दिनों में mock questions solve करें और देखें कि कौन-सा section कमजोर है। क्योंकि negative marking नहीं है, इसलिए exam में questions attempt करने की strategy भी थोड़ी अलग हो सकती है। फिर भी पहले उन questions को solve करना बेहतर रहेगा जिनके answers आपको confidently आते हैं。</p>

<h2>NSSK26 Official Website</h2>
<p>इस भर्ती से जुड़ी official information के लिए candidates को CGSSB की official website और recruitment instructions में दिए गए official portal को प्राथमिकता देनी चाहिए。<br><strong>Official Website:</strong> <a href="https://cgssb.cgstate.gov.in/" target="_blank" rel="noopener noreferrer">https://cgssb.cgstate.gov.in</a></p>
<p><em>Important: हमारी website एक independent informational platform है। किसी भी recruitment date, eligibility, application, admit card या अन्य महत्वपूर्ण जानकारी पर अंतिम निर्णय लेने से पहले संबंधित official notification/website से details verify जरूर करें।</em></p>

<h2>Frequently Asked Questions</h2>
<h3>NSSK26 क्या है?</h3>
<p>NSSK26 नगर सेना, अग्निशमन एवं आपातकालीन सेवाएँ तथा SDRF के अंतर्गत Store Keeper, Vehicle Driver, Vehicle Driver-cum-Operator, Mechanic और Watchroom Operator पदों की लिखित भर्ती परीक्षा का code है。</p>
<h3>NSSK26 परीक्षा कब होगी?</h3>
<p>Written examination 22 नवंबर 2026 को आयोजित की जाएगी。</p>
<h3>NSSK26 Admit Card कब आएगा?</h3>
<p>परीक्षा निर्देश में Admit Card जारी करने की तिथि 16 नवंबर 2026 दी गई है。</p>
<h3>NSSK26 में कितने प्रश्न होंगे?</h3>
<p>Question paper में 100 objective questions होंगे और कुल 100 marks होंगे。</p>
<h3>क्या NSSK26 में Negative Marking है?</h3>
<p>नहीं। जारी syllabus में Negative Marking नहीं होने की बात स्पष्ट है。</p>
<h3>NSSK26 application fee कितनी है?</h3>
<p>General के लिए ₹350, OBC के लिए ₹250 और SC/ST/Divyang category के लिए ₹200 fee दी गई है。</p>
`;

const nssk26Job = {
  id: 4,
  slug: 'cgssb-nssk26-recruitment-2026',
  title: 'CGSSB NSSK26 Recruitment 2026: Exam Date, Syllabus, Admit Card',
  meta_title: 'CGSSB NSSK26 Recruitment 2026: Exam Date, Syllabus, Admit Card',
  meta_description: 'CGSSB NSSK26 Recruitment 2026 की exam date, application dates, syllabus, exam pattern, fee, admit card और जरूरी परीक्षा निर्देश यहां देखें।',
  department: 'नगर सेना एवं अग्निशमन सेवाएँ',
  total_posts: 5,
  last_date: '2026-09-07',
  content: nssk26Html
};

const jobString = JSON.stringify(nssk26Job, null, 2);
const replacement = 'export let localJobs = [\n  ' + jobString + ',\n';

if (code.includes('export let localJobs = [')) {
  code = code.replace('export let localJobs = [', replacement);
  fs.writeFileSync(routePath, code);
  console.log('Successfully inserted NSSK26 job into route.ts');
} else {
  console.error('Could not find localJobs array in route.ts');
}
