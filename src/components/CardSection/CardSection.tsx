import './CardSection.scss';
import { Component } from 'react';

import CardsList from '../CardsList';

export default class CardSection extends Component<unknown, unknown> {
  render() {
    return (
      <section className="cards-section">
        <CardsList />
      </section>
    );
  }
}
