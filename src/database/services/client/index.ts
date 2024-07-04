import { apiRoute } from "@/app/_utils/apiRoute";
import { db } from "@/database/db";
import { client } from "@/database/schemas/client";
import type { Client } from "@/database/services/client/types";
import type {
	PaginatedPayload,
	PaginatedServerData,
} from "@/database/services/types";
import { count, desc, eq } from "drizzle-orm";

const createClient = async (values: Client) => {
	return await db.insert(client).values(values).returning();
};

const updateClient = async (id: string, values: Client) => {
	return await db
		.update(client)
		.set(values)
		.where(eq(client.id, id))
		.returning();
};

const getClientById = async (id: string) => {
	return await db.query.client.findFirst({
		where: eq(client.id, id),
	});
};

type GetClientPaginated = (
	payload: PaginatedPayload & {
		businessId: string;
	},
) => Promise<PaginatedServerData<Client>>;

const getClientPaginated: GetClientPaginated = async ({
	page,
	limit,
	businessId,
}) => {
	const offset = (page - 1) * limit;
	const results = await db
		.select()
		.from(client)
		.where(eq(client.businessId, businessId))
		.orderBy(desc(client.createdAt))
		.limit(limit)
		.offset(offset);

	const total = await db.select({ count: count() }).from(client);

	const totalPages = Math.ceil(total[0].count / limit);
	const nextPage = page < totalPages ? page + 1 : null;
	const prevPage = page > 1 ? page - 1 : null;

	return {
		results,
		total: total[0].count,
		next: nextPage ? apiRoute.clients.list({ page: nextPage, limit }) : null,
		prev: prevPage ? apiRoute.clients.list({ page: prevPage, limit }) : null,
	};
};

const deleteClient = async (id: string) => {
	return await db.delete(client).where(eq(client.id, id));
};

export {
	createClient,
	updateClient,
	getClientById,
	deleteClient,
	getClientPaginated,
};
