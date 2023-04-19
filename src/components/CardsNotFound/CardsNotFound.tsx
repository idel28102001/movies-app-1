import './CardsNotFound.scss';
import { Component } from 'react';

interface CardsNotFoundProps {
  query?: string;
  type: string;
}

export default class CardsNotFound extends Component<CardsNotFoundProps, unknown> {
  render() {
    switch (this.props.type) {
      case 'search': {
        return <span>По вашему запросу &ldquo;{this.props.query || 'default'}&rdquo; ничего не найдено</span>;
      }
      case 'rated': {
        return <span>У вас пока нет оценённых фильмов</span>;
      }
      default: {
        return <span>В списке нет фильмов</span>;
      }
    }
  }
}
