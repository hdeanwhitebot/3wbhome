"use client";

import { Briefcase, DollarSign, Star, Users, TrendingUp, ClipboardList, Gavel, FileText } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

type Page = "dashboard" | "job-board" | "my-jobs" | "bidding" | "my-landlords" | "invoicing" | "payments" | "profile";

interface DashboardProps {
  onNavigate: (page: Page) => void;
}

const STATS = [
  { icon: <Briefcase size={20} />, value: "4", label: "Active Jobs", change: "+2 this week", up: true, bg: "bg-orange-bg" },
  { icon: <Gavel size={20} />, value: "3", label: "Pending Bids", change: "1 new today", up: true, bg: "bg-blue-bg" },
  { icon: <DollarSign size={20} />, value: "$8,450", label: "This Month", change: "+12% vs last", up: true, bg: "bg-green-bg" },
  { icon: <Star size={20} />, value: "4.9", label: "Rating", change: "32 reviews", up: true, bg: "bg-[rgba(139,92,246,0.1)]" },
  { icon: <Users size={20} />, value: "6", label: "Landlords", change: "2 approved", up: true, bg: "bg-green-bg" },
];

const ACTIVITY = [
  { dot: "bg-blue", text: "New job assigned: Kitchen faucet repair at 1420 Oak St", time: "2h ago" },
  { dot: "bg-green", text: "Bid accepted for HVAC filter replacement — $280", time: "5h ago" },
  { dot: "bg-orange", text: "Invoice #INV-0042 submitted for $1,200", time: "1d ago" },
  { dot: "bg-green", text: "Payment of $3,850 deposited to your account", time: "2d ago" },
  { dot: "bg-purple", text: "New bid submitted on bathroom remodel — $4,500", time: "3d ago" },
];

export function Dashboard({ onNavigate }: DashboardProps) {
  return (
    <div className="animate-[fadeIn_0.35s_ease]">
      {/* Stats */}
      <div className="grid grid-cols-5 gap-4 mb-6 max-lg:grid-cols-3 max-md:grid-cols-2">
        {STATS.map((stat, i) => (
          <div
            key={i}
            className="bg-card border border-border rounded-[16px] p-6 shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all"
          >
            <div className={`w-11 h-11 rounded-[12px] flex items-center justify-center text-xl mb-3.5 ${stat.bg}`}>
              {stat.icon}
            </div>
            <div className="text-[32px] font-black text-text tracking-tight leading-none">{stat.value}</div>
            <div className="text-xs text-text-2 font-medium mt-1">{stat.label}</div>
            <div className="text-[11px] font-bold mt-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-green-bg text-green">
              <TrendingUp size={10} /> {stat.change}
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-4 gap-3 mb-6 max-md:grid-cols-2">
        {[
          { icon: <Briefcase size={20} />, label: "Browse Jobs", page: "job-board" as Page },
          { icon: <ClipboardList size={20} />, label: "My Jobs", page: "my-jobs" as Page },
          { icon: <FileText size={20} />, label: "Create Invoice", page: "invoicing" as Page },
          { icon: <DollarSign size={20} />, label: "View Payments", page: "payments" as Page },
        ].map((action, i) => (
          <button
            key={i}
            onClick={() => onNavigate(action.page)}
            className="flex items-center gap-2.5 px-5 py-4 bg-card border border-border rounded-[10px] text-[13px] font-semibold text-text hover:border-orange hover:bg-orange-bg hover:-translate-y-0.5 hover:shadow-[0_2px_12px_rgba(0,0,0,0.06)] transition-all"
          >
            <span className="text-xl">{action.icon}</span>
            {action.label}
          </button>
        ))}
      </div>

      {/* Activity Feed */}
      <div className="bg-card border border-border rounded-[16px] shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
        <div className="px-6 py-5 border-b border-border">
          <h3 className="text-[15px] font-bold text-text tracking-tight">Recent Activity</h3>
        </div>
        <div className="p-6">
          <div className="flex flex-col gap-3">
            {ACTIVITY.map((item, i) => (
              <div key={i} className="flex items-start gap-3.5 py-3.5 border-b border-border last:border-b-0">
                <span className={`w-2.5 h-2.5 rounded-full mt-1.5 shrink-0 ${item.dot}`} />
                <span className="flex-1 text-[13px] text-text font-medium">{item.text}</span>
                <span className="text-[11px] text-text-2 whitespace-nowrap shrink-0">{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
