import type { Business } from "@/database/services/business/types";
import type { Client } from "@/database/services/client/types";

type Source = Partial<Business> | Partial<Client>;
const formatAddress = (address?: Source) => {
	if (!address) return "";
	const arr = [
		address.addressLine1,
		address.addressLine2,
		address.city,
		address.state,
		address.country,
	];
	return arr.filter(Boolean).join(", ");
};
export { formatAddress };
