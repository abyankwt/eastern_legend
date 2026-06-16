import { useState, useRef } from "react";
import { Upload, X } from "lucide-react";

const CATEGORIES = [
  "Residential",
  "Commercial",
  "Industrial",
  "MEP",
  "Fit-out",
  "Site Facilities",
];

export type ProjectFormValues = {
  title: string;
  category: string;
  description: string;
  scope: string;
  order?: number;
  featured?: boolean;
  imageBase64?: string;
  imageFilename?: string;
};

type Props = {
  onSubmit: (values: ProjectFormValues) => Promise<void>;
  submitLabel: string;
  defaultValues?: {
    title?: string;
    category?: string;
    description?: string;
    scope?: string;
    order?: number;
    featured?: boolean;
    existingImageUrl?: string;
  };
};

export function ProjectForm({ onSubmit, submitLabel, defaultValues }: Props) {
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [imagePreview, setImagePreview] = useState<string | null>(
    defaultValues?.existingImageUrl ?? null,
  );
  const [imageBase64, setImageBase64] = useState<string | undefined>();
  const [imageFilename, setImageFilename] = useState<string | undefined>();
  const fileRef = useRef<HTMLInputElement>(null);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setImageFilename(file.name);
    const reader = new FileReader();
    reader.onload = (ev) => {
      const result = ev.target?.result as string;
      setImageBase64(result);
      setImagePreview(result);
    };
    reader.readAsDataURL(file);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setSaving(true);
    const fd = new FormData(e.currentTarget);
    try {
      await onSubmit({
        title: fd.get("title") as string,
        category: fd.get("category") as string,
        description: fd.get("description") as string,
        scope: fd.get("scope") as string,
        order: Number(fd.get("order") || 99),
        featured: fd.get("featured") === "on",
        imageBase64,
        imageFilename,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setSaving(false);
    }
  }

  const input =
    "w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-800 outline-none focus:border-[#0d3660] focus:ring-2 focus:ring-[#0d3660]/20 transition";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Image upload */}
      <div>
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-500">
          Project Image
        </label>
        {imagePreview ? (
          <div className="relative aspect-video overflow-hidden rounded-lg border border-slate-200 bg-slate-100">
            <img src={imagePreview} alt="Preview" className="h-full w-full object-cover" />
            <button
              type="button"
              onClick={() => { setImagePreview(null); setImageBase64(undefined); setImageFilename(undefined); if (fileRef.current) fileRef.current.value = ""; }}
              className="absolute right-2 top-2 rounded-full bg-black/50 p-1 text-white transition hover:bg-black/70"
            >
              <X size={14} />
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => fileRef.current?.click()}
            className="flex w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-slate-200 py-10 transition hover:border-[#0d3660]/40 hover:bg-slate-50"
          >
            <Upload size={22} className="text-slate-400" />
            <span className="text-sm text-slate-400">Click to upload image</span>
          </button>
        )}
        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
      </div>

      {/* Title */}
      <div>
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-500">
          Title *
        </label>
        <input name="title" type="text" required className={input} defaultValue={defaultValues?.title} placeholder="e.g. Residential Tower Project" />
      </div>

      {/* Category */}
      <div>
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-500">
          Category *
        </label>
        <select name="category" required className={input} defaultValue={defaultValues?.category ?? ""}>
          <option value="" disabled>Select a category</option>
          {CATEGORIES.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      {/* Description */}
      <div>
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-500">
          Description *
        </label>
        <textarea
          name="description"
          required
          rows={3}
          className={input}
          defaultValue={defaultValues?.description}
          placeholder="Brief project description..."
        />
      </div>

      {/* Scope */}
      <div>
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-500">
          Scope *
        </label>
        <input name="scope" type="text" required className={input} defaultValue={defaultValues?.scope} placeholder="e.g. Civil, MEP, Fit-out" />
      </div>

      {/* Order */}
      <div>
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate-500">
          Display Order
        </label>
        <input name="order" type="number" className={input} defaultValue={defaultValues?.order ?? 99} min={1} />
        <p className="mt-1 text-xs text-slate-400">Lower number = shown first</p>
      </div>

      {/* Show on Home Page */}
      <label className="flex cursor-pointer items-center justify-between rounded-lg border border-slate-200 px-4 py-3">
        <div>
          <p className="text-sm font-semibold text-slate-700">Show on Home Page</p>
          <p className="text-xs text-slate-400">Feature this project in the home page projects section</p>
        </div>
        <input
          type="checkbox"
          name="featured"
          defaultChecked={defaultValues?.featured ?? false}
          className="h-4 w-4 accent-[#0d3660]"
        />
      </label>

      {error && <p className="text-sm text-red-500">{error}</p>}

      <button
        type="submit"
        disabled={saving}
        className="w-full rounded-lg bg-[#0d3660] py-2.5 text-sm font-semibold text-white transition hover:bg-[#0a2a4a] disabled:opacity-60"
      >
        {saving ? "Saving…" : submitLabel}
      </button>
    </form>
  );
}
