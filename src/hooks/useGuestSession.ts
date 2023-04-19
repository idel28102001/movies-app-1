import { useState } from 'react';

import { AuthContextInterface } from '../context';
import { MovieService } from '../services/movieService';

export const useGuestSession = () => {
  const key = 'guestSession';
  const guest = localStorage.getItem(key);
  const [guestSession, setGuestSession] = useState<AuthContextInterface['guestSession']>(guest);
  if (guestSession) return guestSession;
  MovieService.createGuestSession().then((e) => {
    localStorage.setItem(key, e.guest_session_id);
    setGuestSession(e.guest_session_id);
  });
  return guestSession;
};
