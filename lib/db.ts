export const localJobs = [
  {
    id: 6,
    slug: "cg-set-2026",
    title: "CG SET 2026: Exam Date, Eligibility, Syllabus",
    meta_title: "CG SET 2026: Exam Date, Eligibility, Application Form, Syllabus & Exam Pattern",
    meta_description: "CG SET 2026 की पूरी जानकारी: आवेदन की अंतिम तिथि, eligibility, 30 subjects, Paper-I & Paper-II syllabus, exam pattern, qualifying marks, fee, admit card और परीक्षा तिथि जानें।",
    department: "उच्च शिक्षा विभाग",
    total_posts: "NA",
    last_date: "2026-08-17",
    content: "Content available in DB"
  },
  {
    id: 5,
    slug: "cgssb-teacher-recruitment-2026",
    title: "CGSSB TEACHER RECRUITMENT 2026",
    meta_title: "CGSSB TEACHER RECRUITMENT 2026",
    meta_description: "CGSSB TEACHER RECRUITMENT 2026",
    department: "लोक शिक्षण संचालनालय",
    total_posts: 1654,
    last_date: "2026-09-02",
    content: "Content available in DB"
  },
  {
    id: 4,
    slug: "cgssb-nssk26-recruitment-2026",
    title: "CGSSB NSSK26 Recruitment 2026",
    meta_title: "CGSSB NSSK26 Recruitment 2026",
    meta_description: "CGSSB NSSK26 Recruitment 2026",
    department: "नगर सेना एवं अग्निशमन सेवाएँ",
    total_posts: 5,
    last_date: "2026-09-07",
    content: "Content available in DB"
  }
];

function getEnv() {
  try {
    // In next-on-pages, bindings are also mapped to process.env
    // or we can use the global symbol as a fallback
    const ctx = (globalThis as any)[Symbol.for('__cloudflare_request_context__')];
    if (ctx && ctx.env) return ctx.env as any;
    return process.env as any;
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
  const { title, meta_title, meta_description, slug, department, total_posts, last_date, content, image_url, image_alt } = jobData;
  
  if (env && env.DB) {
    const db = env.DB;
    // Note: User must run: ALTER TABLE jobs ADD COLUMN image_url TEXT; ALTER TABLE jobs ADD COLUMN image_alt TEXT;
    await db.prepare(
      `INSERT INTO jobs (title, meta_title, meta_description, slug, department, total_posts, last_date, content, image_url, image_alt) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
    ).bind(title, meta_title || '', meta_description || '', slug, department, total_posts, last_date, content, image_url || null, image_alt || null).run();
  } else {
    localJobs.unshift({
      id: Date.now(),
      slug, title, meta_title: meta_title || '', meta_description: meta_description || '', department, total_posts: Number(total_posts), last_date, content, image_url: image_url || null, image_alt: image_alt || null
    } as any);
  }
}
