# Semeco Digital

Premium multi-page Next.js website for Semeco Digital, prepared for continuous deployment on Netlify.

## Local development

Requirements: Node.js 22 and pnpm.

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Validation

```bash
pnpm lint
pnpm typecheck
pnpm build
```

## Netlify configuration

The repository includes `netlify.toml` with:

- Build command: `pnpm run build`
- Publish directory: `.next`
- Node.js version: `22`

Netlify automatically applies its current Next.js adapter. Do not add or pin the legacy Next.js plugin unless Netlify support specifically instructs you to do so.

## Netlify Forms

The consultation form submits to Netlify Forms with the name `semeco-consultation`. The static detection blueprint is in `public/__forms.html`. After a successful production deployment, enable form detection if needed and view submissions under the site’s **Forms** tab.

## GitHub and existing Netlify site

1. Create a new empty GitHub repository.
2. Upload the contents of this project folder to the repository root, including `netlify.toml`, `package.json`, `pnpm-lock.yaml`, `app`, and `public`.
3. Commit and push to the `main` branch.
4. Sign in to Netlify and open the existing `semecodigital` site.
5. Go to **Project configuration → Build & deploy → Continuous deployment**.
6. Choose **Link repository** or change the linked repository, authorize GitHub, and select the new repository.
7. Confirm the base directory is blank, the build command is `pnpm run build`, and the publish directory is `.next`.
8. Deploy the `main` branch.
9. After deployment, open the **Forms** area and confirm `semeco-consultation` was detected.
10. Submit one test consultation and verify it appears in Netlify.

The current site URL can remain `https://semecodigital.netlify.app`. Linking a new repository changes the deployed source, not the assigned Netlify subdomain.
