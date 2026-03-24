"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  CreditCard,
  Wrench,
  FileText,
  User,
  Bell,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { Dashboard } from "./pages/dashboard";
import { PayRent } from "./pages/pay-rent";
import { WorkOrders } from "./pages/work-orders";
import { Documents } from "./pages/documents";
import { Profile } from "./pages/profile";

type Page = "dashboard" | "pay-rent" | "work-orders" | "documents" | "profile";

const NAV_ITEMS: { id: Page; label: string; icon: React.ReactNode }[] = [
  { id: "dashboard", label: "Dashboard", icon: <LayoutDashboard size={18} /> },
  { id: "pay-rent", label: "Pay Rent", icon: <CreditCard size={18} /> },
  { id: "work-orders", label: "Work Orders", icon: <Wrench size={18} /> },
  { id: "documents", label: "Documents", icon: <FileText size={18} /> },
  { id: "profile", label: "Profile", icon: <User size={18} /> },
];

// Demo user data
const DEMO_USER = {
  name: "Sarah Johnson",
  unit: "Unit 4B",
  initials: "SJ",
};

export function AppShell() {
  const [activePage, setActivePage] = useState<Page>("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const pageTitle = NAV_ITEMS.find((n) => n.id === activePage)?.label ?? "Dashboard";

  function renderPage() {
    switch (activePage) {
      case "dashboard":
        return <Dashboard onNavigate={setActivePage} />;
      case "pay-rent":
        return <PayRent />;
      case "work-orders":
        return <WorkOrders />;
      case "documents":
        return <Documents />;
      case "profile":
        return <Profile />;
    }
  }

  return (
    <div className="min-h-screen grid grid-cols-[260px_1fr] grid-rows-[60px_1fr] max-lg:grid-cols-1">
      {/* Sidebar */}
      <aside
        className={`row-span-full bg-dark-2 border-r border-border flex flex-col z-50 max-lg:fixed max-lg:inset-y-0 max-lg:left-0 max-lg:w-[260px] max-lg:transition-transform max-lg:duration-300 ${
          sidebarOpen ? "max-lg:translate-x-0" : "max-lg:-translate-x-full"
        }`}
      >
        {/* Brand */}
        <div className="px-6 py-[18px] flex items-center gap-2.5 border-b border-border">
          <h2 className="text-[17px] font-extrabold tracking-tight">
            3WB <span className="text-blue">Home</span>
          </h2>
        </div>

        {/* Nav */}
        <nav className="flex-1 p-4 flex flex-col gap-0.5">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActivePage(item.id);
                setSidebarOpen(false);
              }}
              className={`flex items-center gap-3 px-4 py-[11px] rounded-[10px] text-[13px] font-semibold transition-all relative ${
                activePage === item.id
                  ? "text-text-1 bg-blue/[0.12]"
                  : "text-text-3 hover:text-text-2 hover:bg-card"
              }`}
            >
              {activePage === item.id && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-blue rounded-r-[3px]" />
              )}
              <span className="w-5 text-center">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        {/* User card */}
        <div className="p-4 border-t border-border">
          <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-[10px] bg-card">
            <div className="w-[34px] h-[34px] rounded-full bg-gradient-to-br from-blue to-purple flex items-center justify-center text-[13px] font-bold shrink-0">
              {DEMO_USER.initials}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[13px] font-semibold text-text-1 truncate">
                {DEMO_USER.name}
              </div>
              <div className="text-[11px] text-text-3">{DEMO_USER.unit}</div>
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

      {/* Topbar */}
      <header className="bg-dark-2 border-b border-border flex items-center justify-between px-8 max-lg:px-4">
        <div className="flex items-center gap-4">
          <button
            className="hidden max-lg:flex w-9 h-9 rounded-[8px] bg-card items-center justify-center text-text-2"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
          <h1 className="text-lg font-bold tracking-tight">{pageTitle}</h1>
        </div>
        <div className="flex items-center gap-4">
          <button className="w-9 h-9 rounded-[8px] bg-card flex items-center justify-center text-text-3 hover:bg-card-hover hover:text-text-1 transition-all relative">
            <Bell size={15} />
            <span className="absolute top-[7px] right-[7px] w-[7px] h-[7px] rounded-full bg-red border-2 border-dark-2" />
          </button>
          <button className="px-[18px] py-2 rounded-full text-xs font-semibold text-text-3 border border-border hover:text-text-1 hover:border-border-2 hover:bg-card transition-all">
            <LogOut size={14} className="inline mr-1.5" />
            Sign Out
          </button>
        </div>
      </header>

      {/* Main content */}
      <main className="p-8 overflow-y-auto max-h-[calc(100vh-60px)] max-lg:p-4">
        {renderPage()}
      </main>
    </div>
  );
}
