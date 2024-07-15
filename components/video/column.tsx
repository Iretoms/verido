"use client";

import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case "help":
      return "bg-light-green border border-verido-green text-verido-green";
    case "tutorial":
      return "bg-light-orange text-verido-orange border border-verido-orange";
    default:
      return "";
  }
};

export const columnsVideo: ColumnDef<any>[] = [

  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "youtubeId",
    header: "Youtube ID",
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ getValue }) => {
      const status = getValue<string>();
      return (
        <span className={`px-2 py-1 rounded-lg ${getStatusColor(status)}`}>
          {status}
        </span>
      );
    },
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => (
      <div className="flex space-x-2">
        <Image
          src="/assets/icons/editVideo.svg"
          alt="edit"
          width={20}
          height={20}
          className="cursor-pointer"
        />
        <Image
          src="/assets/icons/deleteVideo.svg"
          alt="delete"
          width={20}
          height={20}
          className="cursor-pointer"
        />
      </div>
    ),
  },
];
