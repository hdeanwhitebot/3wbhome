"use client";

import { useState } from "react";
import {
  Plus,
  Camera,
  Clock,
  CheckCircle,
  AlertTriangle,
  Wrench,
  Droplets,
  Zap,
  Wind,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

type UrgencyLevel = "low" | "medium" | "high" | "emergency";

const URGENCY_STYLES: Record<UrgencyLevel, { bg: string; text: string; label: string }> = {
  low: { bg: "bg-green/10", text: "text-green", label: "Low" },
  medium: { bg: "bg-orange/10", text: "text-orange", label: "Medium" },
  high: { bg: "bg-red/10", text: "text-red", label: "High" },
  emergency: { bg: "bg-red/10", text: "text-red", label: "Emergency" },
};

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  plumbing: <Droplets size={16} />,
  electrical: <Zap size={16} />,
  hvac: <Wind size={16} />,
  general: <Wrench size={16} />,
};

interface DemoWorkOrder {
  id: string;
  title: string;
  category: string;
  urgency: UrgencyLevel;
  status: string;
  created: string;
  timeline: { status: string; date: string; note: string }[];
}

const DEMO_ORDERS: DemoWorkOrder[] = [
  {
    id: "WO-1031",
    title: "Kitchen faucet leaking",
    category: "plumbing",
    urgency: "medium",
    status: "In Progress",
    created: "Mar 17, 2026",
    timeline: [
      { status: "Submitted", date: "Mar 17", note: "Work order submitted by resident" },
      { status: "Reviewed", date: "Mar 17", note: "Reviewed by property manager" },
      { status: "Assigned", date: "Mar 18", note: "Assigned to Mike's Plumbing" },
      { status: "In Progress", date: "Mar 19", note: "Vendor on-site, working on repair" },
    ],
  },
  {
    id: "WO-1024",
    title: "Bathroom light fixture replacement",
    category: "electrical",
    urgency: "low",
    status: "Completed",
    created: "Mar 5, 2026",
    timeline: [
      { status: "Submitted", date: "Mar 5", note: "Work order submitted" },
      { status: "Assigned", date: "Mar 6", note: "Assigned to Bright Electric" },
      { status: "Completed", date: "Mar 10", note: "New fixture installed, tested" },
    ],
  },
  {
    id: "WO-1018",
    title: "HVAC filter needs changing",
    category: "hvac",
    urgency: "low",
    status: "Completed",
    created: "Feb 20, 2026",
    timeline: [
      { status: "Submitted", date: "Feb 20", note: "Filter replacement requested" },
      { status: "Completed", date: "Feb 22", note: "Filter replaced by maintenance" },
    ],
  },
];

