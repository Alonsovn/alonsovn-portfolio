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

### HTTPS redirect

SSL/TLS → Edge Certificates → **Always Use HTTPS** is enabled, so `http://alonsovndev.com/` returns a `301` to the `https://` URL. Keep it on: the `Strict-Transport-Security` header below only protects visitors who reach the site over HTTPS first.

## Security headers

Headers are defined in the repo, in `public/_headers`. Astro copies the file to `dist/`, and Cloudflare Workers static assets applies it to every path (`/*`).

| Header | Purpose |
| --- | --- |
| `Strict-Transport-Security` | Forces HTTPS for one year. No `includeSubDomains` or `preload` on purpose. |
| `Content-Security-Policy` | Allows only same-origin assets, inline scripts and styles, and the Cloudflare Web Analytics beacon. |
| `X-Content-Type-Options` | `nosniff` |
| `X-Frame-Options` | `DENY`, alongside CSP `frame-ancestors 'none'` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | Disables camera, microphone, geolocation and FLoC |

`'unsafe-inline'` is required in `script-src` and `style-src` because the theme bootstrap script, the bundled module script and Astro's scoped styles are inlined in the HTML.

When adding a third-party script, font host, image host or embed, update the CSP in `public/_headers` in the same change. The Cloudflare beacon is injected at the edge and is not in `dist/`, so a local build cannot show a CSP violation for it. Check the browser console on the deployed site.

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
curl -sI http://alonsovndev.com/ | head -1              # 301 (Always Use HTTPS)
curl -sI https://alonsovndev.com/ | grep -iE "strict-transport|content-security|x-frame|x-content-type|referrer-policy|permissions-policy"   # all six present
```

Then open the deployed site with DevTools open and confirm the console has no `Refused to load` CSP errors.

## Google Search Console

1. Add `alonsovndev.com` as a **Domain** property. Verify with the DNS TXT record in Cloudflare DNS.
2. Submit `https://alonsovndev.com/sitemap-index.xml`.
3. Inspect `https://alonsovndev.com/` and click **Request indexing** after changes to the title, headings or structured data, so Google recrawls the page.

Googlebot reports the fonts and the Cloudflare beacon as "couldn't be loaded" under Page resources. This is normal and does not affect indexing.

## Notes and open items

- The `workers.dev` URL stays reachable unless its route is disabled in the Cloudflare dashboard. Canonical tags already point search engines to the root domain. Disabling the route is optional (`TBD`).
- Cloudflare build settings (build command, output directory, Node version) live in the dashboard: `TBD`, not recorded here.
- No web manifest exists; it is not needed for a static portfolio.
