import './CardsFound.scss';
import { Component } from 'react';

import CardsList from '../CardsList';
import Pagination from '../Pagination';
import { GetMoviesModification } from '../../services/movieService';

interface CardsFoundProps {
  moviesInfo: GetMoviesModification;
}

export default class CardsFound extends Component<CardsFoundProps, unknown> {
  render() {
    return (
      <>
        <CardsList items={this.props.moviesInfo.results} />
        <Pagination total={this.props.moviesInfo.total_results} perPage={this.props.moviesInfo.results.length} />
      </>
    );
  }
}
