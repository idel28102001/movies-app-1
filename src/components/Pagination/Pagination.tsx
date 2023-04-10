import './Pagination.scss';
import { Component } from 'react';
import { Pagination as Pag } from 'antd';

export interface PaginationSectionInterface {
  total: number;
  perPage: number;
}

type PaginationSectionProps = PaginationSectionInterface;

export default class Pagination extends Component<PaginationSectionProps, unknown> {
  render() {
    return (
      <div className="pagination-section">
        <Pag defaultCurrent={1} total={this.props.total} defaultPageSize={this.props.perPage} />
      </div>
    );
  }
}
