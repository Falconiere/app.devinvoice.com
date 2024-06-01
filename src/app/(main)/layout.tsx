//src/app/dashboard/layout.tsx
import { MainLayout } from "@/app/(main)/_layouts/MainLayout";
import { QueryProvider } from "@/app/(main)/_providers/QueryProvider";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <QueryProvider>
    <MainLayout>{children}</MainLayout>
  </QueryProvider>
);
export default Layout;
