# Home — 3wbhome.com

## Product Identity
3WB Home is a property management platform with four portals — Resident, Vendor, Manager, and Leasor (enterprise). One platform, four user types, zero friction. Residents pay rent, submit work orders. Vendors bid on jobs. Managers see everything. Leasors get portfolio analytics.

- URL: 3wbhome.com
- Status: In development
- Audience: Property managers, landlords, tenants, contractors, REITs

## Tech Stack
- **Monorepo**: Turborepo (npm workspaces)
- **Frontend**: Next.js, TypeScript, Tailwind CSS
- **Database**: Supabase (@3wb/database shared package)
- **Payments**: Stripe (@3wb/payments shared package)
- **UI**: Shared component library (@3wb/ui) with Lucide icons
- **Types**: Shared TypeScript types (@3wb/types)
- **Node**: 20.x

## Architecture
```
apps/
  resident/    — Tenant portal (pay rent, work orders, lease docs)
  vendor/      — Contractor portal (bid on jobs, manage work)
  manager/     — Property manager dashboard (full control)
  leasor/      — Enterprise/REIT portal (portfolio analytics)
packages/
  database/    — @3wb/database (Supabase client, queries)
  payments/    — @3wb/payments (Stripe integration)
  types/       — @3wb/types (shared TypeScript types)
  ui/          — @3wb/ui (shared components)
```

## How to Run
```bash
npm install
npm run dev              # All apps
npm run dev:resident     # Resident portal only
npm run dev:vendor       # Vendor portal only
npm run build            # Build all
```

## Design
See DESIGN-SPEC.md for full design system — colors, typography, portal-specific accents.
- Blue: Resident portal
- Orange: Vendor portal
- Purple: Leasor/enterprise
- Green: Money/success

## Definition of Done
- [ ] `npm run build` succeeds across all apps
- [ ] Changes in shared packages tested against all consuming apps
- [ ] UI matches DESIGN-SPEC.md tokens and patterns
- [ ] Diff is focused — one portal or one package per change
- [ ] State what was changed and how to verify

## Known Issues
- Leasor app has no package.json (not scaffolded yet)
- Early development — most features not yet built
- No tests

## Forbidden Actions
- Never modify @3wb/database schema without checking all four apps
- Never commit .env files or Supabase keys
- Never mix changes across multiple apps in one commit
- Never deviate from DESIGN-SPEC.md color/typography tokens

## Quality Gate
1. `npm run build` must pass (all apps via turbo)
2. If shared package changed, verify all four apps still build
3. No .env values in diff
4. Review by lead (Mia) before merge
