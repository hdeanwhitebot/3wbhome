import Link from "next/link";
import { Reveal } from "@/components/scroll-reveal";

export default function HomePage() {
  return (
    <>
      {/* ═══════ HERO ═══════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-blue-600/[0.07] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />

        <div className="relative z-10 mx-auto max-w-[1200px] px-6 text-center pt-32 pb-40">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400 mb-8">
            Property Management Platform
          </p>
          <h1 className="text-[clamp(3rem,8vw,6.5rem)] font-extrabold tracking-[-0.04em] leading-[0.95] text-gradient">
            One platform.<br />Four portals.<br />Zero chaos.
          </h1>
          <p className="mt-8 text-lg md:text-xl text-white/40 max-w-xl mx-auto leading-relaxed">
            Tenants pay rent. Vendors bid on jobs. Landlords see everything. Enterprise gets analytics. All connected. All real-time.
          </p>
          <div className="mt-12 flex items-center justify-center gap-5">
            <Link href="/get-started" className="bg-white text-black font-semibold rounded-full px-8 py-3.5 text-[15px] hover:bg-white/90 transition-all hover:scale-[1.02]">
              Start free trial
            </Link>
            <Link href="/pricing" className="text-[15px] font-medium text-white/40 hover:text-white transition-colors">
              See pricing &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ METRICS BAR ═══════ */}
      <section className="border-t border-b border-white/[0.06] bg-white/[0.02]">
        <div className="mx-auto max-w-[1200px] px-6 py-14">
          <Reveal stagger>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { val: "4", label: "Dedicated portals", sub: "Resident · Vendor · Manager · Leasor" },
                { val: "98%", label: "On-time rent", sub: "With automated collection" },
                { val: "3x", label: "Faster repairs", sub: "Via vendor bidding marketplace" },
                { val: "$0", label: "For tenants & vendors", sub: "Free apps, always" },
              ].map((m) => (
                <div key={m.label} className="text-center md:text-left">
                  <div className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">{m.val}</div>
                  <div className="text-sm font-medium text-white/60 mt-2">{m.label}</div>
                  <div className="text-xs text-white/25 mt-1">{m.sub}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════ THE PROBLEM — 50/50 SPLIT ═══════ */}
      <section className="py-32 md:py-44">
        <div className="mx-auto max-w-[1200px] px-6">
          <Reveal>
            <div className="grid md:grid-cols-2 gap-20 items-start">
              <div className="sticky top-32">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/30 mb-6">The problem</p>
                <h2 className="text-4xl md:text-[3.2rem] font-extrabold tracking-[-0.03em] leading-[1.05] text-white">
                  Property management<br />runs on duct tape.
                </h2>
                <p className="mt-6 text-lg text-white/30 leading-relaxed max-w-md">
                  Paper checks. Phone tag. Spreadsheets. The entire industry is stuck — and everyone suffers for it.
                </p>
              </div>
              <div className="space-y-0">
                {[
                  { who: "Tenants", pain: "Paper checks, email threads, and 3-week work order limbo. They hate the experience before you've done anything wrong." },
                  { who: "Vendors", pain: "Phone tag, lost invoices, 45-day payment cycles. Your best contractors stop returning calls." },
                  { who: "Landlords", pain: "Spreadsheets for rent tracking. Venmo for vendor payments. Sticky notes for maintenance. Nothing connects." },
                ].map((p, i) => (
                  <div key={p.who} className={`py-8 ${i > 0 ? "border-t border-white/[0.06]" : ""}`}>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/20 mb-3">{p.who}</p>
                    <p className="text-[17px] text-white/50 leading-relaxed">{p.pain}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════ FOUR PORTALS ═══════ */}
      <section className="py-32 md:py-44 bg-[#060608]">
        <div className="mx-auto max-w-[1200px] px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400 mb-6">Four portals, one platform</p>
            <h2 className="text-4xl md:text-[3.2rem] font-extrabold tracking-[-0.03em] leading-[1.05] text-white max-w-2xl">
              Everyone gets their own experience. Everything stays connected.
            </h2>
          </Reveal>

          <div className="mt-20 grid md:grid-cols-2 gap-4">
            {[
              {
                name: "Resident", tag: "Free", accent: "from-blue-500/20 to-blue-600/5", border: "border-blue-500/10 hover:border-blue-500/25",
                desc: "Pay rent, submit work orders, view lease documents. Native iOS & Android.",
                features: ["One-click rent payment", "Photo work orders", "Lease viewer", "Push notifications"],
                href: "/residents",
              },
              {
                name: "Vendor", tag: "Free", accent: "from-amber-500/20 to-amber-600/5", border: "border-amber-500/10 hover:border-amber-500/25",
                desc: "Browse the job board, submit bids, get paid through Stripe. Build your client base.",
                features: ["Real-time job board", "Competitive bidding", "Stripe payouts", "Before/after photos"],
                href: "/vendors",
              },
              {
                name: "Manager", tag: "From $79/mo", accent: "from-emerald-500/20 to-emerald-600/5", border: "border-emerald-500/10 hover:border-emerald-500/25",
                desc: "Rent collection, lease management, vendor marketplace, financial reports. One dashboard.",
                features: ["Rent roll dashboard", "Vendor marketplace", "Lease management", "Financial exports"],
                href: "/managers",
              },
              {
                name: "Leasor", tag: "Enterprise", accent: "from-purple-500/20 to-purple-600/5", border: "border-purple-500/10 hover:border-purple-500/25",
                desc: "Portfolio analytics, bulk operations, compliance tracking. Built for 250+ units.",
                features: ["Multi-property analytics", "Bulk lease ops", "Compliance", "API access"],
                href: "/enterprise",
              },
            ].map((p) => (
              <Reveal key={p.name}>
                <Link
                  href={p.href}
                  className={`group block bg-gradient-to-br ${p.accent} border ${p.border} rounded-2xl p-8 md:p-10 transition-all duration-300 hover:-translate-y-1`}
                >
                  <div className="flex items-center justify-between mb-5">
                    <h3 className="text-xl font-bold text-white">{p.name}</h3>
                    <span className="text-[11px] font-semibold uppercase tracking-widest text-white/30">{p.tag}</span>
                  </div>
                  <p className="text-[15px] text-white/40 leading-relaxed mb-6">{p.desc}</p>
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {p.features.map((f) => (
                      <span key={f} className="text-xs text-white/25 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-white/20" />{f}
                      </span>
                    ))}
                  </div>
                  <span className="text-sm font-medium text-white/40 group-hover:text-white/70 transition-colors">
                    Learn more &rarr;
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ HOW IT WORKS ═══════ */}
      <section className="py-32 md:py-44">
        <div className="mx-auto max-w-[1200px] px-6">
          <Reveal>
            <div className="max-w-2xl mb-20">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/30 mb-6">Setup</p>
              <h2 className="text-4xl md:text-[3.2rem] font-extrabold tracking-[-0.03em] leading-[1.05] text-white">
                Live in five minutes.<br />No consultants required.
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-px bg-white/[0.06] rounded-2xl overflow-hidden">
            {[
              { n: "01", title: "Create account", desc: "Free 14-day trial. No credit card. Email and password — that's it." },
              { n: "02", title: "Add properties", desc: "Import from CSV or add manually. Set rent, attach leases, assign units." },
              { n: "03", title: "Invite everyone", desc: "Tenants and vendors get an email with their portal login. Live immediately." },
            ].map((s) => (
              <Reveal key={s.n}>
                <div className="bg-[#0a0a0c] p-10 md:p-12">
                  <span className="text-5xl font-extrabold text-white/[0.06]">{s.n}</span>
                  <h3 className="text-xl font-bold text-white mt-6 mb-3">{s.title}</h3>
                  <p className="text-[15px] text-white/35 leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ FEATURES — DARK STRIP ═══════ */}
      <section className="border-t border-b border-white/[0.06] bg-[#060608]">
        <div className="mx-auto max-w-[1200px] px-6 py-20">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/20 mb-10">Included in every plan</p>
          </Reveal>
          <Reveal stagger>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-5 gap-x-6">
              {[
                "Rent collection", "Work orders", "Lease management", "Vendor bidding",
                "Financial reports", "Automated reminders", "Document storage", "Native mobile apps",
                "Stripe payments", "Push notifications", "Tenant screening", "Tax exports",
              ].map((f) => (
                <div key={f} className="flex items-center gap-3">
                  <span className="w-1 h-1 rounded-full bg-blue-400" />
                  <span className="text-sm text-white/35">{f}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════ SOCIAL PROOF ═══════ */}
      <section className="py-32 md:py-44">
        <div className="mx-auto max-w-[1200px] px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/30 mb-6">Results</p>
            <h2 className="text-4xl md:text-[3.2rem] font-extrabold tracking-[-0.03em] leading-[1.05] text-white max-w-2xl mb-20">
              The numbers don&rsquo;t lie.
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { quote: "Rent collection went from 60% on-time to 98% in the first month. The tenant app actually got them to pay.", name: "Sarah M.", meta: "Property Manager · Tampa · 24 units" },
              { quote: "Work orders used to take 2 weeks. Now vendors bid same day and we approve by lunch. Tenants think we're wizards.", name: "Marcus T.", meta: "Portfolio Manager · Austin · 180 units" },
              { quote: "I stopped getting phone calls. That alone is worth it. Tenants use the app for everything now.", name: "Jennifer L.", meta: "Landlord · Charlotte · 12 units" },
            ].map((t) => (
              <Reveal key={t.name}>
                <div className="border border-white/[0.06] rounded-2xl p-8 h-full flex flex-col">
                  <p className="text-[15px] text-white/50 leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
                  <div className="mt-8 pt-6 border-t border-white/[0.04]">
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-white/25 mt-1">{t.meta}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ PRICING TEASER ═══════ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/[0.08] via-transparent to-purple-600/[0.05]" />
        <div className="relative mx-auto max-w-[1200px] px-6 py-32 md:py-44">
          <Reveal>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400 mb-6">Pricing</p>
                <h2 className="text-4xl md:text-[3.2rem] font-extrabold tracking-[-0.03em] leading-[1.05] text-white">
                  Simple plans.<br />No per-door fees<br />until Enterprise.
                </h2>
                <p className="mt-6 text-lg text-white/30 max-w-md leading-relaxed">
                  Tenant and vendor apps are always free. Landlords start at $79/mo.
                </p>
                <Link href="/pricing" className="inline-flex mt-8 bg-white text-black font-semibold rounded-full px-7 py-3.5 text-[15px] hover:bg-white/90 transition-all">
                  View pricing &rarr;
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { price: "$79", label: "Basic", sub: "Up to 5 units", glow: false },
                  { price: "$199", label: "Pro", sub: "Up to 20 units", glow: true },
                  { price: "Custom", label: "Enterprise", sub: "20+ units", glow: false },
                  { price: "$0", label: "Tenants & Vendors", sub: "Always free", glow: false },
                ].map((p) => (
                  <div key={p.label} className={`rounded-xl p-6 border border-white/[0.06] ${p.glow ? "bg-blue-500/[0.06] glow-blue" : "bg-white/[0.02]"}`}>
                    <div className="text-3xl font-extrabold text-white">{p.price}</div>
                    <div className="text-sm font-medium text-white/50 mt-2">{p.label}</div>
                    <div className="text-xs text-white/20 mt-1">{p.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════ FINAL CTA ═══════ */}
      <section className="py-32 md:py-44 border-t border-white/[0.06]">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <Reveal>
            <h2 className="text-4xl md:text-[4rem] font-extrabold tracking-[-0.04em] leading-[1] text-gradient max-w-3xl mx-auto">
              Property management that actually works.
            </h2>
            <p className="mt-8 text-lg text-white/30 max-w-md mx-auto">
              14-day free trial. No credit card. Live in 5 minutes.
            </p>
            <Link href="/get-started" className="inline-flex mt-12 bg-white text-black font-semibold rounded-full px-10 py-4 text-lg hover:bg-white/90 transition-all hover:scale-[1.02]">
              Start free trial
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
