import { sql } from "drizzle-orm";
import { decimal, integer, pgTable, text, uuid } from "drizzle-orm/pg-core";

const invoiceItem = pgTable("invoiceItem", {
  id: uuid("id").default(sql`uuid_generate_v4()`).primaryKey().unique(),
  description: text("description"),
  quantity: integer("quantity"),
  price: decimal("price"),
  createdAt: text("createdAt").default(sql`now()`),
  updatedAt: text("updatedAt").default(sql`now()`),
});

export { invoiceItem };