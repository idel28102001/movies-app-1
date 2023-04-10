import './CardsSection.scss';
import { Component } from 'react';

interface CardsSectionProps {
  children: string | JSX.Element | JSX.Element[] | null;
}

export default class CardsSection extends Component<CardsSectionProps, unknown> {
  render() {
    return <section className="card-section">{this.props.children}</section>;
  }
}
