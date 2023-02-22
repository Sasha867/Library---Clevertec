import React from 'react';
import { useSelector } from 'react-redux';

import { getStatusLoader } from '../../redux/selectors/selectors';

import styles from './loader.module.scss';

export const Loader = () => {
  const isShowLoader = useSelector(getStatusLoader);

  return (
    <React.Fragment>
      <div />
      {isShowLoader && (
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <span className={styles.loader} />
          </div>
        </div>
      )}
    </React.Fragment>
  );
};
