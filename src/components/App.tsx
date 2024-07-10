import Footer from "./Footer";
import Container from "./Container";
import HashtagList from "./HashtagList";
import { useFeedbackItemsStore } from "../stores/feedbackItemsStore";
import { useEffect } from "react";

function App() {
  const fetchFeedbackItems = useFeedbackItemsStore(
    (state) => state.fetchFeedbackItems
  );
  useEffect(() => {
    fetchFeedbackItems();
  }, [fetchFeedbackItems]);

  return (
    <div className="app">
      <Footer />
      <Container />

      <HashtagList />
    </div>
  );
}

export default App;
