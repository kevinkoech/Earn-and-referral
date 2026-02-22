import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { db } from "@/db";
import { users, transactions } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function POST(request: Request) {
  const user = await getCurrentUser();
  
  if (!user || user.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { userId, amount, reason } = await request.json();

  // Get current user coins
  const targetUser = await db
    .select()
    .from(users)
    .where(eq(users.id, userId))
    .limit(1);

  if (!targetUser.length) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const newCoins = (targetUser[0].coins || 0) + amount;

  // Update user coins
  await db
    .update(users)
    .set({ coins: Math.max(0, newCoins) })
    .where(eq(users.id, userId));

  // Record transaction
  await db.insert(transactions).values({
    userId,
    type: "admin",
    amount,
    description: `Admin adjustment: ${reason}`,
  });

  return NextResponse.json({ success: true, newCoins: Math.max(0, newCoins) });
}
