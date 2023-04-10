import './CardsBlock.scss';
import { Component } from 'react';

import { GetMoviesModification } from '../../services/movieService';
import CardsFound from '../CardsFound';
import CardsNotFound from '../CardsNotFound';

interface CardSectionProps {
  moviesInfo: GetMoviesModification;
  query: string;
}

export default class CardsBlock extends Component<CardSectionProps, unknown> {
  render() {
    const notFound = this.props.moviesInfo.total_results === 0;
    if (notFound) return <CardsNotFound query={this.props.query} />;
    return <CardsFound moviesInfo={this.props.moviesInfo} />;
  }
}
