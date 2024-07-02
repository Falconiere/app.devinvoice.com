import { apiRoute } from "@/app/_utils/apiRoute";
import { http } from "@/app/_utils/http";
import type { Client } from "@/database/services/client/types";
import { useMutation } from "@tanstack/react-query";

const useClientSave = (id?: string) => {
	return useMutation({
		mutationFn: (data: Partial<Client>) =>
			id
				? http.patch(apiRoute.clients.patch(id), data)
				: http.post(apiRoute.clients.post, data),
	});
};
export { useClientSave };
