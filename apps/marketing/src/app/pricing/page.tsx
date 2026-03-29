import Link from "next/link";

const tiers = [
  {
    name: "Basic",
    price: "$79",
    unit: "/ month",
    description: "Up to 5 units",
    features: [
      "Resident portal + iOS & Android app",
      "Online rent collection (Stripe ACH & card)",
      "Work order submission with photos",
      "Vendor marketplace — post jobs, get bids",
      "Lease document storage & viewer",
      "Automated rent reminders & late notices",
      "Tenant & vendor push notifications",
      "Financial dashboard & rent roll",
      "Email support",
    ],
    cta: "Start Free Trial",
    href: "/get-started",
    popular: false,
  },
  {
    name: "Pro",
    price: "$199",
    unit: "/ month",
    description: "Up to 20 units",
    features: [
      "Everything in Basic",
      "Vendor portal + iOS & Android app",
      "Competitive bidding & vendor ratings",
      "Maintenance-to-job pipeline (1-click)",
      "Lease management, renewals & e-sign",
      "Owner financial reports & tax exports",
      "Approved vendor list management",
      "Multi-property analytics dashboard",
      "Priority support & onboarding call",
    ],
    cta: "Start Free Trial",
    href: "/get-started",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    unit: "pricing",
    description: "20+ units — tailored to your portfolio",
    features: [
      "Everything in Pro",
      "Leasor portal + portfolio analytics",
      "Bulk lease operations & renewals",
      "Multi-entity financial consolidation",
      "Compliance tracking & audit logs",
      "Custom integrations & API access",
      "White-label tenant & vendor apps",
      "Dedicated account manager",
      "SLA-backed uptime guarantee",
    ],
    cta: "Contact Sales",
    href: "#",
    popular: false,
  },
];

const faqs = [
  { q: "What's included in the free trial?", a: "Full access to all features in your selected tier for 14 days. No credit card required. All your data carries over if you subscribe." },
  { q: "How does billing work?", a: "You're billed monthly based on your total unit count. Add or remove units anytime — billing adjusts automatically." },
  { q: "Can I cancel anytime?", a: "Yes. No contracts, no cancellation fees. Your data is exported on request." },
  { q: "Do tenants pay a fee?", a: "No. Tenants use the resident portal for free. A small convenience fee applies to card payments (passed to tenant or absorbed by landlord — your choice)." },
  { q: "Is Stripe required?", a: "Stripe powers all payments. Setup takes 5 minutes and there are no additional fees beyond standard Stripe processing (2.9% + 30¢)." },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-4">Transparent Pricing</p>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            Pay per unit. Scale as you grow.
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto">
            No setup fees. No hidden costs. Cancel anytime.
          </p>
        </div>
      </section>

      {/* Tiers */}
      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl p-8 border ${
                  tier.popular
                    ? "border-blue-600 ring-2 ring-blue-600 bg-white shadow-lg"
                    : "border-gray-200 bg-white"
                } relative`}
              >
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                    Popular
                  </span>
                )}
                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">{tier.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-5xl font-extrabold text-gray-900">{tier.price}</span>
                  <span className="text-gray-500 text-sm">{tier.unit}</span>
                </div>
                <p className="text-sm text-gray-500 mb-8">{tier.description}</p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={tier.href}
                  className={`block text-center font-semibold rounded-lg px-6 py-3 transition-colors ${
                    tier.popular
                      ? "bg-blue-600 text-white hover:bg-blue-500"
                      : "border-2 border-gray-200 text-gray-900 hover:border-blue-600 hover:text-blue-600"
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="mx-auto max-w-[800px] px-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 text-center mb-12">
            Frequently asked questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
