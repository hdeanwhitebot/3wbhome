import Link from "next/link";

const cols = [
  { title: "Product", links: [["Residents", "/residents"], ["Vendors", "/vendors"], ["Managers", "/managers"], ["Enterprise", "/enterprise"]] },
  { title: "Company", links: [["Pricing", "/pricing"], ["About", "#"], ["Blog", "#"]] },
  { title: "Legal", links: [["Terms", "#"], ["Privacy", "#"], ["Contact", "#"]] },
];

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <p className="text-sm font-semibold text-gray-900 mb-4">3WB Home</p>
            <p className="text-xs text-gray-600 leading-relaxed">Property management<br />for the modern landlord.</p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">{c.title}</p>
              <ul className="space-y-2.5">
                {c.links.map(([label, href]) => (
                  <li key={label}><Link href={href} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">{label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 pt-6 border-t border-gray-100 text-xs text-gray-500">
          &copy; 2026 3WB Holdings, LLC
        </div>
      </div>
    </footer>
  );
}
