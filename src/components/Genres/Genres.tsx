import './Genres.scss';
import { Space, Tag } from 'antd';
import { useContext } from 'react';

import { AuthContext } from '../../context';

interface GenresProps {
  genres: Array<number>;
}

const Genres = (props: GenresProps) => {
  const { genres } = useContext(AuthContext);
  return (
    <Space size={[0, 4]} style={{ flexWrap: 'wrap' }}>
      {props.genres.map((e) => {
        const genre = genres.find((curr) => curr.id === e);
        if (!genre) return null;
        return <Tag key={genre.id}>{genre.name}</Tag>;
      })}
    </Space>
  );
};

export default Genres;
