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
			path: "/invoices/$id",
			get: (id: string) => `/invoices/${id}`,
			match: (pathname: string) => pathname.match(/\/invoices\/\w+/),
			title: "Invoices",
			header: "Invoices",
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
			match: (pathname: string) => pathname.match(/\/clients\/\w+/),
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
	AUTH: {
		LOGIN: {
			path: "/auth/login",
			title: "Login",
		},
		REGISTER: {
			path: "/auth/sign-up",
			title: "Register",
		},
	},
} as const;

export { ROUTES };
