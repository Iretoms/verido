import { ColumnDef } from "@tanstack/react-table";


const getStatusStyles = (status: boolean | string) => {
  if (status) {
    return "bg-light-green border border-verido-green text-verido-green";
  } else {
    return "bg-light-danger text-danger border border-danger";
  }
};

export const columnsCompany: ColumnDef<any>[] = [
  {
    accessorKey: "companyName",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email address",
  },
  {
    accessorKey: "companyUniqueId",
    header: "User ID",
  },
  {
    accessorKey: "sector",
    header: "Sector",
  },
  {
    accessorKey: "businessType",
    header: "Institution",
  },

  {
    accessorKey: "createdAt",
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
