import './Main.scss';
import { Component } from 'react';

import SearchSection from '../SearchSection';
import CardSection from '../CardSection';

export default class Main extends Component<unknown, unknown> {
  render() {
    return (
      <main>
        <SearchSection />
        <CardSection />
      </main>
    );
  }
}
