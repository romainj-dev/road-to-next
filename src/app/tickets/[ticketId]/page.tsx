import Link from 'next/link';
import { Placeholder } from '@/components/Placeholder';
import { Button } from '@/components/ui/button';
import { initialTickets } from '@/data';
import { TicketItem } from '@/features/ticket/components/ticket-item';
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
    <div className='animate-fade-from-top flex justify-center'>
      <TicketItem ticket={ticket} isDetail />
    </div>
  );
};

export default TicketPage;
