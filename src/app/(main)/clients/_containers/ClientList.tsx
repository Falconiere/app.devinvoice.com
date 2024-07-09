"use client";
import { useClientListController } from "@/app/(main)/clients/_controllers/useClientListController";
import { DataTable } from "@/app/_components/DataTable";
import { DeleteDialog } from "@/app/_components/DeleteDialog";
import { ROUTES } from "@/app/routes";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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

  return (
    <>
      <div className="flex items-center justify-end gap-2">
        <Button asChild>
          <Link href={ROUTES.PRIVATE.CLIENTS_ADD.path} prefetch>
            New Client
          </Link>
        </Button>
      </div>
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
