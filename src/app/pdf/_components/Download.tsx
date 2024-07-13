"use client";
import generatePDF, { type Options } from "react-to-pdf";
const options: Options = {
  filename: "invoice.pdf",
  method: "save",
  resolution: 2,
  page: {
    format: "a4",
    orientation: "portrait",
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
const Download = () => {
  const getTargetElement = () => document.getElementById("pdf-view");
  return (
    <div>
      <button
        onClick={() => generatePDF(getTargetElement, options)}
        type="button"
      >
        Download PDF
      </button>
    </div>
  );
};

export { Download };
