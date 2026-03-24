"use client";

import { useState } from "react";

interface LoginScreenProps {
  onLogin: () => void;
}

export function LoginScreen({ onLogin }: LoginScreenProps) {
  const [tab, setTab] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [signupStep, setSignupStep] = useState(1);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onLogin();
    }, 800);
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]">
      {/* Decorative orbs */}
      <div className="absolute -top-[200px] -right-[100px] w-[600px] h-[600px] rounded-full bg-orange/[0.08]" />
      <div className="absolute -bottom-[150px] -left-[100px] w-[400px] h-[400px] rounded-full bg-orange/[0.05]" />

      <div className="relative z-10 w-full max-w-[440px] px-6">
        {/* Brand */}
        <div className="text-center mb-10">
          <h1 className="text-[28px] font-extrabold text-white tracking-tight">
            3WB <span className="text-orange">Vendor</span>
          </h1>
          <p className="text-sm text-white/40 mt-1.5 font-medium">Vendor Portal</p>
        </div>

        {/* Card */}
        <div className="bg-white/[0.06] backdrop-blur-[40px] border border-white/10 rounded-[20px] p-9 shadow-[0_30px_80px_rgba(0,0,0,0.3)]">
          {/* Tabs */}
          <div className="flex gap-1 mb-7 bg-white/[0.06] rounded-[10px] p-1">
            <button
              onClick={() => setTab("login")}
              className={`flex-1 py-2.5 text-center text-[13px] font-semibold rounded-lg transition-all ${
                tab === "login" ? "bg-white/[0.12] text-white" : "text-white/40"
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setTab("signup")}
              className={`flex-1 py-2.5 text-center text-[13px] font-semibold rounded-lg transition-all ${
                tab === "signup" ? "bg-white/[0.12] text-white" : "text-white/40"
              }`}
            >
              Apply
            </button>
          </div>

          {tab === "login" ? (
            <form onSubmit={handleLogin}>
              <div className="mb-[18px]">
                <label className="block text-xs font-semibold text-white/50 mb-1.5 uppercase tracking-wider">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full px-4 py-3 bg-white/[0.06] border border-white/10 rounded-[10px] text-white text-sm outline-none focus:border-orange focus:bg-white/[0.08] placeholder:text-white/25 transition-all"
                  required
                />
              </div>
              <div className="mb-[18px]">
                <label className="block text-xs font-semibold text-white/50 mb-1.5 uppercase tracking-wider">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 bg-white/[0.06] border border-white/10 rounded-[10px] text-white text-sm outline-none focus:border-orange focus:bg-white/[0.08] placeholder:text-white/25 transition-all"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-orange text-white rounded-full text-[15px] font-bold transition-all hover:bg-orange-dark hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(245,158,11,0.3)] disabled:opacity-50"
              >
                {loading ? "Signing in..." : "Sign In"}
              </button>
              <div className="text-center mt-5">
                <a href="#" className="text-orange text-[13px] font-medium">
                  Forgot password?
                </a>
              </div>
            </form>
          ) : (
            <div>
              {/* Signup step dots */}
              <div className="flex justify-center gap-2 mb-6">
                {[1, 2, 3].map((step) => (
                  <div
                    key={step}
                    className={`h-2 rounded-full transition-all ${
                      step === signupStep
                        ? "w-6 bg-orange"
                        : step < signupStep
                          ? "w-2 bg-green"
                          : "w-2 bg-white/15"
                    }`}
                  />
                ))}
              </div>

              {signupStep === 1 && (
                <div className="space-y-[18px]">
                  <div>
                    <label className="block text-xs font-semibold text-white/50 mb-1.5 uppercase tracking-wider">
                      Business Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your Business LLC"
                      className="w-full px-4 py-3 bg-white/[0.06] border border-white/10 rounded-[10px] text-white text-sm outline-none focus:border-orange placeholder:text-white/25 transition-all"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-white/50 mb-1.5 uppercase tracking-wider">
                        First Name
                      </label>
                      <input
                        type="text"
                        placeholder="John"
                        className="w-full px-4 py-3 bg-white/[0.06] border border-white/10 rounded-[10px] text-white text-sm outline-none focus:border-orange placeholder:text-white/25 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-white/50 mb-1.5 uppercase tracking-wider">
                        Last Name
                      </label>
                      <input
                        type="text"
                        placeholder="Smith"
                        className="w-full px-4 py-3 bg-white/[0.06] border border-white/10 rounded-[10px] text-white text-sm outline-none focus:border-orange placeholder:text-white/25 transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-white/50 mb-1.5 uppercase tracking-wider">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="john@smithplumbing.com"
                      className="w-full px-4 py-3 bg-white/[0.06] border border-white/10 rounded-[10px] text-white text-sm outline-none focus:border-orange placeholder:text-white/25 transition-all"
                    />
                  </div>
                  <button
                    onClick={() => setSignupStep(2)}
                    className="w-full py-3.5 bg-orange text-white rounded-full text-[15px] font-bold transition-all hover:bg-orange-dark hover:-translate-y-0.5"
                  >
                    Continue
                  </button>
                </div>
              )}

              {signupStep === 2 && (
                <div className="space-y-[18px]">
                  <div>
                    <label className="block text-xs font-semibold text-white/50 mb-1.5 uppercase tracking-wider">
                      Services Offered
                    </label>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {["Plumbing", "Electrical", "HVAC", "Painting", "General", "Landscaping", "Pest Control", "Roofing"].map(
                        (svc) => (
                          <label
                            key={svc}
                            className="flex items-center gap-1.5 text-xs text-white/60 font-medium cursor-pointer px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] transition-all hover:border-orange hover:text-orange"
                          >
                            <input type="checkbox" className="hidden" />
                            {svc}
                          </label>
                        )
                      )}
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-white/50 mb-1.5 uppercase tracking-wider">
                      Service Area
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Houston Metro, Spring, Katy"
                      className="w-full px-4 py-3 bg-white/[0.06] border border-white/10 rounded-[10px] text-white text-sm outline-none focus:border-orange placeholder:text-white/25 transition-all"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-white/50 mb-1.5 uppercase tracking-wider">
                        License #
                      </label>
                      <input
                        type="text"
                        placeholder="Optional"
                        className="w-full px-4 py-3 bg-white/[0.06] border border-white/10 rounded-[10px] text-white text-sm outline-none focus:border-orange placeholder:text-white/25 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-white/50 mb-1.5 uppercase tracking-wider">
                        Hourly Rate
                      </label>
                      <input
                        type="text"
                        placeholder="$75"
                        className="w-full px-4 py-3 bg-white/[0.06] border border-white/10 rounded-[10px] text-white text-sm outline-none focus:border-orange placeholder:text-white/25 transition-all"
                      />
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setSignupStep(1)}
                      className="flex-1 py-3 bg-white/[0.06] text-white/70 border border-white/10 rounded-full text-[13px] font-semibold transition-all hover:bg-white/10"
                    >
                      Back
                    </button>
                    <button
                      onClick={() => setSignupStep(3)}
                      className="flex-1 py-3 bg-orange text-white rounded-full text-[15px] font-bold transition-all hover:bg-orange-dark"
                    >
                      Continue
                    </button>
                  </div>
                </div>
              )}

              {signupStep === 3 && (
                <div className="space-y-[18px]">
                  <div>
                    <label className="block text-xs font-semibold text-white/50 mb-1.5 uppercase tracking-wider">
                      Insurance Certificate
                    </label>
                    <div className="p-5 border-2 border-dashed border-white/[0.12] rounded-[10px] text-center cursor-pointer transition-all hover:border-orange hover:bg-orange/[0.04]">
                      <div className="text-2xl mb-1">📄</div>
                      <span className="block text-xs text-white/35 mt-1">Upload PDF or image</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-white/50 mb-1.5 uppercase tracking-wider">
                      Create Password
                    </label>
                    <input
                      type="password"
                      placeholder="Min. 8 characters"
                      className="w-full px-4 py-3 bg-white/[0.06] border border-white/10 rounded-[10px] text-white text-sm outline-none focus:border-orange placeholder:text-white/25 transition-all"
                    />
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setSignupStep(2)}
                      className="flex-1 py-3 bg-white/[0.06] text-white/70 border border-white/10 rounded-full text-[13px] font-semibold transition-all hover:bg-white/10"
                    >
                      Back
                    </button>
                    <button
                      onClick={() => {
                        setLoading(true);
                        setTimeout(() => {
                          setLoading(false);
                          onLogin();
                        }, 800);
                      }}
                      className="flex-1 py-3 bg-orange text-white rounded-full text-[15px] font-bold transition-all hover:bg-orange-dark"
                    >
                      Submit Application
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
