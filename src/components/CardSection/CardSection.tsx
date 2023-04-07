import './CardSection.scss';
import { Component } from 'react';

import CardsList from '../CardsList';
import { MovieInterface } from '../../services/movieService';
import FormatData from '../../common/formatData';
import { FormatDataInterface } from '../Card/Card';

interface CardSectionProps {
  items: Array<MovieInterface>;
}

export default class CardSection extends Component<CardSectionProps, unknown> {
  getCardsItems(items: Array<MovieInterface>): Array<FormatDataInterface> {
    return items.map((e) => FormatData.formatData(e));
  }

  render() {
    return (
      <section className="card-section">
        <CardsList items={this.getCardsItems(this.props.items)} />
      </section>
    );
  }
}
