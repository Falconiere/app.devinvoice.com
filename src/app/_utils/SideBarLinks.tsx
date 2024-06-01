import { ROUTES } from "@/app/routes";
import {
  HandCoinsIcon,
  HandshakeIcon,
  LayoutDashboardIcon,
  Settings,
  UserIcon,
} from "lucide-react";

const LINKS = ROUTES.PRIVATE;
const SIDEBAR_LINKS = [
  {
    path: LINKS.DASHBOARD.path,
    title: LINKS.DASHBOARD.title,
    header: LINKS.DASHBOARD.header,
    icon: <LayoutDashboardIcon />,
  },
  {
    path: LINKS.INVOICES.path,
    title: LINKS.INVOICES.title,
    header: LINKS.INVOICES.header,
    icon: <HandCoinsIcon />,
  },
  {
    path: LINKS.CLIENTS.path,
    title: LINKS.CLIENTS.title,
    header: LINKS.CLIENTS.header,
    icon: <HandshakeIcon />,
  },
  {
    path: LINKS.BUSINESS_SETTINGS.path,
    title: LINKS.BUSINESS_SETTINGS.title,
    header: LINKS.BUSINESS_SETTINGS.header,
    icon: <Settings />,
  },
  {
    path: LINKS.USER_PROFILE.path,
    title: LINKS.USER_PROFILE.title,
    header: LINKS.USER_PROFILE.header,
    icon: <UserIcon />,
  },
] as const;

export { SIDEBAR_LINKS };
