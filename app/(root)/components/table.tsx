"use client";

import { ModuleModal } from "@/components/module-modal";
import { DataTable } from "@/components/ui/data-table";

import { Column, columns } from "./columns";

import { _memberList } from "@/data/members";

interface TableDirectivesProps {
    open: boolean;
    roles: string[];
    title: string;
    setOpen: Function;
  }
  

const Table = ({title, open, roles, setOpen}: TableDirectivesProps) => {
  const closeDialog = () => {
    setOpen({title: title, open: false, roles: roles});
  };

  const formatted: Column[] = _memberList
    .map((member) => ({
      id: member.id,
      name: `${member.firstName} ${member.lastName}`,
      email: member.email || "",
      role: member.role,
    }))
    .filter((member) => roles.includes(member.role));

  return (
    <>
      <ModuleModal
        isOpen={open}
        onClose={() => closeDialog()}
        loading={false}
        title={title}
      >
        <div>
          <DataTable columns={columns} data={formatted} />
        </div>
      </ModuleModal>
    </>
  );
};

export default Table;
