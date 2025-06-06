import { Heading } from '@/components/heading';
import { initialTickets } from '@/data';
import { TicketItem } from '@/features/ticket/components/ticket-item';

const TicketsPage = () => {
  return (
    <div className='flex flex-1 flex-col gap-y-8'>
      <Heading title='Tickets' description='All the tickets' />

      <div className='animate-fade-from-top flex flex-1 flex-col items-center gap-y-4'>
        {initialTickets.map((ticket) => (
          <TicketItem key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default TicketsPage;
