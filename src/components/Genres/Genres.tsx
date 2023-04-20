import './Genres.scss';
import { Tag } from 'antd';
import { useContext } from 'react';

import { AuthContext } from '../../context';

interface GenresProps {
  genres: Array<number>;
}

const Genres = (props: GenresProps) => {
  const { genres } = useContext(AuthContext);
  return (
    <ul className="genres__list">
      {props.genres.map((e) => {
        const genre = genres.find((curr) => curr.id === e);
        if (!genre) return null;
        return (
          <li key={genre.id}>
            <Tag>{genre.name}</Tag>
          </li>
        );
      })}
    </ul>
  );
};

export default Genres;
