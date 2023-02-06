import { useDispatch, useSelector } from 'react-redux';

import { setFormList, setFormTile } from '../../redux/feachers/visible-state-slice';
import { getButtonCondition } from '../../redux/selectors/selectors';

import styles from './tool-bar.module.scss';

export const ToolBar = () => {
  const dispatch = useDispatch();
  const isToggle = useSelector(getButtonCondition);

  function handleFormOfList() {
    dispatch(setFormList());
  }

  function handleFormOfTile() {
    dispatch(setFormTile());
  }

  return (
    <div className={styles.wrapper}>
      <input className={styles.search} type='text' placeholder='Поиск книги или автора…' />
      <button type='button' className={styles.sortBtn}>
        По рейтингу
      </button>
      <button type='button' className={`${styles.search} ${styles.btnSearch}`} aria-label='search' />
      <button type='button' className={`${styles.sortBtn} ${styles.btnRatingSmall}`} aria-label='rating' />
      <button
        data-test-id='button-menu-view-window'
        onClick={handleFormOfTile}
        type='button'
        className={`${styles.btnTileForm} ${isToggle && styles.active}`}
        aria-label='tole form'
      />
      <button
        data-test-id='button-menu-view-list'
        onClick={handleFormOfList}
        type='button'
        className={`${styles.btnListForm} ${!isToggle && styles.active}`}
        aria-label='list form'
      />
    </div>
  );
};
