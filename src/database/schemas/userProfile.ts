import { countryEnum } from "@/database/schemas/country";
import { sql } from "drizzle-orm";
import { pgTable, text, uuid } from "drizzle-orm/pg-core";
// About name convention for tables:
// https://stackoverflow.com/questions/4702728/relational-table-naming-convention/4703155#4703155

export const userProfile = pgTable("user_profile", {
  id: uuid("id").default(sql`uuid_generate_v4()`).primaryKey().unique(),
  firstName: text("firstName"),
  lastName: text("lastName"),
  email: text("email").notNull().unique(),
  phone: text("phone"),
  country: countryEnum("country").notNull().default("US"),
  createdAt: text("createdAt").default(sql`now()`),
  updatedAt: text("updatedAt").default(sql`now()`),
});
