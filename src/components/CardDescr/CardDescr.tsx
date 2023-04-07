import './CardDescr.scss';
import { Component } from 'react';

import RatePart from '../RatePart';

export interface CardDescrInterface {
  description: string;
  rate: number;
  score: number;
}

interface CardDescrProps {
  item: CardDescrInterface;
}

export default class CardDescr extends Component<CardDescrProps, unknown> {
  render() {
    return (
      <div className="card__card-descr card-descr">
        <p className="card-descr__text">{this.props.item.description}</p>
        <RatePart rate={this.props.item.rate} />
        <div className="card-descr__score">{this.props.item.score}</div>
      </div>
    );
  }
}
