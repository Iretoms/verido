import { ColumnDef } from "@tanstack/react-table";
import { AdminBusinessResponse, Consultant } from "@/types";
import Image from "next/image";

// Preprocess data to flatten the consultant array
const preprocessData = (data: AdminBusinessResponse[]) => {
  return data.flatMap((item) =>
    item.consultant.map((consultant) => ({
      ...item,
      consultant,
    }))
  );
};

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

export const columns: ColumnDef<AdminBusinessResponse>[] = [
  {
    accessorFn: (row) => row.business.name, // Access username from consultant
    id: "consultant_username",
    header: "Consultant Username",
  },
  {
    accessorFn: (row) => row.business.name,
    id: "business_name",
    header: "Business Name",
  },

  {
    accessorFn: (row) =>
      new Date(row.subscription_status.started).toLocaleDateString(),
    id: "date_joined",
    header: "Date Joined",
  },
  {
    accessorFn: (row) =>
      row.subscription_status.status ? "Active" : "Inactive",
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
      new Date(row.subscription_status.expires).toLocaleDateString(),
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
