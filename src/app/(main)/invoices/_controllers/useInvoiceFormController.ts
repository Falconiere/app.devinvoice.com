import { ROUTES } from "@/app/routes";
import { useToast } from "@/components/ui/use-toast";
import type { Business } from "@/database/services/business/types";

import type { Client } from "@/database/services/client/types";

import {
	type Invoice,
	type InvoicePayload,
	invoiceZodSchema,
} from "@/database/services/invoice/types";
import { useClient } from "@/domains/queries/client/useClient";
import { useInvoiceSave } from "@/domains/queries/invoice/useInvoiceSave";
import { useUserProfile } from "@/domains/queries/user/useUserProfile";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useFieldArray, useForm, useWatch } from "react-hook-form";

type UseInvoiceFormController = {
	invoice?: Invoice;
};

const useInvoiceFormController = ({
	invoice: currentInvoice,
}: UseInvoiceFormController) => {
	const { toast } = useToast();
	const invoice = currentInvoice as unknown as InvoicePayload;
	const invoiceId = invoice?.id;
	const [currentClientId, setCurrentClientId] = useState<string>();
	const [currentBusiness, setCurrentBusiness] = useState<Business>();
	const [isSelectClientOpen, setIsSelectClientOpen] = useState(false);
	const [isBusinessFormOpen, setIsBusinessFormOpen] = useState(false);
	const [isClientFormOpen, setIsClientFormOpen] = useState(false);
	const { data: profile } = useUserProfile();
	const { data: currentClient, refetch: refetchClient } =
		useClient(currentClientId);

	const { replace } = useRouter();

	const { mutateAsync: saveInvoice, isPending: isSaving } =
		useInvoiceSave(invoiceId);

	const form = useForm<InvoicePayload>({
		resolver: zodResolver(
			invoiceZodSchema.omit({ business: true, client: true }),
		),
		defaultValues: {
			...(invoice as unknown as InvoicePayload),
			currency: "USD",
			items: [{ description: "", quantity: 0, price: 0 }],
		},
	});
	const { control, setValue } = form;
	const [items] = useWatch({ control, name: ["items"] });

	const fillForm = useCallback(() => {
		for (const key in invoice) {
			const formKey = key as keyof InvoicePayload;
			setValue(formKey, invoice[formKey]);
			if (formKey === "items") {
				invoice[formKey].forEach((item, index) => {
					setValue(`items.${index}.description`, item.description ?? "");
					setValue(`items.${index}.quantity`, item.quantity ?? 0);
					setValue(`items.${index}.price`, item.price ?? 0);
				});
			}
			if (formKey === "date" || formKey === "dueDate") {
				setValue(formKey, new Date(`${invoice[formKey]} EDT`));
			}
			if (formKey === "client" && invoice.client) {
				setCurrentClientId(invoice.client?.id);
				refetchClient();
			}

			if (formKey === "business" && invoice.business) {
				setCurrentBusiness(invoice.business as Business);
			}
		}
	}, [invoice, refetchClient, setValue]);

	useEffect(() => {
		if (invoice) {
			fillForm();
			return;
		}
		if (profile?.businesses?.[0]?.id) {
			const businessId = profile.businesses[0].id;
			setValue("businessId", businessId);
			setCurrentBusiness(profile.businesses[0]);
		}
	}, [profile, invoice, fillForm, setValue]);

	const { fields, append, remove } = useFieldArray({ control, name: "items" });
	const onAddItem = () => {
		append({
			description: "",
			quantity: 0,
			price: 0,
			invoiceId: invoice?.id ?? "",
		});
	};

	const onRemoveItem = (index: number) => {
		remove(index);
	};

	const onSubmit = form.handleSubmit(async (data) => {
		try {
			const payload = {
				...data,
				date: format(data.date.toLocaleString(), "yyyy-MM-dd"),
				dueDate: format(data.dueDate.toLocaleString(), "yyyy-MM-dd"),
			};
			const savedInvoice = await saveInvoice(payload);
			toast({
				title: "Success!",
				description: "Invoice have been saved successfully.",
				variant: "default",
				duration: 2000,
			});

			if (savedInvoice?.data?.id)
				replace(ROUTES.PRIVATE.INVOICES_PREVIEW.get(savedInvoice.data.id));
		} catch {
			toast({
				title: "Error!",
				description: "Something went wrong. Please try again.",
				variant: "destructive",
				duration: 2000,
			});
		}
	});

	const total = useMemo(() => {
		return items.reduce((acc, item) => {
			const quantity = item.quantity ?? 0;
			const price = item.price ?? 0;
			return acc + quantity * Number(price);
		}, 0);
	}, [items]);

	const onSelectClient = (client: Client) => {
		setCurrentClientId(client.id);
		refetchClient();
		if (client.id) setValue("clientId", client.id);
		setIsSelectClientOpen(false);
	};

	const onToggleEditBusiness = () => setIsBusinessFormOpen(!isBusinessFormOpen);
	const onToggleEditClient = () => setIsClientFormOpen(!isClientFormOpen);

	const getAmount = (idx: number) => {
		const item = items[idx];
		const quantity = item?.quantity ?? 0;
		const price = item?.price ?? 0;
		return quantity * Number(price);
	};

	return {
		control,
		items: fields,
		total,
		currentClient,
		currentBusiness,
		isSelectClientOpen,
		isBusinessFormOpen,
		profile,
		isSaving,
		isClientFormOpen,
		setIsSelectClientOpen,
		onSelectClient,
		getAmount,
		onSubmit,
		onAddItem,
		onRemoveItem,
		onToggleEditBusiness,
		onToggleEditClient,
	};
};
export { useInvoiceFormController };
