import { useClientPaginated } from "@/app/_queries/clients/useClientPaginated";
import { apiRoute } from "@/app/_utils/apiRoute";
import { http } from "@/app/_utils/http";
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
import { useToast } from "@/components/ui/use-toast";
import type { Client } from "@/database/services/client/types";
import type { ColumnDef } from "@tanstack/react-table";
import { Edit2Icon, EllipsisIcon, Trash } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

const useClientTableController = () => {
  const { toast } = useToast();
  const { data, isLoading, hasNextPage, fetchNextPage, refetch } =
    useClientPaginated();
  const [selectedId, setSelectedId] = useState<string | undefined>();
  const columns = useMemo<ColumnDef<Client>[]>(
    () => [
      {
        accessorKey: "name",
        header: "Org Name",
      },
      {
        accessorKey: "email",
        header: "Email",
      },
      {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
          const client = row.original;
          return (
            <>
              <Button variant="ghost" asChild>
                <Link
                  href={ROUTES.PRIVATE.CLIENTS_EDIT.get(client.id)}
                  prefetch
                >
                  <span className="sr-only">Edit</span>
                  <Edit2Icon className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" onClick={() => setSelectedId(client.id)}>
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

  const onDelete = async () => {
    try {
      if (!selectedId) {
        throw new Error("No client selected");
      }
      await http.delete(apiRoute.clients.delete(selectedId));
      await refetch();
      toast({
        title: "Success!",
        description: "Client has been deleted successfully.",
        variant: "default",
        duration: 2000,
      });
    } catch (error) {
      toast({
        title: "Error!",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
        duration: 2000,
      });
    }
    setSelectedId(undefined);
  };

  return {
    columns,
    data,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isDeleteDialogOpen: !!selectedId,
    onClose: () => setSelectedId(undefined),
    onDelete,
  };
};

export { useClientTableController };
