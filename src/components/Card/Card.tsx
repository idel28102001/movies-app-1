import { Component } from 'react';
import './Card.scss';

import Info from '../Info';
import { InfoInterface } from '../Info/Info';
import CardDescr from '../CardDescr';
import { CardDescrInterface } from '../CardDescr/CardDescr';
import CardImage from '../CardImage';
import { CardImageInterface } from '../CardImage/CardImage';

export interface FormatDataInterface {
  id: number;
  infoItem: InfoInterface;
  cardDescr: CardDescrInterface;
  cardImage: CardImageInterface;
}

interface CardProps {
  item: FormatDataInterface;
}

export default class Card extends Component<CardProps, unknown> {
  render() {
    return (
      <div className="card">
        <CardImage item={this.props.item.cardImage} />
        <Info item={this.props.item.infoItem} />
        <CardDescr item={this.props.item.cardDescr} />
      </div>
    );
  }
}
