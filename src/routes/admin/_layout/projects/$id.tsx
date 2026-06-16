import { createFileRoute, useRouter, Link } from "@tanstack/react-router";
import { fetchProjectsFn, updateProjectFn, type SanityProject } from "@/lib/sanity.server";
import { ProjectForm, type ProjectFormValues } from "@/components/site/ProjectForm";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/admin/_layout/projects/$id")({
  loader: async ({ params }) => {
    const projects = await fetchProjectsFn();
    const project = (projects as SanityProject[]).find((p) => p._id === params.id);
    if (!project) throw new Error("Project not found");
    return project;
  },
  component: EditProject,
});

function EditProject() {
  const project = Route.useLoaderData() as SanityProject;
  const router = useRouter();

  async function handleSubmit(values: ProjectFormValues) {
    await updateProjectFn({ data: { id: project._id, ...values } });
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
        <h1 className="mb-6 text-xl font-bold text-slate-800">Edit Project</h1>
        <ProjectForm
          onSubmit={handleSubmit}
          submitLabel="Save Changes"
          defaultValues={{
            title: project.title,
            category: project.category,
            description: project.description,
            scope: project.scope,
            order: project.order,
            featured: project.featured ?? false,
            existingImageUrl: project.imageUrl ?? undefined,
          }}
        />
      </div>
    </div>
  );
}
