import { Component } from 'react';
import './card.scss';
import { Rate, Space, Tag } from 'antd';

export default class Card extends Component<unknown, unknown> {
  render() {
    return (
      <div className="card">
        <div className="card__image">
          <img className="card__image--img" src={require('../../images/poster.jpg')} alt="poster" />
        </div>
        <div className="card__info info">
          <h4 className="info__heading">The way back</h4>
          <span className="info__release-date">March 5, 2020</span>
          <Space size={[0, 8]}>
            <Tag>Action</Tag>
            <Tag>Drama</Tag>
          </Space>
        </div>
        <div className="card__descr">
          <p className="card__descr--text">
            A former basketball all-star, who has lost his wife and family foundation in a struggle with addiction
            attempts to regain his soul and salvation by becoming the coach of a disparate ethnically mixed high ...
          </p>
          <div className="card__descr--rate">
            <Rate allowHalf defaultValue={2.5} count={10} />
          </div>
        </div>
        <div className="card__score">6.6</div>
      </div>
    );
  }
}
