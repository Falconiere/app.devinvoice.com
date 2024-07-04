"use client";

import { useClientListController } from "@/app/(main)/clients/_controllers/useClientListController";
import { DataTable } from "@/app/_components/DataTable";
import { DeleteDialog } from "@/app/_components/DeleteDialog";
import type { Client } from "@/database/services/client/types";

type ClientListProps = {
  hideActions?: boolean;
  hideHeader?: boolean;
  onSelect?: (client: Client) => void;
};
const ClientList = ({ hideActions, hideHeader, onSelect }: ClientListProps) => {
  const {
    columns,
    data,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isDeleteDialogOpen,
    onClose,
    onDelete,
  } = useClientListController({ hideActions });

  return (
    <>
      <DataTable
        columns={columns}
        isLoading={isLoading}
        data={data?.results ?? []}
        hideHeader={hideHeader}
        hasNextPage={hasNextPage}
        onLoadMore={fetchNextPage}
        onRowSubmit={onSelect}
      />
      <DeleteDialog
        open={isDeleteDialogOpen}
        onClose={onClose}
        onDelete={onDelete}
      />
    </>
  );
};

export { ClientList };
