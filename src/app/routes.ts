const ROUTES = {
  PRIVATE: {
    DASHBOARD: {
      path: "/dashboard",
      title: "Dashboard",
    },
    SETTINGS: {
      path: "/settings",
      title: "Settings",
    },
    USER_PROFILE: {
      path: "/settings/account",
      title: "Account",
    },
    BUSINESS_SETTINGS: {
      path: "/settings/Business",
      title: "Business Settings",
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
