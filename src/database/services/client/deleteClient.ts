import { db } from "@/database/db";
import { client } from "@/database/schemas/client";
import { eq } from "drizzle-orm";

const deleteClient = async (id: string) => {
	return await db.delete(client).where(eq(client.id, id));
};

export { deleteClient };
