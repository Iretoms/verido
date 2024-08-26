import React from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  SortingState,
  getSortedRowModel,
  ColumnFiltersState,
  getFilteredRowModel,
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
} from "../../components/ui/table";
import { AdminBusinessResponse } from "../../types/index";
import Image from "next/image";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  isFetching: boolean;
}

export function BusinessOwnerTable<
  TData extends AdminBusinessResponse,
  TValue
>({ columns, data, isFetching }: DataTableProps<TData, TValue>) {
  const router = useRouter();

  const handleRowSelection = (id: string) => {
    router.push(`/sub-agents/${id}`);
  };

  const [rowSelection, setRowSelection] = React.useState({});
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onRowSelectionChange: setRowSelection,
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      rowSelection,
      columnFilters,
      sorting,
    },
  });
  const handleSortChange = (sortOrder: "asc" | "desc") => {
    setSorting([{ id: "full_name", desc: sortOrder === "desc" }]);
  };

  return (
    <div className="rounded-md">
      <div className="flex flex-col gap-3 md:gap-0 md:flex-row  justify-between mb-6">
        <div className="flex flex-col items-start gap-2">
          <h2 className="text-[20px]">
            Sub Agents (
            <span className="font-bold text-gray-text">{data?.length}</span>)
          </h2>
          <p className="text-[14px] text-black">
            List of Sub Agents available
          </p>
        </div>
        <div className="flex gap-2">
          <Select onValueChange={handleSortChange}>
            <SelectTrigger className="w-[100px] text-light-gray">
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem className="text-sm text-light-gray" value="desc">
                Descending
              </SelectItem>
              <SelectItem className="text-sm text-light-gray" value="asc">
                Asecending
              </SelectItem>
            </SelectContent>
          </Select>
          <div className="flex items-center p-2 justify-between border border-text-gray rounded-lg h-[2.5rem]">
            <Image
              className="object-contain"
              src="/assets/icons/person.svg"
              alt="search icon"
              width={15}
              height={15}
            />
            <Input
              placeholder="Search"
              value={
                (table.getColumn("full_name")?.getFilterValue() as string) ?? ""
              }
              onChange={(event) =>
                table.getColumn("full_name")?.setFilterValue(event.target.value)
              }
              className="max-w-sm h-full outline-none"
            />
          </div>
        </div>
      </div>
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
          {isFetching ? (
            <TableRow className="text-sm font-bold text-gray-text">
              <TableCell
                colSpan={columns.length}
                className="h-24 text-center font-bold text-sm"
              >
                Loading Subagents...
              </TableCell>
            </TableRow>
          ) : table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                onClick={() => handleRowSelection(row.original._id)}
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
                You don&apos;t have sub agents associates yet.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className="flex items-center justify-end space-x-2 py-4 mt-8">
        <Button
          variant="outline"
          className="border border-verido-green disabled:border-gray-text"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          className="border border-verido-green disabled:border-gray-text"
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
