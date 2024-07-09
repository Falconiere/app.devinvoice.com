import { ROUTES } from "@/app/routes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { Invoice } from "@/database/services/invoice/types";
import { DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";
import { Edit2Icon, EllipsisIcon, Trash } from "lucide-react";
import Link from "next/link";

type InvoiceRowActionsProps = {
  invoice: Invoice;
  onDelete: () => void;
};

const InvoiceRowActions = ({ invoice, onDelete }: InvoiceRowActionsProps) => (
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
    <Button variant="ghost" onClick={onDelete}>
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
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem>Mark as Paid</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Duplicate</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </>
);

export { InvoiceRowActions };
