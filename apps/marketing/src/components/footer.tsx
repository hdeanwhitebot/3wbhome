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
        {/* 3WB Holdings — family of brands (reciprocal cross-links) */}
        <nav aria-label="3WB Holdings family of brands" className="mt-6 pt-6 border-t border-gray-100 flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-gray-500">
          <span className="font-semibold">Family of brands:</span>
          <a href="https://heydosi.com" className="hover:text-gray-900">Dosi</a>
          <a href="https://cwballantyne.com" className="hover:text-gray-900">C&amp;W Steakhouse</a>
          <a href="https://smallbizgen.com" className="hover:text-gray-900">SmallBizGen</a>
          <a href="https://listingclip.com" className="hover:text-gray-900">ListingClip</a>
          <a href="https://investorsupercharge.com" className="hover:text-gray-900">InvestorSupercharge</a>
          <a href="https://costalign.com" className="hover:text-gray-900">CostAlign</a>
          <a href="https://silencedapp.com" className="hover:text-gray-900">Silenced</a>
        </nav>
      </div>
    </footer>
  );
}
