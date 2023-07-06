"use client";

import { useEffect, useState } from "react";

import { ModuleModal } from "@/components/module-modal";

export const modalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <ModuleModal />
    </>
  );
};
