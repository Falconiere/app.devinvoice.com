import { apiRoute } from "@/app/_utils/apiRoute";
import { http } from "@/app/_utils/http";
import type { Invoice } from "@/database/services/invoice/types";
import { useMutation } from "@tanstack/react-query";

const useInvoiceSave = (id?: string) => {
	return useMutation({
		mutationKey: ["invoices", !id ? "save" : `update-${id}`],
		mutationFn: async (invoice: Invoice) => {
			const response = !id
				? await http.post<Invoice>(apiRoute.invoices.post, invoice)
				: await http.patch<Invoice>(apiRoute.invoices.patch(id), invoice);
			return response;
		},
	});
};
export { useInvoiceSave };
