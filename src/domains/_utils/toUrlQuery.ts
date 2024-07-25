const toUrlQuery = (params: Record<string, number | string>): string => {
	return `?${Object.keys(params)
		.map((key) => {
			return `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`;
		})
		.join("&")}`;
};

export { toUrlQuery };
