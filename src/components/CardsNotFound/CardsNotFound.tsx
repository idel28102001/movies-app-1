import './CardsNotFound.scss';
import { Component } from 'react';

interface CardsNotFoundProps {
  query?: string;
  type: string;
}

export default class CardsNotFound extends Component<CardsNotFoundProps, unknown> {
  render() {
    let text: string;
    switch (this.props.type) {
      case 'search': {
        text = `По вашему запросу &ldquo;${this.props.query || 'default'}&rdquo; ничего не найдено`;
        break;
      }
      case 'rated': {
        text = 'У вас пока нет оценённых фильмов';
        break;
      }
      default: {
        text = 'В списке нет фильмов';
      }
    }
    return <span className="cards-not-found">{text}</span>;
  }
}
