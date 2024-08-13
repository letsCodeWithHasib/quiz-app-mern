import express from "express";
const app = express();
import dotenv from "dotenv";
import connectDB from "./db/config.js";
dotenv.config();
connectDB();

app.listen(process.env.PORT, () => {
  console.log("Sab thik hai");
});
