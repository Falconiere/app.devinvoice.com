const InvoiceFormHeaderLoader = () => (
  <div className="flex justify-between gap-4">
    <div className="h-6 w-[180px] bg-gray-200 animate-pulse rounded" />
    <div className="grid grid-cols-[150px,150px,150px] gap-4">
      <div className="h-6 bg-gray-200 animate-pulse rounded" />
      <div className="h-6 bg-gray-200 animate-pulse rounded" />
      <div className="h-6 bg-gray-200 animate-pulse rounded" />
    </div>
  </div>
);

export { InvoiceFormHeaderLoader };
