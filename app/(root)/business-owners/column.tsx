"use client";

import { ColumnDef } from "@tanstack/react-table";
import { BusinessOwner } from "@/types";

export const columns: ColumnDef<BusinessOwner>[] = [
  {
    accessorKey: "enterprise_name",
    header: "Enterprise Name",
  },
  {
    accessorKey: "name",
    header: "Name",
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
  {
    accessorKey: "expires",
    header: "Expires",
  },
  {
    accessorKey: "institution",
    header: "Action",
  },
];
