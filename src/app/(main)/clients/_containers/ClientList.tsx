"use client";
import { useClientListController } from "@/app/(main)/clients/_controllers/useClientListController";
import { DataTable } from "@/app/_components/DataTable";
import { DeleteDialog } from "@/app/_components/DeleteDialog";
import { useHeaderActions } from "@/app/_hooks/useHeaderActions";
import { ROUTES } from "@/app/routes";

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
