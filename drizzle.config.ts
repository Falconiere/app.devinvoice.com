import "dotenv/config";

 // TODO: Create validation with ZOd for the variables
const connectionString = process.env.DATABASE_URL as string;

import { defineConfig } from "drizzle-kit";
export default defineConfig({
  dialect: "postgresql", // "mysql" | "sqlite" | "postgresql"
  schema: "./src/database/schemas/*",
  out: "./drizzle",
  dbCredentials: {
    url:connectionString
  }
});