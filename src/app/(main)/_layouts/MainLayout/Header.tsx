"use client";
import { SIDEBAR_LINKS } from "@/app/(main)/_utils/SideBarLinks";
import { usePathname } from "next/navigation";
const getTitle = (path: string) => {
  const route = SIDEBAR_LINKS.find((route) => route.path === path);
  return route ? route.header : "";
};

const Header = () => {
  const router = usePathname();
  return (
    <header className="p-4">
      <h1 className="text-2xl font-semibold">{getTitle(router)}</h1>
    </header>
  );
};

export { Header };
