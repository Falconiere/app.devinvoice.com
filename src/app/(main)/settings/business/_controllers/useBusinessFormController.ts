"use client";

import { useToast } from "@/components/ui/use-toast";
import {
	type Business,
	businessZodSchema,
} from "@/database/services/business/types";
import { useBusinessSave } from "@/domains/queries/business/useBusinessSave";
import { useUserProfile } from "@/domains/queries/user/useUserProfile";
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
	const { data: user, isLoading, refetch: refetchUser } = useUserProfile();
	const { toast } = useToast();

	const business = user?.businesses?.[0];
	const { mutateAsync, isPending } = useBusinessSave(business?.id);
	const form = useForm<Business>({
		defaultValues: business,
		resolver: zodResolver(
			businessZodSchema.omit({
				createdAt: true,
				updatedAt: true,
				userId: true,
			}),
		),
	});

	const { handleSubmit, setValue } = form;

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
			await mutateAsync({ ...data, userId: user?.id ?? "" });
			toast({
				title: "Success!",
				description: "Business details have been saved successfully.",
				variant: "default",
				duration: 2000,
			});
			await refetchUser();
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
		onSubmit,
		isPending: isLoading || isPending,
		form,
		isLoading,
	};
};

export { useBusinessFormController };
