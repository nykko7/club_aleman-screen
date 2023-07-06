"use client";

import { ColumnDef } from "@tanstack/react-table";
import CellAction from "./cell-action";

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
      return <CellAction data={row.original} />;
    },
  },
];
