import { useSelector } from 'react-redux';

import { books } from '../../constans/books';
import { getButtonCondition } from '../../redux/selectors/selectors';
import { CardBook } from '../card-book/card-book';
import { ToolBar } from '../tool-bar';

import styles from './books-list.module.scss';

export const BooksList = () => {
  const isListForm = useSelector(getButtonCondition);

  return (
    <div className={styles.wrapper}>
      <ToolBar />
      <div className={isListForm ? styles.container : styles.listStyle}>
        {books.map((book) => (
          <CardBook book={book} key={book.id} />
        ))}
      </div>
    </div>
  );
};
