import './SearchInput.scss';
import { Component } from 'react';
import { Input } from 'antd';

export default class SearchInput extends Component<unknown, unknown> {
  render() {
    return (
      <div className="search-section__search-input search-input">
        <Input placeholder="Type to search..." />
      </div>
    );
  }
}
