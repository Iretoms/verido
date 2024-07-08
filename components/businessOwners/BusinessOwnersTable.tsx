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
} from "@/components/ui/table";
import { BusinessOwner } from "@/types";
import Image from "next/image";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function BusinessOwnerTable<TData extends BusinessOwner, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const router = useRouter();

  const handleRowSelection = (id: number) => {
    router.push(`/business-owners/${id}`);
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
    setSorting([{ id: "enterprise_name", desc: sortOrder === "desc" }]);
  };

  return (
    <div className="rounded-md">
      <div className="flex justify-between mb-6">
        <div className="flex flex-col items-start gap-2">
          <h2 className="text-[20px]">Business Owners</h2>
          <p className="text-[14px] text-black">
            List of Business owners available
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
                (table
                  .getColumn("enterprise_name")
                  ?.getFilterValue() as string) ?? ""
              }
              onChange={(event) =>
                table
                  .getColumn("enterprise_name")
                  ?.setFilterValue(event.target.value)
              }
              className="max-w-sm h-full outline-none"
            />
          </div>

          <div className="flex justify-between">
            <Button
              size={"sm"}
              variant={"outline"}
              className="text-verido-green border border-verido-green  rounded-lg  text-sm"
            >
              Change Consultant
            </Button>
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
                You don't have Business associates yet.
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
