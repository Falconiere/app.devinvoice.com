import { ROUTES } from "@/app/routes";
import { LayoutDashboardIcon, Settings, UserIcon } from "lucide-react";

const SIDEBAR_LINKS = [
  {
    path: ROUTES.PRIVATE.DASHBOARD.path,
    title: ROUTES.PRIVATE.DASHBOARD.title,
    header: ROUTES.PRIVATE.DASHBOARD.header,
    icon: <LayoutDashboardIcon />,
  },
  {
    path: ROUTES.PRIVATE.BUSINESS_SETTINGS.path,
    title: ROUTES.PRIVATE.BUSINESS_SETTINGS.title,
    header: ROUTES.PRIVATE.BUSINESS_SETTINGS.header,
    icon: <Settings />,
  },
  {
    path: ROUTES.PRIVATE.USER_PROFILE.path,
    title: ROUTES.PRIVATE.USER_PROFILE.title,
    header: ROUTES.PRIVATE.USER_PROFILE.header,
    icon: <UserIcon />,
  },
] as const;

export { SIDEBAR_LINKS };
