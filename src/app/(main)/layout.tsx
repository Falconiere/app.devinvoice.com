import { SignUpOnboarding } from "@/app/_containers/SignUpOnboarding";
import { MainLayout } from "@/app/_layouts/MainLayout";
import { QueryProvider } from "@/app/_providers/QueryProvider";

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
