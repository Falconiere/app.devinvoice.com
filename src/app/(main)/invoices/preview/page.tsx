import { InvoicePreviewActions } from "@/app/(main)/invoices/_components/InvoicePreviewActions";
import { InvoicePreview } from "@/app/(main)/invoices/_containers/InvoicePreview";
type Props = {
  searchParams: { id: string };
};

const Page = ({ searchParams }: Props) => {
  const invoiceId = searchParams.id;
  return (
    <>
      <InvoicePreviewActions invoiceId={invoiceId} />
      <div id="pdf-view" className="m-auto bg-white p-8">
        <InvoicePreview invoiceId={invoiceId} />
      </div>
    </>
  );
};
export default Page;
