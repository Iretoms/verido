"use client";
import React from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  ColumnFiltersState,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function VideoTable<TData extends any, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [rowSelection, setRowSelection] = React.useState({});
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onRowSelectionChange: setRowSelection,
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),

    state: {
      rowSelection,
      columnFilters,
    },
  });

  return (
    <div className="rounded-md">
      <div className="flex justify-between mb-6">
        <div className="flex flex-col items-start gap-2">
          <h2 className="text-[20px]">Videos</h2>
          <p className="text-[14px] text-black">List of videos available</p>
        </div>
        <div className="flex gap-2">
          <div className="">
            <Dialog>
              <DialogTrigger asChild>
                <Button size={'sm'} className="bg-verido-green text-verido-white" variant="outline">Add Video</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle className="text-3xl font-light">Create Video</DialogTitle>
                  <DialogDescription className="text-gray-text font-light text-sm">
                    Please provide the video info.
                  </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap-1 items-start">
                    <Label htmlFor="name" className="text-[11px]">
                      Title:
                    </Label>
                    <Input
                      id="name"
                      className="border border-verido-border px-3 py-2 focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-1 items-start">
                    <Label htmlFor="name" className="text-[11px]">
                      Video ID:
                    </Label>
                    <Input
                      id="name"
                      className="border border-verido-border px-3 py-2 focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-1 items-start">
                    <Label htmlFor="username" className="text-[11px]">
                      Category:
                    </Label>
                    <Input
                      id="username"
                      className="border border-verido-border px-3 py-2 focus:outline-none"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button
                    className="w-full bg-verido-green mt-[6rem]"
                    type="submit"
                  >
                    Create
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
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
                You don't have videos yet.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
