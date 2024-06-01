import { AnimatedLogo } from "@/app/_components/AnimatedLogo";
import { SIDEBAR_LINKS } from "@/app/_utils/SideBarLinks";
import { LogOutIcon } from "lucide-react";
import Link from "next/link";

const Sidebar = () => (
  <aside className="bg-gray-800 text-white pt-4 flex flex-col">
    <AnimatedLogo />
    <nav className="py-4 flex flex-col flex-1">
      <ul className="flex flex-1 flex-col">
        {SIDEBAR_LINKS.map((route) => (
          <li key={route.path}>
            <Link
              href={route.path}
              className="flex gap-2 p-4 hover:bg-gray-700"
            >
              {route.icon}
              {route.title}
            </Link>
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

export { Sidebar };
