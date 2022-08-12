import { useState, useContext, useEffect } from "react";
import Card from "./share/card.component";
import FeedbackContext from "../context/feedbackContext.context";
import RatingSelect from "./ratingSelect.component";
import Button from "./button.component";

function FeedbackForm() {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const { addFeedback, feedbackEdit } = useContext(FeedbackContext);

  useEffect(() => {
    //check to if feedbackEdit has something in it
    if (feedbackEdit.edit === true) {
      //enable submit button, set text and rating
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const handleTextChange = (e) => {
    //Check if text == ' ', display message and btn disabled
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setMessage("Text must be at least 10 characters");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }

    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };

      addFeedback(newFeedback);
      setText("");
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <RatingSelect select={(rating) => setRating(rating)} />
        <h2>How would you rate your service with us?</h2>
        {/*@todo - rating select component */}
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Submit
          </Button>
          <div>{message && <div className="message">{message}</div>}</div>
        </div>
      </form>
    </Card>
  );
}

export default FeedbackForm;
