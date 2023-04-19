import './Movies.scss';
import SearchMovies from '../SearchMovies';
import RatedMovies from '../RatedMovies';

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
