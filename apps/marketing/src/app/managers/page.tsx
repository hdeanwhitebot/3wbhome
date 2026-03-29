import Link from "next/link";

const features = [
  { title: "Rent Collection Dashboard", desc: "See who paid, who's late, and who's overdue — at a glance. Automatic ACH and card processing via Stripe. Late fee automation." },
  { title: "Property & Lease Management", desc: "Every property, unit, tenant, and lease in one place. Renewal tracking, e-sign, document storage. No more spreadsheets." },
  { title: "Work Order Approval", desc: "Tenants submit work orders with photos. You approve, post to the vendor marketplace, review bids, and award — all in the app." },
  { title: "Vendor Marketplace", desc: "Post maintenance jobs and get competitive bids from verified vendors. Build your approved vendor list. Pay through the platform." },
  { title: "Financial Reports", desc: "Rent roll, income/expense by property, owner statements, and tax-ready exports. Real-time numbers, not month-old spreadsheets." },
  { title: "Automated Reminders", desc: "Rent due reminders, late notices, lease renewal alerts — all automated. Stop chasing tenants. The system does it for you." },
];

const stats = [
  { value: "98%", label: "On-time rent collection" },
  { value: "3x", label: "Faster work order resolution" },
  { value: "5 min", label: "Average time to go live" },
  { value: "4", label: "Dedicated portals included" },
];

export default function ManagersPage() {
  return (
    <>
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600 mb-4">For Property Managers</p>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 max-w-3xl">
            Track everything. Automate rent. Manage vendors. All in one place.
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl leading-relaxed">
            3WB Home replaces your spreadsheets, email threads, and phone calls with one platform that manages tenants, vendors, leases, and finances.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link href="/get-started" className="bg-emerald-600 text-white font-semibold rounded-lg px-8 py-3.5 hover:bg-emerald-500 transition-colors">
              Start Free Trial
            </Link>
            <Link href="#features" className="border-2 border-emerald-600 text-emerald-600 font-semibold rounded-lg px-8 py-3.5 hover:bg-emerald-50 transition-colors">
              See Dashboard Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-4xl md:text-5xl font-extrabold text-gray-900">{s.value}</div>
                <div className="text-sm text-gray-500 mt-2">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 text-center mb-16">
            Full property management. Zero spreadsheets.
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((f) => (
              <div key={f.title} className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{f.title}</h3>
                <p className="text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-emerald-600">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Stop managing properties.<br />Start managing a business.
          </h2>
          <Link href="/get-started" className="inline-block mt-10 bg-white text-emerald-700 font-semibold rounded-lg px-10 py-4 text-lg hover:bg-emerald-50 transition-colors">
            Start Free Trial — 14 Days
          </Link>
          <p className="mt-4 text-sm text-white/70">No credit card required. No setup fees.</p>
        </div>
      </section>
    </>
  );
}
