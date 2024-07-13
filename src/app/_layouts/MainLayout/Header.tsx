"use client";
import { Actions } from "@/app/_layouts/MainLayout/Actions";
import { useHeaderActionsStore } from "@/app/_stores/useHeaderActionsStore";
import { ROUTES } from "@/app/routes";
import { usePathname } from "next/navigation";
const LINKS = ROUTES.PRIVATE;
const getTitle = (path: string) => {
  const route = Object.values(LINKS).find((route) => route.match(path));
  return route ? route.header : "";
};

const Header = () => {
  const path = usePathname();
  const actions = useHeaderActionsStore((state) => state.actions);
  return (
    <header className="p-4 grid w-full mx-auto max-w-[1430px] grid-cols-2 items-center">
      <h1 className="text-2xl font-semibold">{getTitle(path)}</h1>
      {actions.length > 0 && <Actions actions={actions} />}
    </header>
  );
};

export { Header };
