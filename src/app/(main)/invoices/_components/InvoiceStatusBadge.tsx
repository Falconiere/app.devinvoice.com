import type { InvoiceStatus } from "@/database/services/invoice/types";
import { cn } from "@/lib/utils";

type InvoiceStatusBadgeProps = {
  status: InvoiceStatus;
};

const statusColors = {
  PAID: "bg-green-600 text-white",
  UNPAID: "bg-red-500 text-white",
  DRAFT: "bg-gray-400 text-white",
} as const;
const InvoiceStatusBadge = ({ status }: InvoiceStatusBadgeProps) => {
  const color = statusColors[status];
  return (
    <span className={cn(color, "p-2 rounded-md font-semibold  text-xs")}>
      {status}
    </span>
  );
};
export { InvoiceStatusBadge };
