import { Footer } from "@/app/(marketing)/_components/Footer";
import { Header } from "@/app/(marketing)/_components/Header";
import type { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => (
  <main className="bg-slate-50 h-screen overflow-auto grid grid-rows-[max-content,auto,max-content] relative">
    <Header />
    <div>{children}</div>
    <Footer />
  </main>
);

export default Layout;
