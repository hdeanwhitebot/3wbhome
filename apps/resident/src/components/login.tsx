"use client";

import { useState } from "react";

interface LoginScreenProps {
  onLogin: () => void;
}

export function LoginScreen({ onLogin }: LoginScreenProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // TODO: Supabase auth
    setTimeout(() => {
      setLoading(false);
      onLogin();
    }, 800);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[30%] w-[600px] h-[600px] rounded-full bg-blue/[0.08] blur-[120px]" />
        <div className="absolute bottom-[20%] right-[30%] w-[400px] h-[400px] rounded-full bg-green/[0.05] blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-[400px] px-6">
        <div className="bg-dark-3 border border-border-2 rounded-[20px] p-10 shadow-[0_12px_48px_rgba(0,0,0,0.4)]">
          {/* Brand */}
          <div className="text-center mb-10">
            <h1 className="text-[28px] font-extrabold tracking-tight mb-1">
              3WB <span className="text-blue">Home</span>
            </h1>
            <p className="text-[13px] text-text-3 font-medium">Resident Portal</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label className="block text-xs font-semibold text-text-3 mb-1.5 uppercase tracking-wider">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="w-full px-4 py-3 bg-white/5 border border-border-2 rounded-[8px] text-text-1 text-sm transition-all focus:border-blue focus:bg-blue/5 focus:shadow-[0_0_0_3px_rgba(37,99,235,0.15)] placeholder:text-text-4 outline-none"
                required
              />
            </div>

            <div className="mb-5">
              <label className="block text-xs font-semibold text-text-3 mb-1.5 uppercase tracking-wider">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-white/5 border border-border-2 rounded-[8px] text-text-1 text-sm transition-all focus:border-blue focus:bg-blue/5 focus:shadow-[0_0_0_3px_rgba(37,99,235,0.15)] placeholder:text-text-4 outline-none"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-blue text-white rounded-full text-[15px] font-bold transition-all hover:bg-blue-light hover:shadow-[0_8px_30px_rgba(37,99,235,0.4)] hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed mt-2"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <a
            href="#"
            className="block text-center mt-4 text-[13px] text-text-3 font-medium hover:text-blue-light transition-colors"
          >
            Forgot password?
          </a>

          <div className="text-center mt-8 pt-6 border-t border-border text-xs text-text-4">
            Powered by 3WB &bull; Investor Supercharged
          </div>
        </div>
      </div>
    </div>
  );
}
