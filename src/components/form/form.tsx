import { toast } from 'sonner';
import { useActionFeedback } from './hooks/use-action-feedback';
import { ActionState } from './utils/to-action-state';
// import { useTransition } from 'react';

type FormProps = {
  action: (payload: FormData) => void;
  actionState: ActionState;
  children: React.ReactNode;
  onSuccess?: (actionState: ActionState) => void;
  onError?: (actionState: ActionState) => void;
};

const Form = ({
  action,
  actionState,
  children,
  onSuccess,
  onError,
}: FormProps) => {
  // const [isPending, startTransition] = useTransition();

  // const upsertTicketAction = (formData: FormData) => {
  //   startTransition(async () => {
  //     await upsertTicket.bind(null, ticket?.id)(formData);
  //   });
  // };

  useActionFeedback(actionState, {
    onSuccess: ({ actionState }) => {
      if (actionState.message) {
        toast.success(actionState.message);
      }
      onSuccess?.(actionState);
    },
    onError: ({ actionState }) => {
      if (actionState.message) {
        toast.error(actionState.message);
      }
      onError?.(actionState);
    },
  });

  return (
    <form
      // action={upsertTicketAction}
      // action={upsertTicket.bind(null, ticket?.id)}
      action={action}
      className='flex flex-col gap-y-2'
    >
      {children}
    </form>
  );
};

export { Form };
