import React from 'react';

import { SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { CardReview } from './CardReview';
import { SwiperReviewStyled } from './SwiperReview';


export const SwiperReviews = ()=>{
    return(
      <SwiperReviewStyled
      slidesPerView={3}
      spaceBetween={30}
      loop ={true}
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

    </SwiperReviewStyled>
    )
}