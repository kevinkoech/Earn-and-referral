import { db } from "@/db";
import { users, sessions } from "@/db/schema";
import { eq } from "drizzle-orm";
import { cookies } from "next/headers";
import { randomBytes, createHash } from "crypto";

// Hash password using SHA-256
export function hashPassword(password: string): string {
  return createHash("sha256").update(password).digest("hex");
}

// Generate a secure session token
export function generateToken(): string {
  return randomBytes(32).toString("hex");
}

// Create a session for a user
export async function createSession(userId: number): Promise<string> {
  const token = generateToken();
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days

  await db.insert(sessions).values({
    userId,
    token,
    expiresAt,
  });

  return token;
}

// Get current user from session
export async function getCurrentUser() {
  const cookieStore = await cookies();
  const token = cookieStore.get("session")?.value;

  if (!token) return null;

  const session = await db
    .select()
    .from(sessions)
    .where(eq(sessions.token, token))
    .limit(1);

  if (!session.length || session[0].expiresAt < new Date()) {
    return null;
  }

  const user = await db
    .select()
    .from(users)
    .where(eq(users.id, session[0].userId))
    .limit(1);

  return user[0] || null;
}

// Login user
export async function loginUser(username: string, password: string) {
  const hashedPassword = hashPassword(password);

  const user = await db
    .select()
    .from(users)
    .where(eq(users.username, username))
    .limit(1);

  if (!user.length || user[0].password !== hashedPassword) {
    return { error: "Invalid username or password" };
  }

  if (user[0].status === "suspended") {
    return { error: "Account suspended. Please contact support." };
  }

  const token = await createSession(user[0].id);

  const cookieStore = await cookies();
  cookieStore.set("session", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 7 * 24 * 60 * 60, // 7 days
  });

  return { user: user[0] };
}

// Logout user
export async function logoutUser() {
  const cookieStore = await cookies();
  const token = cookieStore.get("session")?.value;

  if (token) {
    await db.delete(sessions).where(eq(sessions.token, token));
  }

  cookieStore.delete("session");
}

// Check if user is admin
export async function isAdmin() {
  const user = await getCurrentUser();
  return user?.role === "admin";
}

// Generate referral code
export function generateReferralCode(): string {
  return randomBytes(4).toString("hex").toUpperCase();
}
