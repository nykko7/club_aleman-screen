"use client";

import { useEffect, useState } from "react";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Click from '../public/assets/click.svg'


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "../app/(root)/(modules)/gallery/components/carrousel.css";

import Image1 from "@/public/assets/image1.jpeg";
import Image2 from "@/public/assets/image2.jpeg";
import Image3 from "@/public/assets/image3.jpeg";


export const InactiveModal = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  const closeDialog = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={closeDialog}
    >
      <div className="space-y-4 py-2 pb-4 w-[70vw]">
      <div className="flex justify-center items-center">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards, Autoplay]}
            className="mySwiper"
            pagination={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide className="swiper-slide-gallery">
              <Image src={Image1} alt="Imagen 1" />
            </SwiperSlide>

            <SwiperSlide className="swiper-slide-gallery">
              <Image src={Image2} alt="Imagen 1" />
            </SwiperSlide>

            <SwiperSlide className="swiper-slide-gallery">
              <Image src={Image3} alt="Imagen 1" />
            </SwiperSlide>
          </Swiper>
        </ div>
        <div className=" space-x-2 flex items-center justify-center w-full">
          <Button onClick={closeDialog} className="rounded-[15px] mt-[15px]">
            Presiona aquí para interactuar 
            <Image src={Click} alt="Click" className="ml-2 w-[25px]" />
          </Button>
        </div>
      </div>
    </Modal>
  );
};
