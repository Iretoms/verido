import { ColumnDef } from "@tanstack/react-table";
import { Consultant } from "@/types";
const getStatusStyles = (status: string) => {
  switch (status.toLowerCase()) {
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

export const columnsConsultant: ColumnDef<Consultant>[] = [
  {
    accessorKey: "consultant_id",
    header: "Enterprise Name",
  },
  {
    accessorKey: "username",
    header: "Name",
  },
  {
    accessorKey: "institution",
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
