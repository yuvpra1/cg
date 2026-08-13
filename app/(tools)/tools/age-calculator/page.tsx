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
      <section style={{ marginTop: '60px', maxWidth: '800px', margin: '60px auto 0' }}>
        <h2>How to use this Age Calculator?</h2>
        <ol style={{ paddingLeft: '20px', color: 'var(--text-muted)', marginBottom: '30px', lineHeight: '1.8' }}>
          <li>Select your Date of Birth (DOB) from your 10th marksheet.</li>
          <li>Enter the Target Date exactly as mentioned in the official job notification.</li>
          <li>Click Calculate to get your exact age. Compare this with the minimum and maximum age limits of the vacancy.</li>
        </ol>

        <h2>Why is accurate age calculation important for CGSSB & CGPSC?</h2>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
          In Chhattisgarh government exams like CG Police, Patwari, or State Services, age relaxation rules apply for SC, ST, OBC, and female candidates. However, the base calculation must be flawless. Even a difference of one day can determine your eligibility for an exam. This tool ensures 100% accuracy based on the standard calendar calculations used by government boards.
        </p>
      </section>

    </div>
  );
}
