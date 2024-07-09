import type { Business } from "@/database/services/business/types";

type Address = Pick<
	Business,
	"addressLine1" | "addressLine2" | "city" | "country" | "state"
>;
const formatAddress = (address: Address) => {
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
