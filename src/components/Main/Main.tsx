import './Main.scss';
import { useCallback, useEffect, useState } from 'react';
import { CanceledError } from 'axios';

import SearchSection from '../SearchSection';
import CardsBlock from '../CardsBlock';
import { GetMoviesModification, MovieService } from '../../services/movieService';
import { useFetching } from '../../hooks/useFetching';
import loadingWrapper from '../../wrappers/loadingWrapper';
import CardsSection from '../CardsSection';

interface MainState {
  moviesInfo: GetMoviesModification | null;
}

const Main = () => {
  const [moviesInfo, setMoviesInfo] = useState<MainState['moviesInfo']>(null);
  const [query, setQuery] = useState('return');

  const setNewQuery = useCallback((query: string) => {
    setQuery(query);
  }, []);

  const { fetching, isLoading, error } = useFetching((query: string, controller: AbortController) =>
    MovieService.getMovies(query, controller)
      .then((e) => setMoviesInfo(e))
      .catch((e) => {
        const isInstanceOfAbort = e instanceof CanceledError;
        if (!isInstanceOfAbort) throw e;
      })
  );
  const content = loadingWrapper<[GetMoviesModification | null, string]>(
    (moviesInfo, query) => {
      return moviesInfo && <CardsBlock moviesInfo={moviesInfo} query={query} />;
    },
    isLoading,
    error,
    moviesInfo,
    query
  );

  useEffect(() => {
    const abortController = new AbortController();
    fetching(query, abortController);
    return () => {
      abortController.abort();
    };
  }, [query]);
  console.log(query, moviesInfo, `error - ${error}`, `isLoading - ${isLoading}`);

  return (
    <main>
      <SearchSection queryMethod={setNewQuery} defaultValue={query} />
      <CardsSection>{content}</CardsSection>
    </main>
  );
};

export default Main;
