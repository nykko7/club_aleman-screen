"use client";

import { useEffect, useState } from "react";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";

interface ModuleModalProps {
  isOpen: boolean;
  onClose: () => void;
  loading: boolean;
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export const ModuleModal: React.FC<ModuleModalProps> = ({
  isOpen,
  onClose,
  loading,
  title,
  description,
  children,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <Modal
      title={title}
      description={description}
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="space-y-4 py-2 pb-4 max-w-md w-[500px]">
        {children}
        <div className=" space-x-2 flex items-center justify-end w-full">
          <Button disabled={loading} onClick={onClose}>
            Cerrar
          </Button>
        </div>
      </div>
    </Modal>
  );
};
