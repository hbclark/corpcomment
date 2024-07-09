import { TriangleUpIcon } from "@radix-ui/react-icons";

type FeedbackItemProps = {
  upvoteCount: number;
  badgeLetter: string;
  companyName: string;
  text: string;
  daysAgo: string;
};

export default function FeedbackItem({
  feedbackItem,
}: {
  feedbackItem: FeedbackItemProps;
}) {
  return (
    <li className="feedback">
      <button>
        <TriangleUpIcon />
        <span>{feedbackItem.upvoteCount}</span>
      </button>
      <div>
        <p>{feedbackItem.badgeLetter}</p>
      </div>
      <div>
        <p>{feedbackItem.companyName}</p>
        <p>{feedbackItem.text}</p>
      </div>
      <p>{feedbackItem.daysAgo}</p>
    </li>
  );
}
