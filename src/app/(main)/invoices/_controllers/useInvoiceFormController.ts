import { useUserProfile } from "@/app/_queries/users/useUserProfile";

import type { Client } from "@/database/services/client/types";
import { invoiceZodSchema } from "@/database/services/invoice/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useMemo, useState } from "react";
import { useFieldArray, useForm, useWatch } from "react-hook-form";

const useInvoiceFormController = () => {
	const [currentClient, setCurrentClient] = useState<Client>();
	const [isSelectClientOpen, setIsSelectClientOpen] = useState(false);
	const { data: profile } = useUserProfile();

	const currentBusiness = profile?.businesses?.[0];

	const form = useForm({
		resolver: zodResolver(invoiceZodSchema),
		defaultValues: {
			invoiceNumber: "",
			description: "",
			date: new Date(),
			dueDate: new Date(),
			clientId: "",
			businessId: currentBusiness?.id,
			currency: "USD",
			items: [{ description: "", quantity: 0, rate: 0, amount: 0 }],
		},
	});

	const {
		control,
		setValue,
		getValues,
		formState: { errors },
	} = form;

	useEffect(() => {
		setValue("businessId", currentBusiness?.id);
	}, [currentBusiness, setValue]);

	const { fields, append, remove } = useFieldArray({ control, name: "items" });
	const onAddItem = () => {
		append({
			description: "",
			quantity: 0,
			rate: 0,
			amount: 0,
		});
	};

	const [items] = useWatch({ control, name: ["items"] });

	const onRemoveItem = (index: number) => {
		remove(index);
	};

	const setAmount = (idx: number) => {
		const quantity = Number(getValues(`items.${idx}.quantity`));
		const rate = getValues(`items.${idx}.rate`);
		setValue(`items.${idx}.amount`, quantity * rate);
	};

	const onSubmit = form.handleSubmit((data) => {
		console.info({ data });
	});

	const total = useMemo(() => {
		return items.reduce((acc, item) => acc + item.amount, 0);
	}, [items]);

	const onSelectClient = (client: Client) => {
		setCurrentClient(client);
		setValue("clientId", client.id);
		setIsSelectClientOpen(false);
	};

	return {
		control,
		onSubmit,
		items: fields,
		total,
		onAddItem,
		onRemoveItem,
		setAmount,
		currentClient,
		currentBusiness,
		setCurrentClient,
		isSelectClientOpen,
		setIsSelectClientOpen,
		profile,
		onSelectClient,
		errors,
	};
};
export { useInvoiceFormController };
