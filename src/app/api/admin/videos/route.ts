import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { db } from "@/db";
import { videos } from "@/db/schema";
import { eq } from "drizzle-orm";

// Add video
export async function POST(request: Request) {
  const user = await getCurrentUser();
  
  if (!user || user.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { title, description, url, coinsReward } = await request.json();

  const video = await db.insert(videos).values({
    title,
    description: description || null,
    url,
    coinsReward: coinsReward || 0.1,
    status: "active",
  }).returning();

  return NextResponse.json({ success: true, video: video[0] });
}

// Delete video
export async function DELETE(request: Request) {
  const user = await getCurrentUser();
  
  if (!user || user.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "Video ID required" }, { status: 400 });
  }

  await db.delete(videos).where(eq(videos.id, Number(id)));

  return NextResponse.json({ success: true });
}
