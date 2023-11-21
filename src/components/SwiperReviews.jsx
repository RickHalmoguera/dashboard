import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';



import { CardReview } from './CardReview';

export const SwiperReviews = ()=>{
    return(
        <Swiper
        spaceBetween={30}
          slidesPerView={3}
          navigation
          loop={true}
        >
          <SwiperSlide>
            <CardReview />
          </SwiperSlide>
          <SwiperSlide>
            <CardReview />
          </SwiperSlide>
          <SwiperSlide>
            <CardReview />
          </SwiperSlide>
          <SwiperSlide>
            <CardReview />
          </SwiperSlide>
          <SwiperSlide>
            <CardReview />
          </SwiperSlide>
        </Swiper>
    )
}