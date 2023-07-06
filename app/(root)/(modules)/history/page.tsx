"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { ModuleModal } from "@/components/module-modal";

import { _memberList } from "@/data/members";

const HistoryPage = () => {
  const router = useRouter();
  const [openDialog, setOpenDialog] = useState(true);

  const title = "Historia";
  const description = "Nuestra historia";

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
        <div>
          <h1 className="text-2xl">Historia</h1>
        </div>
      </ModuleModal>
    </>
  );
};

export default HistoryPage;
