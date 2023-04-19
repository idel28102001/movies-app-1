import { useCallback, useState } from 'react';
import { AxiosError, CanceledError } from 'axios';

export interface ErrorInterface {
  code: number;
  message: string;
  description: string;
}

export const useFetching = <Args extends unknown[], T = Promise<void>>(
  callback: (...args: Args) => Promise<T>
): { fetching: (...args: Args) => Promise<void>; isLoading: boolean; error: ErrorInterface | null } => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<ErrorInterface | null>(null);
  const fetching = useCallback(
    (...args: Args) => {
      setError(null);
      setIsLoading(true);
      return callback(...args)
        .then(() => {
          setIsLoading(false);
        })
        .catch((e) => {
          const isInstanceOfAbort = e instanceof CanceledError;
          if (isInstanceOfAbort) {
            setIsLoading(true);
            setError(null);
            return;
          }
          if (e instanceof AxiosError) {
            const code = e?.response?.status || 400;
            const message = `Ошибка ${code}`;
            setError({ code, message, description: e.message });
          } else {
            setError({
              code: 500,
              message: 'Ошибка 500',
              description: 'Произошла неизвестная ошибка, попробуйте зайти позже',
            });
            setIsLoading(false);
          }
        });
    },
    [setError, setIsLoading]
  );
  return { fetching, isLoading, error };
};
