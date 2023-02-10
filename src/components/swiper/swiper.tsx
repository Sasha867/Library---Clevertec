import { useState } from 'react';
import { FreeMode, Navigation, Pagination, Scrollbar, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import noImage from '../../assets/img/BigNoImage.png';
import { BookItem } from '../../constans/interfaces';

import styles from './swiper.module.scss';

import 'swiper/scss';
import 'swiper/scss/free-mode';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/thumbs';
import 'swiper/scss/effect-coverflow';
import 'swiper/scss/scrollbar';

interface Props {
  book: BookItem;
}

export const SwiperAdd = ({ book }: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <div className={styles.wrapper}>
      <Swiper
        data-test-id='slide-big'
        loop={true}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        pagination={true}
        modules={[FreeMode, Navigation, Pagination, Thumbs]}
        className={styles.main}
      >
        {book.image.map((img, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <SwiperSlide key={index}>
            <img className={styles.mainImg} src={img || noImage} alt='image_book' />
          </SwiperSlide>
        ))}
      </Swiper>
      {book.image.length > 1 && (
        <div className={styles.pagination}>
          <Swiper
            data-test-id='slide-mini'
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={5}
            freeMode={true}
            scrollbar={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Scrollbar, Thumbs]}
            className={styles.less}
          >
            {book.image.map((img, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <SwiperSlide key={index}>
                <img className={styles.lessImg} src={img || noImage} alt='img_book' />
              </SwiperSlide>
            ))}
          </Swiper>
          <span className={styles.blur} />
          <span className={styles.blur} />
        </div>
      )}
    </div>
  );
};
