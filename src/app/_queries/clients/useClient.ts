import { apiRoute } from "@/app/_utils/apiRoute";
import { http } from "@/app/_utils/http";
import type { Client } from "@/database/services/client/types";
import { useQuery } from "@tanstack/react-query";

const useClient = (id?: string) => {
	return useQuery({
		queryKey: ["client", id],
		queryFn: async () => {
			if (!id) return;
			const response = await http.get<Client>(apiRoute.clients.get(id));
			return response?.data;
		},
		enabled: !!id,
	});
};

export { useClient };
