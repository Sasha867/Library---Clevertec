import { useState } from 'react';
import { FreeMode, Navigation, Pagination, Scrollbar, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import noImage from '../../assets/img/BigNoImage.png';
import { host } from '../../constans/books-api';
import { Book } from '../../redux/features/choice-book';

import styles from './swiper.module.scss';

import 'swiper/scss';
import 'swiper/scss/free-mode';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/thumbs';
import 'swiper/scss/effect-coverflow';
import 'swiper/scss/scrollbar';

interface Props {
  book: Book;
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
        {book.choiceBook &&
          book.choiceBook.images.map((img, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <SwiperSlide key={index}>
              <img className={styles.mainImg} src={host + img.url || noImage} alt='image_book' />
            </SwiperSlide>
          ))}
      </Swiper>
      {book.choiceBook && book.choiceBook.images.length > 1 && (
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
            {book.choiceBook &&
              book.choiceBook.images.map((img, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <SwiperSlide key={index}>
                  <img className={styles.lessImg} src={host + img.url || noImage} alt='img_book' />
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
