import { NavLink } from 'react-router-dom';

import { elementsNav } from '../../constans/navigation-bar';

import styles from './navigation-bar.module.scss';

export const NavigationBar = () => (
  <div className={styles.wrapper}>
    <ul>
      {elementsNav.map((elNav, index) => (
        <li key={elNav.id}>
          <NavLink
            to={`/${elNav.id}`}
            className={({ isActive }) =>
              `${isActive ? styles.active : ''} ${styles.navLink} ${index === 0 ? styles.start : ''}`
            }
          >
            {elNav.title}
          </NavLink>
          {elNav.categories && (
            <ul>
              {elNav.categories.map((elCategories) => (
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
