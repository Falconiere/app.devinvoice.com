import { useInvoicePaginated } from "@/app/_queries/invoice/useInvoicePaginated";
import { toMoney } from "@/app/_utils/toMoney";
import { ROUTES } from "@/app/routes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { Invoice } from "@/database/services/invoice/types";
import type { ColumnDef } from "@tanstack/react-table";
import { Edit2Icon, EllipsisIcon, Trash } from "lucide-react";
import Link from "next/link";
import { useMemo } from "react";

const useInvoiceListController = () => {
  const { data, isLoading, hasNextPage, fetchNextPage } = useInvoicePaginated();
  const columns = useMemo<ColumnDef<Invoice>[]>(
    () => [
      {
        accessorKey: "client.name",
        header: "Client",
      },
      {
        accessorKey: "invoiceNumber",
        header: "Invoice Number",
      },
      {
        accessorKey: "date",
        header: "Date",
      },
      {
        accessorKey: "dueDate",
        header: "Due Date",
      },
      {
        accessorKey: "total",
        header: "Total",
        cell: (row) => {
          const items = row.row.original.items;
          const total = items.reduce(
            (acc, item) => acc + item.price * item.quantity,
            0
          );
          return toMoney(total);
        },
      },
      {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
          const invoice = row.original;
          return (
            <>
              <Button variant="ghost" asChild>
                <Link
                  href={ROUTES.PRIVATE.INVOICES_EDIT.get(invoice.id as string)}
                  prefetch
                >
                  <span className="sr-only">Edit</span>
                  <Edit2Icon className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost">
                <span className="sr-only">Delete</span>
                <Trash className="h-4 w-4" />
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Open menu</span>
                    <EllipsisIcon className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuItem>New Invoice</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>View Invoices</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          );
        },
      },
    ],
    []
  );

  return { columns, data, isLoading, hasNextPage, fetchNextPage };
};

export { useInvoiceListController };
