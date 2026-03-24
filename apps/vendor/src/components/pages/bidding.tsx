"use client";

import { useState } from "react";
import { DollarSign, Clock, CheckCircle, X } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

type BidStatus = "pending" | "won" | "lost";

interface DemoBid {
  id: string;
  jobId: string;
  address: string;
  category: string;
  amount: number;
  submitted: string;
  status: BidStatus;
}

const STATUS_STYLES: Record<BidStatus, { bg: string; text: string; label: string; icon: React.ReactNode }> = {
  pending: { bg: "bg-orange-bg-2", text: "text-orange-dark", label: "Pending", icon: <Clock size={12} /> },
  won: { bg: "bg-green-bg", text: "text-green", label: "Won", icon: <CheckCircle size={12} /> },
  lost: { bg: "bg-red-bg", text: "text-red", label: "Lost", icon: <X size={12} /> },
};

const BIDS: DemoBid[] = [
  { id: "B-401", jobId: "J-2039", address: "892 Elm Drive", category: "HVAC", amount: 420, submitted: "Mar 20", status: "pending" },
  { id: "B-398", jobId: "J-2035", address: "750 Pine Road", category: "Painting", amount: 950, submitted: "Mar 19", status: "pending" },
  { id: "B-395", jobId: "J-2033", address: "2200 Cedar Lane", category: "Plumbing", amount: 175, submitted: "Mar 18", status: "pending" },
  { id: "B-390", jobId: "J-2028", address: "1100 Walnut St", category: "HVAC", amount: 280, submitted: "Mar 15", status: "won" },
  { id: "B-385", jobId: "J-2022", address: "445 Spruce Ct", category: "Plumbing", amount: 550, submitted: "Mar 12", status: "lost" },
];

export function Bidding() {
  const [filter, setFilter] = useState<"all" | BidStatus>("all");
  const filtered = filter === "all" ? BIDS : BIDS.filter((b) => b.status === filter);

  return (
    <div className="animate-[fadeIn_0.35s_ease]">
      <div className="flex gap-1 bg-bg p-1 rounded-[10px] mb-6 w-fit">
        {(["all", "pending", "won", "lost"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            className={`px-5 py-2 rounded-lg text-[13px] font-semibold capitalize transition-all ${
              filter === t ? "bg-card text-text shadow-[0_1px_3px_rgba(0,0,0,0.06)]" : "text-text-2"
            }`}
          >
            {t === "all" ? "All Bids" : t}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-3.5">
        {filtered.map((bid) => {
          const s = STATUS_STYLES[bid.status];
          return (
            <div key={bid.id} className="bg-card border border-border rounded-[16px] p-5 px-6 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-[15px] font-bold text-text tracking-tight">{bid.address}</h3>
                  <p className="text-xs text-text-2 mt-0.5">{bid.jobId} &bull; {bid.category}</p>
                </div>
                <span className={`flex items-center gap-1 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider ${s.bg} ${s.text}`}>
                  {s.icon} {s.label}
                </span>
              </div>

              <div className="flex items-center gap-6 text-sm">
                <span className="flex items-center gap-1.5 font-bold text-text">
                  <DollarSign size={14} className="text-orange" /> {formatCurrency(bid.amount)}
                </span>
                <span className="flex items-center gap-1.5 text-text-2 text-xs">
                  <Clock size={12} /> Submitted {bid.submitted}
                </span>
              </div>

              {bid.status === "pending" && (
                <div className="flex gap-2 mt-4 pt-4 border-t border-border">
                  <button className="px-4 py-2 bg-card border border-border rounded-lg text-xs font-semibold text-text-2 hover:text-text transition-all">
                    Edit Bid
                  </button>
                  <button className="px-4 py-2 bg-card border border-border rounded-lg text-xs font-semibold text-red hover:bg-red-bg transition-all">
                    Withdraw
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
