import { useState } from "react";
import { z } from "zod";
import { CheckCircle2 } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  phone: z.string().trim().min(5, "Phone is required").max(30),
  email: z.string().trim().email("Valid email required").max(160),
  service: z.string().trim().max(80).optional().or(z.literal("")),
  details: z.string().trim().min(10, "Please share a few details").max(1500),
});

type FormData = z.infer<typeof schema>;

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

function buildWhatsAppMessage(data: FormData) {
  const lines = [
    `📋 *New Inquiry — Eastern Legend Website*`,
    ``,
    `👤 *Name:* ${data.name}`,
    data.company ? `🏢 *Company:* ${data.company}` : null,
    `📞 *Phone:* ${data.phone}`,
    `📧 *Email:* ${data.email}`,
    data.service ? `🔧 *Service:* ${data.service}` : null,
    ``,
    `📝 *Project Details:*`,
    data.details,
  ]
    .filter(Boolean)
    .join("\n");
  return lines;
}

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const raw = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(raw);

    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      parsed.error.issues.forEach((issue) => {
        const field = issue.path[0] as string;
        if (!fieldErrors[field]) fieldErrors[field] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setSubmitting(true);

    const message = buildWhatsAppMessage(parsed.data);
    const waUrl = `https://wa.me/96565646413?text=${encodeURIComponent(message)}`;

    await new Promise((r) => setTimeout(r, 700));

    // Silently open WhatsApp in background tab
    window.open(waUrl, "_blank", "noopener,noreferrer");

    setSubmitting(false);
    setSubmitted(true);
    e.currentTarget.reset();
  }

  const input =
    "w-full rounded-md border border-input bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30 transition";

  const errorClass = "mt-1 text-xs text-red-500";

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-14 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
          <CheckCircle2 className="h-8 w-8 text-accent" />
        </div>
        <h4 className="mt-5 text-lg font-bold text-foreground">Thank You!</h4>
        <p className="mt-2 max-w-xs text-sm text-muted-foreground">
          We've received your inquiry and will reach out to you shortly.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-7 text-sm font-medium text-accent hover:underline"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Name
          </label>
          <input name="name" type="text" required className={input} placeholder="Your full name" />
          {errors.name && <p className={errorClass}>{errors.name}</p>}
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
          {errors.phone && <p className={errorClass}>{errors.phone}</p>}
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
          {errors.email && <p className={errorClass}>{errors.email}</p>}
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
        {errors.details && <p className={errorClass}>{errors.details}</p>}
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
