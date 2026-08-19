import PhotoResizer from '@/components/PhotoResizer';

export const metadata = {
  title: 'Photo & Signature Resizer for Govt Exams (50KB) | CGSSB',
  description: 'Easily resize and compress your passport size photo and signature under 50KB or 100KB for CGSSB, CGPSC, and Vyapam online application forms.',
};

export default function PhotoResizerPage() {
  return (
    <div className="container" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
      
      {/* Tool Header */}
      <section style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>
          Photo & Signature Resizer
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto' }}>
          Stop struggling with Photoshop or heavy apps. Use this free browser tool to compress your photo and signature to meet the exact size requirements (e.g., 40KB - 60KB) of CGSSB (Vyapam) and CGPSC online forms. 100% secure, your image never leaves your device!
        </p>
      </section>

      {/* Tool Interface */}
      <section>
        <PhotoResizer />
      </section>

      {/* SEO Content / Instructions */}
      <section style={{ marginTop: '60px', maxWidth: '800px', margin: '60px auto 0' }} className="content-paragraph">
        <h2 className="article-section-title">Photo & Signature Resizer for CGSSB & CGPSC Forms</h2>
        <p>
          Government job application form भरते समय सिर्फ सही information देना ही जरूरी नहीं होता। कई online applications में <strong>passport-size photograph और signature को निर्धारित format, dimensions और file size</strong> में upload करना पड़ता है।
        </p>
        <p>
          यही काम कई candidates के लिए परेशानी वाला हो जाता है। कभी image की <strong>KB size ज्यादा होती है</strong>, कभी dimensions सही नहीं होते और कभी compression के बाद photo या signature इतना blurry हो जाता है कि उसे पढ़ना मुश्किल हो जाता है।
        </p>
        <p>
          इसी समस्या को आसान बनाने के लिए <strong>CGSSB.com.in का Photo & Signature Resizer</strong> बनाया गया है। यह browser में सीधे काम करता है और आपकी image को resize तथा compress करने में मदद करता है।
        </p>
        <p>
          आप photo या signature upload करके target width और compression level adjust कर सकते हैं और फिर तैयार image को download कर सकते हैं।
        </p>
        <blockquote style={{ borderLeft: '4px solid var(--color-primary)', paddingLeft: '15px', color: 'var(--text-main)', fontStyle: 'italic', background: 'var(--card-bg-hover)', padding: '15px' }}>
          <strong>Important:</strong> किसी भी recruitment form में photo या signature की exact size, dimensions, format और अन्य requirements हमेशा संबंधित official notification/application instructions से verify करें। हर recruitment में requirements एक जैसी नहीं होतीं।
        </blockquote>

        <h2 className="article-section-title">Photo & Signature Resizer क्या करता है?</h2>
        <p>यह tool मुख्य रूप से दो काम करता है:</p>
        <p><strong>Resize:</strong> Image की dimensions को आपकी जरूरत के अनुसार adjust करता है।</p>
        <p><strong>Compress:</strong> Image की file size को कम करने में मदद करता है, ताकि वह recruitment form में दी गई KB limit के अंदर आ सके।</p>
        <p>उदाहरण के लिए, अगर किसी application में image के लिए एक specific file-size range दी गई है, तो आप compression level को adjust करके उस range के करीब पहुंच सकते हैं。</p>

        <h2 className="article-section-title">CGSSB और CGPSC Form में Photo की जरूरत क्यों पड़ती है?</h2>
        <p>Online recruitment applications में candidate की पहचान verify करने के लिए photograph और कई मामलों में signature upload कराया जाता है। Application form में image upload करने के लिए recruitment authority कुछ technical requirements दे सकती है, जैसे:</p>
        <ul>
          <li>JPG/JPEG या PNG format</li>
          <li>Maximum file size</li>
          <li>Minimum या maximum dimensions</li>
          <li>निर्धारित width/height</li>
          <li>साफ और readable photograph</li>
          <li>स्पष्ट signature</li>
        </ul>
        <p>इनमें से कौन-सी requirement लागू होगी, यह <strong>specific recruitment notification</strong> पर निर्भर करता है। इसलिए केवल किसी पुराने form की image requirements देखकर नई recruitment में वही settings इस्तेमाल नहीं करनी चाहिए।</p>

        <h2 className="article-section-title">Photo और Signature में Resize और Compress में क्या अंतर है?</h2>
        <p>इन दोनों terms को समझना जरूरी है।</p>
        
        <h3>Resize क्या है?</h3>
        <p>Resize करने का मतलब image की <strong>width और height/pixel dimensions</strong> बदलना है। मान लीजिए आपकी photo बहुत बड़ी dimensions में है और form में छोटी dimensions की जरूरत है। ऐसी स्थिति में image को resize किया जा सकता है।</p>
        
        <h3>Compress क्या है?</h3>
        <p>Compression में image की <strong>file size कम</strong> की जाती है। उदाहरण के लिए किसी image की size: <strong>250 KB → 100 KB → 60 KB</strong> तक कम की जा सकती है। लेकिन compression बहुत ज्यादा करने पर image की quality खराब या blurry हो सकती है।</p>
        <p>इसीलिए केवल KB कम करना ही उद्देश्य नहीं होना चाहिए। <strong>Readable quality बनाए रखना भी जरूरी है।</strong></p>

        <h2 className="article-section-title">Photo & Signature Resizer कैसे इस्तेमाल करें?</h2>
        <p>इस tool को इस्तेमाल करने के लिए आपको किसी heavy image-editing software की जरूरत नहीं है।</p>
        
        <h3>Step 1: Photo या Signature Select करें</h3>
        <p><strong>Choose File</strong> पर click करें और अपने computer/mobile से photo या signature की image select करें। Tool JPG/PNG जैसे commonly used image formats के लिए बनाया गया है।</p>
        
        <h3>Step 2: Target Width सेट करें</h3>
        <p>अगर आपको specific width की जरूरत है, तो <strong>Target Width (px)</strong> में required pixel width डालें। उदाहरण के लिए tool में default value <strong>400 px</strong> दी गई है। लेकिन इसका मतलब यह नहीं है कि हर CGSSB या CGPSC form में 400 px ही mandatory है। <strong>जिस recruitment के लिए form भर रहे हैं, उसकी official instructions को priority दें।</strong></p>
        
        <h3>Step 3: Compression Level Adjust करें</h3>
        <p>अब compression slider को adjust करें। यदि file size बहुत ज्यादा है, तो compression बढ़ाकर image का KB size कम किया जा सकता है। लेकिन बहुत ज्यादा compression करने पर image quality खराब हो सकती है। इसलिए ऐसा setting चुनें जिसमें <strong>File Size कम + Image Quality पर्याप्त Clear</strong> दोनों का balance बना रहे।</p>
        
        <h3>Step 4: Resize & Compress पर Click करें</h3>
        <p>अब <strong>Resize & Compress</strong> button पर click करें। Tool image को process करके नई resized/compressed image तैयार करेगा।</p>
        
        <h3>Step 5: File Size Check करें</h3>
        <p>नई image का file size देखें और उसे recruitment form की required limit से compare करें। अगर size अभी भी ज्यादा है, तो compression setting को थोड़ा adjust करके दोबारा process किया जा सकता है।</p>

        <h2 className="article-section-title">Photo की Quality खराब क्यों हो जाती है?</h2>
        <p>Image को बार-बार compress करने या बहुत ज्यादा compression इस्तेमाल करने से image में details कम हो सकती हैं। इसका असर खासकर signature पर दिखाई दे सकता है। उदाहरण के लिए:</p>
        <p><strong>Original Signature → हल्का compression → ज्यादा compression → बहुत ज्यादा compression</strong></p>
        <p>जैसे-जैसे compression बढ़ता है, image की clarity कम हो सकती है। इसलिए अगर form में कोई strict file-size requirement नहीं है, तो unnecessarily बहुत छोटी file बनाने की कोशिश न करें।</p>

        <h2 className="article-section-title">Photo को बहुत ज्यादा Compress करने से बचें</h2>
        <p>कई candidates की कोशिश होती है कि image को जितना संभव हो उतना छोटा कर दिया जाए। लेकिन recruitment form के लिए यह हमेशा अच्छा तरीका नहीं है। अगर आपकी photograph या signature बहुत ज्यादा compressed है, तो:</p>
        <ul>
          <li>चेहरा blurry हो सकता है</li>
          <li>signature के strokes टूट सकते हैं</li>
          <li>image में artifacts दिखाई दे सकते हैं</li>
          <li>document verification के दौरान clarity कम हो सकती है</li>
        </ul>
        <p>इसलिए <strong>required file size के अंदर सबसे बेहतर possible quality</strong> रखना बेहतर approach है।</p>

        <h2 className="article-section-title">40KB–60KB की Photo कैसे बनाएं?</h2>
        <p>अगर किसी specific recruitment notification में photograph या signature के लिए उदाहरण के तौर पर <strong>40KB से 60KB</strong> की सीमा दी गई है, तो आपका लक्ष्य उस prescribed range के अंदर file तैयार करना होना चाहिए। इसके लिए:</p>
        <ol>
          <li>Original image select करें।</li>
          <li>Required dimensions notification से check करें।</li>
          <li>Target width set करें।</li>
          <li>Compression level adjust करें।</li>
          <li><strong>Resize & Compress</strong> पर click करें।</li>
          <li>Generated image की KB size check करें।</li>
          <li>अगर size ज्यादा है तो compression थोड़ा बढ़ाएं।</li>
          <li>अगर quality बहुत खराब हो रही है तो compression कम करें।</li>
          <li>Final image को form में upload करने से पहले दोबारा check करें।</li>
        </ol>
        <p><strong>ध्यान दें:</strong> 40KB–60KB केवल एक example range है। आपकी recruitment में अलग requirement हो सकती है।</p>

        <h2 className="article-section-title">Passport Photo के लिए किन बातों का ध्यान रखें?</h2>
        <p>Online application में photograph upload करने से पहले इन चीजों को check करना useful है:</p>
        <h3>Photo clear हो</h3>
        <p>Candidate का face clearly दिखाई देना चाहिए।</p>
        <h3>Background और appearance</h3>
        <p>Recruitment notification में अगर background, dress या photograph की कोई specific condition दी गई है, तो उसी का पालन करें।</p>
        <h3>Recent photograph</h3>
        <p>अगर notification में recent photograph मांगी गई है, तो पुरानी photograph इस्तेमाल न करें।</p>
        <h3>सही file format</h3>
        <p>Notification में allowed format देखें। अगर केवल JPG/JPEG स्वीकार किया गया है, तो PNG upload करने की कोशिश न करें।</p>
        <h3>File size</h3>
        <p>Upload करने से पहले final file की KB/MB limit जरूर check करें।</p>

        <h2 className="article-section-title">Signature को Resize करते समय क्या ध्यान रखें?</h2>
        <p>Signature की image बनाते समय quality का ध्यान रखना और भी जरूरी हो सकता है। Signature:</p>
        <ul>
          <li>साफ दिखाई दे</li>
          <li>बहुत ज्यादा dark या distorted न हो</li>
          <li>पूरा signature image में दिखाई दे</li>
          <li>unnecessary खाली जगह बहुत ज्यादा न हो</li>
          <li>required dimensions में हो</li>
          <li>official instructions के अनुसार format और size में हो</li>
        </ul>
        <p>अगर signature को बहुत ज्यादा compress किया गया, तो उसके छोटे strokes गायब हो सकते हैं।</p>

        <h2 className="article-section-title">क्या यह Tool आपकी Image को Server पर Upload करता है?</h2>
        <p>इस tool का उद्देश्य image processing को <strong>browser में locally</strong> करना है। Page पर दिए गए tool description के अनुसार image आपके device से बाहर भेजे बिना resize/compress करने के लिए बनाया गया है। इसका फायदा यह है कि आपको photo या signature को किसी third-party image-compression website पर upload करने की जरूरत नहीं पड़ती। फिर भी, किसी भी website पर sensitive documents इस्तेमाल करते समय users को उसकी privacy information और browser/network behavior को ध्यान में रखना चाहिए।</p>

        <h2 className="article-section-title">Mobile से Photo Resize कैसे करें?</h2>
        <p>अगर आप smartphone से government form भर रहे हैं, तो यह tool mobile browser में भी उपयोगी हो सकता है। Basic process वही रहेगा:</p>
        <p><strong>Choose File → Photo/Signature Select → Width Set → Compression Adjust → Resize & Compress → Download</strong></p>
        <p>इसके बाद generated image को अपने phone में save करके recruitment application में upload किया जा सकता है।</p>

        <h2 className="article-section-title">Government Form में Image Upload करने से पहले Checklist</h2>
        <p>Final image upload करने से पहले यह checklist जरूर देख लें:</p>
        <ul>
          <li>✅ DOB/Name वाली image नहीं, सही candidate photo select की है</li>
          <li>✅ Photograph recent है, अगर notification में required है</li>
          <li>✅ Signature clearly visible है</li>
          <li>✅ Correct file format है</li>
          <li>✅ File size official limit के अंदर है</li>
          <li>✅ Dimensions official requirement के अनुसार हैं</li>
          <li>✅ Image blurry नहीं है</li>
          <li>✅ File को सही नाम से save किया है, अगर notification में naming convention दिया गया है</li>
          <li>✅ Final upload से पहले official application instructions दोबारा check की हैं</li>
        </ul>

        <h2 className="article-section-title">सबसे जरूरी बात: हर Recruitment की Requirement अलग हो सकती है</h2>
        <p>यह बात candidates को हमेशा ध्यान रखनी चाहिए। किसी पुराने <strong>CGSSB, CG Vyapam या CGPSC</strong> form में अगर photograph 40–60 KB की थी, तो यह जरूरी नहीं कि अगली recruitment में भी वही limit हो। इसी तरह एक recruitment में 400 px width हो सकती है और दूसरी में अलग dimensions मांगी जा सकती हैं।</p>
        <p>इसलिए हमारा tool <strong>image को required size में तैयार करने में मदद करता है</strong>, लेकिन आपको final settings हमेशा उस recruitment के <strong>official notification/application instructions</strong> से confirm करनी चाहिए।</p>

        <h2 className="article-section-title">Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <strong>क्या मैं इस tool से photo और signature दोनों resize कर सकता हूं?</strong>
            <p>हाँ। Tool को photo या signature जैसी image files को resize और compress करने के लिए इस्तेमाल किया जा सकता है।</p>
          </div>
          <div>
            <strong>क्या JPG और PNG दोनों इस्तेमाल कर सकते हैं?</strong>
            <p>Tool interface में JPG/PNG supported formats के रूप में दिए गए हैं। हालांकि final upload के लिए recruitment authority द्वारा allowed format को जरूर check करें।</p>
          </div>
          <div>
            <strong>क्या 400px width हर CGSSB form के लिए जरूरी है?</strong>
            <p>नहीं। Tool में 400px default/typical setting हो सकती है, लेकिन इसे universal CGSSB requirement नहीं मानना चाहिए। जिस recruitment का form भर रहे हैं, उसकी official instructions देखें।</p>
          </div>
          <div>
            <strong>मेरी image 60KB से ज्यादा है, क्या करूं?</strong>
            <p>Compression level को adjust करके image को दोबारा process करें। जरूरत पड़ने पर target dimensions भी official requirements के अनुसार adjust करें।</p>
          </div>
          <div>
            <strong>Compression बढ़ाने पर photo blurry क्यों हो रही है?</strong>
            <p>बहुत ज्यादा compression image में information और detail कम कर देता है। इसलिए file size और image quality के बीच balance रखना जरूरी है।</p>
          </div>
          <div>
            <strong>क्या tool Photoshop का replacement है?</strong>
            <p>Basic resize और compression जैसे कामों के लिए यह एक आसान browser-based alternative है। Advanced photo editing के लिए professional image-editing software की जरूरत पड़ सकती है।</p>
          </div>
          <div>
            <strong>क्या image को resize करने के बाद original image delete हो जाती है?</strong>
            <p>यह tool आपकी original file को edit करने के बजाय processed image तैयार करने के लिए इस्तेमाल किया जाता है। इसलिए original image की एक copy अपने device में रखना अच्छा practice है।</p>
          </div>
          <div>
            <strong>क्या यह CGPSC applications के लिए इस्तेमाल किया जा सकता है?</strong>
            <p>हाँ, image resizing और compression के लिए इस्तेमाल किया जा सकता है। लेकिन CGPSC की किसी specific recruitment में लागू exact photo/signature requirements संबंधित official notification से verify करनी चाहिए।</p>
          </div>
        </div>

        <h2 className="article-section-title">Final Tip</h2>
        <p>Government form में photo या signature upload करते समय सिर्फ <strong>“KB कम करना”</strong> लक्ष्य नहीं होना चाहिए। सही approach है:</p>
        <p><strong>Official Requirement → Correct Dimensions → Appropriate Compression → Clear Image → Final File Size Check</strong></p>
        <p>इससे unnecessary rejection या बार-बार image बनाने की परेशानी कम हो सकती है। <strong>Photo & Signature Resizer का इस्तेमाल करें और अपनी image को recruitment form की requirements के अनुसार तैयार करें। Final upload से पहले संबंधित official notification में दी गई सभी image specifications जरूर verify करें।</strong></p>

        <blockquote style={{ borderLeft: '4px solid #ef4444', paddingLeft: '15px', color: '#991b1b', fontStyle: 'italic', background: '#fef2f2', padding: '15px', marginTop: '30px' }}>
          <strong>Disclaimer:</strong> CGSSB.com.in एक independent informational website है और CGSSB, CG Vyapam, CGPSC या छत्तीसगढ़ सरकार से affiliated नहीं है। किसी भी recruitment के लिए अंतिम और authoritative information संबंधित official notification और official website से ही verify करें।
        </blockquote>
      </section>

    </div>
  );
}
