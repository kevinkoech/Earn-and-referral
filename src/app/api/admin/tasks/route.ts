import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { db } from "@/db";
import { tasks } from "@/db/schema";
import { eq } from "drizzle-orm";

// Add task
export async function POST(request: Request) {
  const user = await getCurrentUser();
  
  if (!user || user.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { title, description, type, coinsReward } = await request.json();

  const task = await db.insert(tasks).values({
    title,
    description: description || null,
    type,
    coinsReward: coinsReward || 0.5,
    status: "active",
  }).returning();

  return NextResponse.json({ success: true, task: task[0] });
}

// Delete task
export async function DELETE(request: Request) {
  const user = await getCurrentUser();
  
  if (!user || user.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "Task ID required" }, { status: 400 });
  }

  await db.delete(tasks).where(eq(tasks.id, Number(id)));

  return NextResponse.json({ success: true });
}
