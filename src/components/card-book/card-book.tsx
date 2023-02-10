import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import imageBook from '../../assets/img/imageBook.png';
import noImage from '../../assets/img/NoImageBook.png';
import { BookItem } from '../../constans/interfaces';
import { getButtonCondition } from '../../redux/selectors/selectors';
import { CardButton } from '../card-button/card-button';
import { Rating } from '../rating';

import styles from './card-book.module.scss';

type Props = {
  book: BookItem;
};

export const CardBook = ({ book }: Props) => {
  const navigate = useNavigate();
  const listForm = useSelector(getButtonCondition);

  function openUserBook() {
    navigate(`/books/${book.category}/${book.id}`);
  }

  return (
    <div
      data-test-id='card'
      role='presentation'
      onClick={openUserBook}
      className={`${listForm ? styles.wrapper : styles.listContainer}`}
    >
      <img className={styles.cardImage} src={book.image[0] ? imageBook : noImage} alt='background' />

      <div className={styles.ratingWrapper}>
        {listForm && <Rating book={book} />}
        <h4 className={styles.title}>{book.title}</h4>
        <p className={styles.author}>{book.author}</p>
        <div className={styles.btnContainer}>
          <CardButton reserve={book.reserve} data={book.data} />
        </div>
        <div className={styles.listForm}>
          <div className={styles.ratingContainer}>
            <Rating book={book} />
          </div>
          <div className={styles.btnContainer}>
            <CardButton reserve={book.reserve} data={book.data} />
          </div>
        </div>
      </div>
    </div>
  );
};
