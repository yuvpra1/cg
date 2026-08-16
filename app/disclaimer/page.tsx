import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer | CGSSB.com.in',
  description: 'Disclaimer for CGSSB.com.in.',
};

export default function Disclaimer() {
  return (
    <div className="container" style={{ paddingTop: '60px', paddingBottom: '60px', maxWidth: '800px' }}>
      <article className="card" style={{ padding: '40px', lineHeight: '1.8' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '10px', color: 'var(--color-primary)' }}>Disclaimer</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}><strong>Last Updated: 16 August 2026</strong></p>

        <div className="content-wrapper" style={{ color: 'var(--text-main)', fontSize: '1.05rem' }}>
          <p>The information published on CGSSB.com.in is provided for general informational and educational purposes.</p>
          <p>CGSSB.com.in is an independent website and is not affiliated with, operated by, authorized by, sponsored by or officially endorsed by the Chhattisgarh Staff Selection Board (CGSSB), Chhattisgarh Vyapam or any other government department or authority.</p>

          <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', color: 'var(--color-primary)' }}>Government Recruitment Information</h2>
          <p>We publish information about government jobs, recruitment notifications, examinations, admit cards, results, syllabus, answer keys and related educational updates.</p>
          <p>We try to obtain and verify information from official government notifications and other reliable sources before publishing an article.</p>
          <p>However, government authorities may change:</p>
          <ul className="premium-list">
            <li>Vacancy numbers</li>
            <li>Eligibility criteria</li>
            <li>Age limits</li>
            <li>Application dates</li>
            <li>Examination dates</li>
            <li>Syllabus</li>
            <li>Examination pattern</li>
            <li>Reservation rules</li>
            <li>Selection procedures</li>
            <li>Other recruitment conditions</li>
          </ul>
          <p>Therefore, users should always check the latest official notification before making any decision or submitting an application.</p>

          <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', color: 'var(--color-primary)' }}>Official Notification is Final</h2>
          <p>If any difference exists between information published on CGSSB.com.in and an official government notification, the official government notification shall be treated as the final and authoritative source.</p>
          <p>Our website is intended to make government information easier for students and job seekers to understand. It does not replace the original notification.</p>

          <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', color: 'var(--color-primary)' }}>Information Errors</h2>
          <p>Although we make reasonable efforts to check the information we publish, an error or outdated detail may occasionally occur.</p>
          <p>If you find a factual error, outdated information or incorrect link, please inform us.</p>
          <p>We will review the information against the relevant official source and, where appropriate, correct or update the article.</p>
          <p><strong>Report a Correction:</strong> <a href="mailto:contact@cgssb.com.in" style={{ color: 'var(--color-primary)' }}>contact@cgssb.com.in</a></p>

          <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', color: 'var(--color-primary)' }}>No Guarantee of Selection</h2>
          <p>Information published on CGSSB.com.in should not be interpreted as a guarantee of:</p>
          <ul className="premium-list">
            <li>Government employment</li>
            <li>Selection</li>
            <li>Qualification</li>
            <li>Examination success</li>
            <li>Appointment</li>
            <li>Salary</li>
            <li>Promotion</li>
          </ul>
          <p>Eligibility and selection depend on the applicable official recruitment rules and notification.</p>

          <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', color: 'var(--color-primary)' }}>External Links</h2>
          <p>Our website may provide links to official government websites and other external websites for the convenience of readers.</p>
          <p>We do not control external websites and are not responsible for changes to their content, availability or policies.</p>
          <p>Users should verify important information directly on the relevant official website.</p>

          <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', color: 'var(--color-primary)' }}>Advertising Disclaimer</h2>
          <p>CGSSB.com.in may use third-party advertising services such as Google AdSense.</p>
          <p>Advertisements displayed on the website are provided by third-party advertising systems and are not necessarily recommendations or endorsements by CGSSB.com.in.</p>
          <p>Google explains that advertising services can use cookies and similar technologies for advertising, measurement and related purposes.</p>

          <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', color: 'var(--color-primary)' }}>Independent Website Notice</h2>
          <p>CGSSB.com.in is an independent informational platform.</p>
          <p>The website should not be confused with:</p>
          <ul className="premium-list">
            <li>Chhattisgarh Staff Selection Board</li>
            <li>Chhattisgarh Professional Examination Board / Vyapam</li>
            <li>Chhattisgarh Government</li>
            <li>Any Chhattisgarh government department</li>
            <li>Any government recruitment authority</li>
          </ul>
          <p>Official government websites should always be used for final verification.</p>
        </div>
      </article>
    </div>
  );
}
