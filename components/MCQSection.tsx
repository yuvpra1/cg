'use client';
import React, { useState } from 'react';

interface MCQ {
  q: string;
  opts: string[];
  ans: string;
}

interface MCQSectionProps {
  mcqs: MCQ[];
  title?: string;
}

export default function MCQSection({ mcqs, title = "महत्वपूर्ण MCQs" }: MCQSectionProps) {
  const [showAll, setShowAll] = useState(false);
  const [openStates, setOpenStates] = useState<boolean[]>(Array(mcqs.length).fill(false));

  const toggleAll = () => {
    const newState = !showAll;
    setShowAll(newState);
    setOpenStates(Array(mcqs.length).fill(newState));
  };

  const toggleSingle = (index: number) => {
    const newStates = [...openStates];
    newStates[index] = !newStates[index];
    setOpenStates(newStates);
    
    // Update 'showAll' based on whether all are currently open or not
    if (newStates.every(state => state)) {
      setShowAll(true);
    } else if (newStates.every(state => !state)) {
      setShowAll(false);
    }
  };

  return (
    <div style={{ marginTop: '40px', marginBottom: '30px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', borderBottom: '2px solid var(--border-color)', paddingBottom: '10px' }}>
        <h2 className="article-section-title" style={{ margin: 0, fontSize: '1.8rem', color: 'var(--color-primary)', borderBottom: 'none', paddingBottom: 0 }}>
          {title}
        </h2>
        <button 
          onClick={toggleAll}
          style={{
            padding: '8px 16px',
            backgroundColor: showAll ? '#ef4444' : 'var(--color-primary)',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: '600',
            fontSize: '0.9rem',
            transition: 'background-color 0.3s ease'
          }}
        >
          {showAll ? 'Hide All Answers' : 'Show All Answers'}
        </button>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {mcqs.map((mcq, idx) => (
          <div key={idx} style={{ padding: '20px', background: 'var(--card-bg-hover)', borderRadius: '10px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-sm)' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '15px', color: 'var(--text-main)', fontSize: '1.1rem' }}>{mcq.q}</p>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '20px', color: 'var(--text-main)' }}>
              {mcq.opts.map((opt, i) => (
                <li key={i} style={{ marginBottom: '8px', paddingLeft: '15px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--color-primary)' }}>•</span>
                  {opt}
                </li>
              ))}
            </ul>
            
            <div style={{ borderTop: '1px dashed var(--border-color)', paddingTop: '15px' }}>
              <button 
                onClick={() => toggleSingle(idx)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--color-primary)',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: 0,
                  fontSize: '1rem'
                }}
              >
                {openStates[idx] ? '▼ उत्तर छिपाएं (Hide Answer)' : '▶ उत्तर देखें (Show Answer)'}
              </button>
              
              {openStates[idx] && (
                <div style={{ 
                  marginTop: '15px', 
                  padding: '12px 15px', 
                  backgroundColor: '#dcfce7', 
                  borderLeft: '4px solid #22c55e',
                  color: '#166534', 
                  fontWeight: 'bold',
                  borderRadius: '0 6px 6px 0'
                }}>
                  सही उत्तर: {mcq.ans}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
