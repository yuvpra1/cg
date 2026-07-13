DROP TABLE IF EXISTS jobs;

CREATE TABLE jobs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  department TEXT NOT NULL,
  total_posts INTEGER NOT NULL,
  last_date TEXT NOT NULL,
  content TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Insert some dummy data for testing
INSERT INTO jobs (slug, title, department, total_posts, last_date, content) VALUES
('cg-police-constable-2026', 'CG Police Constable Recruitment 2026', 'CG Police', 5967, '2026-08-15', '<h2>Important Dates</h2><p>Start Date: 15 July 2026</p><p>End Date: 15 August 2026</p><h2>Eligibility</h2><p>12th Pass from CG Board.</p>'),
('vyapam-patwari-2026', 'Chhattisgarh Patwari Exam 2026', 'Vyapam', 301, '2026-08-22', '<h2>Important Dates</h2><p>Notification Expected Soon.</p><h2>Syllabus</h2><p>Computer, GK, Maths, Hindi.</p>'),
('cgpsc-sse-2026', 'State Service Exam (SSE) Notification', 'CGPSC', 242, '2026-09-30', '<h2>Details</h2><p>Pre Exam in Feb 2027.</p>');
