# 3WB Home — Public Marketing Site Design Spec

**Target:** Public-facing marketing site at `3wbhome.com`  
**Purpose:** Drive signups for Residents, Vendors, Managers, and Leasors  
**Vibe:** Enterprise-friendly but approachable. Clean, modern, trustworthy. NOT a SaaS template.  
**Audience:** Property managers, landlords, tenants, contractors, REITs

---

## Design Philosophy

**Property management is messy.** Paper checks. Email threads. Phone tag. Lost invoices. Late rent. Vendors ghosting. Tenants waiting weeks for repairs.

3WB Home fixes it with **one platform, four portals, zero friction.** Residents pay rent instantly. Vendors bid on jobs in real-time. Managers see everything. Enterprise companies get portfolio analytics.

The design should **feel like control** — clean dashboards, clear CTAs, enterprise credibility without corporate stiffness.

---

## Global Design Tokens

### Color Palette

| Token | Value | Use |
|-------|-------|-----|
| `--3wb-white` | `#ffffff` | Primary background |
| `--3wb-off-white` | `#fafafa` | Subtle section backgrounds |
| `--3wb-gray-50` | `#f9fafb` | Card backgrounds |
| `--3wb-gray-100` | `#f3f4f6` | Dividers, borders |
| `--3wb-gray-200` | `#e5e7eb` | Strong borders |
| `--3wb-gray-600` | `#4b5563` | Secondary text |
| `--3wb-gray-900` | `#111827` | Primary text, headlines |
| `--3wb-blue` | `#2563eb` | Primary CTA, links (Resident portal color) |
| `--3wb-blue-light` | `#3b82f6` | Hover states |
| `--3wb-green` | `#10b981` | Success, payments, positive metrics |
| `--3wb-orange` | `#f59e0b` | Vendor/contractor accent |
| `--3wb-purple` | `#8b5cf6` | Leasor/enterprise accent |

**Rule:** Light background, dark text. Clean and readable. Blue is the primary brand color. Green = money/success. Orange = vendors. Purple = enterprise.

### Typography

| Element | Font | Weight | Size (desktop) | Line Height |
|---------|------|--------|----------------|-------------|
| Hero headline | Inter | 800 | 64px | 1.1 |
| Section headline | Inter | 700 | 48px | 1.2 |
| Subheadline | Inter | 400 | 20px | 1.6 |
| Body | Inter | 400 | 16px | 1.6 |
| Overline label | Inter | 600 | 14px (uppercase) | 1.4 |
| Stat number | Inter | 800 | 56px | 1.1 |
| CTA button | Inter | 600 | 16px | 1 |

**Rule:** Inter for everything. Bold headlines, readable body. Numbers are BIG.

### Spacing

- **Section padding:** 120px vertical on desktop, 80px on mobile
- **Content max-width:** 1200px
- **Between headline and subhead:** 24px
- **Between sections:** 160px vertical gap

### Buttons

- **Primary:** `bg-blue-600 text-white font-semibold rounded-lg px-6 py-3` — solid blue
- **Secondary:** `border-2 border-blue-600 text-blue-600 rounded-lg px-6 py-3` — outlined
- **Tertiary:** `text-blue-600 underline` — text link
- **Hover:** Primary → `bg-blue-500`, Secondary → `bg-blue-50`

---

## Navigation

**Desktop:**
```
[3WB Home Logo]         [For Residents]  [For Vendors]  [For Managers]  [Enterprise]     [Login]  [Get Started →]
```

**Style:**
- White background, subtle bottom border (`border-b border-gray-100`)
- Logo: "3WB Home" in Inter Bold, gray-900
- Links: gray-600, hover → gray-900
- CTA: Solid blue button
- **Sticky on scroll**

**Mobile:** Hamburger → full-screen menu (white bg, centered links)

---

## Page 1: HOMEPAGE

### Section 1 — Hero
*Full viewport. White background. Clean and confident.*

