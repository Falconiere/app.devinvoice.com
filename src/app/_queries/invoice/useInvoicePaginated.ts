import { usePaginatedQuery } from "@/app/_hooks/usePaginatedQuery";
import { apiRoute } from "@/app/_utils/apiRoute";
import type { Invoice } from "@/database/services/invoice/types";

const useInvoicePaginated = () =>
	usePaginatedQuery<Invoice>({
		queryKey: ["invoices"],
		queryApiPath: apiRoute.invoices.list,
	});

export { useInvoicePaginated };
