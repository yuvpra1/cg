import PercentageCalculator from '@/components/PercentageCalculator';

export const metadata = {
  title: 'Marks Percentage Calculator for Govt Exams | CGSSB',
  description: 'Quickly calculate your 10th, 12th, or Graduation marks percentage for CGSSB, CGPSC, and other online application forms.',
};

export default function PercentageCalculatorPage() {
  return (
    <div className="container" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
      
      {/* Tool Header */}
      <section style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>
          Marks Percentage Calculator
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
          Most online application forms for CGSSB (Vyapam) and CGPSC require you to enter your exact academic percentage. Use this tool to calculate your marks percentage instantly.
        </p>
      </section>

      {/* Calculator Interface */}
      <section>
        <PercentageCalculator />
      </section>

      {/* SEO Content / Instructions */}
      <section style={{ marginTop: '60px', maxWidth: '800px', margin: '60px auto 0' }}>
        <h2>How to calculate marks percentage?</h2>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '20px' }}>
          To calculate your percentage, divide your obtained marks by the total maximum marks and multiply the result by 100. Our tool does this automatically and provides the result rounded to two decimal places, exactly as required by government forms.
        </p>
        <ul style={{ paddingLeft: '20px', color: 'var(--text-muted)', lineHeight: '1.8' }}>
          <li><strong>Obtained Marks:</strong> The total marks you scored in the exam.</li>
          <li><strong>Total Marks:</strong> The maximum possible marks for the exam (e.g., 500 or 600).</li>
        </ul>
      </section>

    </div>
  );
}
