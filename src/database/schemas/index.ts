import * as client from "@/database/schemas/client";
import * as invoice from "@/database/schemas/invoice";
import * as invoiceItem from "@/database/schemas/invoiceItem";
import * as business from "./business";
import * as user from "./userProfile";
const schemas = {
	...user,
	...business,
	...client,
	...invoice,
	...invoiceItem,
};
export { schemas };
