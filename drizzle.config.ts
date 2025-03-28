import "dotenv/config";
import { defineConfig } from "drizzle-kit";


if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is missing');
}

export default defineConfig({
    dialect: "postgresql",
    dbCredentials: {
        url: process.env.DATABASE_URL!,
    },
    schema: "./db/schema.ts",
    out: "./db/generated",
});