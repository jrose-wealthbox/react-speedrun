# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Purpose

This is a React learning sandbox for an experienced Rails/Angular engineer learning React as used in the **crm-web** monolith (`../crm-web`). The curriculum is in `react-learning-curriculum.html`. Each lesson lives in a numbered subfolder (e.g. `01-jsx-rendering-markup/`).

The goal is not generic React — it's React as practiced in crm-web. When writing exercises, prefer the patterns crm-web enforces over textbook defaults, even when they're stricter than necessary for a toy example.

## Exercise Structure

Each lesson subfolder follows the numbered sections of the curriculum (§1–§18). Exercises are either:
- **Single HTML files** — for early lessons (§1–§4); load React from CDN via `type="text/babel"`. No tooling required.
- **Vite + TypeScript projects** — for later lessons (§5+) where TypeScript, hooks, and multi-file components matter. Scaffold with `npm create vite@latest . -- --template react-ts`.

To run a Vite exercise: `npm install && npm run dev` inside the lesson folder.

## Reference Codebase

The production codebase being learned into is at `../crm-web`. Key reference files:

| Concept | crm-web file |
|---------|-------------|
| Small stateful component | `app/javascript/components/SidebarBadge.tsx` |
| Kanban list + keys | `app/javascript/custom_objects/index/components/KanbanColumn.tsx` |
| MutationObserver effect | `app/javascript/sidebar/use_more_nav_open_state.ts` |
| 50+ custom hooks | `app/javascript/hooks/` |
| Context for surface identity | `app/javascript/ai_assistant/hooks/ChatSurfaceContext.tsx` |
| Redux slice | `app/javascript/state/tasks_slice.ts` |
| React Query + mutations | `app/javascript/developer_portal/integration-webhooks/hooks/useWebhookEndpoint.ts` |
| Error boundary around charts | `app/javascript/charts/components/ChartFrame.tsx` |
| Rails ↔ React mounting bridge | `app/javascript/shared/components/register_component.tsx` |
| React mounting patterns (6 patterns) | `../crm-web/.claude/rules/react/react-patterns.md` |

## crm-web Conventions to Internalize

These override generic React advice. Practice them in exercises from the relevant section onward.

### `useEffect` is almost never written directly in components
The repo enforces this with ESLint. The sanctioned alternatives:
- `useMountEffect(fn)` — run-once-on-mount (wraps `useEffect(fn, [])`)
- A purpose-named custom hook — for prop-dependent subscriptions (e.g. `useMySubscription(id)`)

Full rules: `../crm-web/.claude/rules/react/react-use-effect.md`

### Derive state, don't sync it
`useEffect(() => setX(deriveFromY(y)), [y])` will be flagged in review. Compute derived values inline during render.

### Stack
React 18.3.1 · TypeScript 5 · function components only (no class components except error boundaries) · Redux Toolkit · TanStack React Query v4 · react-hook-form · dnd-kit.

### Mounting in crm-web (§17)
React components are mounted into Rails views via `registerComponent` (the default) or 5 other patterns for edge cases. The wrong pattern causes memory leaks or broken Turbolinks navigation. Don't attempt §17 exercises until §1–§16 are solid.

### Work on main

This is a single-user, learning exercise repo. Work on git's `main` branch unless told otherwise.