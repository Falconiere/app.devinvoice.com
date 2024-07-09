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
  hideHeader?: boolean;
  onRowSubmit?: (row: TData) => void;
}

function DataTable<TData, TValue>({
  columns,
  data,
  onLoadMore,
  isLoading,
  hasNextPage,
  hideHeader,
  onRowSubmit,
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
                className="bg-gray-800 hover:bg-gray-800 px-4 py-3"
              >
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      className="text-white font-semibold"
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
              className="hover:bg-gray-50 transition-colors duration-200 ease-in-out cursor-pointer"
              onDoubleClick={() => {
                row.toggleSelected();
                onRowSubmit?.(row.original);
              }}
            >
              {row.getVisibleCells().map((cell) => (
                <TableCell
                  key={cell.id}
                  className="last:text-right font-semibold"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
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
      {totalRows && hasNextPage ? (
        <Button onClick={onLoadMore}>Load more</Button>
      ) : (
        <></>
      )}
    </div>
  );
}

export { DataTable };
