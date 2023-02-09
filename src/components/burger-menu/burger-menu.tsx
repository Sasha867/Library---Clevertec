import styles from './burger-menu.module.scss';

type Props = {
  toggleMenuMode: (event: React.MouseEvent<HTMLElement>) => void;
  isOpen: boolean;
};

export const Burger = ({ toggleMenuMode, isOpen }: Props) => (
  <div role='presentation' onClick={toggleMenuMode} className={styles.burgerBar}>
    <span className={`${isOpen && styles.closeLine1} ${styles.barLine}`} />
    <span className={`${isOpen && styles.closeLine2} ${styles.barLine}`} />
    <span className={`${isOpen && styles.closeLine3} ${styles.barLine}`} />
  </div>
);
