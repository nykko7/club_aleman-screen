"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { ModuleModal } from "@/components/module-modal";

import { _memberList } from "@/data/members";

const GalleryPage = () => {
  const router = useRouter();
  const [openDialog, setOpenDialog] = useState(true);

  const title = "Galería";
  const description = "Imágenes";

  const closeDialog = () => {
    setOpenDialog(false);
    router.push("/");
  };

  return (
    <>
      <ModuleModal
        isOpen={openDialog}
        onClose={() => closeDialog()}
        loading={false}
        title={title}
        description={description}
      >
        <div className="h-[80vh]">
          <h1 className="text-2xl">Historia</h1>
        </div>
      </ModuleModal>
    </>
  );
};

export default GalleryPage;
