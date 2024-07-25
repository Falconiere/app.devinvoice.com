import { toUrlQuery } from "@/domains/_utils/toUrlQuery";

type BuildPagination<T> = {
	total: number;
	limit: number;
	page: number;
	url: string;
	results: T[];
	filter?: Record<string, string>;
};
const buildPaginationResponse = <T>({
	page,
	limit,
	total,
	url,
	results,
	filter,
}: BuildPagination<T>) => {
	const totalPages = Math.ceil(total / limit);
	const nextPage = page < totalPages ? page + 1 : null;
	const prevPage = page > 1 ? page - 1 : null;
	const next = nextPage
		? `${url}${toUrlQuery({ ...filter, page: nextPage, limit })}`
		: null;
	const prev = prevPage
		? `${url}${toUrlQuery({ ...filter, page: prevPage, limit })}`
		: null;
	return {
		results,
		total,
		next: next,
		prev: prev,
	};
};

export { buildPaginationResponse };
