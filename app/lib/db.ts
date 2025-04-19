// app/lib/db.ts
import { PrismaClient } from "@prisma/client";

declare global {
  // ensure we reuse the client in dev to avoid connection storms
  // eslint-disable-next-line no-var
  var __prisma: PrismaClient | undefined;
}

export const prisma =
  global.__prisma ??
  new PrismaClient({
    // you can adjust log levels here if you like
    log: ["query", "warn"],
  });

if (process.env.NODE_ENV !== "production") global.__prisma = prisma;
