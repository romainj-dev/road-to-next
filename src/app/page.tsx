import Link from 'next/link';
import { Heading } from '@/components/heading';
import { ticketsPath } from '@/paths';

const HomePage = () => {
  return (
    <div className='flex flex-1 flex-col gap-y-8'>
      <Heading title='Home' description='Welcome to the home page' />

      <div className='flex flex-1 flex-col items-center'>
        <Link href={ticketsPath()}>Go to tickets</Link>
      </div>
    </div>
  );
};

export default HomePage;
