"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Consultant } from "@/types";

export const columns: ColumnDef<Consultant>[] = [
  {
    accessorKey: "enterprise_name",
    header: "Enterprise Name",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "institution",
    header: "Institution",
  },
  {
    accessorKey: "date_joined",
    header: "Date Joined",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ getValue }) => {
      const status = getValue<string>();
 
    },
  },
];
