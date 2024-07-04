import { invoice } from "@/database/schemas/invoice";
import { relations, sql } from "drizzle-orm";
import {
	decimal,
	integer,
	pgTable,
	text,
	timestamp,
	uuid,
} from "drizzle-orm/pg-core";

const invoiceItem = pgTable("invoiceItem", {
	id: uuid("id").default(sql`uuid_generate_v4()`).primaryKey().unique(),
	description: text("description"),
	quantity: integer("quantity"),
	price: decimal("price"),
	invoiceId: uuid("invoiceId")
		.references(() => invoice.id, {
			onDelete: "cascade",
		})
		.notNull(),
	createdAt: timestamp("createdAt").default(sql`now()`),
	updatedAt: timestamp("updatedAt").default(sql`now()`),
});

export const invoiceItemRelations = relations(invoiceItem, ({ one }) => ({
	user: one(invoice, {
		fields: [invoiceItem.invoiceId],
		references: [invoice.id],
		relationName: "invoice_items",
	}),
}));

export { invoiceItem };
