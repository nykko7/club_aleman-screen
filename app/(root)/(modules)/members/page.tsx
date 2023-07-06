"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { ModuleModal } from "@/components/module-modal";
import { DataTable } from "@/components/ui/data-table";

import { MemberColumn, columns } from "./components/columns";

import { _memberList } from "@/data/members";

const DirectivesPage = () => {
  const router = useRouter();
  const [openDialog, setOpenDialog] = useState(true);

  const title = "Directivos";
  const description = "5 directivos";

  const closeDialog = () => {
    setOpenDialog(false);
    router.push("/");
  };

  const formattedDirectives: MemberColumn[] = _memberList.map((member) => ({
    id: member.id,
    name: `${member.firstName} ${member.lastName}`,
    email: member.email || "",
    role: member.role,
  }));

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
          <DataTable columns={columns} data={formattedDirectives} />
        </div>
      </ModuleModal>
    </>
  );
};

export default DirectivesPage;
