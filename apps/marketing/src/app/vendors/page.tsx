import Link from "next/link";

const features = [
  { title: "Real-Time Job Board", desc: "Browse open jobs from property managers in your area. Filter by category, location, and budget. New jobs hit your feed instantly." },
  { title: "Bid or Claim Instantly", desc: "Fixed-price jobs? Claim them with one tap. Competitive jobs? Submit your bid with timeline and notes. Landlords compare and award." },
  { title: "Get Paid via Stripe", desc: "No more chasing invoices. When a job is marked complete, payment hits your Stripe account. Fast, automatic, transparent." },
  { title: "Build Your Reputation", desc: "Completed jobs build your rating. High-rated vendors get first access to jobs from landlords who approve them. Your work speaks for itself." },
  { title: "Before & After Photos", desc: "Document your work with timestamped photos. Landlords see progress. You have proof. Disputes disappear." },
  { title: "Approved Vendor Lists", desc: "Landlords can pre-approve you for their properties. Once approved, you get priority notifications for their jobs — recurring revenue." },
];

export default function VendorsPage() {
  return (
    <>
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-600 mb-4">For Contractors</p>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 max-w-3xl">
            Find jobs, bid on work, get paid faster.
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl leading-relaxed">
            The 3WB Home vendor portal connects you directly to property managers who need work done. No middlemen. No phone tag. Real jobs, real money.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link href="/get-started" className="bg-amber-500 text-black font-semibold rounded-lg px-8 py-3.5 hover:bg-amber-400 transition-colors">
              Sign Up as Vendor
            </Link>
            <Link href="#features" className="border-2 border-amber-500 text-amber-600 font-semibold rounded-lg px-8 py-3.5 hover:bg-amber-50 transition-colors">
              Browse Jobs
            </Link>
          </div>
        </div>
      </section>

      <section id="features" className="py-24 md:py-32 bg-gray-50">
        <div className="mx-auto max-w-[1200px] px-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 text-center mb-16">
            Your next job is already posted.
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((f) => (
              <div key={f.title} className="bg-white rounded-2xl p-8 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{f.title}</h3>
                <p className="text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Stop chasing landlords.<br />Let jobs come to you.
          </h2>
          <Link href="/get-started" className="inline-block mt-10 bg-amber-500 text-black font-semibold rounded-lg px-10 py-4 text-lg hover:bg-amber-400 transition-colors">
            Create Vendor Account — Free
          </Link>
          <p className="mt-4 text-sm text-gray-400">Always free for vendors. Small platform fee on completed job payments only.</p>
        </div>
      </section>
    </>
  );
}
