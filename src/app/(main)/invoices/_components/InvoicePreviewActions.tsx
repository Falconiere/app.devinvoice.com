"use client";
import { useHeaderActions } from "@/app/_hooks/useHeaderActions";
import generatePDF, { Margin, type Options } from "react-to-pdf";
const options: Options = {
  filename: "invoice.pdf",
  method: "open",
  resolution: 2,
  page: {
    format: "a4",
    orientation: "portrait",
    margin: Margin.NONE,
  },

  overrides: {
    pdf: {
      unit: "cm",
      format: "a4",
      orientation: "portrait",
    },
    canvas: {
      scale: 2,
    },
  },
};

type InvoicePreviewActionsProps = {
  invoiceId: string;
};
const InvoicePreviewActions = ({ invoiceId }: InvoicePreviewActionsProps) => {
  const getTargetElement = () => {
    const element = document.getElementById("pdf-view");
    return element;
  };
  useHeaderActions([
    {
      label: "Edit",
      component: "link",
      href: `/invoices/${invoiceId}/edit`,
    },
    {
      label: "Download PDF",
      component: "button",
      onClick: () => {
        generatePDF(getTargetElement, options);
      },
    },
  ]);
  return null;
};

export { InvoicePreviewActions };
