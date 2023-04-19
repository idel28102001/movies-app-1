import { useCallback, useContext, useEffect, useState } from 'react';

import { AuthContext } from '../context';
import { ChangeRate } from '../components/RatePart/RatePart';
import { MovieService, PostRateMovieProps } from '../services/movieService';

export interface RatedMovie {
  id: number;
  rate: number;
}

export type RatedMovies = Array<RatedMovie>;

const saveRatedMovies = (guestSession: string, movies: RatedMovies) => {
  const key = `rated_movies:${guestSession}`;
  const ratedMoviesJSON = JSON.stringify(movies);
  localStorage.setItem(key, ratedMoviesJSON);
};

const getRatesFromLocale = (guestSession: string): RatedMovies => {
  const key = `rated_movies:${guestSession}`;
  let rates: RatedMovies;
  try {
    const ratesJSON = localStorage.getItem(key) || '';
    rates = JSON.parse(ratesJSON);
  } catch (e) {
    rates = [];
  }
  return rates;
};
const getRate = (guestSession: string, movieId: number): RatedMovie => {
  const ratedMovies = getRatesFromLocale(guestSession);
  const rated = ratedMovies.find((e) => e.id === movieId);
  return rated || { id: movieId, rate: 0 };
};
const saveRate = ({ rate, movieId, guestSession }: PostRateMovieProps) => {
  const ratedMovies = getRatesFromLocale(guestSession);
  const rated = ratedMovies.find((e) => e.id === movieId);
  let newRatedMovies;
  if (!rated) {
    newRatedMovies = [...ratedMovies, { id: movieId, rate }];
  } else {
    newRatedMovies = ratedMovies.map((e) => {
      if (e.id !== movieId) return e;
      return { id: e.id, rate };
    });
  }
  saveRatedMovies(guestSession, newRatedMovies);
};

export const useRate = (id: number): [number, ChangeRate] => {
  const { guestSession } = useContext(AuthContext);
  const [rate, setRate] = useState(0);
  const changeRate = useCallback<ChangeRate>(
    (rate) => {
      if (!guestSession) return;
      MovieService.postRateMovie({ rate, movieId: id, guestSession });
      saveRate({ rate, movieId: id, guestSession });
      setRate(rate);
    },
    [guestSession]
  );
  useEffect(() => {
    if (!guestSession) return;
    const ratedMovie = getRate(guestSession, id);
    setRate(ratedMovie.rate);
  }, [guestSession, id]);
  return [rate, changeRate];
};
