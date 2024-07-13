import { InvoiceForm } from "@/app/(main)/invoices/_containers/InvoiceForm";
import { getInvoiceById } from "@/database/services/invoice";
import { use } from "react";
type InvoiceEditProps = {
  searchParams: { id: string };
};

const InvoiceEdit = ({ searchParams }: InvoiceEditProps) => {
  const invoiceId = searchParams.id;
  const invoice = use(getInvoiceById(invoiceId));
  return <InvoiceForm invoice={invoice} />;
};
export default InvoiceEdit;
