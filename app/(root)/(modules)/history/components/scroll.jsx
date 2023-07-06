"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";

// import required modules
import { FreeMode, Scrollbar, Mousewheel } from "swiper/modules";

export default function Scroll({ children }) {
  return (
    <>
      <Swiper
        direction={"vertical"}
        slidesPerView={"auto"}
        freeMode={true}
        scrollbar={true}
        mousewheel={true}
        modules={[FreeMode, Scrollbar, Mousewheel]}
        style={{
          width: "50%",
          height: "500px",
        }}
      >
        <SwiperSlide
          style={{ height: "auto", boxSizing: "border-box", padding: "30px" }}
        >
          {children}
        </SwiperSlide>
      </Swiper>
    </>
  );
}
