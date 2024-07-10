import { useFeedbackItemsStore } from "../stores/feedbackItemsStore";
import FeedbackItem from "./FeedbackItem";
import Spinner from "./Spinner";

export default function FeedbackList() {
  const isLoading = useFeedbackItemsStore((state) => state.isLoading);
  const filteredFeedbackItems = useFeedbackItemsStore((state) =>
    state.getFilteredFeedbackItems()
  );

  return (
    <ol className="feedback-list">
      {isLoading ? <Spinner /> : null}
      {filteredFeedbackItems.map((feedbackItem) => (
        <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
}
