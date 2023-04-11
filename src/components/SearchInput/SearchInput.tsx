import './SearchInput.scss';
import { Component } from 'react';
import { Input } from 'antd';
import { debounce } from 'lodash';

export type SearchQuery = (query: string) => void;

interface SearchInputProps {
  queryMethod: SearchQuery;
  defaultValue: string;
}

export default class SearchInput extends Component<SearchInputProps, unknown> {
  timeout = -1 as never as NodeJS.Timer;

  debounceQueryInput = debounce((value: string) => {
    this.props.queryMethod(value);
  }, 1000);

  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.debounceQueryInput(e.target.value);
  };

  render() {
    return (
      <div className="search-section__search-input search-input">
        <Input placeholder="Type to search..." onChange={this.onChange} defaultValue={this.props.defaultValue} />
      </div>
    );
  }
}
