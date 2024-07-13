import { apiRoute } from "@/app/_utils/apiRoute";
import { http } from "@/app/_utils/http";
import type {
	Invoice,
	InvoicePayload,
} from "@/database/services/invoice/types";
import { useMutation } from "@tanstack/react-query";

const useInvoiceSave = (id?: string) => {
	return useMutation({
		mutationKey: ["invoices", !id ? "save" : `update-${id}`],
		mutationFn: async (invoice: InvoicePayload) => {
			const currentId = id ?? invoice.id;
			const response = !currentId
				? await http.post<Invoice, InvoicePayload>(
						apiRoute.invoices.post,
						invoice,
					)
				: await http.patch<Invoice, Partial<InvoicePayload>>(
						apiRoute.invoices.patch(currentId),
						invoice,
					);
			return response;
		},
	});
};
export { useInvoiceSave };
