import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import button from '../../assets/icons/closeBtnSearchMobile.svg';
import { setFormList, setFormTile } from '../../redux/feachers/visible-state-slice';
import { getButtonCondition } from '../../redux/selectors/selectors';

import styles from './tool-bar.module.scss';

export const ToolBar = () => {
  const [isOpenSerch, setIsOpenSearch] = useState(false);
  const dispatch = useDispatch();
  const isToggle = useSelector(getButtonCondition);
  const searchBtnClasses = `${styles.btnSearch} ${styles.search}`;
  const raitingBtnClasses = `${styles.sortBtn} ${styles.btnRatingSmall}`;

  console.log(isOpenSerch);

  const handleClickIsOpenSearch = () => setIsOpenSearch(!isOpenSerch);

  function handleFormOfList() {
    dispatch(setFormList());
  }

  function handleFormOfTile() {
    dispatch(setFormTile());
  }

  return (
    <div className={styles.wrapper}>
      <input className={styles.search} type='text' placeholder='Поиск книги или автора…' />
      <div className={`${styles.mobileSizeWrapper} ${isOpenSerch ? '' : styles.switchOff}`}>
        <input
          className={`${styles.searchMobilesize} ${styles.search}`}
          data-test-id='input-search'
          type='text'
          placeholder='Поиск книги или автора…'
        />
        <button
          data-test-id='button-search-close'
          className={styles.btnCloseMobileSearch}
          type='button'
          aria-label='close_search'
        >
          <img role='presentation' onClick={handleClickIsOpenSearch} src={button} alt='button_close' />
        </button>
      </div>
      <button type='button' className={styles.sortBtn}>
        По рейтингу
      </button>
      <button
        onClick={handleClickIsOpenSearch}
        type='button'
        data-test-id='button-search-open'
        className={searchBtnClasses}
        aria-label='search'
      />
      {/* className={isOpenSerch ? styles.switchOff : raitingBtnClasses} */}
      <button type='button' className={raitingBtnClasses} aria-label='rating' />
      <div className={styles.btnViewContauner}>
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
    </div>
  );
};
