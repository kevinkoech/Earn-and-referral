"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// Types
type User = {
  id: number;
  username: string;
  email: string;
  role: string;
  status: string;
  coins: number;
  referralCode: string;
  level: number;
  xp: number;
  createdAt: Date | null;
};

type Video = {
  id: number;
  title: string;
  description: string | null;
  url: string;
  thumbnail: string | null;
  coinsReward: number;
  duration: number | null;
  status: string;
  createdAt: Date | null;
};

type Task = {
  id: number;
  title: string;
  description: string | null;
  type: string;
  coinsReward: number;
  status: string;
  createdAt: Date | null;
};

type Redemption = {
  id: number;
  userId: number;
  amount: number;
  method: string;
  address: string | null;
  status: string;
  createdAt: Date | null;
  processedAt: Date | null;
};

type Stats = {
  totalUsers: number;
  pendingUsers: number;
  suspendedUsers: number;
  totalCoins: number;
  pendingRedemptions: number;
  totalVideos: number;
  totalTasks: number;
};

type Props = {
  adminUser: User;
  users: User[];
  videos: Video[];
  tasks: Task[];
  redemptions: Redemption[];
  stats: Stats;
};

export default function AdminDashboard({
  adminUser,
  users,
  videos,
  tasks,
  redemptions,
  stats,
}: Props) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"overview" | "users" | "videos" | "tasks" | "redemptions">("overview");
  const [loading, setLoading] = useState(false);

  // User management states
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  // Video form states
  const [videoForm, setVideoForm] = useState({
    title: "",
    description: "",
    url: "",
    coinsReward: 0.1,
  });

  // Task form states
  const [taskForm, setTaskForm] = useState({
    title: "",
    description: "",
    type: "survey",
    coinsReward: 0.5,
  });

  // Coin adjustment
  const [coinAdjustment, setCoinAdjustment] = useState({ userId: 0, amount: 0, reason: "" });

  // Logout handler
  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
  };

  // User actions
  const handleApproveUser = async (userId: number) => {
    setLoading(true);
    try {
      await fetch("/api/admin/users/approve", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId }),
      });
      router.refresh();
    } finally {
      setLoading(false);
    }
  };

  const handleSuspendUser = async (userId: number) => {
    setLoading(true);
    try {
      await fetch("/api/admin/users/suspend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId }),
      });
      router.refresh();
    } finally {
      setLoading(false);
    }
  };

  const handleActivateUser = async (userId: number) => {
    setLoading(true);
    try {
      await fetch("/api/admin/users/activate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId }),
      });
      router.refresh();
    } finally {
      setLoading(false);
    }
  };

  // Video actions
  const handleAddVideo = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/admin/videos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(videoForm),
      });
      setVideoForm({ title: "", description: "", url: "", coinsReward: 0.1 });
      router.refresh();
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteVideo = async (videoId: number) => {
    if (!confirm("Are you sure you want to delete this video?")) return;
    setLoading(true);
    try {
      await fetch(`/api/admin/videos?id=${videoId}`, { method: "DELETE" });
      router.refresh();
    } finally {
      setLoading(false);
    }
  };

  // Task actions
  const handleAddTask = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/admin/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(taskForm),
      });
      setTaskForm({ title: "", description: "", type: "survey", coinsReward: 0.5 });
      router.refresh();
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteTask = async (taskId: number) => {
    if (!confirm("Are you sure you want to delete this task?")) return;
    setLoading(true);
    try {
      await fetch(`/api/admin/tasks?id=${taskId}`, { method: "DELETE" });
      router.refresh();
    } finally {
      setLoading(false);
    }
  };

  // Redemption actions
  const handleApproveRedemption = async (redemptionId: number) => {
    setLoading(true);
    try {
      await fetch("/api/admin/redemptions/approve", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ redemptionId }),
      });
      router.refresh();
    } finally {
      setLoading(false);
    }
  };

  const handleRejectRedemption = async (redemptionId: number) => {
    setLoading(true);
    try {
      await fetch("/api/admin/redemptions/reject", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ redemptionId }),
      });
      router.refresh();
    } finally {
      setLoading(false);
    }
  };

  // Coin adjustment
  const handleAdjustCoins = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/admin/users/coins", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(coinAdjustment),
      });
      setCoinAdjustment({ userId: 0, amount: 0, reason: "" });
      router.refresh();
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
      case "active":
        return "text-emerald-400 bg-emerald-400/20";
      case "pending":
        return "text-yellow-400 bg-yellow-400/20";
      case "suspended":
      case "rejected":
      case "inactive":
        return "text-red-400 bg-red-400/20";
      default:
        return "text-neutral-400 bg-neutral-400/20";
    }
  };

  return (
    <div className="min-h-screen bg-neutral-900">
      {/* Header */}
      <header className="bg-neutral-800 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <h1 className="text-xl font-bold text-white">EarnHub Admin</h1>
              <span className="px-2 py-1 text-xs bg-emerald-500/20 text-emerald-400 rounded">
                Admin
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-neutral-400 text-sm">
                Welcome, {adminUser.username}
              </span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm text-neutral-400 hover:text-white transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-neutral-800/50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1">
            {[
              { id: "overview", label: "Overview" },
              { id: "users", label: "Users" },
              { id: "videos", label: "Videos" },
              { id: "tasks", label: "Tasks" },
              { id: "redemptions", label: "Redemptions" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`px-4 py-3 text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? "text-emerald-400 border-b-2 border-emerald-400"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Dashboard Overview</h2>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-neutral-800 rounded-xl p-6 border border-white/10">
                <div className="text-neutral-400 text-sm mb-1">Total Users</div>
                <div className="text-3xl font-bold text-white">{stats.totalUsers}</div>
              </div>
              <div className="bg-neutral-800 rounded-xl p-6 border border-white/10">
                <div className="text-neutral-400 text-sm mb-1">Pending Users</div>
                <div className="text-3xl font-bold text-yellow-400">{stats.pendingUsers}</div>
              </div>
              <div className="bg-neutral-800 rounded-xl p-6 border border-white/10">
                <div className="text-neutral-400 text-sm mb-1">Suspended Users</div>
                <div className="text-3xl font-bold text-red-400">{stats.suspendedUsers}</div>
              </div>
              <div className="bg-neutral-800 rounded-xl p-6 border border-white/10">
                <div className="text-neutral-400 text-sm mb-1">Total Coins</div>
                <div className="text-3xl font-bold text-emerald-400">{stats.totalCoins.toFixed(2)}</div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-neutral-800 rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-4">Pending Redemptions</h3>
                <div className="text-4xl font-bold text-yellow-400">{stats.pendingRedemptions}</div>
                <p className="text-neutral-400 text-sm mt-2">Awaiting approval</p>
              </div>
              <div className="bg-neutral-800 rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-4">Content</h3>
                <div className="flex gap-8">
                  <div>
                    <div className="text-2xl font-bold text-white">{stats.totalVideos}</div>
                    <p className="text-neutral-400 text-sm">Videos</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">{stats.totalTasks}</div>
                    <p className="text-neutral-400 text-sm">Tasks</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Users Tab */}
        {activeTab === "users" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">User Management</h2>
            </div>

            {/* Add Coins Form */}
            <div className="bg-neutral-800 rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-4">Adjust User Coins</h3>
              <form onSubmit={handleAdjustCoins} className="flex flex-wrap gap-4">
                <select
                  value={coinAdjustment.userId}
                  onChange={(e) => setCoinAdjustment({ ...coinAdjustment, userId: Number(e.target.value) })}
                  className="px-4 py-2 bg-neutral-900 border border-white/10 rounded-lg text-white"
                  required
                >
                  <option value={0}>Select User</option>
                  {users.map((u) => (
                    <option key={u.id} value={u.id}>
                      {u.username} ({u.coins.toFixed(2)} coins)
                    </option>
                  ))}
                </select>
                <input
                  type="number"
                  step="0.01"
                  placeholder="Amount (+/-)"
                  value={coinAdjustment.amount || ""}
                  onChange={(e) => setCoinAdjustment({ ...coinAdjustment, amount: Number(e.target.value) })}
                  className="px-4 py-2 bg-neutral-900 border border-white/10 rounded-lg text-white w-32"
                  required
                />
                <input
                  type="text"
                  placeholder="Reason"
                  value={coinAdjustment.reason}
                  onChange={(e) => setCoinAdjustment({ ...coinAdjustment, reason: e.target.value })}
                  className="px-4 py-2 bg-neutral-900 border border-white/10 rounded-lg text-white flex-1"
                  required
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 disabled:opacity-50"
                >
                  Adjust
                </button>
              </form>
            </div>

            {/* Users Table */}
            <div className="bg-neutral-800 rounded-xl border border-white/10 overflow-hidden">
              <table className="w-full">
                <thead className="bg-neutral-900">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-400">User</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-400">Email</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-400">Status</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-400">Coins</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-400">Level</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-400">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {users.map((u) => (
                    <tr key={u.id} className="hover:bg-neutral-700/50">
                      <td className="px-4 py-3">
                        <div className="text-white font-medium">{u.username}</div>
                        <div className="text-neutral-400 text-sm">{u.referralCode}</div>
                      </td>
                      <td className="px-4 py-3 text-neutral-300">{u.email}</td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-1 text-xs rounded ${getStatusColor(u.status)}`}>
                          {u.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-emerald-400">{u.coins.toFixed(2)}</td>
                      <td className="px-4 py-3 text-neutral-300">L{u.level}</td>
                      <td className="px-4 py-3">
                        <div className="flex gap-2">
                          {u.status === "pending" && (
                            <button
                              onClick={() => handleApproveUser(u.id)}
                              disabled={loading}
                              className="px-3 py-1 text-xs bg-emerald-500/20 text-emerald-400 rounded hover:bg-emerald-500/30"
                            >
                              Approve
                            </button>
                          )}
                          {u.status !== "suspended" ? (
                            <button
                              onClick={() => handleSuspendUser(u.id)}
                              disabled={loading}
                              className="px-3 py-1 text-xs bg-red-500/20 text-red-400 rounded hover:bg-red-500/30"
                            >
                              Suspend
                            </button>
                          ) : (
                            <button
                              onClick={() => handleActivateUser(u.id)}
                              disabled={loading}
                              className="px-3 py-1 text-xs bg-emerald-500/20 text-emerald-400 rounded hover:bg-emerald-500/30"
                            >
                              Activate
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Videos Tab */}
        {activeTab === "videos" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Video Management</h2>

            {/* Add Video Form */}
            <div className="bg-neutral-800 rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-4">Add New Video</h3>
              <form onSubmit={handleAddVideo} className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Video Title"
                  value={videoForm.title}
                  onChange={(e) => setVideoForm({ ...videoForm, title: e.target.value })}
                  className="px-4 py-2 bg-neutral-900 border border-white/10 rounded-lg text-white"
                  required
                />
                <input
                  type="url"
                  placeholder="Video URL"
                  value={videoForm.url}
                  onChange={(e) => setVideoForm({ ...videoForm, url: e.target.value })}
                  className="px-4 py-2 bg-neutral-900 border border-white/10 rounded-lg text-white"
                  required
                />
                <textarea
                  placeholder="Description"
                  value={videoForm.description}
                  onChange={(e) => setVideoForm({ ...videoForm, description: e.target.value })}
                  className="px-4 py-2 bg-neutral-900 border border-white/10 rounded-lg text-white md:col-span-2"
                  rows={2}
                />
                <input
                  type="number"
                  step="0.01"
                  placeholder="Coins Reward"
                  value={videoForm.coinsReward || ""}
                  onChange={(e) => setVideoForm({ ...videoForm, coinsReward: Number(e.target.value) })}
                  className="px-4 py-2 bg-neutral-900 border border-white/10 rounded-lg text-white"
                  required
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 disabled:opacity-50"
                >
                  Add Video
                </button>
              </form>
            </div>

            {/* Videos List */}
            <div className="grid gap-4">
              {videos.map((video) => (
                <div key={video.id} className="bg-neutral-800 rounded-xl p-4 border border-white/10 flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-medium">{video.title}</h4>
                    <p className="text-neutral-400 text-sm">{video.description}</p>
                    <div className="flex gap-4 mt-2 text-sm">
                      <span className="text-emerald-400">{video.coinsReward} coins</span>
                      <span className={`px-2 py-0.5 rounded ${getStatusColor(video.status)}`}>
                        {video.status}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleDeleteVideo(video.id)}
                    disabled={loading}
                    className="px-4 py-2 text-sm bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30"
                  >
                    Delete
                  </button>
                </div>
              ))}
              {videos.length === 0 && (
                <div className="text-center text-neutral-400 py-8">No videos yet</div>
              )}
            </div>
          </div>
        )}

        {/* Tasks Tab */}
        {activeTab === "tasks" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Task Management</h2>

            {/* Add Task Form */}
            <div className="bg-neutral-800 rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-4">Add New Task</h3>
              <form onSubmit={handleAddTask} className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Task Title"
                  value={taskForm.title}
                  onChange={(e) => setTaskForm({ ...taskForm, title: e.target.value })}
                  className="px-4 py-2 bg-neutral-900 border border-white/10 rounded-lg text-white"
                  required
                />
                <select
                  value={taskForm.type}
                  onChange={(e) => setTaskForm({ ...taskForm, type: e.target.value })}
                  className="px-4 py-2 bg-neutral-900 border border-white/10 rounded-lg text-white"
                >
                  <option value="survey">Survey</option>
                  <option value="app_download">App Download</option>
                  <option value="signup">Sign Up</option>
                  <option value="offer">Offer</option>
                </select>
                <textarea
                  placeholder="Description"
                  value={taskForm.description}
                  onChange={(e) => setTaskForm({ ...taskForm, description: e.target.value })}
                  className="px-4 py-2 bg-neutral-900 border border-white/10 rounded-lg text-white md:col-span-2"
                  rows={2}
                />
                <input
                  type="number"
                  step="0.01"
                  placeholder="Coins Reward"
                  value={taskForm.coinsReward || ""}
                  onChange={(e) => setTaskForm({ ...taskForm, coinsReward: Number(e.target.value) })}
                  className="px-4 py-2 bg-neutral-900 border border-white/10 rounded-lg text-white"
                  required
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 disabled:opacity-50"
                >
                  Add Task
                </button>
              </form>
            </div>

            {/* Tasks List */}
            <div className="grid gap-4">
              {tasks.map((task) => (
                <div key={task.id} className="bg-neutral-800 rounded-xl p-4 border border-white/10 flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-medium">{task.title}</h4>
                    <p className="text-neutral-400 text-sm">{task.description}</p>
                    <div className="flex gap-4 mt-2 text-sm">
                      <span className="text-cyan-400">{task.type}</span>
                      <span className="text-emerald-400">{task.coinsReward} coins</span>
                      <span className={`px-2 py-0.5 rounded ${getStatusColor(task.status)}`}>
                        {task.status}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleDeleteTask(task.id)}
                    disabled={loading}
                    className="px-4 py-2 text-sm bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30"
                  >
                    Delete
                  </button>
                </div>
              ))}
              {tasks.length === 0 && (
                <div className="text-center text-neutral-400 py-8">No tasks yet</div>
              )}
            </div>
          </div>
        )}

        {/* Redemptions Tab */}
        {activeTab === "redemptions" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Redemption Management</h2>

            {/* Redemptions Table */}
            <div className="bg-neutral-800 rounded-xl border border-white/10 overflow-hidden">
              <table className="w-full">
                <thead className="bg-neutral-900">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-400">ID</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-400">User ID</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-400">Amount</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-400">Method</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-400">Address</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-400">Status</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-neutral-400">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {redemptions.map((r) => (
                    <tr key={r.id} className="hover:bg-neutral-700/50">
                      <td className="px-4 py-3 text-neutral-300">#{r.id}</td>
                      <td className="px-4 py-3 text-neutral-300">User #{r.userId}</td>
                      <td className="px-4 py-3 text-emerald-400 font-medium">{r.amount.toFixed(2)}</td>
                      <td className="px-4 py-3 text-neutral-300">{r.method}</td>
                      <td className="px-4 py-3 text-neutral-400 text-sm max-w-xs truncate">
                        {r.address || "-"}
                      </td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-1 text-xs rounded ${getStatusColor(r.status)}`}>
                          {r.status}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        {r.status === "pending" && (
                          <div className="flex gap-2">
                            <button
                              onClick={() => handleApproveRedemption(r.id)}
                              disabled={loading}
                              className="px-3 py-1 text-xs bg-emerald-500/20 text-emerald-400 rounded hover:bg-emerald-500/30"
                            >
                              Approve
                            </button>
                            <button
                              onClick={() => handleRejectRedemption(r.id)}
                              disabled={loading}
                              className="px-3 py-1 text-xs bg-red-500/20 text-red-400 rounded hover:bg-red-500/30"
                            >
                              Reject
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {redemptions.length === 0 && (
                <div className="text-center text-neutral-400 py-8">No redemptions yet</div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
