import { TextLogo } from "@/domains/components/TextLogo";

type AuthLayoutProps = {
  children: React.ReactNode;
};
const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="grid min-h-screen w-full grid-cols-2 bg-gray-100">
      <div className="flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-black ">
            Welcome to <TextLogo />
          </h1>
          <p className="text-3xl font-semibold pt-1 pb-4 te">
            Create and send invoices in minutes,
            <br /> so you can get back to doing what you love.
          </p>
        </div>
      </div>
      <div className="grid p-8">
        <div className="m-auto grid w-full sm:max-w-[500px]">{children}</div>
      </div>
    </div>
  );
};
export default AuthLayout;
