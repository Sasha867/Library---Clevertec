import styles from './card-button.module.scss';

type Props = {
  reserve: boolean;
  data?: string;
};

export const CardButton = ({ reserve, data }: Props) => (
  <button className={`${styles.cardBtn} ${reserve ? styles.reserved : ''}`} type='button'>
    {reserve ? `Занята до ${data}` : 'Забронировать'}
  </button>
);