export function WorkOrders() {
  const [showForm, setShowForm] = useState(false);
  const [expandedOrder, setExpandedOrder] = useState<string | null>(null);

  return (
    <div className="animate-[fadeIn_0.35s_ease]">
      <div className="grid grid-cols-2 gap-5 max-lg:grid-cols-1">
        {/* Submit Work Order */}
        <div className="bg-card border border-border rounded-[14px] p-6 hover:border-border-2 transition-all">
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-[15px] font-bold tracking-tight">Submit Work Order</h3>
            <button
              onClick={() => setShowForm(!showForm)}
              className="px-4 py-2 bg-blue text-white rounded-full text-xs font-bold flex items-center gap-1.5 transition-all hover:bg-blue-light hover:shadow-[0_8px_30px_rgba(37,99,235,0.4)]"
            >
              <Plus size={14} /> New Request
            </button>
          </div>

          {showForm && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-text-3 mb-1.5 uppercase tracking-wider">
                    Category
                  </label>
                  <select className="w-full px-4 py-3 bg-white/5 border border-border-2 rounded-[8px] text-text-1 text-sm outline-none focus:border-blue appearance-none">
                    <option value="">Select category</option>
                    <option value="plumbing">Plumbing</option>
                    <option value="electrical">Electrical</option>
                    <option value="hvac">HVAC</option>
                    <option value="appliance">Appliance</option>
                    <option value="general">General</option>
                    <option value="painting">Painting</option>
                    <option value="pest_control">Pest Control</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-text-3 mb-1.5 uppercase tracking-wider">
                    Urgency
                  </label>
                  <select className="w-full px-4 py-3 bg-white/5 border border-border-2 rounded-[8px] text-text-1 text-sm outline-none focus:border-blue appearance-none">
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                    <option value="emergency">Emergency</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-text-3 mb-1.5 uppercase tracking-wider">
                  Description
                </label>
                <textarea
                  placeholder="Describe the issue in detail..."
                  className="w-full px-4 py-3 bg-white/5 border border-border-2 rounded-[8px] text-text-1 text-sm outline-none focus:border-blue resize-y min-h-[100px] placeholder:text-text-4"
                />
              </div>

              {/* Photo upload */}
              <div className="border-2 border-dashed border-border-2 rounded-[14px] p-8 text-center cursor-pointer hover:border-blue-light hover:bg-blue/[0.03] transition-all">
                <Camera size={28} className="mx-auto mb-2 text-text-3" />
                <div className="text-[13px] text-text-3">
                  <span className="text-blue-light font-semibold">Click to upload</span> or drag
                  photos
                </div>
              </div>

              <button className="w-full py-3 bg-blue text-white rounded-full text-[13px] font-bold transition-all hover:bg-blue-light hover:shadow-[0_8px_30px_rgba(37,99,235,0.4)]">
                Submit Work Order
              </button>
            </div>
          )}

          {!showForm && (
            <div className="text-center py-8 text-text-3">
              <Wrench size={32} className="mx-auto mb-3 opacity-40" />
              <p className="text-sm">Need something fixed?</p>
              <p className="text-xs mt-1">Click &quot;New Request&quot; to submit a work order</p>
            </div>
          )}
        </div>

        {/* Work Order List */}
        <div className="bg-card border border-border rounded-[14px] p-6 hover:border-border-2 transition-all">
          <h3 className="text-[15px] font-bold tracking-tight mb-5">Your Work Orders</h3>
          <div className="flex flex-col gap-3">
            {DEMO_ORDERS.map((order) => {
              const urgency = URGENCY_STYLES[order.urgency];
              const isExpanded = expandedOrder === order.id;
              const catIcon = CATEGORY_ICONS[order.category] || <Wrench size={16} />;

              return (
                <div
                  key={order.id}
                  className="border border-border rounded-[14px] overflow-hidden hover:border-border-2 transition-all"
                >
                  <button
                    onClick={() => setExpandedOrder(isExpanded ? null : order.id)}
                    className="w-full flex items-center gap-4 p-[18px] text-left"
                  >
                    <div className="w-9 h-9 rounded-[10px] bg-blue/10 flex items-center justify-center text-blue shrink-0">
                      {catIcon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold mb-0.5">{order.title}</h4>
                      <span className="text-xs text-text-3">
                        {order.id} &bull; {order.created}
                      </span>
                    </div>
                    <span className={`px-2.5 py-1 rounded-md text-[11px] font-bold ${urgency.bg} ${urgency.text}`}>
                      {urgency.label}
                    </span>
                    <span className={`px-2.5 py-1 rounded-md text-[11px] font-bold ${
                      order.status === "Completed" ? "bg-green/10 text-green" : "bg-blue/10 text-blue"
                    }`}>
                      {order.status}
                    </span>
                    {isExpanded ? <ChevronUp size={16} className="text-text-3" /> : <ChevronDown size={16} className="text-text-3" />}
                  </button>

                  {isExpanded && (
                    <div className="px-[18px] pb-[18px] border-t border-border pt-4">
                      <div className="flex flex-col gap-3 pl-2">
                        {order.timeline.map((step, i) => (
                          <div key={i} className="flex items-start gap-3 relative">
                            <div className="flex flex-col items-center">
                              <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                                i === order.timeline.length - 1 ? "bg-blue/20 text-blue" : "bg-green/20 text-green"
                              }`}>
                                {i === order.timeline.length - 1 ? (
                                  <Clock size={12} />
                                ) : (
                                  <CheckCircle size={12} />
                                )}
                              </div>
                              {i < order.timeline.length - 1 && (
                                <div className="w-px h-6 bg-border mt-1" />
                              )}
                            </div>
                            <div className="pb-1">
                              <div className="text-xs font-bold">{step.status}</div>
                              <div className="text-[11px] text-text-3">{step.note}</div>
                              <div className="text-[10px] text-text-4 mt-0.5">{step.date}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
