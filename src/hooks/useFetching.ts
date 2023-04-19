import { useCallback, useState } from 'react';
import { AxiosError } from 'axios';

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
  console.log(isLoading, 9999);
  const fetching = useCallback(
    (...args: Args) => {
      setError(null);
      setIsLoading(true);
      return callback(...args)
        .catch((e) => {
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
          }
        })
        .then((e) => {
          setIsLoading(false);
        });
    },
    [setError, setIsLoading]
  );
  return { fetching, isLoading, error };
};
