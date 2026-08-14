async function getLatestJobs() {
  const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000';
  try {
    const res = await fetch(`${baseUrl}/api/jobs`, { cache: 'no-store' });
    if (!res.ok) return [];
    const data = await res.json();
    return data.jobs?.slice(0, 3) || []; // only top 3
  } catch (e) {
    return [];
  }
}

import HomeSeoContent from "@/components/HomeSeoContent";

export default async function Home() {
  const latestPostsList = [
    { title: "नगर सेना अग्निशमन एवं आपातकालीन सेवाएँ तथा एसडीआरएफ के अंतर्गत स्टोर कीपर, वाहन चालक, वाहन चालक कम ऑपरेटर, मैकेनिक एवं वॉचरूम ऑपरेटर पदों की द्वितीय स्तरीय लिखित भर्ती परीक्षा (NSSK26) के ऑनलाइन आवेदन के सम्बंध में विज्ञप्ति", url: "/jobs/cgssb-nssk26-recruitment-2026", date: "11/08/2026" },
    { title: "लोक शिक्षण संचालनालय, छत्तीसगढ़ के अंतर्गत शिक्षक पदों हेतु लिखित भर्ती परीक्षा (LST26) के ऑनलाइन आवेदन के सम्बंध में विज्ञप्ति", url: "https://vyapamcg.cgstate.gov.in/uploads/pdfs/1bfd01b6-79e6-4001-9215-a1adee1e4d25_3409.pdf", date: "07/08/2026" },
    { title: "सहकारिता एवं पंजीयक, सहकारी संस्थाएँ, छत्तीसगढ़ के अंतर्गत उप अंकेक्षक पदों हेतु लिखित भर्ती परीक्षा (COSA26) के अंतिम उत्तर तथा परीक्षा परिणाम जारी करने के सम्बंध में विज्ञप्ति", url: "https://vyapamcg.cgstate.gov.in/uploads/pdfs/81ea548a-776f-4c0e-af38-eb88c60705cf_3304.pdf", date: "30/07/2026" },
    { title: "PAT-2026 for Admission in BSc (Hons.) Agriculture, BSc (Hons.) Horticulture, BSc (Hons.) Forestry, B.Tech (Dairy Technology), Diploma in Animal Husbandry, Diploma in Fisheries Science Entrance Examination के अंतिम उत्तर तथा परीक्षा परिणाम जारी करने के सम्बंध में विज्ञप्ति", url: "https://vyapamcg.cgstate.gov.in/uploads/pdfs/b49bee8a-62a9-4fae-9cf7-3aab1c0b979a_PAT26%20VIGYAPTI.pdf", date: "29/07/2026" },
    { title: "लोक शिक्षण संचालनालय, छत्तीसगढ़ के अंतर्गत सहायक शिक्षक पदों हेतु लिखित भर्ती परीक्षा (LSAT26) के ऑनलाइन आवेदन के सम्बंध में विज्ञप्ति", url: "https://vyapamcg.cgstate.gov.in/uploads/pdfs/b369c8aa-714e-4756-bac1-336fa1bd0e55_Press%20Note%20LSAT26.pdf", date: "24/07/2026" },
    { title: "छत्तीसगढ़ राज्य पात्रता परीक्षा (CG-SET26) के ऑनलाइन आवेदन के सम्बंध में विज्ञप्ति", url: "https://vyapamcg.cgstate.gov.in/uploads/pdfs/c824d445-1aa0-4cac-b61d-cb2c837382a8_3193.jpeg", date: "23/07/2026" },
    { title: "कार्यालय प्रधान मुख्य वन संरक्षक एवं वन बल प्रमुख, छत्तीसगढ़, नवा रायपुर के अंतर्गत वनरक्षक पदों की द्वितीय स्तर की लिखित भर्ती परीक्षा के सम्बंध में", url: "https://vyapamcg.cgstate.gov.in/uploads/pdfs/28424cf3-28ce-4f09-9c8f-0cea1e1f7884_3155.pdf", date: "22/07/2026" },
    { title: "कार्यालय नियंत्रक, खाद्य एवं औषधि प्रशासन, छत्तीसगढ़, नवा रायपुर के अंतर्गत नमूना सहायक / लैब असिस्टेंट (औषधि) / लैब असिस्टेंट (खाद्य) पदों की भर्ती परीक्षा (FWLN26) के ऑनलाइन आवेदन के सम्बंध में विज्ञप्ति .", url: "https://vyapamcg.cgstate.gov.in/uploads/pdfs/47f340f8-59a5-4f41-83c9-9bd222bf83b9_Press%20Note-%20FWLN26.pdf", date: "07/07/2026" },
    { title: "छत्तीसगढ़ राज्य विधिक सेवा प्राधिकरण, बिलासपुर एवं विधि और विधायी कार्य विभाग, मंत्रालय, नवा रायपुर के अंतर्गत सहायक ग्रेड-3/ प्रोसेस राइटर पदों हेतु संयुक्त भर्ती परीक्षा (LAG26) के ऑनलाइन आवेदन के सम्बंध में विज्ञप्ति", url: "https://vyapamcg.cgstate.gov.in/uploads/pdfs/7fb7da05-ae9e-44ae-9970-04fa0788c593_Press%20Note%20LAG26.pdf", date: "01/07/2026" },
    { title: "संचालनालय स्वास्थ्य सेवायें, छत्तीसगढ़ के अंतर्गत ओ.टी. टेक्नीशियन पदों की भर्ती परीक्षा (HOTT26) के ऑनलाइन आवेदन के सम्बंध में विज्ञप्ति", url: "https://vyapamcg.cgstate.gov.in/uploads/pdfs/4e477bea-161a-49ec-9e75-9bc2492b7a7f_2431.pdf", date: "10/06/2026" },
    { title: "छ.ग. राज्य कृषि विपणन (मण्डी) बोर्ड, नवा रायपुर के अंतर्गत उप निरीक्षक पदों की लिखित भर्ती परीक्षा (MBSI26) के अंतिम उत्तर तथा परीक्षा परिणाम जारी करने के सम्बंध में विज्ञप्ति", url: "https://vyapamcg.cgstate.gov.in/uploads/pdfs/f5f3ff95-e432-44a9-b714-c4875c1144e9_2374.pdf", date: "04/06/2026" },
    { title: "जल संसाधन विभाग, नवा रायपुर के अंतर्गत अनुरेखक (सिविल) पदों की लिखित भर्ती परीक्षा (WRDT26) के ऑनलाइन आवेदन के सम्बंध में विज्ञप्ति", url: "https://vyapamcg.cgstate.gov.in/uploads/pdfs/4afaa6b0-c164-4a30-a863-75b4560df1e7_WRDT26%20Press%20Note.pdf", date: "22/05/2026" },
    { title: "मान. छत्तीसगढ़ उच्च न्यायालय, बिलासपुर के अंतर्गत अनुवादक (Translator) पदों हेतु लिखित भर्ती परीक्षा (HCT25) के उपरांत साक्षात्कार के सम्बंध में सूचना एवं सूची", url: "https://vyapamcg.cgstate.gov.in/uploads/pdfs/568e1c26-21ba-48a5-bffc-9e480ada10df_Notice_Trans_250426%20(1).pdf", date: "21/05/2026" },
    { title: "कार्यालय परिवहन आयुक्त, छत्तीसगढ़, नवा रायपुर के अंतर्गत परिवहन आरक्षक पदों की लिखित भर्ती परीक्षा (TDC26) के अंतिम उत्तर तथा परीक्षा परिणाम जारी करने के सम्बंध में विज्ञप्ति", url: "https://vyapamcg.cgstate.gov.in/uploads/pdfs/8cdcbbd1-27e0-4c4d-8d9e-9cbc7e86b8c1_TDC260002.pdf.pdf", date: "19/05/2026" },
    { title: "छत्तीसगढ़ पर्यावरण संरक्षण मंडल, नवा रायपुर के अंतर्गत प्रयोगशाला परिचारक पदों की लिखित भर्ती परीक्षा (PSLA26) के आयोजन के सम्बंध में विज्ञप्ति", url: "https://vyapamcg.cgstate.gov.in/uploads/pdfs/ff2ad66c-d460-42f7-a35d-a0f27bc1e743_Press%20Note%20PSLA26.pdf", date: "14/05/2026" },
    { title: "नगर सेना अग्निशमन एवं आपातकालीन सेवाएँ तथा एसडीआरएफ के अंतर्गत फायरमेन पदों की लिखित भर्ती परीक्षा (NSF26) के आयोजन के सम्बंध में विज्ञप्ति", url: "https://vyapamcg.cgstate.gov.in/uploads/pdfs/6f67df5f-a24d-4c07-a3ae-39777e8b4c6e_Pres%20Note-NSF26.pdf", date: "08/05/2026" },
    { title: "मान. छत्तीसगढ़ उच्च न्यायालय, बिलासपुर के अंतर्गत जूनियर ज्यूडिशियल असिस्टेंट एवं जूनियर ज्यूडिशियल असिस्टेंट (कम्प्यूटर) पदों हेतु लिखित भर्ती परीक्षा (HJJA25) के उपरांत साक्षात्कार के सम्बंध में सूचना एवं सूची", url: "https://vyapamcg.cgstate.gov.in/uploads/pdfs/f56959f5-a8a5-4dca-9a9e-97b66493e16e_6698%20Notice.pdf", date: "13/04/2026" },
    { title: "व्यापम द्वारा वर्ष 2026 में आयोजित की जाने वाली परीक्षाओं का दिनांक 15.10.2025 को जारी कैलेंडर के आरक्षित तिथियों के सम्बंध में विज्ञप्ति", url: "https://vyapamcg.cgstate.gov.in/uploads/pdfs/507de0ff-60e5-4c6c-b6d7-9ac3c9b41591_827.pdf", date: "27/02/2026" },
    { title: "व्यापम द्वारा आयोजित की जाने वाली परीक्षाओं का कैलेंडर अप्रेल 2026 से दिसम्बर 2026 तक", url: "https://vyapamcg.cgstate.gov.in/uploads/pdfs/a9dd0f23-0588-452e-a31c-7a56625db6cb_3161.pdf", date: "15/10/2025" },
    { title: "व्यापम द्वारा आयोजित की जाने वाली परीक्षाओं का कैलेण्डर जनवरी 2026 से मार्च 2026 तक", url: "https://vyapamcg.cgstate.gov.in/uploads/pdfs/c0031f01-8881-4b43-a311-7acb66a07ab3_117.pdf", date: "05/05/2025" }
  ];

  const categories = [
    { title: "CGSSB (Vyapam)", path: "/exams/cgssb", desc: "Latest updates, syllabus, and results" },
    { title: "CGPSC", path: "/exams/cgpsc", desc: "State Services, Forest, AE exams" },
    { title: "Departments", path: "/departments", desc: "Police, Forest, Health, Education" },
    { title: "Chhattisgarh GK", path: "/gk", desc: "History, Geography, Culture, Tribes" },
    { title: "Previous Papers", path: "/previous-paper", desc: "Download PDF of previous exams" },
    { title: "Student Tools", path: "/tools", desc: "Age Calculator, typing test, etc." },
  ];

  return (
    <div className="container" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
      
      {/* Hero Section - Search First */}
      <section style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>
          Chhattisgarh Staff Selection Board Notification
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '30px', maxWidth: '800px', margin: '0 auto 30px' }}>
          Find every job notification, syllabus, cutoff, and study material for Chhattisgarh exams in one place.
        </p>
        
        {/* Semantic Search Form */}
        <form style={{ display: 'flex', justifyContent: 'center', maxWidth: '600px', margin: '0 auto' }}>
          <input 
            type="text" 
            placeholder="Search for Patwari Syllabus, CG Police, Age Calculator..." 
            aria-label="Search across the portal"
            style={{
              flex: 1,
              padding: '16px 24px',
              fontSize: '1rem',
              border: '2px solid var(--color-primary)',
              borderRadius: 'var(--border-radius) 0 0 var(--border-radius)',
              outline: 'none'
            }}
          />
          <button 
            type="submit"
            style={{
              padding: '0 30px',
              backgroundColor: 'var(--color-primary)',
              color: 'var(--text-light)',
              border: 'none',
              borderRadius: '0 var(--border-radius) var(--border-radius) 0',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            Search
          </button>
        </form>
      </section>

      {/* News Flash Marquee */}
      <div className="marquee-container" style={{ margin: '0 auto 50px', borderRadius: '4px', maxWidth: '800px' }}>
        <div className="marquee-content" style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
          <span>🔥 <a href="https://vyapamprofile.cgstate.gov.in/Online" target="_blank" rel="noopener noreferrer" style={{ color: '#ffeb3b', textDecoration: 'none' }}>Admit Card - जल संसाधन विभाग, अनुरेखक (सिविल) (WRDT26) के प्रवेश पत्र के सम्बंध में विज्ञप्ति</a></span>
          <span>🔥 <a href="https://vyapamcg.cgstate.gov.in/Post?PostID=RESULT" target="_blank" rel="noopener noreferrer" style={{ color: '#ffeb3b', textDecoration: 'none' }}>RESULT - प्री.बी.एड. (Pre. B.Ed.26) प्रवेश परीक्षा - 2026</a></span>
          <span>🔥 <a href="https://vyapamcg.cgstate.gov.in/Post?PostID=PSLA26ONLINE" target="_blank" rel="noopener noreferrer" style={{ color: '#ffeb3b', textDecoration: 'none' }}>ONLINE APPLICATION - नमूना सहायक /लैब असिस्टेंट (औषधि) / लैब असिस्टेंट (खाद्य) पदों की भर्ती परीक्षा (FWLN26)</a></span>
          <span>🔥 <a href="https://vyapamcg.cgstate.gov.in/Post?PostID=WRDT26ONLINE" target="_blank" rel="noopener noreferrer" style={{ color: '#ffeb3b', textDecoration: 'none' }}>ONLINE APPLICATION- सहायक शिक्षक पदों हेतु लिखित भर्ती परीक्षा (LSAT26)</a></span>
          <span>🔥 <a href="https://vyapamcg.cgstate.gov.in/Post?PostID=MLGI25APPLICATION" target="_blank" rel="noopener noreferrer" style={{ color: '#ffeb3b', textDecoration: 'none' }}>ONLINE APPLICATION - छत्तीसगढ़ राज्य पात्रता परीक्षा (CG-SET26)</a></span>
          <span>🔥 <a href="https://vyapamcg.cgstate.gov.in/Post?PostID=RESULT" target="_blank" rel="noopener noreferrer" style={{ color: '#ffeb3b', textDecoration: 'none' }}>RESULT -B.Sc. Nursing (BSCN26) Entrance Examination-2026</a></span>
        </div>
      </div>

      {/* Latest Posts Section */}
      <section style={{ marginBottom: '60px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid var(--border-color)', paddingBottom: '10px', marginBottom: '24px' }}>
          <h2 style={{ fontSize: '1.8rem', margin: 0 }}>Latest Posts</h2>
        </div>
        
        <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {latestPostsList.map((post, idx) => (
              <li key={idx} style={{ 
                borderBottom: idx !== latestPostsList.length - 1 ? '1px solid var(--border-color)' : 'none',
                padding: '16px 24px',
                display: 'flex',
                gap: '20px',
                alignItems: 'center',
                transition: 'background-color 0.2s',
              }}>
                <span style={{ 
                  whiteSpace: 'nowrap', 
                  fontSize: '0.85rem', 
                  color: 'var(--text-light)', 
                  backgroundColor: 'var(--color-primary)',
                  padding: '6px 10px',
                  borderRadius: '6px',
                  fontWeight: '600',
                  minWidth: '95px',
                  textAlign: 'center'
                }}>
                  {post.date}
                </span>
                <a href={post.url} target="_blank" rel="noopener noreferrer" style={{ 
                  color: 'var(--text-main)', 
                  textDecoration: 'none',
                  fontSize: '1rem',
                  lineHeight: '1.5',
                  fontWeight: '500',
                  display: 'block',
                  flex: 1
                }}>
                  {post.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Important Rules & Circulars */}
      <section style={{ marginBottom: '60px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ color: 'var(--color-primary)' }}>📌</span> महत्वपूर्ण नियम व अधिसूचनाएँ (Important Rules)
          </h2>
        </div>
        
        <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ padding: '16px 24px', borderBottom: '1px solid var(--border-color)', display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '1.2rem', marginTop: '2px' }}>📜</span>
              <a href="https://gad.cg.gov.in/statecirculars/Criculars/Scan-file-2000-2002/year2026/202600209_001.pdf" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: '500', lineHeight: '1.5' }} className="hover-primary">
                अधिसूचना 19.06.2026 - सीधी भर्ती के माध्यम से भरे जाने वाले तृतीय एवं चतुर्थ श्रेणी के पदों की न्यूनतम शैक्षणिक योग्यता का निर्धारण ।
              </a>
            </li>
            <li style={{ padding: '16px 24px', borderBottom: '1px solid var(--border-color)', display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '1.2rem', marginTop: '2px' }}>📜</span>
              <a href="https://gad.cg.gov.in/statecirculars/Criculars/Scan-file-2000-2002/year2026/202600291_001.pdf" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: '500', lineHeight: '1.5' }} className="hover-primary">
                अधिसूचना 27.07.2026 - सीधी भर्ती के माध्यम से भरे जाने वाले तृतीय एवं चतुर्थ श्रेणी के पदों की न्यूनतम शैक्षणिक योग्यता निर्धारण हेतु जारी अधिसूचना दिनांक 19.06.2026 में संशोधन विषयक ।
              </a>
            </li>
            <li style={{ padding: '16px 24px', display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '1.2rem', marginTop: '2px' }}>📜</span>
              <a href="https://vyapamcg.cgstate.gov.in/uploads/pdfs/146e4756-b636-4568-8aee-3d3dd6107c28.pdf" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: '500', lineHeight: '1.5' }} className="hover-primary">
                अधिसूचना 25.02.2026 - समाज कल्याण विभाग, छत्तीसगढ़ शासन दिव्यांगजन अधिकार अधिनियम, 2016 के अंतर्गत बेंचमार्क दिव्यांगजनों हेतु पदों का चिन्हांकन
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Grid Categories Section */}
      <section>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '24px', borderBottom: '2px solid var(--border-color)', paddingBottom: '10px' }}>
          Explore by Category
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '24px' 
        }}>
          {categories.map((cat, idx) => (
            <a href={cat.path} key={idx} className="card" style={{ display: 'block' }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary)' }}>{cat.title}</h3>
              <p style={{ margin: 0 }}>{cat.desc}</p>
            </a>
          ))}
        </div>
      </section>

      {/* SEO Content */}
      <HomeSeoContent />

    </div>
  );
}
