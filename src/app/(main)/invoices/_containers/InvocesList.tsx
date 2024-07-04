"use client";
import { useInvoiceListController } from "@/app/(main)/invoices/_controllers/useInvoiceListController";

import { DataTable } from "@/app/_components/DataTable";
import { ROUTES } from "@/app/routes";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

const InvoicesList = () => {
  const { columns, data, isLoading } = useInvoiceListController();
  return (
    <>
      <Tabs defaultValue="all" className="w-full">
        <div className="flex items-center gap-2 justify-between">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="paid">Paid</TabsTrigger>
            <TabsTrigger value="pending">Due</TabsTrigger>
          </TabsList>
          <Button asChild>
            <Link href={ROUTES.PRIVATE.INVOICES_ADD.path} prefetch>
              Create Invoice
            </Link>
          </Button>
        </div>
      </Tabs>
      <DataTable
        columns={columns}
        data={data?.results ?? []}
        isLoading={isLoading}
      />
    </>
  );
};
export { InvoicesList };
