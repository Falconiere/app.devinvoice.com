import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { countries } from "@/data/countries";
import { cn } from "@/lib/utils";

type BillBasicInfoProps = {
  title: string;
  name?: string | null;
  address?: string | null;
  country?: string | null;
  email?: string | null;
  phone?: string | null;
  onEdit?: () => void;
  onSelect?: () => void;
  error: string | undefined;
};
const BillBasicInfo = (props: BillBasicInfoProps) => {
  const {
    title,
    name,
    address,
    country,
    email,
    phone,
    onEdit,
    onSelect,
    error,
  } = props;
  return (
    <div>
      <div className="flex items-center justify-between">
        <span>{title}:</span>
        <div className="flex items-center gap-4">
          {onEdit && (
            <Button
              variant="link"
              className="text-blue-500 p-0"
              type="button"
              onClick={onEdit}
            >
              Edit
            </Button>
          )}
          {onSelect && (
            <Button
              variant="link"
              className="text-blue-500 p-0"
              type="button"
              onClick={onSelect}
            >
              Select
            </Button>
          )}
        </div>
      </div>
      <div
        className={cn("border-gray-300 border rounded-md overflow-hidden", {
          "border-red-500": error && !email,
        })}
      >
        <Input
          placeholder="Your Company Name"
          className="border-l-0 border-r-0 border-t-0 rounded-none"
          value={name ?? ""}
          readOnly
        />
        <Textarea
          placeholder="Company Address"
          className="border-l-0 border-r-0 border-t-0 rounded-none"
          value={address ?? ""}
          readOnly
        />
        <Input
          placeholder="Country"
          className="border-l-0 border-r-0 border-t-0 rounded-none"
          value={countries.find((c) => c.code === country)?.name ?? ""}
          readOnly
        />
        <Input
          placeholder="Email"
          className="border-l-0 border-r-0 border-t-0 rounded-none"
          value={email ?? ""}
          readOnly
        />
        <Input
          placeholder="Phone Number"
          className="border-l-0 border-r-0 border-b-0 border-t-0 rounded-none"
          value={phone ?? ""}
          readOnly
        />
      </div>
    </div>
  );
};

export { BillBasicInfo };
