import type { Client } from "@/database/services/client/types";
import { apiRoute } from "@/domains/utils/apiRoute";
import { http } from "@/domains/utils/http";
import { useQuery } from "@tanstack/react-query";

const useClient = (id?: string) => {
	return useQuery({
		queryKey: ["client", id ?? undefined],
		queryFn: async () => {
			if (!id) return;
			const response = await http.get<Client>(apiRoute.clients.get(id));
			return response?.data;
		},
		enabled: !!id,
	});
};

export { useClient };
