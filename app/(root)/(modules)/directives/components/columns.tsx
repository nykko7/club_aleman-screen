"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type DirectiveColumn = {
  id: string;
  name: string;
  role: string;
  email?: string;
};

export const columns: ColumnDef<DirectiveColumn>[] = [
  {
    accessorKey: "name",
    header: "Nombre",
  },
  {
    accessorKey: "role",
    header: "Rol",
  },
  {
    accessorKey: "actions",
    header: "Acciones",
  },
];
