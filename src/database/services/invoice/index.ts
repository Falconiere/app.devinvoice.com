import { db } from "@/database/db";
import { invoice } from "@/database/schemas/invoice";
import { invoiceItem } from "@/database/schemas/invoiceItem";
import type { Invoice } from "@/database/services/invoice/types";
import { eq } from "drizzle-orm";

const createInvoice = async (payload: Invoice) => {
	const invoiceValues = {
		invoiceNumber: payload.invoiceNumber,
		businessId: payload.businessId,
		clientId: payload.clientId,
		dueDate: payload.dueDate,
		description: payload.description,
	};

	const [savedInvoice] = await db
		.insert(invoice)
		.values(invoiceValues)
		.returning();

	const items = payload.items.map((item) => ({
		...item,
		invoiceId: savedInvoice.id,
	}));

	await db.insert(invoiceItem).values(items).execute();

	const result = await db.query.invoice.findFirst({
		where: eq(invoice.id, savedInvoice.id),
		with: {
			items: true,
		},
	});
	return result;
};

const deleteInvoiceItem = async (id: string) => {
	await db.delete(invoiceItem).where(eq(invoiceItem.id, id)).execute();
};

const updateInvoice = async (id: string, payload: Invoice) => {
	const invoiceValues = {
		invoiceNumber: payload.invoiceNumber,
		businessId: payload.businessId,
		clientId: payload.clientId,
		dueDate: payload.dueDate,
		description: payload.description,
	};

	await db
		.update(invoice)
		.set(invoiceValues)
		.where(eq(invoice.id, id))
		.returning();

	const items = payload.items.map((item) => ({
		...item,
		invoiceId: id,
	}));

	await db.delete(invoiceItem).where(eq(invoiceItem.invoiceId, id)).execute();
	await db.insert(invoiceItem).values(items).execute();

	const result = await db.query.invoice.findFirst({
		where: eq(invoice.id, id),
		with: {
			items: true,
		},
	});
	return result;
};
export { createInvoice, deleteInvoiceItem, updateInvoice };
