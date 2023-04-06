import { Component } from 'react';

import './AppMain.scss';
import Main from '../Main';
import Header from '../Header';

export default class AppMain extends Component<unknown, unknown> {
  render() {
    return (
      <div className="container app">
        <Header />
        <Main />
      </div>
    );
  }
}
