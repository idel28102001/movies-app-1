import './SearchSection.scss';
import { Component } from 'react';

import TabsPart from '../TabsPart';
import SearchInput from '../SearchInput';

export default class SearchSection extends Component<unknown, unknown> {
  render() {
    return (
      <section className="search-section">
        <TabsPart />
        <SearchInput />
      </section>
    );
  }
}
