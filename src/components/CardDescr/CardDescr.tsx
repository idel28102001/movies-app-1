import './CardDescr.scss';
import { Component } from 'react';

import RatePart from '../RatePart';
import { ChangeRate } from '../RatePart/RatePart';
import Score from '../Score';

export interface CardDescrInterface {
  description: string;
  score: number;
}

interface CardDescrProps {
  item: CardDescrInterface;
  changeRate: ChangeRate;
  rate: number;
}

export default class CardDescr extends Component<CardDescrProps, unknown> {
  render() {
    return (
      <div className="card__card-descr card-descr">
        <p className="card-descr__text">{this.props.item.description}</p>
        <RatePart rate={this.props.rate} changeRate={this.props.changeRate} />
        <div className="card-descr__score">
          <Score amount={this.props.item.score} />
        </div>
      </div>
    );
  }
}
