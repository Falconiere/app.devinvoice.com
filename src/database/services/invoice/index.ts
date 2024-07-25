import { db } from "@/database/db";
import { invoice } from "@/database/schemas/invoice";
import { invoiceItem } from "@/database/schemas/invoiceItem";
import type {
	Invoice,
	InvoiceItem,
	InvoicePayload,
} from "@/database/services/invoice/types";
import type { GetQueryPaginated } from "@/database/services/types";
import { buildPaginationResponse } from "@/database/utils/buildPaginationResponse";
import { apiRoute } from "@/domains/_utils/apiRoute";

import { count, desc, eq } from "drizzle-orm";

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

const deleteInvoiceItem = async (id: string) => {
	await db.delete(invoiceItem).where(eq(invoiceItem.id, id)).execute();
};

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

const getInvoicePaginated: GetQueryPaginated<Invoice> = async ({
	page,
	limit,
	businessId,
}) => {
	const offset = (page - 1) * limit;
	const results = await db.query.invoice.findMany({
		where: eq(invoice.businessId, String(businessId)),
		orderBy: desc(invoice.createdAt),
		limit,
		offset,
		with: {
			items: true,
			business: true,
			client: true,
		},
	});

	const counted = await db.select({ count: count() }).from(invoice);
	const total = counted[0].count;
	return buildPaginationResponse<Invoice>({
		page,
		limit,
		total,
		results,
		url: apiRoute.invoices.root,
	});
};

const deleteInvoice = async (id: string) => {
	await db.delete(invoice).where(eq(invoice.id, id)).execute();
};
export {
	createInvoice,
	deleteInvoiceItem,
	updateInvoice,
	getInvoiceById,
	getInvoicePaginated,
	deleteInvoice,
};
