import { db } from "@/database/db";
import { invoice } from "@/database/schemas/invoice";
import type { Invoice } from "@/database/services/invoice/types";
import { eq } from "drizzle-orm";

const getInvoiceById = async (id: string): Promise<Invoice | undefined> => {
	const result = await db.query.invoice.findFirst({
		where: eq(invoice.id, id),
		with: {
			items: true,
			business: true,
			client: true,
		},
	});
	return result;
};

export { getInvoiceById };
