import { db } from "./index";
import { users } from "./schema";
import { createHash, randomBytes } from "crypto";

// Hash password using SHA-256
function hashPassword(password: string): string {
  return createHash("sha256").update(password).digest("hex");
}

// Generate referral code
function generateReferralCode(): string {
  return randomBytes(4).toString("hex").toUpperCase();
}

async function seed() {
  console.log("Seeding database...");

  // Create admin user
  const adminPassword = hashPassword("KevinKoech.1");
  
  try {
    await db.insert(users).values({
      username: "kevin",
      email: "admin@earnhub.com",
      password: adminPassword,
      role: "admin",
      status: "approved",
      coins: 0,
      referralCode: "ADMIN01",
      level: 1,
      xp: 0,
    });
    console.log("Admin user created: username=kevin, password=KevinKoech.1");
  } catch (error) {
    console.log("Admin user already exists or error:", error);
  }

  console.log("Seed complete!");
}

seed();
