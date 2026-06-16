import { createFileRoute, useRouter } from "@tanstack/react-router";
import { useState } from "react";
import { loginFn } from "@/lib/sanity.server";

export const Route = createFileRoute("/admin/login")({
  component: LoginPage,
});

function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    try {
      await loginFn({ data: { username: fd.get("username") as string, password: fd.get("password") as string } });
      await router.navigate({ to: "/admin/projects" });
    } catch {
      setError("Invalid username or password.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f0f4f8] px-4">
      <div className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-8 shadow-xl">
        <div className="mb-8 text-center">
          <img src="/logo.png" alt="Eastern Legend" className="mx-auto h-16 w-16 object-contain" />
          <h1 className="mt-4 text-xl font-bold text-slate-800">Admin Panel</h1>
          <p className="mt-1 text-sm text-slate-500">Eastern Legend Building Construction</p>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-500">
              Username
            </label>
            <input
              name="username"
              type="text"
              required
              autoComplete="username"
              className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-800 outline-none focus:border-[#0d3660] focus:ring-2 focus:ring-[#0d3660]/20"
              placeholder="admin"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-500">
              Password
            </label>
            <input
              name="password"
              type="password"
              required
              autoComplete="current-password"
              className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-800 outline-none focus:border-[#0d3660] focus:ring-2 focus:ring-[#0d3660]/20"
              placeholder="••••••••"
            />
          </div>
          {error && <p className="text-sm text-red-500">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-[#0d3660] py-2.5 text-sm font-semibold text-white transition hover:bg-[#0a2a4a] disabled:opacity-60"
          >
            {loading ? "Signing in…" : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
