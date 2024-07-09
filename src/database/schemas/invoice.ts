import { business } from "@/database/schemas/business";
import { client } from "@/database/schemas/client";
import { invoiceItem } from "@/database/schemas/invoiceItem";
import { invoiceStatus } from "@/database/schemas/invoiceStatus";
import { relations, sql } from "drizzle-orm";
import { date, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

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
	notes: text("notes"),
	currency: text("currency").default("USD"),
	status: invoiceStatus("status").default("UNPAID"),
	createdAt: timestamp("createdAt").default(sql`now()`),
	updatedAt: timestamp("updatedAt").default(sql`now()`),
});

export const invoiceRelation = relations(invoice, ({ many, one }) => ({
	items: many(invoiceItem, {
		relationName: "invoice_items",
	}),
	business: one(business, {
		fields: [invoice.businessId],
		references: [business.id],
		relationName: "invoice_business",
	}),
	client: one(client, {
		fields: [invoice.clientId],
		references: [client.id],
		relationName: "invoice_client",
	}),
}));
