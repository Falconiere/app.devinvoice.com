//src/app/dashboard/layout.tsx

type DashboardLayoutProps = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="grid grid-cols-[250px,1fr] min-h-screen w-full">
      <aside className="bg-gray-800 text-white p-4">Sidebar</aside>
      <div className="grid grid-rows-[60px,1fr] grid-cols-1">
        <header className="p-4">
          <h1 className="text-2xl font-semibold">Header</h1>
        </header>
        <main className="bg-gray-100 p-4 overflow-hidden overflow-y-auto">
          <div className="bg-white mx-auto grid max-w-7xl p-4">{children}</div>
        </main>
      </div>
    </div>
  );
};
export default DashboardLayout;
