export type PaginatedServerData<T> = {
	results: T[];
	total: number;
	next: string | null;
	prev: string | null;
};

export type PaginatedPayload = {
	page: number;
	limit: number;
};
