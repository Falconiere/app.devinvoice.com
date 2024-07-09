import { ClientListActions } from "@/app/(main)/clients/_components/ClientListActions";
import type { Client } from "@/database/services/client/types";
import type { ColumnDef } from "@tanstack/react-table";
import { useMemo } from "react";

type UseClientListColumnsController = {
  onDelete?: (id: string) => void;
  hideActions?: boolean;
};
const useClientListColumnsController = (
  props?: UseClientListColumnsController
) => {
  const { onDelete, hideActions } = props ?? {};
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
          if (!client?.id || hideActions) return null;
          return <ClientListActions client={client} onDelete={onDelete} />;
        },
      },
    ],
    [onDelete, hideActions]
  );
  return { columns };
};

export { useClientListColumnsController };
