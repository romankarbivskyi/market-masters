import dotenv from "dotenv";

dotenv.config();

export const {
  PORT,
  CLIENT_URL,
  SERVER_URL,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  JWT_SECRET,
} = process.env;
