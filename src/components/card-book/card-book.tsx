import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

// import imageBook from '../../assets/img/imageBook.png';
import noImage from '../../assets/img/NoImageBook.png';
import { host } from '../../constans/books-api';
import { BookItem, ChoiceBook } from '../../constans/interfaces';
import { getButtonCondition } from '../../redux/selectors/selectors';
import { CardButton } from '../card-button/card-button';
import { Rating } from '../rating';

import styles from './card-book.module.scss';

type Props = {
  book: ChoiceBook | BookItem;
};

export const CardBook = ({ book }: Props) => {
  const { category } = useParams();
  const navigate = useNavigate();
  const listForm = useSelector(getButtonCondition);

  const openUserBook = () => navigate(`/books/${category}/${book.id}`);

  return (
    <div
      data-test-id='card'
      role='presentation'
      onClick={openUserBook}
      className={`${listForm ? styles.wrapper : styles.listContainer}`}
    >
      <img className={styles.cardImage} src={`${book.image ? host + book.image.url : noImage}`} alt='book_image' />

      <div className={styles.ratingWrapper}>
        {listForm && <Rating book={book} />}
        <h4 className={styles.title}>{book.title}</h4>
        {book.authors.length &&
          book.authors.map((author, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <p key={index} className={styles.author}>
              {author}
            </p>
          ))}
        <div className={styles.btnContainer}>
          <CardButton booking={book.booking} />
        </div>
        <div className={styles.listForm}>
          <div className={styles.ratingContainer}>
            <Rating book={book} />
          </div>
          <div className={styles.btnContainer}>
            <CardButton booking={book.booking} />
          </div>
        </div>
      </div>
    </div>
  );
};
