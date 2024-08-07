import { useToast } from "@/components/ui/use-toast";

import {
	type Client,
	type ClientPayload,
	clientZodSchema,
} from "@/database/services/client/types";
import { useClient } from "@/domains/queries/client/useClient";
import { useClientSave } from "@/domains/queries/client/useClientSave";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

type UseClientFormController = {
	onSuccess?: (data: Client) => void;
	onError?: () => void;
	client?: Client;
};

const useClientFormController = (options?: UseClientFormController) => {
	const { client: currentClient, onSuccess } = options ?? {};

	const { toast } = useToast();

	const { mutateAsync, isPending } = useClientSave(currentClient?.id);
	const form = useForm<ClientPayload>({
		defaultValues: currentClient,
		resolver: zodResolver(
			clientZodSchema.omit({ createdAt: true, updatedAt: true }),
		),
	});

	const {
		data: client,
		isLoading,
		refetch: refetchClient,
	} = useClient(currentClient?.id);

	const {
		handleSubmit,
		register,
		setValue,
		formState: { errors },
	} = form;

	useEffect(() => {
		if (client) {
			for (const [key, value] of Object.entries(client)) {
				// Skip createdAt and updatedAt fields, will be handled by the server
				if (key === "createdAt" || key === "updatedAt") continue;
				setValue(key as keyof ClientPayload, value as string);
			}
		}
	}, [client, setValue]);

	const onSubmit = handleSubmit(async (data) => {
		try {
			const savedClient = await mutateAsync(data);
			toast({
				title: "Success!",
				description: "Client details have been saved successfully.",
				variant: "default",
				duration: 2000,
			});
			await refetchClient();
			if (!savedClient?.data) return;
			onSuccess?.(savedClient.data);
		} catch {
			toast({
				title: "Error!",
				description: "Something went wrong. Please try again.",
				variant: "destructive",
				duration: 2000,
			});
		}
	});

	return {
		form,
		onSubmit,
		isPending: isLoading || isPending,
		errors,
		register,
	};
};

export { useClientFormController };
