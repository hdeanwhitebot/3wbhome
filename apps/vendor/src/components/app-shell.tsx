"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  Briefcase,
  ClipboardList,
  Gavel,
  Users,
  FileText,
  DollarSign,
  User,
  Bell,
  LogOut,
  Menu,
  X,
  Search,
} from "lucide-react";
import { Dashboard } from "./pages/dashboard";
import { JobBoard } from "./pages/job-board";
import { MyJobs } from "./pages/my-jobs";
import { Bidding } from "./pages/bidding";
import { MyLandlords } from "./pages/my-landlords";
import { Invoicing } from "./pages/invoicing";
import { Payments } from "./pages/payments";
import { VendorProfile } from "./pages/vendor-profile";

type Page = "dashboard" | "job-board" | "my-jobs" | "bidding" | "my-landlords" | "invoicing" | "payments" | "profile";

const NAV_ITEMS: { id: Page; label: string; icon: React.ReactNode; section?: string; badge?: number }[] = [
  { id: "dashboard", label: "Dashboard", icon: <LayoutDashboard size={16} /> },
  { id: "job-board", label: "Job Board", icon: <Briefcase size={16} />, badge: 8 },
  { id: "my-jobs", label: "My Jobs", icon: <ClipboardList size={16} /> },
  { id: "bidding", label: "Bidding", icon: <Gavel size={16} />, badge: 3 },
  { id: "my-landlords", label: "My Landlords", icon: <Users size={16} />, section: "RELATIONSHIPS" },
  { id: "invoicing", label: "Invoicing", icon: <FileText size={16} />, section: "FINANCE" },
  { id: "payments", label: "Payments", icon: <DollarSign size={16} /> },
  { id: "profile", label: "Profile", icon: <User size={16} />, section: "ACCOUNT" },
];

const DEMO_VENDOR = {
  name: "Mike's Plumbing",
  initials: "MP",
  status: "Verified Vendor",
};

export function AppShell() {
  const [activePage, setActivePage] = useState<Page>("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const pageTitle = NAV_ITEMS.find((n) => n.id === activePage)?.label ?? "Dashboard";

  function renderPage() {
    switch (activePage) {
      case "dashboard": return <Dashboard onNavigate={setActivePage} />;
      case "job-board": return <JobBoard />;
      case "my-jobs": return <MyJobs />;
      case "bidding": return <Bidding />;
      case "my-landlords": return <MyLandlords />;
      case "invoicing": return <Invoicing />;
      case "payments": return <Payments />;
      case "profile": return <VendorProfile />;
    }
  }

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside
        className={`w-[260px] bg-[#1a1a2e] fixed inset-y-0 left-0 z-50 flex flex-col transition-transform duration-300 max-lg:${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="px-6 py-5 flex items-center gap-3 border-b border-white/[0.06]">
          <div className="w-9 h-9 rounded-[10px] bg-gradient-to-br from-orange to-orange-dark flex items-center justify-center text-sm font-black text-white shrink-0">
            3W
          </div>
          <h2 className="text-base font-extrabold text-white tracking-tight whitespace-nowrap">
            3WB <span className="text-orange">Vendor</span>
          </h2>
        </div>

        <nav className="flex-1 p-3 overflow-y-auto">
          {NAV_ITEMS.map((item) => (
            <div key={item.id}>
              {item.section && (
                <div className="text-[10px] font-bold text-white/20 uppercase tracking-widest px-4 pt-5 pb-2">
                  {item.section}
                </div>
              )}
              <button
                onClick={() => {
                  setActivePage(item.id);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-[11px] rounded-[10px] text-[13px] font-medium mb-0.5 transition-all whitespace-nowrap ${
                  activePage === item.id
                    ? "text-white bg-orange/[0.12]"
                    : "text-white/50 hover:text-white/80 hover:bg-white/[0.04]"
                }`}
              >
                <span className={`w-5 text-center ${activePage === item.id ? "text-orange" : ""}`}>
                  {item.icon}
                </span>
                {item.label}
                {item.badge && (
                  <span className="ml-auto bg-orange text-white text-[10px] font-bold px-[7px] py-0.5 rounded-md min-w-[20px] text-center">
                    {item.badge}
                  </span>
                )}
              </button>
            </div>
          ))}
        </nav>

        <div className="p-4 border-t border-white/[0.06]">
          <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-[10px] bg-white/[0.04]">
            <div className="w-[34px] h-[34px] rounded-[10px] bg-gradient-to-br from-orange to-orange-dark flex items-center justify-center text-[13px] font-bold text-white shrink-0">
              {DEMO_VENDOR.initials}
            </div>
            <div className="overflow-hidden">
              <h4 className="text-xs font-bold text-white truncate">{DEMO_VENDOR.name}</h4>
              <span className="text-[10px] text-white/35">{DEMO_VENDOR.status}</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main area */}
      <div className="flex-1 ml-[260px] max-lg:ml-0">
        {/* Topbar */}
        <header className="fixed top-0 left-[260px] right-0 h-[60px] bg-white/[0.72] backdrop-blur-[20px] backdrop-saturate-[180%] border-b border-border flex items-center justify-between px-8 z-40 max-lg:left-0 max-lg:px-4">
          <div className="flex items-center gap-4">
            <button
              className="hidden max-lg:flex w-[38px] h-[38px] rounded-[10px] bg-bg border border-border items-center justify-center text-lg"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
            <h1 className="text-lg font-extrabold text-text tracking-tight">{pageTitle}</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-bg border border-border rounded-[10px] w-60 max-md:hidden transition-all focus-within:border-orange focus-within:bg-white focus-within:shadow-[0_0_0_3px_rgba(245,158,11,0.1)]">
              <Search size={14} className="text-text-2" />
              <input
                type="text"
                placeholder="Search jobs, invoices..."
                className="bg-transparent text-[13px] text-text w-full outline-none placeholder:text-text-2"
              />
            </div>
            <button className="relative w-[38px] h-[38px] rounded-[10px] bg-bg border border-border flex items-center justify-center cursor-pointer hover:bg-white hover:shadow-[0_2px_12px_rgba(0,0,0,0.06)] transition-all">
              <Bell size={16} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red border-2 border-white" />
            </button>
            <button className="px-4 py-2 rounded-lg text-xs font-semibold text-text-2 border border-border hover:border-red hover:text-red hover:bg-red-bg transition-all">
              Sign Out
            </button>
          </div>
        </header>

        {/* Content */}
        <main className="pt-[60px] min-h-screen">
          <div className="p-8 max-w-[1400px] max-lg:p-4">
            {renderPage()}
          </div>
        </main>
      </div>
    </div>
  );
}
