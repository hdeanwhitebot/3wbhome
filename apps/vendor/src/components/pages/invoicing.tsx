"use client";

import { useState } from "react";
import { Plus, FileText, DollarSign, Clock, CheckCircle, AlertCircle } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

type InvStatus = "draft" | "submitted" | "approved" | "paid" | "disputed";

interface DemoInvoice {
  id: string;
  jobId: string;
  landlord: string;
  address: string;
  total: number;
  status: InvStatus;
  date: string;
}

const STATUS_STYLES: Record<InvStatus, { bg: string; text: string }> = {
  draft: { bg: "bg-[#e5e7eb]", text: "text-[#374151]" },
  submitted: { bg: "bg-[rgba(139,92,246,0.1)]", text: "text-purple" },
  approved: { bg: "bg-blue-bg", text: "text-blue" },
  paid: { bg: "bg-green-bg", text: "text-green" },
  disputed: { bg: "bg-red-bg", text: "text-red" },
};

const INVOICES: DemoInvoice[] = [
  { id: "INV-0045", jobId: "J-2041", landlord: "Parkview Properties", address: "1420 Oak St", total: 225, status: "draft", date: "Mar 22" },
  { id: "INV-0042", jobId: "J-2030", landlord: "Parkview Properties", address: "560 Birch Ln", total: 1200, status: "submitted", date: "Mar 18" },
  { id: "INV-0039", jobId: "J-2025", landlord: "Summit Property Group", address: "3100 Maple Ave", total: 380, status: "approved", date: "Mar 12" },
  { id: "INV-0035", jobId: "J-2018", landlord: "Green Leaf Rentals", address: "892 Elm Dr", total: 850, status: "paid", date: "Mar 5" },
  { id: "INV-0030", jobId: "J-2010", landlord: "Harbor View Mgmt", address: "240 Bay Blvd", total: 3200, status: "paid", date: "Feb 28" },
];

export function Invoicing() {
  const [showCreate, setShowCreate] = useState(false);

  return (
    <div className="animate-[fadeIn_0.35s_ease]">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-extrabold text-text tracking-tight">Invoices</h2>
        <button
          onClick={() => setShowCreate(!showCreate)}
          className="px-5 py-2.5 bg-orange text-white rounded-full text-[13px] font-bold flex items-center gap-1.5 transition-all hover:bg-orange-dark hover:shadow-[0_8px_24px_rgba(245,158,11,0.3)]"
        >
          <Plus size={14} /> New Invoice
        </button>
      </div>

      {showCreate && (
        <div className="bg-card border border-border rounded-[16px] p-6 mb-6 shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
          <h3 className="text-[15px] font-bold text-text mb-5">Create Invoice</h3>
          <div className="grid grid-cols-2 gap-4 mb-4 max-md:grid-cols-1">
            <div>
              <label className="block text-xs font-semibold text-text-2 mb-1.5 uppercase tracking-wider">Job</label>
              <select className="w-full px-4 py-3 bg-bg border border-border rounded-[10px] text-text text-sm outline-none focus:border-orange">
                <option>J-2041 — 1420 Oak St</option>
                <option>J-2030 — 560 Birch Ln</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-text-2 mb-1.5 uppercase tracking-wider">Landlord</label>
              <input type="text" value="Parkview Properties" readOnly className="w-full px-4 py-3 bg-bg border border-border rounded-[10px] text-text text-sm outline-none" />
            </div>
          </div>

          <h4 className="text-xs font-bold text-text-2 uppercase tracking-wider mb-3">Line Items</h4>
          <div className="space-y-2 mb-4">
            {[
              { desc: "Kitchen faucet replacement — labor", type: "Labor", qty: 2, rate: 75 },
              { desc: "Moen faucet assembly", type: "Materials", qty: 1, rate: 89 },
            ].map((item, i) => (
              <div key={i} className="grid grid-cols-[1fr_100px_80px_80px_80px] gap-3 items-center text-sm max-md:grid-cols-2">
                <input value={item.desc} readOnly className="px-3 py-2 bg-bg border border-border rounded-lg text-text outline-none" />
                <span className="text-xs text-text-2 text-center">{item.type}</span>
                <input value={item.qty} readOnly className="px-3 py-2 bg-bg border border-border rounded-lg text-text text-center outline-none" />
                <input value={`$${item.rate}`} readOnly className="px-3 py-2 bg-bg border border-border rounded-lg text-text text-center outline-none" />
                <span className="text-sm font-bold text-text text-center">{formatCurrency(item.qty * item.rate)}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-border">
            <button className="px-4 py-2 text-xs font-semibold text-orange hover:underline">+ Add Line Item</button>
            <div className="text-right">
              <div className="text-sm text-text-2">Total: <span className="text-lg font-black text-text">{formatCurrency(239)}</span></div>
            </div>
          </div>

          <div className="flex gap-3 mt-5">
            <button className="px-6 py-2.5 bg-orange text-white rounded-full text-[13px] font-bold transition-all hover:bg-orange-dark">
              Submit Invoice
            </button>
            <button className="px-6 py-2.5 bg-card border border-border rounded-full text-[13px] font-semibold text-text-2 hover:text-text transition-all">
              Save Draft
            </button>
          </div>
        </div>
      )}

      {/* Invoice list */}
      <div className="bg-card border border-border rounded-[16px] shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                {["Invoice", "Job", "Landlord", "Amount", "Status", "Date"].map((h) => (
                  <th key={h} className="text-left px-6 py-3.5 text-[11px] font-bold text-text-2 uppercase tracking-wider">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {INVOICES.map((inv) => {
                const s = STATUS_STYLES[inv.status];
                return (
                  <tr key={inv.id} className="border-b border-border hover:bg-bg/50 transition-colors">
                    <td className="px-6 py-4 text-sm font-bold text-text">{inv.id}</td>
                    <td className="px-6 py-4 text-sm text-text-2">{inv.jobId}</td>
                    <td className="px-6 py-4 text-sm text-text-2">{inv.landlord}</td>
                    <td className="px-6 py-4 text-sm font-bold text-text">{formatCurrency(inv.total)}</td>
                    <td className="px-6 py-4">
                      <span className={`text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider ${s.bg} ${s.text}`}>
                        {inv.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-text-2">{inv.date}</td>
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
