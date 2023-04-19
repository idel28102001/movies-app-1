import { useEffect, useState } from 'react';

import { GenreInterface, MovieService } from '../services/movieService';

import { useFetching } from './useFetching';

export const useGenres = () => {
  const [genres, setGenres] = useState<Array<GenreInterface>>([]);
  const { fetching } = useFetching((controller: AbortController) =>
    MovieService.getGenresRequest(controller).then((e) => setGenres(e.genres))
  );
  useEffect(() => {
    const controller = new AbortController();
    fetching(controller);
    return () => {
      controller.abort();
    };
  }, []);
  return genres;
};
