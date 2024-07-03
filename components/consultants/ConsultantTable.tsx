import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useRouter } from "next/navigation";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Consultant } from "@/types";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function ConsultantTable<TData extends Consultant , TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const router = useRouter();

  const handleRowSelection = (id: number) => {
    router.push(`/consultants/${id}`);
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

  const statusColumn = columns.find((col) => col.cell);
  if (statusColumn) {
    statusColumn.cell = ({ getValue }) => {
      const status = getValue() as string;
      return (
        <span
          className={`px-6 py-1 rounded-lg text-xs font-medium ${getStatusStyles(
            status
          )}`}
        >
          {status}
        </span>
      );
    };
  }

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="rounded-md">
      <Table className="border-0">
        <TableHeader className="bg-verido-light-blue">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody className="border-none">
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                onClick={() => handleRowSelection(row.original.id)}
                data-state={row.getIsSelected() && "selected"}
                className="text-sm font-light text-gray-text"
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow className="text-sm font-bold text-gray-text">
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No Consultants associated to you yet.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