```
[overline — Inter 600, blue-600, uppercase]
PROPERTY MANAGEMENT SOFTWARE

[headline — 64px, gray-900, tight]
One platform.
Four portals.
Zero chaos.

[subheadline — 20px, gray-600, max-width 600px]
Tenants pay rent instantly. Vendors bid in real-time.
Landlords see everything. Enterprise companies get portfolio analytics.

[Two CTAs side by side]
[Start Free Trial →]     [Watch Demo (2 min)]
```

**Visual:** Clean hero illustration or screenshot montage showing all 4 portal dashboards tiled together. Or just typography with a subtle gradient background (white → gray-50).

**Animation:** Fade-in on load, no gimmicks.

---

### Section 2 — The Problem (Context)
*White bg, centered text, max-width 800px*

```
[overline] THE OLD WAY

[headline — 48px]
Property management
is still stuck in 2005.

[Three-column pain points]

┌─────────────────┐   ┌─────────────────┐   ┌─────────────────┐
│  TENANTS         │   │  VENDORS         │   │  LANDLORDS       │
│                  │   │                  │   │                  │
│  Paper checks    │   │  Phone tag       │   │  Spreadsheet     │
│  Late fees       │   │  Lost invoices   │   │  hell            │
│  Email threads   │   │  Payment delays  │   │  No visibility   │
│  Work order      │   │  No transparency │   │  Manual          │
│  limbo           │   │                  │   │  everything      │
└─────────────────┘   └─────────────────┘   └─────────────────┘
```

**Style:** Light gray cards with subtle shadows. Text in gray-600. Centered.

---

### Section 3 — The Solution (Four Portals)
*Off-white background, large section*

```
[overline] ONE PLATFORM, FOUR EXPERIENCES

[headline]
Built for everyone in the property ecosystem.

[Four portal cards — 2x2 grid on desktop, stack on mobile]

┌────────────────────────────────────────┐
│  [blue icon]  RESIDENT PORTAL          │
│                                         │
│  • Pay rent with one click             │
│  • Submit work orders with photos      │
│  • View lease documents 24/7           │
│  • Get instant notifications           │
│                                         │
│  [For Tenants →]                       │
└────────────────────────────────────────┘

┌────────────────────────────────────────┐
│  [orange icon]  VENDOR PORTAL          │
│                                         │
│  • Browse job board                    │
│  • Bid on work orders                  │
│  • Invoice instantly                   │
│  • Get paid via Stripe                 │
│                                         │
│  [For Contractors →]                   │
└────────────────────────────────────────┘

┌────────────────────────────────────────┐
│  [green icon]  MANAGER PORTAL          │
│                                         │
│  • Track rent collection                │
│  • Manage properties & leases           │
│  • Approve work orders                  │
│  • View financial reports               │
│                                         │
│  [For Landlords →]                     │
└────────────────────────────────────────┘

┌────────────────────────────────────────┐
│  [purple icon]  LEASOR PORTAL          │
│                                         │
│  • Portfolio analytics                  │
│  • Bulk lease management                │
│  • Compliance tracking                  │
│  • Multi-property dashboards            │
│                                         │
│  [For Enterprise →]                    │
└────────────────────────────────────────┘
```

**Style:** White cards with subtle shadows, rounded corners (14px). Icon at top-left. Bullet points in gray-600. CTA is text link in matching accent color.

---

### Section 4 — How It Works
*White bg, three-step flow*

```
[overline] SIMPLE SETUP

[headline]
Go live in 3 steps.

[Three horizontal cards with numbers]

┌─────────────────────────────────────────────┐
│  01                                          │
│                                              │
│  Create your account                         │
│  Free 14-day trial. No credit card required.│
│                                              │
│  [5 minutes]                                 │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  02                                          │
│                                              │
│  Add properties and tenants                  │
│  Bulk import from CSV or add manually.       │
│                                              │
│  [15 minutes]                                │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  03                                          │
│                                              │
│  Invite residents and vendors                │
│  They get instant portal access via email.   │
│                                              │
│  [Done]                                      │
└─────────────────────────────────────────────┘
```

