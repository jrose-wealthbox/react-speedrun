# react-speedrun

A React learning sandbox for an experienced Rails/Angular engineer learning React as practiced in the **crm-web** monolith.

## Goal

Not generic React — React as crm-web enforces it. Exercises internalize the conventions that matter in production: typed props, custom hooks over raw `useEffect`, derived state, and the mounting patterns that keep Turbolinks navigation intact.

## Curriculum

Open `react-learning-curriculum.html` in a browser. Sections §1–§18 run simplest → most complex.

**Stack being learned into:** React 18.3.1 · TypeScript 5 · Redux Toolkit · TanStack React Query v4 · react-hook-form · dnd-kit

## Exercise Structure

| Lessons | Format | How to run |
|---------|--------|------------|
| §1–§4 | Single HTML file (CDN React + Babel) | Open directly in browser |
| §5+ | Vite + TypeScript project | `npm install && npm run dev` inside the lesson folder |

Each lesson lives in a numbered subfolder, e.g. `01-jsx-rendering-markup/`.

## Reference

The production codebase this sandbox trains into is at `../crm-web`. Key files are documented in `CLAUDE.md`.
