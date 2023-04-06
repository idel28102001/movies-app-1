import './RatePart.scss';
import { Component } from 'react';
import { Rate } from 'antd';

interface RatePartProps {
  rate: number;
}

export default class RatePart extends Component<RatePartProps, unknown> {
  render() {
    return (
      <div className="card__descr--rate">
        <Rate allowHalf defaultValue={this.props.rate} count={10} />
      </div>
    );
  }
}
