import './RatePart.scss';
import { Component } from 'react';
import { Rate } from 'antd';

export type ChangeRate = (rate: number) => void;

interface RatePartProps {
  rate: number;
  changeRate: ChangeRate;
}

export default class RatePart extends Component<RatePartProps, unknown> {
  render() {
    return (
      <div className="card__descr--rate rate">
        <Rate allowHalf value={this.props.rate} count={10} onChange={this.props.changeRate} />
      </div>
    );
  }
}
