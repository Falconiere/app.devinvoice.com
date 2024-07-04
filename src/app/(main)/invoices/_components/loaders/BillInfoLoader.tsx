const BillInfoLoader = () => (
  <div className="grid">
    <div className="flex justify-between p-4 py=0">
      <div className="h-6 w-16 bg-gray-200 animate-pulse rounded" />
      <div className="h-6 w-16 bg-gray-200 animate-pulse rounded" />
    </div>
    <div className="grid grid-cols-1 p-4 py-0 gap-4">
      <div className="h-6 bg-gray-200 animate-pulse rounded" />
      <div className="h-20 bg-gray-200 animate-pulse rounded" />
      <div className="h-6 bg-gray-200 animate-pulse rounded" />
      <div className="h-6 bg-gray-200 animate-pulse rounded" />
    </div>
  </div>
);

export { BillInfoLoader };
