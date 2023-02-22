import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/icons/logo.svg';
import avatarIcon from '../../assets/img/avatar.png';
import { Burger } from '../burger-menu';
import { NavigationBar } from '../navigation-list';

import styles from './header.module.scss';

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const burgerRef = useRef<HTMLDivElement | null>(null);
  const booksRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleCloseOutside = (e: any) => {
      if (
        !navRef.current?.contains(e.target) &&
        !burgerRef.current?.contains(e.target) &&
        booksRef.current?.id !== e.target.id
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleCloseOutside);

    return () => {
      document.removeEventListener('click', handleCloseOutside);
    };
  }, []);

  function toggleMenuMode(): void {
    setIsOpen((prev) => !prev);
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
            burgerRef={burgerRef}
          />

          <div
            ref={navRef}
            data-test-id='burger-navigation'
            id='navOpen'
            role='presentation'
            className={`${isOpen ? styles.navWrapperOpen : ''} ${styles.navWrapper}`}
          >
            <NavigationBar booksRef={booksRef} isMobile={true} />
            <div className={styles.dopMenu}>
              <span>Профиль</span>
              <span>Выход</span>
            </div>
          </div>
          <h3>Библиотека</h3>
        </div>
        <div className={styles.user}>
          <p>Привет, Иван</p>
          <img src={avatarIcon} alt='user-avatar' />
        </div>
      </div>
    </header>
  );
};
