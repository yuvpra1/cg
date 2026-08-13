export const metadata = {
  title: 'Disclaimer | CGSSB',
  description: 'Disclaimer regarding the information provided on CGSSB.',
};

export default function Disclaimer() {
  return (
    <div className="container" style={{ padding: '60px 20px', maxWidth: '800px' }}>
      <div className="card">
        <h1 style={{ marginBottom: '20px' }}>Disclaimer</h1>
        <p>
          <strong>CGSSB is an independent educational portal and is NOT affiliated with, endorsed by, or connected to the Chhattisgarh Government, CGSSB (Vyapam), CGPSC, or any other government agency.</strong>
        </p>
        <p>
          All the information on this website - cgssb.com.in - is published in good faith and for general information purpose only. CGSSB does not make any warranties about the completeness, reliability and accuracy of this information. 
        </p>
        <p>
          Any action you take upon the information you find on this website (CGSSB), is strictly at your own risk. CGSSB will not be liable for any losses and/or damages in connection with the use of our website.
        </p>
        <p>
          Please always cross-check the recruitment notifications, syllabus, and dates with the official respective government websites before making any decisions.
        </p>
      </div>
    </div>
  );
}
