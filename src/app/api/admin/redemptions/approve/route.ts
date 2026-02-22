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
    .set({ status: "approved", processedAt: new Date() })
    .where(eq(redemptions.id, redemptionId));

  // Record transaction
  await db.insert(transactions).values({
    userId: redemption[0].userId,
    type: "redemption",
    amount: -redemption[0].amount,
    description: `Redemption approved via ${redemption[0].method}`,
  });

  return NextResponse.json({ success: true });
}
