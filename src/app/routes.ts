import { findUUIDSFromPathname } from "@/domains/utils/findUUIDFromPathname";

const ROUTES = {
	PRIVATE: {
		DASHBOARD: {
			path: "/dashboard",
			title: "Dashboard",
			match: (pathname: string) => pathname === ROUTES.PRIVATE.DASHBOARD.path,
			header: "Welcome to <DevInVoice />",
		},
		INVOICES: {
			path: "/invoices",
			match: (pathname: string) => pathname === ROUTES.PRIVATE.INVOICES.path,
			title: "Invoices",
			header: "Invoices",
		},
		INVOICES_ADD: {
			path: "/invoices/new",
			match: (pathname: string) =>
				pathname === ROUTES.PRIVATE.INVOICES_ADD.path,
			title: "New Invoice",
			header: "New Invoice",
		},
		INVOICES_EDIT: {
			path: "/invoices/$id/edit",
			get: (id: string) => `/invoices/${id}/edit`,
			match: (pathname: string) => {
				const [uuid] = findUUIDSFromPathname(pathname);
				if (uuid === undefined) return false;
				return pathname === `/invoices/${uuid}/edit`;
			},
			title: "Invoice Edit",
			header: "Invoice Edit",
		},
		INVOICES_PREVIEW: {
			path: "/invoices/$id",
			get: (id: string) => `/invoices/${id}`,
			match: (pathname: string) => {
				const [uuid] = findUUIDSFromPathname(pathname);
				if (uuid === undefined) return false;
				return pathname === `/invoices/${uuid}`;
			},
			title: "Invoice Preview",
			header: "Invoices Preview",
		},
		CLIENTS: {
			path: "/clients",
			match: (pathname: string) => pathname === ROUTES.PRIVATE.CLIENTS.path,
			title: "Clients",
			header: "Clients",
		},
		CLIENTS_ADD: {
			path: "/clients/new",
			match: (pathname: string) => pathname === ROUTES.PRIVATE.CLIENTS_ADD.path,
			title: "New Client",
			header: "New Client",
		},
		CLIENTS_EDIT: {
			path: "/clients/$id",
			get: (id: string) => `/clients/${id}`,
			match: (pathname: string) => {
				const [uuid] = findUUIDSFromPathname(pathname);
				if (uuid === undefined) return false;
				return pathname === `/clients/${uuid}`;
			},
			title: "Edit Client",
			header: "Edit Client",
		},
		SETTINGS: {
			path: "/settings",
			match: (pathname: string) => pathname === ROUTES.PRIVATE.SETTINGS.path,
			title: "Settings",
			header: "Settings",
		},
		USER_PROFILE: {
			path: "/settings/account",
			match: (pathname: string) =>
				pathname === ROUTES.PRIVATE.USER_PROFILE.path,
			title: "Account",
			header: "Account Settings",
		},
		BUSINESS_SETTINGS: {
			path: "/settings/business",
			match: (pathname: string) =>
				pathname === ROUTES.PRIVATE.BUSINESS_SETTINGS.path,
			title: "Business Settings",
			header: "Business Settings",
		},
	},
	PUBLIC: {
		PDF: {
			path: "/invoices/pdf/$id",
			match: (pathname: string) => {
				const [uuid] = findUUIDSFromPathname(pathname);
				if (uuid === undefined) return false;
				return pathname === `/invoices/pdf/${uuid}`;
			},
			title: "PDF Invoice",
			header: "PDF Invoice",
		},
	},
	AUTH: {
		LOGIN: {
			path: "/auth/login",
			title: "Login",
			match: (pathname: string) => pathname === ROUTES.AUTH.LOGIN.path,
		},
		REGISTER: {
			path: "/auth/register",
			title: "Register",
			match: (pathname: string) => pathname === ROUTES.AUTH.REGISTER.path,
		},
		RESET_PASSWORD: {
			path: "/auth/reset-password",
			title: "Register",
			match: (pathname: string) => pathname === ROUTES.AUTH.RESET_PASSWORD.path,
		},
	},
} as const;

export { ROUTES };
