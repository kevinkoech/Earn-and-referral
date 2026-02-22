import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { db } from "@/db";
import { redemptions, users, transactions } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function POST(request: Request) {
  const user = await getCurrentUser();
  
  if (!user || user.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { redemptionId } = await request.json();

  // Get redemption
  const redemption = await db
    .select()
    .from(redemptions)
    .where(eq(redemptions.id, redemptionId))
    .limit(1);

  if (!redemption.length) {
    return NextResponse.json({ error: "Redemption not found" }, { status: 404 });
  }

  // Update redemption status
  await db
    .update(redemptions)
    .set({ status: "rejected", processedAt: new Date() })
    .where(eq(redemptions.id, redemptionId));

  // Refund coins to user
  const currentUser = await db
    .select()
    .from(users)
    .where(eq(users.id, redemption[0].userId))
    .limit(1);

  if (currentUser.length) {
    await db
      .update(users)
      .set({ coins: (currentUser[0].coins || 0) + redemption[0].amount })
      .where(eq(users.id, redemption[0].userId));

    // Record transaction
    await db.insert(transactions).values({
      userId: redemption[0].userId,
      type: "admin",
      amount: redemption[0].amount,
      description: "Redemption rejected - coins refunded",
    });
  }

  return NextResponse.json({ success: true });
}
