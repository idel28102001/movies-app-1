import './CardsList.scss';
import { Col, Grid, Row } from 'antd';

import Card from '../Card';
import { FormatDataInterface } from '../Card/Card';

const { useBreakpoint } = Grid;

interface CardsListProps {
  items: Array<FormatDataInterface>;
}

const CardsList = (props: CardsListProps) => {
  const screens = useBreakpoint();
  const colCount = screens.lg ? 2 : 1;
  const rowGap = screens.xs && !screens.md ? 20 : 36;
  return (
    <Row className="card-list" gutter={[36, rowGap]}>
      {props.items.map((e) => (
        <Col style={{ display: 'flex' }} key={e.id} span={24 / colCount}>
          <Card item={e} />
        </Col>
      ))}
    </Row>
  );
};
export default CardsList;
