import { sql } from "drizzle-orm";
import { pgTable, text, uuid } from "drizzle-orm/pg-core";

const invoice = pgTable("invoice", {
	id: uuid("id").default(sql`uuid_generate_v4()`).primaryKey().unique(),
	invoiceNumber: text("invoiceNumber").notNull().unique(),
	dueDate: text("dueDate").notNull(),
	description: text("description"),
	createdAt: text("createdAt").default(sql`now()`),
	updatedAt: text("updatedAt").default(sql`now()`),
});

export { invoice };
