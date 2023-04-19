import './Movies.scss';
import RatedMovies from '../RatedMovies';
import SearchMovies from '../SearchMovies';

interface MoviesProps {
  tab: string;
}

const Movies = ({ tab }: MoviesProps) => {
  switch (tab) {
    case '1': {
      return <SearchMovies />;
    }
    case '2': {
      return <RatedMovies />;
    }
    default: {
      return null;
    }
  }
};

export default Movies;
