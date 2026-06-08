// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isVercel = !!process.env.VERCEL;

export default defineConfig({
  // nitro must be an object (not undefined) so the deploy plugin runs outside Lovable sandbox.
  nitro: {
    preset: isVercel ? "vercel" : (process.env.NITRO_PRESET ?? "cloudflare-pages"),
    // Override output dirs so Vercel Build Output API v3 lands at .vercel/output/
    ...(isVercel && {
      output: {
        dir: ".vercel/output",
        publicDir: ".vercel/output/static",
        serverDir: ".vercel/output/functions/__server.func",
      },
    }),
  },
  tanstackStart: {
    server: {
      entry: "server",
    },
  },
});
