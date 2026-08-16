import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | CGSSB.com.in',
  description: 'Privacy Policy for CGSSB.com.in.',
};

export default function PrivacyPolicy() {
  return (
    <div className="container" style={{ paddingTop: '60px', paddingBottom: '60px', maxWidth: '800px' }}>
      <article className="card" style={{ padding: '40px', lineHeight: '1.8' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '10px', color: 'var(--color-primary)' }}>Privacy Policy</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}><strong>Last Updated: 16 August 2026</strong></p>

        <div className="content-wrapper" style={{ color: 'var(--text-main)', fontSize: '1.05rem' }}>
          <p>Welcome to CGSSB.com.in.</p>
          <p>At CGSSB.com.in, we respect the privacy of our visitors and are committed to being transparent about how information may be collected and used when you visit our website.</p>
          <p>CGSSB.com.in is an independent informational website that provides information about government jobs, recruitment notifications, examinations, admit cards, results, syllabus, educational updates and other useful information related to Chhattisgarh.</p>
          <p>CGSSB.com.in is not affiliated with, operated by, or officially endorsed by the Chhattisgarh Staff Selection Board (CGSSB), Chhattisgarh Vyapam, or any other government department.</p>
          <p>This Privacy Policy explains what information may be collected when you use our website and how that information may be used.</p>

          <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', color: 'var(--color-primary)' }}>1. Information We Collect</h2>
          <p>We do not ask visitors to create an account simply to read articles on CGSSB.com.in.</p>
          <p>Depending on how you use the website, certain information may be collected automatically by our hosting provider, analytics services, advertising partners or other third-party services.</p>
          <p>This information may include:</p>
          <ul className="premium-list">
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Device type</li>
            <li>Operating system</li>
            <li>Approximate geographic location</li>
            <li>Date and time of visit</li>
            <li>Pages visited</li>
            <li>Referring website</li>
            <li>Time spent on pages</li>
            <li>General website usage information</li>
          </ul>
          <p>This information is generally used to understand website traffic, maintain security, improve website performance and improve the content and user experience.</p>

          <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', color: 'var(--color-primary)' }}>2. Log Files</h2>
          <p>Like many websites, CGSSB.com.in may use standard server log files.</p>
          <p>Log information may include IP addresses, browser information, Internet Service Provider information, referring and exit pages, date and time stamps, and other technical information.</p>
          <p>These logs may be used for purposes such as:</p>
          <ul className="premium-list">
            <li>Website security</li>
            <li>Detecting abuse or suspicious activity</li>
            <li>Troubleshooting technical problems</li>
            <li>Understanding website traffic</li>
            <li>Improving website performance</li>
          </ul>
          <p>We do not use server logs to intentionally identify individual visitors.</p>

          <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', color: 'var(--color-primary)' }}>3. Cookies</h2>
          <p>CGSSB.com.in may use cookies and similar technologies.</p>
          <p>Cookies are small files stored on your device by a website or by certain third-party services. They can help a website remember preferences, understand how visitors use the website and provide relevant functionality.</p>
          <p>Cookies may be used for:</p>
          <ul className="premium-list">
            <li>Essential website functionality</li>
            <li>Analytics</li>
            <li>Measuring website traffic</li>
            <li>Advertising</li>
            <li>Frequency capping</li>
            <li>Security and fraud prevention</li>
          </ul>
          <p>If advertising services such as Google AdSense are used on our website, Google and its partners may use cookies or similar technologies for advertising and measurement purposes. Google states that publishers using its advertising services must clearly disclose the site's use of cookies.</p>

          <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', color: 'var(--color-primary)' }}>4. Google Analytics</h2>
          <p>We may use Google Analytics to understand how visitors use CGSSB.com.in.</p>
          <p>Google Analytics may collect information such as:</p>
          <ul className="premium-list">
            <li>Pages visited</li>
            <li>Approximate location</li>
            <li>Device and browser information</li>
            <li>Traffic source</li>
            <li>Interaction with the website</li>
            <li>General usage patterns</li>
          </ul>
          <p>We use this information to understand which content is useful to visitors and to improve the website.</p>
          <p>Google may process information collected through websites that use its services.</p>
          <p>For more information, you can review Google's privacy information: <a href="https://policies.google.com/privacy?hl=en-IN" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)' }}>Google Privacy Policy</a></p>

          <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', color: 'var(--color-primary)' }}>5. Google AdSense and Advertising</h2>
          <p>CGSSB.com.in may display advertisements through third-party advertising services, including Google AdSense.</p>
          <p>If Google AdSense is used, Google and its advertising partners may use cookies, web beacons, IP addresses and similar technologies to serve, measure and improve advertisements.</p>
          <p>Advertising cookies may allow Google and its partners to show advertisements based on a visitor's previous visits to this website or other websites, subject to the visitor's settings and applicable policies.</p>
          <p>Users can manage or turn off personalized advertising through Google's advertising settings: <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)' }}>Google Ads Settings</a></p>
          <p>Google also provides information about how it uses data when its services are used by partner websites: <a href="https://policies.google.com/technologies/partner-sites?hl=en-IN" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)' }}>How Google uses information from sites that use its services</a></p>

          <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', color: 'var(--color-primary)' }}>6. Third-Party Services</h2>
          <p>Our website may use third-party services for purposes such as:</p>
          <ul className="premium-list">
            <li>Website analytics</li>
            <li>Advertising</li>
            <li>Website hosting</li>
            <li>Security</li>
            <li>Performance monitoring</li>
            <li>Embedded content</li>
          </ul>
          <p>These third-party services may have their own privacy policies and terms.</p>
          <p>We recommend reviewing the privacy policies of third-party services when appropriate.</p>

          <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', color: 'var(--color-primary)' }}>7. External Links</h2>
          <p>Our articles may contain links to official government websites, examination portals, educational institutions, newspapers or other external websites.</p>
          <p>For example, we may link to official sources so that readers can verify recruitment notifications, examination dates, results and other information.</p>
          <p>Once you leave CGSSB.com.in and visit another website, that website's own privacy policy and terms will apply.</p>
          <p>We are not responsible for the privacy practices, content or security of external websites.</p>

          <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', color: 'var(--color-primary)' }}>8. Contact Information</h2>
          <p>If you contact us through email or a contact form, we may receive information such as your name, email address and the information included in your message.</p>
          <p>We use this information only for purposes such as:</p>
          <ul className="premium-list">
            <li>Responding to your enquiry</li>
            <li>Reviewing correction requests</li>
            <li>Handling copyright concerns</li>
            <li>Responding to feedback</li>
            <li>Improving our website</li>
          </ul>
          <p>We do not intentionally request sensitive personal information through our contact form.</p>
          <p><strong>Contact:</strong> <a href="mailto:contact@cgssb.com.in" style={{ color: 'var(--color-primary)' }}>contact@cgssb.com.in</a></p>

          <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', color: 'var(--color-primary)' }}>9. Children's Privacy</h2>
          <p>CGSSB.com.in provides general educational and government-job information.</p>
          <p>We do not knowingly collect personal information from children for the purpose of creating accounts or profiles.</p>
          <p>If you believe that a child has provided personal information to us, please contact us so that we can review and take appropriate action.</p>

          <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', color: 'var(--color-primary)' }}>10. Data Security</h2>
          <p>We take reasonable measures to protect information handled through our website.</p>
          <p>However, no method of transmitting information over the Internet or storing information electronically can be guaranteed to be completely secure.</p>

          <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', color: 'var(--color-primary)' }}>11. Your Choices</h2>
          <p>You can control certain cookies through your browser settings.</p>
          <p>You may also have options to manage personalized advertising through the relevant advertising provider's settings.</p>
          <p>Please note that disabling certain cookies may affect some website functionality.</p>

          <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', color: 'var(--color-primary)' }}>12. Changes to This Privacy Policy</h2>
          <p>We may update this Privacy Policy from time to time to reflect changes in our website, services, advertising, analytics or applicable requirements.</p>
          <p>Whenever this policy is updated, the Last Updated date at the top of this page will be changed.</p>

          <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px', color: 'var(--color-primary)' }}>13. Contact Us</h2>
          <p>If you have any questions, concerns or requests regarding this Privacy Policy, please contact us:</p>
          <p><strong>Website:</strong> CGSSB.com.in <br/> <strong>Email:</strong> <a href="mailto:contact@cgssb.com.in" style={{ color: 'var(--color-primary)' }}>contact@cgssb.com.in</a></p>
        </div>
      </article>
    </div>
  );
}
