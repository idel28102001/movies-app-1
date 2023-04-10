import './Spinner.scss';
import { Component } from 'react';
import { Spin } from 'antd';

export default class Spinner extends Component<unknown, unknown> {
  render() {
    return (
      <div className="spinner">
        <Spin size="large" />
      </div>
    );
  }
}
