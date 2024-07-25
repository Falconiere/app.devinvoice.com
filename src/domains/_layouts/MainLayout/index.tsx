import { Header } from "@/domains/_layouts/MainLayout/Header";
import { Sidebar } from "@/domains/_layouts/MainLayout/SideBar";
import type { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid grid-cols-[250px,1fr] min-h-screen w-full">
      <Sidebar />
      <div className="grid grid-rows-[72px,calc(100vh-60px)] grid-cols-1">
        <Header />
        <main className="bg-gray-100 p-4 overflow-hidden overflow-y-auto">
          <div className="mx-auto grid max-w-[1400px] gap-4">{children}</div>
        </main>
      </div>
    </div>
  );
};

export { MainLayout };
