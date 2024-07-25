import { db } from "@/database/db";
import { invoice } from "@/database/schemas/invoice";
import { invoiceItem } from "@/database/schemas/invoiceItem";
import type {
	Invoice,
	InvoiceItem,
	InvoicePayload,
} from "@/database/services/invoice/types";
import { eq } from "drizzle-orm";

const updateInvoice = async (id: string, payload: InvoicePayload) => {
	const invoiceValues = {
		invoiceNumber: payload.invoiceNumber,
		businessId: payload.businessId,
		clientId: payload.clientId,
		dueDate: payload.dueDate,
		description: payload.description,
		notes: payload.notes,
		currency: payload.currency,
		status: payload.status,
	} as Invoice;

	await db
		.update(invoice)
		.set(invoiceValues)
		.where(eq(invoice.id, id))
		.returning();

	const items = payload.items.map((item) => ({
		...item,
		invoiceId: id,
	}));
	if (items.length > 0) {
		await db.delete(invoiceItem).where(eq(invoiceItem.invoiceId, id)).execute();
		await db
			.insert(invoiceItem)
			.values(items as unknown as InvoiceItem[])
			.execute();
	}

	const result = await db.query.invoice.findFirst({
		where: eq(invoice.id, id),
		with: {
			items: true,
		},
	});
	return result;
};

export { updateInvoice };
