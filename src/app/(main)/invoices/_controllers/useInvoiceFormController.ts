import { useInvoiceSave } from "@/app/_queries/invoice/useInvoiceSave";
import { useUserProfile } from "@/app/_queries/user/useUserProfile";
import { ROUTES } from "@/app/routes";
import { useToast } from "@/components/ui/use-toast";
import type { Business } from "@/database/services/business/types";

import type { Client } from "@/database/services/client/types";
import {
	type Invoice,
	invoiceZodSchema,
} from "@/database/services/invoice/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useFieldArray, useForm, useWatch } from "react-hook-form";
type UseInvoiceFormController = {
	invoice?: Invoice;
};
const useInvoiceFormController = ({ invoice }: UseInvoiceFormController) => {
	const { toast } = useToast();

	const invoiceId = invoice?.id;
	const [currentClient, setCurrentClient] = useState<Client>();
	const [currentBusiness, setCurrentBusiness] = useState<Business>();
	const [isSelectClientOpen, setIsSelectClientOpen] = useState(false);
	const { data: profile } = useUserProfile();

	const { replace } = useRouter();

	const { mutateAsync: saveInvoice, isPending: isSaving } =
		useInvoiceSave(invoiceId);
	const form = useForm<Invoice>({
		resolver: zodResolver(
			invoiceZodSchema.omit({ business: true, client: true }),
		),
		defaultValues: {
			...invoice,
			date: new Date(),
			dueDate: new Date(),
			currency: "USD",
			items: [{ description: "", quantity: 0, price: 0 }],
		},
	});
	const { control, setValue } = form;
	const [items] = useWatch({ control, name: ["items"] });

	const fillForm = useCallback(() => {
		for (const key in invoice) {
			const formKey = key as keyof Invoice;
			setValue(formKey, invoice[formKey]);
			if (formKey === "items") {
				invoice[formKey].forEach((item, index) => {
					setValue(`items.${index}.description`, item.description);
					setValue(`items.${index}.quantity`, item.quantity);
					setValue(`items.${index}.price`, item.price);
				});
			}
			if (formKey === "date" || formKey === "dueDate") {
				setValue(formKey, new Date(`${invoice[formKey]} EDT`));
			}
			if (formKey === "client" && invoice.client)
				setCurrentClient(invoice.client as Client);
			if (formKey === "business" && invoice.business)
				setCurrentBusiness(invoice.business as Business);
		}
	}, [invoice, setValue]);

	useEffect(() => {
		if (invoice) {
			fillForm();
			return;
		}
		if (profile?.businesses?.length) {
			const businessId = profile.businesses[0].id;
			setValue("businessId", businessId);
			setCurrentBusiness(profile.businesses[0]);
		}
	}, [profile, invoice, fillForm, setValue]);

	const { fields, append, remove } = useFieldArray({ control, name: "items" });
	const onAddItem = () => {
		append({
			description: "",
			quantity: 1,
			price: 1,
			invoiceId: "",
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
				replace(ROUTES.PRIVATE.INVOICES_EDIT.get(savedInvoice.data.id));
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
		return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
	}, [items]);

	const onSelectClient = (client: Client) => {
		setCurrentClient(client);
		setValue("clientId", client.id);
		setIsSelectClientOpen(false);
	};

	const getAmount = (idx: number) => {
		const item = items[idx];
		return item.quantity * item.price;
	};

	return {
		control,
		onSubmit,
		items: fields,
		total,
		onAddItem,
		onRemoveItem,
		currentClient,
		currentBusiness,
		setCurrentClient,
		isSelectClientOpen,
		setIsSelectClientOpen,
		profile,
		onSelectClient,
		getAmount,

		isSaving,
	};
};
export { useInvoiceFormController };
