import { SyntheticEvent, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { elementsNav } from '../../constans/navigation-bar';

import styles from './navigation-bar.module.scss';

type Props = {
  isMobile: boolean;
};

export const NavigationBar = ({ isMobile }: Props) => {
  const [isOpenNavBar, setIsOpenNavBar] = useState(false);

  function handleNavBar(e: SyntheticEvent, index: number) {
    if (index === 0) {
      e.preventDefault();
      setIsOpenNavBar(!isOpenNavBar);
    }
  }

  return (
    <div className={`${isMobile ? styles.wrapperMobile : styles.wrapperDesktop}`}>
      <ul>
        {elementsNav.map((elNav, index) => (
          <li  key={new Date().getTime() + elNav.id}>
            <NavLink id={elNav.id}
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
            {isOpenNavBar && (
              <ul>
                {elNav.categories?.map((elCategories) => (
                  <li key={new Date().getTime() + elCategories.id}>
                    <NavLink
                      className={({ isActive }) => `${isActive ? styles.active : ''} ${styles.categoriesLink} `}
                      to={`/${elNav.id}/${elCategories.id}`}
                    >
                      {elCategories.title}
                      <span className={styles.amount}>{elCategories.amount}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
