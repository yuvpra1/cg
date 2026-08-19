import AgeCalculator from '@/components/AgeCalculator';

export const metadata = {
  title: 'Age Calculator for Government Exams | CGSSB',
  description: 'Calculate your exact age (years, months, days) as of a specific date for CG Police, CGPSC, and Vyapam exam notifications.',
};

export default function AgeCalculatorPage() {
  return (
    <div className="container" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
      
      {/* Tool Header */}
      <section style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>
          Exam Age Calculator
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
          Most government jobs require you to calculate your exact age on a specific cutoff date (e.g., January 1). Use this tool to find your precise age in years, months, and days.
        </p>
      </section>

      {/* Calculator Interface */}
      <section>
        <AgeCalculator />
      </section>

      {/* SEO Content / Instructions */}
      <section style={{ marginTop: '60px', maxWidth: '800px', margin: '60px auto 0' }} className="content-paragraph">
        <h2 className="article-section-title">Exam Age Calculator: Government Job के लिए अपनी Exact Age Calculate करें</h2>
        <p>
          Government job की तैयारी करते समय केवल यह जानना काफी नहीं होता कि आपकी उम्र आज कितनी है। कई भर्ती notifications में उम्मीदवार की age <strong>एक निश्चित cutoff date</strong> के आधार पर calculate की जाती है। यही कारण है कि किसी vacancy के लिए eligibility check करते समय <strong>Date of Birth (DOB)</strong> और notification में दी गई <strong>“age as on” date</strong> दोनों को सही तरीके से देखना जरूरी होता है।
        </p>
        <p>
          अगर आप CGSSB, CG Vyapam, CGPSC, Police, Patwari या किसी अन्य government recruitment की तैयारी कर रहे हैं, तो यह <strong>Exam Age Calculator</strong> आपको किसी भी निर्धारित तारीख तक अपनी exact age निकालने में मदद करता है।
        </p>
        <p>
          आप अपनी <strong>Date of Birth</strong> और जिस तारीख तक age calculate करनी है, वह date enter करके अपनी उम्र <strong>years, months और days</strong> में देख सकते हैं।
        </p>

        <h2 className="article-section-title">Exam Age Calculator कैसे काम करता है?</h2>
        <p>यह calculator दो dates के बीच आपकी उम्र calculate करता है:</p>
        <ul>
          <li><strong>1. Date of Birth (DOB):</strong> आपकी जन्म तिथि</li>
          <li><strong>2. Calculate Age As Of:</strong> वह तारीख जिस दिन तक आपकी उम्र calculate करनी है</li>
        </ul>
        <p>उदाहरण के लिए, अगर किसी government job notification में लिखा है कि उम्मीदवार की उम्र <strong>01 January 2026</strong> को निर्धारित की जाएगी, तो आपको calculator में:</p>
        <ul>
          <li>अपनी वास्तविक Date of Birth डालनी है</li>
          <li>Target Date में <strong>01/01/2026</strong> डालना है</li>
        </ul>
        <p>इसके बाद <strong>Calculate Age</strong> पर क्लिक करने पर उस तारीख के अनुसार आपकी उम्र निकाली जाएगी।</p>

        <h2 className="article-section-title">Government Jobs में Cutoff Date इतनी Important क्यों है?</h2>
        <p>Recruitment notifications में maximum और minimum age आमतौर पर किसी specific date के आधार पर निर्धारित की जाती है।</p>
        <p>मान लीजिए किसी vacancy में लिखा है:</p>
        <blockquote style={{ borderLeft: '4px solid var(--color-primary)', paddingLeft: '15px', color: 'var(--text-main)', fontStyle: 'italic', background: 'var(--card-bg-hover)', padding: '15px' }}>
          Candidate की age 01/01/2026 को 18 से 35 वर्ष के बीच होनी चाहिए।
        </blockquote>
        <p>ऐसी स्थिति में केवल यह देखना सही नहीं होगा कि आपकी उम्र आज 35 वर्ष है या नहीं। आपको यह देखना होगा कि <strong>01/01/2026 को आपकी उम्र कितनी थी।</strong></p>
        <p>इसीलिए calculator में <strong>Calculate Age As Of</strong> वाली date को recruitment notification में दी गई date के अनुसार रखना चाहिए।</p>

        <h3>एक आसान उदाहरण</h3>
        <p>मान लीजिए किसी candidate की Date of Birth: <strong>15 March 1991</strong><br />
        और recruitment की cutoff date: <strong>01 January 2026</strong> है।</p>
        <p>तो candidate की age cutoff date पर calculate की जाएगी, न कि application submit करने वाले दिन की age के आधार पर। यही calculation यह समझने में मदद करती है कि candidate prescribed age limit के अंदर आता है या नहीं।</p>

        <h2 className="article-section-title">Exam Age Calculator का इस्तेमाल कैसे करें?</h2>
        <p>इस calculator को इस्तेमाल करना काफी आसान है।</p>
        <h3>Step 1: अपनी Date of Birth डालें</h3>
        <p><strong>Date of Birth (DOB)</strong> field में अपनी सही जन्म तिथि select करें। DOB के लिए वही date इस्तेमाल करना बेहतर है जो आपके valid educational या official documents में दर्ज है।</p>
        <h3>Step 2: Cutoff Date डालें</h3>
        <p><strong>Calculate Age As Of</strong> field में recruitment notification में दी गई age calculation date डालें। उदाहरण: <strong>01/01/2026</strong>. अगर notification में कोई दूसरी date दी गई है, तो उसी date का इस्तेमाल करें।</p>
        <h3>Step 3: Calculate Age पर क्लिक करें</h3>
        <p>अब <strong>Calculate Age</strong> button पर click करें। Calculator आपकी age को <strong>Years, Months और Days</strong> के रूप में calculate करेगा।</p>
        <h3>Step 4: Notification से Compare करें</h3>
        <p>Calculator से मिली age को recruitment notification में दी गई: Minimum Age, Maximum Age, Age Relaxation और Category-wise eligibility के साथ compare करें।</p>

        <h2 className="article-section-title">CGSSB और CGPSC Exams में Age Calculation</h2>
        <p>Chhattisgarh में government recruitment की तैयारी करने वाले candidates के लिए age calculation काफी important हो सकती है। अलग-अलग recruitments में age limit और age calculation की तारीख अलग हो सकती है।</p>
        <p><strong>CGSSB, CG Vyapam और CGPSC की किसी भी recruitment में age limit check करते समय संबंधित official notification को जरूर देखें।</strong></p>

        <h2 className="article-section-title">Age Relaxation को कैसे समझें?</h2>
        <p>Government recruitment में कुछ categories के candidates को prescribed rules के अनुसार age relaxation मिल सकती है। Notification के अनुसार अलग-अलग categories के लिए relaxation के नियम अलग हो सकते हैं। इसलिए अगर आपकी calculated age सामान्य maximum age से अधिक है, तो तुरंत यह assume न करें कि आप automatically ineligible हैं। पहले recruitment notification में देखें कि आपके category या applicable status के लिए कोई <strong>age relaxation provision</strong> दिया गया है या नहीं।</p>

        <h3>ध्यान देने वाली बात</h3>
        <p>Age relaxation का मतलब यह नहीं है कि सभी government jobs में समान relaxation मिलेगी। हर recruitment के rules अलग हो सकते हैं। इसलिए:<br/>
        <strong>Calculator → Exact Age → Official Notification → Age Limit/Relaxation → Final Eligibility</strong><br/>
        इस क्रम में eligibility check करना ज्यादा सुरक्षित है।</p>

        <h2 className="article-section-title">एक दिन का अंतर भी क्यों महत्वपूर्ण हो सकता है?</h2>
        <p>Age calculation में Date of Birth और cutoff date दोनों महत्वपूर्ण हैं। अगर किसी candidate की DOB cutoff date के आसपास आती है, तो केवल approximate age जैसे <strong>“लगभग 18 साल”</strong> या <strong>“लगभग 35 साल”</strong> देखकर eligibility decide करना सही नहीं है।</p>
        <p>उदाहरण के लिए: 18 years 0 months 0 days और 17 years 11 months 29 days. इन दोनों की age में केवल एक दिन का अंतर हो सकता है, लेकिन अगर recruitment में minimum age <strong>18 years</strong> निर्धारित है, तो यह अंतर eligibility के लिए महत्वपूर्ण हो सकता है।</p>

        <h2 className="article-section-title">DOB कहाँ से देखें?</h2>
        <p>अपनी DOB उस document से verify करें जिसे recruitment process में valid माना जाता है। उदाहरण के लिए, आपकी <strong>10th marksheet/certificate</strong> में दर्ज जन्म तिथि आपके लिए reference हो सकती है, लेकिन अंतिम रूप से वही document और DOB मान्य होगी जो संबंधित recruitment के official rules में स्वीकार की गई हो।</p>

        <h2 className="article-section-title">Candidates अक्सर ये गलतियां करते हैं</h2>
        <ul>
          <li><strong>1. आज की तारीख से age calculate करना:</strong> हमेशा notification में दी गई cutoff date enter करें।</li>
          <li><strong>2. DOB गलत डालना:</strong> DOB डालने से पहले अपने document से date verify करें।</li>
          <li><strong>3. हर recruitment की cutoff date समान मान लेना:</strong> जिस vacancy के लिए apply कर रहे हैं, उसी notification की age clause पढ़ें।</li>
          <li><strong>4. Age relaxation को ignore करना:</strong> अपनी applicable category और notification में दिए गए relaxation rules भी check करें।</li>
          <li><strong>5. Calculator result को final eligibility मान लेना:</strong> Final eligibility recruitment के official notification और applicable rules के अनुसार ही तय होगी।</li>
        </ul>

        <h2 className="article-section-title">Exam Age Calculator किन लोगों के लिए उपयोगी है?</h2>
        <p>यह tool खास तौर पर उन candidates के लिए उपयोगी है जो CGSSB recruitment, CGPSC exams, CG Vyapam vacancies, Chhattisgarh Police recruitment, Patwari या अन्य government jobs के लिए age check कर रहे हैं।</p>

        <h2 className="article-section-title">क्या यह Calculator Eligibility भी बताता है?</h2>
        <p><strong>नहीं।</strong> यह tool आपकी <strong>exact age calculate</strong> करता है। यह किसी particular government job के लिए आपका final eligibility status तय नहीं करता। किसी recruitment में age के अलावा भी कई conditions हो सकती हैं।</p>

        <h2 className="article-section-title">Frequently Asked Questions (FAQs)</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <strong>Exam Age Calculator क्या है?</strong>
            <p>Exam Age Calculator एक date-based online tool है जिसकी मदद से आप अपनी Date of Birth और किसी specific target/cutoff date के बीच अपनी exact age calculate कर सकते हैं।</p>
          </div>
          <div>
            <strong>Government job में Age As On date क्या होती है?</strong>
            <p>यह वह तारीख होती है जिसे recruitment authority candidate की age निर्धारित करने के लिए इस्तेमाल करती है। यह date संबंधित recruitment notification में दी जाती है।</p>
          </div>
          <div>
            <strong>क्या मैं आज की तारीख पर अपनी age calculate कर सकता हूं?</strong>
            <p>हाँ। अगर आपको वर्तमान तारीख तक अपनी age जाननी है, तो target date के रूप में आज की तारीख इस्तेमाल की जा सकती है। लेकिन government recruitment के लिए notification में दी गई cutoff date का इस्तेमाल करें।</p>
          </div>
          <div>
            <strong>क्या 10th marksheet की DOB इस्तेमाल करनी चाहिए?</strong>
            <p>DOB enter करते समय अपने valid official document से जन्म तिथि verify करें। कौन-सा document recruitment में स्वीकार होगा, इसके लिए संबंधित official notification के rules देखें।</p>
          </div>
        </div>

        <h2 className="article-section-title">Final Note</h2>
        <p>Government recruitment में age eligibility छोटी-सी detail लग सकती है, लेकिन application से पहले इसे सही तरीके से check करना जरूरी है। इस <strong>Exam Age Calculator</strong> का इस्तेमाल करके आप अपनी DOB और recruitment की cutoff date के आधार पर exact age निकाल सकते हैं।</p>
        <p><strong>CGSSB.com.in पर हमारा उद्देश्य candidates को recruitment information और useful tools एक ही जगह पर आसान तरीके से उपलब्ध कराना है। हालांकि किसी भी भर्ती के लिए अंतिम और authoritative information संबंधित official notification और recruitment authority की website से ही verify करें।</strong></p>
      </section>

    </div>
  );
}
