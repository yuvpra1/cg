'use client';

import { useState } from 'react';

export default function AdminPanel() {
  const [formData, setFormData] = useState({
    password: '',
    title: '',
    slug: '',
    department: 'CG Police',
    total_posts: '',
    last_date: '',
    content: ''
  });

  const [status, setStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/jobs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({ type: 'success', message: 'Job Published Successfully!' });
        setFormData({ ...formData, title: '', slug: '', total_posts: '', last_date: '', content: '' }); // reset fields except password
      } else {
        setStatus({ type: 'error', message: data.error || 'Failed to publish job' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Network error. Try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container" style={{ padding: '60px 20px', maxWidth: '800px' }}>
      <h1 style={{ marginBottom: '10px' }}>Admin Panel - Post New Job</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>Securely publish new job vacancies to the portal. Enter the secret password to authorize.</p>

      {status.message && (
        <div style={{ 
          padding: '15px', 
          marginBottom: '20px', 
          borderRadius: '4px',
          backgroundColor: status.type === 'success' ? '#dcfce7' : '#fee2e2',
          color: status.type === 'success' ? '#166534' : '#991b1b',
          border: `1px solid ${status.type === 'success' ? '#bbf7d0' : '#fecaca'}`
        }}>
          {status.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
        {/* Security Password */}
        <div>
          <label style={labelStyle}>Admin Secret Password</label>
          <input 
            type="password" name="password" required 
            value={formData.password} onChange={handleChange} 
            placeholder="Enter secret to verify identity"
            style={inputStyle} 
          />
        </div>

        {/* Job Details */}
        <div>
          <label style={labelStyle}>Job Title</label>
          <input 
            type="text" name="title" required 
            value={formData.title} onChange={handleChange} 
            placeholder="e.g., CG Police Constable Recruitment 2026"
            style={inputStyle} 
          />
        </div>

        <div>
          <label style={labelStyle}>URL Slug (SEO Friendly)</label>
          <input 
            type="text" name="slug" required 
            value={formData.slug} onChange={handleChange} 
            placeholder="e.g., cg-police-constable-2026"
            style={inputStyle} 
          />
          <small style={{ color: 'var(--text-muted)' }}>No spaces, use hyphens.</small>
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
            <input 
              type="number" name="total_posts" required 
              value={formData.total_posts} onChange={handleChange} 
              style={inputStyle} 
            />
          </div>
          
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>Last Date</label>
            <input 
              type="date" name="last_date" required 
              value={formData.last_date} onChange={handleChange} 
              style={inputStyle} 
            />
          </div>
        </div>

        <div>
          <label style={labelStyle}>Full Content / Description (HTML allowed)</label>
          <textarea 
            name="content" required rows={8}
            value={formData.content} onChange={handleChange} 
            placeholder="<h2>Eligibility</h2><p>12th Pass</p>"
            style={{ ...inputStyle, resize: 'vertical' }} 
          />
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          style={{ 
            padding: '14px', 
            backgroundColor: 'var(--color-primary)', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px',
            fontSize: '1.1rem',
            fontWeight: '600',
            cursor: isSubmitting ? 'not-allowed' : 'pointer'
          }}
        >
          {isSubmitting ? 'Publishing...' : 'Publish Job'}
        </button>
      </form>
    </div>
  );
}

const labelStyle = { display: 'block', fontWeight: '600', marginBottom: '8px' };
const inputStyle = { width: '100%', padding: '12px', border: '1px solid var(--border-color)', borderRadius: '4px', fontSize: '1rem', outline: 'none' };
