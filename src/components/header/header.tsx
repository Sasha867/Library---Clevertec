import burger from '../../assets/icons/burger.svg';
import logoImg from '../../assets/icons/logo.svg';
import { user } from '../../constans/books';

import styles from './header.module.scss';

export const Header = () => (
  <header>
    <div className={styles.container}>
      <div className={styles.logoAndTitle}>
        <img src={logoImg} alt='logo-clevertec-company' />
        <img className={styles.burger} src={burger} alt="menu" />
        <h3>Библиотека</h3>
      </div>
      <div className={styles.user}>
        <p>Привет, {user.name}</p>
        <img src={user.avatar} alt='user-avatar' />
      </div>
    </div>
  </header>
);
