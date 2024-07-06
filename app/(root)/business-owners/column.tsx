"use client";

import { ColumnDef } from "@tanstack/react-table";
import { BusinessOwner } from "@/types";
import Image from "next/image";

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
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => (
      <div className="flex space-x-2">
        <Image src='/assets/icons/chat_fill.svg' alt="action" width={20} height={20}/>
      </div>
    ),
  },
];
