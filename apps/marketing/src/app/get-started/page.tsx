import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Start Your Free Trial — 3WB Home",
  description: "Create your 3WB Home account today. 14 days free. No credit card required. Full access to all features.",
};

export default function GetStartedPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 md:py-32 pt-40">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-4">Get Started</p>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            Start Your Free Trial
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto">
            14 days free. No credit card required. Full access to all features.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 md:py-32 border-t border-gray-200">
        <div className="mx-auto max-w-[500px] px-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 md:p-10">
            <form className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              {/* Company */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  placeholder="Your company name"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              {/* Units */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Units
                </label>
                <select className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 text-gray-900 focus:outline-none focus:border-blue-500 transition-colors">
                  <option value="">Select your portfolio size</option>
                  <option value="1-5">1–5 units</option>
                  <option value="6-25">6–25 units</option>
                  <option value="26-100">26–100 units</option>
                  <option value="100+">100+ units</option>
                </select>
              </div>

              {/* CTA Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg py-3 transition-colors mt-6"
              >
                Create Account
              </button>
            </form>

            {/* Login Link */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <Link href="/login" className="text-blue-600 hover:text-blue-500 transition-colors">
                  Sign in
                </Link>
              </p>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 space-y-3">
            {[
              "✓ No credit card required",
              "✓ Cancel anytime",
              "✓ Full access to all features",
            ].map((badge) => (
              <p key={badge} className="text-center text-sm text-gray-600">
                {badge}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ / Benefits Section */}
      <section className="py-24 md:py-32 border-t border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-[1200px] px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What's included</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Resident Portal",
                desc: "Tenants pay rent online, submit work orders, and view lease documents. Available on iOS and Android."
              },
              {
                title: "Vendor Marketplace",
                desc: "Post maintenance jobs, get competitive bids from vetted vendors, and track progress in real-time."
              },
              {
                title: "Lease Management",
                desc: "Store, organize, and manage all your lease documents. E-signature ready for renewals."
              },
              {
                title: "Financial Dashboard",
                desc: "Real-time rent collection tracking, late payment alerts, and tax-ready financial reports."
              },
              {
                title: "Mobile Apps",
                desc: "Native apps for residents and vendors. Push notifications keep everyone in the loop."
              },
              {
                title: "Priority Support",
                desc: "Email support, onboarding call, and documentation to get you live in minutes."
              },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-lg border border-gray-200 bg-white">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 border-t border-gray-200">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Join property managers taking control
          </h2>
          <p className="text-gray-600 text-lg mb-10 max-w-xl mx-auto">
            Start your free trial today. See why 500+ landlords have switched.
          </p>
          <Link
            href="/get-started"
            className="inline-block bg-blue-600 text-white font-semibold rounded-full px-10 py-4 text-lg hover:bg-blue-500 transition-all hover:scale-[1.02]"
          >
            Start 14-Day Free Trial
          </Link>
        </div>
      </section>
    </>
  );
}
