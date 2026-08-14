'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function JobTabs({ slug }: { slug: string }) {
  const pathname = usePathname();

  const tabs = [
    { label: 'Overview', path: `/jobs/${slug}` },
    { label: 'Syllabus', path: `/jobs/${slug}/syllabus` },
    { label: 'Admit Card', path: `/jobs/${slug}/admit-card` },
    { label: 'Answer Key', path: `/jobs/${slug}/answer-key` },
    { label: 'Result', path: `/jobs/${slug}/result` },
    { label: 'Cutoff', path: `/jobs/${slug}/cutoff` },
    { label: 'Salary', path: `/jobs/${slug}/salary` },
  ];

  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px',
      marginBottom: '30px',
      borderBottom: '2px solid var(--border-color)',
      paddingBottom: '10px'
    }}>
      {tabs.map((tab) => {
        const isActive = pathname === tab.path;
        return (
          <Link 
            key={tab.path} 
            href={tab.path}
            style={{
              padding: '8px 16px',
              borderRadius: '20px',
              fontSize: '0.9rem',
              fontWeight: 'bold',
              textDecoration: 'none',
              backgroundColor: isActive ? 'var(--color-primary)' : '#f1f5f9',
              color: isActive ? '#fff' : 'var(--text-main)',
              transition: 'all 0.2s',
            }}
          >
            {tab.label}
          </Link>
        );
      })}
    </div>
  );
}
