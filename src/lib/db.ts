import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const mongodbUri = process.env.MONGODB_URI || "";
mongoose.connect(mongodbUri);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

export default mongoose;
