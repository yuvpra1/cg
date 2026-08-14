import JobForm from '../../components/JobForm';
import { getJobById } from '@/lib/db';
import { notFound } from 'next/navigation';

export default async function EditJobPage({ params }: { params: { id: string } }) {
  const job = await getJobById(Number(params.id));
  
  if (!job) {
    notFound();
  }

  return (
    <div>
      <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary)', marginBottom: '20px' }}>Edit Job</h2>
      <JobForm initialData={job} jobId={params.id} />
    </div>
  );
}
