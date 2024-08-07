import { ROUTES } from "@/app/routes";
import {
  HandCoinsIcon,
  HandshakeIcon,
  LayoutDashboardIcon,
  NewspaperIcon,
  Settings,
  UserIcon,
} from "lucide-react";

const LINKS = ROUTES.PRIVATE;
type SideBarLink = {
  path: string;
  title: string;
  header: string;
  icon: JSX.Element;
  subLinks?: SideBarLink[];
};
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
    subLinks: [
      {
        path: LINKS.INVOICES_ADD.path,
        title: LINKS.INVOICES_ADD.title,
        header: LINKS.INVOICES_ADD.header,
        icon: <NewspaperIcon />,
      },
    ],
  },
  {
    path: LINKS.CLIENTS.path,
    title: LINKS.CLIENTS.title,
    header: LINKS.CLIENTS.header,
    icon: <HandshakeIcon />,
    subLinks: [
      {
        path: LINKS.CLIENTS_ADD.path,
        title: LINKS.CLIENTS_ADD.title,
        header: LINKS.CLIENTS_ADD.header,
        icon: <NewspaperIcon />,
      },
    ],
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
] as SideBarLink[];

export { SIDEBAR_LINKS };
