"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import Click from "@/public/assets/click.svg";
import ClickGray from "@/public/assets/click-gray.svg";
import Link from "next/link";
import { ModuleModal } from "@/components/module-modal";

const ModuleList: React.FC = () => {
  const router = useRouter();
  return (
    <>
      <Link
        className="cursor-pointer col-span-1 bg-gray flex justify-between	flex-col rounded-[40px] p-[35px]"
        href={`/?module=directives`}
        as={`/directives`}
      >
        <div className="flex justify-between items-center">
          <p className="text-white text-[18px]">5 DIRECTIVOS</p>
          <Image src={Click} alt="Click" />
        </div>
        <p className="text-[45px] text-white">Directivos</p>
      </Link>
      <div
        className="cursor-pointer col-span-1 bg-yellow flex justify-between	flex-col rounded-[40px] p-[35px]"
        onClick={() => router.push(`/members`)}
      >
        <div className="flex justify-between items-center">
          <p className="text-white text-[18px]">120 SOCIOS</p>
          <Image src={Click} alt="Click" />
        </div>
        <p className="text-[45px] text-white">Socios</p>
      </div>
      <div
        className="cursor-pointer col-span-1 bg-gray-light flex justify-between	flex-col rounded-[40px] p-[35px]"
        onClick={() => router.push(`/history`)}
      >
        <div className="flex justify-between items-center">
          <p className="text-white text-[18px]">NUESTRA HISTORIA</p>
          <Image src={Click} alt="Click" />
        </div>
        <p className="text-[45px] text-white">Historia</p>
      </div>
      <div
        className="cursor-pointer col-span-1 bg-gray-ultra-light flex justify-between	flex-col rounded-[40px] p-[35px]"
        onClick={() => router.push(`/gallery`)}
      >
        <div className="flex justify-between items-center">
          <p className="text-gray text-[18px]">IMÁGENES</p>
          <Image src={ClickGray} alt="Click" />
        </div>
        <p className="text-gray text-[45px]">Galería</p>
      </div>
    </>
  );
};

export default ModuleList;
