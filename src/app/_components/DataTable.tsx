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

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  onLoadMore?: () => void;
  isLoading?: boolean;
  hasNextPage?: boolean;
}

function DataTable<TData, TValue>({
  columns,
  data,
  onLoadMore,
  isLoading,
  hasNextPage,
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
      <Table className="rounded-md border bg-white">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
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
        <TableBody>
          {totalRows ? (
            rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
                className="hover:bg-gray-50 transition-colors duration-200 ease-in-out"
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className="last:text-right">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                {isLoading ? " Loading..." : "No results."}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      {totalRows && hasNextPage ? (
        <Button onClick={onLoadMore}>Load more</Button>
      ) : (
        <></>
      )}
    </div>
  );
}

export { DataTable };
