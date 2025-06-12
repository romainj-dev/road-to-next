import { notFound } from 'next/navigation';
import { RedirectToast } from '@/components/redirect-toast';
import { TicketItem } from '@/features/ticket/components/ticket-item';
import { getTicket } from '@/features/ticket/queries/get-ticket';
// import { getTickets } from '@/features/ticket/queries/get-tickets';

type TicketPageProps = {
  params: Promise<{
    ticketId: string;
  }>;
};

const TicketPage = async ({ params }: TicketPageProps) => {
  const { ticketId } = await params;
  const ticket = await getTicket(ticketId);

  if (!ticket) {
    notFound();
  }

  return (
    <>
      <div className='animate-fade-from-top flex justify-center'>
        <TicketItem ticket={ticket} isDetail />
      </div>

      <RedirectToast />
    </>
  );
};

// export async function generateStaticParams() {
//   const tickets = await getTickets();
//   return tickets.map((ticket) => ({
//     ticketId: ticket.id,
//   }));
// }

export default TicketPage;
