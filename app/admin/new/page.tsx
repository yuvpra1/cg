import JobForm from '../components/JobForm';

export const runtime = 'edge';

export default function NewJobPage() {
  return (
    <div>
      <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '20px' }}>Add New Job</h2>
      <JobForm />
    </div>
  );
}
