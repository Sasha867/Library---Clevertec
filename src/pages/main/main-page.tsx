import { BooksList } from '../../components/books-list';
import { NavigationBar } from '../../components/navigation-list';

import styles from './main-page.module.scss';

export const MainPage = () => (
  <main>
    <div className={styles.wrapper}>
      <div className={styles.navWrapper}>
        <NavigationBar isMobile = {false} booksRef={null} />
      </div>
      <BooksList />
    </div>
  </main>
);
