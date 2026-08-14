'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function JobForm({ initialData, jobId }: { initialData?: any, jobId?: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: initialData?.title || '',
    slug: initialData?.slug || '',
    department: initialData?.department || '',
    total_posts: initialData?.total_posts || '',
    last_date: initialData?.last_date || '',
    meta_title: initialData?.meta_title || '',
    meta_description: initialData?.meta_description || '',
    content: initialData?.content || ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const url = jobId ? `/api/admin/jobs/${jobId}` : '/api/admin/jobs';
      const method = jobId ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        router.push('/admin');
        router.refresh();
      } else {
        alert('Failed to save job');
      }
    } catch (e) {
      alert('An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = { width: '100%', padding: '10px', border: '1px solid #cbd5e1', borderRadius: '4px', marginBottom: '15px' };
  const labelStyle = { display: 'block', marginBottom: '5px', fontWeight: '500' };

  return (
    <form onSubmit={handleSubmit} style={{ backgroundColor: 'white', padding: '30px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        <div>
          <label style={labelStyle}>Title</label>
          <input name="title" value={formData.title} onChange={handleChange} style={inputStyle} required />
        </div>
        <div>
          <label style={labelStyle}>Slug (URL)</label>
          <input name="slug" value={formData.slug} onChange={handleChange} style={inputStyle} required />
        </div>
        <div>
          <label style={labelStyle}>Department</label>
          <input name="department" value={formData.department} onChange={handleChange} style={inputStyle} required />
        </div>
        <div>
          <label style={labelStyle}>Total Posts</label>
          <input type="number" name="total_posts" value={formData.total_posts} onChange={handleChange} style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Last Date (YYYY-MM-DD)</label>
          <input type="date" name="last_date" value={formData.last_date} onChange={handleChange} style={inputStyle} required />
        </div>
      </div>
      
      <div>
        <label style={labelStyle}>Meta Title</label>
        <input name="meta_title" value={formData.meta_title} onChange={handleChange} style={inputStyle} />
      </div>
      
      <div>
        <label style={labelStyle}>Meta Description</label>
        <textarea name="meta_description" value={formData.meta_description} onChange={handleChange} style={{ ...inputStyle, minHeight: '80px' }} />
      </div>

      <div>
        <label style={labelStyle}>Content (HTML)</label>
        <textarea name="content" value={formData.content} onChange={handleChange} style={{ ...inputStyle, minHeight: '300px', fontFamily: 'monospace' }} required />
      </div>

      <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
        <button type="submit" disabled={loading} style={{ padding: '12px 24px', backgroundColor: 'var(--color-primary)', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          {loading ? 'Saving...' : 'Save Job'}
        </button>
        <button type="button" onClick={() => router.push('/admin')} style={{ padding: '12px 24px', backgroundColor: '#e2e8f0', color: '#475569', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Cancel
        </button>
      </div>
    </form>
  );
}
