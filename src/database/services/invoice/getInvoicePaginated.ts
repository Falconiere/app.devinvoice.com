import { db } from "@/database/db";
import { invoice } from "@/database/schemas/invoice";
import type { Invoice } from "@/database/services/invoice/types";
import type { GetQueryPaginated } from "@/database/services/types";
import { buildPaginationResponse } from "@/database/utils/buildPaginationResponse";
import { apiRoute } from "@/domains/_utils/apiRoute";
import { count, desc, eq } from "drizzle-orm";

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

export { getInvoicePaginated };
