import { business } from "@/database/schemas/business";
import { client } from "@/database/schemas/client";
import { invoiceItem } from "@/database/schemas/invoiceItem";
import { relations, sql } from "drizzle-orm";
import { date, pgTable, text, uuid } from "drizzle-orm/pg-core";

export const invoice = pgTable("invoice", {
	id: uuid("id").default(sql`uuid_generate_v4()`).primaryKey().unique(),
	invoiceNumber: text("invoiceNumber").notNull(),
	businessId: uuid("businessId")
		.references(() => business.id, {
			onDelete: "cascade",
		})
		.notNull(),
	clientId: uuid("clientId")
		.references(() => client.id, {
			onDelete: "cascade",
		})
		.notNull(),
	date: date("date").notNull(),
	dueDate: date("dueDate").notNull(),
	description: text("description"),
	createdAt: text("createdAt").default(sql`now()`),
	updatedAt: text("updatedAt").default(sql`now()`),
});

export const invoiceRelation = relations(invoice, ({ many }) => ({
	items: many(invoiceItem),
}));
