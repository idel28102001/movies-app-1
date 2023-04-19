import axios from 'axios';

import { FormatDataInterface } from '../components/Card/Card';
import FormatData from '../common/formatData';

export interface MovieInterface {
  id: number;
  title: string;
  overview: string;
  vote_average: number;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  genre_ids: Array<number>;
}

export interface GenreInterface {
  id: number;
  name: string;
}

interface GetMoviesApi {
  page: number;
  results: Array<MovieInterface>;
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

export interface CreateGuestSessionInt {
  success: boolean;
  guest_session_id: string;
  expires_at: string;
}

export interface PostRateMovieProps {
  guestSession: string;
  movieId: number;
  rate: number;
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

  static createGuestSession(): Promise<CreateGuestSessionInt> {
    const api = '/authentication/guest_session/new';
    const url = `${this.baseUrl}${api}`;
    return axios.get<CreateGuestSessionInt>(url, { params: { api_key: MovieService.apiKey } }).then((e) => e.data);
  }

  static async postRateMovie({ movieId, rate, guestSession }: PostRateMovieProps): Promise<void> {
    const api = `/movie/${movieId}/rating`;
    const url = `${this.baseUrl}${api}`;
    await axios.post(
      url,
      { value: rate },
      {
        params: {
          api_key: MovieService.apiKey,
          guest_session_id: guestSession,
        },
      }
    );
  }

  static async getRatedMovies(
    guestSessionId: string,
    page: number,
    controller?: AbortController
  ): Promise<GetMoviesModification> {
    const movies = await MovieService.getRatedMoviesRequest(guestSessionId, page, controller);
    const results = movies.results.map(FormatData.formatData);
    return { ...movies, results };
  }

  static getRatedMoviesUrl(guestSessionId: string): string {
    return `${this.baseUrl}/guest_session/${guestSessionId}/rated/movies`;
  }

  static getRatedMoviesRequest(guestSessionId: string, page: number, controller?: AbortController) {
    const signal = controller ? controller.signal : undefined;
    const url = MovieService.getRatedMoviesUrl(guestSessionId);
    return axios
      .get<GetMoviesApi>(url, {
        signal,
        params: {
          page,
          api_key: MovieService.apiKey,
        },
      })
      .then((e) => e.data);
  }

  static getMoviesRequest(query: string, page: number, controller?: AbortController): Promise<GetMoviesApi> {
    const signal = controller ? controller.signal : undefined;
    return axios
      .get<GetMoviesApi>(MovieService.moviesURL, {
        signal,
        params: {
          page,
          api_key: MovieService.apiKey,
          query,
        },
      })
      .then((e) => e.data);
  }

  static getGenresRequest(controller?: AbortController): Promise<GetGenresApi> {
    const signal = controller ? controller.signal : undefined;
    return axios
      .get<GetGenresApi>(MovieService.genresURL, { signal, params: { api_key: MovieService.apiKey } })
      .then((e) => e.data);
  }

  static async getMovies(query: string, page: number, controller?: AbortController): Promise<GetMoviesModification> {
    const movies = await MovieService.getMoviesRequest(query, page, controller);
    const results = movies.results.map(FormatData.formatData);
    return { ...movies, results };
  }
}
