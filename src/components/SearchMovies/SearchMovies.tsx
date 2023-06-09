import './SearchMovies.scss';
import { useCallback, useEffect, useState } from 'react';

import SearchSection from '../SearchSection';
import CardsBlock from '../CardsBlock';
import { GetMoviesModification, MovieService } from '../../services/movieService';
import { useFetching } from '../../hooks/useFetching';
import loadingWrapper from '../../wrappers/loadingWrapper';
import CardsSection from '../CardsSection';
import { PaginatePage } from '../Pagination/Pagination';

interface MainState {
  moviesInfo: GetMoviesModification | null;
}

const SearchMovies = () => {
  const [moviesInfo, setMoviesInfo] = useState<MainState['moviesInfo']>(null);
  const [query, setQuery] = useState('return');
  const [page, setPage] = useState(1);

  const setNewQuery = useCallback((query: string) => {
    setQuery(query);
  }, []);

  const paginatePage = useCallback<PaginatePage>((page: number) => {
    setPage(page);
  }, []);
  const { fetching, isLoading, error } = useFetching((query: string, page: number, controller: AbortController) =>
    MovieService.getMovies(query, page, controller).then((e) => setMoviesInfo(e))
  );
  const content = loadingWrapper<[GetMoviesModification | null, string, number]>(
    (moviesInfo, query, page) => {
      return (
        moviesInfo && (
          <CardsBlock type="search" currPage={page} paginatePage={paginatePage} moviesInfo={moviesInfo} query={query} />
        )
      );
    },
    isLoading,
    error,
    moviesInfo,
    query,
    page
  );

  useEffect(() => {
    const abortController = new AbortController();
    fetching(query, page, abortController);
    return () => {
      abortController.abort();
    };
  }, [query, page]);

  return (
    <>
      <SearchSection queryMethod={setNewQuery} defaultValue={query} />
      <CardsSection>{content}</CardsSection>
    </>
  );
};

export default SearchMovies;
