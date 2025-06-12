import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { CardCompact } from '@/components/card-compact';
import { Heading } from '@/components/heading';
import { Placeholder } from '@/components/Placeholder';
import { RedirectToast } from '@/components/redirect-toast';
import { Spinner } from '@/components/spinner';
import { TicketList } from '@/features/ticket/components/ticket-list';
import { TicketUpsertForm } from '@/features/ticket/components/ticket-upsert-form';

// export const revalidate = 30; // Revalidate every 30 seconds
// export const dynamic = 'force-dynamic'; // Force dynamic rendering

const TicketsPage = () => {
  return (
    <>
      <div className='flex flex-1 flex-col gap-y-8'>
        <Heading title='Tickets' description='All the tickets' />

        <CardCompact
          title='Create Ticket'
          description='A new ticket will be created'
          className='w-full max-w-[420px] self-center'
          content={<TicketUpsertForm />}
        />

        <ErrorBoundary fallback={<Placeholder label='Something went wrong!' />}>
          <Suspense fallback={<Spinner />}>
            <TicketList />
          </Suspense>
        </ErrorBoundary>
      </div>

      <RedirectToast />
    </>
  );
};

export default TicketsPage;
