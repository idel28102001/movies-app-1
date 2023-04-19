import './SearchSection.scss';
import { Component } from 'react';

import SearchInput from '../SearchInput';
import { SearchQuery } from '../SearchInput/SearchInput';

interface SearchSectionProps {
  queryMethod: SearchQuery;
  defaultValue: string;
}

export default class SearchSection extends Component<SearchSectionProps, unknown> {
  render() {
    return (
      <section className="search-section">
        <SearchInput queryMethod={this.props.queryMethod} defaultValue={this.props.defaultValue} />
      </section>
    );
  }
}
