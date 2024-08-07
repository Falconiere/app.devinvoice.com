"use client";
import { useInvoiceListController } from "@/app/(main)/invoices/_controllers/useInvoiceListController";
import { ROUTES } from "@/app/routes";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DataTable } from "@/domains/components/DataTable";
import { DeleteDialog } from "@/domains/components/DeleteDialog";
import { EmptyDataState } from "@/domains/components/EmptyDataState";
import { useHeaderActions } from "@/domains/hooks/useHeaderActions";

const InvoicesList = () => {
  useHeaderActions([
    {
      label: "New Invoice",
      component: "link",
      buttonVariant: "default",
      href: ROUTES.PRIVATE.INVOICES_ADD.path,
    },
  ]);

  const {
    columns,
    data,
    isLoading,
    isDeleteDialogOpen,
    onCloseDeleteDialog,
    onDelete,
  } = useInvoiceListController();

  return (
    <>
      <Tabs defaultValue="all" className="w-full">
        <div className="flex items-center gap-2 justify-between">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="paid">Paid</TabsTrigger>
            <TabsTrigger value="pending">Due</TabsTrigger>
          </TabsList>
        </div>
      </Tabs>
      <DataTable
        columns={columns}
        data={data?.results ?? []}
        isLoading={isLoading}
        EmptyState={<EmptyDataState />}
      />
      <DeleteDialog
        open={isDeleteDialogOpen}
        onClose={onCloseDeleteDialog}
        onDelete={() => onDelete()}
      />
    </>
  );
};
export { InvoicesList };
