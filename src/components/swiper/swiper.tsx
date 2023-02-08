import React, { useRef, useState } from 'react';
// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { BookItem } from '../../constans/interfaces';
import { getImage } from '../../utils/utils';

import styles from './swiper.module.scss';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/free-mode';
import 'swiper/scss/navigation';
import 'swiper/scss/thumbs';

type Props = {
  book: BookItem;
};

export const SwiperAdd = ({ book }: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <React.Fragment>
      <Swiper
        // style={{
        //   '--swiper-navigation-color': '#fff',
        //   '--swiper-pagination-color': '#fff',
        // }}
        // thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed() ? thumbsSwiper : null }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className='mySwiper2'
      >
        {book.image.map((url) => (
          <SwiperSlide key={new Date().getTime() + url}>
            <img src={getImage(url)} alt='book_image' />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
     
        // onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className='mySwiper'
      >
        {book.image.map((url) => (
          <SwiperSlide key={new Date().getTime() + url}>
            <img src={getImage(url)} alt='book_image' />
          </SwiperSlide>
        ))}
      </Swiper>
    </React.Fragment>
  );
};
