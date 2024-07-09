import { useInvoiceListColumnsController } from "@/app/(main)/invoices/_controllers/useInvoiceListColumnsController";
import { useInvoicePaginated } from "@/app/_queries/invoice/useInvoicePaginated";

const useInvoiceListController = () => {
	const { data, isLoading, hasNextPage, fetchNextPage } = useInvoicePaginated();
	const { columns } = useInvoiceListColumnsController();
	return { columns, data, isLoading, hasNextPage, fetchNextPage };
};
export { useInvoiceListController };
