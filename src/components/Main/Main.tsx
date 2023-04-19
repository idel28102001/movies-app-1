import './Main.scss';
import { useCallback, useState } from 'react';

import TabsPart from '../TabsPart';
import Movies from '../Movies';
import { ChangeTab } from '../TabsPart/TabsPart';

const Main = () => {
  const [tab, setTab] = useState<string>('1');
  const changeTab: ChangeTab = useCallback((tabKey: string) => {
    setTab(tabKey);
  }, []);
  return (
    <main>
      <TabsPart changeTab={changeTab} />
      <Movies tab={tab} />
    </main>
  );
};

export default Main;
