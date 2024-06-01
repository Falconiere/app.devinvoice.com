import { MainLayout } from "@/app/_layouts/MainLayout";
import { QueryProvider } from "@/app/_providers/QueryProvider";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <QueryProvider>
    <MainLayout>{children}</MainLayout>
  </QueryProvider>
);
export default Layout;
