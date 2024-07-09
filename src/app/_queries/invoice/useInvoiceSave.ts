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
			const response = !id
				? await http.post<Invoice, InvoicePayload>(
						apiRoute.invoices.post,
						invoice,
					)
				: await http.patch<Invoice, InvoicePayload>(
						apiRoute.invoices.patch(id),
						invoice,
					);
			return response;
		},
	});
};
export { useInvoiceSave };
