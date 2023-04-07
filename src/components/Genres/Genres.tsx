import './Genres.scss';
import { Component } from 'react';
import { Space, Tag } from 'antd';

export interface GenreInterface {
  id: number;
  name: string;
}

interface GenresProps {
  genres: Array<GenreInterface>;
}

export default class Genres extends Component<GenresProps, unknown> {
  render() {
    return (
      <Space size={[0, 4]} style={{ flexWrap: 'wrap' }}>
        {this.props.genres.map((e) => (
          <Tag key={e.id}>{e.name}</Tag>
        ))}
      </Space>
    );
  }
}
