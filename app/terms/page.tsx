export const metadata = {
  title: 'Terms and Conditions | CGSSB',
  description: 'Terms and Conditions for using the CGSSB portal.',
};

export default function TermsAndConditions() {
  return (
    <div className="container" style={{ padding: '60px 20px', maxWidth: '800px' }}>
      <div className="card">
        <h1 style={{ marginBottom: '20px' }}>Terms and Conditions</h1>
        <p>Last updated: January 2026</p>
        <p>
          Welcome to CGSSB! By accessing this website we assume you accept these terms and conditions. Do not continue to use CGSSB if you do not agree to take all of the terms and conditions stated on this page.
        </p>
        
        <h2 style={{ marginTop: '30px', marginBottom: '15px' }}>Information Accuracy</h2>
        <p>
          The information provided on this website is for general informational purposes only. While we strive to keep the information up to date and correct, we make no representations or warranties of any kind about the completeness, accuracy, or reliability of the job notifications and syllabus. Always verify details with official government portals.
        </p>

        <h2 style={{ marginTop: '30px', marginBottom: '15px' }}>License</h2>
        <p>
          Unless otherwise stated, CGSSB and/or its licensors own the intellectual property rights for all material on CGSSB. All intellectual property rights are reserved. You may access this from CGSSB for your own personal use subjected to restrictions set in these terms and conditions.
        </p>
      </div>
    </div>
  );
}
