// import burger from '../../assets/icons/burger.svg';
import { SyntheticEvent, useState } from 'react';

import logoImg from '../../assets/icons/logo.svg';
import { user } from '../../constans/books';
import { Burger } from '../burger-menu';
import { NavigationBar } from '../navigation-list';

import styles from './header.module.scss';

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function toggleMenuMode(): void {
    setIsOpen(!isOpen);
  }

  function closeNavMobile({ target }: any): void {
    if (target.id === 'navOpen') {
      toggleMenuMode();
    }
  }

  return (
    <header>
      <div className={styles.container}>
        <div className={styles.logoAndTitle}>
          <img src={logoImg} alt='logo-clevertec-company' />
          <Burger
            toggleMenuMode={() => {
              toggleMenuMode();
            }}
            isOpen={isOpen}
          />

          <div
            id='navOpen'
            role='presentation'
            onClick={({ target }) => {
              closeNavMobile({ target });
            }}
            className={`${isOpen ? styles.navWrapperOpen : ''} ${styles.navWrapper}`}
          >
            <NavigationBar isMobile={isOpen} />
            <div className={styles.dopMenu}>
              <span>Профиль</span>
              <span>Выход</span>
            </div>
          </div>
          <h3>Библиотека</h3>
        </div>
        <div className={styles.user}>
          <p>Привет, {user.name}</p>
          <img src={user.avatar} alt='user-avatar' />
        </div>
      </div>
    </header>
  );
};
