import Link from 'next/link';

export const metadata = {
  title: 'Student Tools & Calculators | CGSSB',
  description: 'Free online tools for Chhattisgarh students: Age Calculator, Percentage Calculator, Typing Test, and more.',
};

export default function ToolsDirectoryPage() {
  const tools = [
    { 
      title: "Exam Age Calculator", 
      path: "/tools/age-calculator", 
      desc: "Calculate your exact age in years, months, and days for exam forms." 
    },
    { 
      title: "Percentage Calculator", 
      path: "/tools/percentage-calculator", 
      desc: "Instantly calculate your 10th/12th/Degree percentage." 
    },
    { 
      title: "Typing Speed Test", 
      path: "/tools/typing-test", 
      desc: "Practice Hindi/English typing for Assistant Grade 3 & DEO exams." 
    },
    {
      title: "Photo & Signature Resizer",
      path: "/tools/photo-resizer",
      desc: "Compress your passport photo & signature to 50KB for Vyapam forms."
    },
    {
      title: "Image to PDF Converter",
      path: "/tools/image-to-pdf",
      desc: "Convert your marksheet photos directly to PDF safely in your browser."
    }
  ];

  return (
    <div className="container" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '15px', textAlign: 'center' }}>
        Student Tools
      </h1>
      <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto 50px', textAlign: 'center' }}>
        Free utilities designed specifically to help CGSSB and CGPSC aspirants in their application and preparation journey.
      </p>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '24px' 
      }}>
        {tools.map((tool, idx) => (
          <Link href={tool.path} key={idx} className="card" style={{ display: 'block' }}>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--color-primary)', marginBottom: '10px' }}>{tool.title}</h2>
            <p style={{ margin: 0 }}>{tool.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
