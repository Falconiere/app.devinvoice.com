import { db } from "@/database/db";
import { invoice } from "@/database/schemas/invoice";
import { invoiceItem } from "@/database/schemas/invoiceItem";
import type {
	Invoice,
	InvoiceItem,
	InvoicePayload,
} from "@/database/services/invoice/types";
import { eq } from "drizzle-orm";

const createInvoice = async (payload: InvoicePayload) => {
	const invoiceValues = {
		invoiceNumber: payload.invoiceNumber,
		businessId: payload.businessId,
		clientId: payload.clientId,
		date: payload.date,
		dueDate: payload.dueDate,
		description: payload.description,
		notes: payload.notes,
		currency: payload.currency,
		status: payload.status,
	} as Invoice;

	const [savedInvoice] = await db
		.insert(invoice)
		.values(invoiceValues)
		.returning();

	const items = payload.items.map((item) => ({
		...item,
		invoiceId: savedInvoice.id,
	})) as unknown as InvoiceItem[];

	await db.insert(invoiceItem).values(items).execute();

	const result = await db.query.invoice.findFirst({
		where: eq(invoice.id, savedInvoice.id),
		with: {
			items: true,
		},
	});
	return result;
};

export { createInvoice };
