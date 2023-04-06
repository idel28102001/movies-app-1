import './TabsPart.scss';
import { Component } from 'react';
import { Tabs } from 'antd';
import { TabsProps } from 'antd/lib';

export default class TabsPart extends Component<unknown, unknown> {
  render() {
    const items: TabsProps['items'] = [
      {
        key: '1',
        label: 'Search',
      },
      {
        key: '2',
        label: 'Rated',
      },
    ];
    return (
      <div className="search-section__tabs-part tabs-part">
        <Tabs defaultActiveKey="1" items={items} />
      </div>
    );
  }
}
