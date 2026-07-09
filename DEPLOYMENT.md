# Deployment Guide — Albert Lucido Portfolio

This guide covers everything you need to deploy this portfolio to **Vercel** using **GitHub**.

---

## 1. Prerequisites

Make sure the following are installed and ready on your machine:

- **Node.js** v18 or later — [Download](https://nodejs.org/)
- **Git** — [Download](https://git-scm.com/)
- A **GitHub account** — [Sign up](https://github.com/)
- A **Vercel account** — [Sign up](https://vercel.com/) (free, sign in with GitHub)

---

## 2. Verify the Project Builds Locally

Before pushing to GitHub, confirm everything works:

```bash
npm install
npm run build
```

If `npm run build` succeeds with no errors, the project is ready to deploy.

To preview the production build locally:

```bash
npm run start
```

---

## 3. Initial Git Setup

If the project is not already a Git repository, initialize it:

```bash
git init
git add .
git commit -m "Initial portfolio"
```

If Git is already initialized (there is a `.git` folder), skip `git init` and just run:

```bash
git add .
git commit -m "Initial portfolio"
```

---

## 4. Create a GitHub Repository

1. Go to [https://github.com/new](https://github.com/new)
2. Set the repository name (e.g., `my-portfolio`)
3. Choose **Public** or **Private** — both work with Vercel
4. **Do NOT** initialize with a README or `.gitignore` (those already exist locally)
5. Click **Create repository**

GitHub will show a page with setup commands. Copy your repository URL — it looks like:

```
https://github.com/Albert-Lucido/my-portfolio.git
```

---

## 5. Push the Repository to GitHub

Run these commands in your project directory:

```bash
git branch -M main
git remote add origin https://github.com/Albert-Lucido/my-portfolio.git
git push -u origin main
```

Replace the URL with your actual repository URL from Step 4.

After this, your code is on GitHub.

---

## 6. Connect the Repository to Vercel

1. Go to [https://vercel.com/dashboard](https://vercel.com/dashboard)
2. Click **Add New → Project**
3. Click **Import Git Repository**
4. Select your GitHub account and find `my-portfolio`
5. Click **Import**

Vercel automatically detects that this is a **Next.js** project and pre-fills all build settings:

| Setting | Value (auto-detected) |
|---|---|
| Framework Preset | Next.js |
| Build Command | `next build` |
| Output Directory | `.next` |
| Install Command | `npm install` |

**Do not change any of these settings.**

---

## 7. Environment Variables

> **No environment variables are required for this project.**

This portfolio is entirely frontend-only with no backend, database, or API keys. You can skip the environment variables section in the Vercel setup wizard.

---

## 8. Deploy the Project

1. After importing the repository, click **Deploy**
2. Vercel will run `npm install` and `npm run build`
3. When the build finishes, Vercel provides a live URL such as:
   ```
   https://my-portfolio-albert-lucido.vercel.app
   ```
4. Click **Visit** to view your live portfolio

---

## 9. Update the Portfolio After Future Commits

Vercel automatically redeploys on every push to `main`.

To publish changes:

```bash
git add .
git commit -m "Update portfolio content"
git push
```

Vercel detects the push and starts a new deployment automatically. You do not need to do anything in the Vercel dashboard.

---

## 10. Redeploy Manually (if needed)

If you need to force a redeployment without a code change:

1. Go to [https://vercel.com/dashboard](https://vercel.com/dashboard)
2. Select your project
3. Go to the **Deployments** tab
4. Click the three-dot menu on the latest deployment
5. Click **Redeploy**

---

## 11. Update the Canonical URL (optional)

Once your live Vercel URL is confirmed, update the base URL in `data/site.ts`:

```typescript
export const siteMetadata = {
  baseUrl: "https://your-actual-url.vercel.app", // <-- update this
  canonicalPath: "/",
};
```

Also update `public/robots.txt`:

```
Sitemap: https://your-actual-url.vercel.app/sitemap.xml
```

And update each `<loc>` in `public/sitemap.xml` to match your live URL.

---

## 12. Custom Domain (optional)

To use a custom domain (e.g., `albertlucido.dev`):

1. In the Vercel dashboard, go to your project → **Settings → Domains**
2. Enter your domain and click **Add**
3. Follow the DNS instructions Vercel provides (usually adding a CNAME or A record at your domain registrar)

---

## 13. Troubleshooting Common Issues

### Build fails with TypeScript errors
```bash
npm run build
```
Read the error output carefully. Fix any type errors in `data/site.ts` or component files.

### 404 on project pages (`/projects/thesis`, etc.)
- Confirm `app/projects/[slug]/page.tsx` exists
- Confirm `generateStaticParams()` returns all four slugs
- Run `npm run build` locally and check the output for any route errors

### Images not loading
- Confirm all project images exist in `public/projects/<slug>/`
- Image filenames must exactly match the paths in `data/site.ts`
- Check for spaces or special characters in filenames

### Vercel build succeeds but site shows old content
- Hard-refresh the browser (`Ctrl + Shift + R` or `Cmd + Shift + R`)
- Wait a minute for Vercel's CDN to propagate

### Push rejected by GitHub
If you get a "non-fast-forward" error, you may need to pull first:
```bash
git pull origin main --allow-unrelated-histories
git push origin main
```

---

## Quick Reference — Git Commands

```bash
# First-time setup
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin <repository-url>
git push -u origin main

# Publishing updates
git add .
git commit -m "Your commit message"
git push
```

---

*This portfolio is a static Next.js site with no environment variables, no database, and no backend. Vercel deploys it automatically on every push to main.*
