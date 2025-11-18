import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

// Minimal env (EmailJS removed). All previously required client vars dropped.
export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  },
  client: {
    // no public vars needed now
  },
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
  },
  skipValidation: true, // skip strict validation to prevent build errors
  emptyStringAsUndefined: true,
});
