import { ColumnDef } from "@tanstack/react-table";
import { Partner } from "../../../types/index";

const getStatusStyles = (status: boolean | string) => {
  if (status) {
    return "bg-light-green border border-verido-green text-verido-green";
  } else {
    return "bg-light-danger text-danger border border-danger";
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
    accessorKey: "partner_id",
    header: "Partner ID",
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
      const status = getValue<boolean | string>();
      return (
        <span
          className={`px-6 py-1 rounded-lg text-xs font-medium ${getStatusStyles(
            status
          )}`}
        >
          {status ? "Active" : "Suspended"}
        </span>
      );
    },
  },
];
