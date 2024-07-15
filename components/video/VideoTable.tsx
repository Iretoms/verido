"use client";
import React, { useState } from "react";
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
import CreateVideo from "./CreateVideo";
import { IVideo } from "@/types";
import { Button } from "../ui/button";
import EditVideo from "./EditVideo"; 
import Image from "next/image";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function VideoTable<TData extends IVideo, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [rowSelection, setRowSelection] = useState({});
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<IVideo | null>(null);

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

  const handleEditClick = (video: IVideo) => {
    setSelectedVideo(video);
    setIsEditDialogOpen(true);
  };

  return (
    <div className="rounded-md">
      <div className="flex justify-between mb-6">
        <div className="flex flex-col items-start gap-2">
          <h2 className="text-[20px]">Videos</h2>
          <p className="text-[14px] text-black">List of videos available</p>
        </div>
        <div className="flex gap-2">
          <div className="">
            <CreateVideo />
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
                <TableCell>
                  <div className="flex space-x-2">
                    <Image
                      src="/assets/icons/editVideo.svg"
                      alt="edit"
                      width={20}
                      height={20}
                      className="cursor-pointer"
                      onClick={() => handleEditClick(row.original)}
                    />
                    <Image
                      src="/assets/icons/deleteVideo.svg"
                      alt="delete"
                      width={20}
                      height={20}
                      className="cursor-pointer"
                    />
                  </div>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow className="text-sm font-bold text-gray-text">
              <TableCell colSpan={columns.length} className="h-24 text-center">
                You don&apos;t have videos yet.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className="flex items-center justify-end space-x-2 py-4 mt-6">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className="border border-verido-green disabled:border-gray-text"
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className="border border-verido-green disabled:border-gray-text"
        >
          Next
        </Button>
      </div>
      <EditVideo
        isOpen={isEditDialogOpen}
        onClose={() => setIsEditDialogOpen(false)}
        video={selectedVideo}
      />
    </div>
  );
}
