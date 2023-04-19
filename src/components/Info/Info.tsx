import './Info.scss';

import Genres from '../Genres';

export interface InfoInterface {
  heading: string;
  releaseDate: string;
  genre_ids: Array<number>;
}

interface InfoProps {
  item: InfoInterface;
}

const Info = (props: InfoProps) => {
  return (
    <div className="card__info info">
      <h4 className="info__heading">{props.item.heading}</h4>
      <span className="info__release-date">{props.item.releaseDate}</span>
      <Genres genres={props.item.genre_ids} />
    </div>
  );
};

export default Info;
