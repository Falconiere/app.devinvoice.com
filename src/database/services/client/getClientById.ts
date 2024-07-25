import { db } from "@/database/db";
import { client } from "@/database/schemas/client";
import { eq } from "drizzle-orm";

const getClientById = async (id: string) => {
	return await db.query.client.findFirst({
		where: eq(client.id, id),
	});
};

export { getClientById };
