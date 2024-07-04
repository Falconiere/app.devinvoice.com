import { invoice } from "@/database/schemas/invoice";
import { invoiceItem } from "@/database/schemas/invoiceItem";
import { businessZodSchema } from "@/database/services/business/types";
import { clientZodSchema } from "@/database/services/client/types";
import { createSelectSchema } from "drizzle-zod";
import { z } from "zod";

export const invoiceItemZodSchema = createSelectSchema(invoiceItem)
	.omit({
		createdAt: true,
		updatedAt: true,
		invoiceId: true,
	})
	.extend({
		id: z.string().optional(),
		quantity: z.number().gt(0),
		// decimal 2
		price: z.number().gt(0),
		description: z
			.string()
			.min(3, { message: "Description must be at least 3 characters" }),
		invoiceId: z.string(),
	});
export const invoiceZodSchema = createSelectSchema(invoice)
	.extend({
		id: z.string().optional(),
		date: z.string().date().or(z.date()),
		dueDate: z.string().date().or(z.date()),
		items: z.array(invoiceItemZodSchema),
		currency: z.string(),
		description: z
			.string()
			.min(3, { message: "Job Description must be at least 3 characters" }),
		invoiceNumber: z.string().min(3),
		notes: z.string().optional(),
		clientId: z.string().uuid(),
		businessId: z.string().uuid(),
		business: businessZodSchema.optional(),
		client: clientZodSchema.optional(),
	})
	.omit({
		createdAt: true,
		updatedAt: true,
	});

export type InvoiceItem = z.infer<typeof invoiceItemZodSchema>;
export type Invoice = z.infer<typeof invoiceZodSchema>;
