import Link from "next/link";

const features = [
  { title: "One-Click Rent Payment", desc: "Pay rent instantly with ACH or card. No more writing checks or mailing envelopes. Automatic receipts and payment history." },
  { title: "Work Orders with Photos", desc: "Submit a maintenance request in 30 seconds. Snap a photo, describe the issue, and track it from open to resolved — all from your phone." },
  { title: "Lease Access 24/7", desc: "View your lease, move-in documents, and community rules anytime. No calling the office. No digging through email." },
  { title: "Real-Time Notifications", desc: "Get push notifications when rent is due, a work order is updated, or your landlord posts an announcement. Never miss anything." },
  { title: "Payment History & Receipts", desc: "Full history of every payment you've made. Download receipts for tax or records purposes. Always know where you stand." },
  { title: "Direct Communication", desc: "Message your property manager directly through the app. No phone tag. No lost emails. Everything in one thread." },
];

export default function ResidentsPage() {
  return (
    <>
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-4">For Tenants</p>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 max-w-3xl">
            Pay rent, submit work orders, view documents — all from your phone.
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl leading-relaxed">
            The 3WB Home resident portal gives tenants a modern experience. No more paper checks, phone calls, or waiting for email replies.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link href="/get-started" className="bg-blue-600 text-white font-semibold rounded-lg px-8 py-3.5 hover:bg-blue-500 transition-colors">
              Download the App
            </Link>
            <Link href="#features" className="border-2 border-blue-600 text-blue-600 font-semibold rounded-lg px-8 py-3.5 hover:bg-blue-50 transition-colors">
              See How It Works
            </Link>
          </div>
        </div>
      </section>

      <section id="features" className="py-24 md:py-32 bg-gray-50">
        <div className="mx-auto max-w-[1200px] px-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 text-center mb-16">
            Everything tenants need in one app.
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
            Your landlord uses 3WB Home?<br />Lucky you.
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
            Download the free app and sign in with the invite link your property manager sent you. That's it. Always free for tenants.
          </p>
          <Link href="/get-started" className="inline-block mt-10 bg-blue-600 text-white font-semibold rounded-lg px-10 py-4 text-lg hover:bg-blue-500 transition-colors">
            Get the App
          </Link>
        </div>
      </section>
    </>
  );
}
