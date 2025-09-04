<!--
Use this template to describe changes. This replaces ad-hoc change logs.
Keep the PR focused and validate using the commands/checklist below.
-->

## Why

<!-- What problem are we solving? User impact or goal. -->

## What

<!-- Concise summary of changes (user-visible + internal). -->

## How

<!-- Key implementation notes, tradeoffs, and alternatives considered. -->

## Risk / Impact

<!-- Areas of potential regression, roll-back plan if needed. -->

## Validation

Commands run locally:

```bash
npm run check
npm run build
npm test
# optional: npm start  # then verify routes and UI manually
```

Manual checks (as applicable):
- [ ] Homepage renders without errors
- [ ] No layout shift (CLS) on hero/above-the-fold
- [ ] New UI accessible via keyboard and labeled correctly
- [ ] New/changed API endpoints respond as expected

## Screenshots / Recordings

<!-- Before/After visuals for UI changes. -->

## API Changes (if any)

- Endpoint(s): <!-- e.g., POST /api/quotes -->
- Request/Response contract: <!-- Summarize schema or changes -->
- Storage impact: <!-- MemStorage only or adapter updated? -->

## Checklist

- [ ] Minimal, focused diff (no unrelated refactors)
- [ ] Reused existing components/utilities; no duplication
- [ ] Tokenized styles (no raw hex/magic spacing)
- [ ] Accessibility considered (labels, roles, focus, keyboard)
- [ ] Performance: reserved image space; lazy where appropriate
- [ ] Images via `optimized-image`; icons via centralized `Icon`
- [ ] Updated docs in `docs/` or `AGENTS.md` if adding a new pattern
- [ ] Updated smoke tests if API contract changed
- [ ] `npm run check` passes
- [ ] `npm run build` passes
- [ ] `npm test` (smoke) passes locally
- [ ] Screenshots/recordings attached (UI)
- [ ] Rollback plan noted if risk is non-trivial

## Links

- Issue/Ticket: <!-- #123 or link -->
- Related docs: <!-- docs/... or external reference -->

