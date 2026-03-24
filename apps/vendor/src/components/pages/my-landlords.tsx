"use client";

import { CheckCircle, Clock, Plus, Building2 } from "lucide-react";

interface Landlord {
  name: string;
  properties: number;
  track: "approved" | "pending";
  jobsCompleted: number;
  since: string;
}

const LANDLORDS: Landlord[] = [
  { name: "Parkview Properties", properties: 12, track: "approved", jobsCompleted: 8, since: "Jan 2026" },
  { name: "Green Leaf Rentals", properties: 6, track: "approved", jobsCompleted: 3, since: "Feb 2026" },
  { name: "Summit Property Group", properties: 22, track: "pending", jobsCompleted: 0, since: "Mar 2026" },
  { name: "Harbor View Management", properties: 8, track: "approved", jobsCompleted: 5, since: "Dec 2025" },
  { name: "Eastside Living Co.", properties: 15, track: "approved", jobsCompleted: 12, since: "Nov 2025" },
  { name: "Metro Housing Partners", properties: 30, track: "pending", jobsCompleted: 0, since: "Mar 2026" },
];

export function MyLandlords() {
  return (
    <div className="animate-[fadeIn_0.35s_ease]">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-extrabold text-text tracking-tight">My Landlords</h2>
          <p className="text-sm text-text-2 mt-0.5">Manage your landlord relationships and approval status</p>
        </div>
        <button className="px-5 py-2.5 bg-orange text-white rounded-full text-[13px] font-bold flex items-center gap-1.5 transition-all hover:bg-orange-dark hover:shadow-[0_8px_24px_rgba(245,158,11,0.3)]">
          <Plus size={14} /> Request Approval
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
        {LANDLORDS.map((ll, i) => (
          <div
            key={i}
            className="bg-card border border-border rounded-[16px] p-6 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-[12px] bg-blue-bg flex items-center justify-center">
                  <Building2 size={20} className="text-blue" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-text">{ll.name}</h3>
                  <p className="text-[11px] text-text-2">{ll.properties} properties</p>
                </div>
              </div>
              <span
                className={`flex items-center gap-1 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase ${
                  ll.track === "approved"
                    ? "bg-green-bg text-green"
                    : "bg-orange-bg-2 text-orange-dark"
                }`}
              >
                {ll.track === "approved" ? <CheckCircle size={10} /> : <Clock size={10} />}
                {ll.track}
              </span>
            </div>

            <div className="flex items-center gap-4 text-xs text-text-2">
              <span>{ll.jobsCompleted} jobs completed</span>
              <span>Since {ll.since}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
