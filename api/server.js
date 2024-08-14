import express from "express";
import dotenv from "dotenv";
import { NotFoundError } from "./utils/custromError.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();
dotenv.config();

//connecting database
import connectDB from "./db/config.js";
connectDB();

//middlewares
app.use(express.json());

app.get("/api/test", (req, res) => {
  res.send("Yeh Lo Khush rho");
});

//not Found
app.use((req, res, next) => {
  next(new NotFoundError("Route does not exist"));
});

//handling errors
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log("Sab thik hai");
});
