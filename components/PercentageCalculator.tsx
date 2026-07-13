'use client';

import { useState } from 'react';

export default function PercentageCalculator() {
  const [obtained, setObtained] = useState('');
  const [total, setTotal] = useState('');
  const [result, setResult] = useState<string | null>(null);

  const calculatePercentage = (e: React.FormEvent) => {
    e.preventDefault();
    const ob = parseFloat(obtained);
    const tot = parseFloat(total);

    if (isNaN(ob) || isNaN(tot) || tot === 0) {
      alert("Please enter valid numbers.");
      return;
    }

    if (ob > tot) {
      alert("Obtained marks cannot be greater than Total marks!");
      return;
    }

    const percentage = (ob / tot) * 100;
    setResult(percentage.toFixed(2));
  };

  return (
    <div className="card" style={{ maxWidth: '600px', margin: '0 auto' }}>
      <form onSubmit={calculatePercentage} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <label htmlFor="obtained" style={{ fontWeight: '600' }}>Obtained Marks (प्राप्तांक)</label>
          <input 
            type="number" 
            id="obtained"
            value={obtained}
            onChange={(e) => setObtained(e.target.value)}
            required
            min="0"
            step="0.01"
            placeholder="e.g. 450"
            style={{ padding: '12px', fontSize: '1rem', border: '1px solid var(--border-color)', borderRadius: 'var(--border-radius)' }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <label htmlFor="total" style={{ fontWeight: '600' }}>Total Marks (पूर्णांक)</label>
          <input 
            type="number" 
            id="total"
            value={total}
            onChange={(e) => setTotal(e.target.value)}
            required
            min="1"
            step="0.01"
            placeholder="e.g. 600"
            style={{ padding: '12px', fontSize: '1rem', border: '1px solid var(--border-color)', borderRadius: 'var(--border-radius)' }}
          />
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
          Calculate Percentage
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
          <h3 style={{ marginBottom: '10px', color: 'var(--text-main)' }}>Your Percentage Is:</h3>
          <div style={{ fontSize: '3rem', fontWeight: '700', color: 'var(--color-primary)' }}>
            {result}%
          </div>
        </div>
      )}
    </div>
  );
}
