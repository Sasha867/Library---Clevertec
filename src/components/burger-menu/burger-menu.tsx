import { useState } from 'react';

import styles from './burger-menu.module.scss';

export const Burger = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function toggleMenuMode() {
    setIsOpen(!isOpen);
  }

  return (
    <div role='presentation' onClick={toggleMenuMode} className={styles.burgerBar}>
      <span className={`${isOpen && styles.closeLine1} ${styles.barLine}`} />
      <span className={`${isOpen && styles.closeLine2} ${styles.barLine}`} />
      <span className={`${isOpen && styles.closeLine3} ${styles.barLine}`} />
    </div>
  );
};
