'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { toast } from 'sonner';
import { consumeCookiedByKey } from '@/actions/cookies';

const RedirectToast = () => {
  const pathname = usePathname();

  useEffect(() => {
    async function execute() {
      const message = await consumeCookiedByKey('toast');
      if (message) {
        toast.success(message);
      }
    }

    execute();
  }, [pathname]);

  return null;
};

export { RedirectToast };
