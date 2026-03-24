"use client";

import { DollarSign, TrendingUp, Clock, CheckCircle, ArrowDownRight, CreditCard } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

const EARNINGS = {
  thisMonth: 8450,
  pending: 1580,
  ytd: 42300,
  avgJob: 425,
};

const PAYMENT_HISTORY = [
  { id: "PAY-120", amount: 3850, jobs: 3, date: "Mar 15, 2026", status: "deposited" as const },
  { id: "PAY-115", amount: 2200, jobs: 2, date: "Mar 1, 2026", status: "deposited" as const },
  { id: "PAY-110", amount: 1580, jobs: 1, date: "Feb 15, 2026", status: "deposited" as const },
  { id: "PAY-105", amount: 4100, jobs: 4, date: "Feb 1, 2026", status: "deposited" as const },
  { id: "PAY-100", amount: 950, jobs: 1, date: "Jan 15, 2026", status: "deposited" as const },
];

export function Payments() {
  return (
    <div className="animate-[fadeIn_0.35s_ease]">
      {/* Earnings stats */}
      <div className="grid grid-cols-4 gap-4 mb-6 max-md:grid-cols-2">
        {[
          { icon: <DollarSign size={20} />, value: formatCurrency(EARNINGS.thisMonth), label: "This Month", bg: "bg-green-bg", change: "+12%" },
          { icon: <Clock size={20} />, value: formatCurrency(EARNINGS.pending), label: "Pending", bg: "bg-orange-bg" },
          { icon: <TrendingUp size={20} />, value: formatCurrency(EARNINGS.ytd), label: "Year to Date", bg: "bg-blue-bg" },
          { icon: <ArrowDownRight size={20} />, value: formatCurrency(EARNINGS.avgJob), label: "Avg per Job", bg: "bg-[rgba(139,92,246,0.1)]" },
        ].map((stat, i) => (
          <div key={i} className="bg-card border border-border rounded-[16px] p-6 shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all">
            <div className={`w-11 h-11 rounded-[12px] flex items-center justify-center mb-3.5 ${stat.bg}`}>
              {stat.icon}
            </div>
            <div className="text-[28px] font-black text-text tracking-tight leading-none">{stat.value}</div>
            <div className="text-xs text-text-2 font-medium mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Direct Deposit Setup */}
      <div className="bg-card border border-border rounded-[16px] p-6 mb-6 shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-[12px] bg-green-bg flex items-center justify-center">
              <CreditCard size={20} className="text-green" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-text">Direct Deposit</h3>
              <p className="text-xs text-text-2 mt-0.5">Bank of America &bull; ****7842 &bull; Bi-weekly payouts</p>
            </div>
          </div>
          <button className="px-4 py-2 bg-card border border-border rounded-lg text-xs font-semibold text-text-2 hover:text-text transition-all">
            Update
          </button>
        </div>
      </div>

      {/* Payment history */}
      <div className="bg-card border border-border rounded-[16px] shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
        <div className="px-6 py-5 border-b border-border">
          <h3 className="text-[15px] font-bold text-text tracking-tight">Payment History</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                {["Payout", "Amount", "Jobs", "Date", "Status"].map((h) => (
                  <th key={h} className="text-left px-6 py-3.5 text-[11px] font-bold text-text-2 uppercase tracking-wider">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {PAYMENT_HISTORY.map((p) => (
                <tr key={p.id} className="border-b border-border hover:bg-bg/50 transition-colors">
                  <td className="px-6 py-4 text-sm font-bold text-text">{p.id}</td>
                  <td className="px-6 py-4 text-sm font-bold text-green">{formatCurrency(p.amount)}</td>
                  <td className="px-6 py-4 text-sm text-text-2">{p.jobs} job{p.jobs > 1 ? "s" : ""}</td>
                  <td className="px-6 py-4 text-sm text-text-2">{p.date}</td>
                  <td className="px-6 py-4">
                    <span className="flex items-center gap-1 text-[10px] font-bold bg-green-bg text-green px-2.5 py-1 rounded-md uppercase w-fit">
                      <CheckCircle size={10} /> Deposited
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
