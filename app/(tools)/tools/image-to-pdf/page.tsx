import ImageToPdf from '@/components/ImageToPdf';

export const metadata = {
  title: 'Image to PDF Converter for Govt Jobs | CGSSB',
  description: 'Convert your JPG/PNG marksheets and documents to PDF format directly in your browser. 100% free and secure tool for CGSSB and CGPSC forms.',
};

export default function ImageToPdfPage() {
  return (
    <div className="container" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
      
      {/* Tool Header */}
      <section style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>
          Image to PDF Converter
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto' }}>
          Many government job portals require you to upload your 10th/12th marksheets and caste certificates in PDF format. Just click a photo of your document and use this tool to securely convert it into a PDF instantly.
        </p>
      </section>

      {/* Tool Interface */}
      <section>
        <ImageToPdf />
      </section>

      {/* SEO Content / Instructions */}
      <section style={{ marginTop: '60px', maxWidth: '800px', margin: '60px auto 0' }} className="content-paragraph">
        <h2 className="article-section-title">Image to PDF Converter – Photo को PDF में बदलें</h2>
        <p>
          Government job applications में कई बार <strong>10th marksheet, 12th marksheet, caste certificate, domicile certificate, ID proof या दूसरे documents</strong> को PDF format में upload करने की जरूरत पड़ सकती है। अगर आपके पास document की सिर्फ photo है, तो उसे PDF में बदलने के लिए किसी complicated software की जरूरत नहीं है।
        </p>
        <p>
          <strong>CGSSB.com.in का Image to PDF Converter</strong> आपको JPG या PNG image को PDF file में बदलने में मदद करता है। आप अपने phone या computer से document की image select करें और उसे PDF में convert कर सकते हैं।
        </p>
        <p>
          यह tool खास तौर पर उन students और job seekers के लिए उपयोगी है जो online government forms भरते समय documents को PDF format में तैयार करना चाहते हैं।
        </p>
        <blockquote style={{ borderLeft: '4px solid var(--color-primary)', paddingLeft: '15px', color: 'var(--text-main)', fontStyle: 'italic', background: 'var(--card-bg-hover)', padding: '15px' }}>
          <strong>Important:</strong> किसी भी recruitment form में document का required format, maximum file size, page limit और अन्य specifications हमेशा संबंधित official notification/application instructions से verify करें।
        </blockquote>

        <h2 className="article-section-title">Image to PDF Converter क्या है?</h2>
        <p>Image to PDF Converter एक browser-based tool है जिसकी मदद से आप किसी image को PDF document में बदल सकते हैं। उदाहरण के लिए आपके phone में किसी document की photo है:</p>
        <p><strong>JPG/PNG Image → PDF Document</strong></p>
        <p>इसका इस्तेमाल marksheet, certificate, scanned document या अन्य suitable images को PDF format में तैयार करने के लिए किया जा सकता है।</p>

        <h2 className="article-section-title">Government Forms में Image को PDF में क्यों बदलना पड़ता है?</h2>
        <p>Online application forms में documents upload करने के लिए recruitment authority अलग-अलग file formats स्वीकार कर सकती है। कई applications में candidate से documents को <strong>PDF format</strong> में upload करने के लिए कहा जा सकता है। ऐसे समय अगर आपके पास document की केवल JPG या PNG photo है, तो उसे पहले PDF में convert करना पड़ता है।</p>
        <p>उदाहरण के तौर पर आपके पास:</p>
        <ul>
          <li>10th marksheet की photo</li>
          <li>12th marksheet की photo</li>
          <li>Caste certificate की scanned image</li>
          <li>Domicile certificate की image</li>
          <li>Income certificate की image</li>
          <li>अन्य educational documents</li>
        </ul>
        <p>हो सकते हैं। अगर official application में PDF upload करने के लिए कहा गया है, तो इन images को PDF में convert किया जा सकता है।</p>

        <h2 className="article-section-title">Image को PDF में कैसे Convert करें?</h2>
        <p>इस tool को इस्तेमाल करने की प्रक्रिया काफी simple है।</p>

        <h3>Step 1: Document की Clear Photo लें</h3>
        <p>सबसे पहले अपने document की साफ और readable photo लें। Photo लेते समय कोशिश करें कि:</p>
        <ul>
          <li>पूरा document frame में हो</li>
          <li>कोई जरूरी हिस्सा crop न हो</li>
          <li>text clearly दिखाई दे</li>
          <li>image बहुत dark या overexposed न हो</li>
          <li>document पर unnecessary shadow न हो</li>
        </ul>
        <p>अगर document के चारों corners दिखाई दे रहे हैं, तो बाद में उसे PDF में इस्तेमाल करना आसान रहेगा।</p>

        <h3>Step 2: Upload Image/Document पर Click करें</h3>
        <p>अब <strong>Upload Image/Document</strong> button पर click करें। अपने phone या computer से JPG या PNG image select करें।</p>

        <h3>Step 3: Convert to PDF पर Click करें</h3>
        <p>Image select करने के बाद <strong>Convert to PDF</strong> button पर click करें। Tool आपकी selected image को PDF format में convert करेगा।</p>

        <h3>Step 4: PDF को Download करें</h3>
        <p>Conversion complete होने के बाद तैयार PDF को download करके अपने device में save कर लें। अब इस PDF को उस application form में upload किया जा सकता है जहां PDF format स्वीकार किया जाता है।</p>

        <h2 className="article-section-title">Marksheet की Photo को PDF में बदलते समय क्या ध्यान रखें?</h2>
        <p>अगर आप 10th या 12th marksheet को PDF में convert कर रहे हैं, तो सबसे important चीज <strong>readability</strong> है। PDF बन जाने के बाद उसे एक बार खोलकर जरूर देखें।</p>
        <p>Check करें:</p>
        <ul>
          <li><strong>क्या नाम साफ दिखाई दे रहा है?</strong></li>
          <li><strong>क्या roll number पढ़ा जा रहा है?</strong></li>
          <li><strong>क्या marks और subjects clearly दिखाई दे रहे हैं?</strong></li>
          <li><strong>क्या certificate का पूरा हिस्सा मौजूद है?</strong></li>
        </ul>
        <p>अगर original image ही blurry है, तो PDF में convert करने के बाद भी text clear नहीं होगा। इसलिए खराब image को सिर्फ PDF में convert करने से document की quality बेहतर नहीं हो जाती।</p>

        <h2 className="article-section-title">Caste Certificate को PDF में Convert करते समय</h2>
        <p>Caste certificate जैसे documents में candidate की personal और official information हो सकती है। इसलिए PDF बनाने से पहले यह जरूर check करें कि:</p>
        <ul>
          <li>पूरा certificate capture हुआ है</li>
          <li>document का कोई हिस्सा कट नहीं गया</li>
          <li>text readable है</li>
          <li>certificate number या अन्य जरूरी details दिखाई दे रही हैं</li>
          <li>final PDF सही document का है</li>
        </ul>
        <p>और सबसे जरूरी बात—जिस recruitment में certificate upload करना है, वहां <strong>certificate format और validity requirements</strong> भी जरूर देखें।</p>

        <h2 className="article-section-title">क्या Mobile से Image को PDF में बदल सकते हैं?</h2>
        <p>हाँ। अगर आपके पास document की image phone में saved है, तो browser से इस type के tool का इस्तेमाल किया जा सकता है। Basic process:</p>
        <p><strong>Document Photo → Upload → Convert to PDF → Download</strong></p>
        <p>इसलिए केवल PDF बनाने के लिए computer या किसी heavy application की जरूरत नहीं पड़ती।</p>

        <h2 className="article-section-title">क्या Scanned Document और Camera Photo दोनों इस्तेमाल किए जा सकते हैं?</h2>
        <p>अगर image JPG या PNG format में है, तो वह image-to-PDF conversion के लिए इस्तेमाल की जा सकती है। आपके पास document:</p>
        <ul>
          <li>scanner से scan किया हुआ हो</li>
          <li>phone camera से लिया हुआ हो</li>
          <li>किसी image file के रूप में saved हो</li>
        </ul>
        <p>तो उसे PDF format में convert किया जा सकता है। हालांकि final document की quality मुख्य रूप से <strong>original image की quality</strong> पर निर्भर करेगी।</p>

        <h2 className="article-section-title">PDF बनाने से पहले Document की Photo कैसे लें?</h2>
        <p>अगर आप marksheet या certificate की photo लेने वाले हैं, तो कुछ छोटी बातों का ध्यान रखने से final PDF काफी बेहतर बन सकती है।</p>
        <h3>अच्छी lighting रखें</h3>
        <p>Document पर तेज shadow नहीं होनी चाहिए।</p>
        <h3>Camera को सीधा रखें</h3>
        <p>Photo बहुत ज्यादा tilted होने पर document पढ़ना मुश्किल हो सकता है।</p>
        <h3>पूरा page capture करें</h3>
        <p>Document के edges और corners को crop न करें।</p>
        <h3>Camera lens साफ रखें</h3>
        <p>Dirty camera lens से text blurry दिखाई दे सकता है।</p>
        <h3>Highest practical quality रखें</h3>
        <p>बहुत कम resolution वाली photo लेने से छोटे text पढ़ने में समस्या हो सकती है।</p>

        <h2 className="article-section-title">Image को PDF में Convert करने के बाद क्या Check करें?</h2>
        <p>PDF download करने से पहले या application में upload करने से पहले एक quick check करना अच्छा रहता है।</p>
        <h3>1. पूरा document है?</h3>
        <p>कोई corner या important section missing नहीं होना चाहिए।</p>
        <h3>2. Text readable है?</h3>
        <p>Zoom करके देख लें कि छोटे letters और numbers पढ़े जा रहे हैं।</p>
        <h3>3. सही document है?</h3>
        <p>कई files होने पर गलत marksheet या certificate upload होने की संभावना रहती है।</p>
        <h3>4. File size सही है?</h3>
        <p>अगर recruitment portal ने maximum PDF size निर्धारित की है, तो final PDF की size check करें।</p>
        <h3>5. Format सही है?</h3>
        <p>अगर portal ने specifically PDF मांगा है, तो JPG/PNG की जगह converted PDF upload करें।</p>

        <h2 className="article-section-title">अगर PDF की File Size बहुत ज्यादा हो तो?</h2>
        <p>Image को PDF में convert करने के बाद file size कभी-कभी बड़ी हो सकती है, खासकर तब जब original image high resolution में हो। अगर recruitment portal ने maximum file size निर्धारित की है और आपकी PDF उससे बड़ी है, तो केवल conversion पर्याप्त नहीं होगा। ऐसी स्थिति में आपको PDF को <strong>compress</strong> करना पड़ सकता है।</p>
        <p>लेकिन compression करते समय document की readability खराब नहीं होनी चाहिए। विशेष रूप से marksheet और certificates में बहुत ज्यादा compression करने से छोटे text, numbers या seals अस्पष्ट हो सकते हैं।</p>

        <h2 className="article-section-title">क्या यह Tool Documents को Server पर Upload करता है?</h2>
        <p>आपके tool का उद्देश्य <strong>browser-side conversion</strong> है, यानी image को आपके browser में ही PDF में process करना। इस approach का फायदा यह है कि document को सामान्य server-side conversion workflow में upload करने की जरूरत नहीं पड़ती।</p>
        <p>अगर हमारा converter पूरी तरह client-side है और image किसी server/API पर भेजी ही नहीं जाती, तो आप निश्चिंत रह सकते हैं:</p>
        <blockquote style={{ borderLeft: '4px solid var(--color-primary)', paddingLeft: '15px', color: 'var(--text-main)', fontStyle: 'italic', background: 'var(--card-bg-hover)', padding: '15px' }}>
          <strong>Your image is processed locally in your browser and is not uploaded to our server.</strong>
        </blockquote>

        <h2 className="article-section-title">Government Job Applications के लिए यह Tool कब उपयोगी है?</h2>
        <p>यह tool खास तौर पर तब उपयोगी हो सकता है जब application portal में किसी document को PDF format में upload करने की जरूरत हो। उदाहरण:</p>
        <p><strong>आपके पास:</strong> 10th marksheet.jpg<br/>
        <strong>Application में चाहिए:</strong> 10th marksheet.pdf</p>
        <p>तो आप image को converter में डालकर PDF बना सकते हैं। इसी तरह <strong>Caste Certificate.jpg → Caste Certificate.pdf</strong> या <strong>12th Marksheet.png → 12th Marksheet.pdf</strong> जैसे conversions किए जा सकते हैं।</p>

        <h2 className="article-section-title">एक से ज्यादा Pages का क्या?</h2>
        <p>अगर किसी certificate या document की multiple pages हैं, तो application की instructions को ध्यान से देखें। कई portals में:</p>
        <ul>
          <li>केवल एक PDF मांगी जा सकती है</li>
          <li>multiple pages की एक PDF मांगी जा सकती है</li>
          <li>maximum file size निर्धारित हो सकती है</li>
          <li>केवल specific document page upload करने को कहा जा सकता है</li>
        </ul>
        <p>इसलिए multiple images को एक PDF में जोड़ने की जरूरत हो तो पहले संबंधित portal की instructions check करें। <strong>एक page की image को PDF में बदलना और multiple images को एक single PDF में merge करना अलग-अलग requirements हो सकती हैं।</strong></p>

        <h2 className="article-section-title">Common Mistakes जो Candidates को Avoid करनी चाहिए</h2>
        <ul>
          <li><strong>❌ Blurry Photo को PDF में Convert करना:</strong> PDF बनने के बाद भी blurry text blurry ही रहेगा।</li>
          <li><strong>❌ Document का हिस्सा Crop कर देना:</strong> Certificate का कोई important हिस्सा missing हो सकता है।</li>
          <li><strong>❌ File Size Limit Check न करना:</strong> PDF सही होने के बावजूद portal उसे reject कर सकता है।</li>
          <li><strong>❌ Wrong Document Upload करना:</strong> Application submit करने से पहले file को खोलकर verify करें।</li>
          <li><strong>❌ Official Requirements को Ignore करना:</strong> हर recruitment में PDF की requirements अलग हो सकती हैं।</li>
        </ul>

        <h2 className="article-section-title">Image to PDF Converter के फायदे</h2>
        <ul>
          <li><strong>आसान प्रक्रिया:</strong> किसी complicated software की जरूरत नहीं।</li>
          <li><strong>Browser में काम करता है:</strong> Computer या mobile browser से इस्तेमाल किया जा सकता है।</li>
          <li><strong>Students के लिए useful:</strong> Marksheets और certificates को application-ready format में तैयार करने में मदद करता है।</li>
          <li><strong>Quick Conversion:</strong> Image select करके PDF तैयार किया जा सकता है।</li>
          <li><strong>Local Processing:</strong> Document को server पर upload किए बिना conversion किया जा सकता है।</li>
        </ul>

        <h2 className="article-section-title">Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <strong>Image to PDF Converter क्या करता है?</strong>
            <p>यह JPG या PNG जैसी image को PDF format में convert करने में मदद करता है।</p>
          </div>
          <div>
            <strong>क्या 10th marksheet को PDF बना सकते हैं?</strong>
            <p>हाँ। अगर आपके पास marksheet की suitable JPG/PNG image है, तो उसे PDF में convert किया जा सकता है।</p>
          </div>
          <div>
            <strong>क्या 12th marksheet को PDF में बदल सकते हैं?</strong>
            <p>हाँ। इसी तरह 12th marksheet की image को PDF format में convert किया जा सकता है।</p>
          </div>
          <div>
            <strong>क्या caste certificate को PDF बना सकते हैं?</strong>
            <p>हाँ, अगर certificate की image JPG/PNG format में है। हालांकि final upload से पहले संबंधित recruitment/application की document requirements जरूर check करें।</p>
          </div>
          <div>
            <strong>क्या mobile से PDF बना सकते हैं?</strong>
            <p>हाँ। अगर tool mobile browser पर उपलब्ध है, तो phone से image select करके PDF तैयार किया जा सकता है।</p>
          </div>
          <div>
            <strong>क्या PDF बनने के बाद document की quality बढ़ जाती है?</strong>
            <p>नहीं। PDF conversion केवल format बदलता है। अगर original image blurry या low-quality है, तो PDF भी वैसी ही दिखाई दे सकती है।</p>
          </div>
          <div>
            <strong>मेरी PDF बहुत बड़ी हो गई है, क्या करूं?</strong>
            <p>अगर portal ने maximum file-size निर्धारित की है, तो PDF को appropriate तरीके से compress करना पड़ सकता है। Compression के बाद document की readability जरूर check करें।</p>
          </div>
          <div>
            <strong>क्या सभी government forms में PDF ही चाहिए?</strong>
            <p>नहीं। हर recruitment portal की requirements अलग हो सकती हैं। कहीं PDF, कहीं JPG/JPEG और कहीं अन्य format मांगा जा सकता है।</p>
          </div>
          <div>
            <strong>क्या इस tool से ID proof भी PDF बनाया जा सकता है?</strong>
            <p>अगर image supported format में है, तो उसे PDF में convert किया जा सकता है। लेकिन sensitive documents को upload करने से पहले tool की privacy और processing method समझना अच्छा है।</p>
          </div>
        </div>

        <h2 className="article-section-title">Final Checklist</h2>
        <p>किसी government application में PDF upload करने से पहले:</p>
        <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
          <li>✓ Official notification पढ़ें</li>
          <li>✓ Required format check करें</li>
          <li>✓ Maximum file size check करें</li>
          <li>✓ पूरा document दिखाई दे रहा है या नहीं देखें</li>
          <li>✓ Text readable है या नहीं check करें</li>
          <li>✓ सही document select किया है या नहीं verify करें</li>
          <li>✓ Final PDF खोलकर एक बार जरूर देखें</li>
        </ul>

        <h3>Final Note</h3>
        <p>Image को PDF में बदलना technically एक छोटा काम है, लेकिन government application में uploaded document की <strong>clarity, completeness, file format और file size</strong> महत्वपूर्ण हो सकते हैं। इसलिए केवल PDF बना लेना पर्याप्त नहीं है। Final file को upload करने से पहले संबंधित recruitment portal की instructions के साथ उसे जरूर compare करें。</p>
        <p><strong>CGSSB.com.in का Image to PDF Converter</strong> इसी तरह के basic document-conversion काम को आसान बनाने के लिए बनाया गया है, ताकि students और job seekers बिना किसी heavy software के अपनी image को PDF format में तैयार कर सकें।</p>
      </section>

    </div>
  );
}
