import { db } from "@/database/db";
import { invoiceItem } from "@/database/schemas/invoiceItem";
import { eq } from "drizzle-orm";

const deleteInvoiceItem = async (id: string) => {
	await db.delete(invoiceItem).where(eq(invoiceItem.id, id)).execute();
};
export { deleteInvoiceItem };
