# the house of enablement

a tactile card-sort diagnostic for revenue leaders at series b/c startups.
four rooms. eight items per room. about four minutes each.

built on mercy bell's four-rooms methodology:

1. onboarding
2. solution & role depth
3. field activation
4. career development

see [BRIEF.md](./BRIEF.md) for the full build spec.

## stack

- next.js 16 (app router), typescript strict
- tailwind v4
- `@dnd-kit/core` + `@dnd-kit/sortable` for desktop drag-drop
- `framer-motion` for animations
- `@react-pdf/renderer` for client-side pdf
- formspree for submissions

## local dev

```bash
npm install
cp .env.local.example .env.local  # fill in NEXT_PUBLIC_FORMSPREE_ENDPOINT
npm run dev
```

open [localhost:3000](http://localhost:3000).

## deployment

- vercel, one-click import
- custom domain: `the-house.mercyb.com` (cname from webflow dns)
- env var: `NEXT_PUBLIC_FORMSPREE_ENDPOINT`
