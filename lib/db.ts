import { getRequestContext } from '@cloudflare/next-on-pages';

export const localJobs = [
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

export async function getJobById(id: number) {
  const env = getEnv();
  if (env && env.DB) {
    const db = env.DB;
    const job = await db.prepare(
      'SELECT * FROM jobs WHERE id = ?'
    ).bind(id).first();
    return job || null;
  }
  return localJobs.find((j: any) => j.id === id) || null;
}

export async function updateJob(id: number, jobData: any) {
  const env = getEnv();
  const { title, meta_title, meta_description, slug, department, total_posts, last_date, content } = jobData;
  if (env && env.DB) {
    const db = env.DB;
    await db.prepare(
      `UPDATE jobs SET title = ?, meta_title = ?, meta_description = ?, slug = ?, department = ?, total_posts = ?, last_date = ?, content = ? WHERE id = ?`
    ).bind(title, meta_title || '', meta_description || '', slug, department, total_posts, last_date, content, id).run();
  } else {
    const index = localJobs.findIndex((j: any) => j.id === id);
    if (index !== -1) {
      localJobs[index] = { ...localJobs[index], ...jobData, total_posts: Number(total_posts) };
    }
  }
}

export async function deleteJob(id: number) {
  const env = getEnv();
  if (env && env.DB) {
    const db = env.DB;
    await db.prepare('DELETE FROM jobs WHERE id = ?').bind(id).run();
  } else {
    const index = localJobs.findIndex((j: any) => j.id === id);
    if (index !== -1) localJobs.splice(index, 1);
  }
}
