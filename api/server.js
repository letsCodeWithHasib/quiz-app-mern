import express from "express";
const app = express();
import dotenv from "dotenv";
import connectDB from "./db/config.js";
dotenv.config();
connectDB();

app.get("/api/random", (req, res) => {
  console.log("Ex");
  res.send("Yeh Lo Khush rho");
});

app.listen(process.env.PORT, () => {
  console.log("Sab thik hai");
});
