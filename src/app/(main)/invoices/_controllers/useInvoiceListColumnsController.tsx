import { InvoiceRowActions } from "@/app/(main)/invoices/_components/InvoiceRowActions";
import { InvoiceRowDate } from "@/app/(main)/invoices/_components/InvoiceRowDate";
import { InvoiceStatusBadge } from "@/app/(main)/invoices/_components/InvoiceStatusBadge";
import { toMoney } from "@/app/_utils/toMoney";
import type { Invoice } from "@/database/services/invoice/types";
import type { ColumnDef } from "@tanstack/react-table";
import { useMemo } from "react";

const useInvoiceListColumnsController = () => {
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
        cell: (row) => {
          const dueDate = row.row.original.date;
          return <InvoiceRowDate date={dueDate} />;
        },
      },
      {
        accessorKey: "dueDate",
        header: "Due Date",
        cell: (row) => {
          const dueDate = row.row.original.dueDate;
          return <InvoiceRowDate date={dueDate} />;
        },
      },
      {
        accessorKey: "status",
        header: "Status",
        cell: (row) => {
          const status = row.row.original.status ?? "UNPAID";
          return <InvoiceStatusBadge status={status} />;
        },
      },
      {
        accessorKey: "total",
        header: "Total",
        cell: (row) => {
          const items = row.row.original.items;
          const total = items.reduce(
            (acc, item) => acc + Number(item.price) * Number(item.quantity),
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
          return <InvoiceRowActions invoice={invoice} onDelete={() => {}} />;
        },
      },
    ],
    []
  );
  return { columns };
};

export { useInvoiceListColumnsController };
