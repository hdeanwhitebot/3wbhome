"use client";

import { useState } from "react";
import { User, Mail, Phone, Bell, Shield, MessageSquare } from "lucide-react";

export function Profile() {
  const [notifications, setNotifications] = useState({
    rent: true,
    workOrders: true,
    announcements: false,
    sms: true,
  });

  return (
    <div className="animate-[fadeIn_0.35s_ease] max-w-[800px]">
      {/* Personal Info */}
      <div className="bg-card border border-border rounded-[14px] p-6 mb-5 hover:border-border-2 transition-all">
        <h3 className="text-[15px] font-bold tracking-tight mb-6">Personal Information</h3>

        <div className="flex items-center gap-5 mb-8">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue to-purple flex items-center justify-center text-2xl font-bold">
            SJ
          </div>
          <div>
            <h2 className="text-lg font-bold">Sarah Johnson</h2>
            <p className="text-sm text-text-3">Resident since Aug 2025</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
          <div>
            <label className="block text-xs font-semibold text-text-3 mb-1.5 uppercase tracking-wider">
              Full Name
            </label>
            <div className="flex items-center gap-3 px-4 py-3 bg-white/5 border border-border-2 rounded-[8px]">
              <User size={16} className="text-text-3" />
              <input
                type="text"
                defaultValue="Sarah Johnson"
                className="flex-1 bg-transparent text-sm text-text-1 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-text-3 mb-1.5 uppercase tracking-wider">
              Email
            </label>
            <div className="flex items-center gap-3 px-4 py-3 bg-white/5 border border-border-2 rounded-[8px]">
              <Mail size={16} className="text-text-3" />
              <input
                type="email"
                defaultValue="sarah.johnson@email.com"
                className="flex-1 bg-transparent text-sm text-text-1 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-text-3 mb-1.5 uppercase tracking-wider">
              Phone
            </label>
            <div className="flex items-center gap-3 px-4 py-3 bg-white/5 border border-border-2 rounded-[8px]">
              <Phone size={16} className="text-text-3" />
              <input
                type="tel"
                defaultValue="(555) 123-4567"
                className="flex-1 bg-transparent text-sm text-text-1 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-text-3 mb-1.5 uppercase tracking-wider">
              Emergency Contact
            </label>
            <div className="flex items-center gap-3 px-4 py-3 bg-white/5 border border-border-2 rounded-[8px]">
              <Shield size={16} className="text-text-3" />
              <input
                type="text"
                defaultValue="Tom Johnson — (555) 987-6543"
                className="flex-1 bg-transparent text-sm text-text-1 outline-none"
              />
            </div>
          </div>
        </div>

        <button className="mt-6 px-6 py-2.5 bg-blue text-white rounded-full text-[13px] font-bold transition-all hover:bg-blue-light hover:shadow-[0_8px_30px_rgba(37,99,235,0.4)]">
          Save Changes
        </button>
      </div>

      {/* Notification Preferences */}
      <div className="bg-card border border-border rounded-[14px] p-6 mb-5 hover:border-border-2 transition-all">
        <h3 className="text-[15px] font-bold tracking-tight mb-6">
          <Bell size={16} className="inline mr-2" />
          Notification Preferences
        </h3>

        <div className="flex flex-col gap-4">
          {[
            { key: "rent" as const, label: "Rent Reminders", desc: "Get notified before rent is due" },
            { key: "workOrders" as const, label: "Work Order Updates", desc: "Status changes on your requests" },
            { key: "announcements" as const, label: "Community Announcements", desc: "Building news and updates" },
            { key: "sms" as const, label: "SMS Notifications", desc: "Receive text messages for urgent updates" },
          ].map((pref) => (
            <div key={pref.key} className="flex items-center justify-between py-2">
              <div>
                <div className="text-sm font-semibold">{pref.label}</div>
                <div className="text-xs text-text-3 mt-0.5">{pref.desc}</div>
              </div>
              <button
                onClick={() =>
                  setNotifications((prev) => ({ ...prev, [pref.key]: !prev[pref.key] }))
                }
                className={`w-11 h-6 rounded-full relative cursor-pointer transition-colors duration-300 ${
                  notifications[pref.key] ? "bg-green" : "bg-white/15"
                }`}
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-[0_2px_4px_rgba(0,0,0,0.2)] transition-transform duration-300 ${
                    notifications[pref.key] ? "translate-x-5" : ""
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Contact PM */}
      <div className="bg-card border border-border rounded-[14px] p-6 hover:border-border-2 transition-all">
        <h3 className="text-[15px] font-bold tracking-tight mb-4">
          <MessageSquare size={16} className="inline mr-2" />
          Contact Property Manager
        </h3>
        <div className="flex items-center gap-4 p-4 bg-white/[0.03] rounded-[10px] border border-border">
          <div className="w-12 h-12 rounded-full bg-green/10 flex items-center justify-center text-green text-sm font-bold">
            PM
          </div>
          <div className="flex-1">
            <h4 className="text-sm font-bold">Parkview Management Office</h4>
            <p className="text-xs text-text-3 mt-0.5">office@parkviewresidences.com &bull; (555) 000-1234</p>
          </div>
          <button className="px-5 py-2.5 bg-card border border-border rounded-full text-xs font-semibold text-text-2 hover:text-text-1 hover:border-border-2 transition-all">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}
