'use client'

import React from 'react';
import Image from 'next/image';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './carrousel.css'

import Image1 from '@/public/assets/image1.jpeg'
import Image2 from '@/public/assets/image2.jpeg'
import Image3 from '@/public/assets/image3.jpeg'

export default function Carrousel() {
  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
        pagination={true}
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
            <Image src={Image1} alt="Imagen 1"/>
        </SwiperSlide>

        <SwiperSlide>
            <Image src={Image2} alt="Imagen 1"/>
        </SwiperSlide>

        <SwiperSlide>
            <Image src={Image3} alt="Imagen 1"/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
