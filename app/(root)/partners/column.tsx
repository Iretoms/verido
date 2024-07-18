import { ColumnDef } from "@tanstack/react-table";
import { Partner } from "../../../types/index";

const getStatusStyles = (status: string) => {
  switch (status) {
    case "active":
      return "bg-light-green border border-verido-green text-verido-green";
    case "inactive":
    case "deleted":
      return "bg-light-danger text-danger border border-danger";
    case "pending approval":
      return "bg-light-orange text-verido-orange border border-verido-orange";
    default:
      return "text-sm font-light text-gray-text";
  }
};

export const columnsPartner: ColumnDef<Partner>[] = [
  {
    accessorKey: "name",
    header: "Partner Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "name",
    header: "Institution",
  },

  {
    accessorKey: "dateJoined",
    header: "Date Joined",
    cell: ({ getValue }) => {
      const date = getValue<string>();
      return new Date(date).toLocaleDateString();
    },
  },
  {
    accessorKey: "status",
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
];
