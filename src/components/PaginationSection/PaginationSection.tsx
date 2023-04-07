import './PaginationSection.scss';
import { Component } from 'react';
import { Pagination } from 'antd';

export interface PaginationSectionInterface {
  total: number;
  perPage: number;
}

interface PaginationSectionProps {
  info: PaginationSectionInterface;
}

export default class PaginationSection extends Component<PaginationSectionProps, unknown> {
  render() {
    return (
      <section className="pagination-section">
        <Pagination defaultCurrent={1} total={this.props.info.total} defaultPageSize={this.props.info.perPage} />
      </section>
    );
  }
}
