import { createContext } from 'react';

import { GenreInterface } from '../services/movieService';

export interface AuthContextInterface {
  guestSession: string | null;
  genres: Array<GenreInterface>;
}

export const AuthContext = createContext<AuthContextInterface>({ guestSession: null, genres: [] });
