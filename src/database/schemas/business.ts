import { countryEnum } from "@/database/schemas/country";
import { userProfile } from "@/database/schemas/userProfile";
import { relations, sql } from "drizzle-orm";
import { pgTable, text, uuid } from "drizzle-orm/pg-core";

export const business = pgTable("business", {
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
	userId: uuid("userId")
		.references(() => userProfile.id, {
			onDelete: "cascade",
		})
		.notNull(),
	createdAt: text("createdAt").default(sql`now()`),
	updatedAt: text("updatedAt").default(sql`now()`),
});

export const businessRelation = relations(business, ({ one }) => ({
	user: one(userProfile, {
		fields: [business.userId],
		references: [userProfile.id],
		relationName: "account",
	}),
}));
