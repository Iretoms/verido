"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Product } from "@/types";
import Image from "next/image";

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "name",
    header: "",
    cell: ({ row }) => (
      <div className="flex space-x-2">
        <Image
          src="/assets/icons/product-card.svg"
          alt="action"
          width={40}
          height={40}
        />
      </div>
    ),
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "cost_price",
    header: "Cost price",
  },
  {
    accessorKey: "selling_price",
    header: "Selling Price",
  },
  {
    accessorKey: "forecast_month",
    header: "Forcast/Month",
  },
  {
    accessorKey: "units",
    header: "Unit",
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => (
      <div className="flex space-x-2">
        <Image
          src="/assets/icons/delete.svg"
          alt="action"
          width={20}
          height={20}
        />
      </div>
    ),
  },
];
