import type { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="h-screen w-screen bg-white">{children}</div>
);
export default Layout;
