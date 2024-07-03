import { invoice } from "@/database/schemas/invoice";
import { invoiceItem } from "@/database/schemas/invoiceItem";
import { createSelectSchema } from "drizzle-zod";
import { z } from "zod";

export const invoiceItemZodSchema = createSelectSchema(invoiceItem)
	.omit({
		createdAt: true,
		updatedAt: true,
	})
	.extend({
		id: z.string().optional(),
		quantity: z.number(),
		rate: z.number(),
		description: z
			.string()
			.min(3, { message: "Description must be at least 3 characters" }),
	});
export const invoiceZodSchema = createSelectSchema(invoice)
	.extend({
		id: z.string().optional(),
		date: z.date(),
		dueDate: z.date(),
		items: z.array(invoiceItemZodSchema),
		description: z
			.string()
			.min(3, { message: "Job Description must be at least 3 characters" }),
		invoiceNumber: z.string().min(3),
		notes: z.string().optional(),
		clientId: z.string().uuid(),
		businessId: z.string().uuid(),
	})
	.omit({
		createdAt: true,
		updatedAt: true,
	});
export type Invoice = z.infer<typeof invoiceZodSchema>;
