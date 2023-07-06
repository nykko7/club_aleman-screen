import { useState } from "react";

import { Eye } from "lucide-react";

import { MemberColumn } from "./columns";
import { MemberModal } from "@/components/member-modal";

interface CellActionProps {
  data: MemberColumn;
}

const CellAction: React.FC<CellActionProps> = ({ data }) => {
  const [openDialog, setOpenDialog] = useState(false);

  const closeDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <div className="flex justify-center">
        <Eye
          size={20}
          onClick={() => setOpenDialog(true)}
          className="cursor-pointer"
        />
      </div>
      <MemberModal
        isOpen={openDialog}
        onClose={() => closeDialog()}
        member={data}
      ></MemberModal>
    </>
  );
};

export default CellAction;
