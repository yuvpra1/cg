'use client';

import { useState } from 'react';

export default function AgeCalculator() {
  const [dob, setDob] = useState('');
  const [targetDate, setTargetDate] = useState('');
  const [result, setResult] = useState<{ years: number; months: number; days: number } | null>(null);

  const calculateAge = (e: React.FormEvent) => {
    e.preventDefault();
    if (!dob || !targetDate) return;

    const d1 = new Date(dob);
    const d2 = new Date(targetDate);

    if (d1 > d2) {
      alert("Date of Birth cannot be greater than the Target Date!");
      return;
    }

    let years = d2.getFullYear() - d1.getFullYear();
    let months = d2.getMonth() - d1.getMonth();
    let days = d2.getDate() - d1.getDate();

    if (days < 0) {
      months--;
      // Get the number of days in the previous month
      const tempDate = new Date(d2.getFullYear(), d2.getMonth(), 0);
      days += tempDate.getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    setResult({ years, months, days });
  };

  return (
    <div className="card" style={{ maxWidth: '600px', margin: '0 auto' }}>
      <form onSubmit={calculateAge} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <label htmlFor="dob" style={{ fontWeight: '600' }}>Date of Birth (जन्म तिथि)</label>
          <input 
            type="date" 
            id="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
            style={{ padding: '12px', fontSize: '1rem', border: '1px solid var(--border-color)', borderRadius: 'var(--border-radius)' }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <label htmlFor="targetDate" style={{ fontWeight: '600' }}>Calculate Age As Of (किस तारीख तक)</label>
          <input 
            type="date" 
            id="targetDate"
            value={targetDate}
            onChange={(e) => setTargetDate(e.target.value)}
            required
            style={{ padding: '12px', fontSize: '1rem', border: '1px solid var(--border-color)', borderRadius: 'var(--border-radius)' }}
          />
          <small style={{ color: 'var(--text-muted)' }}>* As per government job notification (e.g., 01/01/2026)</small>
        </div>

        <button 
          type="submit" 
          style={{ 
            padding: '14px', 
            backgroundColor: 'var(--color-primary)', 
            color: 'white', 
            border: 'none', 
            borderRadius: 'var(--border-radius)',
            fontSize: '1.1rem',
            fontWeight: '600',
            cursor: 'pointer',
            marginTop: '10px'
          }}
        >
          Calculate Age
        </button>
      </form>

      {result && (
        <div style={{ 
          marginTop: '30px', 
          padding: '20px', 
          backgroundColor: 'var(--color-secondary)', 
          borderRadius: 'var(--border-radius)',
          textAlign: 'center',
          border: '1px solid var(--border-color)'
        }}>
          <h3 style={{ marginBottom: '15px', color: 'var(--text-main)' }}>Your Exact Age Is:</h3>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--color-primary)' }}>{result.years}</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Years</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--color-primary)' }}>{result.months}</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Months</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--color-primary)' }}>{result.days}</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Days</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
