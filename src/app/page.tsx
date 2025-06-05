import Link from 'next/link';
import { ticketsPath } from '@/paths';

const HomePage = () => {
  return (
    <div className='flex flex-1 flex-col gap-y-8'>
      <div>
        <h2 className='text-3xl font-bold tracking-tight'>HomePage</h2>
        <p className='text-muted-foreground text-sm'>
          Welcome to the home page
        </p>
      </div>
      <div className='flex flex-1 flex-col items-center'>
        <Link href={ticketsPath()}>Go to tickets</Link>
      </div>
    </div>
  );
};

export default HomePage;
