export const metadata = {
  title: 'About Us | CG Knowledge',
  description: 'Learn about CG Knowledge, the premier education and career portal for Chhattisgarh students.',
};

export default function AboutUs() {
  return (
    <div className="container" style={{ padding: '60px 20px', maxWidth: '800px' }}>
      <div className="card">
        <h1 style={{ marginBottom: '20px' }}>About Us</h1>
        <p>
          Welcome to <strong>CG Knowledge</strong>, your number one source for all government job updates, exam syllabus, previous year papers, and study materials specific to Chhattisgarh.
        </p>
        <p>
          We are dedicated to giving you the very best and most accurate information, with a focus on fast updates, easy accessibility, and a student-first approach.
        </p>
        <p>
          Our mission is to bridge the information gap for students preparing for CGSSB (Vyapam), CGPSC, and various department exams like CG Police and Forest Services. We understand the challenges students face, and our portal is built to make your preparation journey smoother.
        </p>
        <h2 style={{ marginTop: '30px', marginBottom: '15px' }}>Contact Us</h2>
        <p>If you have any questions or comments, please do not hesitate to contact us at support@cgknowledge.in.</p>
      </div>
    </div>
  );
}
