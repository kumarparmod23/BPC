# BPC

Bijnor Piles Centre's static marketing website.

## Files
- `index.html` — main landing page.
- `styles/main.css` — shared custom styles.
- `scripts/tailwind-config.js` — Tailwind CDN theme tokens.
- `scripts/main.js` — mobile nav, CTA tracking, and appointment form flow.
- `privacy.html` / `medical-disclaimer.html` — compliance pages linked from the site.
- `DESIGN.md` — visual design language and token guidance.

## Local preview
```bash
python3 -m http.server 4173
# then open http://localhost:4173
```

## Conflict safety check
```bash
./scripts/check-conflicts.sh
```

If GitHub shows merge conflicts for this PR branch, resolve them locally:

```bash
# after `git merge ...` or `git rebase ...` reports conflicts
./scripts/resolve-pr-conflicts.sh
```

## What was implemented
- Extracted inline styles and Tailwind config into dedicated files.
- Added mobile navigation with accessible controls.
- Added appointment form + WhatsApp flow and basic client-side event tracking.
- Fixed contact details and added privacy/disclaimer pages.
- Added SEO metadata + MedicalClinic structured data.
- Added performance-oriented improvements (font preconnect, lazy image loading, image dimensions).
