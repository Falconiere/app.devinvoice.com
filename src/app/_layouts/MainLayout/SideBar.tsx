import { AnimatedLogo } from "@/app/_components/AnimatedLogo";
import { SIDEBAR_LINKS } from "@/app/_utils/SideBarLinks";
import { Button } from "@/components/ui/button";
import { LogOutIcon, PlusIcon } from "lucide-react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="bg-gray-800 text-white pt-4 flex flex-col">
      <AnimatedLogo />
      <nav className="py-4 flex flex-col flex-1">
        <ul className="flex flex-1 flex-col">
          {SIDEBAR_LINKS.map((route) => (
            <li key={route.path}>
              <span className="flex flex-1 w-full items-center">
                <Link
                  href={route.path}
                  className="flex flex-1 gap-2 p-4 hover:bg-gray-700"
                >
                  {route.icon}
                  {route.title}
                </Link>
                {Array.isArray(route?.subLinks) && (
                  <Button
                    className="ml-auto hover:bg-gray-700 bg-transparent rounded-none p-4 h-auto"
                    variant="default"
                    asChild
                  >
                    <Link href={route.subLinks[0].path}>
                      <PlusIcon size={24} />
                    </Link>
                  </Button>
                )}
              </span>
            </li>
          ))}
        </ul>
        <form method="POST" action="/api/auth/logout" className="flex w-full">
          <button
            className="flex gap-2 p-4 hover:bg-gray-700 w-full"
            type="submit"
          >
            <LogOutIcon size={24} />
            Logout
          </button>
        </form>
      </nav>
    </aside>
  );
};

export { Sidebar };
