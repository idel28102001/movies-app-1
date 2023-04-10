import { useState } from 'react';
import { AxiosError } from 'axios';

export interface ErrorInterface {
  code: number;
  message: string;
  description: string;
}

export const useFetching = <Args extends unknown[], T = Promise<void>>(
  callback: (...args: Args) => T
): { fetching: (...args: Args) => Promise<void>; isLoading: boolean; error: ErrorInterface | null } => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<ErrorInterface | null>(null);
  const fetching = async (...args: Args) => {
    try {
      setError(null);
      setIsLoading(true);
      await callback(...args);
    } catch (e) {
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
    } finally {
      setIsLoading(false);
    }
  };
  return { fetching, isLoading, error };
};
