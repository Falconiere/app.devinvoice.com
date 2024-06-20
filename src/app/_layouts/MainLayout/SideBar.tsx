"use client";
import { AnimatedLogo } from "@/app/_components/AnimatedLogo";
import { SIDEBAR_LINKS } from "@/app/_utils/SideBarLinks";
import { Button } from "@/components/ui/button";
import { LogOutIcon, MinusIcon, PlusIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Sidebar = () => {
  const [subLinkOpen, setSubLinkOpen] = useState<number[]>([]);
  return (
    <aside className="bg-gray-800 text-white pt-4 flex flex-col">
      <AnimatedLogo />
      <nav className="py-4 flex flex-col flex-1">
        <ul className="flex flex-1 flex-col">
          {SIDEBAR_LINKS.map((route, idx) => (
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
                    onClick={() =>
                      setSubLinkOpen((prev) => {
                        if (prev.includes(idx)) {
                          return prev.filter((i) => i !== idx);
                        }
                        return [...prev, idx];
                      })
                    }
                    className="ml-auto hover:bg-gray-700 bg-transparent rounded-none p-4 h-auto"
                    variant="default"
                  >
                    {subLinkOpen.includes(idx) ? (
                      <MinusIcon size={24} />
                    ) : (
                      <PlusIcon size={24} />
                    )}
                  </Button>
                )}
              </span>
              {Array.isArray(route?.subLinks) && (
                <ul
                  className={`hidden flex-col [&[data-idx='true']]:flex`}
                  data-idx={subLinkOpen.includes(idx)}
                >
                  {route.subLinks.map((subRoute) => (
                    <li key={subRoute.path} className="hover:bg-gray-600">
                      <Link
                        href={subRoute.path}
                        className="flex gap-2 p-4 pl-8"
                      >
                        {subRoute.icon}
                        {subRoute.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
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
