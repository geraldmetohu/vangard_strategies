// app/lib/zodSchemas.ts
import { z } from "zod";

export const companySchema = z.object({
  companyId: z.string(),
  name: z.string().min(1, "Name is required"),
  address: z.string().optional(),
  isClient: z
    .string()
    .transform((val) => val === "true") // HTML form booleans come through as strings
    .optional()

});
