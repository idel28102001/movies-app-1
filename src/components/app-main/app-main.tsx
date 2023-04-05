import { Component } from 'react';

import './app-main.scss';
import Card from '../card';

export default class AppMain extends Component<unknown, unknown> {
  render() {
    return (
      <div style={{ padding: '50px' }}>
        <Card />
      </div>
    );
  }
}
