"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import Logo from "@/public/assets/logo_german.png";

const getCurrentTime = () => {
  const date = new Date();
  // hours should add 0's if less than 10
  const hours = date.getHours();
  const hours_string = hours < 10 ? `0${hours}` : hours;
  const minutes = date.getMinutes();
  const minutes_string = minutes < 10 ? `0${minutes}` : minutes;
  const ampm = hours >= 12 ? "PM" : "AM";

  return { time: `${hours_string}:${minutes_string}`, ampm };
};

interface currentTimeState {
  time: string;
  ampm: string;
}

const Navbar = () => {
  const [currentTime, setCurrentTime] = useState<currentTimeState>({
    time: "",
    ampm: "",
  });

  // Llamada al método cada segundo
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);

    // Limpia el intervalo cuando el componente se desmonta
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <header className="flex justify-between mb-[50px]">
      <div className="flex items-center gap-11">
        <Image src={Logo} alt="Logo Club Alemán" className="w-20" />
        <h1 className="text-2xl">
          <span className="font-bold mr-2">Club Alemán</span>
          Puerto Montt
        </h1>
      </div>
      <div className="flex mt-4 gap-2">
        <p className="text-4xl font-medium">{currentTime.time}</p>
        <p>{currentTime.ampm}</p>
      </div>
    </header>
  );
};

export default Navbar;
