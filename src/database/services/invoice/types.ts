import { invoice } from "@/database/schemas/invoice";
import { invoiceItem } from "@/database/schemas/invoiceItem";
import { invoiceStatus } from "@/database/schemas/invoiceStatus";
import { businessZodSchema } from "@/database/services/business/types";
import { clientZodSchema } from "@/database/services/client/types";
import type { InferInsertModel } from "drizzle-orm";
import { createSelectSchema } from "drizzle-zod";
import { z } from "zod";

export const invoiceStatusZodSchema = z.enum(invoiceStatus.enumValues);
export const invoiceItemZodSchema = createSelectSchema(invoiceItem)
	.omit({
		createdAt: true,
		updatedAt: true,
		invoiceId: true,
	})
	.extend({
		id: z.string().optional(),
		quantity: z.number().gt(0),
		price: z
			.number()
			.or(z.string())
			.refine((value) => Number.parseFloat(value.toString()) > 0, {}),
		description: z
			.string()
			.min(3, { message: "Description must be at least 3 characters" }),
		invoiceId: z.string().or(z.string().uuid()).or(z.undefined()).optional(),
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
		status: invoiceStatusZodSchema.optional(),
	})
	.omit({
		createdAt: true,
		updatedAt: true,
	});

export type InvoiceStatus = z.infer<typeof invoiceStatusZodSchema>;
export type InvoiceItem = InferInsertModel<typeof invoiceItem>;
export type InvoiceItemPayload = z.infer<typeof invoiceItemZodSchema>;
export type Invoice = InferInsertModel<typeof invoice> & {
	items: InvoiceItem[];
	client?: z.infer<typeof clientZodSchema>;
	business?: z.infer<typeof businessZodSchema>;
};

export type InvoicePayload = z.infer<typeof invoiceZodSchema>;
