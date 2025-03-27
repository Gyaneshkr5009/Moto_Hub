import { defineConfig } from "drizzle-kit";
export default defineConfig({
    schema: "./configs/schema.js",
    out:"./drizzle",
    dialect: 'postgresql',
    dbCredentials: {
        url:'postgresql://neondb_owner:npg_6wSiWjJl5rXh@ep-long-snow-a57x1icz-pooler.us-east-2.aws.neon.tech/car_hub_app?sslmode=require',
    }
});