"use client";

import { useState } from "react";
import { MapPin, Clock, DollarSign, CheckCircle } from "lucide-react";

const CATEGORY_STYLES: Record<string, { bg: string; text: string }> = {
  plumbing: { bg: "bg-[#dbeafe]", text: "text-[#1d4ed8]" },
  hvac: { bg: "bg-[#fef3c7]", text: "text-[#92400e]" },
  electrical: { bg: "bg-[#fee2e2]", text: "text-[#991b1b]" },
  general: { bg: "bg-[#e5e7eb]", text: "text-[#374151]" },
  painting: { bg: "bg-[#ede9fe]", text: "text-[#5b21b6]" },
  landscaping: { bg: "bg-[#d1fae5]", text: "text-[#065f46]" },
};

const URGENCY_STYLES: Record<string, { bg: string; text: string }> = {
  low: { bg: "bg-green-bg", text: "text-green" },
  medium: { bg: "bg-orange-bg-2", text: "text-orange-dark" },
  high: { bg: "bg-[rgba(249,115,22,0.15)]", text: "text-[#ea580c]" },
  emergency: { bg: "bg-red-bg", text: "text-red" },
};

interface Job {
  id: string;
  address: string;
  desc: string;
  category: string;
  urgency: string;
  budget: string;
  distance: string;
  posted: string;
  direct?: boolean;
  landlord?: string;
}

const JOBS: Job[] = [
  { id: "J-2041", address: "1420 Oak Street, Unit 4B", desc: "Kitchen faucet leaking steadily. Tenant reports water pooling under sink.", category: "plumbing", urgency: "medium", budget: "$150-250", distance: "3.2 mi", posted: "2h ago", direct: true, landlord: "Parkview Properties" },
  { id: "J-2039", address: "892 Elm Drive", desc: "AC unit not cooling. Filters recently changed but still blowing warm air.", category: "hvac", urgency: "high", budget: "$300-500", distance: "5.8 mi", posted: "6h ago" },
  { id: "J-2037", address: "3100 Maple Ave, Suite 2", desc: "Bathroom exhaust fan making loud grinding noise. Needs replacement.", category: "electrical", urgency: "low", budget: "$100-180", distance: "1.4 mi", posted: "1d ago" },
  { id: "J-2035", address: "750 Pine Road", desc: "Interior painting needed for 2BR unit between tenants. Walls and trim.", category: "painting", urgency: "low", budget: "$800-1200", distance: "4.1 mi", posted: "1d ago" },
  { id: "J-2033", address: "2200 Cedar Lane", desc: "Garbage disposal jammed and leaking. Tenant cannot use kitchen sink.", category: "plumbing", urgency: "high", budget: "$120-200", distance: "2.7 mi", posted: "3h ago" },
];

export function JobBoard() {
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all" ? JOBS : filter === "direct" ? JOBS.filter(j => j.direct) : JOBS.filter(j => !j.direct);

  return (
    <div className="animate-[fadeIn_0.35s_ease]">
      {/* Tabs */}
      <div className="flex gap-1 bg-bg p-1 rounded-[10px] mb-6 w-fit">
        {[
          { id: "all", label: "All Jobs", count: JOBS.length },
          { id: "direct", label: "Assigned to Me", count: JOBS.filter(j => j.direct).length },
          { id: "open", label: "Open Bids", count: JOBS.filter(j => !j.direct).length },
        ].map((t) => (
          <button
            key={t.id}
            onClick={() => setFilter(t.id)}
            className={`px-5 py-2 rounded-lg text-[13px] font-semibold transition-all ${
              filter === t.id
                ? "bg-card text-text shadow-[0_1px_3px_rgba(0,0,0,0.06)]"
                : "text-text-2"
            }`}
          >
            {t.label}
            <span className="ml-1.5 text-[10px] font-bold bg-orange-bg-2 text-orange-dark px-1.5 py-0.5 rounded">
              {t.count}
            </span>
          </button>
        ))}
      </div>

      {/* Job cards */}
      <div className="flex flex-col gap-3.5">
        {filtered.map((job) => {
          const cat = CATEGORY_STYLES[job.category] || CATEGORY_STYLES.general;
          const urg = URGENCY_STYLES[job.urgency] || URGENCY_STYLES.low;

          return (
            <div
              key={job.id}
              className={`bg-card border border-border rounded-[16px] p-5 px-6 transition-all cursor-pointer hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 ${
                job.direct ? "border-l-[3px] border-l-green" : ""
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className={`text-[11px] font-bold px-3 py-1 rounded-lg ${cat.bg} ${cat.text}`}>
                    {job.category.charAt(0).toUpperCase() + job.category.slice(1)}
                  </span>
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider ${urg.bg} ${urg.text}`}>
                    {job.urgency}
                  </span>
                </div>
                {job.direct && (
                  <span className="flex items-center gap-1 text-[11px] font-bold text-green bg-green-bg px-2.5 py-1 rounded-md">
                    <CheckCircle size={12} /> Direct Assign
                  </span>
                )}
              </div>

              <h3 className="text-[15px] font-bold text-text tracking-tight mb-1">{job.address}</h3>
              <p className="text-[13px] text-text-2 leading-relaxed mb-3.5 line-clamp-2">{job.desc}</p>

              <div className="flex items-center gap-4 flex-wrap">
                <span className="flex items-center gap-1 text-xs text-text-2">
                  <DollarSign size={12} /> {job.budget}
                </span>
                <span className="flex items-center gap-1 text-xs text-text-2">
                  <MapPin size={12} /> {job.distance}
                </span>
                <span className="flex items-center gap-1 text-xs text-text-2">
                  <Clock size={12} /> {job.posted}
                </span>
                {job.landlord && (
                  <span className="text-xs text-text-2">
                    {job.landlord}
                  </span>
                )}
              </div>

              <div className="flex gap-2 mt-4 pt-4 border-t border-border">
                {job.direct ? (
                  <>
                    <button className="px-5 py-2.5 bg-green text-white rounded-full text-[13px] font-bold transition-all hover:bg-[#059669]">
                      Accept Job
                    </button>
                    <button className="px-5 py-2.5 bg-card border border-border rounded-full text-[13px] font-semibold text-text-2 hover:text-text hover:border-border transition-all">
                      Decline
                    </button>
                  </>
                ) : (
                  <button className="px-5 py-2.5 bg-orange text-white rounded-full text-[13px] font-bold transition-all hover:bg-orange-dark hover:shadow-[0_8px_24px_rgba(245,158,11,0.3)]">
                    Submit Bid
                  </button>
                )}
                <button className="px-5 py-2.5 bg-card border border-border rounded-full text-[13px] font-semibold text-text-2 hover:text-text transition-all ml-auto">
                  View Details
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
