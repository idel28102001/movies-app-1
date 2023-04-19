import './Card.scss';

import Info from '../Info';
import { InfoInterface } from '../Info/Info';
import CardDescr from '../CardDescr';
import { CardDescrInterface } from '../CardDescr/CardDescr';
import CardImage from '../CardImage';
import { CardImageInterface } from '../CardImage/CardImage';
import { useRate } from '../../hooks/useRate';

export interface FormatDataInterface {
  id: number;
  infoItem: InfoInterface;
  cardDescr: CardDescrInterface;
  cardImage: CardImageInterface;
}

interface CardProps {
  item: FormatDataInterface;
}

const Card = (props: CardProps) => {
  const [rate, setRate] = useRate(props.item.id);
  return (
    <div className="card">
      <CardImage item={props.item.cardImage} />
      <Info item={props.item.infoItem} />
      <CardDescr item={props.item.cardDescr} rate={rate} changeRate={setRate} />
    </div>
  );
};

export default Card;
