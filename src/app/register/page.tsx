"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (form.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: form.username,
          email: form.email,
          password: form.password,
        }),
      });

      const data = await res.json();

      if (data.error) {
        setError(data.error);
      } else {
        router.push("/login?registered=true");
      }
    } catch {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-800 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Create Account</h1>
          <p className="text-neutral-400">Join EarnHub and start earning today</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-neutral-800/50 rounded-2xl p-8 border border-white/10">
          {error && (
            <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-400 text-sm">
              {error}
            </div>
          )}

          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-neutral-300 mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
              required
              minLength={3}
              className="w-full px-4 py-3 bg-neutral-900 border border-white/10 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-500 transition-colors"
              placeholder="Choose a username"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="w-full px-4 py-3 bg-neutral-900 border border-white/10 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-500 transition-colors"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-neutral-300 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
              minLength={6}
              className="w-full px-4 py-3 bg-neutral-900 border border-white/10 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-500 transition-colors"
              placeholder="Create a password"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-neutral-300 mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={form.confirmPassword}
              onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
              required
              className="w-full px-4 py-3 bg-neutral-900 border border-white/10 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-500 transition-colors"
              placeholder="Confirm your password"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-cyan-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>

          <div className="mt-6 text-center">
            <a href="/login" className="text-emerald-400 hover:text-emerald-300 text-sm">
              Already have an account? Sign in
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
