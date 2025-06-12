'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { setCookieByKey } from '@/actions/cookies';
import { prisma } from '@/lib/prisma';
import {
  // ticketPath,
  ticketsPath,
} from '@/paths';

export const deleteTicket = async (id: string) => {
  await prisma.ticket.delete({
    where: { id: id },
  });

  revalidatePath(ticketsPath());
  //   revalidatePath(ticketPath(id));

  await setCookieByKey('toast', 'Ticket deleted');
  redirect(ticketsPath());
};
