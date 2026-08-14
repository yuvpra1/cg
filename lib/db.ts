import { getRequestContext } from '@cloudflare/next-on-pages';

export const localJobs = [
  {
    "id": 4,
    "slug": "cgssb-nssk26-recruitment-2026",
    "title": "CGSSB NSSK26 Recruitment 2026: Exam Date, Syllabus, Admit Card",
    "meta_title": "CGSSB NSSK26 Recruitment 2026: Exam Date, Syllabus, Admit Card",
    "meta_description": "CGSSB NSSK26 Recruitment 2026 की exam date, application dates, syllabus, exam pattern, fee, admit card और जरूरी परीक्षा निर्देश यहां देखें।",
    "department": "नगर सेना एवं अग्निशमन सेवाएँ",
    "total_posts": 5,
    "last_date": "2026-09-07",
    "content": "Content available in DB"
  },
  { 
    id: 3, 
    slug: 'cg-sample-assistant-2025', 
    title: 'CG Sample Assistant Recruitment 2025', 
    meta_title: 'CG Sample Assistant Recruitment 2025',
    meta_description: 'CG Sample Assistant',
    department: 'Food & Drug Admin', 
    total_posts: 30, 
    last_date: '2025-08-30',
    content: 'Content available in DB'
  },
  { id: 1, slug: 'cg-police-constable-2026', title: 'CG Police Constable Recruitment 2026', meta_title: '', meta_description: '', department: 'CG Police', total_posts: 5967, last_date: '2026-08-15', content: 'Details coming soon.' },
  { id: 2, slug: 'vyapam-patwari-2026', title: 'Chhattisgarh Patwari Exam 2026', meta_title: '', meta_description: '', department: 'Vyapam', total_posts: 301, last_date: '2026-08-22', content: 'Details coming soon.' }
];

function getEnv() {
  try {
    return getRequestContext().env as any;
  } catch (e) {
    return null;
  }
}

export async function getAllJobs() {
  const env = getEnv();
  if (env && env.DB) {
    const db = env.DB;
    const { results } = await db.prepare(
      'SELECT id, slug, title, meta_title, meta_description, department, total_posts, last_date FROM jobs ORDER BY id DESC LIMIT 20'
    ).all();
    return results;
  }
  return localJobs;
}

export async function getJobBySlug(slug: string) {
  const env = getEnv();
  if (env && env.DB) {
    const db = env.DB;
    const job = await db.prepare(
      'SELECT * FROM jobs WHERE slug = ?'
    ).bind(slug).first();
    return job || null;
  }
  return localJobs.find((j: any) => j.slug === slug) || null;
}

export async function insertJob(jobData: any) {
  const env = getEnv();
  const { title, meta_title, meta_description, slug, department, total_posts, last_date, content } = jobData;
  if (env && env.DB) {
    const db = env.DB;
    await db.prepare(
      `INSERT INTO jobs (title, meta_title, meta_description, slug, department, total_posts, last_date, content) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
    ).bind(title, meta_title || '', meta_description || '', slug, department, total_posts, last_date, content).run();
  } else {
    localJobs.unshift({
      id: Date.now(),
      slug, title, meta_title: meta_title || '', meta_description: meta_description || '', department, total_posts: Number(total_posts), last_date, content
    } as any);
  }
}
