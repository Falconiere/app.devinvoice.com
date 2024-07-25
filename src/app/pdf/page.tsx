import { formatAddress } from "@/app/(main)/invoices/_utils/formatAddress";

import { getInvoiceById } from "@/database/services/invoice";
import { getUserById } from "@/database/services/user";
import { toMoney } from "@/domains/_utils/toMoney";
import { format } from "date-fns";
import Script from "next/script";
import { Fragment, use } from "react";

type PDFViewProps = {
  searchParams: { id: string };
};

const PDFView = ({ searchParams }: PDFViewProps) => {
  const invoiceId = searchParams.id;
  const invoice = use(getInvoiceById(invoiceId));
  const currentBusiness = invoice?.business;
  const currentClient = invoice?.client;
  const userId = currentBusiness?.userId as string;
  const account = use(getUserById(userId));
  const notes = invoice?.notes;
  const total =
    invoice?.items.reduce(
      (acc, item) => acc + Number(item.price) * Number(item.price),
      0
    ) ?? 0;
  return (
    <>
      <div
        className="grid m-auto bg-white w-[21cm] border border-solid p-16 gap-4"
        id="pdf-view"
      >
        <h1 className="font-semibold text-2xl">
          Invoice to {invoice?.client?.name}
        </h1>
        <hr />
        <p className="whitespace-pre">{notes}</p>
        <hr />
        <div className="grid text-sm gap-4 ">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <strong className="font-semibold text-md">From:</strong>
              <p>{invoice?.business?.name},</p>
              <p>
                {formatAddress({
                  addressLine1: currentBusiness?.addressLine1,
                  addressLine2: currentBusiness?.addressLine2,
                  city: currentBusiness?.city,
                  state: currentBusiness?.state,
                  country: currentBusiness?.country,
                })}
              </p>
              <p>{invoice?.business?.email}</p>
            </div>
            <div>
              <strong className="font-semibold text-md">To:</strong>
              <p>{invoice?.client?.name},</p>
              <p>
                {formatAddress({
                  addressLine1: currentClient?.addressLine1,
                  addressLine2: currentClient?.addressLine2,
                  city: currentClient?.city,
                  state: currentClient?.state,
                  country: currentClient?.country,
                })}
              </p>
              <p>{invoice?.client?.email}</p>
            </div>
          </div>
          <hr />
          <div>
            <strong className="font-semibold text-md">Invoice Details</strong>
            <p>Invoice Number: {invoice?.invoiceNumber}</p>
            <p>
              Invoice Date:{" "}
              {format(new Date(String(invoice?.date)), "dd/MM/yyyy")}
            </p>
            <p>
              Due Date:{" "}
              {format(new Date(String(invoice?.dueDate)), "dd/MM/yyyy")}
            </p>
          </div>
          <hr />
          <div>
            <div className="grid grid-cols-[auto,150px,150px,150px] gap-4">
              <strong>Description</strong>
              <strong className="text-right">Quantity</strong>
              <strong className="text-right">Price</strong>
              <strong className="text-right">Total</strong>
              {invoice?.items.map((item) => (
                <Fragment key={item.id}>
                  <p>{item.description}</p>
                  <p className="text-right">{item.quantity}</p>
                  <p className="text-right">{toMoney(Number(item.price))}</p>
                  <p className="text-right">
                    {toMoney(Number(item.price) * Number(item.price))}
                  </p>
                </Fragment>
              ))}
            </div>
          </div>
          <hr />
          <div className="w-[50%] mr-0 ml-auto">
            <div className="grid grid-cols-2">
              <strong>Subtotal</strong>
              <p className="text-right">{toMoney(total)}</p>
              <strong>Discount</strong>
              <p className="text-right">{toMoney(0)}</p>
              <strong>Tax</strong>
              <p className="text-right">{toMoney(0)}</p>
              <strong>Total</strong>
              <p className="text-right">{toMoney(total)}</p>
            </div>
          </div>
          <hr />
          <div className="grid-cols-2 grid">
            <p>
              <strong>Email:</strong> {account?.email}
            </p>
            <p className="text-right">
              <strong>Powered by:</strong> {"<DevInVoice/>"}
            </p>
          </div>
        </div>
      </div>
      <Script id="print-script">
        {`
        window.print();
      `}
      </Script>
    </>
  );
};

export default PDFView;
