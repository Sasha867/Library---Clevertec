import { SyntheticEvent, useState } from 'react';
import { Link } from 'react-router-dom';

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

  function closeNavMobile(e: SyntheticEvent): void {
   
    const {target} = e;

    console.log(target);


    if (e.target) {
      toggleMenuMode();
    }
  }

  return (
    <header>
      <div className={styles.container}>
        <div className={styles.logoAndTitle}>
          <Link to='/'>
            <img src={logoImg} alt='logo-clevertec-company' />
          </Link>
          <Burger
            toggleMenuMode={() => {
              toggleMenuMode();
            }}
            isOpen={isOpen}
          />

          <div
            data-test-id='burger-navigation'
            id='navOpen'
            role='presentation'
            onClick={(e) => {
              closeNavMobile(e);
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
