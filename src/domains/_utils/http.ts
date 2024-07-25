"use client";

import { getCurrentToken } from "@/domains/_utils/getCurrentToken";

const headers = {
	"Content-Type": "application/json",
};

const throwErrorMessage = async (response: Response) => {
	const result = (await response?.json?.()) || {};
	const responseError = {
		type: "Error",
		message: result.message || "Something went wrong",
		data: result.data || "",
		code: result.code || "",
	};

	let error = new Error();
	error = { ...error, ...responseError };
	throw error;
};

const mutate = async <TData, TPayload>(
	method: "POST" | "PATCH",
	url: string,
	payload: TPayload,
): Promise<{ data?: TData; message: string } | undefined> => {
	const token = await getCurrentToken();
	const response = await fetch(url, {
		method,
		body: JSON.stringify(payload),
		headers: {
			...headers,
			Authorization: token,
		},
	});
	if (response.ok) {
		return await response.json();
	}
	return throwErrorMessage(response);
};

const query = async <TData>(
	method: "GET",
	url: string,
): Promise<{ data?: TData; message: string } | undefined> => {
	const token = await getCurrentToken();
	const response = await fetch(url, {
		method,
		headers: {
			...headers,
			Authorization: token,
		},
	});
	if (response.ok) {
		return await response.json();
	}
	return throwErrorMessage(response);
};

const destroy = async (method: "DELETE", url: string): Promise<void> => {
	const token = await getCurrentToken();
	const response = await fetch(url, {
		method,
		headers: {
			...headers,
			Authorization: token,
		},
	});
	if (!response.ok) {
		return throwErrorMessage(response);
	}
};

const http = {
	get: async <TData>(url: string) => query<TData>("GET", url),
	delete: async (url: string) => destroy("DELETE", url),
	patch: async <TData, TPayload>(url: string, payload: TPayload) =>
		mutate<TData, TPayload>("PATCH", url, payload),
	post: async <TData, TPayload>(url: string, payload: TPayload) =>
		mutate<TData, TPayload>("POST", url, payload),
};

export { http };
