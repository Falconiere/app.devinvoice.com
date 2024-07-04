import { env } from "@/app/_constants/env";
import { toUrlQuery } from "@/app/_utils/toUrlQuery";
const base = env.API_URL;
const apiRoute = {
	users: {
		post: `${base}/api/users`,
		get: (id: string) => `${base}/users/${id}`,
		patch: (id: string) => `${base}/users/${id}`,
	},
	businesses: {
		post: `${base}/businesses`,
		get: (id: string) => `${base}/businesses/${id}`,
		patch: (id: string) => `${base}/businesses/${id}`,
	},
	clients: {
		post: `${base}/clients`,
		get: (id: string) => `${base}/clients/${id}`,
		list: (query: { page: number; limit: number }) =>
			`${base}/clients/${toUrlQuery(query)}`,
		patch: (id: string) => `${base}/clients/${id}`,
		delete: (id: string) => `${base}/clients/${id}`,
	},
	invoices: {
		post: `${base}/invoices`,
		get: (id: string) => `${base}/invoices/${id}`,
		list: (query: { page: number; limit: number }) =>
			`${base}/invoices/${toUrlQuery(query)}`,
		patch: (id: string) => `${base}/invoices/${id}`,
		delete: (id: string) => `${base}/invoices/${id}`,
	},
} as const;

export { apiRoute };
