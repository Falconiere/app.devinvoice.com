"use client";
import { useClientTableController } from "@/app/(main)/clients/_controllers/useClientTableController";
import { DataTable } from "@/app/_components/DataTable";
import { DeleteDialog } from "@/app/_components/DeleteDialog";

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
  } = useClientTableController();
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
