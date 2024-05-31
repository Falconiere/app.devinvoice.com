//src/app/dashboard/layout.tsx
import { AnimatedLogo } from "@/app/(main)/_components/AnimatedLogo";
import { QueryProvider } from "@/app/(main)/_providers/QueryProvider";
import { SIDEBAR_LINKS } from "@/app/(main)/_utils/SideBarLinks";
import { LogOut } from "lucide-react";
import Link from "next/link";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <QueryProvider>
      <div className="grid grid-cols-[250px,1fr] min-h-screen w-full">
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
            <form
              method="POST"
              action="/api/auth/logout"
              className="flex w-full"
            >
              <button
                className="flex gap-2 p-4 hover:bg-gray-700 w-full"
                type="submit"
              >
                <LogOut size={24} />
                Logout
              </button>
            </form>
          </nav>
        </aside>
        <div className="grid grid-rows-[60px,1fr] grid-cols-1">
          <header className="p-4">
            <h1 className="text-2xl font-semibold">Header</h1>
          </header>
          <main className="bg-gray-100 p-4 overflow-hidden overflow-y-auto">
            <div className="mx-auto grid max-w-7xl gap-4">{children}</div>
          </main>
        </div>
      </div>
    </QueryProvider>
  );
};
export default MainLayout;
