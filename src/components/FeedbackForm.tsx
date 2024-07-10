import { useState } from "react";
import { MAX_CHARACTERS } from "../lib/constants";

export default function FeedbackForm({
  onAddToList,
}: {
  onAddToList: (text: string) => void;
}) {
  const [text, setText] = useState("");
  const charCount = MAX_CHARACTERS - text.length;
  const [showValidIndicator, setShowValidIndicator] = useState(false);
  const [showInvalidIndicator, setShowInvalidIndicator] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    if (newText.length > MAX_CHARACTERS) {
      return;
    }

    if (newText.toLowerCase().includes("<script>")) {
      {
        return newText.replace("<script>", "");
      }
    }

    setText(newText);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (text.includes("#") && text.length > 6) {
      setShowValidIndicator(true);
      setTimeout(() => {
        setShowValidIndicator(false);
      }, 2000);
    } else {
      setShowInvalidIndicator(true);
      setTimeout(() => {
        setShowInvalidIndicator(false);
      }, 2000);
      return;
    }
    onAddToList(text);
    setText("");
  };

  return (
    <form
      className={`form ${showValidIndicator ? "form--valid" : ""}  ${
        showInvalidIndicator ? "for--invalid" : ""
      } `}
      onSubmit={handleSubmit}
    >
      <textarea
        id="feedback-textarea"
        placeholder="111"
        spellCheck={false}
        value={text}
        onChange={handleChange}
      />
      <label htmlFor="feedback-textarea">
        Enter your feedback here, remember to #hashtag the company name.
      </label>
      <div>
        <p className="u-italic">{charCount}</p>
        <button>
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
}
