import axios from 'axios';

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

interface GetMoviesModification {
  page: number;
  results: Array<MovieInterface>;
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

  static getMoviesRequest(query: string) {
    return axios
      .get<GetMoviesApi>(MovieService.moviesURL, {
        params: {
          api_key: MovieService.apiKey,
          query,
        },
      })
      .then((e) => e.data);
  }

  static getGenresRequest() {
    return axios
      .get<GetGenresApi>(MovieService.genresURL, { params: { api_key: MovieService.apiKey } })
      .then((e) => e.data);
  }

  static async getMovies(query: string): Promise<GetMoviesModification> {
    const [movies, genres] = await Promise.all([MovieService.getMoviesRequest(query), MovieService.getGenresRequest()]);
    const results = movies.results.map((result) => ({
      ...result,
      genres: genres.genres.filter((e) => result.genre_ids.includes(e.id)),
    }));
    return { ...movies, results };
  }
}
