import './Genres.scss';
import { Component } from 'react';
import { Space, Tag } from 'antd';

export interface GenreInterface {
  label: string;
}

interface GenresProps {
  genres: Array<GenreInterface>;
}

export default class Genres extends Component<GenresProps, unknown> {
  render() {
    return (
      <Space size={[0, 8]}>
        {this.props.genres.map((e, index) => (
          <Tag key={index}>{e.label}</Tag>
        ))}
      </Space>
    );
  }
}
