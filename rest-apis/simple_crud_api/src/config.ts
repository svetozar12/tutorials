import * as mongoose from "mongoose";

const mongoUrl = "mongodb://localhost:27017/tutorial_db";

export const connect = async () => {
  try {
    await mongoose.connect(mongoUrl);
    console.log("Connected to the db !");
  } catch (error) {
    console.log("Db error");
  }
};
