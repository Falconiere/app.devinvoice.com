import { SignUpOnboarding } from "@/app/auth/_containers/SignUpOnboarding";
import { MainLayout } from "@/domains/layouts/MainLayout";
import { QueryProvider } from "@/domains/providers/QueryProvider";

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
