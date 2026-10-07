# Deployment and Domain Setup

## Overview

| Item | Value |
| --- | --- |
| Production URL (canonical) | `https://alonsovndev.com` |
| Alias | `https://www.alonsovndev.com` (301 redirects to the root domain) |
| Default Cloudflare URL | `https://alonsovn-portfolio.alonsonh94.workers.dev/` |
| Hosting | Cloudflare Workers (static Astro build) |
| Registrar and DNS | Cloudflare |
| Source | GitHub repository, connected to Cloudflare for automatic deployments |

```text
GitHub
  ↓  (push triggers build)
Cloudflare build/deployment
  ↓
Cloudflare Worker: alonsovn-portfolio
  ↓
alonsovndev.com
  ↑
www.alonsovndev.com ── 301 redirect to root
```

## Cloudflare configuration

Configured in the Cloudflare dashboard, not in this repository. There is no `wrangler` config file in the repo.

### Custom domains

Workers & Pages → `alonsovn-portfolio` → Domains. Both domains point at the production Worker:

- `alonsovndev.com`
- `www.alonsovndev.com`

### www → root redirect

A Cloudflare Single Redirect Rule keeps `www` from becoming a duplicate version of the site.

| Setting | Value |
| --- | --- |
| Rule name | `Redirect www to root domain` |
| Incoming URL (wildcard) | `https://www.alonsovndev.com/*` |
| Target URL | `https://alonsovndev.com/${1}` |
| Status code | `301` (permanent) |
| Preserve query string | Enabled |
| Order | First |
| State | Active |

Examples:

| Request | Redirects to |
| --- | --- |
| `www.alonsovndev.com/` | `alonsovndev.com/` |
| `www.alonsovndev.com/projects` | `alonsovndev.com/projects` |
| `www.alonsovndev.com/projects?id=123` | `alonsovndev.com/projects?id=123` |

## Canonical domain in the code

The root domain is the only canonical host. It is set in three places, and all three must stay in sync:

| File | Setting | Drives |
| --- | --- | --- |
| `astro.config.mjs` | `site` | Sitemap URLs (`@astrojs/sitemap`) |
| `src/data/site.ts` | `url` | Canonical link, `og:url`, `og:image`, `twitter:url`, `twitter:image`, JSON-LD (`Person`, `WebSite`) via `src/layouts/BaseLayout.astro` |
| `public/robots.txt` | `Sitemap:` line | Static file, not derived, so it must be edited by hand |

Never use `www.alonsovndev.com` or the `workers.dev` URL as a canonical, `og:url` or sitemap host.

## Changing the domain

1. Update the three places above.
2. Run `npm run build`, then check that `dist/` contains no trace of the old host: `grep -rn "<old-domain>" dist/`.
3. Update the redirect rule, custom domains and Search Console property.
4. Update the domain mentions in `README.md` and `PRODUCT.md`.

## Verification

Before deploy:

```bash
npm run lint && npm run build
grep -rn "alonsovn\.dev" dist/          # expect no matches
cat dist/sitemap-index.xml dist/robots.txt
```

In `dist/index.html`, `rel="canonical"`, `og:url`, `og:image`, `twitter:url`, `twitter:image` and the JSON-LD `url`/`image` fields should all start with `https://alonsovndev.com`.

After deploy:

```bash
curl -sI https://www.alonsovndev.com/projects?id=123   # 301, Location: https://alonsovndev.com/projects?id=123
curl -s  https://alonsovndev.com/robots.txt             # Sitemap: https://alonsovndev.com/sitemap-index.xml
curl -sI https://alonsovndev.com/sitemap-index.xml      # 200 and an XML content type
```

## Google Search Console

1. Add `alonsovndev.com` as a **Domain** property. Verify with the DNS TXT record in Cloudflare DNS.
2. Submit `https://alonsovndev.com/sitemap-index.xml`.
3. Optionally inspect `https://alonsovndev.com/` and request indexing.

## Notes and open items

- The `workers.dev` URL stays reachable unless its route is disabled in the Cloudflare dashboard. Canonical tags already point search engines to the root domain. Disabling the route is optional (`TBD`).
- Cloudflare build settings (build command, output directory, Node version) live in the dashboard: `TBD`, not recorded here.
- No web manifest exists; it is not needed for a static portfolio.
