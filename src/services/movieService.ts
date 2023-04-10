import axios from 'axios';

import { FormatDataInterface } from '../components/Card/Card';
import FormatData from '../common/formatData';

interface BaseMovieInterface {
  id: number;
  title: string;
  overview: string;
  vote_average: number;
  popularity: number;
  poster_path: string | null;
  release_date: string;
}

export interface MovieInterface extends BaseMovieInterface {
  genres: Array<GenreInterface>;
}

export interface GetMovieInterface extends BaseMovieInterface {
  genre_ids: Array<number>;

  [feature: string]: string | number | Array<number> | null;
}

export interface GenreInterface {
  id: number;
  name: string;
}

interface GetMoviesApi {
  page: number;
  results: Array<GetMovieInterface>;
  total_pages: number;
  total_results: number;
}

interface GetGenresApi {
  genres: Array<GenreInterface>;
}

export interface GetMoviesModification {
  page: number;
  results: Array<FormatDataInterface>;
  total_pages: number;
  total_results: number;
}

export class MovieService {
  private static baseUrl = 'https://api.themoviedb.org/3';
  private static apiKey = process.env.REACT_APP_API_KEY || '';

  static get moviesURL() {
    return `${MovieService.baseUrl}/search/movie`;
  }

  static get genresURL() {
    return `${MovieService.baseUrl}/genre/movie/list`;
  }

  static getMoviesRequest(query: string, controller?: AbortController) {
    const signal = controller ? controller.signal : undefined;
    return axios
      .get<GetMoviesApi>(MovieService.moviesURL, {
        signal,
        params: {
          api_key: MovieService.apiKey,
          query,
        },
      })
      .then((e) => e.data);
  }

  static getGenresRequest(controller?: AbortController) {
    const signal = controller ? controller.signal : undefined;
    return axios
      .get<GetGenresApi>(MovieService.genresURL, { signal, params: { api_key: MovieService.apiKey } })
      .then((e) => e.data);
  }

  static async getMovies(query: string, controller?: AbortController): Promise<GetMoviesModification> {
    const [movies, genres] = await Promise.all([
      MovieService.getMoviesRequest(query, controller),
      MovieService.getGenresRequest(controller),
    ]);
    const modificationResults = movies.results.map((result) => ({
      ...result,
      genres: genres.genres.filter((e) => result.genre_ids.includes(e.id)),
    }));
    const results = modificationResults.map(FormatData.formatData);
    return { ...movies, results };
  }
}
