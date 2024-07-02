import { countryCodes } from "@/data/countries";
import { business } from "@/database/schemas/business";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const businessSchema = createInsertSchema(business, {
	email: z.string().email({ message: "Invalid email" }),
	name: z.string().min(3, { message: "Name must be at least 3 characters" }),
	firstName: z
		.string()
		.min(3, { message: "First name must be at least 3 characters" }),
	lastName: z
		.string()
		.min(3, { message: "Last name must be at least 3 characters" }),
	phone: z
		.string()
		.min(10, { message: "Phone number must be at least 10 characters" }),
	zipCode: z
		.string()
		.min(5, { message: "Zip code must be at least 5 characters" }),
	country: z.enum(countryCodes as [string, ...string[]]),
	addressLine1: z
		.string()
		.min(5, { message: "Address line 1 must be at least 5 characters" }),
	addressLine2: z.string().optional(),
	city: z.string().min(3, { message: "City must be at least 3 characters" }),
	state: z.string().min(2, { message: "State must be at least 2 characters" }),
	website: z.string().url().optional().or(z.literal("")),
	notes: z.string().optional(),
	createdAt: z.date().optional(),
	updatedAt: z.date().optional(),
});

export type Business = typeof business.$inferSelect;
