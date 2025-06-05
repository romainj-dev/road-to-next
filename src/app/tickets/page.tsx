import clsx from 'clsx';
import { LucideCircleCheck, LucideFileText, LucidePencil } from 'lucide-react';
import Link from 'next/link';
import { Heading } from '@/components/heading';
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card';
import { initialTickets } from '@/data';
import { ticketPath } from '@/paths';

const TICKET_ICONS = {
  OPEN: <LucideFileText />,
  IN_PROGRESS: <LucidePencil />,
  DONE: <LucideCircleCheck />,
};

const TicketsPage = () => {
  return (
    <div className='flex flex-1 flex-col gap-y-8'>
      <Heading title='Tickets' description='All the tickets' />

      <div className='animate-fade-from-top flex flex-1 flex-col items-center gap-y-4'>
        {initialTickets.map((ticket) => (
          <Card key={ticket.id} className='w-full max-w-[420px] p-4'>
            <CardTitle className='flex items-center gap-x-2'>
              <span>{TICKET_ICONS[ticket.status]}</span>
              <span className={clsx('truncate')}>{ticket.title}</span>
            </CardTitle>
            <CardContent>
              <span className='line-clamp-3 whitespace-break-spaces'>
                {ticket.content}
              </span>
            </CardContent>
            <CardFooter>
              <Link href={ticketPath(ticket.id)} className='text-sm underline'>
                View
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TicketsPage;
