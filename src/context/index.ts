import { createContext } from 'react';

export interface AuthContextInterface {
  guestSession: string | null;
}

export const AuthContext = createContext<AuthContextInterface>({ guestSession: null });
