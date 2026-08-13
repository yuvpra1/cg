import TypingTest from '@/components/TypingTest';

export const metadata = {
  title: 'Typing Speed Test (WPM & KPH) for Govt Exams | CGSSB',
  description: 'Practice your typing speed for CG Vyapam Assistant Grade 3 and Data Entry Operator (DEO) exams. Calculate WPM, Accuracy, and Key Depressions per Hour (KPH).',
};

export default function TypingTestPage() {
  return (
    <div className="container" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
      
      {/* Tool Header */}
      <section style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>
          Govt Exam Typing Speed Test
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto' }}>
          Master your typing skills for Assistant Grade-3, Steno, and Data Entry Operator exams. This tool accurately measures your Words Per Minute (WPM), Accuracy, and Key Depressions Per Hour (KPH).
        </p>
      </section>

      {/* Test Interface */}
      <section>
        <TypingTest />
      </section>

      {/* SEO Content / Instructions */}
      <section style={{ marginTop: '60px', maxWidth: '800px', margin: '60px auto 0' }}>
        <h2>CGSSB Typing Requirements</h2>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '20px' }}>
          For most clerical positions in Chhattisgarh, the basic requirement is a data entry speed of <strong>5000 Key Depressions per hour (KPH)</strong>. For some specialized roles like DEO or Stenographer, it can go up to 8000 KPH or 30 Words Per Minute (WPM).
        </p>
        
        <h3>Tips to Improve Accuracy:</h3>
        <ul style={{ paddingLeft: '20px', color: 'var(--text-muted)', lineHeight: '1.8' }}>
          <li>Always prioritize <strong>Accuracy</strong> over Speed. If you type fast but make many mistakes, your net WPM will drastically reduce.</li>
          <li>Do not look at the keyboard. Practice touch typing.</li>
          <li>Maintain a consistent rhythm rather than typing in bursts.</li>
        </ul>
      </section>

    </div>
  );
}
