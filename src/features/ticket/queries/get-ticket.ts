import { cache } from 'react';
import { prisma } from '@/lib/prisma';

// cache is being used in case this method is called multiple time in the same render path
export const getTicket = cache(async (id: string) => {
  return await prisma.ticket.findUnique({ where: { id } });
});
