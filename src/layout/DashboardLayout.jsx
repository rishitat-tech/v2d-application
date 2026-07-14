import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const navItems = [
    { label: "Home", path: "/" },
    { label: "V2D Resource Hub", path: "/v2d-resource-hub" },
  ];

  return (
    <div className="min-h-screen bg-[#050805] text-white flex">
      <aside className="w-72 bg-[#0B0F0B] border-r border-[#1d2a1d] p-5">
        <div className="mb-8">
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-xl bg-[#76B900] flex items-center justify-center font-black text-black">
              V2D
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-wide">V2D</h1>
              <p className="text-xs text-gray-400">Resource & Training Hub</p>
            </div>
          </div>
        </div>

        <nav className="space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-xl transition ${
                  isActive
                    ? "bg-[#76B900] text-black font-semibold shadow-lg shadow-[#76B900]/20"
                    : "text-gray-300 hover:bg-[#121c12] hover:text-white"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <main className="flex-1 min-h-screen">
        <header className="h-16 bg-[#080C08]/90 border-b border-[#1d2a1d] flex items-center justify-between px-6 sticky top-0 z-10 backdrop-blur">
          <div>
            <h2 className="font-semibold text-white">V2D</h2>
            <p className="text-xs text-gray-400">Resource Hub MVP</p>
          </div>

          <div className="flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#76B900]"></span>
            <span className="text-sm text-gray-300">Active</span>
          </div>
        </header>

        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
