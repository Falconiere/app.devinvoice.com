import { InvoiceRowActions } from "@/app/(main)/invoices/_components/InvoiceRowActions";
import { InvoiceRowDate } from "@/app/(main)/invoices/_components/InvoiceRowDate";
import { InvoiceStatusBadge } from "@/app/(main)/invoices/_components/InvoiceStatusBadge";

import type { Invoice } from "@/database/services/invoice/types";
import { toMoney } from "@/domains/utils/toMoney";
import type { ColumnDef } from "@tanstack/react-table";
import { useMemo } from "react";

type UseInvoiceListColumnsController = {
  onUpdate: (invoice: Invoice) => Promise<void>;
  onDelete: (invoice: Invoice) => void;
  onDuplicate: (invoice: Invoice) => Promise<void>;
  isInvoiceLoading?: boolean;
};
const useInvoiceListColumnsController = (
  options: UseInvoiceListColumnsController
) => {
  const { onUpdate, onDelete, onDuplicate } = options ?? {};
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
          return (
            <InvoiceRowActions
              invoice={invoice}
              onDelete={onDelete}
              onUpdate={onUpdate}
              onDuplicate={onDuplicate}
            />
          );
        },
      },
    ],
    [onDelete, onUpdate, onDuplicate]
  );
  return { columns };
};

export { useInvoiceListColumnsController };
