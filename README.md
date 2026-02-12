# Arcane Codex

Arcane Codex is a retro 8-bit style web page with modern features for browsing the D&D 2014 Spells compendium.

## Core Features

- **Retro 8-bit UI kit** – Main UI kit used across the page
- **Spell dashboard** (`src/sections/authenticated/home`) – Main page with a spell list table, search bar, and descriptive multi-card layout
- **Data layer** – API calls go through a shared Axios instance in `src/libs`, separate from the rest of the app
- **Internationalization** – English via `react-i18next`

## Tech Stack

- React 19, TypeScript, Vite 7
- TanStack Router & Query, TanStack Table
- Axios

### UI

- Tailwind CSS 4
- shadcn
- Lucide icons
- Radix UI

## Project structure

The app has a single main area (home) where users can:

- See a table of spells on the left
- Click a spell to load a multi-tab view with two cards: general spell info and damage data
- Search spells via the search bar

The home page is wrapped in a context that holds the selected spell’s state. The list API returns the endpoint for a single spell; that endpoint is stored in context and used by other components (e.g. the info card).

## Folder structure

```
├── routes/
│   ├── _authenticated/
│   │   ├── index.tsx
│   │   └── home.tsx
│   └── __root.tsx
└── _authenticated.tsx
```

```
└── sections/
    └── authenticated/
        └── home/
            ├── components/
            │   ├── Cards/
            │   │   ├── SpellCard.tsx
            │   │   ├── SpellInfoCard.tsx
            │   │   ├── MechanicsCardSkeleton.tsx
            │   │   └── SpellMechanicsCard.tsx
            │   └── Tables/
            │       ├── SpellDamageTable.tsx
            │       ├── SpellTable.tsx
            │       ├── SpellInfoTable.tsx
            │       ├── SpellTableSkeleton.tsx
            │       └── SpellTableNavigation.tsx
            └── config/
                ├── SpellDamageTableConfig.tsx
                ├── SpellTableConfig.tsx
                └── SpellInfoTableConfig.tsx
```

```
└── layouts/
    └── AuthenticatedLayout/
        └── components/
            ├── DropDownMenu.tsx
            ├── Header.tsx
            └── SearchBar.tsx
```

## Custom hooks

The project includes a custom hook used in the header: `src/hooks/useKeyboardShortcut`. It accepts a key and modifiers (e.g. ⌘+E) and runs a callback.

## API layer

The app uses TanStack Query and Axios. The base URL is set in `src/libs/axios/axiosInstance.ts`. Example service layout:

```
└── services/
    └── spell/
        └── getSpell/
            ├── apis/
            │   └── getSpell.ts
            ├── queries/
            │   └── useGetSpell.ts
            ├── queriesOptions/
            │   └── getSpellOptions.ts
            └── spell.ts
```

Entry point is the `queries` folder (e.g. `useGetSpell`). It uses the options in `queriesOptions`, which define the query and a `queryFn` that calls the API in `apis`.

## Getting started

Clone the repo, then:

```bash
npm install
```

Run the app:

```bash
npm run dev
```
