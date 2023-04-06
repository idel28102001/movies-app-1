import './CardDescr.scss';
import { Component } from 'react';

import RatePart from '../RatePart';

export interface CardDescrInterface {
  description: string;
  rate: number;
  score: string;
}

interface CardDescrProps {
  item: CardDescrInterface;
}

export default class CardDescr extends Component<CardDescrProps, unknown> {
  render() {
    return (
      <div className="card__descr">
        <p className="card__descr--text">{this.props.item.description}</p>
        <RatePart rate={this.props.item.rate} />
        <div className="card__score">{this.props.item.score}</div>
      </div>
    );
  }
}
