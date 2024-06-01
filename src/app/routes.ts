const ROUTES = {
  PRIVATE: {
    DASHBOARD: {
      path: "/dashboard",
      title: "Dashboard",
      header: "Welcome to the Dashboard",
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
