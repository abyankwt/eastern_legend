import { createFileRoute, Outlet, Link, useRouter } from "@tanstack/react-router";
import { requireAuthFn, logoutFn } from "@/lib/sanity.server";
import { LayoutGrid, LogOut } from "lucide-react";

export const Route = createFileRoute("/admin/_layout")({
  beforeLoad: async () => {
    await requireAuthFn();
  },
  component: AdminLayout,
});

function AdminLayout() {
  const router = useRouter();

  async function handleLogout() {
    await logoutFn();
    router.navigate({ to: "/admin/login" });
  }

  return (
    <div className="min-h-screen bg-[#f0f4f8]">
      {/* Top bar */}
      <header className="border-b border-slate-200 bg-[#0d3660] px-6 py-3 shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="" className="h-9 w-9 rounded object-contain bg-white p-1" />
            <div>
              <p className="text-xs font-bold text-white">Eastern Legend</p>
              <p className="text-[10px] text-white/60">Admin Panel</p>
            </div>
          </div>
          <nav className="flex items-center gap-4">
            <Link
              to="/admin/projects"
              className="flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
              activeProps={{ className: "!text-white !bg-white/15" }}
            >
              <LayoutGrid size={15} />
              Projects
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium text-white/70 transition hover:bg-white/10 hover:text-white"
            >
              <LogOut size={15} />
              Logout
            </button>
          </nav>
        </div>
      </header>

      {/* Page content */}
      <main className="mx-auto max-w-6xl px-6 py-10">
        <Outlet />
      </main>
    </div>
  );
}
