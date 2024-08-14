import asyncHandler from "../utils/asyncHandlers.js";
import { ValidationError } from "../utils/custromError.js";
import testModel from "../model/test.model.js";

const createTest = asyncHandler(async (req, res, next) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return ValidationError("Validation error");
  }

  const test = await testModel.create({ title, description });
  res.status(201).json({
    status: "success",
    statusCode: 201,
    message: "Test Created Successfully",
  });
});

const getTest = asyncHandler(async (req, res, next) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return ValidationError("Validation error");
  }

  const test = await testModel.create({ title, description });
  res.status(201).json({
    status: "success",
    statusCode: 201,
    message: "Test Created Successfully",
  });
});

export { getTest, createTest };
