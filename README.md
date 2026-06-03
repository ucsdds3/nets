# NETS Website

Official website for **NETS** (NanoEngineering and Technology Society) at UC San Diego.

Built and maintained by the **DS3 software team** — the engineering team within [Data Science Student Society @ UC San Diego](https://ds3ucsd.com/).

**Live site:** [https://ucsdds3.github.io/nets/](https://ucsdds3.github.io/nets/)

## About

This site introduces NETS to prospective and current members, highlights board members, projects, programs, and ways to get involved. It is a static React app deployed to GitHub Pages under the `/nets/` base path.

## Tech stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) for dev server and production builds
- [React Router](https://reactrouter.com/) for client-side routing
- [Tailwind CSS 4](https://tailwindcss.com/) + [DaisyUI](https://daisyui.com/) for styling

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) 20 or later
- npm

### Install and run locally

```bash
git clone https://github.com/ucsdds3/nets.git
cd nets
npm install
npm run dev
```

Open the URL Vite prints (typically `http://localhost:5173/nets/`). The app uses a `/nets/` base path in both development and production, matching the GitHub Pages deployment.

### Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server with hot reload |
| `npm run build` | Type-check and build for production into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint |
| `npm run deploy` | Build and publish to GitHub Pages via `gh-pages` |

Pushes to `main` also trigger an automated deploy through GitHub Actions (`.github/workflows/deploy.yml`).

## Routes

| Path | Page |
| --- | --- |
| `/` | Home |
| `/board` | Board members |
| `/projects` | Project teams |
| `/programs` | Programs |
| `/about` | About NETS |
| `/join` | Join / get involved |

## Project structure

```
nets/
├── .github/workflows/
│   └── deploy.yml          # CI: build + deploy to GitHub Pages on push to main
├── public/
│   └── favicon.svg         # Static files copied as-is into the build output
├── src/
│   ├── App.tsx             # Route definitions
│   ├── main.tsx            # App entry point
│   ├── index.css           # Global styles and Tailwind imports
│   ├── Components/         # Shared layout and UI
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   └── Page.tsx        # Shell: navbar, outlet, footer, document title
│   ├── pages/              # One folder per route/section
│   │   ├── About/
│   │   │   ├── about.tsx
│   │   │   ├── about-content.json    # Copy and section content
│   │   │   ├── about-content.types.ts
│   │   │   └── about-images.ts       # Maps JSON image refs → bundled assets
│   │   ├── Board/
│   │   │   ├── Board.tsx
│   │   │   ├── BoardLanding.tsx
│   │   │   ├── BoardCardsSection.tsx
│   │   │   ├── BoardMemberCard.tsx
│   │   │   ├── board-members.json
│   │   │   ├── board-members.types.ts
│   │   │   └── board-images.ts
│   │   ├── Home/
│   │   │   └── home.tsx
│   │   ├── Join/
│   │   │   └── join.tsx
│   │   ├── Programs/
│   │   │   ├── programs.tsx
│   │   │   ├── programs.json
│   │   │   ├── programs.types.ts
│   │   │   └── program-images.ts
│   │   └── Projects/
│   │       ├── projects.tsx
│   │       ├── ProjectsCard.tsx
│   │       ├── projects.json
│   │       ├── projects.types.ts
│   │       └── project-images.ts
│   ├── assets/             # Images and media (see below)
│   ├── theme/              # Light/dark theme provider and hooks
│   └── utils/
│       └── resolveAssetImage.ts   # Helper for JSON-driven image lookups
├── index.html
├── vite.config.ts          # Vite config (`base: "/nets/"`)
├── tailwind.config.js
├── postcss.config.cjs
├── tsconfig.json
└── package.json
```

### How pages are organized

Each section under `src/pages/` typically contains:

- A main React component (e.g. `projects.tsx`)
- A JSON file for editable content (titles, descriptions, lists)
- A `*.types.ts` file for JSON shape
- An `*-images.ts` file that resolves filenames in JSON to bundled images under `src/assets/`

Shared chrome (navigation, footer, page titles) lives in `src/Components/`.

## Assets

All site images live under **`src/assets/`**, grouped by the page or section that uses them:

| Directory | Contents |
| --- | --- |
| `src/assets/shared/` | Logo and branding used across the site (`logo.svg`, `NETS.png`) |
| `src/assets/home/` | Home page hero, cards, and navigation grid images |
| `src/assets/about/` | About page mission, values, and sponsor imagery |
| `src/assets/board/` | Board member headshots and hero image |
| `src/assets/projects/` | Project team photos and hero banner |
| `src/assets/programs/` | Program card images and page header |
| `src/assets/join/` | Join page photography |

Files in `public/` (e.g. `favicon.svg`) are served at the site root and are not processed by Vite's asset pipeline.

### Adding or updating images

1. Place the file in the appropriate `src/assets/<section>/` folder.
2. If the image is referenced from a JSON file, use only the **filename** in JSON (e.g. `"welcome-top.png"`) and wire it up in that section's `*-images.ts` resolver.
3. For one-off imports, import directly in the component: `import hero from "../../assets/home/building-back.jpg"`.

Image resolvers use `import.meta.glob` via `src/utils/resolveAssetImage.ts` so filenames in JSON stay simple while Vite still bundles and hashes assets at build time.

## Deployment

The site is hosted on **GitHub Pages** at `/nets/`. Both `vite.config.ts` and `BrowserRouter` in `App.tsx` set the base path to `/nets/` so routes and asset URLs work in production.

Manual deploy:

```bash
npm run deploy
```

Automated deploy runs on every push to `main`.

## Contributing

This project is maintained by the DS3 software team. For content or feature changes, open a PR against `main` and ensure `npm run build` and `npm run lint` pass before requesting review.
