import { countryCodes } from "@/data/countries";
import { client } from "@/database/schemas/client";
import type { InferInsertModel } from "drizzle-orm";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const clientZodSchema = createInsertSchema(client, {
	email: z.string().email({ message: "Invalid email" }),
	name: z.string().min(3, { message: "Name must be at least 3 characters" }),
	firstName: z.string().or(z.literal("")),
	lastName: z.string().or(z.literal("")),
	phone: z.string().or(z.literal("")),
	zipCode: z.string().or(z.literal("")),
	country: z.enum(countryCodes as [string, ...string[]]).optional(),
	addressLine1: z.string().or(z.literal("")),
	addressLine2: z.string().or(z.literal("")),
	city: z.string().or(z.literal("")),
	state: z.string().or(z.literal("")),
	website: z.string().url().optional().or(z.literal("")),
	notes: z.string().optional(),
	createdAt: z.date().optional(),
	updatedAt: z.date().optional(),
}).omit({ businessId: true });

export type Client = InferInsertModel<typeof client>;
export type ClientPayload = z.infer<typeof clientZodSchema>;
