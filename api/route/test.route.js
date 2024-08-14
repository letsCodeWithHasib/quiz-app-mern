import express from "express";
const router = express.Router();

import { createTest, getTest } from "../controller/test.controller.js";

router.route("/").get(getTest).post(createTest);

export default router;
