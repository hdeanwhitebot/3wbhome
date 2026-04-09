import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact 3WB Home — Support & Sales",
  description: "Get in touch with our team. Email support, sales inquiries, or partnership opportunities.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 md:py-32 pt-40">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-4">Get in Touch</p>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            Contact Us
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 md:py-32 border-t border-gray-200">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Send us a message</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    placeholder="Your company name"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    placeholder="Tell us how we can help..."
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white font-semibold rounded-lg py-3 hover:bg-blue-500 transition-all"
                >
                  Send message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Other ways to reach us</h2>
              <div className="space-y-8">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-3">
                    Email
                  </p>
                  <p className="text-lg text-gray-900">
                    <a href="mailto:support@3wbhome.com" className="hover:text-blue-600 transition-colors">
                      support@3wbhome.com
                    </a>
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    For product support and general inquiries
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-8">
                  <p className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-3">
                    Office
                  </p>
                  <p className="text-lg text-gray-900">
                    Charlotte, NC
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    Serving property managers across the United States
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-8">
                  <p className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-3">
                    Hours
                  </p>
                  <p className="text-lg text-gray-900">
                    Monday–Friday, 9 AM–6 PM EST
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    We typically respond within 1 business day
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 border-t border-gray-200">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Have questions? Try our free trial first.
          </h2>
          <Link
            href="/get-started"
            className="bg-blue-600 text-white font-semibold rounded-full px-8 py-3.5 text-[15px] hover:bg-blue-500 transition-all hover:scale-[1.02]"
          >
            Start free trial
          </Link>
        </div>
      </section>
    </>
  );
}
