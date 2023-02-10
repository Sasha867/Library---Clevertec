import { MutableRefObject, SyntheticEvent, useEffect } from 'react';

import styles from './burger-menu.module.scss';

type Props = {
  toggleMenuMode: (event: React.MouseEvent<HTMLElement>) => void;
  isOpen: boolean;
  burgerRef: MutableRefObject<any>;
};

export const Burger = ({ toggleMenuMode, isOpen, burgerRef }: Props) => (
  <div ref={burgerRef} data-test-id='button-burger' role='presentation' onClick={toggleMenuMode} className={styles.burgerBar}>
    <span className={`${isOpen && styles.closeLine1} ${styles.barLine}`} />
    <span className={`${isOpen && styles.closeLine2} ${styles.barLine}`} />
    <span className={`${isOpen && styles.closeLine3} ${styles.barLine}`} />
  </div>
);
