"use client";

import { useEffect, useState } from "react";

import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";

import useIdle from "@/hooks/use-idle";

export const InactiveModal = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  //TODO: cambiar el tiempo de timeout al tiempo que se necesite
  const isIdle = useIdle(5000); // 5 segundos de timeout (Para probar)

  const closeDialog = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isIdle && !isOpen) setIsOpen(true);
  }, [isIdle]);

  if (!isMounted) return null;

  return (
    <Modal isOpen={isOpen} onClose={closeDialog}>
      <div className="space-y-4 py-2 pb-4 w-[70vw]">
        <div>Hola mundo</div>
        <div className=" space-x-2 flex items-center justify-center w-full">
          <Button onClick={closeDialog}>Cerrar</Button>
        </div>
      </div>
    </Modal>
  );
};
