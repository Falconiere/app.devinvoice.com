import type { Invoice } from "@/database/services/invoice/types";
import { usePaginatedQuery } from "@/domains/hooks/usePaginatedQuery";
import { apiRoute } from "@/domains/utils/apiRoute";

const useInvoicePaginated = () =>
	usePaginatedQuery<Invoice>({
		queryKey: ["invoices"],
		queryApiPath: apiRoute.invoices.list,
	});

export { useInvoicePaginated };
