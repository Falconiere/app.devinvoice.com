import { db } from "@/database/db";
import { client } from "@/database/schemas/client";
import type { Client } from "@/database/services/client/types";
import type { GetQueryPaginated } from "@/database/services/types";
import { buildPaginationResponse } from "@/database/utils/buildPaginationResponse";
import { apiRoute } from "@/domains/utils/apiRoute";
import { count, desc, eq } from "drizzle-orm";

const getClientPaginated: GetQueryPaginated<Client> = async ({
	page,
	limit,
	businessId,
}) => {
	const offset = (page - 1) * limit;
	const results = await db
		.select()
		.from(client)
		.where(eq(client.businessId, String(businessId)))
		.orderBy(desc(client.createdAt))
		.limit(limit)
		.offset(offset);

	const counted = await db.select({ count: count() }).from(client);
	const total = counted[0].count;

	return buildPaginationResponse<Client>({
		page,
		limit,
		total,
		results,
		url: apiRoute.clients.root,
	});
};

export { getClientPaginated };
