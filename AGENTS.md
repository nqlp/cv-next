# AGENTS.md

## Localized content

- Update `messages/fr.json` and `messages/en.json` together when changing user-facing copy. Keep message keys and ICU placeholders identical across both files.
- Use the locale-aware navigation helpers from `src/i18n/routing.ts` for internal page links.

## Routing

- Keep the `matcher` in `src/proxy.ts` as a string literal so Next.js can analyze it at build time.
- When changing routing, verify that `/contact` redirects to a localized page and `/Paul_Nguyen_CV.pdf` is served directly. Keep `/fr`, `/en`, `/fr/contact`, and `/en/contact` statically prerendered.

## Verification

- For code changes, run the CI checks in order: `npm run lint`, `npm run typecheck`, `npm test`, then `npm run build`.
