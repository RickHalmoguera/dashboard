import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';



import { CardReview } from '../CardReview';
import { SwiperReviewStyled } from './SwiperReview';

export const SwiperReviews = ()=>{
    return(
        <SwiperReviewStyled
          
          slidesPerView={1}
          navigation
          loop={true}
          breakpoints={{
          
            1000: {
              slidesPerView: 2,
            },
            1500: {
              slidesPerView: 3,
            },
          }}
          
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