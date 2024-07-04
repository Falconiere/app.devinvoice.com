import { apiRoute } from "@/app/_utils/apiRoute";
import { db } from "@/database/db";
import { invoice } from "@/database/schemas/invoice";
import { invoiceItem } from "@/database/schemas/invoiceItem";
import type { Invoice } from "@/database/services/invoice/types";
import type {
	PaginatedPayload,
	PaginatedServerData,
} from "@/database/services/types";
import { count, desc, eq } from "drizzle-orm";

type $Item = typeof invoiceItem.$inferInsert;
type $Invoice = typeof invoice.$inferInsert;

const createInvoice = async (payload: Invoice) => {
	const invoiceValues = {
		invoiceNumber: payload.invoiceNumber,
		businessId: payload.businessId,
		clientId: payload.clientId,
		date: payload.date as string,
		dueDate: payload.dueDate as string,
		description: payload.description,
		notes: payload.notes,
	};

	const [savedInvoice] = await db
		.insert(invoice)
		.values(invoiceValues)
		.returning();

	const items = payload.items.map((item) => ({
		...item,
		invoiceId: savedInvoice.id,
	})) as unknown as $Item[];

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
		notes: payload.notes,
		currency: payload.currency,
	} as $Invoice;

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
	await db
		.insert(invoiceItem)
		.values(items as unknown as $Item[])
		.execute();

	const result = await db.query.invoice.findFirst({
		where: eq(invoice.id, id),
		with: {
			items: true,
		},
	});
	return result;
};

const getInvoiceById = async (id: string): Promise<Invoice> => {
	const result = await db.query.invoice.findFirst({
		where: eq(invoice.id, id),
		with: {
			items: true,
			business: true,
			client: true,
		},
	});
	return result as unknown as Invoice;
};

type GetInvoicePaginated = (
	payload: PaginatedPayload & {
		businessId: string;
	},
) => Promise<PaginatedServerData<Invoice>>;

const getInvoicePaginated: GetInvoicePaginated = async ({
	page,
	limit,
	businessId,
}) => {
	const offset = (page - 1) * limit;
	const results = (await db.query.invoice.findMany({
		where: eq(invoice.businessId, businessId),
		orderBy: desc(invoice.createdAt),
		limit,
		offset,
		with: {
			items: true,
			business: true,
			client: true,
		},
	})) as unknown as Invoice[];

	const total = await db.select({ count: count() }).from(invoice);

	const totalPages = Math.ceil(total[0].count / limit);
	const nextPage = page < totalPages ? page + 1 : null;
	const prevPage = page > 1 ? page - 1 : null;

	return {
		results,
		total: total[0].count,
		next: nextPage ? apiRoute.invoices.list({ page: nextPage, limit }) : null,
		prev: prevPage ? apiRoute.invoices.list({ page: prevPage, limit }) : null,
	};
};

export {
	createInvoice,
	deleteInvoiceItem,
	updateInvoice,
	getInvoiceById,
	getInvoicePaginated,
};
