"use client";

import { ROUTES } from "@/app/routes";
import { usePathname } from "next/navigation";
const LINKS = ROUTES.PRIVATE;
const getTitle = (path: string) => {
  const route = Object.values(LINKS).find((route) => route.path === path);
  return route ? route.header : "";
};

const Header = () => {
  const router = usePathname();
  return (
    <header className="p-4 grid w-full mx-auto max-w-[1430px]">
      <h1 className="text-2xl font-semibold">{getTitle(router)}</h1>
    </header>
  );
};

export { Header };
