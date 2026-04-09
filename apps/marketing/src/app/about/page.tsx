import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About 3WB Home — Our Story",
  description: "3WB Holdings builds technology for property management. Founded to eliminate chaos and bring clarity to residential real estate.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 md:py-32 pt-40">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-4">Our Story</p>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            About 3WB Home
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto">
            We're on a mission to eliminate the chaos of paper checks, phone tag, and spreadsheet hell.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 md:py-32 border-t border-gray-200">
        <div className="mx-auto max-w-[800px] px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">How it all started</h2>
          <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
            <p>
              3WB Holdings was founded with a simple observation: property management is stuck in 1995. Landlords collect rent via checks and Venmo. Vendors wait weeks for payment. Tenants submit work orders on paper or email threads that disappear into the void. Nobody's happy.
            </p>
            <p>
              We decided to build something different. A platform that connects everyone — tenants, vendors, managers, and owners — in one place. Where rent gets collected automatically. Where vendors bid on jobs in real-time. Where landlords see everything that matters.
            </p>
            <p>
              The result is 3WB Home: four dedicated portals, one connected platform, zero chaos. We're not here to add another layer of complexity. We're here to strip it away.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 bg-gray-50 border-t border-b border-gray-200">
        <div className="mx-auto max-w-[1200px] px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">What we believe</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Simplicity wins",
                desc: "Complexity kills adoption. We obsess over making things simple — not just for one user, but for all four personas on the platform."
              },
              {
                title: "Real-time is essential",
                desc: "Rent should post instantly. Vendors should bid the same day. Landlords should know what's happening before breakfast."
              },
              {
                title: "Everyone deserves a great experience",
                desc: "Tenants get a native app. Vendors get a marketplace. Managers get a dashboard. No one gets half-baked features."
              },
            ].map((v) => (
              <div key={v.title} className="p-8 rounded-xl border border-gray-200 bg-white">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{v.title}</h3>
                <p className="text-gray-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our team</h2>
          <p className="text-gray-600 text-lg mb-12">
            We're a small, focused team building for property managers who are tired of broken tools. New members are always welcome.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Dean White",
                role: "Founder & CEO",
                bio: "Former property manager frustrated with spreadsheets. Built the first version in a weekend."
              },
              {
                name: "Expanding",
                role: "Our team is growing",
                bio: "We're hiring engineers, designers, and people who care about property management. Interested? Get in touch."
              },
            ].map((m) => (
              <div key={m.name} className="p-8 rounded-xl border border-gray-200 bg-white">
                <h3 className="text-lg font-semibold text-gray-900">{m.name}</h3>
                <p className="text-sm text-blue-600 font-medium mt-1">{m.role}</p>
                <p className="text-gray-600 mt-4 leading-relaxed">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 md:py-32 border-t border-gray-200">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our mission</h2>
          <p className="text-2xl text-blue-600 font-semibold max-w-2xl mx-auto leading-relaxed">
            One platform, four portals, zero friction.
          </p>
          <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto">
            We're building the operating system for residential property management. Where every stakeholder gets value, and chaos gets replaced with clarity.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 border-t border-gray-200">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Ready to experience the difference?</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Link
              href="/get-started"
              className="bg-blue-600 text-white font-semibold rounded-full px-8 py-3.5 text-[15px] hover:bg-blue-500 transition-all hover:scale-[1.02]"
            >
              Start free trial
            </Link>
            <Link
              href="/pricing"
              className="text-[15px] font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              View pricing &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
