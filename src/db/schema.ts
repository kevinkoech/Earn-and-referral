import { sqliteTable, text, integer, real } from "drizzle-orm/sqlite-core";

// Users table - stores all user accounts
export const users = sqliteTable("users", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  username: text("username").notNull().unique(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  role: text("role").notNull().default("user"), // "admin" or "user"
  status: text("status").notNull().default("pending"), // "pending", "approved", "suspended"
  coins: real("coins").notNull().default(0),
  referralCode: text("referral_code").notNull().unique(),
  referredBy: integer("referred_by"),
  level: integer("level").notNull().default(1),
  xp: integer("xp").notNull().default(0),
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn((): Date => new Date()),
});

// Videos table - for video content management
export const videos = sqliteTable("videos", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
  description: text("description"),
  url: text("url").notNull(),
  thumbnail: text("thumbnail"),
  coinsReward: real("coins_reward").notNull().default(0.1),
  duration: integer("duration"), // in seconds
  status: text("status").notNull().default("active"), // "active", "inactive"
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
});

// Tasks table - for various earning tasks
export const tasks = sqliteTable("tasks", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
  description: text("description"),
  type: text("type").notNull(), // "survey", "app_download", "signup", "offer"
  coinsReward: real("coins_reward").notNull().default(0),
  status: text("status").notNull().default("active"), // "active", "inactive"
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
});

// User task completions - tracks which tasks users have completed
export const userTasks = sqliteTable("user_tasks", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  userId: integer("user_id").notNull().references(() => users.id),
  taskId: integer("task_id").notNull().references(() => tasks.id),
  completedAt: integer("completed_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
});

// Video watches - tracks video views
export const videoWatches = sqliteTable("video_watches", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  userId: integer("user_id").notNull().references(() => users.id),
  videoId: integer("video_id").notNull().references(() => videos.id),
  watchedAt: integer("watched_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
});

// Redemptions - withdrawal requests
export const redemptions = sqliteTable("redemptions", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  userId: integer("user_id").notNull().references(() => users.id),
  amount: real("amount").notNull(),
  method: text("method").notNull(), // "paypal", "bank", "crypto"
  address: text("address"), // paypal email, bank account, or crypto wallet
  status: text("status").notNull().default("pending"), // "pending", "approved", "rejected"
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
  processedAt: integer("processed_at", { mode: "timestamp" }),
});

// Transactions - coin history
export const transactions = sqliteTable("transactions", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  userId: integer("user_id").notNull().references(() => users.id),
  type: text("type").notNull(), // "earning", "referral", "redemption", "bonus", "admin"
  amount: real("amount").notNull(),
  description: text("description"),
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
});

// Sessions - for authentication
export const sessions = sqliteTable("sessions", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  userId: integer("user_id").notNull().references(() => users.id),
  token: text("token").notNull().unique(),
  expiresAt: integer("expires_at", { mode: "timestamp" }).notNull(),
  createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
});
