import { useClient } from "@/app/_queries/clients/useClient";
import { useClientSave } from "@/app/_queries/clients/useClientSave";

import { useToast } from "@/components/ui/use-toast";

import { type Client, clientSchema } from "@/database/services/client/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

type UseClientFormController = {
	onSuccess?: () => void;
	onError?: () => void;
	client?: Client;
};

const useClientFormController = (options?: UseClientFormController) => {
	const { client: currentClient } = options ?? {};
	const { replace } = useRouter();
	const { toast } = useToast();

	const { mutateAsync, isPending } = useClientSave(currentClient?.id);
	const form = useForm<Client>({
		defaultValues: currentClient,
		resolver: zodResolver(
			clientSchema.omit({ createdAt: true, updatedAt: true }),
		),
	});

	const { data: client, isLoading } = useClient(currentClient?.id);

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
				setValue(key as keyof Client, value as string);
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

			if (savedClient?.data?.id) replace(`/clients/${savedClient.data.id}`);
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
