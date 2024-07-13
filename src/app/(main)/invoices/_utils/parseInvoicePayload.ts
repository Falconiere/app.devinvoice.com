import type {
	Invoice,
	InvoicePayload,
} from "@/database/services/invoice/types";
import { format } from "date-fns";

const parseInvoicePayload = (payload: Invoice): InvoicePayload => {
	return {
		id: payload.id,
		date: format(payload.date, "yyyy-MM-dd"),
		dueDate: format(payload.dueDate, "yyyy-MM-dd"),
		status: payload.status ?? "DRAFT",
		clientId: payload.clientId,
		businessId: payload.businessId,
		currency: payload.currency ?? "USD",
		description: payload.description ?? "",
		invoiceNumber: payload.invoiceNumber,
		notes: payload.notes ?? "",
		items: payload.items.map((item) => ({
			price: Number(item.price ?? 0),
			quantity: item.quantity ?? 0,
			description: item.description ?? "",
		})),
	};
};

export { parseInvoicePayload };
