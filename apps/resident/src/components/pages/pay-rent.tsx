"use client";

import { useState } from "react";
import { CreditCard, Calendar, CheckCircle, Clock, AlertCircle } from "lucide-react";
import { formatCurrency, formatDate } from "@/lib/utils";

const PAYMENT_HISTORY = [
  { date: "2026-03-01", amount: 1850, status: "paid" as const, method: "Auto-Pay • Visa ****4242" },
  { date: "2026-02-01", amount: 1850, status: "paid" as const, method: "Auto-Pay • Visa ****4242" },
  { date: "2026-01-01", amount: 1850, status: "paid" as const, method: "Manual • Visa ****4242" },
  { date: "2025-12-01", amount: 1850, status: "paid" as const, method: "Auto-Pay • Visa ****4242" },
  { date: "2025-11-01", amount: 1850, status: "paid" as const, method: "Auto-Pay • Visa ****4242" },
  { date: "2025-10-01", amount: 1900, status: "paid" as const, method: "Manual • Check" },
];

const STATUS_STYLES = {
  paid: { bg: "bg-green/10", text: "text-green", label: "Paid", icon: CheckCircle },
  pending: { bg: "bg-orange/10", text: "text-orange", label: "Pending", icon: Clock },
  failed: { bg: "bg-red/10", text: "text-red", label: "Failed", icon: AlertCircle },
};

export function PayRent() {
  const [autoPay, setAutoPay] = useState(true);

  return (
    <div className="animate-[fadeIn_0.35s_ease]">
      {/* Hero: Balance + Pay */}
      <div className="grid grid-cols-2 gap-6 mb-7 max-md:grid-cols-1">
        <div className="bg-card border border-border rounded-[14px] p-8 flex flex-col justify-center hover:border-border-2 transition-all">
          <div className="text-[48px] font-black tracking-tight leading-none mb-1">
            {formatCurrency(1850)}
          </div>
          <div className="text-sm text-text-3">Due April 1, 2026</div>
        </div>

        <div className="flex flex-col gap-3 justify-center">
          <button className="w-full py-3.5 bg-blue text-white rounded-full text-[15px] font-bold transition-all hover:bg-blue-light hover:shadow-[0_8px_30px_rgba(37,99,235,0.4)] hover:-translate-y-0.5 flex items-center justify-center gap-2">
            <CreditCard size={18} />
            Pay Now
          </button>

          {/* Auto-pay toggle */}
          <div className="flex items-center justify-between px-5 py-4 bg-card border border-border rounded-[10px]">
            <div className="flex items-center gap-2.5">
              <Calendar size={16} className="text-text-3" />
              <span className="text-[13px] font-semibold">Auto-Pay</span>
            </div>
            <button
              onClick={() => setAutoPay(!autoPay)}
              className={`w-11 h-6 rounded-full relative cursor-pointer transition-colors duration-300 ${
                autoPay ? "bg-green" : "bg-white/15"
              }`}
            >
              <span
                className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-[0_2px_4px_rgba(0,0,0,0.2)] transition-transform duration-300 ${
                  autoPay ? "translate-x-5" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Payment History */}
      <div className="bg-card border border-border rounded-[14px] hover:border-border-2 transition-all">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h3 className="text-[15px] font-bold tracking-tight">Payment History</h3>
          <span className="text-xs text-text-3 font-medium">Last 6 months</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left px-4 py-3 text-[11px] font-bold text-text-3 uppercase tracking-wider border-b border-border">
                  Date
                </th>
                <th className="text-left px-4 py-3 text-[11px] font-bold text-text-3 uppercase tracking-wider border-b border-border">
                  Amount
                </th>
                <th className="text-left px-4 py-3 text-[11px] font-bold text-text-3 uppercase tracking-wider border-b border-border">
                  Method
                </th>
                <th className="text-left px-4 py-3 text-[11px] font-bold text-text-3 uppercase tracking-wider border-b border-border">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {PAYMENT_HISTORY.map((payment, i) => {
                const style = STATUS_STYLES[payment.status];
                const Icon = style.icon;
                return (
                  <tr key={i} className="hover:bg-white/[0.02]">
                    <td className="px-4 py-3.5 text-[13px] text-text-2 border-b border-border">
                      {formatDate(payment.date)}
                    </td>
                    <td className="px-4 py-3.5 text-[13px] font-bold text-text-1 border-b border-border">
                      {formatCurrency(payment.amount)}
                    </td>
                    <td className="px-4 py-3.5 text-[13px] text-text-2 border-b border-border">
                      {payment.method}
                    </td>
                    <td className="px-4 py-3.5 border-b border-border">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-bold ${style.bg} ${style.text}`}
                      >
                        <Icon size={12} />
                        {style.label}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
