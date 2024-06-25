import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type BillBasicInfoProps = {
  title: string;
  name?: string;
  address?: string;
  country?: string;
  email?: string;
  phone?: string;
};
const BillBasicInfo = (props: BillBasicInfoProps) => {
  const { title, name, address, country, email, phone } = props;
  return (
    <div>
      <span>{title}:</span>
      <div className="border-gray-300 border rounded-md overflow-hidden">
        <Input
          placeholder="Your Company Name"
          className="border-l-0 border-r-0 border-t-0 rounded-none"
          value={name}
        />
        <Textarea
          placeholder="Company Address"
          className="border-l-0 border-r-0 border-t-0 rounded-none"
          value={address}
        />
        <Input
          placeholder="Country"
          className="border-l-0 border-r-0 border-t-0 rounded-none"
          value={country}
        />
        <Input
          placeholder="Email"
          className="border-l-0 border-r-0 border-t-0 rounded-none"
          value={email}
        />
        <Input
          placeholder="Phone Number"
          className="border-l-0 border-r-0 border-b-0 border-t-0 rounded-none"
          value={phone}
        />
      </div>
    </div>
  );
};

export { BillBasicInfo };
