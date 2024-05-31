import { ROUTES } from "@/app/routes";
import { LayoutDashboardIcon, Settings, UserIcon } from "lucide-react";

const SIDEBAR_LINKS = [
  {
    path: ROUTES.PRIVATE.DASHBOARD.path,
    title: ROUTES.PRIVATE.DASHBOARD.title,
    icon: <LayoutDashboardIcon />,
  },
  {
    path: ROUTES.PRIVATE.BUSINESS_SETTINGS.path,
    title: ROUTES.PRIVATE.BUSINESS_SETTINGS.title,
    icon: <Settings />,
  },
  {
    path: ROUTES.PRIVATE.USER_PROFILE.path,
    title: ROUTES.PRIVATE.USER_PROFILE.title,
    icon: <UserIcon />,
  },
] as const;

export { SIDEBAR_LINKS };
