import mongoose from "mongoose";
const { Schema } = mongoose;

const questionSchema = new Schema({
  question: {
    type: String,
    required: true,
    unique: true,
  },
  options: {
    a: {
      type: String,
      required: true,
    },
    b: {
      type: String,
      required: true,
    },
    c: {
      type: String,
      required: true,
    },
    d: {
      type: String,
      required: true,
    },
    c: {
      type: String,
    },
    d: {
      type: String,
    },
  },
  correctAnswer: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    enum: ["easy", "medium", "hard"],
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  tags: [String],
  explanation: {
    type: String,
    required: false,
  },
  test: {
    type: Schema.Types.ObjectId,
    ref: "Test",
    required: true,
  },
});

const Question = mongoose.model("Question", questionSchema);

export default Question;
