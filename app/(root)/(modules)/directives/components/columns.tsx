"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Eye } from "lucide-react";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type DirectiveColumn = {
  id: string;
  name: string;
  role: string;
  email?: string;
};

interface IRoles {
  [key: string]: string;
}

const roles: IRoles = {
  president: "Presidente",
  vice_president: "Vicepresidente",
  secretary: "Secretario",
  treasurer: "Tesorero",
  board_member: "Miembro De La Junta",
  honor_advisor: "Consejero De Honor",
  honor_member: "Miembro De Honor",
  member: "Socio",
};

export const columns: ColumnDef<DirectiveColumn>[] = [
  {
    accessorKey: "name",
    header: "Nombre",
  },
  {
    accessorKey: "role",
    header: "Rol",
    cell: ({ row }) => {
      const role: string = row.getValue("role");

      return <div>{roles[role]}</div>;
    },
  },
  {
    accessorKey: "actions",
    header: "Acciones",
    cell: ({ row }) => {
      return (
        <div className="flex justify-center">
          <Eye
            size={20}
            onClick={() => console.log(row)}
            className="cursor-pointer"
          ></Eye>
        </div>
      );
    },
  },
];
