import { ZodError } from 'zod';

export type ActionState = {
  status?: 'ERROR' | 'SUCCESS';
  message: string;
  payload?: FormData;
  fieldErrors: Record<string, string[] | undefined>;
  timeStamp: number;
};

export const EMPTY_ACTION_STATE: ActionState = {
  message: '',
  payload: undefined,
  fieldErrors: {},
  timeStamp: Date.now(),
};

export const fromErrorToActionState = (
  error: unknown,
  formData: FormData,
): ActionState => {
  if (error instanceof ZodError) {
    return {
      status: 'ERROR',
      message: '',
      fieldErrors: error.flatten().fieldErrors,
      payload: formData,
      timeStamp: Date.now(),
    };
  } else if (error instanceof Error) {
    return {
      status: 'ERROR',
      message: error.message,
      fieldErrors: {},
      payload: formData,
      timeStamp: Date.now(),
    };
  } else {
    return {
      status: 'ERROR',
      message: `Unknown error`,
      fieldErrors: {},
      payload: formData,
      timeStamp: Date.now(),
    };
  }
};

export const toActionState = (status: ActionState['status'], message: string): ActionState => {
  return {
    status,
    message,
    fieldErrors: {},
    timeStamp: Date.now(),
  };
};
