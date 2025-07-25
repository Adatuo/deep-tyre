import { integer, pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const chatsTable = pgTable("chats", {
  id: serial("id").primaryKey(),
  userId: text("user_id").notNull(),
  title: text("title").notNull(),
  model: text("model").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const messagesTable = pgTable("messages", {
  id: serial("id").primaryKey(),
  chatId: integer("chat_id").references(() => chatsTable.id),
  role: text("role").notNull(),
  content: text("content").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export type ChatModel=typeof chatsTable.$inferSelect
export type MessagesModel=typeof messagesTable.$inferSelect