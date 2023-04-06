import './CardsList.scss';
import { Col, Grid, Row } from 'antd';

import Card from '../Card';

const { useBreakpoint } = Grid;
const CardsList = () => {
  const screens = useBreakpoint();
  const colCount = screens.lg ? 2 : 1;
  const itemsCount = Array.from(Array(6).keys());
  const rowGap = screens.xs && !screens.md ? 20 : 36;
  return (
    <Row gutter={[36, rowGap]}>
      {itemsCount.map((e) => (
        <Col key={e} span={24 / colCount}>
          <Card />
        </Col>
      ))}
    </Row>
  );
};
export default CardsList;
