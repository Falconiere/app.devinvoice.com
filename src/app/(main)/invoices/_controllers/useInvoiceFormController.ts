import { useMemo } from "react";
import { useFieldArray, useForm, useWatch } from "react-hook-form";

type Invoice = {
	invoiceNumber: string;
	description: string;
	date: Date;
	dueDate: Date;
	currency: string;
	items: Array<{
		description: string;
		quantity: number;
		rate: number;
		amount: number;
	}>;
};

const useInvoiceFormController = () => {
	const form = useForm<Invoice>({
		defaultValues: {
			invoiceNumber: "",
			date: new Date(),
			dueDate: new Date(),
			currency: "USD",
			items: [{ description: "", quantity: 0, rate: 0, amount: 0 }],
		},
	});

	const { control, setValue, getValues } = form;
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

	const total = useMemo(() => {
		return items.reduce((acc, item) => acc + item.amount, 0);
	}, [items]);

	return {
		form,
		items: fields,
		total,
		onAddItem,
		onRemoveItem,
		setAmount,
	};
};
export { useInvoiceFormController };
