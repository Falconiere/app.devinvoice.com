export type PaginatedServerData<T> = {
	results: T[];
	total: number;
	next: string | null;
	prev: string | null;
};

export interface PaginatedPayload extends Record<string, string | number> {
	page: number;
	limit: number;
}

export type GetQueryPaginated<T> = (
	payload: PaginatedPayload,
) => Promise<PaginatedServerData<T>>;
