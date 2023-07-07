"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./image-slider.css";

interface ImageSliderProps {
  images: Array<{
    id: number;
    src: StaticImageData;
    alt: string;
  }>;
}

export default function ImageSlider({ images }: ImageSliderProps) {
  return (
    <div className="h-full">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="image-slider"
        pagination={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {images.map((image) => (
          <SwiperSlide key={image.id} className="image-slider-slide">
            <Image
              src={image.src}
              alt={image.alt}
              className="col-span-2 row-span-2 object-cover h-full w-full rounded-[40px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
