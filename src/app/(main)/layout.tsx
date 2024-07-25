import { SignUpOnboarding } from "@/domains/_containers/SignUpOnboarding";
import { MainLayout } from "@/domains/_layouts/MainLayout";
import { QueryProvider } from "@/domains/_providers/QueryProvider";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <QueryProvider>
      <MainLayout>{children}</MainLayout>
      <SignUpOnboarding />
    </QueryProvider>
  );
};
export default Layout;
