import { business } from "@/database/schemas/business";
import { countryEnum } from "@/database/schemas/country";
import { invoice } from "@/database/schemas/invoice";
import { relations, sql } from "drizzle-orm";
import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const client = pgTable("client", {
	id: uuid("id").default(sql`uuid_generate_v4()`).primaryKey().unique(),
	name: text("name"),
	firstName: text("firstName").notNull(),
	lastName: text("lastName").notNull(),
	email: text("email").notNull(),
	website: text("website"),
	addressLine1: text("addressLine1"),
	addressLine2: text("addressLine2"),
	city: text("city"),
	state: text("state"),
	zipCode: text("zipCode"),
	country: countryEnum("country").notNull().default("US"),
	phone: text("phone"),
	notes: text("notes"),
	businessId: uuid("businessId")
		.references(() => business.id, {
			onDelete: "cascade",
		})
		.notNull(),
	createdAt: timestamp("createdAt").default(sql`now()`),
	updatedAt: timestamp("updatedAt").default(sql`now()`),
});

export const clientRelation = relations(client, ({ one, many }) => ({
	business: one(business, {
		fields: [client.businessId],
		references: [business.id],
		relationName: "business_from_client",
	}),
	invoices: many(invoice),
}));
