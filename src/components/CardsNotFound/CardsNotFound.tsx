import './CardsNotFound.scss';
import { Component } from 'react';

interface CardsNotFoundProps {
  query: string;
}

export default class CardsNotFound extends Component<CardsNotFoundProps, unknown> {
  render() {
    return <span>По вашему запросу &ldquo;{this.props.query}&rdquo; ничего не найдено</span>;
  }
}
