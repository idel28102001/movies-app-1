import './TabsPart.scss';
import { Component } from 'react';
import { Tabs } from 'antd';
import { TabsProps } from 'antd/lib';

export type ChangeTab = (tabKey: string) => void;

interface TabsPartProps {
  changeTab: ChangeTab;
}

export default class TabsPart extends Component<TabsPartProps, unknown> {
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
        <Tabs defaultActiveKey={items[0].key} items={items} onChange={(e) => this.props.changeTab(e)} />
      </div>
    );
  }
}
