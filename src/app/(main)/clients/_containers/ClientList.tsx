"use client";
import { useClientListController } from "@/app/(main)/clients/_controllers/useClientListController";

import { ROUTES } from "@/app/routes";
import { DataTable } from "@/domains/components/DataTable";
import { DeleteDialog } from "@/domains/components/DeleteDialog";
import { useHeaderActions } from "@/domains/hooks/useHeaderActions";

const ClientList = () => {
  const {
    columns,
    data,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isDeleteDialogOpen,
    onClose,
    onDelete,
  } = useClientListController();

  useHeaderActions([
    {
      label: "New Client",
      component: "link",
      buttonVariant: "default",
      href: ROUTES.PRIVATE.CLIENTS_ADD.path,
    },
  ]);
  return (
    <>
      <DataTable
        columns={columns}
        isLoading={isLoading}
        data={data?.results ?? []}
        hasNextPage={hasNextPage}
        onLoadMore={fetchNextPage}
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
