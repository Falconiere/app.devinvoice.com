import { usePaginatedQuery } from "@/app/_hooks/usePaginatedQuery";
import { apiRoute } from "@/app/_utils/apiRoute";
import type { Client } from "@/database/services/client/types";

const useClientPaginated = () =>
	usePaginatedQuery<Client>({
		queryKey: ["clients", "list"],
		queryApiPath: apiRoute.clients.list,
	});

export { useClientPaginated };
