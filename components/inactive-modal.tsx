"use client";

import { useEffect, useState } from "react";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";


export const InactiveModal = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
        <div>Hola mundo</div>
        <div className=" space-x-2 flex items-center justify-center w-full">
          <Button onClick={closeDialog}>
            Cerrar
          </Button>
        </div>
      </div>
    </Modal>
  );
};
