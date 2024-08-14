import mongoose from "mongoose";

const { Schema } = mongoose;

const testSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    questions: [
      {
        type: Schema.Types.ObjectId,
        ref: "Question",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Test = mongoose.model("Test", testSchema);

export default Test;
