import { useEffect, useRef } from 'react';
import { ActionState } from '../utils/to-action-state';

type OnArgs = {
  actionState: ActionState;
};

type UseActionFeedbackoptions = {
  onSuccess?: ({ actionState }: OnArgs) => void;
  onError?: ({ actionState }: OnArgs) => void;
};

const useActionFeedback = (
  actionState: ActionState,
  options: UseActionFeedbackoptions,
) => {
  const prevTimeStamp = useRef(actionState.timeStamp);
  const isUpdate = prevTimeStamp.current !== actionState.timeStamp;

  useEffect(() => {
    if (!isUpdate) return;

    if (actionState.status === 'SUCCESS') {
      options.onSuccess?.({ actionState });
    } else if (actionState.status === 'ERROR') {
      options.onError?.({ actionState });
    }

    prevTimeStamp.current = actionState.timeStamp;
  }, [isUpdate, actionState, options]);
};

export { useActionFeedback };
