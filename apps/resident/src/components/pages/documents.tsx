"use client";

import { FileText, Download, Upload, Eye, Calendar } from "lucide-react";

const DOCUMENTS = [
  { name: "Lease Agreement — Unit 4B", type: "Lease", size: "2.4 MB", date: "Aug 15, 2025", status: "Active" },
  { name: "Move-In Inspection Report", type: "Inspection", size: "1.8 MB", date: "Aug 14, 2025", status: "Signed" },
  { name: "Renter's Insurance Policy", type: "Insurance", size: "890 KB", date: "Aug 20, 2025", status: "Active" },
  { name: "Pet Addendum", type: "Addendum", size: "340 KB", date: "Aug 15, 2025", status: "Signed" },
  { name: "Parking Agreement", type: "Addendum", size: "210 KB", date: "Aug 15, 2025", status: "Signed" },
];

export function Documents() {
  return (
    <div className="animate-[fadeIn_0.35s_ease]">
      {/* Upload area */}
      <div className="bg-card border border-border rounded-[14px] p-6 mb-5 hover:border-border-2 transition-all">
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-[15px] font-bold tracking-tight">Lease Documents</h3>
          <button className="px-4 py-2 bg-blue text-white rounded-full text-xs font-bold flex items-center gap-1.5 transition-all hover:bg-blue-light hover:shadow-[0_8px_30px_rgba(37,99,235,0.4)]">
            <Upload size={14} /> Upload Document
          </button>
        </div>

        <div className="border-2 border-dashed border-border-2 rounded-[14px] p-8 text-center cursor-pointer hover:border-blue-light hover:bg-blue/[0.03] transition-all mb-5">
          <Upload size={28} className="mx-auto mb-2 text-text-3" />
          <div className="text-[13px] text-text-3">
            <span className="text-blue-light font-semibold">Click to upload</span> or drag and drop
          </div>
          <div className="text-[11px] text-text-4 mt-1">PDF, JPG, PNG up to 10MB</div>
        </div>
      </div>

      {/* Document list */}
      <div className="bg-card border border-border rounded-[14px] hover:border-border-2 transition-all">
        <div className="p-6 border-b border-border">
          <h3 className="text-[15px] font-bold tracking-tight">All Documents</h3>
        </div>

        <div className="divide-y divide-border">
          {DOCUMENTS.map((doc, i) => (
            <div
              key={i}
              className="flex items-center gap-4 px-6 py-4 hover:bg-white/[0.02] transition-all"
            >
              <div className="w-10 h-10 rounded-[10px] bg-blue/10 flex items-center justify-center shrink-0">
                <FileText size={18} className="text-blue" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold truncate">{doc.name}</h4>
                <div className="flex items-center gap-3 mt-0.5">
                  <span className="text-[11px] text-text-3">{doc.type}</span>
                  <span className="text-[11px] text-text-4">{doc.size}</span>
                  <span className="flex items-center gap-1 text-[11px] text-text-4">
                    <Calendar size={10} /> {doc.date}
                  </span>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-green/10 text-green">
                {doc.status}
              </span>
              <div className="flex gap-2">
                <button className="w-8 h-8 rounded-[8px] bg-card hover:bg-card-hover flex items-center justify-center text-text-3 hover:text-text-1 transition-all border border-border">
                  <Eye size={14} />
                </button>
                <button className="w-8 h-8 rounded-[8px] bg-card hover:bg-card-hover flex items-center justify-center text-text-3 hover:text-text-1 transition-all border border-border">
                  <Download size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
