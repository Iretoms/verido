import { ColumnDef } from "@tanstack/react-table";
import { Consultant } from "../../../types/index";
const getStatusStyles = (status: boolean|string) => {
  if (status) {
    return "bg-light-green border border-verido-green text-verido-green";
  } else {
    return "bg-light-danger text-danger border border-danger";
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
    accessorKey: "email",
    header: "Email",
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
