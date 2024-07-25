import type { Invoice } from "@/database/services/invoice/types";
import { usePaginatedQuery } from "@/domains/_hooks/usePaginatedQuery";
import { apiRoute } from "@/domains/_utils/apiRoute";

const useInvoicePaginated = () =>
	usePaginatedQuery<Invoice>({
		queryKey: ["invoices"],
		queryApiPath: apiRoute.invoices.list,
	});

export { useInvoicePaginated };
