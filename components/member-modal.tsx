"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import ImagenMiembro from "@/public/assets/member-image.png";

interface IMember {
  [key: string]: string;
}

interface MemberModalProps {
  isOpen: boolean;
  onClose: () => void;
  member: IMember;
}

interface IRoles {
  [key: string]: string;
}

const roles: IRoles = {
  president: "Presidente",
  vice_president: "Vicepresidente",
  secretary: "Secretario",
  treasurer: "Tesorero",
  board_member: "Miembro De La Junta",
  honor_advisor: "Consejero De Honor",
  honor_member: "Miembro De Honor",
  member: "Socio",
};

export const MemberModal: React.FC<MemberModalProps> = ({
  isOpen,
  onClose,
  member,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="space-y-4 py-2">
        <div className="flex gap-5 items-center">
          <Image src={ImagenMiembro} alt={"Imagen de miembro"}></Image>
          <div className="flex flex-col gap-3">
            <div>
              <Label className="text-gray-500">Nombre</Label>
              <p className="font-bold text-lg">{member.name}</p>
            </div>
            <div>
              <Label className="text-gray-500">Email</Label>
              <p className="font-bold text-lg block">{member.email || "-"}</p>
            </div>
            <div>
              <Label className="text-gray-500">Posición</Label>
              <p className="font-bold text-lg">{roles[member.role]}</p>
            </div>
          </div>
        </div>
        <div className=" space-x-2 flex items-center justify-end w-full">
          <Button onClick={onClose}>Cerrar</Button>
        </div>
      </div>
    </Modal>
  );
};
