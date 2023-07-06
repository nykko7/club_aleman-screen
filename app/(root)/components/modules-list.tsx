'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";

import Click from "@/public/assets/click.svg";
import ClickGray from "@/public/assets/click-gray.svg";
import { useState } from "react";

import Table from './table'

const directiveRoles = [
  "president",
  "vice_president",
  "secretary",
  "treasurer",
  "board_member",
  "honor_advisor",
  "honor_member",
];

const memberRoles = [
  'member'
]

const ModuleList: React.FC = () => {
  const [dialog, setDialog] = useState({ title: '', open: false, roles: ['member'] })
  const router = useRouter();

  return (
    <>
      <Table
        title={dialog.title}
        open={dialog.open}
        roles={dialog.roles}
        setOpen={setDialog}
      />
      <div
        className="cursor-pointer col-span-1 bg-gray flex justify-between	flex-col rounded-[40px] p-[35px]"
        onClick={() => {setDialog({ title: 'Directivos', open: true, roles: directiveRoles })}}
      >
        <div className="flex justify-between items-center">
          <p className="text-white text-[18px]">12 DIRECTIVOS</p>
          <Image src={Click} alt="Click" />
        </div>
        <p className="text-[45px] text-white">Directivos</p>
      </div>
      <div
        className="cursor-pointer col-span-1 bg-yellow flex justify-between	flex-col rounded-[40px] p-[35px]"
        onClick={() => {setDialog({ title: 'Socios', open: true, roles: memberRoles })}}
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
