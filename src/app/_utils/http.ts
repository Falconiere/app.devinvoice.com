"use client";
import { getCurrentToken } from "@/app/_utils/getCurrentToken";
const headers = {
	"Content-Type": "application/json",
};

const throwErrorMessage = async (response: Response) => {
	const result = await response.json();
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

const mutate = async <T>(
	method: "POST" | "PATCH",
	url: string,
	payload: T,
): Promise<{ data?: T; message: string } | undefined> => {
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

const query = async <T>(
	method: "GET" | "DELETE",
	url: string,
): Promise<{ data?: T; message: string } | undefined> => {
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

const http = {
	get: async <T>(url: string) => query<T>("GET", url),
	delete: async <T>(url: string) => query<T>("DELETE", url),
	patch: async <T>(url: string, payload: T) => mutate<T>("PATCH", url, payload),
	post: async <T>(url: string, payload: T) => mutate<T>("POST", url, payload),
};

export { http };
