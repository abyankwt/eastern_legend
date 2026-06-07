# Repository Guidelines

## Project Structure & Module Organization

This is a TanStack Start React/TypeScript site built with Vite and Bun. Source lives in `src/`. File-based routes are in `src/routes/`; `src/routes/__root.tsx` is the app shell and `src/routeTree.gen.ts` is generated, so do not edit it manually. Shared site components live in `src/components/site/`, reusable UI primitives in `src/components/ui/`, utilities in `src/lib/`, hooks in `src/hooks/`, global styles in `src/styles.css`, and image assets in `src/assets/`.

## Build, Test, and Development Commands

Use Bun for dependency installs because the repository includes `bun.lock`.

- `bun install`: install dependencies.
- `bun run dev`: start the local Vite dev server.
- `bun run build`: create the production build.
- `bun run build:dev`: build using development mode.
- `bun run preview`: preview the built app locally.
- `bun run lint`: run ESLint across the repository.
- `bun run format`: apply Prettier formatting.

## Coding Style & Naming Conventions

Write TypeScript and React components in `.ts` and `.tsx` files. Use PascalCase for exported components, camelCase for functions and variables, and kebab-case or descriptive lowercase names for route files when they map to URLs, such as `quality-safety.tsx`. Follow the configured Prettier rules: 100-character print width, semicolons, double quotes, and trailing commas. ESLint includes TypeScript, React Hooks, React Refresh, and Prettier rules.

## Testing Guidelines

No test runner or test scripts are currently configured. Before submitting changes, run `bun run lint` and `bun run build` as the minimum verification. If adding tests, introduce a clear script in `package.json` and colocate tests near the code they cover using a consistent suffix such as `.test.ts` or `.test.tsx`.

## Commit & Pull Request Guidelines

Recent history uses short imperative or generic commit subjects, for example `Implemented design system, routes` and `Changes`. Prefer a specific imperative subject that explains the change, such as `Add project gallery route`. Pull requests should include a brief summary, verification commands run, linked issue or client request when applicable, and screenshots for visible UI changes.

## Security & Configuration Tips

Keep secrets out of the repository. Use server-only modules for sensitive configuration, following the existing `*.server.ts` pattern such as `src/lib/config.server.ts`. Do not import `server-only`; ESLint explicitly blocks it for this TanStack Start app.
