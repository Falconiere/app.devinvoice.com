import { db } from "@/database/db";
import { invoice } from "@/database/schemas/invoice";
import { eq } from "drizzle-orm";

const deleteInvoice = async (id: string) => {
	await db.delete(invoice).where(eq(invoice.id, id)).execute();
};

export { deleteInvoice };
