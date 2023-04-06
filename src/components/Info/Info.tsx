import './Info.scss';
import { Component } from 'react';

import Genres from '../Genres';
import { GenreInterface } from '../Genres/Genres';

export interface InfoInterface {
  heading: string;
  releaseDate: string;
  genres: Array<GenreInterface>;
}

interface InfoProps {
  item: InfoInterface;
}

export default class Info extends Component<InfoProps, unknown> {
  render() {
    return (
      <div className="card__info info">
        <h4 className="info__heading">{this.props.item.heading}</h4>
        <span className="info__release-date">{this.props.item.releaseDate}</span>
        <Genres genres={this.props.item.genres} />
      </div>
    );
  }
}
