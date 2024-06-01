const ROUTES = {
  PRIVATE: {
    DASHBOARD: {
      path: "/dashboard",
      title: "Dashboard",
      header: "Welcome to <DevInVoice />",
    },
    INVOICES:{
      path: "/invoices",
      title: "Invoices",
      header: "Invoices"
    },
    INVOICES_ADD:{
      path: "/invoices/new",
      title: "Invoices",
      header: "Invoices"
    },
    INVOICES_EDIT:{
      path: "/invoices/edi/$id",
      title: "Invoices",
      header: "Invoices"
    },
    CLIENTS:{
      path: "/clients",
      title: "Clients",
      header: "Clients"
    },
    SETTINGS: {
      path: "/settings",
      title: "Settings",
      header: "Settings",
    },
    USER_PROFILE: {
      path: "/settings/account",
      title: "Account",
      header: "Account Settings",
    },
    BUSINESS_SETTINGS: {
      path: "/settings/business",
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
