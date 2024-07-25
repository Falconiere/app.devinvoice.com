import type { Client } from "@/database/services/client/types";
import { usePaginatedQuery } from "@/domains/_hooks/usePaginatedQuery";
import { apiRoute } from "@/domains/_utils/apiRoute";

const useClientPaginated = () =>
	usePaginatedQuery<Client>({
		queryKey: ["clients", "list"],
		queryApiPath: apiRoute.clients.list,
	});

export { useClientPaginated };
