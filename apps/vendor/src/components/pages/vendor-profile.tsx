"use client";

import { useState } from "react";
import { User, Mail, Phone, MapPin, Star, Wrench, Upload, Camera } from "lucide-react";

export function VendorProfile() {
  const [services] = useState([
    { name: "Plumbing", active: true },
    { name: "HVAC", active: true },
    { name: "Electrical", active: false },
    { name: "General", active: true },
    { name: "Painting", active: false },
    { name: "Landscaping", active: false },
  ]);

  return (
    <div className="animate-[fadeIn_0.35s_ease] max-w-[900px]">
      {/* Business Info */}
      <div className="bg-card border border-border rounded-[16px] p-6 mb-5 shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
        <h3 className="text-[15px] font-bold text-text tracking-tight mb-6">Business Information</h3>

        <div className="flex items-center gap-5 mb-8">
          <div className="w-20 h-20 rounded-[16px] bg-gradient-to-br from-orange to-orange-dark flex items-center justify-center text-2xl font-bold text-white">
            MP
          </div>
          <div>
            <h2 className="text-lg font-extrabold text-text">Mike&apos;s Plumbing &amp; HVAC</h2>
            <div className="flex items-center gap-2 mt-1">
              <div className="flex items-center gap-0.5 text-orange">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={14} fill={s <= 4 ? "currentColor" : "none"} />
                ))}
              </div>
              <span className="text-xs text-text-2 font-bold">4.9 (32 reviews)</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
          <div>
            <label className="block text-xs font-semibold text-text-2 mb-1.5 uppercase tracking-wider">Business Name</label>
            <div className="flex items-center gap-3 px-4 py-3 bg-bg border border-border rounded-[10px]">
              <Wrench size={16} className="text-text-2" />
              <input type="text" defaultValue="Mike's Plumbing & HVAC" className="flex-1 bg-transparent text-sm text-text outline-none" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold text-text-2 mb-1.5 uppercase tracking-wider">Contact Email</label>
            <div className="flex items-center gap-3 px-4 py-3 bg-bg border border-border rounded-[10px]">
              <Mail size={16} className="text-text-2" />
              <input type="email" defaultValue="mike@mikesplumbing.com" className="flex-1 bg-transparent text-sm text-text outline-none" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold text-text-2 mb-1.5 uppercase tracking-wider">Phone</label>
            <div className="flex items-center gap-3 px-4 py-3 bg-bg border border-border rounded-[10px]">
              <Phone size={16} className="text-text-2" />
              <input type="tel" defaultValue="(555) 234-5678" className="flex-1 bg-transparent text-sm text-text outline-none" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold text-text-2 mb-1.5 uppercase tracking-wider">Service Area</label>
            <div className="flex items-center gap-3 px-4 py-3 bg-bg border border-border rounded-[10px]">
              <MapPin size={16} className="text-text-2" />
              <input type="text" defaultValue="Houston Metro, Spring, Katy" className="flex-1 bg-transparent text-sm text-text outline-none" />
            </div>
          </div>
        </div>

        <button className="mt-6 px-6 py-2.5 bg-orange text-white rounded-full text-[13px] font-bold transition-all hover:bg-orange-dark hover:shadow-[0_8px_24px_rgba(245,158,11,0.3)]">
          Save Changes
        </button>
      </div>

      {/* Services */}
      <div className="bg-card border border-border rounded-[16px] p-6 mb-5 shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
        <h3 className="text-[15px] font-bold text-text tracking-tight mb-5">Services Offered</h3>
        <div className="flex flex-wrap gap-2">
          {services.map((svc) => (
            <span
              key={svc.name}
              className={`px-4 py-2 rounded-lg text-[13px] font-semibold cursor-pointer transition-all border ${
                svc.active
                  ? "bg-orange-bg-2 border-orange text-orange-dark"
                  : "bg-bg border-border text-text-2 hover:border-orange"
              }`}
            >
              {svc.name}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 mt-6 max-sm:grid-cols-1">
          <div>
            <label className="block text-xs font-semibold text-text-2 mb-1.5 uppercase tracking-wider">Hourly Rate</label>
            <input type="text" defaultValue="$85" className="w-full px-4 py-3 bg-bg border border-border rounded-[10px] text-text text-sm outline-none focus:border-orange" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-text-2 mb-1.5 uppercase tracking-wider">License #</label>
            <input type="text" defaultValue="PLB-2024-78432" className="w-full px-4 py-3 bg-bg border border-border rounded-[10px] text-text text-sm outline-none focus:border-orange" />
          </div>
        </div>
      </div>

      {/* Documents & Portfolio */}
      <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
        <div className="bg-card border border-border rounded-[16px] p-6 shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
          <h3 className="text-[15px] font-bold text-text tracking-tight mb-5">Licenses & Insurance</h3>
          <div className="space-y-3">
            {[
              { name: "Business License", status: "Current", exp: "Dec 2026" },
              { name: "Liability Insurance", status: "Current", exp: "Aug 2026" },
              { name: "Plumbing License", status: "Current", exp: "Mar 2027" },
            ].map((doc, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-bg rounded-[10px] border border-border">
                <div>
                  <div className="text-sm font-semibold text-text">{doc.name}</div>
                  <div className="text-[11px] text-text-2">Exp: {doc.exp}</div>
                </div>
                <span className="text-[10px] font-bold bg-green-bg text-green px-2.5 py-1 rounded-md uppercase">{doc.status}</span>
              </div>
            ))}
            <button className="w-full py-3 border-2 border-dashed border-border rounded-[10px] text-xs font-semibold text-text-2 hover:border-orange hover:text-orange transition-all flex items-center justify-center gap-1.5">
              <Upload size={14} /> Upload Document
            </button>
          </div>
        </div>

        <div className="bg-card border border-border rounded-[16px] p-6 shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
          <h3 className="text-[15px] font-bold text-text tracking-tight mb-5">Portfolio</h3>
          <div className="grid grid-cols-3 gap-2 mb-3">
            {[1, 2, 3, 4, 5].map((n) => (
              <div
                key={n}
                className="aspect-square rounded-[10px] bg-bg border border-border flex items-center justify-center text-text-2 text-sm"
              >
                <Camera size={20} className="opacity-30" />
              </div>
            ))}
            <button className="aspect-square rounded-[10px] border-2 border-dashed border-border flex items-center justify-center text-text-2 hover:border-orange hover:text-orange transition-all">
              <Plus size={20} />
            </button>
          </div>
          <p className="text-[11px] text-text-2">Add photos of completed work to build your portfolio</p>
        </div>
      </div>
    </div>
  );
}

function Plus({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}
