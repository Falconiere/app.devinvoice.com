import { pgEnum } from "drizzle-orm/pg-core";

export const invoiceStatus = pgEnum("invoiceStatus", [
	"DRAFT",
	"UNPAID",
	"PAID",
]);
