import mongoose from "./db";

const feedbackSchema = new mongoose.Schema({
  upvoteCount: Number,
  badgeLetter: String,
  companyName: String,
  text: String,
  daysAgo: String,
});

const Feedback =
  mongoose.models?.Feedback ?? mongoose.model("Feedback", feedbackSchema);

export default Feedback;
