import dotenv from "dotenv";
import path from "path";
import * as z from "zod";

export const envValidationSchema = z.object({
  PORT: z.string().transform(Number),
  NODE_ENV: z.enum(["development", "staging", "production", "test"]),
  DB: z.object({}),
  CACHE: z.object({}),
  QUEUE: z.object({}),
});

const NODE_ENV = process.env.NODE_ENV ?? "development";
dotenv.config({
  path:
    NODE_ENV === "development"
      ? path.resolve(__dirname, "../.env")
      : path.resolve(__dirname, `../.env.${NODE_ENV}`),
});

export default () => ({
  PORT: parseInt(process.env.PORT || "8080", 10),
  NODE_ENV,
  DB: {},
  CACHE: {},
  QUEUE: {},
});
