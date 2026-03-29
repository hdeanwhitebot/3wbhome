import Link from "next/link";

const features = [
  { title: "Multi-Property Dashboards", desc: "See every property, every unit, every tenant in one view. Filter by region, asset class, or manager. Real-time occupancy and revenue." },
  { title: "Portfolio Analytics", desc: "Rent collection rates, maintenance spend, vacancy trends, and NOI by property — all in one dashboard. Export to your investors." },
  { title: "Bulk Lease Operations", desc: "Renew, terminate, or modify leases in bulk. Upload CSVs. Set rules. The platform handles the rest." },
  { title: "Compliance Tracking", desc: "Track inspection schedules, certifications, insurance renewals, and regulatory requirements across your entire portfolio. Never miss a deadline." },
  { title: "Team Management", desc: "Assign properties to managers. Set permissions. Track activity. Every team member gets exactly the access they need." },
  { title: "Custom Integrations & API", desc: "Connect 3WB Home to your accounting system, CRM, or BI tool. Full REST API. Webhooks for real-time events. We build custom integrations for Enterprise." },
];

const logos = [
  "Multi-family operators",
  "REITs",
  "Property management firms",
  "Student housing companies",
  "Mixed-use developers",
  "Institutional investors",
];

export default function EnterprisePage() {
  return (
    <>
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-purple-600 mb-4">For Enterprise</p>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 max-w-3xl">
            Portfolio analytics and compliance for property companies managing 250+ units.
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl leading-relaxed">
            3WB Home Enterprise gives REITs, operators, and management firms the visibility, automation, and control they need at scale.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link href="#" className="bg-purple-600 text-white font-semibold rounded-lg px-8 py-3.5 hover:bg-purple-500 transition-colors">
              Request Demo
            </Link>
            <Link href="#" className="border-2 border-purple-600 text-purple-600 font-semibold rounded-lg px-8 py-3.5 hover:bg-purple-50 transition-colors">
              Talk to Sales
            </Link>
          </div>
        </div>
      </section>

      {/* Built for */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-[1200px] px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-400 text-center mb-8">Built For</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {logos.map((l) => (
              <div key={l} className="bg-white rounded-xl px-6 py-4 border border-gray-100 text-center">
                <span className="text-sm font-medium text-gray-700">{l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 text-center mb-16">
            Enterprise-grade property management.
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

      {/* Enterprise pricing */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="mx-auto max-w-[800px] px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">Custom pricing for your portfolio.</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
            Custom pricing tailored to your portfolio. White-label options available. Dedicated account manager included.
          </p>
          <div className="mt-10 bg-white rounded-2xl p-8 border border-gray-200 text-left">
            <h3 className="font-bold text-gray-900 mb-4">What's included:</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                "Everything in Pro",
                "Leasor portal + analytics",
                "Bulk lease operations",
                "Multi-entity consolidation",
                "Compliance tracking",
                "API access & webhooks",
                "White-label mobile apps",
                "Dedicated account manager",
                "SLA-backed uptime",
                "Custom onboarding",
              ].map((f) => (
                <div key={f} className="flex items-center gap-2.5 text-sm text-gray-600">
                  <svg className="w-4 h-4 text-purple-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {f}
                </div>
              ))}
            </div>
          </div>
          <Link href="#" className="inline-block mt-8 bg-purple-600 text-white font-semibold rounded-lg px-10 py-4 text-lg hover:bg-purple-500 transition-colors">
            Schedule a Demo
          </Link>
        </div>
      </section>
    </>
  );
}
