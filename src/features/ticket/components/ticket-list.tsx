import { TicketItem } from '@/features/ticket/components/ticket-item';
import { getTickets } from '../queries/get-tickets';

const TicketList = async () => {
  const tickets = await getTickets();

  return (
    <div className='animate-fade-from-top flex flex-1 flex-col items-center gap-y-4'>
      {tickets.map((ticket) => (
        <TicketItem key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
};

export { TicketList };
