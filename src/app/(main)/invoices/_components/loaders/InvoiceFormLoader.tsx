import { BillInfoLoader } from "@/app/(main)/invoices/_components/loaders/BillInfoLoader";
import { InvoiceFormHeaderLoader } from "@/app/(main)/invoices/_components/loaders/InvoiceFormHeaderLoader";
import { InvoiceItemLoader } from "@/app/(main)/invoices/_components/loaders/InvoiceItemLoader";

const InvoiceFormLoader = () => (
  <div className="rounded-sm overflow-hidden shadow-md bg-white relative p-4 grid gap-4">
    <InvoiceFormHeaderLoader />
    <hr />
    <div className="h-[100px] bg-gray-200 animate-pulse rounded" />
    <hr />
    <div className="grid grid-cols-2 gap-4">
      <BillInfoLoader />
      <BillInfoLoader />
    </div>
    <hr />
    <div className="grid grid-cols-[auto,150px,150px,150px] gap-4">
      <span>Item/Task</span>
      <span>Quantity</span>
      <span>price</span>
      <span>Amount</span>
    </div>
    <div className="grid grid-cols-[auto,150px,150px,150px,max-content] gap-4 items-start">
      <InvoiceItemLoader />
    </div>
    <div className="flex justify-end">
      <div className="h-[40px] w-[80px] bg-gray-200 animate-pulse rounded" />
    </div>
    <div className="h-[100px] bg-gray-200 animate-pulse rounded" />
    <hr />
    <div className="grid w-full max-w-2xl mr-0 ml-auto gap-2">
      <div className="flex justify-between items-center flex-1">
        <div className="h-6 w-[80px] bg-gray-200 animate-pulse rounded" />
        <div className="h-6 w-[80px] bg-gray-200 animate-pulse rounded" />
      </div>
    </div>
    <hr />
    <div className="flex justify-end">
      <div className="h-[40px] w-[80px] bg-gray-200 animate-pulse rounded" />
    </div>
  </div>
);
export { InvoiceFormLoader };
