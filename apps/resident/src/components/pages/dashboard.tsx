"use client";

import {
  Home,
  CreditCard,
  Wrench,
  FileText,
  DollarSign,
  Clock,
  AlertCircle,
  CheckCircle,
} from "lucide-react";
import { formatCurrency } from "@/lib/utils";

type Page = "dashboard" | "pay-rent" | "work-orders" | "documents" | "profile";

interface DashboardProps {
  onNavigate: (page: Page) => void;
}

const DEMO = {
  property: {
    name: "Parkview Residences",
    address: "1420 Oak Street, Unit 4B",
    details: "2 Bed • 1 Bath • 950 sqft",
    rent: 1850,
  },
  stats: [
    { icon: <DollarSign size={28} />, value: "$1,850", label: "Rent Amount", color: "text-green" },
    { icon: <Clock size={28} />, value: "12", label: "Days Until Due", color: "text-blue" },
    { icon: <Wrench size={28} />, value: "1", label: "Open Work Orders", color: "text-orange" },
    { icon: <FileText size={28} />, value: "247", label: "Days on Lease", color: "text-purple" },
  ],
  activity: [
    { dot: "bg-green", main: "Rent payment of ", bold: "$1,850.00", suffix: " received", time: "2 days ago" },
    { dot: "bg-blue", main: "Work order ", bold: "#WO-1024", suffix: " marked as completed", time: "5 days ago" },
    { dot: "bg-orange", main: "New work order ", bold: "#WO-1031", suffix: " submitted", time: "1 week ago" },
    { dot: "bg-green", main: "Lease document ", bold: "updated", suffix: " by management", time: "2 weeks ago" },
  ],
};

export function Dashboard({ onNavigate }: DashboardProps) {
  return (
    <div className="animate-[fadeIn_0.35s_ease]">
      {/* Welcome */}
      <div className="mb-8">
        <h1 className="text-[28px] font-extrabold tracking-tight mb-1">
          Welcome back, Sarah
        </h1>
        <p className="text-sm text-text-3">Here&apos;s what&apos;s happening with your rental.</p>
      </div>

      {/* Property card */}
      <div className="bg-card border border-border rounded-[14px] p-6 mb-5 hover:border-border-2 transition-all">
        <div className="flex items-center gap-5">
          <div className="w-14 h-14 rounded-[14px] bg-blue/10 flex items-center justify-center shrink-0">
            <Home size={24} className="text-blue" />
          </div>
          <div className="flex-1">
            <h3 className="text-base font-bold tracking-tight mb-0.5">{DEMO.property.name}</h3>
            <p className="text-[13px] text-text-3">{DEMO.property.address}</p>
            <p className="text-xs text-text-3 mt-1">{DEMO.property.details}</p>
          </div>
          <div className="text-right">
            <div className="text-[22px] font-extrabold tracking-tight text-green">
              {formatCurrency(DEMO.property.rent)}
            </div>
            <div className="text-[11px] text-text-3">per month</div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4 mb-5 max-md:grid-cols-2">
        {DEMO.stats.map((stat, i) => (
          <div key={i} className="bg-card border border-border rounded-[14px] p-7 text-center hover:border-border-2 transition-all">
            <div className={`text-[28px] mb-3 ${stat.color}`}>{stat.icon}</div>
            <div className="text-[28px] font-extrabold tracking-tight mb-1">{stat.value}</div>
            <div className="text-xs text-text-3 font-medium">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Quick actions + Activity */}
      <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
        <div className="bg-card border border-border rounded-[14px] p-6 hover:border-border-2 transition-all">
          <h3 className="text-[15px] font-bold tracking-tight mb-5">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: <CreditCard size={20} />, label: "Pay Rent", bg: "bg-blue/[0.12]", page: "pay-rent" as Page },
              { icon: <Wrench size={20} />, label: "Work Order", bg: "bg-green/[0.12]", page: "work-orders" as Page },
              { icon: <FileText size={20} />, label: "Documents", bg: "bg-orange/[0.12]", page: "documents" as Page },
              { icon: <AlertCircle size={20} />, label: "Contact PM", bg: "bg-purple/[0.12]", page: "profile" as Page },
            ].map((action, i) => (
              <button
                key={i}
                onClick={() => onNavigate(action.page)}
                className="flex flex-col items-center gap-2.5 p-6 rounded-[14px] bg-card border border-border cursor-pointer transition-all hover:bg-card-hover hover:border-border-2 hover:-translate-y-0.5"
              >
                <div className={`w-11 h-11 rounded-[12px] flex items-center justify-center ${action.bg}`}>
                  {action.icon}
                </div>
                <span className="text-xs font-semibold text-text-2">{action.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-card border border-border rounded-[14px] p-6 hover:border-border-2 transition-all">
          <h3 className="text-[15px] font-bold tracking-tight mb-5">Recent Activity</h3>
          <div className="flex flex-col">
            {DEMO.activity.map((item, i) => (
              <div key={i} className="flex items-center gap-3.5 py-3.5 border-b border-border last:border-b-0">
                <span className={`w-2 h-2 rounded-full shrink-0 ${item.dot}`} />
                <span className="flex-1 text-[13px] text-text-2">
                  {item.main}<strong className="text-text-1 font-semibold">{item.bold}</strong>{item.suffix}
                </span>
                <span className="text-[11px] text-text-4 shrink-0">{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Rent Status Banner */}
      <div className="mt-5 bg-green/[0.08] border border-green/20 rounded-[14px] p-5 flex items-center gap-4">
        <CheckCircle size={24} className="text-green shrink-0" />
        <div className="flex-1">
          <h4 className="text-sm font-bold text-green">Rent is Current</h4>
          <p className="text-xs text-text-3 mt-0.5">
            Your March payment was received on March 1, 2026. Next payment due April 1.
          </p>
        </div>
        <button
          onClick={() => onNavigate("pay-rent")}
          className="px-5 py-2.5 bg-green text-white rounded-full text-[13px] font-bold transition-all hover:bg-[#059669] hover:shadow-[0_8px_30px_rgba(16,185,129,0.3)] shrink-0"
        >
          View Details
        </button>
      </div>
    </div>
  );
}
