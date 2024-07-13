"use client";

import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { ReactNode } from "react";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  onLoadMore?: () => void;
  isLoading?: boolean;
  hasNextPage?: boolean;
  hideHeader?: boolean;
  isRowIdLoading?: string;
  onRowSubmit?: (row: TData) => void;
  EmptyState?: ReactNode;
}

function DataTable<TData, TValue>({
  columns,
  data,
  onLoadMore,
  isLoading,
  hasNextPage,
  hideHeader,
  onRowSubmit,
  isRowIdLoading,
  EmptyState,
}: Readonly<DataTableProps<TData, TValue>>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const totalRows = table.getRowModel().rows?.length;
  const rows = table.getRowModel().rows;
  return (
    <div className="grid gap-4 items-center">
      <Table className="rounded-md border bg-white overflow-hidden">
        {!hideHeader && (
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow
                key={headerGroup.id}
                className="bg-gray-800 hover:bg-gray-800 px-4 py-3 items-center flex"
              >
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      className="text-white font-semibold flex flex-1"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
        )}
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              data-state={row.getIsSelected() && "selected"}
              className="flex items-center"
              onDoubleClick={() => {
                row.toggleSelected();
                onRowSubmit?.(row.original);
              }}
            >
              {row.getVisibleCells().map((cell) => (
                <TableCell
                  key={cell.id}
                  className="last:text-right font-semibold flex flex-1"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
              {isRowIdLoading === row.id && (
                <div className="absolute w-full h-full bg-gray-100 animate-pulse rounded z-10 left-0 top-0" />
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {isLoading && (
        <div className="grid gap-4 bg-white p-4">
          <div className="h-6 w-full bg-gray-200 animate-pulse rounded" />
          <div className="h-6 w-full bg-gray-200 animate-pulse rounded" />
          <div className="h-6 w-full bg-gray-200 animate-pulse rounded" />
          <div className="h-6 w-full bg-gray-200 animate-pulse rounded" />
        </div>
      )}
      {EmptyState && !isLoading && !totalRows && EmptyState ? EmptyState : null}
      {totalRows && hasNextPage ? (
        <Button onClick={onLoadMore}>Load more</Button>
      ) : null}
    </div>
  );
}

export { DataTable };
