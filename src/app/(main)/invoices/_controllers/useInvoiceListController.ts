import { useInvoiceListColumnsController } from "@/app/(main)/invoices/_controllers/useInvoiceListColumnsController";
import { parseInvoicePayload } from "@/app/(main)/invoices/_utils/parseInvoicePayload";
import { ROUTES } from "@/app/routes";
import { useToast } from "@/components/ui/use-toast";
import type { Invoice } from "@/database/services/invoice/types";
import { useInvoicePaginated } from "@/domains/_queries/invoice/useInvoicePaginated";
import { useInvoiceSave } from "@/domains/_queries/invoice/useInvoiceSave";
import { apiRoute } from "@/domains/_utils/apiRoute";
import { http } from "@/domains/_utils/http";
import { useRouter } from "next/navigation";
import { useState } from "react";
const useInvoiceListController = () => {
	const { replace } = useRouter();
	const { toast } = useToast();
	const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
	const [selectedId, setSelectedId] = useState<string | undefined>();

	const { data, isLoading, hasNextPage, fetchNextPage, refetch } =
		useInvoicePaginated();
	const { mutateAsync: save } = useInvoiceSave();

	const { columns } = useInvoiceListColumnsController({
		onUpdate: async (invoice: Invoice) => {
			try {
				const payload = parseInvoicePayload(invoice);
				await save(payload);
				refetch();
				toast({
					title: "Invoice saved",
					description: `Invoice ${invoice.invoiceNumber} has been updated!`,
				});
			} catch (error) {
				toast({
					title: "Error",
					description: "An error occurred while saving the invoice",
					variant: "destructive",
				});
			}
		},
		onDelete: (invoice: Invoice) => {
			setSelectedId(invoice.id as string);
			setIsDeleteDialogOpen(true);
		},
		onDuplicate: async (invoice: Invoice) => {
			try {
				const payload = parseInvoicePayload(invoice);
				const response = await save({
					...payload,
					id: undefined,
					status: "DRAFT",
				});
				if (!response?.data?.id) return;
				toast({
					title: "Invoice duplicated",
					description: `Invoice ${invoice.invoiceNumber} has been duplicated!`,
				});
				replace(ROUTES.PRIVATE.INVOICES_EDIT.get(response?.data?.id));
			} catch (error) {
				toast({
					title: "Error",
					description: "An error occurred while duplicating the invoice",
					variant: "destructive",
				});
			}
		},
	});

	const onCloseDeleteDialog = () => setIsDeleteDialogOpen(false);
	const onDelete = async () => {
		if (!selectedId) return;
		await http.delete(apiRoute.invoices.delete(selectedId));
		setSelectedId(undefined);
		setIsDeleteDialogOpen(false);
		refetch();
	};
	return {
		columns,
		data,
		isLoading,
		hasNextPage,
		fetchNextPage,
		isDeleteDialogOpen,
		onCloseDeleteDialog,
		onDelete,
	};
};
export { useInvoiceListController };
