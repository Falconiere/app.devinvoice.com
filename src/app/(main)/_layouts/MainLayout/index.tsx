import { Header } from "@/app/(main)/_layouts/MainLayout/Header";
import { Sidebar } from "@/app/(main)/_layouts/MainLayout/SideBar";
import type { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => (
  <div className="grid grid-cols-[250px,1fr] min-h-screen w-full">
    <Sidebar />
    <div className="grid grid-rows-[60px,1fr] grid-cols-1">
      <Header />
      <main className="bg-gray-100 p-4 overflow-hidden overflow-y-auto">
        <div className="mx-auto grid max-w-7xl gap-4">{children}</div>
      </main>
    </div>
  </div>
);

export { MainLayout };
