import type { PaginatedServerData } from "@/database/services/types";
import { http } from "@/domains/utils/http";
import { type QueryKey, useInfiniteQuery } from "@tanstack/react-query";

type UsePaginatedQuery = {
	queryKey: QueryKey;
	queryApiPath: string | ((payload: { page: number; limit: number }) => string);
};
const initialPageParam = { page: 1, limit: 15 };
const usePaginatedQuery = <T>({
	queryApiPath,
	queryKey,
}: UsePaginatedQuery) => {
	return useInfiniteQuery({
		queryKey,
		queryFn: async ({ pageParam }) => {
			const page = Number(pageParam?.page || initialPageParam.page);
			const limit = Number(pageParam?.limit || initialPageParam.limit);
			const payload = { page, limit };
			const response = await http.get<PaginatedServerData<T>>(
				typeof queryApiPath === "function"
					? queryApiPath(payload)
					: queryApiPath,
			);
			return (
				response?.data || { results: [], total: 0, next: null, prev: null }
			);
		},
		initialPageParam,
		select: (data) => {
			const allResults = data.pages.map((page) => page.results);
			const mergedResults = allResults.flat();
			const lastPage = data.pages[data.pages.length - 1];
			return {
				...lastPage,
				results: mergedResults,
			};
		},
		getNextPageParam: (lastPage) => {
			if (!lastPage.next) {
				return undefined;
			}
			const url = new URL(lastPage.next);
			const page = url.searchParams.get("page");
			const limit = url.searchParams.get("limit");
			return { page: Number(page), limit: Number(limit) };
		},
		getPreviousPageParam: (firstPage) => {
			if (!firstPage.prev) {
				return undefined;
			}
			const url = new URL(firstPage.prev);
			const page = url.searchParams.get("page");
			const limit = url.searchParams.get("limit");
			return { page: Number(page), limit: Number(limit) };
		},
	});
};

export { usePaginatedQuery };