**Style:** Minimal cards, large "01" in light gray (200px font size, opacity 0.1) as background. Clean text overlay.

---

### Section 5 — Features Grid
*Gray-50 background, feature callouts*

```
[headline — centered]
Everything property managers need.

[6-column feature grid]

• Rent Collection        • Lease Management
• Work Orders           • Vendor Bidding
• Document Storage      • Payment Processing
• Maintenance Tracking  • Financial Reports
• Tenant Screening      • Expense Management
• Automated Reminders   • Mobile Apps
```

**Style:** 3 columns on desktop, 1 on mobile. Each feature is just text with a small checkmark icon. Clean and scannable.

---

### Section 6 — Social Proof
*White bg, centered testimonials*

```
[overline] TRUSTED BY PROPERTY MANAGERS

[headline]
Real results from real managers.

[Three testimonial cards]

┌─────────────────────────────────────────┐
│  "Rent collection went from 60% on-time │
│   to 98% in the first month."           │
│                                          │
│   Sarah M.                               │
│   Property Manager, Tampa FL             │
│   24 units                               │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│  "Work orders close 3x faster with      │
│   vendor bidding."                       │
│                                          │
│   Marcus T.                              │
│   Portfolio Manager, Austin TX           │
│   180 units                              │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│  "Finally, a platform tenants actually  │
│   use. No more phone calls."            │
│                                          │
│   Jennifer L.                            │
│   Independent Landlord, Charlotte NC     │
│   12 units                               │
└─────────────────────────────────────────┘
```

**Style:** Light gray cards, quote in gray-900, attribution in gray-600. No star ratings. Clean and credible.

---

### Section 7 — Pricing Teaser
*Blue-600 background, white text, full-width*

```
[headline — white, 48px]
Pricing that scales with you.

[subheadline — white, opacity 0.9]
From independent landlords to REITs.
Pay per unit, per month. No setup fees.

[CTA — white button with blue text]
[See Pricing →]
```

**Style:** Solid blue section. White text. Clean and confident. Links to /pricing page.

---

### Section 8 — Final CTA
*White bg, centered, minimal*

```
[headline — 56px]
Ready to modernize your
property management?

[CTA]
[Start Free Trial — 14 Days →]

[small text below]
No credit card required. Cancel anytime.
```

**Style:** Just text and a button. Nothing else. Clean close.

---

## Page 2: PRICING

### Hero
```
[overline] TRANSPARENT PRICING
[headline] Pay per unit. Scale as you grow.
[sub] No setup fees. No hidden costs. Cancel anytime.
```

### Pricing Tiers
*Three cards side-by-side*

```
┌─────────────────────────────────────┐
│  STARTER                             │
│  $4 / unit / month                   │
│                                      │
│  ✓ Resident portal                   │
│  ✓ Rent collection                   │
│  ✓ Work orders                       │
│  ✓ Document storage                  │
│  ✓ Mobile apps                       │
│                                      │
│  Perfect for: 1-25 units             │
│                                      │
│  [Start Free Trial]                  │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│  PROFESSIONAL            [POPULAR]   │
│  $3 / unit / month                   │
│                                      │
│  ✓ Everything in Starter             │
│  ✓ Vendor portal                     │
│  ✓ Lease management                  │
│  ✓ Financial reports                 │
│  ✓ Automated reminders               │
│  ✓ Priority support                  │
│                                      │
│  Perfect for: 25-250 units           │
│                                      │
│  [Start Free Trial]                  │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│  ENTERPRISE                          │
│  Custom pricing                      │
│                                      │
│  ✓ Everything in Professional        │
│  ✓ Leasor portal                     │
│  ✓ Portfolio analytics               │
│  ✓ Bulk operations                   │
│  ✓ Compliance tracking               │
│  ✓ Dedicated account manager         │
│  ✓ Custom integrations               │
│                                      │
│  Perfect for: 250+ units, REITs      │
│                                      │
│  [Contact Sales]                     │
└─────────────────────────────────────┘
```

