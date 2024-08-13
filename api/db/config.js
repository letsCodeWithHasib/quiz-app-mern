import mongoose from "mongoose";

const dbConfig = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("DB Connected");
    })
    .catch((e) => {
      console.log(e);
    });
};

export default dbConfig;
