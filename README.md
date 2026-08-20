# Nigerian Community in Angola

A modern, editorial community website for the Nigerian Community in Angola
(NICAA), built with Next.js-compatible Vinext and React.

## Experience

- Cinematic, responsive homepage with scroll reveals and editorial motion
- Searchable A–Z directory of 81 town unions
- Leadership profiles for the 11-member executive council
- Community history, objectives, news, resources, and contact routes
- Privacy-conscious public content with member rosters and personal numbers omitted
- Accessible navigation, keyboard states, reduced-motion support, and metadata

## Routes

- `/` — Home
- `/about` — Story, timeline, and objectives
- `/leadership` — Executive council and past presidents
- `/unions` — Searchable town-union directory
- `/news` — Community reports
- `/resources` — Archive and member guidance
- `/contact` — Community office and enquiry form

## Local development

Requires Node.js 22.13 or newer and pnpm 11.

```bash
pnpm install
pnpm dev
```

Run the project checks with:

```bash
pnpm lint
pnpm test
```

Community content is maintained in `app/_data/community.ts`. Public visual
assets live in `public/media`.
