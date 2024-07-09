import { format } from "date-fns";

type InvoiceRowDateProps = {
  date: Date | string;
};
const InvoiceRowDate = ({ date }: InvoiceRowDateProps) => {
  return (
    <span className="bg-gray-100 p-2 rounded-md font-semibold">
      {format(new Date(date), "MMM dd, yyyy")}
    </span>
  );
};
export { InvoiceRowDate };
