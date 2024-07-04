import { useBusinessSave } from "@/app/_queries/business/useBusinessSave";
import { useUserProfile } from "@/app/_queries/user/useUserProfile";

import { useToast } from "@/components/ui/use-toast";
import {
	type Business,
	businessZodSchema,
} from "@/database/services/business/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

type UseBusinessFormController = {
	onSuccess?: () => void;
	onError?: () => void;
};
const useBusinessFormController = (options?: UseBusinessFormController) => {
	const { onSuccess, onError } = options ?? {};
	const { refresh } = useRouter();
	const { data, isLoading } = useUserProfile();
	const { toast } = useToast();

	const business = data?.businesses?.[0];
	const { mutateAsync, isPending } = useBusinessSave(business?.id);
	const form = useForm<Business>({
		defaultValues: business,
		resolver: zodResolver(businessZodSchema),
	});

	const {
		handleSubmit,
		register,
		setValue,
		formState: { errors },
	} = form;

	useEffect(() => {
		if (business) {
			for (const [key, value] of Object.entries(business)) {
				// Skip createdAt and updatedAt fields, will be handled by the server
				if (key === "createdAt" || key === "updatedAt") continue;
				setValue(key as keyof Business, value as string);
			}
		}
	}, [business, setValue]);
	const onSubmit = handleSubmit(async (data) => {
		try {
			await mutateAsync(data);
			toast({
				title: "Success!",
				description: "Business details have been saved successfully.",
				variant: "default",
				duration: 2000,
			});
			onSuccess?.();
		} catch {
			toast({
				title: "Error!",
				description: "Something went wrong. Please try again.",
				variant: "destructive",
				duration: 2000,
			});
			onError?.();
		}
		refresh();
	});

	return {
		form,
		onSubmit,
		isPending: isLoading || isPending,
		errors,
		register,
		isLoading,
	};
};

export { useBusinessFormController };
