import { Component } from 'react';
import './Card.scss';

import Info from '../Info';
import { InfoInterface } from '../Info/Info';
import CardDescr from '../CardDescr';
import { CardDescrInterface } from '../CardDescr/CardDescr';
import CardImage from '../CardImage';
import { CardImageInterface } from '../CardImage/CardImage';

export default class Card extends Component<unknown, unknown> {
  render() {
    const genres = [{ label: 'Action' }, { label: 'Drama' }];
    const infoItem: InfoInterface = { releaseDate: 'March 5, 2020', heading: 'The way back', genres };
    const cardDescr: CardDescrInterface = {
      rate: 2.5,
      description:
        'A former basketball all-star, who has lost his wife and family foundation in a struggle with addiction\n' +
        '            attempts to regain his soul and salvation by becoming the coach of a disparate ethnically mixed high ...',
      score: '6.6',
    };
    const cardImage: CardImageInterface = {
      altText: 'poster',
      src: require('../../images/poster.jpg'),
    };
    return (
      <div className="card">
        <CardImage item={cardImage} />
        <Info item={infoItem} />
        <CardDescr item={cardDescr} />
      </div>
    );
  }
}
