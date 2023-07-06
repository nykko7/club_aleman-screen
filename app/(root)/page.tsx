"use client";

import { useEffect } from "react";

import { useModuleModal } from "@/hooks/use-module-modal";

import ImageGallery from "./components/image-gallery";
import ModuleList from "./components/modules-list";

export default function Home() {
  return (
    <>
      <main>
        <div className="grid grid-cols-4 grid-rows-3 gap-[20px] h-[75vh]">
          <ImageGallery />
          <ModuleList />
        </div>
      </main>
    </>
  );
}
