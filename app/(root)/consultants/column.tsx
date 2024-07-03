"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Consultant } from "@/types";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

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
  },
];
