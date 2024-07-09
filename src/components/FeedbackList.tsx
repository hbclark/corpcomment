import FeedbackItem from "./FeedbackItem";

const feedbackItem = {
  upvoteCount: 593,
  badgeLetter: "B",
  companyName: "Clark",
  text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa porro impedit veniam quis itaque adipisci!",
  daysAgo: "4d",
};

export default function FeedbackList() {
  return (
    <ol className="feedback-list">
      <FeedbackItem feedbackItem={feedbackItem} />
    </ol>
  );
}
