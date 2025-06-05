import { LucideKanban } from 'lucide-react';
import Link from 'next/link';
import { homePath, ticketsPath } from '@/paths';
import { Button } from './ui/button';

const Header = () => {
  return (
    <nav className='supports-backdrop-blur:bg-background/60 bg-background/95 fixed top-0 right-0 left-0 z-20 flex w-full justify-between border-b px-5 py-2.5 backdrop-blur'>
      <div>
        <Button asChild variant='ghost'>
          <Link href={homePath()}>
            <LucideKanban />
            <h1 className='text-lg font-semibold'>Home</h1>
          </Link>
        </Button>
      </div>
      <div>
        <Button asChild variant='outline'>
          <Link href={ticketsPath()}>Tickets</Link>
        </Button>
      </div>
    </nav>
  );
};

export { Header };
