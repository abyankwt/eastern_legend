import { createClient } from "@sanity/client";
import { createServerFn } from "@tanstack/react-start";
import { redirect } from "@tanstack/react-router";
import { z } from "zod";

function getClient() {
  return createClient({
    projectId: process.env.SANITY_PROJECT_ID!,
    dataset: process.env.SANITY_DATASET!,
    apiVersion: "2024-01-01",
    useCdn: false,
    token: process.env.SANITY_API_TOKEN!,
  });
}

export type SanityProject = {
  _id: string;
  title: string;
  category: string;
  description: string;
  scope: string;
  imageUrl: string | null;
  order: number;
  featured?: boolean;
};

// ─── Auth ────────────────────────────────────────────────────────────────────

export const loginFn = createServerFn({ method: "POST" })
  .inputValidator(z.object({ username: z.string(), password: z.string() }))
  .handler(async ({ data }) => {
    const { setCookie } = await import("@tanstack/react-start/server");
    if (
      data.username !== process.env.ADMIN_USERNAME ||
      data.password !== process.env.ADMIN_PASSWORD
    ) {
      throw new Error("Invalid username or password");
    }
    setCookie("__el_admin", "1", {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
      sameSite: "lax",
    });
    return { ok: true };
  });

export const logoutFn = createServerFn({ method: "POST" }).handler(async () => {
  const { deleteCookie } = await import("@tanstack/react-start/server");
  deleteCookie("__el_admin", { path: "/" });
  return { ok: true };
});

export const requireAuthFn = createServerFn({ method: "GET" }).handler(async () => {
  const { getCookie } = await import("@tanstack/react-start/server");
  const session = getCookie("__el_admin");
  if (session !== "1") {
    throw redirect({ to: "/admin/login" });
  }
  return { ok: true };
});

// ─── Projects CRUD ───────────────────────────────────────────────────────────

export const fetchProjectsFn = createServerFn({ method: "GET" }).handler(async () => {
  const client = getClient();
  const projects: SanityProject[] = await client.fetch(
    `*[_type == "project"] | order(order asc) {
      _id,
      title,
      category,
      description,
      scope,
      "imageUrl": image.asset->url,
      order,
      featured
    }`,
  );
  return projects;
});

export const fetchFeaturedProjectsFn = createServerFn({ method: "GET" }).handler(async () => {
  const client = getClient();
  const projects: SanityProject[] = await client.fetch(
    `*[_type == "project" && featured == true] | order(order asc) {
      _id,
      title,
      category,
      description,
      scope,
      "imageUrl": image.asset->url,
      order,
      featured
    }`,
  );
  return projects;
});

export const createProjectFn = createServerFn({ method: "POST" })
  .inputValidator(
    z.object({
      title: z.string().min(1),
      category: z.string().min(1),
      description: z.string().min(1),
      scope: z.string().min(1),
      imageBase64: z.string().optional(),
      imageFilename: z.string().optional(),
      order: z.number().optional(),
      featured: z.boolean().optional(),
    }),
  )
  .handler(async ({ data }) => {
    const client = getClient();
    let imageRef: object | undefined;

    if (data.imageBase64 && data.imageFilename) {
      const base64Data = data.imageBase64.split(",")[1] ?? data.imageBase64;
      const byteArray = Uint8Array.from(atob(base64Data), (c) => c.charCodeAt(0));
      const blob = new Blob([byteArray], { type: "image/jpeg" });
      const asset = await client.assets.upload("image", blob, {
        filename: data.imageFilename,
      });
      imageRef = {
        _type: "image",
        asset: { _type: "reference", _ref: asset._id },
      };
    }

    const doc = await client.create({
      _type: "project",
      title: data.title,
      category: data.category,
      description: data.description,
      scope: data.scope,
      order: data.order ?? 99,
      featured: data.featured ?? false,
      ...(imageRef ? { image: imageRef } : {}),
    });
    return { id: doc._id };
  });

export const updateProjectFn = createServerFn({ method: "POST" })
  .inputValidator(
    z.object({
      id: z.string(),
      title: z.string().min(1),
      category: z.string().min(1),
      description: z.string().min(1),
      scope: z.string().min(1),
      imageBase64: z.string().optional(),
      imageFilename: z.string().optional(),
      order: z.number().optional(),
      featured: z.boolean().optional(),
    }),
  )
  .handler(async ({ data }) => {
    const client = getClient();
    let patch = client.patch(data.id).set({
      title: data.title,
      category: data.category,
      description: data.description,
      scope: data.scope,
      order: data.order ?? 99,
      featured: data.featured ?? false,
    });

    if (data.imageBase64 && data.imageFilename) {
      const base64Data = data.imageBase64.split(",")[1] ?? data.imageBase64;
      const byteArray = Uint8Array.from(atob(base64Data), (c) => c.charCodeAt(0));
      const blob = new Blob([byteArray], { type: "image/jpeg" });
      const asset = await client.assets.upload("image", blob, {
        filename: data.imageFilename,
      });
      patch = patch.set({
        image: { _type: "image", asset: { _type: "reference", _ref: asset._id } },
      });
    }

    await patch.commit();
    return { ok: true };
  });

export const deleteProjectFn = createServerFn({ method: "POST" })
  .inputValidator(z.object({ id: z.string() }))
  .handler(async ({ data }) => {
    const client = getClient();
    await client.delete(data.id);
    return { ok: true };
  });
