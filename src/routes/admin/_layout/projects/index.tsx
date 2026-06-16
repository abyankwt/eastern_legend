import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { fetchProjectsFn, deleteProjectFn, type SanityProject } from "@/lib/sanity.server";
import { useState } from "react";
import { Plus, Pencil, Trash2, ImageOff } from "lucide-react";

export const Route = createFileRoute("/admin/_layout/projects/")({
  loader: () => fetchProjectsFn(),
  component: ProjectsAdmin,
});

const CATEGORY_COLORS: Record<string, string> = {
  Residential: "bg-blue-100 text-blue-700",
  Commercial: "bg-purple-100 text-purple-700",
  Industrial: "bg-orange-100 text-orange-700",
  MEP: "bg-green-100 text-green-700",
  "Fit-out": "bg-pink-100 text-pink-700",
  "Site Facilities": "bg-yellow-100 text-yellow-700",
};

function ProjectsAdmin() {
  const projects = Route.useLoaderData() as SanityProject[];
  const router = useRouter();
  const [deleting, setDeleting] = useState<string | null>(null);

  async function handleDelete(id: string, title: string) {
    if (!confirm(`Delete "${title}"? This cannot be undone.`)) return;
    setDeleting(id);
    await deleteProjectFn({ data: { id } });
    setDeleting(null);
    router.invalidate();
  }

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Projects</h1>
          <p className="mt-1 text-sm text-slate-500">{projects.length} project{projects.length !== 1 ? "s" : ""} in total</p>
        </div>
        <Link
          to="/admin/projects/new"
          className="inline-flex items-center gap-2 rounded-lg bg-[#0d3660] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0a2a4a]"
        >
          <Plus size={16} />
          Add Project
        </Link>
      </div>

      {projects.length === 0 ? (
        <div className="rounded-xl border-2 border-dashed border-slate-200 py-20 text-center">
          <p className="text-slate-400">No projects yet. Add your first one.</p>
          <Link to="/admin/projects/new" className="mt-4 inline-block text-sm font-medium text-[#0d3660] hover:underline">
            + Add Project
          </Link>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div key={p._id} className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
              {/* Image */}
              <div className="relative aspect-video overflow-hidden bg-slate-100">
                {p.imageUrl ? (
                  <img src={p.imageUrl} alt={p.title} className="h-full w-full object-cover" />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <ImageOff size={28} className="text-slate-300" />
                  </div>
                )}
                <span className={`absolute left-3 top-3 rounded-full px-2.5 py-0.5 text-[10px] font-semibold ${CATEGORY_COLORS[p.category] ?? "bg-slate-100 text-slate-600"}`}>
                  {p.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-semibold text-slate-800 leading-snug">{p.title}</h3>
                <p className="mt-1 text-xs text-slate-500 line-clamp-2">{p.description}</p>
                <p className="mt-2 text-[11px] font-medium text-slate-400">Scope: {p.scope}</p>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 border-t border-slate-100 px-4 py-3">
                <Link
                  to="/admin/projects/$id"
                  params={{ id: p._id }}
                  className="flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium text-slate-600 transition hover:bg-slate-100"
                >
                  <Pencil size={13} /> Edit
                </Link>
                <button
                  onClick={() => handleDelete(p._id, p.title)}
                  disabled={deleting === p._id}
                  className="flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium text-red-500 transition hover:bg-red-50 disabled:opacity-50"
                >
                  <Trash2 size={13} />
                  {deleting === p._id ? "Deleting…" : "Delete"}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
