"use client";
import { useAccountProfile } from "@/app/_queries/users/useAccountProfile";
import { useSaveUser } from "@/app/_queries/users/useSaveUser";
import { useToast } from "@/components/ui/use-toast";
import {
	type UpdateUserProfile,
	type UserProfile,
	updateUserSchema,
} from "@/database/services/user/types";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

type UseAccountDetailsFormController = {
	currentUser?: UserProfile;
	onSuccess?: () => void;
	onError?: () => void;
};
const useAccountDetailsFormController = ({
	currentUser,
	onSuccess,
	onError,
}: UseAccountDetailsFormController) => {
	const { toast } = useToast();

	const { data: profile } = useAccountProfile({ initialData: currentUser });
	const userId = currentUser?.id ?? profile?.id ?? "";
	const { mutateAsync, isPending } = useSaveUser(userId);
	const { handleSubmit, control, setValue } = useForm<UserProfile>({
		resolver: zodResolver(updateUserSchema),
		defaultValues: {
			firstName: profile?.firstName,
			lastName: profile?.lastName,
			country: profile?.country,
			phone: profile?.phone,
			email: profile?.email,
		},
	});

	useEffect(() => {
		if (profile) {
			setValue("firstName", profile.firstName);
			setValue("lastName", profile.lastName);
			setValue("country", profile.country);
			setValue("phone", profile.phone);
			setValue("email", profile.email);
		}
	}, [profile, setValue]);

	const onSubmit = handleSubmit(async (data: UpdateUserProfile) => {
		try {
			await mutateAsync(data);
			toast({
				title: "Success!",
				description: "Account details have been updated successfully.",
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
	});

	return {
		control,
		onSubmit,
		isPending,
	};
};

export { useAccountDetailsFormController };
