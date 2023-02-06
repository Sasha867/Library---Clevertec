import facebook from '../../assets/icons/Icon_Social_fb.svg';
import In from '../../assets/icons/Icon_Social_in.svg';
import instagram from '../../assets/icons/Icon_Social_ist.svg';
import vk from '../../assets/icons/Icon_Social_vk.svg';

import styles from './footer.module.scss';

export const Footer = () => (
  <footer>
    <div className={styles.container}>
      <div className={styles.copyright}>
        <span>&copy; 2020-2023 Cleverland. Все права защищены.</span>
      </div>
      <ul className={styles.socialNetworks}>
        <li>
          {' '}
          <a href='https://www.facebook.com' target='_blank' rel='noreferrer'>
            <img src={facebook} alt='link-facebbok' />
          </a>
        </li>
        <li>
          <a href='https://www.instagram.com/' target='_blank' rel='noreferrer'>
            <img src={instagram} alt='link-instagram' />
          </a>
        </li>
        <li>
          <a href='https://vk.com/' target='_blank' rel='noreferrer'>
            <img src={vk} alt='link-vk' />
          </a>
        </li>
        <li>
          <a href='https://www.linkedin.com/' target='_blank' rel='noreferrer'>
            <img src={In} alt='link-linkedin' />
          </a>
        </li>
      </ul>
    </div>
  </footer>
);
