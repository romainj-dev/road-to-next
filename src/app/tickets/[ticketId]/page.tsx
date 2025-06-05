import Link from 'next/link';
import { Placeholder } from '@/components/Placeholder';
import { Button } from '@/components/ui/button';
import { initialTickets } from '@/data';
import { ticketsPath } from '@/paths';

type TicketPageProps = {
  params: Promise<{
    ticketId: string;
  }>;
};

const TicketPage = async ({ params }: TicketPageProps) => {
  const { ticketId } = await params;
  const ticket = initialTickets.find((t) => t.id === ticketId);

  if (!ticket)
    return (
      <Placeholder
        label='Ticket not found'
        button={
          <Button asChild>
            <Link href={ticketsPath()}>Go back</Link>
          </Button>
        }
      />
    );

  return (
    <div>
      <h2 className='text-lg'>TicketPage: {ticket.title}</h2>
      <p className='text-sm'>TicketPage: {ticket.content}</p>
    </div>
  );
};

export default TicketPage;
