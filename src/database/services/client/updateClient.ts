import { db } from "@/database/db";
import { client } from "@/database/schemas/client";
import type { Client } from "@/database/services/client/types";
import { eq } from "drizzle-orm";

const updateClient = async (id: string, values: Client) => {
	return await db
		.update(client)
		.set(values)
		.where(eq(client.id, id))
		.returning();
};

export { updateClient };
