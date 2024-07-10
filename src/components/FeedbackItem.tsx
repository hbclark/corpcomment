import { TriangleUpIcon } from "@radix-ui/react-icons";
import { TFeedbackItem } from "../lib/types";
import { useState } from "react";

export default function FeedbackItem({
  feedbackItem,
}: {
  feedbackItem: TFeedbackItem;
}) {
  const [open, setOpen] = useState(false);
  const [upvoteCount, setUpvoteCount] = useState(feedbackItem.upvoteCount);

  return (
    <li
      onClick={() => setOpen(!open)}
      className={`feedback ${open ? "feedback--expand" : ""} `}
    >
      <button
        onClick={(event) => {
          event.stopPropagation();
          setUpvoteCount((prev) => prev + 1);
          event.currentTarget.disabled = true;
        }}
      >
        <TriangleUpIcon />
        <span>{upvoteCount}</span>
      </button>
      <div>
        <p>{feedbackItem.badgeLetter}</p>
      </div>
      <div>
        <p>{feedbackItem.company}</p>
        <p>{feedbackItem.text}</p>
      </div>
      <p>{feedbackItem.daysAgo === 0 ? "NEW" : `${feedbackItem.daysAgo}d`}</p>
    </li>
  );
}
