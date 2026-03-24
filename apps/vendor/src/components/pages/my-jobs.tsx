"use client";

import { useState } from "react";
import { Clock, CheckCircle, Camera, MessageSquare } from "lucide-react";

type JobStatus = "accepted" | "in_progress" | "completed";

interface ActiveJob {
  id: string;
  address: string;
  category: string;
  landlord: string;
  status: JobStatus;
  accepted: string;
  deadline: string;
}

const STATUS_STYLES: Record<JobStatus, { bg: string; text: string; label: string }> = {
  accepted: { bg: "bg-blue-bg", text: "text-blue", label: "Accepted" },
  in_progress: { bg: "bg-orange-bg-2", text: "text-orange-dark", label: "In Progress" },
  completed: { bg: "bg-green-bg", text: "text-green", label: "Completed" },
};

const MY_JOBS: ActiveJob[] = [
  { id: "J-2041", address: "1420 Oak St, Unit 4B", category: "Plumbing", landlord: "Parkview Properties", status: "in_progress", accepted: "Mar 19", deadline: "Mar 22" },
  { id: "J-2038", address: "892 Elm Drive", category: "HVAC", landlord: "Green Leaf Rentals", status: "accepted", accepted: "Mar 20", deadline: "Mar 25" },
  { id: "J-2030", address: "560 Birch Lane", category: "Plumbing", landlord: "Parkview Properties", status: "completed", accepted: "Mar 10", deadline: "Mar 14" },
  { id: "J-2025", address: "3100 Maple Ave", category: "General", landlord: "Summit Property Group", status: "completed", accepted: "Mar 5", deadline: "Mar 8" },
];

export function MyJobs() {
  const [filter, setFilter] = useState<"all" | JobStatus>("all");

  const filtered = filter === "all" ? MY_JOBS : MY_JOBS.filter((j) => j.status === filter);

  return (
    <div className="animate-[fadeIn_0.35s_ease]">
      {/* Tabs */}
      <div className="flex gap-1 bg-bg p-1 rounded-[10px] mb-6 w-fit">
        {[
          { id: "all" as const, label: "All" },
          { id: "accepted" as const, label: "Accepted" },
          { id: "in_progress" as const, label: "In Progress" },
          { id: "completed" as const, label: "Completed" },
        ].map((t) => (
          <button
            key={t.id}
            onClick={() => setFilter(t.id)}
            className={`px-5 py-2 rounded-lg text-[13px] font-semibold transition-all ${
              filter === t.id ? "bg-card text-text shadow-[0_1px_3px_rgba(0,0,0,0.06)]" : "text-text-2"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-3.5">
        {filtered.map((job) => {
          const s = STATUS_STYLES[job.status];
          return (
            <div key={job.id} className="bg-card border border-border rounded-[16px] p-5 px-6 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-[15px] font-bold text-text tracking-tight">{job.address}</h3>
                  <p className="text-xs text-text-2 mt-0.5">{job.id} &bull; {job.category} &bull; {job.landlord}</p>
                </div>
                <span className={`text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider ${s.bg} ${s.text}`}>
                  {s.label}
                </span>
              </div>

              <div className="flex items-center gap-4 text-xs text-text-2 mb-4">
                <span className="flex items-center gap-1"><Clock size={12} /> Accepted: {job.accepted}</span>
                <span className="flex items-center gap-1"><Clock size={12} /> Deadline: {job.deadline}</span>
              </div>

              {job.status !== "completed" && (
                <div className="flex gap-2 pt-4 border-t border-border">
                  {job.status === "accepted" && (
                    <button className="px-5 py-2.5 bg-orange text-white rounded-full text-[13px] font-bold transition-all hover:bg-orange-dark">
                      Start Work
                    </button>
                  )}
                  {job.status === "in_progress" && (
                    <>
                      <button className="px-5 py-2.5 bg-green text-white rounded-full text-[13px] font-bold flex items-center gap-1.5 transition-all hover:bg-[#059669]">
                        <CheckCircle size={14} /> Mark Complete
                      </button>
                      <button className="px-4 py-2.5 bg-card border border-border rounded-full text-[13px] font-semibold text-text-2 flex items-center gap-1.5 hover:text-text transition-all">
                        <Camera size={14} /> Add Photos
                      </button>
                      <button className="px-4 py-2.5 bg-card border border-border rounded-full text-[13px] font-semibold text-text-2 flex items-center gap-1.5 hover:text-text transition-all">
                        <MessageSquare size={14} /> Add Notes
                      </button>
                    </>
                  )}
                </div>
              )}

              {job.status === "completed" && (
                <div className="flex gap-2 pt-4 border-t border-border">
                  <button className="px-5 py-2.5 bg-orange text-white rounded-full text-[13px] font-bold transition-all hover:bg-orange-dark">
                    Create Invoice
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
