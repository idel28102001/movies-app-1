import './Score.scss';
import classNames from 'classnames';

interface ScoreProps {
  amount: number;
}

const Score = ({ amount }: ScoreProps) => {
  const inRange = (num: number, a?: number, b?: number) => {
    let isInRange = true;
    if (a !== undefined) {
      isInRange = isInRange && num >= a;
    }
    if (b !== undefined) {
      isInRange = isInRange && num < b;
    }
    return isInRange;
  };
  const style = classNames('score', {
    'score--low': inRange(amount, 0, 3),
    'score--medium': inRange(amount, 3, 5),
    'score--mean': inRange(amount, 5, 7),
    'score--high': inRange(amount, 7, 10),
  });
  return <span className={style}>{amount}</span>;
};

export default Score;
