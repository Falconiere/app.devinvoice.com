import { env } from "@/domains/_constants/env";
import { toUrlQuery } from "@/domains/_utils/toUrlQuery";

const base = env.API_URL;
const apiRoute = {
	users: {
		root: `${base}/users`,
		post: `${base}/api/users`,
		get: (id: string) => `${base}/users/${id}`,
		patch: (id: string) => `${base}/users/${id}`,
	},
	businesses: {
		root: `${base}/businesses`,
		post: `${base}/businesses`,
		get: (id: string) => `${base}/businesses/${id}`,
		patch: (id: string) => `${base}/businesses/${id}`,
	},
	clients: {
		root: `${base}/clients`,
		post: `${base}/clients`,
		get: (id: string) => `${base}/clients/${id}`,
		list: (query: { page: number; limit: number }) =>
			`${base}/clients/${toUrlQuery(query)}`,
		patch: (id: string) => `${base}/clients/${id}`,
		delete: (id: string) => `${base}/clients/${id}`,
	},
	invoices: {
		root: `${base}/invoices`,
		post: `${base}/invoices`,
		get: (id: string) => `${base}/invoices/${id}`,
		list: (query: { page: number; limit: number }) =>
			`${base}/invoices/${toUrlQuery(query)}`,
		patch: (id: string) => `${base}/invoices/${id}`,
		delete: (id: string) => `${base}/invoices/${id}`,
	},
	invoice_items: {
		root: `${base}/invoices/items`,
		post: `${base}/invoices/items`,
		get: (id: string) => `${base}/invoices/items/${id}`,
		list: (query: { page: number; limit: number }) =>
			`${base}/invoices/${toUrlQuery(query)}`,
		patch: (id: string) => `${base}/invoices/items/${id}`,
		delete: (id: string) => `${base}/invoices/items/${id}`,
	},
} as const;

export { apiRoute };
