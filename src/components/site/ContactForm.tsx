import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  phone: z.string().trim().min(5, "Phone is required").max(30),
  email: z.string().trim().email("Valid email required").max(160),
  service: z.string().trim().max(80).optional().or(z.literal("")),
  details: z.string().trim().min(10, "Please share a few details").max(1500),
});

const SERVICES = [
  "General Contracting",
  "Building Contracting",
  "MEP Contracting",
  "MEP Fit-out & Interior",
  "Blasting & Painting",
  "Site Office Facilities",
  "Rental Services",
  "Project Management",
  "Other",
];

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form.");
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 800));
    setSubmitting(false);
    toast.success("Inquiry sent. Our team will contact you shortly.");
    e.currentTarget.reset();
  }

  const input =
    "w-full rounded-md border border-input bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30 transition";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Name
          </label>
          <input name="name" type="text" required className={input} placeholder="Your full name" />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Company
          </label>
          <input
            name="company"
            type="text"
            className={input}
            placeholder="Company name (optional)"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Phone
          </label>
          <input name="phone" type="tel" required className={input} placeholder="+965 ..." />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Email
          </label>
          <input
            name="email"
            type="email"
            required
            className={input}
            placeholder="you@company.com"
          />
        </div>
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Service Required
        </label>
        <select name="service" className={input} defaultValue="">
          <option value="" disabled>
            Select a service
          </option>
          {SERVICES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Project Details
        </label>
        <textarea
          name="details"
          required
          rows={5}
          className={input}
          placeholder="Tell us about your project, location, timeline, and scope..."
        />
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-dark disabled:opacity-60"
      >
        {submitting ? "Sending..." : "Send Inquiry"}
      </button>
    </form>
  );
}
