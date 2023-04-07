import './Main.scss';
import { Component } from 'react';

import SearchSection from '../SearchSection';
import CardSection from '../CardSection';
import { MovieInterface, MovieService } from '../../services/movieService';
import PaginationSection from '../PaginationSection';
import { PaginationSectionInterface } from '../PaginationSection/PaginationSection';

interface MainState {
  items: Array<MovieInterface>;
  paginationInfo: PaginationSectionInterface | null;
}

export default class Main extends Component<unknown, MainState> {
  state: MainState = {
    items: [],
    paginationInfo: null,
  };

  componentDidMount() {
    MovieService.getMovies('return').then((e) =>
      this.setState({
        items: e.results,
        paginationInfo: { total: e.total_results, perPage: e.results.length },
      })
    );
  }

  render() {
    return (
      <main>
        <SearchSection />
        <CardSection items={this.state.items} />
        {this.state.paginationInfo && <PaginationSection info={this.state.paginationInfo} />}
      </main>
    );
  }
}
