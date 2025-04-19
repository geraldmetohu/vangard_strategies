// app/lib/zodSchemas.ts
import { z } from "zod";

export const companySchema = z.object({
  name: z.string().min(1, "Name is required"),
  address: z.string().optional(),
  // HTML form will give you "true" or "false" as strings — coerce to actual boolean:
  isClient: z.coerce
    .boolean()
    .optional()
    .default(false),
});
