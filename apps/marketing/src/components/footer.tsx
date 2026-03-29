import Link from "next/link";

const cols = [
  { title: "Product", links: [["Residents", "/residents"], ["Vendors", "/vendors"], ["Managers", "/managers"], ["Enterprise", "/enterprise"]] },
  { title: "Company", links: [["Pricing", "/pricing"], ["About", "#"], ["Blog", "#"]] },
  { title: "Legal", links: [["Terms", "#"], ["Privacy", "#"], ["Contact", "#"]] },
];

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06]">
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <p className="text-sm font-semibold text-white mb-4">3WB Home</p>
            <p className="text-xs text-white/30 leading-relaxed">Property management<br />for the modern landlord.</p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <p className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-4">{c.title}</p>
              <ul className="space-y-2.5">
                {c.links.map(([label, href]) => (
                  <li key={label}><Link href={href} className="text-sm text-white/30 hover:text-white/70 transition-colors">{label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 pt-6 border-t border-white/[0.04] text-xs text-white/20">
          &copy; 2026 3WB Holdings, LLC
        </div>
      </div>
    </footer>
  );
}
