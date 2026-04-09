import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — 3WB Home Insights",
  description: "Insights and guides for modern property management. Learn how to streamline rent collection, reduce maintenance costs, and build better tenant relationships.",
};

const posts = [
  {
    id: 1,
    title: "Why Online Rent Collection Increases On-Time Payments by 40%",
    date: "March 15, 2026",
    excerpt: "Discover the surprising psychology behind why tenants pay faster when rent collection is effortless. Plus the exact strategies top landlords use.",
    slug: "#",
  },
  {
    id: 2,
    title: "How Vendor Bidding Cuts Maintenance Costs",
    date: "March 8, 2026",
    excerpt: "When vendors compete for your work orders, prices drop. Real data from 500+ completed repairs shows average savings of 32%.",
    slug: "#",
  },
  {
    id: 3,
    title: "The Future of Property Management Software",
    date: "February 28, 2026",
    excerpt: "AI-powered tenant screening. Real-time lease management. Predictive maintenance. Here's what's coming next — and why it matters.",
    slug: "#",
  },
  {
    id: 4,
    title: "5 Signs You've Outgrown Spreadsheet Property Management",
    date: "February 20, 2026",
    excerpt: "Running your portfolio on Excel? It's time to move on. Here are the red flags every landlord should recognize.",
    slug: "#",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 md:py-32 pt-40">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-4">Blog</p>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            Insights for modern property management
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto">
            Strategies, trends, and lessons learned from landlords managing hundreds of units.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-24 md:py-32 border-t border-gray-200">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="rounded-xl border border-gray-200 bg-white p-8 flex flex-col h-full hover:border-gray-300 transition-colors"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                    <Link href={post.slug} className="hover:text-blue-600 transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">{post.date}</p>
                  <p className="text-gray-600 leading-relaxed">{post.excerpt}</p>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <Link
                    href={post.slug}
                    className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Read more &rarr;
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 border-t border-gray-200">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Ready to transform your property management?
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
