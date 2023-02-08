import { SyntheticEvent, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { elementsNav } from '../../constans/navigation-bar';

import styles from './navigation-bar.module.scss';

export const NavigationBar = () => {
  const [isOpenNavBar, setIsOpenNavBar] = useState(false);

  function handleNavBar(e: SyntheticEvent, index: number) {
    if (index === 0) {
      e.preventDefault();
      setIsOpenNavBar(!isOpenNavBar);
    }
  }

  return (
    <div className={styles.wrapper}>
      <ul>
        {elementsNav.map((elNav, index) => (
          <li key={elNav.id}>
            <NavLink
              onClick={(e) => {
                handleNavBar(e, index);
              }}
              to={`/${elNav.id}`}
              className={({ isActive }) =>
                `${isActive ? styles.active : ''} ${styles.navLink} ${index === 0 ? styles.start : ''} ${
                  isOpenNavBar ? styles.start1 : ''
                }`
              }
            >
              {elNav.title}
            </NavLink>
            {isOpenNavBar && (
              <ul>
                {elNav.categories?.map((elCategories) => (
                  <li key={elCategories.id}>
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
