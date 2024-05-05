type AuthLayoutProps = {
  children: React.ReactNode;
};
const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="grid min-h-screen w-full grid-cols-2 bg-gray-100">
      <div className="flex items-center justify-center bg-black">
        <h1 className="text-4xl font-bold text-white">
          Welcome to {`<DevInvoice />`}
        </h1>
      </div>
      <div className="grid p-8">
        <div className="m-auto grid w-full sm:max-w-[500px]">{children}</div>
      </div>
    </div>
  );
};
export default AuthLayout;
