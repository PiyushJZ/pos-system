import dotenv from "dotenv";
import path from "path";
import * as z from "zod";

const NODE_ENV = process.env.NODE_ENV ?? "development";
dotenv.config({
  path:
    NODE_ENV === "development"
      ? path.resolve(__dirname, "../.env")
      : path.resolve(__dirname, `../.env.${NODE_ENV}`),
});

export const envValidationSchema = z.object({
  PORT: z.string().transform(Number),
  NODE_ENV: z
    .enum(["development", "staging", "production", "test"])
    .default("development"),
  DB: z.object({
    DB_HOST: z.string().default("http://localhost:5432"),
    DB_NAME: z.string().default("posdb"),
    DB_USER: z.string().default("piyush"),
    DB_PASSWORD: z.string().default("Passw0rd"),
  }),
  CACHE: z.object({}),
  QUEUE: z.object({}),
});

type EnvType = z.infer<typeof envValidationSchema>;

export const config = (): EnvType => ({
  PORT: parseInt(process.env.PORT || "8080", 10),
  NODE_ENV: NODE_ENV as EnvType["NODE_ENV"],
  DB: {
    DB_HOST: process.env.DB_HOST as EnvType["DB"]["DB_HOST"],
    DB_NAME: process.env.DB_HOST as EnvType["DB"]["DB_NAME"],
    DB_USER: process.env.DB_USER as EnvType["DB"]["DB_USER"],
    DB_PASSWORD: process.env.DB_PASSWORD as EnvType["DB"]["DB_PASSWORD"],
  },
  CACHE: {},
  QUEUE: {},
});
