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
import type { Client } from "@/database/services/client/types";
import { Edit2Icon, EllipsisIcon, Trash } from "lucide-react";
import Link from "next/link";

type ClientListActionsProps = {
  client: Client;
  onDelete?: (id: string) => void;
};
const ClientListActions = ({ client, onDelete }: ClientListActionsProps) =>
  client?.id ? (
    <>
      <Button variant="ghost" asChild>
        <Link href={ROUTES.PRIVATE.CLIENTS_EDIT.get(client.id)} prefetch>
          <span className="sr-only">Edit</span>
          <Edit2Icon className="h-4 w-4" />
        </Link>
      </Button>
      <Button
        variant="ghost"
        onClick={() => client.id && onDelete?.(client.id)}
      >
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
  ) : null;

export { ClientListActions };