**Style:** Clean white cards. "POPULAR" badge on middle tier (blue pill). Checkmarks in green. Pricing in big bold numbers.

### FAQ Below Pricing
*Accordion style, common questions*

- What's included in the free trial?
- How does billing work?
- Can I cancel anytime?
- Do tenants pay a fee?
- Is Stripe required?

---

## Page 3: FOR RESIDENTS

*Focused on tenant benefits*

### Hero
```
[overline] FOR TENANTS
[headline] Pay rent, submit work orders, view documents — all from your phone.
[CTA] [Download the App] [See How It Works]
```

### Features
- One-click rent payment
- Work order submission with photos
- Lease document access
- Maintenance status tracking
- Instant notifications

### Screenshot Gallery
*Show mobile app UI — dashboard, pay rent screen, work order form*

---

## Page 4: FOR VENDORS

*Focused on contractor benefits*

### Hero
```
[overline] FOR CONTRACTORS
[headline] Find jobs, bid on work, get paid faster.
[CTA] [Sign Up as Vendor] [Browse Jobs]
```

### Features
- Real-time job board
- Instant bidding
- Stripe-powered payments
- Build landlord relationships
- Invoice directly through platform

---

## Page 5: FOR MANAGERS

*Focused on landlord/PM benefits*

### Hero
```
[overline] FOR PROPERTY MANAGERS
[headline] Track everything. Automate rent. Manage vendors. All in one place.
[CTA] [Start Free Trial] [See Dashboard Demo]
```

### Features
- Property and lease management
- Rent collection dashboard
- Work order approval
- Financial reporting
- Vendor management
- Bulk operations

---

## Page 6: ENTERPRISE

*Focused on REITs, leasing companies*

### Hero
```
[overline] FOR ENTERPRISE
[headline] Portfolio analytics and compliance for property companies managing 250+ units.
[CTA] [Request Demo] [Talk to Sales]
```

### Features
- Multi-property dashboards
- Portfolio-level analytics
- Bulk lease management
- Compliance tracking
- Team management
- Custom integrations
- Dedicated account manager

---

## Footer

```
3WB Home            PRODUCT                  COMPANY              SUPPORT
                    For Residents            About                Help Center
                    For Vendors              Pricing              Contact
                    For Managers             Blog                 Terms
                    Enterprise               Careers              Privacy

© 2026 3WB Holdings, LLC. All rights reserved.
```

---

## Brand Assets Needed

### Logo
- Wordmark: "3WB Home" in Inter Bold
- Icon mark: Simple house icon or "3WB" monogram
- Color: Gray-900 for light backgrounds, white for dark

### Colors
- Primary: Blue-600 (#2563eb)
- Success: Green-500 (#10b981)
- Vendor accent: Orange-500 (#f59e0b)
- Enterprise accent: Purple-500 (#8b5cf6)

### Illustrations
- Four portal dashboard screenshots
- Mobile app mockups (Resident portal)
- Abstract property/building illustrations (optional)

---

## Technical Stack

- **Framework:** Next.js 16 (same as portals)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion (scroll reveals, fade-ins)
- **Fonts:** Inter via `next/font/google`
- **Hosting:** Vercel
- **Domain:** 3wbhome.com

---

## Responsive Notes

- **Desktop:** 1200px max-width container, generous padding
- **Tablet:** Stack grids to 2 columns, reduce font sizes 10-15%
- **Mobile:** Single column, 80px section padding, hero headline 40px

---

## What This Is NOT

- Not a generic SaaS template with gradient heroes
- Not cluttered with feature grids and badges
- Not aggressive — calm, confident, enterprise-friendly
- Not dark mode — clean white/light gray for credibility

---

**This is a B2B property management platform.** The design should feel **professional, modern, and trustworthy** — like Stripe, Gusto, or Notion. Clean typography, generous whitespace, clear value props, zero fluff.

---

*Design spec v1.0 — 3WB Home Public Site — 2026-03-28*
