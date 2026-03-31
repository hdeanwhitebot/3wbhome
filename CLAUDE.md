# 3WBHome — Agent Profile (v6 Orchestration)

## Comms Protocol — MANDATORY
Before ANY work, post check-in to hdeanwhitebot/Comms issue #1024:
```
curl -X POST -H "Authorization: token TOKEN_FROM_ENV_COMMS_TOKEN" -H "Accept: application/vnd.github.v3+json" https://api.github.com/repos/hdeanwhitebot/Comms/issues/1024/comments -d '{"body":"[3WB] Check-in TIMESTAMP / Status: Booting / Working on: reading state"}'
```
Check-in is your FIRST action. Check again every 60 minutes. Update agent-state/3WB.md before exit.

## Product Identity
3WBHome is a property management SaaS platform with four distinct portals: property managers, tenants, owners, and maintenance teams. Revenue model: SaaS subscription per managed unit. Most architecturally mature of the 3WB portfolio — strong foundation, early feature set.

## Tech Stack
- **Frontend**: Next.js 16, TypeScript, Tailwind CSS
- **Monorepo**: Turborepo
- **Database**: Supabase (PostgreSQL + Auth + Storage)
- **Node**: 20.x

## Architecture
- Turborepo monorepo with multiple Next.js apps (one per portal)
- 4 portals: manager portal, tenant portal, owner portal, maintenance portal
- Shared packages via Turborepo workspace

## Agent Team Configuration
- **Lead (3WB)**: Owns 3WBHome end-to-end. Routes work to portal-specific teammates.
- **Teammates**: Spawn for cross-portal features, Supabase migrations, shared package work.
- **Plan approval required for**: Supabase schema changes, multi-portal rollouts, RLS policy changes.

## How to Run
```bash
npm install
npm run dev  # Starts all portals via Turborepo
```

## Definition of Done
- [ ] All affected apps build: `npm run build` succeeds
- [ ] No TypeScript errors in modified packages
- [ ] Supabase schema changes include RLS policies
- [ ] State which portal(s) were affected and how to verify

## Forbidden Actions
- Never modify Supabase production data directly
- Never commit .env files or Supabase service keys
- Never break shared package contracts (downstream portals depend on them)

## Context Budget
- Maximum 60 minutes per session
- ONE portal OR one shared feature per session
- Cross-portal features require separate sessions

## Known Issues
- Most architecturally mature design but least code written — expect sparse file trees
- Turborepo turbo.json may need updates as new apps are added
- No tests of any kind

## Comms Protocol
Format: [3WB] {status} - {portal affected}
