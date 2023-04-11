import './Pagination.scss';
import { Component } from 'react';
import { Pagination as Pag } from 'antd';

export interface PaginationSectionInterface {
  total: number;
  perPage: number;
  currPage: number;
}

export type PaginatePage = (page: number) => void;

interface PaginationSectionProps extends PaginationSectionInterface {
  paginatePage: PaginatePage;
}

export default class Pagination extends Component<PaginationSectionProps, unknown> {
  render() {
    return (
      <div className="pagination-section">
        <Pag
          onChange={(page) => this.props.paginatePage(page)}
          defaultCurrent={this.props.currPage}
          total={this.props.total}
          defaultPageSize={this.props.perPage}
        />
      </div>
    );
  }
}
