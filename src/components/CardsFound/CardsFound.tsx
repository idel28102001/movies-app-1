import './CardsFound.scss';
import { Component } from 'react';

import CardsList from '../CardsList';
import Pagination from '../Pagination';
import { GetMoviesModification } from '../../services/movieService';
import { PaginatePage } from '../Pagination/Pagination';

interface CardsFoundProps {
  moviesInfo: GetMoviesModification;
  paginatePage: PaginatePage;
  currPage: number;
}

export default class CardsFound extends Component<CardsFoundProps, unknown> {
  render() {
    return (
      <>
        <CardsList items={this.props.moviesInfo.results} />
        <Pagination
          currPage={this.props.currPage}
          paginatePage={this.props.paginatePage}
          total={this.props.moviesInfo.total_results}
          perPage={this.props.moviesInfo.results.length}
        />
      </>
    );
  }
}
