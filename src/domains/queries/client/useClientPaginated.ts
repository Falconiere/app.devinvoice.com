import type { Client } from "@/database/services/client/types";
import { usePaginatedQuery } from "@/domains/hooks/usePaginatedQuery";
import { apiRoute } from "@/domains/utils/apiRoute";

const useClientPaginated = () =>
	usePaginatedQuery<Client>({
		queryKey: ["clients", "list"],
		queryApiPath: apiRoute.clients.list,
	});

export { useClientPaginated };
