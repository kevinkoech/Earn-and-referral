import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function POST(request: Request) {
  const user = await getCurrentUser();
  
  if (!user || user.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { userId } = await request.json();

  await db
    .update(users)
    .set({ status: "approved" })
    .where(eq(users.id, userId));

  return NextResponse.json({ success: true });
}
