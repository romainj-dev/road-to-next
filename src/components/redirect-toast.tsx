'use client';

import { useEffect } from 'react';
import { toast } from 'sonner';
import { consumeCookiedByKey } from '@/actions/cookies';

const RedirectToast = () => {
  useEffect(() => {
    async function execute() {
      const message = await consumeCookiedByKey('toast');
      if (message) {
        toast.success(message);
      }
    }

    execute();
  }, []);

  return null;
};

export { RedirectToast };
