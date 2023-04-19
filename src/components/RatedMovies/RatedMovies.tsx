import './RatedMovies.scss';
import { useCallback, useContext, useEffect, useState } from 'react';
import { CanceledError } from 'axios';

import CardsSection from '../CardsSection';
import { AuthContext } from '../../context';
import Spinner from '../Spinner';
import { useFetching } from '../../hooks/useFetching';
import { GetMoviesModification, MovieService } from '../../services/movieService';
import loadingWrapper from '../../wrappers/loadingWrapper';
import CardsBlock from '../CardsBlock';
import { PaginatePage } from '../Pagination/Pagination';

const RatedMovies = () => {
  const { guestSession } = useContext(AuthContext);
  if (!guestSession) return <Spinner />;
  const [moviesInfo, setMoviesInfo] = useState<GetMoviesModification | null>(null);
  const [page, setPage] = useState<number>(1);
  const paginatePage = useCallback<PaginatePage>((page: number) => {
    setPage(page);
  }, []);
  const { fetching, isLoading, error } = useFetching(
    async (guestSession: string, page: number, controller: AbortController) => {
      MovieService.getRatedMovies(guestSession, page, controller)
        .then((e) => setMoviesInfo(e))
        .catch((e) => {
          const isInstanceOfAbort = e instanceof CanceledError;
          if (!isInstanceOfAbort) throw e;
        });
    }
  );
  const content = loadingWrapper<[GetMoviesModification | null, number]>(
    (moviesInfo, page) => {
      return (
        moviesInfo && <CardsBlock currPage={page} paginatePage={paginatePage} moviesInfo={moviesInfo} type="rated" />
      );
    },
    isLoading,
    error,
    moviesInfo,
    page
  );
  useEffect(() => {
    const abortController = new AbortController();
    fetching(guestSession, page, abortController);
    return () => {
      abortController.abort();
    };
  }, [guestSession, page]);
  console.log(content);
  return (
    <>
      <CardsSection>{content}</CardsSection>
    </>
  );
};

export default RatedMovies;
