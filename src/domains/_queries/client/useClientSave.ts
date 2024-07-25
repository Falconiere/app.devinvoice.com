import type { Client, ClientPayload } from "@/database/services/client/types";
import { apiRoute } from "@/domains/_utils/apiRoute";
import { http } from "@/domains/_utils/http";
import { useMutation } from "@tanstack/react-query";

const useClientSave = (id?: string) => {
	return useMutation({
		mutationFn: (payload: ClientPayload) =>
			id
				? http.patch<Client, ClientPayload>(apiRoute.clients.patch(id), payload)
				: http.post<Client, ClientPayload>(apiRoute.clients.post, payload),
	});
};
export { useClientSave };
