"use client";

import { ColumnDef } from "@tanstack/react-table";
import { AdminBusinessResponse } from "@/types";
import Image from "next/image";
import { Checkbox } from "../../../components/ui/checkbox";

const getStatusStyles = (status: string) => {
  switch (status.toLowerCase()) {
    case "active":
      return "bg-light-green border border-verido-green text-verido-green";
    case "suspended":
      return "bg-light-danger text-danger border border-danger";
    case "pending approval":
      return "bg-light-orange text-verido-orange border border-verido-orange";
    default:
      return "text-sm font-light text-gray-text";
  }
};

export const columnsBusiness: ColumnDef<AdminBusinessResponse>[] = [
  {
    accessorKey: "",
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
  },
  {
    accessorKey: "full_name",
    header: "Enterprise Name",
  },
  {
    accessorFn: (row) => row.business?.name,
    id: "name",
    header: "Name",
  },
  {
    accessorFn: (row) => row.business?.sector,
    id: "sector",
    header: "Sector",
  },
  {
    accessorFn: (row) =>
      new Date(row.subscription_status?.started).toLocaleDateString(),
    id: "date_joined",
    header: "Date Joined",
  },
  {
    accessorFn: (row) =>
      row.subscription_status?.status ? "Active" : "Inactive",
    id: "status",
    header: "Status",
    cell: ({ getValue }) => {
      const status = getValue<string>();
      return (
        <span
          className={`px-6 py-1 rounded-lg text-xs font-medium ${getStatusStyles(
            status
          )}`}
        >
          {status}
        </span>
      );
    },
  },
  {
    accessorFn: (row) =>
      new Date(row.subscription_status?.expires).toLocaleDateString(),
    id: "expires",
    header: "Expires",
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => (
      <div className="flex space-x-2">
        <Image
          src="/assets/icons/chat_fill.svg"
          alt="action"
          width={20}
          height={20}
        />
      </div>
    ),
  },
];
