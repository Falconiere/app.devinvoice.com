import { getInvoiceById } from "@/database/services/invoice";
import { use } from "react";

type PDFViewProps = {
  searchParams: { id: string };
};

const PDFView = ({ searchParams }: PDFViewProps) => {
  const invoiceId = searchParams.id;
  const invoice = use(getInvoiceById(invoiceId));
  return (
    <div className="grid m-auto bg-white w-[21cm] border border-solid p-4">
      <h1 className="font-semibold text-2xl">
        Invoice to {invoice?.client?.name}{" "}
      </h1>
    </div>
  );
};

export default PDFView;
