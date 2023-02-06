import raitingIcon from '../../assets/icons/Star.svg';
import raitingIconEmpty from '../../assets/icons/Star_empty.svg';
import { BookItem } from '../../constans/interfaces';

import styles from './rating.module.scss';

type Props = {
  book: BookItem;
};

export const Rating = ({ book }: Props) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className={styles.ratingContainer}>
      {book.stars === 0 ? (
        <span>ещё нет оценок</span>
      ) : (
        <div className={styles.rating}>
          {stars.map((star) => (
            <div key={star}>
              {book.stars < star ? (
                <img src={raitingIconEmpty} alt='emptyStar' />
              ) : (
                <img src={raitingIcon} alt='emptyStar' />
              )}
            </div>
          ))}{' '}
        </div>
      )}
    </div>
  );
};
