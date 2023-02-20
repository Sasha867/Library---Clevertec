import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { getCardsBooks } from '../../redux/features/cards-books';
import { getButtonCondition, getCardsBooksCollectionState } from '../../redux/selectors/selectors';
import { useAppDispatch } from '../../redux/store';
import { CardBook } from '../card-book/card-book';
import { ToolBar } from '../tool-bar';

import styles from './books-list.module.scss';

export const BooksList = () => {
  const dispatch = useAppDispatch();
  const isListForm = useSelector(getButtonCondition);
  const booksState = useSelector(getCardsBooksCollectionState);

  useEffect(() => {
    dispatch(getCardsBooks());
  }, [dispatch]);

  return (
    <div className={styles.wrapper}>
      <ToolBar />
      <div className={isListForm ? styles.container : styles.listStyle}>
        {booksState.cardsBooksCollection &&
          booksState.cardsBooksCollection.map((book) => <CardBook book={book} key={book.id} />)}
      </div>
    </div>
  );
};
