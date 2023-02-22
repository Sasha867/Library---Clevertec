import { Booking } from '../../constans/interfaces';

import styles from './card-button.module.scss';

type Props = {
  booking: Booking;
};

export const CardButton = ({ booking }: Props) => {
  const dataOrder = 'dddf';

  // console.log(dataOrder);

  return (
    <button className={`${styles.cardBtn} ${booking ? styles.reserved : ''}`} type='button'>
      {booking ? `Занята до ${booking.dateOrder}` : 'Забронировать'}
    </button>
  );
};
