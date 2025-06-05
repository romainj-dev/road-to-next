import { MessageSquareWarning } from 'lucide-react';
import { cloneElement } from 'react';

type PlaceholderProps = {
  label: string;
  icon?: React.ReactElement<{ className?: string }>;
  button: React.ReactNode
};

const Placeholder = ({
  label,
  icon = <MessageSquareWarning />,
  button = null
}: PlaceholderProps) => {
  return (
    <div className='flex flex-1 flex-col items-center justify-center self-center gap-y-2'>
      {cloneElement(icon, { className: 'w-12 h-12' })}
      <h2 className='text-center text-lg'>{label}</h2>
      {button}
    </div>
  );
};

export { Placeholder };
