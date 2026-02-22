import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth";
import { db } from "@/db";
import { users, videos, tasks, redemptions } from "@/db/schema";
import { desc } from "drizzle-orm";
import AdminDashboard from "./AdminDashboard";

export default async function AdminPage() {
  const user = await getCurrentUser();

  if (!user || user.role !== "admin") {
    redirect("/login");
  }

  // Fetch all data for admin dashboard
  const allUsers = await db
    .select()
    .from(users)
    .orderBy(desc(users.createdAt))
    .limit(50);

  const allVideos = await db
    .select()
    .from(videos)
    .orderBy(desc(videos.createdAt));

  const allTasks = await db
    .select()
    .from(tasks)
    .orderBy(desc(tasks.createdAt));

  const allRedemptions = await db
    .select()
    .from(redemptions)
    .orderBy(desc(redemptions.createdAt))
    .limit(50);

  // Calculate stats
  const stats = {
    totalUsers: allUsers.length,
    pendingUsers: allUsers.filter((u) => u.status === "pending").length,
    suspendedUsers: allUsers.filter((u) => u.status === "suspended").length,
    totalCoins: allUsers.reduce((sum, u) => sum + (u.coins || 0), 0),
    pendingRedemptions: allRedemptions.filter((r) => r.status === "pending").length,
    totalVideos: allVideos.length,
    totalTasks: allTasks.length,
  };

  return (
    <AdminDashboard
      adminUser={user}
      users={allUsers}
      videos={allVideos}
      tasks={allTasks}
      redemptions={allRedemptions}
      stats={stats}
    />
  );
}
