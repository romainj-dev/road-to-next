import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Heading } from '@/components/heading';
import { Placeholder } from '@/components/Placeholder';
import { Spinner } from '@/components/spinner';
import { TicketList } from '@/features/ticket/components/ticket-list';

// export const revalidate = 30; // Revalidate every 30 seconds
// export const dynamic = 'force-dynamic'; // Force dynamic rendering

const TicketsPage = () => {
  return (
    <div className='flex flex-1 flex-col gap-y-8'>
      <Heading title='Tickets' description='All the tickets' />

      <ErrorBoundary fallback={<Placeholder label='Something went wrong!' />}>
        <Suspense fallback={<Spinner />}>
          <TicketList />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default TicketsPage;
