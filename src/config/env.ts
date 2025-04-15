import { config } from "dotenv";

config({ path: `.env.${ process.env.NODE_ENV || 'development' }.local` });

export const {
  PORT,
  SERVER_URL,
  NODE_ENV,
  DB_URI,
  ARCJET_KEY,
  ARCJET_ENV
} = process.env;
