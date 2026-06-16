import { createFileRoute, useRouter, Link } from "@tanstack/react-router";
import { createProjectFn } from "@/lib/sanity.server";
import { ProjectForm, type ProjectFormValues } from "@/components/site/ProjectForm";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/admin/_layout/projects/new")({
  component: NewProject,
});

function NewProject() {
  const router = useRouter();

  async function handleSubmit(values: ProjectFormValues) {
    await createProjectFn({ data: values });
    router.navigate({ to: "/admin/projects" });
  }

  return (
    <div className="mx-auto max-w-2xl">
      <Link
        to="/admin/projects"
        className="mb-6 inline-flex items-center gap-1.5 text-sm text-slate-500 transition hover:text-slate-800"
      >
        <ArrowLeft size={15} /> Back to Projects
      </Link>
      <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="mb-6 text-xl font-bold text-slate-800">Add New Project</h1>
        <ProjectForm onSubmit={handleSubmit} submitLabel="Add Project" />
      </div>
    </div>
  );
}
