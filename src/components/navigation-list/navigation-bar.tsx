import { MutableRefObject, SyntheticEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';

import { elementsNav } from '../../constans/navigation-bar';
import { getNavBarState } from '../../redux/selectors/selectors';

import styles from './navigation-bar.module.scss';

type Props = {
  isMobile: boolean;
  booksRef: any;
};

export const NavigationBar = ({ isMobile, booksRef }: Props) => {
  const [isOpenNavBar, setIsOpenNavBar] = useState(true);
  const dispatch = useDispatch();
  const isNavBar = useSelector(getNavBarState);

  const prefix = isMobile ? 'burger-' : 'navigation-';
  const location = useLocation();

  const closeNavBar = () => {
    setIsOpenNavBar(false);
  };

  useEffect(() => {
    if (!location.pathname.includes('/books/')) {
      closeNavBar();
    }
  }, [location.pathname]);

  function handleNavBar(e: SyntheticEvent, index: number) {
    if (index === 0) {
      e.preventDefault();
      setIsOpenNavBar(!isOpenNavBar);
    } else {
      closeNavBar();
    }
  }

  return (
    <div className={`${isMobile ? styles.wrapperMobile : styles.wrapperDesktop}`}>
      <ul>
        {elementsNav.map((elNav, index) => (
          <li key={new Date().getTime() + elNav.id}>
            <NavLink
              ref={index === 0 ? booksRef : null}
              id={elNav.id}
              data-test-id={`${prefix}${elNav.test}`}
              onClick={(e) => {
                handleNavBar(e, index);
              }}
              to={`/${elNav.id}`}
              className={({ isActive }) =>
                `${isActive ? styles.active : ''} ${styles.navLink} ${isActive ? styles.start : ''} ${
                  index === 0 ? styles.dropUp : ''
                } ${isOpenNavBar ? styles.dropDown : ''}`
              }
            >
              {elNav.title}
            </NavLink>
            <ul className={isOpenNavBar ? '' : styles.switchOff}>
              {elNav.categories?.map((elCategories) => (
                <li key={new Date().getTime() + elCategories.id}>
                  <NavLink
                    data-test-id={`${prefix}${elCategories.test}`}
                    className={({ isActive }) => `${isActive ? styles.active : ''} ${styles.categoriesLink} `}
                    to={`/${elNav.id}/${elCategories.id}`}
                  >
                    {elCategories.title}
                    <span className={styles.amount}>{elCategories.amount}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};
