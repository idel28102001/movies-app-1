import './CardsBlock.scss';
import { Component } from 'react';

import { GetMoviesModification } from '../../services/movieService';
import CardsFound from '../CardsFound';
import CardsNotFound from '../CardsNotFound';
import { PaginatePage } from '../Pagination/Pagination';

interface CardSectionProps {
  moviesInfo: GetMoviesModification;
  query: string;
  paginatePage: PaginatePage;
  currPage: number;
}

export default class CardsBlock extends Component<CardSectionProps, unknown> {
  render() {
    const notFound = this.props.moviesInfo.total_results === 0;
    if (notFound) return <CardsNotFound query={this.props.query} />;
    return (
      <CardsFound
        currPage={this.props.currPage}
        paginatePage={this.props.paginatePage}
        moviesInfo={this.props.moviesInfo}
      />
    );
  }
}
