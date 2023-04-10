import './SearchInput.scss';
import { Component } from 'react';
import { Input } from 'antd';

export type SearchQuery = (query: string) => void;

interface SearchInputProps {
  queryMethod: SearchQuery;
  defaultValue: string;
}

export default class SearchInput extends Component<SearchInputProps, unknown> {
  timeout = -1 as never as NodeJS.Timer;
  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      const value = e.target.value;
      this.props.queryMethod(value);
    }, 200);
  };

  render() {
    return (
      <div className="search-section__search-input search-input">
        <Input placeholder="Type to search..." onChange={this.onChange} defaultValue={this.props.defaultValue} />
      </div>
    );
  }
}
