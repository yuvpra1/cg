'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function AdminJobsList() {
  const [jobs, setJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const res = await fetch('/api/admin/jobs');
      const data = await res.json();
      setJobs(Array.isArray(data) ? data : []);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this job?')) return;
    try {
      await fetch(`/api/admin/jobs/${id}`, { method: 'DELETE' });
      fetchJobs();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary)' }}>Manage Jobs</h2>
        <Link 
          href="/admin/new"
          style={{
            padding: '10px 20px',
            backgroundColor: 'var(--color-primary)',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '4px',
            fontWeight: '600'
          }}
        >
          + Add New Job
        </Link>
      </div>

      {loading ? (
        <p>Loading jobs...</p>
      ) : (
        <div style={{ backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead style={{ backgroundColor: '#f1f5f9', borderBottom: '2px solid #e2e8f0', textAlign: 'left' }}>
              <tr>
                <th style={{ padding: '15px' }}>ID</th>
                <th style={{ padding: '15px' }}>Title</th>
                <th style={{ padding: '15px' }}>Department</th>
                <th style={{ padding: '15px' }}>Last Date</th>
                <th style={{ padding: '15px', textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job) => (
                <tr key={job.id} style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '15px' }}>{job.id}</td>
                  <td style={{ padding: '15px', fontWeight: '500' }}>{job.title}</td>
                  <td style={{ padding: '15px' }}>{job.department}</td>
                  <td style={{ padding: '15px' }}>{new Date(job.last_date).toLocaleDateString()}</td>
                  <td style={{ padding: '15px', textAlign: 'right' }}>
                    <Link href={`/admin/edit/${job.id}`} style={{ marginRight: '15px', color: '#3b82f6', textDecoration: 'none' }}>Edit</Link>
                    <button onClick={() => handleDelete(job.id)} style={{ color: '#ef4444', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1rem' }}>Delete</button>
                  </td>
                </tr>
              ))}
              {jobs.length === 0 && (
                <tr>
                  <td colSpan={5} style={{ padding: '20px', textAlign: 'center', color: '#64748b' }}>No jobs found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
