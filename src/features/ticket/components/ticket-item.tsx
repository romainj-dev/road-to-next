import { Ticket } from '@prisma/client';
import clsx from 'clsx';
import {
  LucideArrowUpRightFromSquare,
  LucidePencil,
  LucideTrash,
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card';
import { ticketEditPath, ticketPath } from '@/paths';
import { toCurrencyFromCent } from '@/utils/currency';
import { deleteTicket } from '../actions/delete-ticket';
import { TICKET_ICONS } from '../constants';
import { getTicket } from '../queries/get-ticket';

// import { getTicket } from '../queries/get-ticket';
// import { getTickets } from '../queries/get-tickets';

type TicketItemProps = {
  ticket: Ticket;
  // ticket:
  //   | Awaited<ReturnType<typeof getTickets>>[number]
  //   | Awaited<ReturnType<typeof getTicket>>
  //   | null;
  isDetail?: boolean;
};

export const TicketItem = async ({
  ticket,
  isDetail = false,
}: TicketItemProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const ticketPerItem = await getTicket(ticket.id);

  const detailButton = (
    <Button asChild variant='outline' size='icon'>
      <Link prefetch href={ticketPath(ticket.id)}>
        <LucideArrowUpRightFromSquare className='h-4 w-4' />
      </Link>
    </Button>
  );

  const editButton = (
    <Button variant='outline' size='icon' asChild>
      <Link prefetch href={ticketEditPath(ticket.id)}>
        <LucidePencil className='h-4 w-4' />
      </Link>
    </Button>
  );

  const deleteButton = (
    <form action={deleteTicket.bind(null, ticket.id)}>
      <Button variant='outline' size='icon'>
        <LucideTrash className='h-4 w-4' />
      </Button>
    </form>
  );

  return (
    <div
      className={clsx('flex w-full max-w-[420px] gap-x-1', {
        'max-w-[580px]': isDetail,
        'max-w-[420px]': !isDetail,
      })}
    >
      <Card className='w-full p-4'>
        <CardTitle className='flex items-center gap-x-2'>
          <span>{TICKET_ICONS[ticket.status]}</span>
          <span className={clsx('truncate')}>{ticket.title}</span>
        </CardTitle>
        <CardContent>
          <span
            className={clsx('whitespace-break-spaces', {
              'line-clamp-3': !isDetail,
            })}
          >
            {ticket.content}
          </span>
        </CardContent>
        <CardFooter className='flex justify-between'>
          <p className='text-muted-foreground text-sm'>{ticket.deadline}</p>
          <p className='text-muted-foreground text-sm'>
            {toCurrencyFromCent(ticket.bounty)}
          </p>
        </CardFooter>
      </Card>
      <div className='flex flex-col gap-y-1'>
        {isDetail ? (
          <>
            {editButton}
            {deleteButton}
          </>
        ) : (
          <>
            {detailButton}
            {editButton}
          </>
        )}
      </div>
    </div>
  );
};
