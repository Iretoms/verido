import React from "react";
import {
  ColumnDef,
  flexRender,
  SortingState,
  getSortedRowModel,
  getCoreRowModel,
  getPaginationRowModel,
  ColumnFiltersState,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Image from "next/image";
import { useAuthenticatedUser } from "@/context/AuthContext";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";

import { Partner } from "../../types/index";
import CreatePartner from "./CreatePartner";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  isFetching: boolean;
}

export function PartnersTable<TData extends Partner, TValue>({
  columns,
  data,
  isFetching,
}: DataTableProps<TData, TValue>) {
  const router = useRouter();

  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const handleRowSelection = (id: string) => {
    router.push(`/companies/${id}`);
  };
  const { currentUser } = useAuthenticatedUser();

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      columnFilters,
      sorting,
    },
  });
  const handleSortChange = (sortOrder: "asc" | "desc") => {
    setSorting([{ id: "name", desc: sortOrder === "desc" }]);
  };

  return (
    <div className="rounded-md">
      <div className="flex flex-col md:flex-row  gap-3 md:gap-0 justify-between mb-6">
        <div className="flex flex-col items-start gap-2">
          <h2 className="text-[20px]">
            Companies ({" "}
            <span className="font-bold text-gray-text">{data?.length}</span>)
          </h2>
          <p className="text-[14px] text-black">List of Companies available</p>
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
                (table.getColumn("name")?.getFilterValue() as string) ?? ""
              }
              onChange={(event) =>
                table.getColumn("name")?.setFilterValue(event.target.value)
              }
              className="max-w-sm h-full outline-none"
            />
          </div>
          <div
            className={`flex justify-between ${
              currentUser?.role !== "super_admin" &&
              currentUser?.role !== "partners"
                ? "hidden"
                : "flex"
            }`}
          >
            <Button
              size={"sm"}
              className="text-verido-white bg-verido-green rounded-lg text-sm w-[10rem]"
            >
              Add
              <CreatePartner />
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
          {isFetching ? (
            <TableRow className="text-sm font-bold text-gray-text">
              <TableCell colSpan={columns.length} className="font-bold text-sm h-24 text-center">
                Loading Companies...
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
                No Company yet.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className="border border-verido-green disabled:border-gray-text text-gray-text"
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className="border border-verido-green disabled:border-gray-text text-gray-text"
        >
          Next
        </Button>
      </div>
    </div>
  );
}
