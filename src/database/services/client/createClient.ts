import { db } from "@/database/db";
import { client } from "@/database/schemas/client";
import type { Client } from "@/database/services/client/types";

const createClient = async (values: Client) => {
	return await db.insert(client).values(values).returning();
};

export { createClient };
