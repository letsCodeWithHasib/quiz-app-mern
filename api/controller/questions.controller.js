import questionModel from "../model/question.model.js";
import asyncHandler from "../utils/asyncHandlers.js";

const createQuestions = asyncHandler((req, res, next) => {
  const { question, options, correctAnswer, difficulty, category } = req.body;
});
