import './CardImage.scss';
import { Component } from 'react';

export interface CardImageInterface {
  src: string;
  altText: string;
}

interface CardImageProps {
  item: CardImageInterface;
}

export default class CardImage extends Component<CardImageProps, unknown> {
  render() {
    return (
      <div className="card__image">
        <img className="card__image--img" src={this.props.item.src} alt={this.props.item.altText} />
      </div>
    );
  }
}
