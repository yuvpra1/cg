'use client';

import { useState } from 'react';
import { convertToWebP } from '@/lib/imageUtils';

export default function AdminPanel() {
  const [formData, setFormData] = useState({
    title: '',
    meta_title: '',
    meta_description: '',
    slug: '',
    department: 'CG Police',
    total_posts: '',
    last_date: '',
    content: ''
  });

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageAlt, setImageAlt] = useState('');
  const [imageName, setImageName] = useState('');

  const [status, setStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    try {
      let image_url = '';

      // 1. Image Upload Logic (Client-side WebP Conversion + R2 Upload)
      if (imageFile) {
        setStatus({ type: 'success', message: 'Optimizing image (WebP)...' });
        const webpFile = await convertToWebP(imageFile, imageName || formData.slug);
        
        setStatus({ type: 'success', message: 'Uploading image to R2...' });
        const uploadData = new FormData();
        uploadData.append('file', webpFile);
        
        const uploadRes = await fetch('/api/upload', {
          method: 'POST',
          body: uploadData,
        });
        
        const uploadJson = await uploadRes.json();
        if (uploadRes.ok && uploadJson.success) {
          image_url = uploadJson.url;
        } else {
          throw new Error(uploadJson.error || 'Failed to upload image');
        }
      }

      // 2. Job Post Submission
      setStatus({ type: 'success', message: 'Publishing Job to Database...' });
      const jobPayload = {
        ...formData,
        image_url,
        image_alt: imageAlt || formData.title,
      };

      const response = await fetch('/api/jobs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(jobPayload)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({ type: 'success', message: 'Job Published Successfully!' });
        setFormData({ title: '', meta_title: '', meta_description: '', slug: '', department: 'CG Police', total_posts: '', last_date: '', content: '' });
        setImageFile(null);
        setImageAlt('');
        setImageName('');
      } else {
        setStatus({ type: 'error', message: data.error || 'Failed to publish job' });
      }
    } catch (error: any) {
      setStatus({ type: 'error', message: error.message || 'Network error. Try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container" style={{ padding: '60px 20px', maxWidth: '800px' }}>
      <h1 style={{ marginBottom: '10px' }}>Admin Panel - Post New Job</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>Securely publish new job vacancies to the portal.</p>

      {status.message && (
        <div style={{ 
          padding: '15px', 
          marginBottom: '20px', 
          borderRadius: '4px',
          backgroundColor: status.type === 'success' ? '#dcfce7' : '#fee2e2',
          color: status.type === 'success' ? '#166534' : '#ef4444',
          border: `1px solid ${status.type === 'success' ? '#bbf7d0' : '#fecaca'}`
        }}>
          {status.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
        <div style={{ padding: '20px', border: '1px solid var(--border-color)', borderRadius: '8px', backgroundColor: 'var(--bg-body)' }}>
          <h3 style={{ marginBottom: '15px', color: 'var(--color-primary)' }}>Featured Image (SEO & R2)</h3>
          
          <div style={{ marginBottom: '15px' }}>
            <label style={labelStyle}>Select Image (JPG/PNG)</label>
            <input type="file" accept="image/*" onChange={handleImageChange} style={inputStyle} />
            <small style={{ color: 'var(--text-muted)' }}>Automatically converts to WebP before uploading.</small>
          </div>

          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <div style={{ flex: 1 }}>
              <label style={labelStyle}>Custom SEO Filename</label>
              <input type="text" value={imageName} onChange={(e) => setImageName(e.target.value)} placeholder="e.g. cg-police-2026-notification" style={inputStyle} />
            </div>
            <div style={{ flex: 1 }}>
              <label style={labelStyle}>Image Alt Text</label>
              <input type="text" value={imageAlt} onChange={(e) => setImageAlt(e.target.value)} placeholder="e.g. CG Police Vacancy 2026 Banner" style={inputStyle} />
            </div>
          </div>
        </div>

        {/* Job Details */}
        <div>
          <label style={labelStyle}>Job Title</label>
          <input type="text" name="title" required value={formData.title} onChange={handleChange} placeholder="e.g., CG Police Constable Recruitment 2026" style={inputStyle} />
        </div>

        <div>
          <label style={labelStyle}>SEO Meta Title (Optional)</label>
          <input type="text" name="meta_title" value={formData.meta_title} onChange={handleChange} placeholder="Custom title for Google Search" style={inputStyle} />
        </div>

        <div>
          <label style={labelStyle}>SEO Meta Description (Optional)</label>
          <input type="text" name="meta_description" value={formData.meta_description} onChange={handleChange} placeholder="Custom description for Google Search" style={inputStyle} />
        </div>

        <div>
          <label style={labelStyle}>URL Slug (SEO Friendly)</label>
          <input type="text" name="slug" required value={formData.slug} onChange={handleChange} placeholder="e.g., cg-police-constable-2026" style={inputStyle} />
        </div>

        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>Department</label>
            <select name="department" value={formData.department} onChange={handleChange} style={inputStyle}>
              <option value="CG Police">CG Police</option>
              <option value="Vyapam">CGSSB (Vyapam)</option>
              <option value="CGPSC">CGPSC</option>
              <option value="Health Dept">Health Dept</option>
              <option value="Education">Education</option>
            </select>
          </div>
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>Total Posts</label>
            <input type="number" name="total_posts" required value={formData.total_posts} onChange={handleChange} style={inputStyle} />
          </div>
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>Last Date</label>
            <input type="date" name="last_date" required value={formData.last_date} onChange={handleChange} style={inputStyle} />
          </div>
        </div>

        <div>
          <label style={labelStyle}>Full Content / Description (HTML allowed)</label>
          <textarea name="content" required rows={8} value={formData.content} onChange={handleChange} style={{ ...inputStyle, resize: 'vertical' }} />
        </div>

        <button type="submit" disabled={isSubmitting} style={{ padding: '14px', backgroundColor: 'var(--color-primary)', color: 'white', border: 'none', borderRadius: '4px', fontSize: '1.1rem', fontWeight: '600', cursor: isSubmitting ? 'not-allowed' : 'pointer' }}>
          {isSubmitting ? 'Processing & Publishing...' : 'Publish Job'}
        </button>
      </form>
    </div>
  );
}

const labelStyle = { display: 'block', fontWeight: '600', marginBottom: '8px' };
const inputStyle = { width: '100%', padding: '12px', border: '1px solid var(--border-color)', borderRadius: '4px', fontSize: '1rem', outline: 'none', backgroundColor: 'var(--bg-body)', color: 'var(--text-main)' };
